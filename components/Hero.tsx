import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="bg-[#0f1f3d] text-white overflow-x-hidden">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: Text content ────────────────────────────── */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#1a2f5a] text-blue-300 text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
              Snelle Service | Binnen 24 uur ter plekke
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Vakwerk in dak,
              <br />
              zink, sanitair
              <br />
              en{" "}
              <span className="text-[#1d6fe8]">installatie</span>
            </h1>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-lg">
              Uw gecertificeerde installateur in Kortenhoef. Betrouwbaar, snel
              en professioneel — altijd netjes achtergelaten.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mb-10 text-sm text-gray-300">
              {["Betrouwbaar", "Gecertificeerd", "Snel ter plaatse"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#1d6fe8] text-white font-semibold px-6 py-3.5 rounded-lg hover:bg-blue-600 transition-colors text-sm"
              >
                Offerte aanvragen
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="tel:0629528454"
                className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3.5 rounded-lg hover:bg-white/20 transition-colors text-sm border border-white/20"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Direct bellen
              </a>
            </div>

            <p className="mt-6 text-xs text-gray-400">
              Snel ter plaatse in Kortenhoef en omgeving
            </p>
          </div>

          {/* ── Right: Slideshow + floating bus + badge ─────────── */}
          <HeroVisual />

        </div>
      </div>

      {/* Service bar */}
      <div className="bg-white/5 border-t border-white/10">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-300">
            {["Dakwerk", "Zinkwerk", "Sanitair", "Water", "CV-installatie", "Gas"].map((s) => (
              <a key={s} href="#diensten" className="hover:text-white transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
