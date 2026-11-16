/**
 * generate-static-pages.js
 *
 * Dopo `craco build` scrive una HTML per ogni rotta vera:
 * le pagine in src/seo/pageMeta.json e ogni /blog/<slug>.
 *
 * Parte da build/index.html, quindi i bundle con l'hash restano
 * e l'app React si avvia come prima. Nel primo HTML ci sono però
 * title, description, canonical, Open Graph, Twitter e un H1,
 * così chi non esegue JavaScript (WhatsApp, Facebook, LinkedIn,
 * molti crawler AI) non vede più i meta della home su ogni URL.
 *
 * react-snap non viene usato: il sito è su React 19 e in index.html
 * ci sono iubenda e PostHog, che in un browser headless spesso
 * vanno in timeout.
 *
 * vercel.json (arrivato con le immagini e i 404) tiene i redirect
 * e, dopo i file veri, risponde 404. Non va rimesso un rewrite che
 * manda tutto a index.html.
 */

const fs = require("fs");
const path = require("path");
const { loadBlogArticles } = require("./load-blog-articles");
const { pageMeta, allPages, allStaticPages, assertRoutesCoveredFromApp } = require("./seo-pages");

const FRONTEND_ROOT = path.join(__dirname, "..");
const BUILD_DIR = path.join(FRONTEND_ROOT, "build");
const TEMPLATE = path.join(BUILD_DIR, "index.html");
const DEFAULT_OG_IMAGE = pageMeta.defaultOgImage;

const NOT_FOUND_HTML = `<!doctype html>
<html lang="it">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Pagina non trovata — Nicobenz</title>
  <meta name="robots" content="noindex" />
</head>
<body style="margin:0;background:#0B0B0C;color:#F4F1EA;font-family:Georgia,'Times New Roman',serif">
  <main style="max-width:40rem;margin:0 auto;padding:88px 24px">
    <h1 style="font-size:40px;font-weight:400;line-height:1.1">Questa pagina non esiste</h1>
    <p style="font-size:18px;line-height:1.6;color:#D9D3C7">L'indirizzo è sbagliato oppure la pagina è stata spostata.</p>
    <p style="font-size:18px"><a href="/" style="color:#E7B454">Torna alla home</a> · <a href="/blog" style="color:#E7B454">Vai al blog</a></p>
  </main>
</body>
</html>
`;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function absoluteImage(image) {
  const value = String(image || "").trim();
  if (!value) return DEFAULT_OG_IMAGE;
  if (/^https?:\/\//i.test(value)) return value;
  if (value.startsWith("/")) return `${pageMeta.siteUrl}${value}`;
  return DEFAULT_OG_IMAGE;
}

function replaceTitle(html, title) {
  const pattern = /<title>[^<]*<\/title>/i;
  if (!pattern.test(html)) {
    throw new Error("Manca <title> in build/index.html");
  }
  return html.replace(pattern, `<title>${escapeHtml(title)}</title>`);
}

function upsertMeta(html, attr, key, content) {
  const source = `<meta\\s+(?=[^>]*\\b(?:name|property)=["']${escapeRegExp(key)}["'])[^>]*>`;
  const tag = `<meta ${attr}="${key}" content="${escapeHtml(content)}" />`;
  if (!new RegExp(source, "i").test(html)) {
    if (!html.includes("</head>")) {
      throw new Error("Manca </head> in build/index.html");
    }
    return html.replace("</head>", `        ${tag}\n    </head>`);
  }

  let written = false;
  return html.replace(new RegExp(source, "gi"), () => {
    if (written) return "";
    written = true;
    return tag;
  });
}

function stripMeta(html, key) {
  const source = `[ \\t]*<meta\\s+(?=[^>]*\\b(?:name|property)=["']${escapeRegExp(key)}["'])[^>]*>\\n?`;
  return html.replace(new RegExp(source, "gi"), "");
}

function upsertCanonical(html, href) {
  const tag = `<link rel="canonical" href="${escapeHtml(href)}" />`;
  const source = `<link\\s+(?=[^>]*\\brel=["']canonical["'])[^>]*>`;
  if (!new RegExp(source, "i").test(html)) {
    return html.replace("</head>", `        ${tag}\n    </head>`);
  }
  return html.replace(new RegExp(source, "i"), tag);
}

function injectIntro(html, h1, intro) {
  const block =
    `<div id="root"><main data-static-seo="true" style="background:#0B0B0C;color:#F4F1EA;min-height:100vh;padding:88px 24px 48px;font-family:Georgia,'Times New Roman',serif">` +
    `<h1 style="font-size:40px;font-weight:400;line-height:1.1;margin:0 0 16px">${escapeHtml(h1)}</h1>` +
    `<p style="font-size:18px;line-height:1.6;max-width:40rem;margin:0;color:#D9D3C7">${escapeHtml(intro)}</p>` +
    `</main></div>`;
  const pattern = /<div id="root">\s*<\/div>/;
  if (!pattern.test(html)) {
    throw new Error('Manca <div id="root"></div> vuoto in build/index.html');
  }
  return html.replace(pattern, block);
}

function applySeo(templateHtml, page) {
  const title = String(page.title || "").replace(/\s+/g, " ").trim();
  const description = String(page.description || "").replace(/\s+/g, " ").trim();
  const h1 = String(page.h1 || "").replace(/\s+/g, " ").trim();
  const intro = String(page.intro || "").replace(/\s+/g, " ").trim();
  const canonical = String(page.canonical || "").trim();
  const ogType = page.ogType || "website";
  const image = absoluteImage(page.ogImage);

  if (!title || !description || !h1 || !intro || !canonical) {
    throw new Error(`Meta incompleti per ${page.path || "(senza path)"}`);
  }

  let html = templateHtml;
  html = replaceTitle(html, title);
  html = upsertMeta(html, "name", "description", description);
  html = upsertMeta(html, "name", "title", title);
  html = upsertCanonical(html, canonical);
  html = upsertMeta(html, "property", "og:type", ogType);
  html = upsertMeta(html, "property", "og:url", canonical);
  html = upsertMeta(html, "property", "og:title", title);
  html = upsertMeta(html, "property", "og:description", description);
  html = upsertMeta(html, "property", "og:image", image);
  html = upsertMeta(html, "name", "twitter:card", "summary_large_image");
  html = upsertMeta(html, "name", "twitter:url", canonical);
  html = upsertMeta(html, "name", "twitter:title", title);
  html = upsertMeta(html, "name", "twitter:description", description);
  html = upsertMeta(html, "name", "twitter:image", image);

  if (page.robots) {
    html = upsertMeta(html, "name", "robots", page.robots);
  }

  if (image !== DEFAULT_OG_IMAGE) {
    html = stripMeta(html, "og:image:width");
    html = stripMeta(html, "og:image:height");
  }

  html = injectIntro(html, h1, intro);
  return html;
}

function assertSafePath(routePath) {
  if (routePath === "/") return;
  if (!/^\/[a-z0-9]+(?:-[a-z0-9]+)*(?:\/[a-z0-9]+(?:-[a-z0-9]+)*)*$/.test(routePath)) {
    throw new Error(`Percorso non valido: ${routePath}`);
  }
}

function outputFile(buildDir, routePath) {
  assertSafePath(routePath);
  if (routePath === "/") return path.join(buildDir, "index.html");
  const relative = routePath.replace(/^\//, "");
  const file = path.resolve(buildDir, relative, "index.html");
  const root = path.resolve(buildDir) + path.sep;
  if (!file.startsWith(root)) {
    throw new Error(`Percorso fuori da build: ${routePath}`);
  }
  return file;
}

function countMeta(html, key) {
  const source = `<meta\\s+(?=[^>]*\\b(?:name|property)=["']${escapeRegExp(key)}["'])[^>]*>`;
  return [...html.matchAll(new RegExp(source, "gi"))].length;
}

function assertPage(html, page) {
  const title = String(page.title).replace(/\s+/g, " ").trim();
  const description = String(page.description).replace(/\s+/g, " ").trim();
  const image = absoluteImage(page.ogImage);
  const checks = [
    [`<title>${escapeHtml(title)}</title>`, "title"],
    [`content="${escapeHtml(description)}"`, "description"],
    [`<link rel="canonical" href="${escapeHtml(page.canonical)}"`, "canonical"],
    [`property="og:title" content="${escapeHtml(title)}"`, "og:title"],
    [`property="og:url" content="${escapeHtml(page.canonical)}"`, "og:url"],
    [`property="og:image" content="${escapeHtml(image)}"`, "og:image"],
    [`name="twitter:image" content="${escapeHtml(image)}"`, "twitter:image"],
    [`<h1`, "h1"],
    [escapeHtml(String(page.h1).replace(/\s+/g, " ").trim()), "testo h1"],
  ];

  for (const [needle, label] of checks) {
    if (!html.includes(needle)) {
      throw new Error(`${page.path}: manca ${label}`);
    }
  }

  for (const key of ["description", "og:title", "og:description", "og:image", "twitter:title", "twitter:image"]) {
    const count = countMeta(html, key);
    if (count !== 1) {
      throw new Error(`${page.path}: ${key} compare ${count} volte`);
    }
  }

  if (!html.includes('src="/static/js/')) {
    throw new Error(`${page.path}: manca il bundle JS, l'app non partirebbe`);
  }
}

function write404(buildDir) {
  const file = path.join(buildDir, "404.html");
  if (fs.existsSync(file)) {
    console.log("[static-html] build/404.html c'è già (arriva da public/): non lo sovrascrivo.");
    return;
  }
  fs.writeFileSync(file, NOT_FOUND_HTML, "utf8");
  console.log("[static-html] Scritto build/404.html");
}

function main() {
  if (!fs.existsSync(TEMPLATE)) {
    console.error(`[static-html] Manca ${TEMPLATE}. Va lanciato dopo craco build.`);
    process.exit(1);
  }

  assertRoutesCoveredFromApp();
  const template = fs.readFileSync(TEMPLATE, "utf8");
  const articles = loadBlogArticles();
  const pages = allPages(articles);

  for (const page of pages) {
    const html = applySeo(template, page);
    const file = outputFile(BUILD_DIR, page.path);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, html, "utf8");
  }

  const sampleArticle = articles[0];
  const sample = fs.readFileSync(outputFile(BUILD_DIR, `/blog/${sampleArticle.slug}`), "utf8");
  assertPage(sample, articlePageFrom(sampleArticle));
  const home = fs.readFileSync(outputFile(BUILD_DIR, "/"), "utf8");
  assertPage(home, allStaticPages().find((page) => page.path === "/"));

  write404(BUILD_DIR);
  console.log(
    `[static-html] ${pages.length} pagine (${allStaticPages().length} statiche + ${articles.length} articoli).`
  );
}

function articlePageFrom(article) {
  return allPages([article]).find((page) => page.path === `/blog/${article.slug}`);
}

module.exports = {
  applySeo,
  absoluteImage,
  outputFile,
  escapeHtml,
  countMeta,
  NOT_FOUND_HTML,
  DEFAULT_OG_IMAGE,
};

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(`[static-html] ${error.stack || error.message}`);
    process.exit(1);
  }
}
