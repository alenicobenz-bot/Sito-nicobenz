import React from "react";
import { ArrowUpRight, Check, Calendar } from "lucide-react";
import { BRAND } from "../mock";

const BookingCTA = () => {
  return (
    <section id="prenota" className="relative py-24 md:py-36 bg-[var(--nb-bg)] nb-grain overflow-hidden">
      {/* Gold accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--nb-gold)] to-transparent opacity-40" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-10 h-[1px] bg-[var(--nb-gold)]" />
          <span className="nb-eyebrow">Consulenza gratuita</span>
          <span className="w-10 h-[1px] bg-[var(--nb-gold)]" />
        </div>
        
        <h2 className="font-display font-light tracking-editorial text-[44px] md:text-[64px] lg:text-[80px] leading-[1.02] text-[var(--nb-ivory)] max-w-[900px] mx-auto">
          Trenta minuti <em className="italic text-[var(--nb-gold)]">per capire</em> se il tuo salone può crescere di un altro livello.
        </h2>
        
        <p className="mt-8 text-[16px] md:text-[18px] leading-[1.7] text-[var(--nb-ivory-dim)] max-w-[640px] mx-auto">
          Una call 1-a-1 con me. Analizziamo il tuo posizionamento, individuiamo il primo ostacolo da rimuovere e decidi in autonomia se proseguire.
        </p>

        <ul className="mt-12 inline-flex flex-col items-start gap-4 text-left">
          {[
            "Analisi del posizionamento attuale",
            "Audit dei contenuti e della presenza social",
            "Prima azione strategica, già pronta",
            "Zero impegno, zero vendite forzate",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-4 text-[15px] text-[var(--nb-ivory)]">
              <span className="mt-0.5 w-6 h-6 rounded-full border border-[var(--nb-gold)] flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 text-[var(--nb-gold)]" strokeWidth={2} />
              </span>
              {item}
            </li>
          ))}
        </ul>

        <a
          href={BRAND.bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="nb-btn-primary mt-14"
        >
          <Calendar className="w-4 h-4" strokeWidth={1.6} />
          Prenota la consulenza
          <ArrowUpRight className="w-4 h-4" strokeWidth={1.6} />
        </a>
      </div>
    </section>
  );
};

export default BookingCTA;

