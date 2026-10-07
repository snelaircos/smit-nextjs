import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhySmit from "@/components/WhySmit";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { localBusiness, faqSchema } from "@/lib/structured-data";
import { locations } from "@/lib/data/locations";

const homeFaq = [
  {
    q: "In welke plaatsen werkt SMIT Installatie Techniek?",
    a: "Kevin Smit werkt vanuit Kortenhoef in heel 't Gooi en omgeving: Hilversum, Loosdrecht, 's-Graveland, Ankeveen, Nederhorst den Berg, Bussum, Naarden, Huizen, Laren, Blaricum, Baarn, Eemnes, Weesp, Muiden en de Vechtstreek tot Breukelen en Maarssen.",
  },
  {
    q: "Welke werkzaamheden doet SMIT als loodgieter?",
    a: "Lekkages opsporen en verhelpen, verstoppingen, leidingwerk vervangen, kranen en warm water, en complete badkamer-, toilet- en keukeninstallaties. Ook de cv-ketel, vloerverwarming en gasleidingen kunnen in één hand bij dezelfde vakman.",
  },
  {
    q: "Doet SMIT ook dakwerk en zinkwerk?",
    a: "Ja. Kevin repareert en vervangt platte daken en pannendaken, spoort daklekkages op, plaatst lichtkoepels en verzorgt dakgoten, zinken daklijsten en hemelwaterafvoer. Dak, zink en loodgieterswerk komen zo van dezelfde vakman.",
  },
  {
    q: "Hoe snel kan Kevin langskomen?",
    a: "Bij lekkage of storing belt u 06-29528454 en hoort u direct wanneer hij er kan zijn, vaak dezelfde of de volgende werkdag. Voor grotere klussen komt hij eerst kijken en ontvangt u een vrijblijvende offerte met vaste prijs.",
  },
  {
    q: "Wat kost een offerte?",
    a: "Niets. U vraagt vrijblijvend een offerte aan via het formulier of telefonisch. Kevin komt kijken, bespreekt de mogelijkheden en u ontvangt een heldere prijs vooraf, zonder verrassingen achteraf.",
  },
];

export default function Home() {
  const jsonLd = [localBusiness, faqSchema(homeFaq)];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
            <h2 className="text-lg font-bold text-[#0f1f3d] mb-6">Loodgieter, dakdekker en cv-monteur per plaats</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { href: "/sanitair/hilversum", label: "Loodgieter Hilversum" },
                { href: "/dakwerk/hilversum", label: "Dakdekker Hilversum" },
                { href: "/sanitair/huizen", label: "Loodgieter Huizen" },
                { href: "/sanitair/bussum", label: "Loodgieter Bussum" },
                { href: "/sanitair/baarn", label: "Loodgieter Baarn" },
                { href: "/sanitair/weesp", label: "Loodgieter Weesp" },
                { href: "/dakwerk/bussum", label: "Dakdekker Bussum" },
                { href: "/dakwerk/huizen", label: "Dakdekker Huizen" },
                { href: "/sanitair/naarden", label: "Loodgieter Naarden" },
                { href: "/cv-installatie/hilversum", label: "CV-monteur Hilversum" },
                { href: "/sanitair/kortenhoef", label: "Loodgieter Kortenhoef" },
                { href: "/dakwerk/kortenhoef", label: "Dakdekker Kortenhoef" },
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
        <FAQ items={homeFaq} title="Veelgestelde vragen" />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
