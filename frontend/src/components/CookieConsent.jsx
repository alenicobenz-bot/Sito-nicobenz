import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("nb-cookie-consent");
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("nb-cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("nb-cookie-consent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] animate-in slide-in-from-bottom duration-500">
      <div className="bg-[#0B0B0C]/95 backdrop-blur-xl border-t border-[var(--nb-border-strong)] shadow-2xl">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 md:py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
            {/* Text content */}
            <div className="flex-1">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--nb-gold)]/10 border border-[var(--nb-gold)]/30 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[var(--nb-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-[15px] md:text-[16px] font-medium text-[var(--nb-ivory)] mb-2">
                    Questo sito utilizza cookie
                  </h3>
                  <p className="text-[13px] md:text-[14px] leading-[1.6] text-[var(--nb-ivory-dim)] max-w-[700px]">
                    Utilizziamo cookie tecnici e di terze parti per migliorare la tua esperienza di navigazione e analizzare il traffico del sito. Continuando la navigazione acconsenti all'uso dei cookie.{" "}
                    <a 
                      href="https://www.iubenda.com/privacy-policy/8164139" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[var(--nb-gold)] hover:underline"
                    >
                      Privacy Policy
                    </a>
                    {" · "}
                    <a 
                      href="https://www.iubenda.com/privacy-policy/8164139/cookie-policy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[var(--nb-gold)] hover:underline"
                    >
                      Cookie Policy
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <button
                onClick={handleReject}
                className="flex-1 md:flex-initial px-5 py-2.5 text-[13px] tracking-micro uppercase text-[var(--nb-ivory-dim)] hover:text-[var(--nb-ivory)] border border-[var(--nb-border-strong)] hover:border-[var(--nb-gold)]/30 transition-all duration-200 nb-focus"
              >
                Rifiuta
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 md:flex-initial px-6 py-2.5 text-[13px] tracking-micro uppercase bg-[var(--nb-gold)] hover:bg-[var(--nb-gold-hover)] text-[#0B0B0C] font-semibold transition-all duration-200 nb-focus shadow-lg shadow-[var(--nb-gold)]/20"
              >
                Accetta
              </button>
            </div>

            {/* Close button (optional) */}
            <button
              onClick={handleReject}
              className="absolute top-4 right-4 md:relative md:top-0 md:right-0 w-8 h-8 flex items-center justify-center text-[var(--nb-muted)] hover:text-[var(--nb-ivory)] transition-colors"
              aria-label="Chiudi"
            >
              <X className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
