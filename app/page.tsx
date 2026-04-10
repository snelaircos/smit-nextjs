import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhySmit from "@/components/WhySmit";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { localBusiness } from "@/lib/structured-data";
import { locations } from "@/lib/data/locations";
import { services } from "@/lib/data/services";

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <Header />
      <main>
        <Hero />
        <Services />
        <WhySmit />
        <Portfolio />

        {/* Werkgebied sectie voor SEO */}
        <section className="py-14 bg-white border-t border-gray-100">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-[#1d6fe8] text-sm font-semibold uppercase tracking-widest mb-2">Werkgebied</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f1f3d] mb-3">
                Actief in heel Het Gooi en omgeving
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Vanuit Kortenhoef zijn we snel ter plaatse in de hele regio. Selecteer uw woonplaats voor meer informatie.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 mb-6">
              {locations.slice(0, 16).map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/werkgebied/${loc.slug}`}
                  className="text-sm bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-gray-700 hover:bg-[#0f1f3d] hover:text-white hover:border-[#0f1f3d] transition-all text-center font-medium"
                >
                  {loc.name}
                  {loc.isHQ && <span className="block text-[10px] text-[#1d6fe8] font-semibold">Thuisbasis</span>}
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Link href="/werkgebied" className="text-[#1d6fe8] text-sm font-semibold hover:underline">
                Bekijk alle werkgebieden →
              </Link>
            </div>
          </div>
        </section>

        {/* Interne links voor SEO — populaire combinaties */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-bold text-[#0f1f3d] mb-6">Veelgevraagde diensten in de regio</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { href: "/dakwerk/kortenhoef", label: "Dakwerk Kortenhoef" },
                { href: "/dakwerk/hilversum", label: "Dakwerk Hilversum" },
                { href: "/sanitair/kortenhoef", label: "Sanitair Kortenhoef" },
                { href: "/sanitair/hilversum", label: "Loodgieter Hilversum" },
                { href: "/cv-installatie/kortenhoef", label: "CV-ketel Kortenhoef" },
                { href: "/cv-installatie/hilversum", label: "CV-installatie Hilversum" },
                { href: "/zinkwerk/kortenhoef", label: "Zinkwerk Kortenhoef" },
                { href: "/gasinstallatie/kortenhoef", label: "Gasinstallatie Kortenhoef" },
                { href: "/dakwerk/huizen", label: "Dakwerk Huizen" },
                { href: "/sanitair/naarden", label: "Sanitair Naarden" },
                { href: "/cv-installatie/bussum", label: "CV-ketel Bussum" },
                { href: "/dakwerk/laren", label: "Dakwerk Laren" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 hover:text-[#1d6fe8] hover:border-[#1d6fe8] transition-all flex items-center justify-between group"
                >
                  {link.label}
                  <svg className="w-3 h-3 text-gray-300 group-hover:text-[#1d6fe8] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
