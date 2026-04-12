import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import OfferteForm from "@/components/OfferteForm";
import { localBusiness, breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Contact | SMIT Installatie Techniek – Bel of mail ons",
  description: "Neem contact op met SMIT Installatie Techniek. Bel 06-29528454, stuur een WhatsApp of vul het formulier in. Snel antwoord gegarandeerd.",
  alternates: { canonical: "https://www.smit-installatie-techniek.nl/contact" },
};

export default function ContactPage() {
  const jsonLd = [localBusiness, breadcrumbSchema([{ name: "Contact", url: "/contact" }])];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="bg-[#0f1f3d] text-white py-14 lg:py-20">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: "Contact" }]} />
            <h1 className="text-3xl sm:text-4xl font-bold mt-4 mb-5">Neem contact op</h1>
            <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
              Heeft u een vraag, wilt u een afspraak inplannen of een offerte aanvragen? We helpen u graag.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contactinfo */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-[#0f1f3d] mb-6">Contactgegevens</h2>
                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#1d6fe8]/10 rounded-xl flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-[#1d6fe8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-0.5">Telefoon / WhatsApp</p>
                        <a href="tel:0629528454" className="font-bold text-[#0f1f3d] text-lg hover:text-[#1d6fe8] transition-colors">
                          06 - 29528454
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#1d6fe8]/10 rounded-xl flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-[#1d6fe8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-0.5">E-mail</p>
                        <a href="mailto:k.smitinstallatietechniek@outlook.com" className="font-medium text-[#0f1f3d] hover:text-[#1d6fe8] transition-colors break-all">
                          k.smitinstallatietechniek@outlook.com
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#1d6fe8]/10 rounded-xl flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-[#1d6fe8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-0.5">Vestigingsplaats</p>
                        <p className="font-medium text-[#0f1f3d]">Kortenhoef, Noord-Holland</p>
                        <p className="text-sm text-gray-500">Werkgebied: Het Gooi en omgeving</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-bold text-[#0f1f3d] mb-2">Bereikbaarheid</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Maandag t/m vrijdag: 07:30 – 17:30<br />
                    Voor spoedgevallen zijn we ook buiten kantooruren bereikbaar via telefoon of WhatsApp.
                  </p>
                </div>
              </div>

              {/* Formulier */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-[#0f1f3d] mb-6">Stuur een bericht</h2>
                <OfferteForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
