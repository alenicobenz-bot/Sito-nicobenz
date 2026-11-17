/**
 * Dopo `craco build`, copia build/index.html in una cartella per ogni rotta
 * reale e ci scrive title, description, canonical e Open Graph di quella pagina.
 *
 * Vercel serve il file se esiste. Senza il rewrite catch-all, un URL sconosciuto
 * trova public/404.html e risponde 404. Un articolo nuovo in blogArticles.js
 * entra qui al build successivo, dalla stessa fonte della sitemap.
 */

const fs = require("fs");
const path = require("path");
const { DEFAULT_OG_IMAGE, getStaticRoutes } = require("./site-routes");

const BUILD_DIR = path.join(__dirname, "..", "build");
const HOME_FILE = path.join(BUILD_DIR, "index.html");

function escapeText(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeAttr(value) {
  return escapeText(value).replace(/"/g, "&quot;");
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function setMeta(html, attr, key, content) {
  const tag = `<meta ${attr}="${key}" content="${escapeAttr(content)}"/>`;
  const keyRe = escapeRegExp(key);
  const patterns = [
    new RegExp(`<meta\\s+${attr}="${keyRe}"\\s+content="[^"]*"\\s*/?>`, "i"),
    new RegExp(`<meta\\s+content="[^"]*"\\s+${attr}="${keyRe}"\\s*/?>`, "i"),
  ];
  for (const re of patterns) {
    if (re.test(html)) return html.replace(re, tag);
  }
  return html.replace(/<\/head>/i, `${tag}</head>`);
}

function removeMeta(html, attr, key) {
  const keyRe = escapeRegExp(key);
  return html
    .replace(new RegExp(`<meta\\s+${attr}="${keyRe}"\\s+content="[^"]*"\\s*/?>`, "gi"), "")
    .replace(new RegExp(`<meta\\s+content="[^"]*"\\s+${attr}="${keyRe}"\\s*/?>`, "gi"), "");
}

function applyPage(html, page) {
  if (!/<title>[\s\S]*?<\/title>/i.test(html)) {
    throw new Error("[static] Missing title in built index.html");
  }
  let next = html.replace(
    /<title>[\s\S]*?<\/title>/i,
    `<title>${escapeText(page.title)}</title>`
  );
  next = setMeta(next, "name", "title", page.title);
  next = setMeta(next, "name", "description", page.description);
  const canonicalTag = `<link rel="canonical" href="${escapeAttr(page.canonical)}"/>`;
  const canonicalRes = [
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
    /<link\s+href="[^"]*"\s+rel="canonical"\s*\/?>/i,
  ];
  const canonicalRe = canonicalRes.find((re) => re.test(next));
  if (!canonicalRe) {
    throw new Error("[static] Missing canonical in built index.html");
  }
  next = next.replace(canonicalRe, canonicalTag);
  next = setMeta(next, "property", "og:title", page.title);
  next = setMeta(next, "property", "og:description", page.description);
  next = setMeta(next, "property", "og:url", page.canonical);
  next = setMeta(next, "property", "og:image", page.ogImage);
  next = setMeta(next, "property", "og:type", page.ogType || "website");
  next = setMeta(next, "property", "twitter:title", page.title);
  next = setMeta(next, "property", "twitter:description", page.description);
  next = setMeta(next, "property", "twitter:url", page.canonical);
  next = setMeta(next, "property", "twitter:image", page.ogImage);

  if (page.ogImage === DEFAULT_OG_IMAGE) {
    next = setMeta(next, "property", "og:image:width", "1200");
    next = setMeta(next, "property", "og:image:height", "630");
  } else {
    next = removeMeta(next, "property", "og:image:width");
    next = removeMeta(next, "property", "og:image:height");
  }

  if (page.robots) {
    next = setMeta(next, "name", "robots", page.robots);
  }
  return next;
}

function canonicalHref(html) {
  const tag =
    html.match(/<link\b[^>]*\brel=["']canonical["'][^>]*>/i) ||
    html.match(/<link\b[^>]*\bhref=["'][^"']+["'][^>]*\brel=["']canonical["'][^>]*>/i);
  if (!tag) return "";
  const href = tag[0].match(/\bhref=["']([^"']+)["']/i);
  return href ? href[1] : "";
}

function outputFile(routePath) {
  const clean = routePath.replace(/^\/+|\/+$/g, "");
  if (!clean || clean.includes("..")) {
    throw new Error(`[static] Unsafe route path: ${routePath}`);
  }
  return path.join(BUILD_DIR, clean, "index.html");
}

function main() {
  if (!fs.existsSync(HOME_FILE)) {
    console.error(`[static] Build output not found: ${HOME_FILE}`);
    process.exit(1);
  }

  const home = fs.readFileSync(HOME_FILE, "utf8");
  if (canonicalHref(home) !== "https://www.nicobenz.it/") {
    console.error("[static] Home index.html canonical is not the homepage");
    process.exit(1);
  }

  const { pages } = getStaticRoutes();
  const fallbacks = pages.filter((page) => page.fallback);
  for (const page of pages) {
    const file = outputFile(page.path);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    const html = applyPage(home, page);
    if (canonicalHref(html) !== page.canonical) {
      throw new Error(
        `[static] Canonical for ${page.path} is "${canonicalHref(html)}", expected "${page.canonical}"`
      );
    }
    fs.writeFileSync(file, html, "utf8");
  }

  const notFound = path.join(BUILD_DIR, "404.html");
  if (!fs.existsSync(notFound)) {
    console.error("[static] build/404.html is missing");
    process.exit(1);
  }

  console.log(
    `[static] Wrote ${pages.length} route HTML files (${pages.filter((p) => p.path.startsWith("/blog/")).length} articles).`
  );
  if (fallbacks.length) {
    console.warn(
      `[static] App.js has routes without a SEO entry yet: ${fallbacks.map((p) => p.path).join(", ")}`
    );
  }
}

main();
