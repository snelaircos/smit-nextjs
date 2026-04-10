import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import OfferteForm from "@/components/OfferteForm";
import { services } from "@/lib/data/services";
import { localBusiness, breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Offerte aanvragen | SMIT Installatie Techniek",
  description: "Vraag vrijblijvend een offerte aan bij SMIT Installatie Techniek. Dakwerk, zinkwerk, sanitair, CV-installatie en gasinstallatie. Reactie binnen 1 werkdag.",
  alternates: { canonical: "https://www.smit-installatie-techniek.nl/offerte" },
};

const trustPoints = [
  "Vrijblijvend en kosteloos",
  "Reactie binnen 1 werkdag",
  "Vaste, transparante prijzen",
  "Geen verborgen kosten",
  "Gecertificeerde vakmannen",
  "Netjes achtergelaten",
];

export default function OffertePage() {
  const jsonLd = [localBusiness, breadcrumbSchema([{ name: "Offerte aanvragen", url: "/offerte" }])];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="bg-[#0f1f3d] text-white py-14 lg:py-20">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: "Offerte aanvragen" }]} />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-5 leading-tight">
              Vrijblijvende offerte aanvragen
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
              Vul het formulier in en Kevin neemt zo snel mogelijk contact op — meestal binnen één werkdag. Geen verplichtingen, geen verborgen kosten.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Links: uitleg */}
              <div>
                <h2 className="text-2xl font-bold text-[#0f1f3d] mb-6">Hoe werkt het?</h2>
                <ol className="space-y-5 mb-10">
                  {[
                    { n: "1", title: "Vul het formulier in", body: "Beschrijf kort wat er gedaan moet worden en laat uw contactgegevens achter." },
                    { n: "2", title: "Kevin neemt contact op", body: "Binnen één werkdag belt Kevin u terug voor een eerste gesprek of om een afspraak te plannen." },
                    { n: "3", title: "Vrijblijvende offerte", body: "U ontvangt een heldere offerte met vaste prijs. Geen verrassingen achteraf." },
                    { n: "4", title: "Vakkundig uitgevoerd", body: "Na akkoord plannen we de werkzaamheden in en voeren we die netjes uit." },
                  ].map((step) => (
                    <li key={step.n} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#1d6fe8] text-white flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                        {step.n}
                      </div>
                      <div>
                        <p className="font-semibold text-[#0f1f3d]">{step.title}</p>
                        <p className="text-gray-600 text-sm mt-0.5">{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <h3 className="font-bold text-[#0f1f3d] mb-4">Waarom kiezen voor SMIT?</h3>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {trustPoints.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-5 bg-gray-50 rounded-xl border border-gray-200">
                  <p className="text-sm text-gray-600 mb-2">Liever direct bellen?</p>
                  <a href="tel:0629528454" className="text-[#0f1f3d] font-bold text-xl hover:text-[#1d6fe8] transition-colors">
                    06 - 29528454
                  </a>
                </div>
              </div>

              {/* Rechts: formulier */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-[#0f1f3d] mb-6">Uw aanvraag</h2>
                <OfferteForm />
              </div>
            </div>
          </div>
        </section>

        {/* Offerte per dienst */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-[#0f1f3d] mb-6">Offerte per vakgebied</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/offerte/${s.slug}`}
                  className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-[#1d6fe8]/40 hover:shadow-sm transition-all flex items-center gap-4"
                >
                  <span className="text-2xl">{s.icon}</span>
                  <div>
                    <p className="font-semibold text-[#0f1f3d] text-sm group-hover:text-[#1d6fe8] transition-colors">
                      Offerte {s.name.toLowerCase()}
                    </p>
                    <p className="text-gray-500 text-xs mt-0.5">{s.tagline}</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-300 ml-auto group-hover:text-[#1d6fe8] transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
