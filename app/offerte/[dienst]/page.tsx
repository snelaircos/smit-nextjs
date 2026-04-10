import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import OfferteForm from "@/components/OfferteForm";
import { getService, servicesSlugs } from "@/lib/data/services";
import { localBusiness, breadcrumbSchema } from "@/lib/structured-data";

export async function generateStaticParams() {
  return servicesSlugs.map((slug) => ({ dienst: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ dienst: string }> }): Promise<Metadata> {
  const { dienst } = await params;
  const service = getService(dienst);
  if (!service) return {};
  return {
    title: `Offerte ${service.name} aanvragen | SMIT Installatie Techniek`,
    description: `Vraag vrijblijvend een offerte aan voor ${service.name.toLowerCase()} bij SMIT Installatie Techniek. Snel antwoord, eerlijke prijs, gecertificeerd vakmanschap.`,
    alternates: { canonical: `https://www.smit-installatie-techniek.nl/offerte/${dienst}` },
  };
}

export default async function OfferteDienstPage({ params }: { params: Promise<{ dienst: string }> }) {
  const { dienst } = await params;
  const service = getService(dienst);
  if (!service) notFound();

  const jsonLd = [
    localBusiness,
    breadcrumbSchema([
      { name: "Offerte aanvragen", url: "/offerte" },
      { name: service.name, url: `/offerte/${dienst}` },
    ]),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="bg-[#0f1f3d] text-white py-14 lg:py-20">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: "Offerte", href: "/offerte" }, { label: service.name }]} />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-5 leading-tight">
              Offerte {service.name.toLowerCase()} aanvragen
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
              {service.tagline}. Vul het formulier in en ontvang een vrijblijvende offerte op maat van SMIT Installatie Techniek.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-2xl font-bold text-[#0f1f3d] mb-5">
                  Waarvoor kunt u een offerte aanvragen?
                </h2>
                <ul className="space-y-2 mb-8">
                  {service.werkzaamheden.map((w) => (
                    <li key={w} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-[#1d6fe8] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {w}
                    </li>
                  ))}
                </ul>

                <div className="bg-[#0f1f3d] rounded-2xl p-6 text-white">
                  <h3 className="font-bold mb-3">Liever direct contact?</h3>
                  <p className="text-gray-300 text-sm mb-4">Bel of WhatsApp Kevin direct voor een snelle afspraak.</p>
                  <a href="tel:0629528454" className="flex items-center gap-2 font-bold text-lg hover:text-blue-300 transition-colors">
                    06 - 29528454
                  </a>
                  <a
                    href="https://wa.me/31629528454"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex items-center gap-2 text-sm text-[#25D366] hover:text-green-400 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp sturen
                  </a>
                </div>

                <div className="mt-6">
                  <Link href={`/${dienst}`} className="text-[#1d6fe8] text-sm hover:underline flex items-center gap-1">
                    ← Meer informatie over {service.name.toLowerCase()}
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-[#0f1f3d] mb-6">
                  Uw aanvraag voor {service.name.toLowerCase()}
                </h2>
                <OfferteForm dienst={dienst} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
