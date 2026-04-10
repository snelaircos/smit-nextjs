import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import { getLocation, locationSlugs } from "@/lib/data/locations";
import { services } from "@/lib/data/services";
import { localBusiness, breadcrumbSchema, faqSchema } from "@/lib/structured-data";

export async function generateStaticParams() {
  return locationSlugs.map((slug) => ({ plaats: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ plaats: string }> }): Promise<Metadata> {
  const { plaats } = await params;
  const location = getLocation(plaats);
  if (!location) return {};
  const title = `Installateur ${location.name} | SMIT Installatie Techniek`;
  const description = `SMIT Installatie Techniek is uw installateur in ${location.name}. Dakwerk, zinkwerk, sanitair, CV en gasinstallatie. Snel ter plaatse, eerlijke prijzen.`;
  return {
    title,
    description,
    alternates: { canonical: `https://www.smit-installatie-techniek.nl/werkgebied/${plaats}` },
    openGraph: { title, description, locale: "nl_NL", type: "website" },
  };
}

export default async function PlaatsPage({ params }: { params: Promise<{ plaats: string }> }) {
  const { plaats } = await params;
  const location = getLocation(plaats);
  if (!location) notFound();

  const faq = [
    { q: `In welke plaatsen rond ${location.name} is SMIT actief?`, a: `Naast ${location.name} werken we in heel Het Gooi en omgeving, waaronder Kortenhoef, Hilversum, Huizen, Naarden, Bussum en meer.` },
    { q: `Hoe snel is SMIT ter plaatse in ${location.name}?`, a: `Vanuit onze basis in Kortenhoef zijn we doorgaans dezelfde of volgende werkdag in ${location.name}. Bij spoed proberen we altijd zo snel mogelijk te komen.` },
    { q: "Zijn jullie gecertificeerd?", a: "Ja. We werken gecertificeerd voor gas-, CV- en installatiewerk en voldoen aan alle geldende normen." },
    { q: "Geven jullie garantie op het werk?", a: "Ja, we geven garantie op onze werkzaamheden. De exacte termijn bespreken we bij de offerte." },
  ];

  const jsonLd = [
    localBusiness,
    breadcrumbSchema([
      { name: "Werkgebied", url: "/werkgebied" },
      { name: location.name, url: `/werkgebied/${plaats}` },
    ]),
    faqSchema(faq),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#0f1f3d] text-white py-14 lg:py-20">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: "Werkgebied", href: "/werkgebied" }, { label: location.name }]} />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-5 leading-tight">
              Installateur in {location.name}
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-8">
              {location.description} SMIT Installatie Techniek is uw betrouwbare vakman in {location.name} voor dakwerk, zinkwerk, sanitair, CV-installatie en gasinstallatie.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/offerte" className="inline-flex items-center gap-2 bg-[#1d6fe8] text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors text-sm">
                Offerte aanvragen →
              </a>
              <a href="tel:0629528454" className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors text-sm border border-white/20">
                Bel direct: 06-29528454
              </a>
            </div>
          </div>
        </section>

        {/* Diensten in deze plaats */}
        <section className="py-16 bg-white">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f1f3d] mb-3">
              Onze diensten in {location.name}
            </h2>
            <p className="text-gray-600 mb-10">
              SMIT Installatie Techniek voert de volgende werkzaamheden uit in {location.name} en directe omgeving:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}/${plaats}`}
                  className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md hover:border-[#1d6fe8]/40 transition-all"
                >
                  <div className="w-12 h-12 bg-[#0f1f3d]/5 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-[#1d6fe8]/10 transition-colors">
                    {s.icon}
                  </div>
                  <h3 className="font-bold text-[#0f1f3d] mb-2 group-hover:text-[#1d6fe8] transition-colors">
                    {s.name} in {location.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{s.intro}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-[#1d6fe8] text-xs font-semibold">
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

        {/* Waarom SMIT */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#0f1f3d] mb-8">Waarom SMIT Installatie Techniek in {location.name}?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { title: "Snel ter plaatse", body: `Vanuit Kortenhoef zijn we snel in ${location.name}.` },
                { title: "Eerlijke prijzen", body: "Vaste offerte vooraf. Geen verrassingen achteraf." },
                { title: "Gecertificeerd", body: "Gecertificeerd voor gas, CV en installatiewerk." },
                { title: "Netjes & betrouwbaar", body: "We laten de werkplek altijd netjes achter." },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-[#0f1f3d] mb-2 text-sm">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQ items={faq} title={`Vragen over onze diensten in ${location.name}`} />

        {/* Andere plaatsen */}
        <section className="py-12 bg-white">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-bold text-[#0f1f3d] mb-4">Ook actief in</h2>
            <div className="flex flex-wrap gap-2">
              {[...services.map((s) => ({ href: `/${s.slug}/${plaats}`, label: `${s.name} ${location.name}` })),
                { href: "/werkgebied", label: "← Alle werkgebieden" }].map((link) => (
                <Link key={link.href} href={link.href} className="text-sm bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-gray-600 hover:text-[#1d6fe8] hover:border-[#1d6fe8] transition-all">
                  {link.label}
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
