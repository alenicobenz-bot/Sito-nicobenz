/**
 * Legge gli articoli da src/data/blogArticles.js senza far partire React.
 * Lo stesso elenco alimenta la sitemap e le HTML statiche: un articolo
 * aggiunto da Emergent entra in entrambi al build successivo.
 */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const BLOG_FILE = path.join(__dirname, "..", "src", "data", "blogArticles.js");
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function loadBlogArticles(file = BLOG_FILE) {
  const source = fs.readFileSync(file, "utf8");
  if (!source.includes("export const BLOG_ARTICLES")) {
    throw new Error("blogArticles.js non contiene export const BLOG_ARTICLES");
  }

  const transformed =
    source.replace(/export const /g, "const ") +
    "\nmodule.exports = { BLOG_ARTICLES };\n";
  const sandboxModule = { exports: {} };
  vm.runInNewContext(
    transformed,
    { module: sandboxModule, exports: sandboxModule.exports },
    { filename: file }
  );

  const articles = sandboxModule.exports.BLOG_ARTICLES;
  if (!Array.isArray(articles) || articles.length === 0) {
    throw new Error("Nessun articolo letto da blogArticles.js");
  }

  const slugs = new Set();
  return articles.map((article, index) => {
    const slug = String(article.slug || "");
    if (!SLUG_RE.test(slug)) {
      throw new Error(`Slug non valido alla posizione ${index}: ${slug}`);
    }
    if (slugs.has(slug)) {
      throw new Error(`Slug duplicato: ${slug}`);
    }
    slugs.add(slug);

    const title = String(article.title || "").trim();
    const excerpt = String(article.excerpt || "").trim();
    if (!title || !excerpt) {
      throw new Error(`Titolo o excerpt mancante per ${slug}`);
    }

    return {
      slug,
      title,
      excerpt,
      image: article.image ? String(article.image).trim() : "",
      date: article.date ? String(article.date) : "",
    };
  });
}

module.exports = { loadBlogArticles, SLUG_RE, BLOG_FILE };
