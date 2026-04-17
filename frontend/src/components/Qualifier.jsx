import React from "react";
import { Check, X } from "lucide-react";

const FOR = [
  "Titolari di saloni che vogliono smettere di rincorrere clienti e costruire un brand che attrae",
  "Parrucchieri e barber che vogliono un team esperto che fa il 95% del lavoro di marketing per loro",
  "Professionisti beauty che cercano un metodo strutturato, non l'ennesimo corso sui Reels",
  "Chi è disposto a metterci la faccia e raccontare il proprio lavoro con autenticità",
];

const NOT_FOR = [
  "Chi cerca scorciatoie, trucchi virali o risultati senza impegno",
  "Saloni che non hanno tempo né voglia di investire nella propria presenza online",
  "Chi vuole delegare tutto e non vuole essere coinvolto personalmente",
  "Professionisti che non credono nel valore del personal branding",
];

const Qualifier = () => {
  return (
    <section className="relative py-24 md:py-36 bg-[var(--nb-bg)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-10 h-[1px] bg-[var(--nb-gold)]" />
            <span className="nb-eyebrow">Per chi è (e per chi non è)</span>
            <span className="w-10 h-[1px] bg-[var(--nb-gold)]" />
          </div>
          <h2 className="font-display font-light tracking-editorial text-[36px] md:text-[52px] lg:text-[60px] leading-[1.05] text-[var(--nb-ivory)] max-w-[900px] mx-auto">
            Non lavoro con <em className="italic text-[var(--nb-gold)]">tutti.</em> Solo con chi è pronto.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Per chi È */}
          <div className="relative bg-[var(--nb-bg-2)] border border-[var(--nb-border)] p-10 md:p-14">
            <div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-[var(--nb-gold)] flex items-center justify-center">
              <Check className="w-5 h-5 text-[var(--nb-gold)]" strokeWidth={2} />
            </div>
            <h3 className="font-display tracking-editorial text-[28px] md:text-[34px] text-[var(--nb-ivory)] mb-8">
              Per chi è
            </h3>
            <ul className="space-y-5">
              {FOR.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-[15px] leading-[1.7] text-[var(--nb-ivory-dim)]">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[var(--nb-gold)] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Per chi NON è */}
          <div className="relative bg-[var(--nb-bg)] border border-[var(--nb-border-strong)] p-10 md:p-14">
            <div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-[var(--nb-muted)] flex items-center justify-center">
              <X className="w-5 h-5 text-[var(--nb-muted)]" strokeWidth={2} />
            </div>
            <h3 className="font-display tracking-editorial text-[28px] md:text-[34px] text-[var(--nb-ivory)] mb-8">
              Per chi non è
            </h3>
            <ul className="space-y-5">
              {NOT_FOR.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-[15px] leading-[1.7] text-[var(--nb-muted)]">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[var(--nb-muted)] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-12 md:mt-16 text-center max-w-[740px] mx-auto">
          <p className="font-display italic text-[18px] md:text-[22px] leading-[1.5] text-[var(--nb-ivory)]">
            "Se ti riconosci nella colonna di sinistra, allora possiamo lavorare insieme. 
            Se ti riconosci in quella di destra, risparmia tempo: non siamo fatti l'uno per l'altro."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Qualifier;
