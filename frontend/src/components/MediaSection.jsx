import React, { useState } from "react";
import { ArrowUpRight, Play, Headphones, BookOpen, X } from "lucide-react";
import { BOOK, PODCAST } from "../mock";

const MediaSection = () => {
  const [activeEp, setActiveEp] = useState(null);

  return (
    <>
      {/* BOOK */}
      <section id="libro" className="relative py-24 md:py-36 bg-[var(--nb-bg-2)] border-y border-[var(--nb-border)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[1px] bg-[var(--nb-gold)]" />
                <span className="nb-eyebrow">Il libro</span>
              </div>
              <h2 className="font-display font-light tracking-editorial text-[40px] md:text-[58px] leading-[1.02] text-[var(--nb-ivory)]">
                <em className="italic text-[var(--nb-gold)]">{BOOK.title}.</em>
              </h2>
              <p className="mt-5 text-[18px] md:text-[20px] font-display italic text-[var(--nb-ivory-dim)]">
                {BOOK.subtitle}
              </p>
              <p className="mt-8 text-[15px] md:text-[16px] leading-[1.7] text-[var(--nb-ivory-dim)] max-w-[520px]">
                {BOOK.description}
              </p>

              <div className="mt-10 space-y-4">
                {BOOK.quotes.map((q, i) => (
                  <div key={i} className="pl-5 border-l border-[var(--nb-gold)] text-[14px] text-[var(--nb-ivory)] italic leading-[1.6] max-w-[520px] font-display">
                    {q}
                  </div>
                ))}
              </div>

              <a
                href={BOOK.cta.href}
                target="_blank"
                rel="noreferrer"
                className="nb-btn-primary mt-10"
              >
                <BookOpen className="w-4 h-4" strokeWidth={1.6} />
                {BOOK.cta.label}
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.6} />
              </a>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative aspect-[5/4] w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1813] via-[var(--nb-bg-2)] to-[var(--nb-bg)] border border-[var(--nb-border)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute -inset-8 bg-[var(--nb-gold)]/10 blur-3xl rounded-full" />
                    <img
                      src={BOOK.cover}
                      alt={BOOK.title}
                      className="relative w-[260px] md:w-[360px] shadow-[0_40px_80px_rgba(0,0,0,0.6)] rotate-[-6deg] hover:rotate-0 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="absolute top-6 left-6 text-[11px] tracking-micro uppercase text-[var(--nb-muted)]">
                  No. 02 — Pubblicato da Nicobenz
                </div>
                <div className="absolute bottom-6 right-6 font-display italic text-[var(--nb-gold)] text-[18px]">
                  — disponibile su Amazon
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PODCAST */}
      <section id="podcast" className="relative py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-14 md:mb-20">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[1px] bg-[var(--nb-gold)]" />
                <span className="nb-eyebrow">Podcast</span>
              </div>
              <h2 className="font-display font-light tracking-editorial text-[36px] md:text-[52px] lg:text-[60px] leading-[1.05] text-[var(--nb-ivory)] max-w-[640px]">
                {PODCAST.title.split(" — ")[0]} <em className="italic text-[var(--nb-gold)]">— {PODCAST.title.split(" — ")[1]}.</em>
              </h2>
              <p className="mt-5 text-[15px] leading-[1.7] text-[var(--nb-ivory-dim)] max-w-[480px]">
                {PODCAST.description}
              </p>
            </div>
            <a href={PODCAST.cta.href} target="_blank" rel="noreferrer" className="nb-btn-ghost self-start md:self-end">
              <Headphones className="w-4 h-4" strokeWidth={1.6} />
              {PODCAST.cta.label}
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.6} />
            </a>
          </div>

          <div className="divide-y divide-[var(--nb-border)] border-y border-[var(--nb-border)]">
            {PODCAST.episodes.map((ep) => (
              <button
                key={ep.n}
                onClick={() => setActiveEp(ep)}
                className="group w-full flex items-center justify-between gap-6 py-6 md:py-8 text-left transition-colors hover:bg-[var(--nb-bg-2)] px-2 md:px-4 nb-focus"
              >
                <div className="flex items-center gap-6 md:gap-10">
                  <span className="font-display italic text-[var(--nb-gold)] text-[15px] md:text-[18px] w-[60px]">
                    {ep.n}
                  </span>
                  <div className="w-11 h-11 rounded-full border border-[var(--nb-border-strong)] flex items-center justify-center group-hover:border-[var(--nb-gold)] group-hover:bg-[var(--nb-gold)] transition-all duration-300">
                    <Play className="w-4 h-4 text-[var(--nb-ivory)] group-hover:text-[#0B0B0C] transition-colors" strokeWidth={1.6} />
                  </div>
                  <h3 className="font-display tracking-editorial text-[18px] md:text-[24px] text-[var(--nb-ivory)] group-hover:text-[var(--nb-gold)] transition-colors max-w-[720px]">
                    {ep.title}
                  </h3>
                </div>
                <span className="hidden sm:inline text-[11px] tracking-micro uppercase text-[var(--nb-muted)]">
                  {ep.length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Episode modal */}
        {activeEp && (
          <div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-[rgba(5,5,6,0.92)] backdrop-blur-md p-4 md:p-10"
            onClick={() => setActiveEp(null)}
          >
            <button
              onClick={() => setActiveEp(null)}
              className="absolute top-6 right-6 text-[var(--nb-ivory)] hover:text-[var(--nb-gold)] transition-colors p-2"
              aria-label="Chiudi"
            >
              <X className="w-6 h-6" strokeWidth={1.4} />
            </button>
            <div
              className="w-full max-w-[1100px] aspect-video border border-[var(--nb-border-strong)] bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                title={activeEp.title}
                src={`https://www.youtube.com/embed/${activeEp.youtubeId}?autoplay=1&rel=0`}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default MediaSection;
