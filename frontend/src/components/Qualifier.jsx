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

        {/* Photo + Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* LEFT: Your Photo */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#0a0a0a] border border-[var(--nb-border)]">
              <img 
                src="https://customer-assets.emergentagent.com/job_beauty-authority-co/artifacts/tk8p509u_ChatGPT%20Image%2020%20apr%202026%2C%2022_24_01.png"
                alt="Nicobenz - Beauty Social Coach che lavora solo con professionisti pronti"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              
              {/* Overlay gradient bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-20 pb-6 px-6">
                <div className="font-display text-[24px] md:text-[28px] tracking-editorial">
                  <span className="text-[var(--nb-ivory)]">Nico</span><span className="text-[var(--nb-gold)]">benz</span>
                </div>
                <div className="text-[12px] tracking-micro uppercase text-[var(--nb-ivory-dim)] mt-1">
                  Beauty Social Coach
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Two Columns */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Per chi È */}
              <div className="relative bg-[var(--nb-bg-2)] border border-[var(--nb-border)] p-8 md:p-10">
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full border border-[var(--nb-gold)] flex items-center justify-center">
                  <Check className="w-4 h-4 text-[var(--nb-gold)]" strokeWidth={2} />
                </div>
                <h3 className="font-display tracking-editorial text-[24px] md:text-[28px] text-[var(--nb-ivory)] mb-6">
                  Per chi è
                </h3>
                <ul className="space-y-4">
                  {FOR.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] leading-[1.6] text-[var(--nb-ivory-dim)]">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[var(--nb-gold)] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Per chi NON è */}
              <div className="relative bg-[var(--nb-bg)] border border-[var(--nb-border-strong)] p-8 md:p-10">
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full border border-[var(--nb-muted)] flex items-center justify-center">
                  <X className="w-4 h-4 text-[var(--nb-muted)]" strokeWidth={2} />
                </div>
                <h3 className="font-display tracking-editorial text-[24px] md:text-[28px] text-[var(--nb-ivory)] mb-6">
                  Per chi non è
                </h3>
                <ul className="space-y-4">
                  {NOT_FOR.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] leading-[1.6] text-[var(--nb-muted)]">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[var(--nb-muted)] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
