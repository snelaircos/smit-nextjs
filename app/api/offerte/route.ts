import { Resend } from "resend";
import { getService } from "@/lib/data/services";

// Ontvanger en afzender zijn instelbaar via .env op de VPS.
// OFFERTE_VAN moet een adres zijn op een domein dat in Resend geverifieerd is.
const NAAR = process.env.OFFERTE_NAAR ?? "k.smitinstallatietechniek@outlook.com";
const VAN = process.env.OFFERTE_VAN ?? "SMIT Installatie Techniek <noreply@snellio.nl>";

type Body = {
  naam?: unknown;
  telefoon?: unknown;
  email?: unknown;
  postcode?: unknown;
  dienst?: unknown;
  omschrijving?: unknown;
  website?: unknown; // honeypot — echte bezoekers laten dit leeg
};

function clean(v: unknown, max: number): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function esc(s: string): string {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] ?? c
  );
}

function dienstLabel(slug: string): string {
  if (!slug) return "Niet opgegeven";
  if (slug === "anders") return "Anders / combinatie";
  return getService(slug)?.name ?? slug;
}

function fout(message: string, status: number) {
  return Response.json({ ok: false, error: message }, { status });
}

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return fout("Ongeldige aanvraag.", 400);
  }

  // Spam-bots vullen het verborgen veld in: doen alsof het gelukt is, niets versturen.
  if (clean(body.website, 200)) {
    return Response.json({ ok: true });
  }

  const naam = clean(body.naam, 120);
  const telefoon = clean(body.telefoon, 40);
  const email = clean(body.email, 160);
  const postcode = clean(body.postcode, 20);
  const dienst = clean(body.dienst, 60);
  const omschrijving = clean(body.omschrijving, 4000);

  if (!naam || !telefoon || !omschrijving) {
    return fout("Vul uw naam, telefoonnummer en een omschrijving in.", 400);
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return fout("Het e-mailadres lijkt niet te kloppen.", 400);
  }

  const ontvangen = new Date().toLocaleString("nl-NL", { timeZone: "Europe/Amsterdam" });
  const lead = { naam, telefoon, email, postcode, dienst, omschrijving, ontvangen };

  // Altijd loggen (komt in /var/log/pm2/smit-site-out.log) zodat een aanvraag
  // nooit verloren gaat, ook niet als de e-mail onverhoopt niet aankomt.
  console.log("[OFFERTE]", JSON.stringify(lead));

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[OFFERTE] RESEND_API_KEY ontbreekt — e-mail niet verstuurd");
    return fout("Verzenden is op dit moment niet mogelijk.", 500);
  }

  const label = dienstLabel(dienst);
  const onderwerp = `Nieuwe offerteaanvraag – ${label} – ${naam}`;

  const tekst = [
    "Nieuwe offerteaanvraag via smit-installatie-techniek.nl",
    "",
    `Naam:        ${naam}`,
    `Telefoon:    ${telefoon}`,
    `E-mail:      ${email || "-"}`,
    `Postcode:    ${postcode || "-"}`,
    `Dienst:      ${label}`,
    `Ontvangen:   ${ontvangen}`,
    "",
    "Omschrijving:",
    omschrijving,
  ].join("\n");

  const rij = (k: string, v: string) =>
    `<tr><td style="padding:6px 12px 6px 0;color:#64748b;white-space:nowrap;vertical-align:top">${k}</td><td style="padding:6px 0">${v}</td></tr>`;

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#0f1f3d;line-height:1.5">
      <h2 style="margin:0 0 16px">Nieuwe offerteaanvraag</h2>
      <table style="border-collapse:collapse">
        ${rij("Naam", esc(naam))}
        ${rij("Telefoon", `<a href="tel:${esc(telefoon.replace(/\s/g, ""))}">${esc(telefoon)}</a>`)}
        ${rij("E-mail", email ? `<a href="mailto:${esc(email)}">${esc(email)}</a>` : "-")}
        ${rij("Postcode", esc(postcode) || "-")}
        ${rij("Dienst", esc(label))}
        ${rij("Ontvangen", esc(ontvangen))}
      </table>
      <h3 style="margin:20px 0 8px">Omschrijving</h3>
      <p style="white-space:pre-wrap;margin:0;padding:12px;background:#f8fafc;border-radius:8px">${esc(omschrijving)}</p>
      <p style="margin-top:24px;color:#94a3b8;font-size:12px">Verstuurd via het offerteformulier op smit-installatie-techniek.nl</p>
    </div>`;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: VAN,
    to: NAAR,
    replyTo: email || undefined,
    subject: onderwerp,
    text: tekst,
    html,
  });

  if (error) {
    console.error("[OFFERTE] Resend fout:", JSON.stringify(error));
    return fout("Verzenden is niet gelukt.", 502);
  }

  return Response.json({ ok: true });
}
