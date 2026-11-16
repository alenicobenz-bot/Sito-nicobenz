/**
 * Rotte reali del sito, dalla stessa fonte della sitemap.
 *
 * Gli articoli vengono letti da src/data/blogArticles.js (lo stesso file
 * che generate-sitemap.js usa). Le pagine statiche sono quelle di App.js:
 * se ne compare una nuova, riceve comunque un HTML con il proprio canonical,
 * così il deploy non risponde 404 su una pagina che esiste.
 */

const fs = require("fs");
const path = require("path");

const SITE_URL = "https://www.nicobenz.it";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const BLOG_FILE = path.join(__dirname, "..", "src", "data", "blogArticles.js");
const APP_FILE = path.join(__dirname, "..", "src", "App.js");

/**
 * Testi già usati da useSeo / Helmet. Non sono copy nuova:
 * il file statico deve dire la stessa cosa che il browser imposta dopo.
 */
const KNOWN_PAGES = {
  "/blog": {
    title: "Blog — Nicobenz Beauty Social Coach",
    description:
      "Articoli su marketing, social media e personal branding per parrucchieri e professionisti beauty.",
    ogType: "website",
  },
  "/prenota": {
    title: "Prenota consulenza gratuita — Nicobenz Beauty Social Coach",
    description:
      "Prenota la tua consulenza gratuita 1-a-1 di 30 minuti. Analizziamo il posizionamento del tuo salone e come far crescere il tuo personal brand.",
    ogType: "website",
  },
  "/contatti": {
    title: "Contatti — Nicobenz Beauty Social Coach | Marketing Parrucchieri S.r.l.",
    description:
      "Contatta Nico Benz per una consulenza gratuita. Marketing Parrucchieri S.r.l., Besate (MI). Email, WhatsApp, calendario prenotazioni.",
    ogType: "website",
  },
  "/un-video-al-giorno": {
    title: "Un video al giorno per parrucchieri — Idee reel gratis | Nicobenz",
    description:
      "Ricevi ogni giorno via email un'idea video pronta per Instagram e TikTok. Hook, scaletta e caption pensate per parrucchieri. Gratis.",
    ogType: "website",
  },
  "/trasparenza-ai": {
    title: "Trasparenza AI — Come uso l'intelligenza artificiale | Nicobenz",
    description:
      "La mia politica di trasparenza sull'uso dell'intelligenza artificiale nei contenuti pubblicati su nicobenz.it. Conforme al Regolamento UE 2024/1689 (AI Act).",
    ogType: "article",
  },
  "/grazie-iscrizione": {
    title: "Iscrizione completata — Nicobenz",
    description: "Grazie per l'iscrizione. Controlla la tua email per confermare.",
    ogType: "website",
    robots: "noindex, nofollow",
  },
  "/links": {
    title: "Nico Benz — Tutti i link",
    description: "Tutti i link ufficiali di Nico Benz, Beauty Social Coach.",
    ogType: "website",
  },
  "/demo": {
    title: "Demo — Nicobenz",
    description: "Pagina demo interna.",
    ogType: "website",
    robots: "noindex, nofollow",
  },
  "/mockup-qualifier": {
    title: "Mockup — Nicobenz",
    description: "Pagina interna di prova.",
    ogType: "website",
    robots: "noindex, nofollow",
  },
};

const REQUIRED_APP_PATHS = [
  "/",
  "/blog",
  "/blog/:slug",
  "/links",
  "/prenota",
  "/contatti",
  "/un-video-al-giorno",
  "/trasparenza-ai",
  "/grazie-iscrizione",
  "/demo",
  "/mockup-qualifier",
];

function loadBlogArticles() {
  if (!fs.existsSync(BLOG_FILE)) {
    throw new Error(`[routes] Blog file not found: ${BLOG_FILE}`);
  }
  const text = fs.readFileSync(BLOG_FILE, "utf8");
  const start = text.indexOf("export const BLOG_ARTICLES");
  const end = text.indexOf("export const getArticleBySlug");
  if (start < 0 || end < 0 || end <= start) {
    throw new Error("[routes] blogArticles.js structure changed; cannot read articles");
  }
  const body = text
    .slice(start, end)
    .replace("export const BLOG_ARTICLES", "const BLOG_ARTICLES");
  const articles = new Function(`${body}\nreturn BLOG_ARTICLES;`)();
  if (!Array.isArray(articles) || articles.length === 0) {
    throw new Error("[routes] No blog articles found");
  }
  const slugs = new Set();
  for (const article of articles) {
    if (!article || !article.slug || !article.title) {
      throw new Error("[routes] Article missing slug or title");
    }
    if (slugs.has(article.slug)) {
      throw new Error(`[routes] Duplicate slug: ${article.slug}`);
    }
    slugs.add(article.slug);
  }
  return articles;
}

function readAppPaths() {
  const src = fs.readFileSync(APP_FILE, "utf8");
  return [...src.matchAll(/<Route\s+path=["']([^"']+)["']/g)].map((match) => match[1]);
}

function absoluteImage(image) {
  if (!image) return DEFAULT_OG_IMAGE;
  const value = String(image);
  if (value.startsWith("https://") || value.startsWith("http://")) return value;
  if (value.startsWith("/")) return `${SITE_URL}${value}`;
  return `${SITE_URL}/${value}`;
}

function pageForPath(routePath) {
  const known = KNOWN_PAGES[routePath];
  if (known) {
    return {
      path: routePath,
      title: known.title,
      description: known.description,
      canonical: `${SITE_URL}${routePath}`,
      ogImage: DEFAULT_OG_IMAGE,
      ogType: known.ogType || "website",
      robots: known.robots || "",
    };
  }
  return {
    path: routePath,
    title: "Nicobenz",
    description: "Nicobenz — Beauty Social Coach",
    canonical: `${SITE_URL}${routePath}`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
    robots: "",
    fallback: true,
  };
}

function articlePage(article) {
  return {
    path: `/blog/${article.slug}`,
    title: `${article.title} — Nicobenz Blog`,
    description: article.excerpt || "",
    canonical: `${SITE_URL}/blog/${article.slug}`,
    ogImage: absoluteImage(article.image),
    ogType: "article",
    robots: "",
  };
}

/**
 * Tutte le rotte che devono rispondere 200, esclusa la home
 * (la home è build/index.html).
 */
function getStaticRoutes() {
  const appPaths = readAppPaths();
  const missing = REQUIRED_APP_PATHS.filter((routePath) => !appPaths.includes(routePath));
  if (missing.length) {
    throw new Error(`[routes] App.js is missing expected paths: ${missing.join(", ")}`);
  }

  const pages = [];
  for (const routePath of appPaths) {
    if (routePath === "/" || routePath === "/blog/:slug") continue;
    // Rotte con parametri (es. la 404 "*") non sono file: gli articoli
    // arrivano da blogArticles.js, non da un pattern aperto.
    if (routePath.includes("*") || routePath.includes(":")) continue;
    pages.push(pageForPath(routePath));
  }

  const articles = loadBlogArticles();
  for (const article of articles) {
    pages.push(articlePage(article));
  }
  return { pages, articles, appPaths };
}

module.exports = {
  SITE_URL,
  DEFAULT_OG_IMAGE,
  BLOG_FILE,
  loadBlogArticles,
  getStaticRoutes,
};
