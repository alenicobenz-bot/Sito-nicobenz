import { useEffect } from "react";

/**
 * useSeo — Hook custom per SEO meta tags affidabile su React 19.
 *
 * Aggiorna/crea dinamicamente document.head:
 *   - <title>
 *   - <meta name="description">
 *   - <link rel="canonical">
 *   - <meta property="og:title|og:description|og:url|og:image|og:type">
 *   - <meta property="twitter:title|twitter:description|twitter:url|twitter:image">
 *   - <meta name="twitter:*"> se il tag name non c'è ancora
 *
 * I testi delle pagine stanno in src/seo/pageMeta.json, lo stesso file
 * che lo script di build usa per le HTML statiche.
 *
 * Più affidabile di react-helmet su React 19 (che ha problemi noti
 * a sovrascrivere tag già presenti in index.html).
 */
export function useSeo({
  title,
  description,
  canonical,
  ogImage,
  ogType = "website",
  robots,
} = {}) {
  useEffect(() => {
    if (title) {
      document.title = title;
      setAnyMeta("title", title, "name");
      setAnyMeta("og:title", title, "property");
      setAnyMeta("twitter:title", title, "name");
    }

    if (description) {
      setAnyMeta("description", description, "name");
      setAnyMeta("og:description", description, "property");
      setAnyMeta("twitter:description", description, "name");
    }

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
      setAnyMeta("og:url", canonical, "property");
      setAnyMeta("twitter:url", canonical, "name");
    }

    if (ogImage) {
      setAnyMeta("og:image", ogImage, "property");
      setAnyMeta("twitter:image", ogImage, "name");
    }
    setAnyMeta("og:type", ogType, "property");
    setAnyMeta("twitter:card", "summary_large_image", "name");

    if (robots) {
      setAnyMeta("robots", robots, "name");
    } else {
      document.querySelectorAll('meta[name="robots"]').forEach((el) => el.remove());
    }
  }, [title, description, canonical, ogImage, ogType, robots]);
}

function setAnyMeta(key, content, createAttr) {
  const nodes = document.querySelectorAll(`meta[name="${key}"], meta[property="${key}"]`);
  if (nodes.length === 0) {
    const el = document.createElement("meta");
    el.setAttribute(createAttr, key);
    el.setAttribute("content", content);
    document.head.appendChild(el);
    return;
  }
  nodes.forEach((el) => el.setAttribute("content", content));
}
