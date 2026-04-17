import React from "react";
import { AlertCircle, X } from "lucide-react";

const PROBLEMS = [
  {
    title: "I tuoi contenuti non convertono",
    text: "Pubblichi tutti i giorni, lavori ore sui social, ma non ti porta clienti. La visibilità non è il problema: è la mancanza di strategia.",
  },
  {
    title: "I competitor sono più visibili",
    text: "Altri saloni riempiono l'agenda con metà della tua qualità tecnica. Non è fortuna: sanno come posizionarsi e tu no.",
  },
  {
    title: "Non sai come raccontare il tuo lavoro",
    text: "Sei bravissimo sulla poltrona, ma davanti alla telecamera vai in crisi. Così il tuo salone resta invisibile online.",
  },
];

const Problem = () => {
  return (
    <section className="relative py-20 md:py-28 bg-[var(--nb-bg-2)] border-y border-[var(--nb-border)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12 md:mb-16">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[1px] bg-[var(--nb-gold)]" />
              <span className="nb-eyebrow">Il problema</span>
            </div>
            <h2 className="font-display font-light tracking-editorial text-[36px] md:text-[52px] lg:text-[60px] leading-[1.05] text-[var(--nb-ivory)]">
              Se i tuoi social <em className="italic text-[var(--nb-gold)]">non ti portano clienti,</em> è perché ti mancano queste tre cose.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-[var(--nb-ivory-dim)] max-w-[480px]">
              La maggior parte dei saloni perde tempo ed energia su attività che non producono risultati. 
              Tu hai bisogno di un metodo, non di un altro corso sui Reels.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {PROBLEMS.map((p, i) => (
            <div
              key={i}
              className="group relative bg-[var(--nb-bg)] border border-[var(--nb-border)] p-8 md:p-10 transition-all duration-500 hover:border-[var(--nb-gold)]/40"
            >
              <div className="flex items-start justify-between mb-6">
                <X className="w-5 h-5 text-[var(--nb-gold)]" strokeWidth={1.8} />
                <span className="text-[10px] tracking-micro uppercase text-[var(--nb-muted)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="font-display tracking-editorial text-[22px] md:text-[26px] leading-[1.2] text-[var(--nb-ivory)] mb-4">
                {p.title}
              </h3>
              <p className="text-[14px] md:text-[15px] leading-[1.7] text-[var(--nb-ivory-dim)]">
                {p.text}
              </p>
              <div className="mt-8 h-px bg-[var(--nb-border)] w-0 group-hover:w-full transition-[width] duration-700" />
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-12 md:mt-16 p-6 md:p-8 border-l-2 border-[var(--nb-gold)] bg-[rgba(201,169,110,0.03)]">
          <p className="font-display italic text-[17px] md:text-[20px] leading-[1.5] text-[var(--nb-ivory)] max-w-[820px]">
            "La buona notizia? Con il sistema giusto, questi tre blocchi si risolvono in 90 giorni. 
            E il tuo salone inizia ad attrarre clienti senza rincorrerli."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
