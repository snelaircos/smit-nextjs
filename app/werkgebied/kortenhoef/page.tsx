import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import OfferteForm from "@/components/OfferteForm";
import { services } from "@/lib/data/services";
import { localBusiness, breadcrumbSchema, faqSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Installateur Kortenhoef | SMIT Installatie Techniek – Uw lokale vakman",
  description:
    "SMIT Installatie Techniek in Kortenhoef. Uw lokale installateur voor dakwerk, zinkwerk, sanitair, CV en gas. Snel, betrouwbaar en eerlijk.",
  alternates: { canonical: "https://www.smit-installatie-techniek.nl/werkgebied/kortenhoef" },
  openGraph: {
    title: "Installateur Kortenhoef | SMIT Installatie Techniek",
    description: "Uw lokale installateur in Kortenhoef voor dakwerk, sanitair, CV en meer.",
    locale: "nl_NL",
    type: "website",
  },
};

const faq = [
  {
    q: "Is SMIT Installatie Techniek echt gevestigd in Kortenhoef?",
    a: "Ja. Kevin Smit woont en werkt in Kortenhoef. We zijn als geen ander bekend met de woningen, installaties en omstandigheden in het dorp en de directe omgeving.",
  },
  {
    q: "Hoe snel bent u ter plaatse in Kortenhoef?",
    a: "Als lokaal bedrijf zijn we in Kortenhoef doorgaans binnen enkele uren bij u. Bij spoed reageren we dezelfde dag.",
  },
  {
    q: "Werken jullie ook voor VvE's en bedrijfspanden in Kortenhoef?",
    a: "Ja. We werken voor particulieren, VvE's en kleine bedrijfspanden in Kortenhoef en directe omgeving.",
  },
  {
    q: "Kunnen jullie meerdere klussen tegelijk uitvoeren?",
    a: "Zeker. Als u meerdere zaken wilt laten aanpakken — bijvoorbeeld dakwerk én sanitair — plannen we dat efficiënt in en werken we alles in één of meerdere bezoeken af.",
  },
  {
    q: "Geven jullie garantie op het werk?",
    a: "Ja. Op alle werkzaamheden geven we garantie. De exacte termijn bespreken we bij de offerte en vermelden we duidelijk.",
  },
];

export default function KortenhoefPage() {
  const jsonLd = [
    localBusiness,
    breadcrumbSchema([
      { name: "Werkgebied", url: "/werkgebied" },
      { name: "Kortenhoef", url: "/werkgebied/kortenhoef" },
    ]),
    faqSchema(faq),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="bg-[#0f1f3d] text-white py-14 lg:py-20">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: "Werkgebied", href: "/werkgebied" }, { label: "Kortenhoef" }]} />
            <div className="inline-flex items-center gap-2 bg-[#1d6fe8]/20 text-blue-300 text-xs font-semibold px-4 py-2 rounded-full mt-4 mb-5 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
              Gevestigd in Kortenhoef
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight max-w-3xl">
              Uw installateur in Kortenhoef
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-8">
              SMIT Installatie Techniek is gevestigd in Kortenhoef. Kevin Smit kent het dorp op zijn duimpje — de woningtypen, de lokale installaties en de mensen. Als u belt, staat er geen callcenter klaar maar de vakman zelf.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/offerte" className="inline-flex items-center gap-2 bg-[#1d6fe8] text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors text-sm">
                Vrijblijvende offerte →
              </Link>
              <a href="tel:0629528454" className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors text-sm border border-white/20">
                Bel 06-29528454
              </a>
            </div>
          </div>
        </section>

        {/* ── Lokale expertise ──────────────────────────────────── */}
        <section className="py-16 bg-white">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0f1f3d] mb-5">
                    Een vakman uit Kortenhoef zelf
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg border-l-4 border-[#1d6fe8] pl-5 mb-6">
                    Kortenhoef heeft veel woningen gebouwd in de jaren '50 tot '80. Typische bouw met rijtjeshuizen, vrijstaande woningen en bungalows — elk met hun eigen installaties, dakconstructies en sanitairsituaties. Kevin Smit werkt al jaren in en rondom Kortenhoef en kent deze woningen door en door.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Dat maakt een verschil. Een dakdekker die uw woningtype al tientallen keren heeft gezien, loopt niet tegen verrassingen aan. Een loodgieter die het lokale leidingwerk kent, diagnosticeert sneller en werkt efficiënter. SMIT Installatie Techniek combineert lokale kennis met gecertificeerd vakmanschap.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0f1f3d] mb-4">
                    Alle installatieproblemen in Kortenhoef — wij lossen ze op
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-5">
                    Of het nu gaat om een lekkend dak na een hevige regenbui, een defecte cv-ketel in de winter, een druppelende kraan die u al maanden hindert of een badkamer die aan renovatie toe is — SMIT Installatie Techniek is uw eerste aanspreekpunt in Kortenhoef voor alles op het gebied van installatie en dakwerk.
                  </p>
                  <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                    <p className="text-sm font-semibold text-[#0f1f3d] mb-2">Snel ter plaatse, ook bij spoed</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Vanuit Kortenhoef zijn we er in geen tijd. Bij spoedgevallen zoals een gaslek, ernstige lekkage of uitgevallen verwarming zijn we doorgaans dezelfde dag bij u.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0f1f3d] mb-4">
                    Eerlijk, transparant en zonder verborgen kosten
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Kevin Smit geeft altijd een duidelijke offerte vooraf. U weet wat het kost voordat we beginnen — geen verrassingen achteraf. Als reparatie zinvoller is dan vervanging, zeggen we dat eerlijk. Als iets toch complexer blijkt, overleggen we altijd eerst met u. Zo blijft u in controle.
                  </p>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-5">
                <div className="bg-[#0f1f3d] rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-base mb-1">Offerte aanvragen</h3>
                  <p className="text-gray-400 text-sm mb-4">Vrijblijvend, reactie binnen 1 werkdag.</p>
                  <OfferteForm />
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-semibold text-[#0f1f3d] text-sm mb-4 uppercase tracking-wide">Contactgegevens</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <a href="tel:0629528454" className="flex items-center gap-2 text-gray-700 hover:text-[#1d6fe8] transition-colors font-medium">
                        <svg className="w-4 h-4 text-[#1d6fe8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        06 - 29528454
                      </a>
                    </li>
                    <li>
                      <a href="mailto:k.smitinstallatietechniek@outlook.com" className="flex items-start gap-2 text-gray-600 hover:text-[#1d6fe8] transition-colors break-all">
                        <svg className="w-4 h-4 text-[#1d6fe8] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        k.smitinstallatietechniek@outlook.com
                      </a>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <svg className="w-4 h-4 text-[#1d6fe8] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Kortenhoef, gemeente Wijdemeren
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ── Diensten in Kortenhoef ────────────────────────────── */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[#1d6fe8] text-sm font-semibold uppercase tracking-widest mb-3">Vakgebieden</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f1f3d] mb-3">
              Onze diensten in Kortenhoef
            </h2>
            <p className="text-gray-600 mb-10 max-w-2xl">
              SMIT Installatie Techniek voert alle onderstaande diensten uit in Kortenhoef. Klik op een vakgebied voor meer informatie en een offerte.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}/kortenhoef`}
                  className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md hover:border-[#1d6fe8]/40 transition-all"
                >
                  <div className="text-3xl mb-4">{s.icon}</div>
                  <h3 className="font-bold text-[#0f1f3d] mb-2 group-hover:text-[#1d6fe8] transition-colors">
                    {s.name} in Kortenhoef
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.intro}</p>
                  <span className="inline-flex items-center gap-1 text-[#1d6fe8] text-xs font-semibold">
                    Meer informatie
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Werkgebied rondom Kortenhoef ──────────────────────── */}
        <section className="py-14 bg-white">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-[#0f1f3d] mb-3">
              Ook actief in de omgeving van Kortenhoef
            </h2>
            <p className="text-gray-600 text-sm mb-7">
              Naast Kortenhoef werken we in heel de regio. Bekijk de informatie per plaatsnaam:
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { slug: "hilversum", name: "Hilversum" },
                { slug: "loosdrecht", name: "Loosdrecht" },
                { slug: "s-graveland", name: "'s-Graveland" },
                { slug: "nederhorst-den-berg", name: "Nederhorst den Berg" },
                { slug: "ankeveen", name: "Ankeveen" },
                { slug: "wijdemeren", name: "Wijdemeren" },
                { slug: "huizen", name: "Huizen" },
                { slug: "naarden", name: "Naarden" },
                { slug: "bussum", name: "Bussum" },
              ].map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/werkgebied/${loc.slug}`}
                  className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-[#0f1f3d] hover:text-white hover:border-[#0f1f3d] transition-all"
                >
                  {loc.name}
                </Link>
              ))}
              <Link href="/werkgebied" className="bg-[#1d6fe8] text-white border border-[#1d6fe8] rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-blue-600 transition-all">
                Alle werkgebieden →
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────── */}
        <FAQ items={faq} title="Veelgestelde vragen over SMIT in Kortenhoef" />

        {/* ── CTA ───────────────────────────────────────────────── */}
        <section className="py-14 bg-gradient-to-br from-[#1d6fe8] to-[#0f1f3d] text-white text-center">
          <div className="max-w-xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Klaar voor een vrijblijvende offerte in Kortenhoef?
            </h2>
            <p className="text-blue-100 mb-8">
              Bel Kevin direct of vraag online een offerte aan. Reactie dezelfde of volgende werkdag.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:0629528454" className="inline-flex items-center gap-2 bg-white text-[#0f1f3d] font-semibold px-6 py-3.5 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                Bel direct: 06-29528454
              </a>
              <Link href="/offerte" className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3.5 rounded-lg hover:bg-white/20 transition-colors text-sm border border-white/30">
                Offerte aanvragen →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
