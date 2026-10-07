import Image from "next/image";
import Link from "next/link";
import { GOOGLE_MAPS_URL, GOOGLE_REVIEW_URL } from "@/lib/structured-data";

const services = [
  { label: "Dakwerk & dakdekker", href: "/dakwerk" },
  { label: "Zinkwerk & dakgoten", href: "/zinkwerk" },
  { label: "Loodgieter & sanitair", href: "/sanitair" },
  { label: "CV-installatie", href: "/cv-installatie" },
  { label: "Gasinstallatie", href: "/gasinstallatie" },
  { label: "Installatietechniek", href: "/installatietechniek" },
];

const populair = [
  { label: "Loodgieter Hilversum", href: "/sanitair/hilversum" },
  { label: "Dakdekker Hilversum", href: "/dakwerk/hilversum" },
  { label: "Loodgieter Huizen", href: "/sanitair/huizen" },
  { label: "Loodgieter Bussum", href: "/sanitair/bussum" },
  { label: "Loodgieter Kortenhoef", href: "/sanitair/kortenhoef" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/logo.svg"
              alt="SMIT Installatie Techniek"
              width={110}
              height={40}
              className="mb-4 brightness-200 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Loodgieter, dakdekker en cv-monteur in &apos;t Gooi. Kevin Smit uit
              Kortenhoef voor dakwerk, zinkwerk, sanitair, CV en gas. Vakmanschap waar u
              op kunt bouwen.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/smitinstallatietechniek/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#1d6fe8] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-5">
              Onze Diensten
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-gray-300 text-sm hover:text-white transition-colors flex items-center gap-2"
                  >
                    <svg className="w-3 h-3 text-[#1d6fe8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-5">
              Contact Info
            </h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#1d6fe8] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-gray-500 text-xs mb-0.5">Bel of WhatsApp</p>
                  <a href="tel:0629528454" className="hover:text-white transition-colors">
                    06 - 29528454
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#1d6fe8] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-gray-500 text-xs mb-0.5">E-mail ons</p>
                  <a
                    href="mailto:k.smitinstallatietechniek@outlook.com"
                    className="hover:text-white transition-colors break-all"
                  >
                    k.smitinstallatietechniek@outlook.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#1d6fe8] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                <div>
                  <p className="text-gray-500 text-xs mb-0.5">Tevreden klant?</p>
                  <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Schrijf een Google-review
                  </a>
                  <span className="text-gray-600"> · </span>
                  <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Bekijk op Google Maps
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Werkgebied */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-5">
              Werkgebied
            </h4>
            <div className="flex items-start gap-3 mb-3">
              <svg className="w-4 h-4 text-[#1d6fe8] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p className="text-white font-semibold text-sm mb-1">Gevestigd in Kortenhoef</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Wij zijn snel ter plaatse in Kortenhoef, Hilversum, Loosdrecht,
                  &apos;s-Graveland en de rest van Het Gooi.
                </p>
              </div>
            </div>
            <ul className="space-y-2 mt-4">
              {populair.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-gray-300 text-sm hover:text-white transition-colors">
                    {p.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/werkgebied" className="text-[#1d6fe8] text-sm font-semibold hover:underline">
                  Alle werkgebieden →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} SMIT Installatie Techniek. Alle rechten voorbehouden.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/over-ons" className="hover:text-white transition-colors">
              Over Kevin Smit
            </Link>
            <Link href="/algemene-voorwaarden" className="hover:text-white transition-colors">
              Algemene Voorwaarden
            </Link>
            <a href="https://snelliowebdesign.nl" className="hover:text-white transition-colors">
              Website door Snellio Webdesign
            </a>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacyverklaring
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
