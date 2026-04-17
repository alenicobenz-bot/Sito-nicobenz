import React from "react";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { BOOK } from "../mock";

const MediaSection = () => {
  return (
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

            {BOOK.quotes.length > 0 && (
              <div className="mt-10 space-y-4">
                {BOOK.quotes.map((q, i) => (
                  <div key={i} className="pl-5 border-l border-[var(--nb-gold)] text-[14px] text-[var(--nb-ivory)] italic leading-[1.6] max-w-[520px] font-display">
                    {q}
                  </div>
                ))}
              </div>
            )}

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

          <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
            <div className="relative aspect-[3/4] max-w-[420px] mx-auto">
              <img
                src={BOOK.cover}
                alt={BOOK.title}
                className="w-full h-full object-contain"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--nb-gold)]/10 border border-[var(--nb-gold)]/20 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
