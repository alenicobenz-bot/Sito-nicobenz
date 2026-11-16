/**
 * generate-sitemap.js
 *
 * Genera automaticamente /public/sitemap.xml ad ogni build (yarn build).
 * Le URL statiche arrivano da src/seo/pageMeta.json (le stesse usate
 * per le HTML). Gli articoli arrivano da src/data/blogArticles.js.
 *
 * Per aggiungere un nuovo articolo basta aggiungerlo in blogArticles.js:
 * al prossimo deploy la sitemap e la HTML dell'articolo si aggiornano da sole.
 */

const fs = require("fs");
const path = require("path");
const { loadBlogArticles } = require("./load-blog-articles");
const { pageMeta, sitemapStaticPages } = require("./seo-pages");

const SITE_URL = pageMeta.siteUrl;
const OUT_FILE = path.join(__dirname, "..", "public", "sitemap.xml");

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
  const staticPages = sitemapStaticPages();
  const articles = loadBlogArticles();
  const today = todayISO();

  const staticBlocks = staticPages.map((page) =>
    buildUrlBlock({
      loc: page.path,
      lastmod: today,
      changefreq: page.sitemap.changefreq,
      priority: page.sitemap.priority,
    })
  );

  const articleBlocks = articles.map((article) =>
    buildUrlBlock({
      loc: `/blog/${article.slug}`,
      lastmod: dateToISO(article.date),
      changefreq: "monthly",
      priority: "0.75",
    })
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<!--
  AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
  This file is regenerated at every build by scripts/generate-sitemap.js
  Generated on: ${new Date().toISOString()}
  Total URLs: ${staticPages.length + articles.length}
-->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${staticBlocks.join("\n\n")}

${articleBlocks.join("\n\n")}

</urlset>
`;

  fs.writeFileSync(OUT_FILE, xml, "utf8");
  console.log(
    `[sitemap] Generated ${OUT_FILE} with ${
      staticPages.length + articles.length
    } URLs (${staticPages.length} static + ${articles.length} blog articles).`
  );
}

main();
