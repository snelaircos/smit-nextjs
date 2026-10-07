import { locations } from "./data/locations";

const BASE_URL = "https://www.smit-installatie-techniek.nl";

// Google Bedrijfsprofiel (Maps) — vaste links voor kaart en reviews
export const GOOGLE_MAPS_URL = "https://www.google.com/maps?cid=3754040820502495601";
export const GOOGLE_REVIEW_URL = "https://search.google.com/local/writereview?placeid=ChIJ_X1rIW-ffmkRcQFeijwIGTQ";
export const INSTAGRAM_URL = "https://www.instagram.com/smitinstallatietechniek/";

export const kevin = {
  "@type": "Person",
  "@id": `${BASE_URL}/#kevin`,
  name: "Kevin Smit",
  jobTitle: "Eigenaar en installateur",
  url: `${BASE_URL}/over-ons`,
  image: `${BASE_URL}/kevin-profiel.png`,
  worksFor: { "@id": `${BASE_URL}/#business` },
  homeLocation: { "@type": "Place", name: "Kortenhoef" },
  knowsAbout: ["Dakwerk", "Zinkwerk", "Loodgieterswerk", "Sanitair", "CV-installatie", "Gasinstallatie", "Vloerverwarming"],
};

export const localBusiness = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Plumber", "RoofingContractor", "HVACBusiness"],
  "@id": `${BASE_URL}/#business`,
  name: "SMIT Installatie Techniek",
  alternateName: "Smit Installatie Techniek",
  url: BASE_URL,
  telephone: "+31629528454",
  email: "k.smitinstallatietechniek@outlook.com",
  image: `${BASE_URL}/smit-bus.jpg`,
  logo: `${BASE_URL}/logo.svg`,
  description:
    "SMIT Installatie Techniek is het installatiebedrijf van Kevin Smit in Kortenhoef: loodgieter, dakdekker, zinkwerker en cv-monteur voor woningen en bedrijven in Hilversum, Wijdemeren en heel 't Gooi. Dakwerk, zinkwerk, sanitair, CV-installatie en gasinstallatie.",
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
  areaServed: locations.map((l) => ({ "@type": "City", name: l.name })),
  founder: kevin,
  hasMap: GOOGLE_MAPS_URL,
  knowsAbout: ["Dakwerk", "Zinkwerk", "Loodgieterswerk", "Sanitair", "CV-installatie", "Gasinstallatie", "Vloerverwarming", "Dakgoten"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "17:30",
    },
  ],
  sameAs: [INSTAGRAM_URL, GOOGLE_MAPS_URL],
};

export const personSchema = { "@context": "https://schema.org", ...kevin };

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

export function serviceSchema(name: string, description: string, url: string, placeName?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: name,
    description,
    url: `${BASE_URL}${url}`,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#business`,
    },
    areaServed: placeName
      ? { "@type": "City", name: placeName }
      : { "@type": "AdministrativeArea", name: "Het Gooi en omgeving" },
  };
}
