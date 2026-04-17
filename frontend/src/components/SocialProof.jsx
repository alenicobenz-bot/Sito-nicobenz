import React from "react";
import { STATS, PRESS } from "../mock";

const SocialProof = () => {
  return (
    <section className="relative border-y border-[var(--nb-border)] bg-[var(--nb-bg-2)]">
      {/* Stats */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-14 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {STATS.map((s, i) => (
            <div key={i} className="flex flex-col">
              <span className="font-display font-light tracking-editorial text-[42px] md:text-[56px] leading-none text-[var(--nb-ivory)]">
                {s.value}
              </span>
              <span className="mt-3 text-[11px] tracking-micro uppercase text-[var(--nb-muted)]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="nb-hairline" />

      {/* Press marquee */}
      <div className="overflow-hidden py-8">
        <div className="flex items-center gap-16 whitespace-nowrap nb-marquee-track">
          {[...PRESS, ...PRESS, ...PRESS].map((p, i) => (
            <span
              key={i}
              className="font-display italic text-[20px] md:text-[22px] text-[var(--nb-ivory-dim)] hover:text-[var(--nb-gold)] transition-colors"
            >
              {p}
              <span className="ml-16 text-[var(--nb-muted)]">—</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
