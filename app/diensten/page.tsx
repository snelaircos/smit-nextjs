import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { services, vakmanLabel } from "@/lib/data/services";
import { localBusiness, breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Diensten: loodgieter, dakdekker, CV en gas | SMIT",
  description:
    "Alle diensten van SMIT Installatie Techniek in 't Gooi: dakwerk, zinkwerk, loodgieter en sanitair, CV-installatie, gasinstallatie en installatietechniek. Bel 06-29528454.",
  alternates: { canonical: "https://www.smit-installatie-techniek.nl/diensten" },
};

const perPlaats = [
  { href: "/sanitair/hilversum", label: "Loodgieter Hilversum" },
  { href: "/dakwerk/hilversum", label: "Dakdekker Hilversum" },
  { href: "/sanitair/huizen", label: "Loodgieter Huizen" },
  { href: "/sanitair/bussum", label: "Loodgieter Bussum" },
  { href: "/dakwerk/bussum", label: "Dakdekker Bussum" },
  { href: "/sanitair/baarn", label: "Loodgieter Baarn" },
  { href: "/sanitair/weesp", label: "Loodgieter Weesp" },
  { href: "/sanitair/naarden", label: "Loodgieter Naarden" },
  { href: "/cv-installatie/hilversum", label: "CV-monteur Hilversum" },
  { href: "/sanitair/kortenhoef", label: "Loodgieter Kortenhoef" },
  { href: "/dakwerk/kortenhoef", label: "Dakdekker Kortenhoef" },
  { href: "/zinkwerk/kortenhoef", label: "Zinkwerk Kortenhoef" },
];

export default function DienstenPage() {
  const jsonLd = [localBusiness, breadcrumbSchema([{ name: "Diensten", url: "/diensten" }])];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="bg-[#0f1f3d] text-white py-14 lg:py-20">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: "Diensten" }]} />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-5 leading-tight">
              Onze diensten in &apos;t Gooi en omgeving
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
              Loodgieter, dakdekker, zinkwerker, cv-monteur en gasinstallateur in één: Kevin Smit uit Kortenhoef
              voert al het werk zelf uit. Kies hieronder de dienst die u nodig heeft, of bel direct 06-29528454.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((s) => (
                <article key={s.slug} className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md hover:border-[#1d6fe8]/40 transition-all flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#0f1f3d]/5 rounded-xl flex items-center justify-center text-2xl shrink-0">{s.icon}</div>
                    <div>
                      <h2 className="text-xl font-bold text-[#0f1f3d]">
                        <Link href={`/${s.slug}`} className="hover:text-[#1d6fe8] transition-colors">{s.name}</Link>
                      </h2>
                      <p className="text-sm text-gray-500">{vakmanLabel(s.vakman)} · {s.tagline}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.intro}</p>
                  <ul className="grid sm:grid-cols-2 gap-1.5 mb-6">
                    {s.werkzaamheden.slice(0, 6).map((w) => (
                      <li key={w} className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-[#1d6fe8] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {w}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap gap-3">
                    <Link href={`/${s.slug}`} className="inline-flex items-center gap-2 bg-[#0f1f3d] text-white font-semibold px-4 py-2.5 rounded-lg hover:bg-[#1a2f5a] transition-colors text-sm">
                      Meer over {s.name.toLowerCase()} →
                    </Link>
                    <Link href={`/offerte/${s.slug}`} className="inline-flex items-center gap-2 bg-gray-100 text-[#0f1f3d] font-semibold px-4 py-2.5 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                      Offerte aanvragen
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-[#0f1f3d] mb-2">Loodgieter, dakdekker en cv-monteur per plaats</h2>
            <p className="text-gray-600 text-sm mb-6">
              Vanuit Kortenhoef is Kevin snel ter plaatse in heel &apos;t Gooi. Bekijk de pagina van uw woonplaats of het{" "}
              <Link href="/werkgebied" className="text-[#1d6fe8] font-semibold hover:underline">volledige werkgebied</Link>.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {perPlaats.map((l) => (
                <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 hover:text-[#1d6fe8] hover:border-[#1d6fe8] transition-all">
                  {l.label}
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
