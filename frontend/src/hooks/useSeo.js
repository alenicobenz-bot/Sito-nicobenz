import { useEffect } from "react";

/**
 * useSeo — Hook custom per SEO meta tags affidabile su React 19.
 *
 * Aggiorna/crea dinamicamente document.head:
 *   - <title>
 *   - <meta name="description">
 *   - <link rel="canonical">
 *   - <meta property="og:title|og:description|og:url|og:image|og:type">
 *
 * Più affidabile di react-helmet su React 19 (che ha problemi noti
 * a sovrascrivere tag già presenti in index.html).
 *
 * Uso:
 *   useSeo({
 *     title: "Pagina X — Nicobenz",
 *     description: "Descrizione SEO",
 *     canonical: "https://www.nicobenz.it/x",
 *     ogImage: "https://...jpg",
 *     ogType: "article",
 *   });
 */
export function useSeo({
  title,
  description,
  canonical,
  ogImage,
  ogType = "website",
} = {}) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) setMeta("name", "description", description);

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }

    if (title) setMeta("property", "og:title", title);
    if (description) setMeta("property", "og:description", description);
    if (canonical) setMeta("property", "og:url", canonical);
    if (ogImage) setMeta("property", "og:image", ogImage);
    setMeta("property", "og:type", ogType);
  }, [title, description, canonical, ogImage, ogType]);
}

function setMeta(attr, value, content) {
  let el = document.querySelector(`meta[${attr}="${value}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, value);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}
