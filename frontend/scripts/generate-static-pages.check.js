/**
 * Controlli dello script di HTML statica, senza lanciare craco.
 * Si esegue con: node --test scripts/generate-static-pages.check.js
 */

const assert = require("assert");
const fs = require("fs");
const os = require("os");
const path = require("path");
const test = require("node:test");
const { loadBlogArticles } = require("./load-blog-articles");
const { allPages, allStaticPages, assertRoutesCoveredFromApp, sitemapStaticPages } = require("./seo-pages");
const { applySeo, absoluteImage, outputFile, DEFAULT_OG_IMAGE } = require("./generate-static-pages");

const FIXTURE = `<!doctype html>
<html lang="it">
<head>
    <title>Home vecchia</title>
    <meta name="title" content="Home vecchia" />
    <meta name="description" content="Descrizione home" />
    <link rel="canonical" href="https://www.nicobenz.it/" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.nicobenz.it/" />
    <meta property="og:title" content="Home vecchia" />
    <meta property="og:description" content="Descrizione home" />
    <meta property="og:image" content="https://www.nicobenz.it/og-image.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://www.nicobenz.it/" />
    <meta property="twitter:title" content="Home vecchia" />
    <meta property="twitter:description" content="Descrizione home" />
    <meta property="twitter:image" content="https://www.nicobenz.it/og-image.jpg" />
    <script type="application/ld+json">
    { "@type": "ProfessionalService", "name": "Nicobenz" }
    </script>
</head>
<body>
    <div id="root"></div>
    <script src="/static/js/main.abc123.js"></script>
</body>
</html>
`;

test("le rotte di App.js hanno tutte una pagina statica", () => {
  const routes = assertRoutesCoveredFromApp();
  assert.ok(routes.includes("/blog"));
  assert.ok(routes.includes("/links"));
  assert.ok(routes.includes("/demo"));
  const concrete = routes.filter((route) => !route.includes(":") && !route.includes("*"));
  assert.equal(allStaticPages().length, concrete.length);
  assert.ok(routes.includes("*"));
});

test("la sitemap usa solo le pagine marcate, nello stesso ordine di prima", () => {
  const paths = sitemapStaticPages().map((page) => page.path);
  assert.deepEqual(paths, [
    "/",
    "/prenota",
    "/blog",
    "/un-video-al-giorno",
    "/contatti",
    "/trasparenza-ai",
  ]);
});

test("ogni articolo del blog diventa una rotta /blog/<slug>", () => {
  const articles = loadBlogArticles();
  assert.ok(articles.length >= 30);
  const pages = allPages(articles);
  const sample = articles.find((article) => article.slug === "ai-lavora-per-te-mentre-chiudi-salone");
  assert.ok(sample);
  const page = pages.find((item) => item.path === `/blog/${sample.slug}`);
  assert.equal(page.title, `${sample.title} — Nicobenz Blog`);
  assert.equal(page.description, sample.excerpt.replace(/\s+/g, " ").trim());
  assert.equal(page.canonical, `https://www.nicobenz.it/blog/${sample.slug}`);
  assert.match(absoluteImage(sample.image), /^https:\/\/www\.nicobenz\.it\/social\//);
});

test("un'immagine relativa diventa assoluta, e se manca si usa og-image.jpg", () => {
  assert.equal(
    absoluteImage("/blog-covers/foto.jpg"),
    "https://www.nicobenz.it/blog-covers/foto.jpg"
  );
  assert.equal(absoluteImage(""), DEFAULT_OG_IMAGE);
  assert.equal(absoluteImage("https://cdn.example/a.jpg"), "https://cdn.example/a.jpg");
});

test("applySeo sostituisce i meta e lascia bundle e JSON-LD", () => {
  const html = applySeo(FIXTURE, {
    path: "/blog/esempio",
    title: 'L\'AI & "test" <salone>',
    description: "Un estratto con & commerciale",
    canonical: "https://www.nicobenz.it/blog/esempio",
    ogImage: "/blog-covers/foto.jpg",
    ogType: "article",
    h1: "Titolo visibile",
    intro: "Testo introduttivo",
  });

  assert.match(html, /<title>L'AI &amp; &quot;test&quot; &lt;salone&gt;<\/title>/);
  assert.match(html, /name="description" content="Un estratto con &amp; commerciale"/);
  assert.match(html, /rel="canonical" href="https:\/\/www\.nicobenz\.it\/blog\/esempio"/);
  assert.match(html, /property="og:type" content="article"/);
  assert.match(html, /property="og:image" content="https:\/\/www\.nicobenz\.it\/blog-covers\/foto\.jpg"/);
  assert.match(html, /name="twitter:title" content="L'AI &amp; &quot;test&quot; &lt;salone&gt;"/);
  assert.match(html, /name="twitter:card" content="summary_large_image"/);
  assert.equal((html.match(/twitter:title/g) || []).length, 1);
  assert.doesNotMatch(html, /og:image:width/);
  assert.match(html, /<h1[^>]*>Titolo visibile<\/h1>/);
  assert.match(html, /data-static-seo="true"/);
  assert.match(html, /src="\/static\/js\/main\.abc123\.js"/);
  assert.match(html, /ProfessionalService/);
  assert.doesNotMatch(html, /Home vecchia/);
});

test("con l'immagine di default restano width e height se c'erano già", () => {
  const html = applySeo(FIXTURE, {
    path: "/prenota",
    title: "Prenota",
    description: "Descrizione prenota",
    canonical: "https://www.nicobenz.it/prenota",
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
    h1: "Prenota",
    intro: "Intro prenota",
  });
  assert.match(html, /og:image:width/);
  assert.match(html, /og:image:height/);
  assert.doesNotMatch(html, /name="robots"/);
});

test("un titolo uguale a quello del template non è un errore", () => {
  const html = applySeo(FIXTURE.replace("<title>Home vecchia</title>", "<title>Stesso titolo</title>"), {
    path: "/",
    title: "Stesso titolo",
    description: "Descrizione diversa",
    canonical: "https://www.nicobenz.it/",
    ogType: "website",
    h1: "Titolo in pagina",
    intro: "Introduzione",
  });
  assert.match(html, /<title>Stesso titolo<\/title>/);
  assert.match(html, /name="description" content="Descrizione diversa"/);
});

test("funziona anche sull'HTML minificato del build", () => {
  const minified = `<!doctype html><html lang="it"><head><title>Home</title><meta name="description" content="Vecchia"/><link rel="canonical" href="https://www.nicobenz.it/"/><meta property="og:title" content="Home"/><meta property="og:description" content="Vecchia"/><meta property="og:url" content="https://www.nicobenz.it/"/><meta property="og:image" content="https://www.nicobenz.it/og-image.jpg"/><meta property="twitter:title" content="Home"/><script type="application/ld+json">{"@type":"ProfessionalService"}</script><script defer="defer" src="/static/js/main.abc.js"></script></head><body><div id="root"></div></body></html>`;
  const html = applySeo(minified, {
    path: "/blog/esempio",
    title: "Titolo articolo",
    description: "Estratto articolo",
    canonical: "https://www.nicobenz.it/blog/esempio",
    ogImage: "/blog-covers/foto.jpg",
    ogType: "article",
    h1: "Titolo articolo",
    intro: "Estratto articolo",
  });
  assert.match(html, /<title>Titolo articolo<\/title>/);
  assert.match(html, /property="og:image" content="https:\/\/www\.nicobenz\.it\/blog-covers\/foto\.jpg"/);
  assert.match(html, /<h1[^>]*>Titolo articolo<\/h1>/);
  assert.match(html, /src="\/static\/js\/main\.abc\.js"/);
  assert.match(html, /ProfessionalService/);
  assert.equal((html.match(/<div id="root">/g) || []).length, 1);
});

test("il noindex viene aggiunto solo se la pagina lo chiede", () => {
  const html = applySeo(FIXTURE, {
    path: "/grazie-iscrizione",
    title: "Grazie",
    description: "Controlla la email",
    canonical: "https://www.nicobenz.it/grazie-iscrizione",
    ogType: "website",
    robots: "noindex, nofollow",
    h1: "Grazie",
    intro: "Controlla la email",
  });
  assert.match(html, /name="robots" content="noindex, nofollow"/);
});

test("il file di output non può uscire dalla cartella build", () => {
  const buildDir = fs.mkdtempSync(path.join(os.tmpdir(), "nb-build-"));
  const file = outputFile(buildDir, "/blog/un-articolo");
  assert.equal(file, path.join(buildDir, "blog", "un-articolo", "index.html"));
  assert.throws(() => outputFile(buildDir, "/../segreto"));
  assert.throws(() => outputFile(buildDir, "/Blog/Maiuscolo"));
});
