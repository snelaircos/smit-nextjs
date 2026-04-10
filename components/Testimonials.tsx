const reviews = [
  {
    quote:
      "SMIT heeft onze badkamer fantastisch gerenoveerd. De communicatie verliep soepel en het eindresultaat is prachtig. Echt een vakman die alle moeite doet!",
    name: "Jan de Vries",
    location: "Kortenhoef",
    initials: "J",
  },
  {
    quote:
      "Midden in de nacht een lekkage aan het dak. Binnen no-time was hij ter plaatse en de reparatie was snel en professioneel uitgevoerd. Ontzettend dankbaar.",
    name: "Saskia Bakker",
    location: "Loosdrecht",
    initials: "S",
  },
  {
    quote:
      "Nieuwe CV-ketel laten plaatsen. Alles netjes achtergelaten, duidelijke uitleg gekregen over de werking en een eerlijke prijs. Aanrader!",
    name: "Peter van den Berg",
    location: "Hilversum",
    initials: "P",
  },
];

function StarRating() {
  return (
    <div className="flex gap-1 text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="klanten" className="py-20 bg-gray-50">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-3">
            <StarRating />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1f3d] mb-3">
            Wat Onze Klanten Zeggen
          </h2>
          <p className="text-gray-500 text-lg">
            Meer dan 150+ tevreden klanten in de regio gingen u al voor.
          </p>
        </div>

        {/* Reviews grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col"
            >
              {/* Quote mark */}
              <div className="text-4xl text-gray-200 font-serif leading-none mb-4">&ldquo;</div>
              <p className="text-gray-700 leading-relaxed text-sm flex-1 mb-6">{review.quote}</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0f1f3d] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  {review.initials}
                </div>
                <div>
                  <p className="font-semibold text-[#0f1f3d] text-sm">{review.name}</p>
                  <p className="text-gray-400 text-xs">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
