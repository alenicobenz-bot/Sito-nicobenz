/**
 * Elenco unico delle rotte statiche.
 * La sitemap e lo script delle HTML leggono questo file, non una copia.
 */

const fs = require("fs");
const path = require("path");
const pageMeta = require("../src/seo/pageMeta.json");

function sitemapStaticPages() {
  return Object.values(pageMeta.pages)
    .filter((page) => page.sitemap)
    .sort((a, b) => a.sitemap.order - b.sitemap.order);
}

function allStaticPages() {
  return Object.values(pageMeta.pages);
}

function articlePage(article) {
  const title = String(article.title).replace(/\s+/g, " ").trim();
  const excerpt = String(article.excerpt).replace(/\s+/g, " ").trim();
  return {
    path: `/blog/${article.slug}`,
    title: `${title}${pageMeta.articleTitleSuffix}`,
    description: excerpt,
    canonical: `${pageMeta.siteUrl}/blog/${article.slug}`,
    ogImage: article.image,
    ogType: "article",
    h1: title,
    intro: excerpt,
  };
}

function allPages(articles) {
  const pages = [...allStaticPages(), ...articles.map(articlePage)];
  const seen = new Set();
  for (const page of pages) {
    if (seen.has(page.path)) {
      throw new Error(`Rotta duplicata: ${page.path}`);
    }
    seen.add(page.path);
  }
  return pages;
}

function assertRoutesCovered(appSource) {
  const routes = [...appSource.matchAll(/path="([^"]+)"/g)].map((match) => match[1]);
  if (!routes.includes("/blog/:slug")) {
    throw new Error('App.js non ha la rotta /blog/:slug');
  }

  const staticPaths = new Set(allStaticPages().map((page) => page.path));
  const missing = routes.filter(
    (route) => !route.includes(":") && !route.includes("*") && !staticPaths.has(route)
  );
  if (missing.length > 0) {
    throw new Error(`Rotte in App.js senza HTML statico: ${missing.join(", ")}`);
  }

  const extra = [...staticPaths].filter((routePath) => !routes.includes(routePath));
  if (extra.length > 0) {
    throw new Error(`pageMeta ha rotte che App.js non ha: ${extra.join(", ")}`);
  }

  return routes;
}

function assertRoutesCoveredFromApp(appFile = path.join(__dirname, "..", "src", "App.js")) {
  return assertRoutesCovered(fs.readFileSync(appFile, "utf8"));
}

module.exports = {
  pageMeta,
  sitemapStaticPages,
  allStaticPages,
  articlePage,
  allPages,
  assertRoutesCovered,
  assertRoutesCoveredFromApp,
};
