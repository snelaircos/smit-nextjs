import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { locations } from "@/lib/data/locations";
import { services } from "@/lib/data/services";
import { localBusiness, breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Werkgebied | SMIT Installatie Techniek – Installateur Het Gooi en omgeving",
  description:
    "SMIT Installatie Techniek is actief als installateur in Het Gooi en omgeving. Bekijk alle plaatsen waar wij actief zijn voor dakwerk, sanitair, CV en meer.",
  alternates: { canonical: "https://www.smit-installatie-techniek.nl/werkgebied" },
  openGraph: { title: "Werkgebied SMIT Installatie Techniek", description: "Actief in heel Het Gooi en omgeving.", locale: "nl_NL", type: "website" },
};

export default function WerkgebiedPage() {
  const jsonLd = [localBusiness, breadcrumbSchema([{ name: "Werkgebied", url: "/werkgebied" }])];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="bg-[#0f1f3d] text-white py-14 lg:py-20">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: "Werkgebied" }]} />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-5 leading-tight">
              Werkgebied — Het Gooi en omgeving
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
              Vanuit onze basis in Kortenhoef bedienen wij een ruime regio in Noord-Holland en Utrecht. We zijn actief in alle onderstaande plaatsen voor dakwerk, zinkwerk, sanitair, CV-installatie en gasinstallatie.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {locations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/werkgebied/${loc.slug}`}
                  className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md hover:border-[#1d6fe8]/40 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h2 className="font-bold text-[#0f1f3d] text-lg group-hover:text-[#1d6fe8] transition-colors">
                      {loc.name}
                      {loc.isHQ && (
                        <span className="ml-2 text-[10px] bg-[#1d6fe8] text-white px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide align-middle">
                          Thuisbasis
                        </span>
                      )}
                    </h2>
                    <svg className="w-4 h-4 text-gray-300 group-hover:text-[#1d6fe8] transition-colors mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{loc.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {services.slice(0, 4).map((s) => (
                      <span
                        key={s.slug}
                        className="text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded"
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-[#0f1f3d] text-white text-center">
          <div className="max-w-xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Staat uw woonplaats er niet bij?</h2>
            <p className="text-gray-300 mb-8">
              Neem gerust contact op. We kijken altijd of we u kunnen helpen, ook buiten ons standaard werkgebied.
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 bg-[#1d6fe8] text-white font-semibold px-6 py-3.5 rounded-lg hover:bg-blue-600 transition-colors text-sm">
              Neem contact op →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
