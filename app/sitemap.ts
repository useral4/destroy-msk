import type { MetadataRoute } from "next";
import { getCustomPages } from "./customContent";
import { getRenderedPages } from "./renderedSite";

const base = "https://destroy-msk.ru";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const rendered = getRenderedPages().map((page) => ({
    url: page.slug ? `${base}/${page.slug}/` : `${base}/`,
    lastModified: new Date(),
    changeFrequency: page.slug ? ("weekly" as const) : ("daily" as const),
    priority: page.slug ? 0.72 : 1,
  }));

  const custom = getCustomPages().map((page) => ({
    url: `${base}/${page.slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: page.slug === "calc" || page.slug === "nashi-obekty" ? 0.9 : 0.78,
  }));

  const seen = new Set<string>();
  return [...custom, ...rendered].filter((item) => {
    if (seen.has(item.url)) return false;
    seen.add(item.url);
    return true;
  });
}
