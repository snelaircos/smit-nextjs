import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { services } from "@/lib/data/services";
import { locations } from "@/lib/data/locations";
import { localBusiness, personSchema, breadcrumbSchema, GOOGLE_MAPS_URL, GOOGLE_REVIEW_URL } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Over Kevin Smit | SMIT Installatie Techniek Kortenhoef",
  description:
    "Kevin Smit is de loodgieter, dakdekker en cv-monteur achter SMIT Installatie Techniek in Kortenhoef. Zo werkt hij, en hier is hij actief in 't Gooi.",
  alternates: { canonical: "https://www.smit-installatie-techniek.nl/over-ons" },
};

const werkwijze = [
  { stap: "U belt of mailt", body: "U krijgt Kevin zelf aan de lijn, geen callcenter. Beschrijf kort wat er speelt." },
  { stap: "Kevin komt kijken", body: "Bij grotere klussen komt hij eerst langs om de situatie te bekijken en mee te denken." },
  { stap: "Heldere offerte", body: "U ontvangt een vrijblijvende offerte met een vaste prijs. Geen verrassingen achteraf." },
  { stap: "Uitvoering door Kevin", body: "Dezelfde vakman die u sprak, voert het werk uit en laat de werkplek netjes achter." },
];

export default function OverOnsPage() {
  const jsonLd = [localBusiness, personSchema, breadcrumbSchema([{ name: "Over Kevin Smit", url: "/over-ons" }])];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="bg-[#0f1f3d] text-white py-14 lg:py-20">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: "Over Kevin Smit" }]} />
            <div className="grid lg:grid-cols-3 gap-10 items-center mt-4">
              <div className="lg:col-span-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                  Kevin Smit: loodgieter, dakdekker en cv-monteur uit Kortenhoef
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                  SMIT Installatie Techniek is het installatiebedrijf van Kevin Smit. Hij woont en werkt in Kortenhoef
                  (gemeente Wijdemeren) en is actief in heel &apos;t Gooi en omgeving voor dakwerk, zinkwerk, sanitair,
                  CV-installatie en gasinstallatie. Geen onderaannemers die u niet kent: Kevin neemt op, komt langs en
                  voert het werk zelf uit.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <Image
                  src="/kevin-profiel.png"
                  alt="Kevin Smit, eigenaar van SMIT Installatie Techniek in Kortenhoef"
                  width={260}
                  height={260}
                  className="rounded-2xl object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-[#0f1f3d] mb-3">Eén vakman voor dak, zink, water, CV en gas</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Veel klussen in en om het huis hangen met elkaar samen. Een lekkende dakgoot, een nieuwe badkamer, een
                  cv-ketel die aan vervanging toe is: Kevin pakt het in één hand op. Zo hoeft u niet drie bedrijven te bellen
                  en op elkaar af te stemmen. Hij is gecertificeerd voor gas-, CV- en installatiewerk en werkt met oog voor
                  detail en duurzame oplossingen.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/${s.slug}`} className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#1d6fe8] transition-colors">
                        <span className="text-lg">{s.icon}</span>
                        {s.name}
                        <span className="text-gray-400">· {s.vakman}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0f1f3d] mb-4">Zo werkt Kevin</h2>
                <ol className="space-y-4">
                  {werkwijze.map((w, i) => (
                    <li key={w.stap} className="flex gap-4">
                      <span className="w-8 h-8 rounded-full bg-[#1d6fe8] text-white flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-[#0f1f3d]">{w.stap}</p>
                        <p className="text-gray-600 text-sm">{w.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0f1f3d] mb-3">Werkgebied: &apos;t Gooi en omgeving</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Vanuit Kortenhoef is Kevin snel ter plaatse in de gemeente Wijdemeren en de rest van &apos;t Gooi, en
                  rijdt hij ook naar de Vechtstreek en Eemland.
                </p>
                <div className="flex flex-wrap gap-2">
                  {locations.map((l) => (
                    <Link
                      key={l.slug}
                      href={`/werkgebied/${l.slug}`}
                      className="text-sm bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-gray-700 hover:text-[#1d6fe8] hover:border-[#1d6fe8] transition-all"
                    >
                      {l.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <h2 className="font-bold text-[#0f1f3d] mb-4">Bedrijfsgegevens</h2>
                <dl className="text-sm space-y-3 text-gray-700">
                  <div><dt className="text-gray-500 text-xs">Bedrijf</dt><dd className="font-medium">SMIT Installatie Techniek</dd></div>
                  <div><dt className="text-gray-500 text-xs">Eigenaar</dt><dd className="font-medium">Kevin Smit</dd></div>
                  <div><dt className="text-gray-500 text-xs">Vestigingsplaats</dt><dd className="font-medium">Kortenhoef, gemeente Wijdemeren (Noord-Holland)</dd></div>
                  <div><dt className="text-gray-500 text-xs">Telefoon / WhatsApp</dt><dd><a href="tel:0629528454" className="font-medium hover:text-[#1d6fe8]">06 - 29528454</a></dd></div>
                  <div><dt className="text-gray-500 text-xs">E-mail</dt><dd><a href="mailto:k.smitinstallatietechniek@outlook.com" className="font-medium hover:text-[#1d6fe8] break-all">k.smitinstallatietechniek@outlook.com</a></dd></div>
                  <div><dt className="text-gray-500 text-xs">Bereikbaar</dt><dd className="font-medium">Maandag t/m zaterdag 07:00 – 17:00</dd></div>
                </dl>
                <div className="mt-5 flex flex-col gap-2 text-sm">
                  <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-[#1d6fe8] font-semibold hover:underline">Bekijk op Google Maps →</a>
                  <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" className="text-[#1d6fe8] font-semibold hover:underline">Schrijf een Google-review →</a>
                </div>
              </div>
              <div className="bg-[#0f1f3d] rounded-2xl p-6 text-white">
                <h2 className="font-bold mb-2">Vrijblijvende offerte</h2>
                <p className="text-gray-300 text-sm mb-4">Beschrijf kort de klus, Kevin neemt binnen één werkdag contact op.</p>
                <Link href="/offerte" className="block text-center bg-[#1d6fe8] text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-colors text-sm">
                  Offerte aanvragen →
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
