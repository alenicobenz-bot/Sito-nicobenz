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
const { SITE_URL, loadBlogArticles } = require("./site-routes");

const OUT_FILE = path.join(__dirname, "..", "public", "sitemap.xml");

// URL statici (sempre presenti)
const STATIC_URLS = [
  { loc: "/", changefreq: "weekly", priority: "1.0" },
  { loc: "/prenota", changefreq: "weekly", priority: "0.95" },
  { loc: "/blog", changefreq: "weekly", priority: "0.9" },
  { loc: "/un-video-al-giorno", changefreq: "monthly", priority: "0.8" },
  { loc: "/contatti", changefreq: "monthly", priority: "0.6" },
  { loc: "/trasparenza-ai", changefreq: "yearly", priority: "0.4" },
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

function buildUrlBlock({ loc, lastmod, changefreq, priority }) {
  return `  <url>
    <loc>${SITE_URL}${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function main() {
  const articles = loadBlogArticles();

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
