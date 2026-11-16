import { useEffect } from "react";
import { Link } from "react-router-dom";

function setMeta(attr, key, content) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Pagina usata quando si naviga dentro il sito verso un indirizzo che non esiste.
 * La visita diretta a un URL sconosciuto la gestisce invece public/404.html (HTTP 404).
 */
const NotFoundPage = () => {
  useEffect(() => {
    document.title = "Pagina non trovata — Nicobenz";
    setMeta("name", "description", "Questo indirizzo non esiste oppure è stato spostato.");
    setMeta("name", "robots", "noindex");
    setMeta("property", "og:title", "Pagina non trovata — Nicobenz");
    setMeta("property", "og:description", "Questo indirizzo non esiste oppure è stato spostato.");
    document.querySelector('link[rel="canonical"]')?.remove();
    document.querySelector('meta[property="og:url"]')?.remove();
    document.querySelector('meta[property="twitter:url"]')?.remove();
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-[var(--nb-bg)] text-[var(--nb-ivory)] flex items-center justify-center px-6 text-center">
      <div className="max-w-md">
        <p className="font-display text-[28px] tracking-editorial">
          Nico<span className="text-[var(--nb-gold)]">benz</span>
        </p>
        <h1 className="mt-8 font-display text-4xl font-normal">Pagina non trovata</h1>
        <p className="mt-4 text-[var(--nb-ivory-dim)]">
          Questo indirizzo non esiste oppure è stato spostato.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center bg-[var(--nb-gold)] text-[var(--nb-bg)] px-5 py-3 text-[13px] uppercase tracking-[0.12em]"
          >
            Torna alla home
          </Link>
          <Link
            to="/blog"
            className="inline-flex items-center border border-[var(--nb-border-strong)] px-5 py-3 text-[13px] uppercase tracking-[0.12em] hover:text-[var(--nb-gold)]"
          >
            Vai al blog
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
