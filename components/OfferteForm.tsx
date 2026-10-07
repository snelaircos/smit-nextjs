"use client";

import { useState } from "react";

type Props = { dienst?: string };

export default function OfferteForm({ dienst }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    naam: "",
    telefoon: "",
    email: "",
    postcode: "",
    dienst: dienst ?? "",
    omschrijving: "",
    website: "", // honeypot — blijft leeg bij echte bezoekers
  });

  function handle(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const res = await fetch("/api/offerte", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setError(data.error ?? "Verzenden is niet gelukt.");
        return;
      }
      setSubmitted(true);
    } catch {
      setError("Verzenden is niet gelukt.");
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-green-900 mb-2">Aanvraag ontvangen!</h3>
        <p className="text-green-700 text-sm">
          Bedankt voor uw aanvraag. Kevin neemt zo snel mogelijk contact met u op — meestal binnen één werkdag.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      {/* Honeypot tegen spam — onzichtbaar voor bezoekers, bots vullen het wel in */}
      <div className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website" name="website" type="text" tabIndex={-1} autoComplete="off"
          value={form.website} onChange={handle}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="naam" className="block text-sm font-medium text-gray-700 mb-1">
            Naam <span className="text-red-500">*</span>
          </label>
          <input
            id="naam" name="naam" type="text" required
            value={form.naam} onChange={handle}
            placeholder="Uw voor- en achternaam"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1d6fe8] focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="telefoon" className="block text-sm font-medium text-gray-700 mb-1">
            Telefoonnummer <span className="text-red-500">*</span>
          </label>
          <input
            id="telefoon" name="telefoon" type="tel" required
            value={form.telefoon} onChange={handle}
            placeholder="06 - xxxxxxxx"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1d6fe8] focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            E-mailadres
          </label>
          <input
            id="email" name="email" type="email"
            value={form.email} onChange={handle}
            placeholder="uw@email.nl"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1d6fe8] focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-1">
            Postcode
          </label>
          <input
            id="postcode" name="postcode" type="text"
            value={form.postcode} onChange={handle}
            placeholder="1234 AB"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1d6fe8] focus:border-transparent"
          />
        </div>
      </div>

      {!dienst && (
        <div>
          <label htmlFor="dienst" className="block text-sm font-medium text-gray-700 mb-1">
            Waarvoor wilt u een offerte?
          </label>
          <select
            id="dienst" name="dienst"
            value={form.dienst} onChange={handle}
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1d6fe8] focus:border-transparent bg-white"
          >
            <option value="">Selecteer een dienst</option>
            <option value="dakwerk">Dakwerk</option>
            <option value="zinkwerk">Zinkwerk</option>
            <option value="sanitair">Sanitair</option>
            <option value="cv-installatie">CV-installatie</option>
            <option value="gasinstallatie">Gasinstallatie</option>
            <option value="anders">Anders / combinatie</option>
          </select>
        </div>
      )}

      <div>
        <label htmlFor="omschrijving" className="block text-sm font-medium text-gray-700 mb-1">
          Omschrijving van de werkzaamheden <span className="text-red-500">*</span>
        </label>
        <textarea
          id="omschrijving" name="omschrijving" required rows={4}
          value={form.omschrijving} onChange={handle}
          placeholder="Beschrijf kort wat er gedaan moet worden..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1d6fe8] focus:border-transparent resize-none"
        />
      </div>

      {error && (
        <div role="alert" className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">
          <p className="font-semibold mb-1">{error}</p>
          <p>
            Bel ons op{" "}
            <a href="tel:0629528454" className="font-semibold underline">06 - 29528454</a>
            {" "}of mail naar{" "}
            <a href="mailto:k.smitinstallatietechniek@outlook.com" className="font-semibold underline break-all">
              k.smitinstallatietechniek@outlook.com
            </a>.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={sending}
        className="w-full bg-[#1d6fe8] text-white font-semibold py-3.5 rounded-lg hover:bg-blue-600 transition-colors text-sm disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {sending ? "Versturen..." : "Offerte aanvragen →"}
      </button>
      <p className="text-xs text-gray-400 text-center">
        Vrijblijvend · Geen verplichtingen · Reactie binnen 1 werkdag
      </p>
    </form>
  );
}
