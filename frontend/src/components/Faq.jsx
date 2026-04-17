import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "../mock";

const Faq = () => {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative py-24 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[1px] bg-[var(--nb-gold)]" />
              <span className="nb-eyebrow">FAQ</span>
            </div>
            <h2 className="font-display font-light tracking-editorial text-[36px] md:text-[52px] lg:text-[60px] leading-[1.05] text-[var(--nb-ivory)]">
              Domande ricorrenti, <em className="italic text-[var(--nb-gold)]">risposte dirette.</em>
            </h2>
            <p className="mt-6 text-[15px] leading-[1.7] text-[var(--nb-ivory-dim)] max-w-[440px]">
              Se non trovi quello che cerchi, la consulenza gratuita è il modo più rapido per togliersi ogni dubbio.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="border-t border-[var(--nb-border)]">
              {FAQS.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={i} className="border-b border-[var(--nb-border)]">
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="w-full py-7 flex items-center justify-between gap-6 text-left group nb-focus"
                    >
                      <span className="font-display tracking-editorial text-[18px] md:text-[22px] text-[var(--nb-ivory)] group-hover:text-[var(--nb-gold)] transition-colors">
                        {f.q}
                      </span>
                      <span className="shrink-0 w-10 h-10 rounded-full border border-[var(--nb-border-strong)] flex items-center justify-center group-hover:border-[var(--nb-gold)] transition-colors">
                        {isOpen ? (
                          <Minus className="w-4 h-4 text-[var(--nb-gold)]" strokeWidth={1.6} />
                        ) : (
                          <Plus className="w-4 h-4 text-[var(--nb-ivory)]" strokeWidth={1.6} />
                        )}
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-500 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-7 pr-14 text-[15px] md:text-[16px] leading-[1.75] text-[var(--nb-ivory-dim)] max-w-[640px]">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
