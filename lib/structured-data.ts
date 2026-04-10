const BASE_URL = "https://www.smit-installatie-techniek.nl";

export const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#business`,
  name: "SMIT Installatie Techniek",
  url: BASE_URL,
  telephone: "06-29528454",
  email: "k.smitinstallatietechniek@outlook.nl",
  image: `${BASE_URL}/logo.svg`,
  logo: `${BASE_URL}/logo.svg`,
  description:
    "SMIT Installatie Techniek is een gecertificeerd installatiebedrijf in Kortenhoef, actief in dakwerk, zinkwerk, sanitair, CV-installatie en gasinstallatie in het Gooi en omgeving.",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kortenhoef",
    addressRegion: "Noord-Holland",
    addressCountry: "NL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.2362,
    longitude: 5.0857,
  },
  areaServed: [
    "Kortenhoef",
    "Hilversum",
    "Huizen",
    "Naarden",
    "Bussum",
    "Loosdrecht",
    "Laren",
    "Blaricum",
    "Baarn",
    "'s-Graveland",
    "Weesp",
    "Maarssen",
    "Breukelen",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "17:30",
    },
  ],
  sameAs: [
    "https://www.facebook.com/smitinstallatietechniek",
    "https://www.instagram.com/smitinstallatietechniek",
  ],
};

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };
}

export function faqSchema(faq: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${BASE_URL}${url}`,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#business`,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Het Gooi en omgeving",
    },
  };
}
