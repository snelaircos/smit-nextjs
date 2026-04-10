import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import OfferteForm from "@/components/OfferteForm";
import { getService, servicesSlugs, services } from "@/lib/data/services";
import { getLocation, locationSlugs, locations } from "@/lib/data/locations";
import { getComboContent } from "@/lib/data/combo-content";
import { breadcrumbSchema, faqSchema, serviceSchema, localBusiness } from "@/lib/structured-data";

export async function generateStaticParams() {
  const params: { dienst: string; plaats: string }[] = [];
  for (const dienst of servicesSlugs) {
    for (const plaats of locationSlugs) {
      params.push({ dienst, plaats });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ dienst: string; plaats: string }>;
}): Promise<Metadata> {
  const { dienst, plaats } = await params;
  const service = getService(dienst);
  const location = getLocation(plaats);
  if (!service || !location) return {};

  const combo = getComboContent(dienst, plaats);

  const title = combo?.metaTitle ?? `${service.name} ${location.name} | SMIT Installatie Techniek`;
  const description =
    combo?.metaDescription ??
    `${service.vakman.charAt(0).toUpperCase() + service.vakman.slice(1)} in ${location.name}? SMIT Installatie Techniek levert vakkundig ${service.name.toLowerCase()} in ${location.name} en omgeving. Vrijblijvend offerte aanvragen.`;

  return {
    title,
    description,
    alternates: { canonical: `https://www.smit-installatie-techniek.nl/${dienst}/${plaats}` },
    openGraph: { title, description, locale: "nl_NL", type: "website" },
  };
}

export default async function DienstPlaatsPage({
  params,
}: {
  params: Promise<{ dienst: string; plaats: string }>;
}) {
  const { dienst, plaats } = await params;
  const service = getService(dienst);
  const location = getLocation(plaats);
  if (!service || !location) notFound();

  const combo = getComboContent(dienst, plaats);

  const faqItems = combo
    ? combo.faq
    : [
        {
          q: `Werkt SMIT Installatie Techniek ook in ${location.name}?`,
          a: `Ja, we zijn actief in ${location.name} en directe omgeving. Vanuit onze basis in Kortenhoef zijn we snel ter plaatse.`,
        },
        ...service.faq.slice(0, 3),
      ];

  const jsonLd = [
    localBusiness,
    breadcrumbSchema([
      { name: service.name, url: `/${dienst}` },
      { name: location.name, url: `/${dienst}/${plaats}` },
    ]),
    faqSchema(faqItems),
    serviceSchema(
      combo?.h1 ?? `${service.name} ${location.name}`,
      combo?.lead ?? `Professioneel ${service.name.toLowerCase()} in ${location.name} door SMIT Installatie Techniek.`,
      `/${dienst}/${plaats}`
    ),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#0f1f3d] text-white py-14 lg:py-20">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: service.name, href: `/${dienst}` },
                { label: location.name },
              ]}
            />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-5 leading-tight">
              {combo?.h1 ?? `${service.name} in ${location.name}`}
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-4">
              {combo?.lead ?? `Op zoek naar een vakkundige ${service.vakman} in ${location.name}? SMIT Installatie Techniek levert professioneel ${service.name.toLowerCase()} in ${location.name} en de omliggende regio. ${location.extraContext ?? location.description}`}
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href={`/offerte/${dienst}`}
                className="inline-flex items-center gap-2 bg-[#1d6fe8] text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors text-sm"
              >
                Offerte aanvragen →
              </a>
              <a
                href="tel:0629528454"
                className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors text-sm border border-white/20"
              >
                Bel direct: 06-29528454
              </a>
            </div>
          </div>
        </section>

        {/* Main content + sidebar */}
        <section className="py-16 bg-white">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-10">

                {/* Intro */}
                <div>
                  {combo ? (
                    <>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#0f1f3d] mb-3">
                        {combo.sections[0]?.h2 ?? `${service.name} in ${location.name} — vakkundig en betrouwbaar`}
                      </h2>
                      <p className="text-gray-600 leading-relaxed">{combo.intro}</p>
                    </>
                  ) : (
                    <>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#0f1f3d] mb-3">
                        {service.name} in {location.name} — vakkundig en betrouwbaar
                      </h2>
                      <p className="text-gray-600 leading-relaxed">
                        {location.description} Bij SMIT Installatie Techniek kunt u rekenen op een ervaren {service.vakman} die het werk netjes uitvoert en u eerlijk adviseert. Geen gedoe, geen verborgen kosten — gewoon vakwerk.
                      </p>
                    </>
                  )}
                </div>

                {/* Content sections */}
                {combo
                  ? combo.sections.map((s, i) => (
                      i === 0 ? null : (
                        <div key={s.h2}>
                          <h2 className="text-lg sm:text-xl font-bold text-[#0f1f3d] mb-2">{s.h2}</h2>
                          <p className="text-gray-600 leading-relaxed text-sm">{s.body}</p>
                        </div>
                      )
                    ))
                  : service.sections.slice(0, 2).map((s) => (
                      <div key={s.h2}>
                        <h2 className="text-lg sm:text-xl font-bold text-[#0f1f3d] mb-2">{s.h2}</h2>
                        <p className="text-gray-600 leading-relaxed text-sm">{s.body}</p>
                      </div>
                    ))}

                {/* Situaties */}
                {combo && combo.situaties.length > 0 && (
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-[#0f1f3d] mb-3">
                      Wanneer belt u ons?
                    </h2>
                    <ul className="space-y-2">
                      {combo.situaties.map((s) => (
                        <li key={s} className="flex items-start gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-[#1d6fe8] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Werkzaamheden (always shown) */}
                <div>
                  <h2 className="text-xl font-bold text-[#0f1f3d] mb-3">
                    Werkzaamheden {service.name.toLowerCase()} in {location.name}
                  </h2>
                  <ul className="grid sm:grid-cols-2 gap-2">
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

                {/* CTA block (combo only) */}
                {combo && (
                  <div className="bg-[#0f1f3d] rounded-2xl p-8 text-white">
                    <h2 className="text-xl font-bold mb-3">{combo.ctaHeading}</h2>
                    <p className="text-gray-300 leading-relaxed mb-5 text-sm">{combo.ctaBody}</p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={`/offerte/${dienst}`}
                        className="inline-flex items-center gap-2 bg-[#1d6fe8] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-600 transition-colors text-sm"
                      >
                        Offerte aanvragen →
                      </a>
                      <a
                        href="tel:0629528454"
                        className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-white/20 transition-colors text-sm border border-white/20"
                      >
                        Bel 06-29528454
                      </a>
                    </div>
                  </div>
                )}

                {/* Internal links (combo only) */}
                {combo && combo.internalLinks.length > 0 && (
                  <div>
                    <h2 className="text-lg font-bold text-[#0f1f3d] mb-3">Gerelateerde pagina&apos;s</h2>
                    <div className="flex flex-wrap gap-2">
                      {combo.internalLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="text-sm bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-gray-700 hover:text-[#1d6fe8] hover:border-[#1d6fe8] transition-all"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <aside className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#0f1f3d] mb-4 text-base">
                    Offerte aanvragen
                  </h3>
                  <OfferteForm dienst={dienst} />
                </div>

                <div className="bg-[#0f1f3d] rounded-2xl p-6 text-white">
                  <h3 className="font-bold mb-1 text-base">Direct bellen</h3>
                  <p className="text-gray-300 text-sm mb-3">Snel antwoord nodig?</p>
                  <a href="tel:0629528454" className="font-bold text-lg hover:text-blue-300 transition-colors">
                    06 - 29528454
                  </a>
                </div>

                {/* Links naar andere plaatsen */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-semibold text-[#0f1f3d] text-sm mb-3">
                    {service.name} in andere plaatsen
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {locations
                      .filter((l) => l.slug !== plaats)
                      .slice(0, 8)
                      .map((loc) => (
                        <Link
                          key={loc.slug}
                          href={`/${dienst}/${loc.slug}`}
                          className="text-xs bg-white border border-gray-200 rounded px-2.5 py-1.5 text-gray-600 hover:text-[#1d6fe8] hover:border-[#1d6fe8] transition-all"
                        >
                          {loc.name}
                        </Link>
                      ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ
          items={faqItems}
          title={combo ? `Veelgestelde vragen over ${combo.h1.toLowerCase()}` : `Vragen over ${service.name.toLowerCase()} in ${location.name}`}
        />

        {/* Andere diensten in deze plaats */}
        <section className="py-12 bg-white">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-[#0f1f3d] mb-5">
              Meer diensten in {location.name}
            </h2>
            <div className="flex flex-wrap gap-3">
              {services
                .filter((s) => s.slug !== dienst)
                .map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}/${plaats}`}
                    className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 hover:border-[#1d6fe8] hover:text-[#1d6fe8] transition-all"
                  >
                    {s.name} {location.name}
                  </Link>
                ))}
              <Link
                href={`/werkgebied/${plaats}`}
                className="bg-[#0f1f3d] text-white rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-[#1a2f5a] transition-all"
              >
                Alle diensten in {location.name}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
