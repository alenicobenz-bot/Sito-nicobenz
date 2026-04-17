import React from "react";
import { ArrowUpRight, Play } from "lucide-react";

const FreeResource = () => {
  return (
    <section className="relative py-20 md:py-24 bg-[var(--nb-bg-2)] border-y border-[var(--nb-border)]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="relative bg-gradient-to-br from-[var(--nb-gold)]/10 to-transparent border border-[var(--nb-gold)]/30 p-10 md:p-14 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, var(--nb-gold) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--nb-gold)]/20 border border-[var(--nb-gold)] rounded-full text-[10px] tracking-micro uppercase text-[var(--nb-gold)] font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-[var(--nb-gold)] animate-pulse" />
                Risorsa gratuita
              </div>

              <h2 className="font-display font-light tracking-editorial text-[36px] md:text-[52px] lg:text-[56px] leading-[1.05] text-[var(--nb-ivory)] mb-6">
                Un video <em className="italic text-[var(--nb-gold)]">al giorno.</em>
              </h2>

              <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--nb-ivory-dim)] max-w-[540px] mb-8">
                Il sistema pratico per costruire la tua presenza online con un solo video al giorno. Strategia, template e tutto quello che ti serve per iniziare subito.
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  "Metodo completo spiegato passo dopo passo",
                  "Template pronti da usare oggi stesso",
                  "Zero costi, zero vincoli, zero fuffa",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] text-[var(--nb-ivory)]">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-[var(--nb-gold)]/20 flex items-center justify-center shrink-0">
                      <span className="w-2 h-2 rounded-full bg-[var(--nb-gold)]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="https://www.nicobenz.it/1-video-al-giorno"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--nb-gold)] hover:bg-[var(--nb-gold)]/90 text-[#0B0B0C] font-semibold text-[14px] tracking-micro uppercase transition-all duration-300 group"
              >
                <Play className="w-4 h-4" strokeWidth={2} />
                Accedi alla risorsa gratuita
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" strokeWidth={2} />
              </a>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[320px]">
                <div className="aspect-[3/4] bg-gradient-to-br from-[var(--nb-gold)]/20 to-transparent border-2 border-[var(--nb-gold)]/40 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-[var(--nb-gold)] flex items-center justify-center mx-auto mb-4">
                      <Play className="w-10 h-10 text-[#0B0B0C] ml-1" strokeWidth={1.5} fill="currentColor" />
                    </div>
                    <div className="font-display text-[22px] tracking-editorial text-[var(--nb-gold)] uppercase">
                      Free
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[var(--nb-gold)]/10 border border-[var(--nb-gold)]/20 -z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeResource;
