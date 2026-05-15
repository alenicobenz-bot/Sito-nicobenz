import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { LINKS_DATA } from "../data/linksData";
import { BLOG_ARTICLES } from "../data/blogArticles";

let INTERVIEWS = [];
try {
  // eslint-disable-next-line global-require
  INTERVIEWS = require("../data/interviewsData").INTERVIEWS || [];
} catch (e) {
  INTERVIEWS = [];
}

let PODCASTS = [];
try {
  // eslint-disable-next-line global-require
  PODCASTS = require("../data/podcastsData").PODCASTS || [];
} catch (e) {
  PODCASTS = [];
}

function LinkRow({ href, label, icon, external, badge }) {
  const inner = (
    <>
      <span className="text-2xl leading-none w-7 text-center select-none" aria-hidden>
        {icon || "→"}
      </span>
      <span className="flex-1 text-left">{label}</span>
      {badge && (
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#ECA72C] border border-[#ECA72C]/40 px-2 py-0.5">
          {badge}
        </span>
      )}
    </>
  );
  const className =
    "group flex items-center gap-4 w-full bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#ECA72C]/50 px-5 py-4 transition-all duration-200 text-white font-medium tracking-wide";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className={className}>
        {inner}
      </a>
    );
  }
  return (
    <Link to={href} className={className}>
      {inner}
    </Link>
  );
}

export default function LinksPage() {
  const recentArticles = (BLOG_ARTICLES || []).slice(0, 3);
  const recentInterviews = (INTERVIEWS || []).slice(0, 5);
  const recentPodcasts = (PODCASTS || []).slice(0, 5);
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Helmet>
        <title>Nico Benz — Tutti i link</title>
        <meta name="description" content="Tutti i link ufficiali di Nico Benz, Beauty Social Coach." />
      </Helmet>

      <main className="mx-auto max-w-[560px] px-5 py-12 sm:py-16">
        <header className="flex flex-col items-center text-center mb-10">
          <img
            src="/nico-profile.jpg"
            alt="Nico Benz"
            className="w-28 h-28 rounded-full object-cover border border-[#ECA72C]/40 shadow-[0_0_0_4px_rgba(0,0,0,0.4)] mb-5"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#ECA72C] mb-2">
            BEAUTY SOCIAL COACH
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">Nico Benz</h1>
          <p className="text-white/60 text-sm mt-2 max-w-[320px]">
            Trasformo parrucchieri in social-content machine. Tutti i miei canali, qui.
          </p>
        </header>

        {recentPodcasts.length > 0 && (
          <section className="mb-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">
              ULTIMI PODCAST
            </div>
            <div className="space-y-2">
              {recentPodcasts.map((p) => (
                <a
                  key={p.id}
                  href={p.spotifyUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-center gap-4 bg-gradient-to-r from-green-500/10 to-transparent hover:from-green-500/20 border border-green-500/30 hover:border-green-500 px-5 py-4 transition-all duration-200"
                >
                  <span className="text-2xl leading-none w-7 text-center" aria-hidden>🎧</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium truncate">{p.title}</div>
                    <div className="text-[11px] text-white/50 mt-0.5">Spotify · {p.date}</div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

        {recentInterviews.length > 0 && (
          <section className="mb-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">
              ULTIME INTERVISTE
            </div>
            <div className="space-y-2">
              {recentInterviews.map((iv) => (
                <a
                  key={iv.id}
                  href={iv.youtubeUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-center gap-4 bg-gradient-to-r from-red-500/10 to-transparent hover:from-red-500/20 border border-red-500/30 hover:border-red-500 px-5 py-4 transition-all duration-200"
                >
                  <span className="text-2xl leading-none w-7 text-center" aria-hidden>▶</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium truncate">{iv.title}</div>
                    <div className="text-[11px] text-white/50 mt-0.5">YouTube · {iv.date}</div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

        {recentArticles.length > 0 && (
          <section className="mb-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">
              ULTIMI ARTICOLI
            </div>
            <div className="space-y-2">
              {recentArticles.map((a) => (
                <Link
                  key={a.slug}
                  to={`/blog/${a.slug}`}
                  className="group flex items-center gap-4 bg-gradient-to-r from-[#ECA72C]/10 to-transparent hover:from-[#ECA72C]/20 border border-[#ECA72C]/30 hover:border-[#ECA72C] px-5 py-4 transition-all duration-200"
                >
                  <span className="text-2xl leading-none w-7 text-center" aria-hidden>📖</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium truncate">{a.title}</div>
                    <div className="text-[11px] text-white/50 mt-0.5">{a.date} · {a.readTime}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">
            CANALI E SERVIZI
          </div>
          <div className="space-y-2">
            {LINKS_DATA.map((l, i) => (
              <LinkRow key={i} href={l.url} label={l.label} icon={l.icon} external={l.external} />
            ))}
          </div>
        </section>

        <footer className="mt-12 pt-6 border-t border-white/10 text-center">
          <a href="https://www.nicobenz.it" className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-[#ECA72C] transition-colors">
            ↗ nicobenz.it
          </a>
        </footer>
      </main>
    </div>
  );
}
