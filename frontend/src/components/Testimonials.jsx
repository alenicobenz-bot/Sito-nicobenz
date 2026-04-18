import React, { useState } from "react";
import { Play, X, Quote } from "lucide-react";
import { TESTIMONIALS } from "../mock";

const Testimonials = () => {
  const [active, setActive] = useState(null);

  return (
    <>
      <section id="podcast" className="relative py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 md:mb-20">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[1px] bg-[var(--nb-gold)]" />
                <span className="nb-eyebrow">Podcast Parrucchieri</span>
              </div>
              <h2 className="font-display font-light tracking-editorial text-[36px] md:text-[52px] lg:text-[60px] leading-[1.05] text-[var(--nb-ivory)]">
                Guarda le <em className="italic text-[var(--nb-gold)]">interviste complete.</em>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <p className="text-[16px] leading-[1.7] text-[var(--nb-ivory-dim)] max-w-[520px]">
                Conversazioni senza filtri con i migliori professionisti del settore beauty. Clicca per guardare l'episodio completo su YouTube.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {TESTIMONIALS.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t)}
                className="group text-left relative nb-tile p-8 md:p-10 flex flex-col gap-6 min-h-[320px] nb-focus overflow-hidden"
              >
                {/* Large play overlay on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[rgba(0,0,0,0.75)] backdrop-blur-sm z-20">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-[var(--nb-gold)] flex items-center justify-center shadow-2xl shadow-[var(--nb-gold)]/50 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-12 h-12 text-[#0B0B0C] ml-1.5" strokeWidth={1.5} fill="currentColor" />
                    </div>
                    <div className="absolute -inset-4 rounded-full border-2 border-[var(--nb-gold)]/30 animate-pulse" />
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <Quote className="w-7 h-7 text-[var(--nb-gold)]" strokeWidth={1.2} />
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-[var(--nb-gold)]/10 border border-[var(--nb-gold)]/30 rounded-full">
                      <Play className="w-3.5 h-3.5 text-[var(--nb-gold)]" strokeWidth={2} fill="currentColor" />
                      <span className="text-[10px] tracking-micro uppercase text-[var(--nb-gold)] font-semibold">Video</span>
                    </div>
                  </div>

                  <blockquote className="font-display text-[20px] md:text-[24px] leading-[1.35] text-[var(--nb-ivory)] tracking-editorial mb-6">
                    "{t.quote}"
                  </blockquote>

                  <div className="mt-auto flex items-center gap-4 pt-6 border-t border-[var(--nb-border)]">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover grayscale-[0.2]"
                      loading="lazy"
                    />
                    <div>
                      <div className="text-[15px] text-[var(--nb-ivory)] font-medium">{t.name}</div>
                      <div className="text-[11px] tracking-micro uppercase text-[var(--nb-muted)]">{t.role}</div>
                    </div>
                  </div>

                  <div className="mt-4 text-[11px] tracking-micro uppercase text-[var(--nb-gold)]/60 group-hover:text-[var(--nb-gold)] transition-colors">
                    Clicca per guardare l'intervista completa →
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Video modal */}
      {active && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 md:p-8"
          onClick={() => setActive(null)}
        >
          <button
            onClick={() => setActive(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full border border-[var(--nb-border-strong)] flex items-center justify-center hover:border-[var(--nb-gold)] hover:bg-[var(--nb-gold)]/10 transition-all z-10"
          >
            <X className="w-5 h-5 text-[var(--nb-ivory)]" strokeWidth={1.6} />
          </button>

          <div className="w-full max-w-[1200px] aspect-video" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={`https://www.youtube.com/embed/${active.youtubeId}?autoplay=1`}
              title={active.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Testimonials;
