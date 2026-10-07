import { getLocation, type Location } from "./locations";

/**
 * Buurplaatsen per plaats (geografisch logisch, dichtstbijzijnde eerst).
 * Gebruikt voor interne links "Loodgieter in de buurt van ...".
 */
const nearby: Record<string, string[]> = {
  kortenhoef: ["s-graveland", "ankeveen", "nederhorst-den-berg", "loosdrecht", "hilversum", "wijdemeren"],
  hilversum: ["kortenhoef", "s-graveland", "loosdrecht", "bussum", "laren", "hollandsche-rading"],
  huizen: ["blaricum", "naarden", "bussum", "laren", "eemnes"],
  naarden: ["bussum", "huizen", "muiden", "weesp", "laren"],
  bussum: ["naarden", "hilversum", "huizen", "laren", "s-graveland"],
  mijdrecht: ["breukelen", "maarssen", "nederhorst-den-berg", "weesp"],
  loosdrecht: ["kortenhoef", "hilversum", "hollandsche-rading", "breukelen", "wijdemeren"],
  "nederhorst-den-berg": ["kortenhoef", "ankeveen", "weesp", "s-graveland"],
  ankeveen: ["kortenhoef", "s-graveland", "nederhorst-den-berg", "hilversum"],
  "hollandsche-rading": ["loosdrecht", "hilversum", "maarssen"],
  weesp: ["muiden", "nederhorst-den-berg", "naarden", "ankeveen"],
  "s-graveland": ["kortenhoef", "ankeveen", "hilversum", "bussum"],
  breukelen: ["maarssen", "loosdrecht", "mijdrecht"],
  maarssen: ["breukelen", "hollandsche-rading", "mijdrecht"],
  baarn: ["soest", "eemnes", "laren", "hilversum"],
  eemnes: ["laren", "blaricum", "baarn", "huizen"],
  laren: ["blaricum", "hilversum", "eemnes", "huizen", "baarn"],
  blaricum: ["laren", "huizen", "eemnes"],
  muiden: ["weesp", "naarden"],
  soest: ["baarn", "eemnes", "hilversum"],
  wijdemeren: ["kortenhoef", "loosdrecht", "ankeveen", "nederhorst-den-berg", "s-graveland"],
};

export function getNearby(slug: string, max = 6): Location[] {
  return (nearby[slug] ?? [])
    .map((s) => getLocation(s))
    .filter((l): l is Location => Boolean(l))
    .slice(0, max);
}
