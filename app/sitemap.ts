import { MetadataRoute } from "next";
import { servicesSlugs } from "@/lib/data/services";
import { locationSlugs } from "@/lib/data/locations";

const BASE = "https://www.smit-installatie-techniek.nl";
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/offerte`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/werkgebied`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const servicePages: MetadataRoute.Sitemap = servicesSlugs.map((slug) => ({
    url: `${BASE}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const offertePages: MetadataRoute.Sitemap = servicesSlugs.map((slug) => ({
    url: `${BASE}/offerte/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const locationPages: MetadataRoute.Sitemap = locationSlugs.map((slug) => ({
    url: `${BASE}/werkgebied/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const comboPages: MetadataRoute.Sitemap = servicesSlugs.flatMap((dienst) =>
    locationSlugs.map((plaats) => ({
      url: `${BASE}/${dienst}/${plaats}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [...staticPages, ...servicePages, ...offertePages, ...locationPages, ...comboPages];
}
