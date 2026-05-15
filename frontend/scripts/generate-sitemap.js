/**
 * generate-sitemap.js
 *
 * Genera automaticamente /public/sitemap.xml ad ogni build (yarn build).
 * - URL statici: homepage, /prenota, /blog, /un-video-al-giorno
 * - URL dinamici: tutti gli articoli del blog letti da src/data/blogArticles.js
 *
 * Per aggiungere un nuovo articolo basta aggiungerlo in blogArticles.js
 * → al prossimo deploy la sitemap si aggiorna da sola.
 */

const fs = require("fs");
const path = require("path");

const SITE_URL = "https://www.nicobenz.it";
const BLOG_FILE = path.join(__dirname, "..", "src", "data", "blogArticles.js");
const OUT_FILE = path.join(__dirname, "..", "public", "sitemap.xml");

// URL statici (sempre presenti)
const STATIC_URLS = [
  { loc: "/", changefreq: "weekly", priority: "1.0" },
  { loc: "/prenota", changefreq: "weekly", priority: "0.95" },
  { loc: "/blog", changefreq: "weekly", priority: "0.9" },
  { loc: "/un-video-al-giorno", changefreq: "monthly", priority: "0.8" },
];

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function dateToISO(d) {
  // Accetta "2025", "2024-12-01" o stringhe libere
  if (!d) return todayISO();
  const str = String(d).trim();
  if (/^\d{4}$/.test(str)) return `${str}-01-01`;
  if (/^\d{4}-\d{2}-\d{2}/.test(str)) return str.slice(0, 10);
  return todayISO();
}

function extractArticles(jsContent) {
  // Parsing minimale via regex (robusto rispetto al contenuto Markdown delle articoli).
  // Cerca tutti i blocchi `slug: "..."` seguiti più avanti da `date: "..."`.
  const articles = [];
  const slugRegex = /slug:\s*["'`]([^"'`]+)["'`]/g;
  const dateRegex = /date:\s*["'`]([^"'`]+)["'`]/g;

  const slugs = [...jsContent.matchAll(slugRegex)].map((m) => m[1]);
  const dates = [...jsContent.matchAll(dateRegex)].map((m) => m[1]);

  for (let i = 0; i < slugs.length; i++) {
    articles.push({ slug: slugs[i], date: dates[i] || "" });
  }
  return articles;
}

function buildUrlBlock({ loc, lastmod, changefreq, priority }) {
  return `  <url>
    <loc>${SITE_URL}${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function main() {
  if (!fs.existsSync(BLOG_FILE)) {
    console.error(`[sitemap] Blog file not found: ${BLOG_FILE}`);
    process.exit(1);
  }

  const jsContent = fs.readFileSync(BLOG_FILE, "utf8");
  const articles = extractArticles(jsContent);

  const today = todayISO();
  const staticBlocks = STATIC_URLS.map((u) =>
    buildUrlBlock({ ...u, lastmod: today })
  );

  const articleBlocks = articles.map((a) =>
    buildUrlBlock({
      loc: `/blog/${a.slug}`,
      lastmod: dateToISO(a.date),
      changefreq: "monthly",
      priority: "0.75",
    })
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<!--
  AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
  This file is regenerated at every build by scripts/generate-sitemap.js
  Generated on: ${new Date().toISOString()}
  Total URLs: ${STATIC_URLS.length + articles.length}
-->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${staticBlocks.join("\n\n")}

${articleBlocks.join("\n\n")}

</urlset>
`;

  fs.writeFileSync(OUT_FILE, xml, "utf8");
  console.log(
    `[sitemap] Generated ${OUT_FILE} with ${
      STATIC_URLS.length + articles.length
    } URLs (${STATIC_URLS.length} static + ${articles.length} blog articles).`
  );
}

main();
