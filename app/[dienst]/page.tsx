import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import OfferteForm from "@/components/OfferteForm";
import { getService, servicesSlugs, services } from "@/lib/data/services";
import { locations } from "@/lib/data/locations";
import { breadcrumbSchema, faqSchema, serviceSchema, localBusiness } from "@/lib/structured-data";

export async function generateStaticParams() {
  return servicesSlugs.map((slug) => ({ dienst: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ dienst: string }> }): Promise<Metadata> {
  const { dienst } = await params;
  const service = getService(dienst);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `https://www.smit-installatie-techniek.nl/${dienst}` },
    openGraph: { title: service.metaTitle, description: service.metaDescription, locale: "nl_NL", type: "website" },
  };
}

export default async function DienstPage({ params }: { params: Promise<{ dienst: string }> }) {
  const { dienst } = await params;
  const service = getService(dienst);
  if (!service) notFound();

  const jsonLd = [
    localBusiness,
    breadcrumbSchema([{ name: service.name, url: `/${dienst}` }]),
    faqSchema(service.faq),
    serviceSchema(service.name, service.metaDescription, `/${dienst}`),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="bg-[#0f1f3d] text-white py-14 lg:py-20">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: service.name }]} />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-5 leading-tight max-w-3xl">
              {service.h1}
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-8">
              {service.intro}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={`/offerte/${dienst}`} className="inline-flex items-center gap-2 bg-[#1d6fe8] text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors text-sm">
                Vrijblijvende offerte aanvragen →
              </Link>
              <a href="tel:0629528454" className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors text-sm border border-white/20">
                Bel direct: 06-29528454
              </a>
            </div>
            {/* Trust bar */}
            <div className="flex flex-wrap gap-5 mt-10 pt-8 border-t border-white/10 text-sm text-gray-400">
              {service.trustReasons.slice(0, 3).map((r) => (
                <div key={r} className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {r}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Intro + Werkzaamheden sidebar ─────────────────────── */}
        <section className="py-16 bg-white">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">

              {/* Main content */}
              <div className="lg:col-span-2">
                <p className="text-gray-700 leading-relaxed text-lg mb-10 border-l-4 border-[#1d6fe8] pl-5">
                  {service.introExtended}
                </p>

                {/* Wanneer heeft u dit nodig */}
                <div className="bg-[#f8faff] rounded-2xl p-7 border border-blue-100 mb-10">
                  <h2 className="text-xl font-bold text-[#0f1f3d] mb-4">
                    {service.whenNeeded.title}
                  </h2>
                  <ul className="space-y-2">
                    {service.whenNeeded.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-[#1d6fe8] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Content sections */}
                {service.sections.map((s) => (
                  <div key={s.h2} className="mb-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#0f1f3d] mb-3">{s.h2}</h2>
                    <p className="text-gray-600 leading-relaxed">{s.body}</p>
                  </div>
                ))}
              </div>

              {/* Sidebar */}
              <aside className="space-y-5">
                {/* Snel contact */}
                <div className="bg-[#0f1f3d] rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-base mb-1">Direct contact opnemen</h3>
                  <p className="text-gray-400 text-sm mb-4">Snel antwoord of een afspraak inplannen?</p>
                  <a href="tel:0629528454" className="flex items-center gap-2 font-bold text-lg hover:text-blue-300 transition-colors mb-3">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    06 - 29528454
                  </a>
                  <a href="https://wa.me/31629528454" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[#25D366] hover:text-green-300 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp sturen
                  </a>
                  <div className="mt-5 pt-5 border-t border-white/10">
                    <Link href={`/offerte/${dienst}`} className="block w-full text-center bg-[#1d6fe8] text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-colors text-sm">
                      Offerte aanvragen →
                    </Link>
                  </div>
                </div>

                {/* Werkzaamheden */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-bold text-[#0f1f3d] mb-4 text-sm uppercase tracking-wide">Werkzaamheden</h3>
                  <ul className="space-y-2">
                    {service.werkzaamheden.map((w) => (
                      <li key={w} className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-[#1d6fe8] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Andere diensten */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-semibold text-[#0f1f3d] text-sm uppercase tracking-wide mb-3">Meer diensten</h3>
                  <div className="space-y-1.5">
                    {services.filter((s) => s.slug !== dienst).map((s) => (
                      <Link key={s.slug} href={`/${s.slug}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#1d6fe8] transition-colors">
                        <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ── Werkwijze ─────────────────────────────────────────── */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-[#1d6fe8] text-sm font-semibold uppercase tracking-widest mb-3">Werkwijze</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0f1f3d] mb-5">
                  Zo werkt SMIT Installatie Techniek
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Geen verrassingen, geen vaag gedoe. Hieronder ziet u stap voor stap hoe wij te werk gaan bij {service.name.toLowerCase()}opdrachten.
                </p>
                <div className="space-y-5">
                  {service.werkwijze.map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#1d6fe8] text-white flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-[#0f1f3d] text-sm">{step.stap.replace(/^\d+\.\s/, "")}</p>
                        <p className="text-gray-600 text-sm mt-0.5 leading-relaxed">{step.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Offerte formulier */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-[#0f1f3d] mb-2">
                  Offerte aanvragen voor {service.name.toLowerCase()}
                </h3>
                <p className="text-gray-500 text-sm mb-6">Vrijblijvend · Reactie binnen 1 werkdag · Geen verplichtingen</p>
                <OfferteForm dienst={dienst} />
              </div>
            </div>
          </div>
        </section>

        {/* ── Waarom SMIT voor dit vakgebied ─────────────────────── */}
        <section className="py-14 bg-[#0f1f3d] text-white">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              Waarom SMIT Installatie Techniek voor {service.name.toLowerCase()}?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.trustReasons.map((r) => (
                <div key={r} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1d6fe8]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#1d6fe8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{r}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Situaties ─────────────────────────────────────────── */}
        <section className="py-14 bg-white">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#0f1f3d] mb-3">
              Voor wie voeren wij {service.name.toLowerCase()} uit?
            </h2>
            <p className="text-gray-600 mb-7">We helpen uiteenlopende klanten in de regio:</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {service.situaties.map((s) => (
                <div key={s} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <svg className="w-4 h-4 text-[#1d6fe8] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-sm text-gray-700">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Werkgebied — regio-links ──────────────────────────── */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#0f1f3d] mb-3">
              {service.name} in de regio
            </h2>
            <p className="text-gray-600 mb-7 text-sm">
              Wij zijn actief in Kortenhoef en de omliggende plaatsen in Het Gooi en omgeving. Selecteer uw woonplaats:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
              {locations.map((loc) => (
                <Link key={loc.slug} href={`/${dienst}/${loc.slug}`}
                  className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#1d6fe8] hover:text-white hover:border-[#1d6fe8] transition-all">
                  {service.name} {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────── */}
        <FAQ items={service.faq} title={`Veelgestelde vragen over ${service.name.toLowerCase()}`} />

        {/* ── Bottom CTA ────────────────────────────────────────── */}
        <section className="py-14 bg-gradient-to-br from-[#1d6fe8] to-[#0f1f3d] text-white text-center">
          <div className="max-w-xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Klaar voor een vrijblijvende offerte?
            </h2>
            <p className="text-blue-100 mb-8 leading-relaxed">
              Neem contact op of vraag direct online een offerte aan. Kevin reageert snel en geeft u een eerlijke prijs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href={`/offerte/${dienst}`} className="inline-flex items-center gap-2 bg-white text-[#0f1f3d] font-semibold px-6 py-3.5 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                Offerte aanvragen →
              </Link>
              <a href="tel:0629528454" className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3.5 rounded-lg hover:bg-white/20 transition-colors text-sm border border-white/30">
                Bel 06-29528454
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
