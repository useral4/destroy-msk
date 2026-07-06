import type { MetadataRoute } from "next";
import contentData from "../data/pages.json";

const base = "https://destroy-msk.ru";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return contentData.pages.map((page) => ({
    url: page.slug ? `${base}/${page.slug}/` : `${base}/`,
    lastModified: page.date ? new Date(page.date) : new Date(),
    changeFrequency: page.slug ? "weekly" : "daily",
    priority: page.slug ? 0.72 : 1,
  }));
}
