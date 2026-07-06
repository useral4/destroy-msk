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

async function fetchSitemapUrls(path) {
  const response = await fetch(`${origin}/${path}`, {
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; DESTROY migration bot)",
    },
  });

  if (!response.ok) {
    return [];
  }

  const xml = await response.text();
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
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
    .replace(/(src|srcset)="\/wp-content/gi, `$1="${origin}/wp-content`)
    .replace(/href="https:\/\/destroy-msk\.ru\//g, 'href="/');
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
    categories: item.categories ?? [],
    author: item.author ?? null,
    content,
  };
}

function archiveDescription(title) {
  return `${title}: выполненные демонтажные работы в Москве и Московской области. Аккуратная разборка, погрузка и вывоз строительного мусора.`;
}

function archiveContent(title, description, items) {
  const cards = items
    .map((item) => {
      const img = item.featured
        ? `<img src="${item.featured}" alt="${item.title}" loading="lazy" />`
        : "";

      return `<article class="archive-card">
        ${img}
        <div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <a href="/${item.slug}/">Подробнее</a>
        </div>
      </article>`;
    })
    .join("");

  return `<section class="archive-list">
    <h2>${title}</h2>
    <p>${description}</p>
    <div class="archive-grid">${cards}</div>
  </section>`;
}

function normalizeArchive({ id, slug, title, description, canonical, date, featured, items, type }) {
  return {
    id,
    type,
    slug,
    title,
    description,
    canonical,
    date,
    featured,
    categories: [],
    author: null,
    content: archiveContent(title, description, items),
  };
}

function normalizeQuizPage(slug) {
  const title = "Узнайте стоимость демонтажа онлайн за 2 минуты";
  const description = "Калькулятор DESTROY для предварительной оценки демонтажных работ в Москве и Московской области.";

  return {
    id: `quizle-${slug}`,
    type: "quizle",
    slug,
    title,
    description,
    canonical: `${origin}/${slug}/`,
    date: "2025-10-06T11:34:06",
    featured: null,
    categories: [],
    author: null,
    content: `<section class="quiz-fallback">
      <h2>${title}</h2>
      <p>${description}</p>
      <form>
        <label>Тип объекта<select><option>Квартира</option><option>Дом</option><option>Коммерческое помещение</option></select></label>
        <label>Какие работы нужны<select><option>Демонтаж пола</option><option>Демонтаж перегородок</option><option>Полный демонтаж под ключ</option></select></label>
        <label>Площадь, м²<input type="number" min="1" placeholder="Например, 60" /></label>
        <label>Телефон<input type="tel" placeholder="+7 (___) ___-__-__" /></label>
        <button type="button">Получить расчет цены</button>
      </form>
    </section>`,
  };
}

const pages = await fetchAll("pages");
const posts = await fetchAll("posts");
const categories = await fetchAll("categories");
const users = await fetchAll("users");
const sitemapUrls = [
  ...(await fetchSitemapUrls("post-sitemap.xml")),
  ...(await fetchSitemapUrls("page-sitemap.xml")),
  ...(await fetchSitemapUrls("quizle-sitemap.xml")),
  ...(await fetchSitemapUrls("category-sitemap.xml")),
  ...(await fetchSitemapUrls("author-sitemap.xml")),
];

const normalizedPosts = posts.map((item) => normalizeItem(item, "post"));
const normalizedPages = pages.map((item) => normalizeItem(item, "page"));
const sitemapSlugs = new Set(sitemapUrls.map((url) => new URL(url).pathname.replace(/^\/|\/$/g, "")));

const categoryArchives = categories
  .filter((category) => category.count > 0)
  .map((category) => {
    const slug = new URL(category.link).pathname.replace(/^\/|\/$/g, "");
    const title = `Архивы ${category.name}`;
    const items = normalizedPosts.filter((post) => post.categories.includes(category.id));

    return normalizeArchive({
      id: `category-${category.id}`,
      type: "category",
      slug,
      title,
      description: category.yoast_head_json?.description || archiveDescription(title),
      canonical: `${origin}/${slug}/`,
      date: items[0]?.date ?? null,
      featured: items[0]?.featured ?? null,
      items,
    });
  })
  .filter((archive) => sitemapSlugs.has(archive.slug));

const authorArchives = users.map((user) => {
  const slug = new URL(user.link).pathname.replace(/^\/|\/$/g, "");
  const title = `${user.name}, Автор в DESTROY`;
  const items = normalizedPosts.filter((post) => post.author === user.id);

  return normalizeArchive({
    id: `author-${user.id}`,
    type: "author",
    slug,
    title,
    description: user.yoast_head_json?.description || "DESTROY - услуги демонтажа в Москве и Московской области.",
    canonical: `${origin}/${slug}/`,
    date: items[0]?.date ?? null,
    featured: items[0]?.featured ?? null,
    items,
  });
}).filter((archive) => sitemapSlugs.has(archive.slug));

const quizPages = [...sitemapSlugs]
  .filter((slug) => slug === "quizle" || slug.startsWith("quizle/"))
  .map((slug) => normalizeQuizPage(slug));

const normalized = [...normalizedPages, ...normalizedPosts, ...categoryArchives, ...authorArchives, ...quizPages]
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
