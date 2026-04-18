import React from "react";
import { ArrowUpRight } from "lucide-react";
import { HERO, BRAND } from "../mock";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20 md:py-24 bg-[var(--nb-bg)] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[1px] bg-[var(--nb-gold)]" />
              <span className="nb-eyebrow">{HERO.eyebrow}</span>
            </div>

            <h1 className="font-display font-light tracking-editorial text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-[0.95] text-[var(--nb-ivory)] mb-8">
              {HERO.title.map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < HERO.title.length - 1 && <br />}
                </React.Fragment>
              ))}
            </h1>

            <p className="text-base sm:text-lg leading-[1.7] text-[var(--nb-ivory-dim)] max-w-[560px] mb-10">
              {HERO.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={HERO.primaryCta.href} target="_blank" rel="noreferrer" className="nb-btn-primary justify-center sm:justify-start">
                {HERO.primaryCta.label}
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.6} />
              </a>
              <a href={HERO.secondaryCta.href} className="nb-btn-ghost justify-center sm:justify-start">
                {HERO.secondaryCta.label}
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.6} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden bg-[#0a0a0a]">
              <img
                src={HERO.portrait}
                alt="Nicobenz"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
