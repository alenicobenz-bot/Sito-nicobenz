import React from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { HERO, BRAND } from "../mock";

const Hero = () => {
  return (
    <section id="top" className="relative pt-[120px] md:pt-[180px] pb-20 md:pb-28 nb-grain">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          {/* Left — Editorial headline */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8 nb-fade-up">
              <span className="w-10 h-[1px] bg-[var(--nb-gold)]" />
              <span className="nb-eyebrow">{HERO.eyebrow}</span>
            </div>

            <h1 className="font-display font-light tracking-editorial text-[var(--nb-ivory)] text-[44px] leading-[1.02] sm:text-[58px] md:text-[76px] lg:text-[88px] xl:text-[98px] nb-fade-up" style={{animationDelay:'80ms'}}>
              {HERO.title.map((line, i) => (
                <span key={i} className="block">
                  {i === 2 ? (
                    <>
                      scelgono, <em className="italic font-normal text-[var(--nb-gold)]">seguono</em> e ricordano.
                    </>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h1>

            <p className="mt-8 md:mt-10 max-w-[560px] text-[16px] md:text-[18px] leading-[1.65] text-[var(--nb-ivory-dim)] nb-fade-up" style={{animationDelay:'160ms'}}>
              {HERO.subtitle}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 nb-fade-up" style={{animationDelay:'240ms'}}>
              <a href={HERO.primaryCta.href} className="nb-btn-primary">
                {HERO.primaryCta.label}
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.6} />
              </a>
              <a href={HERO.secondaryCta.href} className="nb-btn-ghost">
                {HERO.secondaryCta.label}
                <ArrowDown className="w-4 h-4" strokeWidth={1.4} />
              </a>
            </div>
          </div>

          {/* Right — Portrait */}
          <div className="lg:col-span-5 relative nb-fade-up" style={{animationDelay:'320ms'}}>
            <div className="relative aspect-[4/5] w-full max-w-[520px] mx-auto lg:ml-auto overflow-hidden">
              <img
                src={HERO.portrait}
                alt={`${BRAND.name}, ${BRAND.role}`}
                className="w-full h-full object-cover grayscale-[0.2] contrast-[1.02]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--nb-bg)] via-transparent to-transparent" />
              <div className="absolute top-4 left-4 border border-[var(--nb-border-strong)] px-3 py-1.5 text-[10px] tracking-micro uppercase text-[var(--nb-ivory)] bg-[rgba(11,11,12,0.5)] backdrop-blur">
                Milano · Italia
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <div className="font-display text-xl tracking-editorial">Nico Benz</div>
                  <div className="text-[11px] tracking-micro uppercase text-[var(--nb-ivory-dim)]">Fondatore · Parrucchiere Social</div>
                </div>
                <span className="font-display italic text-[var(--nb-gold)] text-xl">—12’</span>
              </div>
            </div>

            {/* Floating quote */}
            <div className="hidden lg:block absolute -left-8 bottom-8 max-w-[280px] p-5 border-l-2 border-[var(--nb-gold)] bg-[rgba(17,16,18,0.7)] backdrop-blur-sm">
              <p className="font-display italic text-[17px] leading-[1.45] text-[var(--nb-ivory)]">
                “Smetti di inseguire i clienti. Inizia a costruire il motivo per cui ti cercano.”
              </p>
            </div>
          </div>
        </div>

        {/* Bottom micro bar */}
        <div className="mt-20 md:mt-28 flex items-center justify-between text-[11px] tracking-micro uppercase text-[var(--nb-muted)]">
          <span>EST. 2013</span>
          <span className="hidden md:inline">Scroll</span>
          <span>No. 01 — Homepage</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
