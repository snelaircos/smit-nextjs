export type Location = {
  slug: string;
  name: string;
  isHQ?: boolean;
  gemeente?: string;
  regio: string;
  description: string; // 1-2 zinnen lokale context voor landingspagina's
  extraContext?: string; // extra zin voor combo-pagina's
};

export const locations: Location[] = [
  {
    slug: "kortenhoef",
    name: "Kortenhoef",
    isHQ: true,
    gemeente: "Wijdemeren",
    regio: "Noord-Holland",
    description:
      "Kortenhoef is de thuisbasis van SMIT Installatie Techniek. Wij kennen dit dorp als geen ander en zijn er snel bij voor elke klus.",
    extraContext: "Als lokaal bedrijf gevestigd in Kortenhoef zijn wij in dit dorp altijd als eerste beschikbaar.",
  },
  {
    slug: "hilversum",
    name: "Hilversum",
    gemeente: "Hilversum",
    regio: "Noord-Holland",
    description:
      "Hilversum is de grootste stad in het Gooi en een belangrijke werklocatie voor SMIT. We zijn er regelmatig actief in zowel de oudere wijken als nieuwbouwprojecten.",
    extraContext: "In Hilversum werken we voor particulieren in wijken als 's-Graveland, Kerkelanden en de Componistenwijk.",
  },
  {
    slug: "huizen",
    name: "Huizen",
    gemeente: "Huizen",
    regio: "Noord-Holland",
    description:
      "Huizen ligt direct aan het Gooimeer en heeft veel jaren-'60 en jaren-'70 woningen waarbij dakwerk, zinkwerk en sanitair regelmatig aan renovatie toe zijn.",
    extraContext: "In Huizen zijn we actief in onder andere de woonwijken rondom het centrum en de havens.",
  },
  {
    slug: "naarden",
    name: "Naarden",
    gemeente: "Gooise Meren",
    regio: "Noord-Holland",
    description:
      "Naarden is een historische vestingstad met veel karakteristieke woningen en panden die vakkundig onderhoud vragen.",
    extraContext: "De historische binnenstad van Naarden vraagt om zorgvuldig en respectvol vakwerk.",
  },
  {
    slug: "bussum",
    name: "Bussum",
    gemeente: "Gooise Meren",
    regio: "Noord-Holland",
    description:
      "Bussum heeft een groot aandeel villa's en rijtjeswoningen uit de vroege twintigste eeuw. Daken en sanitair in deze woningen vragen om ervaren vakmannen.",
    extraContext: "In Bussum werken we regelmatig aan karakteristieke villa's en oudere woningen in het Spiegel- en Brediuskwartier.",
  },
  {
    slug: "mijdrecht",
    name: "Mijdrecht",
    gemeente: "De Ronde Venen",
    regio: "Utrecht",
    description:
      "Mijdrecht ligt in de Ronde Venen en valt net buiten het Gooi, maar wordt door SMIT Installatie Techniek goed bediend vanuit Kortenhoef.",
    extraContext: "Vanuit Kortenhoef rijden we snel naar Mijdrecht en de omliggende polderkernen.",
  },
  {
    slug: "loosdrecht",
    name: "Loosdrecht",
    gemeente: "Wijdemeren",
    regio: "Noord-Holland",
    description:
      "Loosdrecht is bekend om zijn plassen en waterrijke omgeving. Hier staan veel vakantiewoningen en chalets waarbij dakwerk en sanitair jaarlijks aandacht vragen.",
    extraContext: "In Loosdrecht zijn we bekend met de specifieke eisen van waterwoningen en recreatiewoningen.",
  },
  {
    slug: "nederhorst-den-berg",
    name: "Nederhorst den Berg",
    gemeente: "Wijdemeren",
    regio: "Noord-Holland",
    description:
      "Nederhorst den Berg is een rustig dorp in de gemeente Wijdemeren, dicht bij Kortenhoef. Wij zijn hier snel ter plaatse.",
    extraContext: "Als buurdorp van Kortenhoef zijn we in Nederhorst den Berg vrijwel altijd dezelfde dag beschikbaar.",
  },
  {
    slug: "ankeveen",
    name: "Ankeveen",
    gemeente: "Wijdemeren",
    regio: "Noord-Holland",
    description:
      "Ankeveen is een klein dorp in de gemeente Wijdemeren, omgeven door water en groen. Wij kennen de lokale woningbouw goed.",
    extraContext: "In dit stille veendorp zijn we als lokale installateur bekend en vertrouwd.",
  },
  {
    slug: "hollandsche-rading",
    name: "Hollandsche Rading",
    gemeente: "De Bilt",
    regio: "Utrecht",
    description:
      "Hollandsche Rading is een bospijlerdorp op de grens van Utrecht en Noord-Holland, direct bereikbaar vanuit Kortenhoef.",
    extraContext: "De bosrijke omgeving van Hollandsche Rading vraagt om vakmannen die snel ter plekke zijn.",
  },
  {
    slug: "weesp",
    name: "Weesp",
    gemeente: "Amsterdam",
    regio: "Noord-Holland",
    description:
      "Weesp is een historische stad met veel grachtenpanden en oudere woningen die regelmatig onderhoud vragen. SMIT is er actief.",
    extraContext: "De grachtenpanden en historische woningen in Weesp vragen om precisie en vakkennis.",
  },
  {
    slug: "s-graveland",
    name: "'s-Graveland",
    gemeente: "Wijdemeren",
    regio: "Noord-Holland",
    description:
      "'s-Graveland is een karakteristiek dorp met buitenplaatsen en landgoederen. Wij voeren hier dakwerk en installatietechniek uit op maat.",
    extraContext: "De monumentale panden en buitenplaatsen rond 's-Graveland vragen om zorgvuldig en nauwkeurig vakwerk.",
  },
  {
    slug: "breukelen",
    name: "Breukelen",
    gemeente: "Stichtse Vecht",
    regio: "Utrecht",
    description:
      "Breukelen ligt aan de Vecht en heeft veel oude en karakteristieke woningen. SMIT bedient de regio Breukelen vanuit Kortenhoef.",
    extraContext: "In Breukelen en langs de Vecht werken we voor particulieren en bedrijven met diverse installatieklussen.",
  },
  {
    slug: "maarssen",
    name: "Maarssen",
    gemeente: "Stichtse Vecht",
    regio: "Utrecht",
    description:
      "Maarssen is een grote kern in Stichtse Vecht, met veel nieuwbouwwijken én oudere woningen langs de rivier de Vecht.",
    extraContext: "In Maarssen komen we regelmatig voor CV-installaties en dakwerk in zowel nieuwe als bestaande woningen.",
  },
  {
    slug: "baarn",
    name: "Baarn",
    gemeente: "Baarn",
    regio: "Utrecht",
    description:
      "Baarn staat bekend om zijn fraaie villawijken en bossen. Hier werken we voor eigenaren van grotere woningen die kwaliteit en betrouwbaarheid verwachten.",
    extraContext: "In de villawijken van Baarn leveren we discreet, netjes en kwalitatief hoogwaardig vakwerk.",
  },
  {
    slug: "eemnes",
    name: "Eemnes",
    gemeente: "Eemnes",
    regio: "Utrecht",
    description:
      "Eemnes is een agrarisch dorp aan het Eemmeer. We bedienen zowel de woningen in de kern als de bebouwing in het buitengebied.",
    extraContext: "In Eemnes kennen we de combinatie van landelijke woningen en moderne nieuwbouw goed.",
  },
  {
    slug: "laren",
    name: "Laren",
    gemeente: "Laren",
    regio: "Noord-Holland",
    description:
      "Laren is een van de meest welgestelde gemeenten van Nederland, met prachtige villa's en landgoederen die de beste vakmannen verdienen.",
    extraContext: "In Laren leveren we hoogwaardig vakwerk voor veeleisende opdrachtgevers met mooie woningen.",
  },
  {
    slug: "blaricum",
    name: "Blaricum",
    gemeente: "BEL-combinatie",
    regio: "Noord-Holland",
    description:
      "Blaricum heeft veel exclusieve woningen en boerderij-ombouwen. Wij voeren hier dakwerk, zinkwerk en installaties uit op hoog niveau.",
    extraContext: "De exclusieve woningtypen in Blaricum vragen om vakmannen die kwaliteit en precisie hoog in het vaandel hebben.",
  },
  // Aanvullende plaatsen — SEO-technisch relevant
  {
    slug: "muiden",
    name: "Muiden",
    gemeente: "Gooise Meren",
    regio: "Noord-Holland",
    description:
      "Muiden is een historisch stadje aan het IJmeer. We zijn actief in Muiden voor dakwerk en installatietechniek.",
    extraContext: "In Muiden werken we voor woningen in de historische kern en de nieuwere wijken.",
  },
  {
    slug: "soest",
    name: "Soest",
    gemeente: "Soest",
    regio: "Utrecht",
    description:
      "Soest is een woonaantrekkelijk dorp aan de rand van het Utrechtse Heuvelrug, goed bereikbaar vanuit Kortenhoef.",
    extraContext: "In Soest en Soestdijk zijn we regelmatig actief voor CV, sanitair en dakwerk.",
  },
  {
    slug: "wijdemeren",
    name: "Wijdemeren",
    gemeente: "Wijdemeren",
    regio: "Noord-Holland",
    description:
      "De gemeente Wijdemeren is de thuisgemeente van SMIT Installatie Techniek. We werken door de hele gemeente, van Kortenhoef tot Loosdrecht.",
    extraContext: "Als installatiebedrijf in de gemeente Wijdemeren kennen wij alle dorpen en woonkernen.",
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export const locationSlugs = locations.map((l) => l.slug);
