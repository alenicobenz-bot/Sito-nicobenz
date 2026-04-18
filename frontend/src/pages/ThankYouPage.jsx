import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Mail, Home } from "lucide-react";

const ThankYouPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-[var(--nb-bg)] text-[var(--nb-ivory)] min-h-screen flex items-center justify-center">
      {/* Simple Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(11,11,12,0.85)] backdrop-blur-md border-b border-[var(--nb-border)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-[70px] flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="font-display text-[22px] md:text-[26px] font-medium tracking-editorial text-[var(--nb-ivory)]">
              Nico<span className="text-[var(--nb-gold)]">benz</span>
            </span>
          </Link>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-4 py-2 text-[13px] tracking-micro uppercase text-[var(--nb-ivory)] hover:text-[var(--nb-gold)] transition-colors"
          >
            <Home className="w-4 h-4" strokeWidth={1.6} />
            Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-[700px] mx-auto px-6 md:px-10 py-20">
        <div className="text-center">
          {/* Icon Success */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--nb-gold)]/20 border-2 border-[var(--nb-gold)] mb-8 animate-in zoom-in duration-500">
            <CheckCircle className="w-10 h-10 text-[var(--nb-gold)]" strokeWidth={1.5} />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--nb-gold)]/10 border border-[var(--nb-gold)]/30 rounded-full mb-6">
            <span className="text-[11px] tracking-micro uppercase text-[var(--nb-gold)] font-semibold">
              Iscrizione quasi completata
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display font-light tracking-editorial text-[40px] sm:text-[52px] md:text-[60px] leading-[1.05] text-[var(--nb-ivory)] mb-6">
            Complimenti, ti sei iscritto.
          </h1>

          {/* Main Message */}
          <div className="nb-tile p-8 md:p-10 mb-8 text-left">
            <div className="flex items-start gap-4 p-5 bg-[var(--nb-gold)]/10 border-l-2 border-[var(--nb-gold)] mb-6">
              <Mail className="w-5 h-5 text-[var(--nb-gold)] shrink-0 mt-0.5" strokeWidth={1.5} />
              <p className="text-[16px] md:text-[17px] leading-[1.7] text-[var(--nb-ivory)]">
                <strong>Controlla la tua email</strong> e clicca sul link di conferma per completare la tua iscrizione.
              </p>
            </div>

            <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--nb-ivory-dim)] mb-4">
              Da domani riceverai <strong className="text-[var(--nb-ivory)]">un'idea video al giorno</strong> semplice e utile per il tuo salone.
            </p>

            <p className="text-[15px] leading-[1.65] text-[var(--nb-ivory-dim)]">
              Hai fatto bene: da oggi non resterai più senza idee per i tuoi contenuti.
            </p>
          </div>

          {/* Note */}
          <p className="text-[13px] leading-[1.65] text-[var(--nb-muted)] mb-8">
            Se non trovi l'email controlla anche nella cartella spam o promozioni.
          </p>

          {/* CTA */}
          <Link
            to="/"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--nb-gold)] hover:bg-[var(--nb-gold)]/90 text-[#0B0B0C] font-semibold text-[15px] tracking-micro uppercase transition-all duration-300 shadow-lg shadow-[var(--nb-gold)]/20"
          >
            <Home className="w-4 h-4" strokeWidth={2} />
            Torna alla home
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-[var(--nb-border)] bg-[rgba(11,11,12,0.85)] backdrop-blur-md py-6">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
          <p className="text-[12px] tracking-micro uppercase text-[var(--nb-muted)]">
            © {new Date().getFullYear()} <span className="text-[var(--nb-ivory)]">Nico</span><span className="text-[var(--nb-gold)]">benz</span> — Idea Video del Giorno per Parrucchieri
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
