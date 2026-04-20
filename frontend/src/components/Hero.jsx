import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { HERO } from "../mock";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20 md:py-24 bg-[var(--nb-bg)] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            {/* Nome prominente sopra tutto */}
            <div className="mb-8">
              <h2 className="font-display font-medium tracking-editorial text-[32px] sm:text-[40px] md:text-[48px] mb-2">
                <span className="text-[var(--nb-ivory)]">Nico</span><span className="text-[var(--nb-gold)]">benz</span>
              </h2>
              <div className="flex items-center gap-3">
                <span className="w-10 h-[1px] bg-[var(--nb-gold)]" />
                <span className="nb-eyebrow">{HERO.eyebrow}</span>
              </div>
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
              <Link to="/prenota" className="nb-btn-primary justify-center sm:justify-start">
                {HERO.primaryCta.label}
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.6} />
              </Link>
              <a href={HERO.secondaryCta.href} className="nb-btn-ghost justify-center sm:justify-start">
                {HERO.secondaryCta.label}
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.6} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden bg-[#0a0a0a] flex items-center justify-center">
              <img
                src={HERO.portrait}
                alt="Nicobenz Beauty Social Coach - Esperto marketing per parrucchieri e formazione social media per saloni di bellezza"
                className="w-full h-full object-contain scale-90"
                loading="eager"
              />
              
              {/* Firma sotto la foto - sempre visibile */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent pt-16 pb-6 px-6">
                <div className="text-center">
                  <div className="font-display text-[28px] sm:text-[32px] md:text-[36px] tracking-editorial mb-1">
                    <span className="text-[var(--nb-ivory)]">Nico</span><span className="text-[var(--nb-gold)]">benz</span>
                  </div>
                  <div className="text-[11px] sm:text-[12px] tracking-micro uppercase text-[var(--nb-ivory-dim)]">
                    Beauty Social Coach · Founder
                  </div>
                </div>
              </div>
            </div>

            {/* Floating quote */}
            <div className="hidden lg:block absolute -left-8 bottom-24 max-w-[280px] p-6 border-l-2 border-[var(--nb-gold)] bg-[rgba(17,16,18,0.85)] backdrop-blur-md">
              <p className="font-display italic text-[17px] leading-[1.5] text-[var(--nb-ivory)]">
                "Smetti di inseguire i clienti. Inizia a costruire il motivo per cui ti cercano."
              </p>
              <div className="mt-3 text-[11px] tracking-micro uppercase">
                — <span className="text-[var(--nb-ivory)]">Nico</span><span className="text-[var(--nb-gold)]">benz</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
