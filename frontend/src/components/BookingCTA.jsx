import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check, Calendar } from "lucide-react";

const BookingCTA = () => {
  return (
    <section id="prenota" className="relative py-32 md:py-40 bg-[var(--nb-bg)] nb-grain overflow-hidden">
      {/* Gold accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--nb-gold)] to-transparent opacity-40" />

      <div className="max-w-[900px] mx-auto px-6 md:px-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="w-10 h-[1px] bg-[var(--nb-gold)]" />
          <span className="nb-eyebrow">Consulenza gratuita</span>
          <span className="w-10 h-[1px] bg-[var(--nb-gold)]" />
        </div>
        
        <h2 className="font-display font-light tracking-editorial text-[44px] md:text-[68px] lg:text-[84px] leading-[1.02] text-[var(--nb-ivory)] mb-8">
          Trenta minuti <em className="italic text-[var(--nb-gold)]">per capire</em> se possiamo lavorare insieme.
        </h2>
        
        <p className="text-[17px] md:text-[19px] leading-[1.7] text-[var(--nb-ivory-dim)] max-w-[640px] mx-auto mb-12">
          Una call 1-a-1 con <span className="font-medium"><span className="text-[var(--nb-ivory)]">Nico</span><span className="text-[var(--nb-gold)]">benz</span></span>. Analizziamo il tuo posizionamento, individuiamo il primo ostacolo da rimuovere e decidi in autonomia se proseguire.
        </p>

        <ul className="inline-flex flex-col items-start gap-4 text-left mb-14">
          {[
            "Analisi del posizionamento attuale",
            "Audit dei contenuti e della presenza social",
            "Prima azione strategica, già pronta",
            "Zero impegno, zero vendite forzate",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-4 text-[15px] text-[var(--nb-ivory)]">
              <span className="mt-0.5 w-6 h-6 rounded-full border border-[var(--nb-gold)] flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 text-[var(--nb-gold)]" strokeWidth={2.5} />
              </span>
              {item}
            </li>
          ))}
        </ul>

        <Link
          to="/prenota"
          className="inline-flex items-center gap-3 px-10 py-5 bg-[var(--nb-gold)] hover:bg-[var(--nb-gold)]/90 text-[#0B0B0C] font-semibold text-[15px] tracking-micro uppercase transition-all duration-300 group shadow-lg shadow-[var(--nb-gold)]/20"
        >
          <Calendar className="w-5 h-5" strokeWidth={2} />
          Prenota la consulenza gratuita
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" strokeWidth={2} />
        </Link>
      </div>
    </section>
  );
};

export default BookingCTA;

