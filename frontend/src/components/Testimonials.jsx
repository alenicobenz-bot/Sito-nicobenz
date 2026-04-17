import React, { useState } from "react";
import { Play, X, Quote } from "lucide-react";
import { TESTIMONIALS } from "../mock";

const Testimonials = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="voci" className="relative py-24 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 md:mb-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[1px] bg-[var(--nb-gold)]" />
              <span className="nb-eyebrow">Le voci dei parrucchieri top</span>
            </div>
            <h2 className="font-display font-light tracking-editorial text-[36px] md:text-[52px] lg:text-[60px] leading-[1.05] text-[var(--nb-ivory)]">
              Cosa dicono i <em className="italic text-[var(--nb-gold)]">professionisti del settore.</em>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-[16px] leading-[1.7] text-[var(--nb-ivory-dim)] max-w-[520px]">
              Quattro voci, quattro visioni, una consapevolezza comune: il futuro del beauty passa dalla comunicazione. Clicca per guardare l'intervista completa.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {TESTIMONIALS.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t)}
              className="group text-left nb-tile p-8 md:p-10 flex flex-col gap-8 min-h-[320px] nb-focus"
            >
              <div className="flex items-start justify-between">
                <Quote className="w-7 h-7 text-[var(--nb-gold)]" strokeWidth={1.2} />
                <span className="inline-flex items-center gap-2 text-[11px] tracking-micro uppercase text-[var(--nb-ivory-dim)] group-hover:text-[var(--nb-gold)] transition-colors">
                  <Play className="w-4 h-4" strokeWidth={1.6} /> Guarda
                </span>
              </div>
              <blockquote className="font-display text-[22px] md:text-[26px] leading-[1.35] text-[var(--nb-ivory)] tracking-editorial">
                “{t.quote}”
              </blockquote>
              <div className="mt-auto flex items-center gap-4 pt-6 border-t border-[var(--nb-border)]">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover grayscale-[0.2]"
                  loading="lazy"
                />
                <div>
                  <div className="text-[15px] text-[var(--nb-ivory)]">{t.name}</div>
                  <div className="text-[11px] tracking-micro uppercase text-[var(--nb-muted)]">{t.role}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Video modal */}
      {active && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[rgba(5,5,6,0.92)] backdrop-blur-md p-4 md:p-10"
          onClick={() => setActive(null)}
        >
          <button
            onClick={() => setActive(null)}
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
              title={active.name}
              src={`https://www.youtube.com/embed/${active.youtubeId}?autoplay=1&rel=0`}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
