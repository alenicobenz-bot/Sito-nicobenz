import React from "react";
import { ArrowUpRight } from "lucide-react";
import { CASE_STUDIES } from "../mock";

const CaseStudies = () => {
  return (
    <section id="case-study" className="relative py-24 md:py-36 bg-[var(--nb-bg-2)] border-y border-[var(--nb-border)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[1px] bg-[var(--nb-gold)]" />
              <span className="nb-eyebrow">Case study</span>
            </div>
            <h2 className="font-display font-light tracking-editorial text-[36px] md:text-[52px] lg:text-[60px] leading-[1.05] text-[var(--nb-ivory)] max-w-[640px]">
              Risultati misurabili, <em className="italic text-[var(--nb-gold)]">saloni reali.</em>
            </h2>
          </div>
          <p className="text-[15px] leading-[1.7] text-[var(--nb-ivory-dim)] max-w-[420px]">
            Una selezione di clienti con cui abbiamo lavorato sulla crescita organica, il posizionamento editoriale e la conversione degli appuntamenti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {CASE_STUDIES.map((c, i) => (
            <article
              key={c.id}
              className={`nb-tile group ${i % 3 === 0 ? "md:col-span-2" : ""}`}
            >
              <div className={`relative overflow-hidden ${i % 3 === 0 ? "aspect-[21/9]" : "aspect-[4/3]"}`}>
                <img
                  src={c.image}
                  alt={c.salon}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-5 left-5 flex items-center gap-3">
                  <span className="text-[10px] tracking-micro uppercase text-[var(--nb-ivory)] bg-[rgba(11,11,12,0.6)] backdrop-blur px-3 py-1.5 border border-[var(--nb-border-strong)]">
                    {c.category}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                  <div>
                    <div className="font-display text-[26px] md:text-[32px] tracking-editorial text-[var(--nb-ivory)] leading-tight">
                      {c.salon}
                    </div>
                    <div className="text-[11px] tracking-micro uppercase text-[var(--nb-ivory-dim)] mt-1">
                      {c.city}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-display italic text-[var(--nb-gold)] text-[22px] md:text-[28px]">
                      {c.result}
                    </div>
                    <div className="text-[11px] tracking-micro uppercase text-[var(--nb-ivory-dim)]">
                      {c.metric}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8 flex items-start justify-between gap-6 border-t border-[var(--nb-border)]">
                <p className="text-[15px] leading-[1.65] text-[var(--nb-ivory-dim)] max-w-[560px]">
                  {c.summary}
                </p>
                <a
                  href="#prenota"
                  className="shrink-0 inline-flex items-center gap-2 text-[12px] tracking-micro uppercase text-[var(--nb-ivory)] hover:text-[var(--nb-gold)] transition-colors"
                >
                  Leggi <ArrowUpRight className="w-4 h-4" strokeWidth={1.4} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
