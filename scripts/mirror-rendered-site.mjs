import { mkdir, readFile, writeFile, copyFile } from "node:fs/promises";
import { createWriteStream } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { pipeline } from "node:stream/promises";

const origin = "https://destroy-msk.ru";
const sourceDir = "C:/Users/user/Documents/Codex/destroy-msk-source";
const publicDir = resolve("public");
const pagesDir = resolve("data/rendered-pages");
const manifestFile = resolve("data/rendered-pages-manifest.json");

const sitemapPaths = [
  "post-sitemap.xml",
  "page-sitemap.xml",
  "quizle-sitemap.xml",
  "category-sitemap.xml",
  "author-sitemap.xml",
];

const assetExtensions = /\.(css|js|mjs|json|png|jpe?g|webp|gif|svg|ico|woff2?|ttf|eot|mp4|webm|pdf)(\?.*)?$/i;
const skipAssetPrefixes = ["/wp-admin/", "/wp-json/", "/xmlrpc.php"];

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; DESTROY Next mirror)",
    },
  });

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}: ${url}`);
  }

  return response.text();
}

async function fetchBufferToFile(url, outputPath) {
  const response = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; DESTROY Next mirror)",
    },
  });

  if (!response.ok || !response.body) {
    throw new Error(`${response.status} ${response.statusText}: ${url}`);
  }

  await mkdir(dirname(outputPath), { recursive: true });
  await pipeline(response.body, createWriteStream(outputPath));
}

function pageSlug(url) {
  return new URL(url).pathname.replace(/^\/|\/$/g, "");
}

function pageFile(slug) {
  return slug ? `${slug.replace(/[/?#%:*|"<>\\]/g, "_")}.html` : "index.html";
}

function normalizeAssetPath(urlLike, base = origin) {
  if (!urlLike || urlLike.startsWith("data:") || urlLike.startsWith("mailto:") || urlLike.startsWith("tel:")) {
    return null;
  }

  const firstSrcsetUrl = urlLike.split(",")[0]?.trim().split(/\s+/)[0] ?? urlLike;

  try {
    const parsed = new URL(firstSrcsetUrl, base);
    if (parsed.origin !== origin) {
      return null;
    }

    if (skipAssetPrefixes.some((prefix) => parsed.pathname.startsWith(prefix))) {
      return null;
    }

    if (!assetExtensions.test(parsed.pathname)) {
      return null;
    }

    return parsed.pathname;
  } catch {
    return null;
  }
}

function collectAssetsFromHtml(html) {
  const assets = new Set();
  const attrPattern = /\s(?:href|src|data-src|data-srcset|srcset|data-webp|data-src-webp|data-lazy-src|data-lazy-srcset)=["']([^"']+)["']/gi;

  for (const match of html.matchAll(attrPattern)) {
    const path = normalizeAssetPath(match[1]);
    if (path) {
      assets.add(path);
    }
  }

  for (const match of html.matchAll(/url\((['"]?)([^)'"]+)\1\)/gi)) {
    const path = normalizeAssetPath(match[2]);
    if (path) {
      assets.add(path);
    }
  }

  return assets;
}

function collectAssetsFromCss(css, cssPath) {
  const assets = new Set();
  const base = `${origin}${cssPath}`;

  for (const match of css.matchAll(/url\((['"]?)([^)'"]+)\1\)/gi)) {
    const path = normalizeAssetPath(match[2], base);
    if (path) {
      assets.add(path);
    }
  }

  return assets;
}

function rewriteHtml(html) {
  return html
    .replace(/https:\/\/destroy-msk\.ru\//g, "/")
    .replace(/https:\\\/\\\/destroy-msk\.ru\\\//g, "\\/")
    .replace(/http:\/\/destroy-msk\.ru\//g, "/")
    .replace(/<script>function disable_keystrokes[\s\S]*?<\/script>/gi, "")
    .replace(/<script>function disableSelection[\s\S]*?<\/script>/gi, "")
    .replace(/<script>document\.oncontextmenu[\s\S]*?<\/script>/gi, "");
}

async function copySourceAssets() {
  const files = await listFiles(sourceDir);

  for (const file of files) {
    const relative = file.slice(sourceDir.length + 1).replaceAll("\\", "/");
    if (relative === "index.html" || relative === "read_me.txt") {
      continue;
    }

    const output = join(publicDir, relative);
    await mkdir(dirname(output), { recursive: true });
    await copyFile(file, output);
  }
}

async function listFiles(dir) {
  const { readdir } = await import("node:fs/promises");
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await listFiles(fullPath));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

async function downloadAsset(path, queue, seen) {
  const cleanPath = decodeURIComponent(path.split("?")[0]);
  const output = join(publicDir, cleanPath.replace(/^\//, ""));

  try {
    await fetchBufferToFile(`${origin}${path}`, output);

    if (/\.css$/i.test(cleanPath)) {
      const css = await readFile(output, "utf8");
      for (const nested of collectAssetsFromCss(css, cleanPath)) {
        if (!seen.has(nested)) {
          seen.add(nested);
          queue.push(nested);
        }
      }
    }
  } catch (error) {
    console.warn(`Asset skipped: ${path} (${error.message})`);
  }
}

async function main() {
  await mkdir(pagesDir, { recursive: true });
  await copySourceAssets();

  const pageUrls = new Set([`${origin}/`]);
  for (const sitemapPath of sitemapPaths) {
    const xml = await fetchText(`${origin}/${sitemapPath}`);
    for (const match of xml.matchAll(/<loc>(.*?)<\/loc>/g)) {
      pageUrls.add(match[1]);
    }
  }

  const assetQueue = [];
  const seenAssets = new Set();
  const pages = [];

  for (const url of [...pageUrls]) {
    const slug = pageSlug(url);
    const file = pageFile(slug);
    const html = await fetchText(url);
    const rewritten = rewriteHtml(html);

    await writeFile(join(pagesDir, file), rewritten, "utf8");

    for (const asset of collectAssetsFromHtml(html)) {
      if (!seenAssets.has(asset)) {
        seenAssets.add(asset);
        assetQueue.push(asset);
      }
    }

    pages.push({
      slug,
      file,
      url: slug ? `/${slug}/` : "/",
    });

    console.log(`Mirrored page: /${slug}`);
  }

  for (let index = 0; index < assetQueue.length; index += 1) {
    await downloadAsset(assetQueue[index], assetQueue, seenAssets);
  }

  await writeFile(
    manifestFile,
    JSON.stringify(
      {
        source: origin,
        mirroredAt: new Date().toISOString(),
        pages,
      },
      null,
      2,
    ),
    "utf8",
  );

  console.log(`Mirrored ${pages.length} pages and ${seenAssets.size} assets.`);
}

await main();
