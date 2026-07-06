import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const origin = "https://destroy-msk.ru";
const outFile = new URL("../data/pages.json", import.meta.url);

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; DESTROY migration bot)",
    },
  });

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}: ${url}`);
  }

  return response.json();
}

async function fetchAll(type) {
  const first = await fetch(`${origin}/wp-json/wp/v2/${type}?per_page=100&page=1&_embed=1`);
  if (!first.ok) {
    throw new Error(`${first.status} ${first.statusText}: ${type}`);
  }

  const totalPages = Number(first.headers.get("x-wp-totalpages") ?? "1");
  const items = await first.json();

  for (let page = 2; page <= totalPages; page += 1) {
    items.push(...await fetchJson(`${origin}/wp-json/wp/v2/${type}?per_page=100&page=${page}&_embed=1`));
  }

  return items;
}

function stripTags(html = "") {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanHtml(html = "") {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/\sclass="[^"]*"/g, "")
    .replace(/\sid="[^"]*"/g, "")
    .replace(/\sstyle="[^"]*"/g, "")
    .replace(/https:\/\/destroy-msk\.ru/g, "");
}

function normalizeItem(item, type) {
  const link = new URL(item.link);
  const slugPath = link.pathname.replace(/^\/|\/$/g, "");
  const title = stripTags(item.title?.rendered) || "DESTROY";
  const content = cleanHtml(item.content?.rendered ?? "");
  const excerpt = stripTags(item.excerpt?.rendered) || stripTags(item.content?.rendered).slice(0, 180);
  const featured =
    item._embedded?.["wp:featuredmedia"]?.[0]?.source_url ??
    item.yoast_head_json?.og_image?.[0]?.url ??
    null;

  return {
    id: item.id,
    type,
    slug: slugPath,
    title,
    description: item.yoast_head_json?.description || excerpt,
    canonical: item.yoast_head_json?.canonical || `${origin}${link.pathname}`,
    date: item.modified_gmt || item.date_gmt || null,
    featured,
    content,
  };
}

const pages = await fetchAll("pages");
const posts = await fetchAll("posts");

const normalized = [...pages.map((item) => normalizeItem(item, "page")), ...posts.map((item) => normalizeItem(item, "post"))]
  .filter((item) => item.content)
  .sort((a, b) => a.slug.localeCompare(b.slug, "ru"));

await mkdir(dirname(fileURLToPath(outFile)), { recursive: true });
await writeFile(
  outFile,
  JSON.stringify(
    {
      source: origin,
      syncedAt: new Date().toISOString(),
      count: normalized.length,
      pages: normalized,
    },
    null,
    2,
  ),
  "utf8",
);

console.log(`Synced ${normalized.length} pages/posts to ${outFile.pathname}`);
