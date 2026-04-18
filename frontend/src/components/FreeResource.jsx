import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, Video, Zap } from "lucide-react";

const FreeResource = () => {
  return (
    <section id="video-giorno" className="relative py-20 md:py-24 bg-[var(--nb-bg-2)] border-y border-[var(--nb-border)]">
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
                Un'idea video che ti arriva direttamente via email. Ogni giorno, puntuale: tema del video, idee, riprese da fare, testo da scrivere, hashtag e tutto il resto.
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  { icon: Mail, text: "Email quotidiana con l'idea pronta all'uso" },
                  { icon: Video, text: "Tema, riprese, testo e hashtag già pensati per te" },
                  { icon: Zap, text: "Zero costi, zero impegno, cancelli quando vuoi" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] text-[var(--nb-ivory)]">
                    <span className="mt-0.5 w-8 h-8 rounded-full bg-[var(--nb-gold)]/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-[var(--nb-gold)]" strokeWidth={1.8} />
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>

              <Link
                to="/un-video-al-giorno"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--nb-gold)] hover:bg-[var(--nb-gold)]/90 text-[#0B0B0C] font-semibold text-[14px] tracking-micro uppercase transition-all duration-300 group"
              >
                <Mail className="w-4 h-4" strokeWidth={2} />
                Iscriviti gratis
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" strokeWidth={2} />
              </Link>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[320px]">
                <div className="aspect-[3/4] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[var(--nb-gold)]/40 flex flex-col items-center justify-center p-8 overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 border border-[var(--nb-gold)]/20 rotate-45" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 border border-[var(--nb-gold)]/20" />
                  
                  <div className="relative text-center z-10">
                    <div className="w-20 h-20 rounded-full bg-[var(--nb-gold)] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[var(--nb-gold)]/30">
                      <Mail className="w-10 h-10 text-[#0B0B0C]" strokeWidth={1.5} />
                    </div>
                    <div className="font-display text-[18px] tracking-editorial text-[var(--nb-ivory)] mb-2">
                      365 idee video
                    </div>
                    <div className="text-[12px] tracking-micro uppercase text-[var(--nb-gold)]">
                      Gratis · Ogni giorno
                    </div>
                  </div>
                  
                  {/* Animated lines */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--nb-gold)] to-transparent" />
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
