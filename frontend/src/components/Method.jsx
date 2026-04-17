import React from "react";
import { METHOD } from "../mock";

const Method = () => {
  return (
    <section id="metodo" className="relative py-24 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 md:mb-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[1px] bg-[var(--nb-gold)]" />
              <span className="nb-eyebrow">{METHOD.kicker}</span>
            </div>
            <h2 className="font-display font-light tracking-editorial text-[36px] md:text-[52px] lg:text-[60px] leading-[1.05] text-[var(--nb-ivory)]">
              {METHOD.title.split(" ").slice(0, -2).join(" ")} <em className="italic text-[var(--nb-gold)]">{METHOD.title.split(" ").slice(-2).join(" ")}</em>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--nb-ivory-dim)] max-w-[520px]">
              {METHOD.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--nb-border)]">
          {METHOD.steps.map((s, i) => (
            <div
              key={s.n}
              className="group relative bg-[var(--nb-bg)] p-10 md:p-14 transition-colors duration-500 hover:bg-[var(--nb-bg-2)]"
            >
              <div className="flex items-start justify-between mb-10">
                <span className="font-display italic text-[var(--nb-gold)] text-[18px]">{s.n}</span>
                <span className="text-[10px] tracking-micro uppercase text-[var(--nb-muted)]">Step</span>
              </div>
              <h3 className="font-display tracking-editorial text-[28px] md:text-[34px] text-[var(--nb-ivory)] mb-5">
                {s.title}
              </h3>
              <p className="text-[15px] md:text-[16px] leading-[1.7] text-[var(--nb-ivory-dim)] max-w-[460px]">
                {s.text}
              </p>
              <div className="mt-10 h-px bg-[var(--nb-border)] w-0 group-hover:w-full transition-[width] duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Method;
