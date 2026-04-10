const reasons = [
  {
    title: "Snel ter plaatse",
    description:
      "Vanuit Kortenhoef zijn we snel in de hele regio. Bij spoed proberen we dezelfde dag ter plaatse te zijn.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Netjes en betrouwbaar",
    description:
      "Elke klus wordt strak afgewerkt. We behandelen uw woning met respect en laten de werkplek altijd schoon achter.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Brede expertise",
    description:
      "Dakwerk, zinkwerk, sanitair, CV en gas — één vakman die alles kent. Geen wildvreemden die eenmalig langskomen.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: "Eerlijke, heldere prijzen",
    description:
      "U ontvangt altijd een vaste offerte vooraf. Geen vage richtprijzen, geen verrassingen achteraf. U weet precies waar u aan toe bent.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
];

export default function WhySmit() {
  return (
    <section id="waarom-smit" className="py-20 bg-[#0f1f3d] text-white">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-[#1d6fe8] text-sm font-semibold uppercase tracking-widest mb-4">
              Waarom SMIT
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              Een vakman die gewoon zijn werk goed doet
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Geen callcenter, geen onderaannemers die u niet kent. Kevin Smit is de vakman die opneemt, langskomt en het werk uitvoert. Persoonlijk, betrouwbaar en met oog voor kwaliteit.
            </p>
            <p className="text-gray-400 leading-relaxed mb-10">
              Als gevestigd installatiebedrijf in Kortenhoef werken we al jaren voor woningeigenaren en bedrijven in Het Gooi en omgeving. We kennen de regio, we kennen de woningen en we weten wat er speelt. Dat maakt een verschil.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-[#0f1f3d] font-semibold px-6 py-3.5 rounded-lg hover:bg-gray-100 transition-colors text-sm"
            >
              Maak een afspraak
            </a>
          </div>

          {/* Right: Reasons grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 bg-[#1d6fe8]/20 rounded-xl flex items-center justify-center text-[#1d6fe8] mb-4">
                  {reason.icon}
                </div>
                <h3 className="font-bold text-base mb-2">{reason.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
