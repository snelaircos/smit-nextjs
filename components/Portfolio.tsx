import Image from "next/image";

const projects = [
  {
    title: "Vloerverwarming Aanleg",
    category: "CV-installatie",
    image: "/project-vloerverwarming.png",
  },
  {
    title: "CV-Ketel & Boiler Installatie",
    category: "CV-installatie",
    image: "/project-cv-ketel.png",
  },
  {
    title: "Dakwerk & Lichtkoepels",
    category: "Dakwerk",
    image: "/project-dakwerk.png",
  },
  {
    title: "Zink & Daklijsten",
    category: "Zinkwerk",
    image: "/project-zink-deklijsten.png",
  },
  {
    title: "Dakdekking met Zijkant Zijpannen",
    category: "Zinkwerk & Dakwerk",
    image: "/project-dakkapel-zink.png",
  },
  {
    title: "Dakgoot Reiniging",
    category: "Dakwerk & Onderhoud",
    image: "/project-goot-na.png",
  },
];

const categoryColors: Record<string, string> = {
  "CV-installatie": "bg-blue-600",
  Dakwerk: "bg-[#0f1f3d]",
  Zinkwerk: "bg-gray-700",
  "Zinkwerk & Dakwerk": "bg-gray-600",
  "Dakwerk & Onderhoud": "bg-[#0f1f3d]",
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-[#1d6fe8] text-sm font-semibold uppercase tracking-widest mb-2">
              Portfolio
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1f3d]">
              Recent Uitgevoerd Werk
            </h2>
          </div>
          <a
            href="#contact"
            className="text-[#1d6fe8] text-sm font-semibold hover:underline shrink-0 flex items-center gap-1"
          >
            Zelf een project? Neem contact op
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 shadow-sm hover:shadow-xl transition-shadow"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />

              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span
                  className={`${
                    categoryColors[project.category] ?? "bg-gray-700"
                  } text-white text-xs font-semibold px-3 py-1 rounded-full`}
                >
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-bold text-base leading-snug drop-shadow">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
