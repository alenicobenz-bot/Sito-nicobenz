import React, { useState, useEffect } from "react";
import { X, Video, Mail } from "lucide-react";

const VideoGiornoPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem("videoGiornoPopupShown");
    if (popupShown) return;

    // Show popup after 30 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
      sessionStorage.setItem("videoGiornoPopupShown", "true");
    }, 30000); // 30 seconds

    // Exit-intent detection
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !popupShown) {
        setIsVisible(true);
        sessionStorage.setItem("videoGiornoPopupShown", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      // Submit to Brevo
      await fetch("https://cafe0d23.sibforms.com/serve/MUIFABZ43SZXZJH3nshDiaEg6ITekEZFU8PddpHeCiP8S5uTb9c9TdmBgvBb6YOe4JWzk0GPU-rui_Fh58JPoW11WkmpCiZK3cfFJ1wm0t37eIN51lM70FU7cyI2ZSEPvDBFVNOY4rahnCk05XQEBHjxGtsfev6ojgvmcxsu6hEARNFV78urib3ojuu2WimeYvDMgahxoLNf1Cg9lQ==", {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });

      // Redirect to thank you page
      window.location.href = "/grazie-iscrizione";
    } catch (error) {
      console.error('Errore iscrizione:', error);
      // Still redirect
      window.location.href = "/grazie-iscrizione";
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] transition-opacity duration-300 ${
          isClosing ? "opacity-0" : "opacity-100"
        }`}
        onClick={handleClose}
      />

      {/* Popup */}
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[10000] w-full max-w-[540px] mx-4 transition-all duration-300 ${
          isClosing ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        <div className="relative bg-[#111012] border border-[var(--nb-border-strong)] rounded-2xl shadow-2xl p-8 md:p-10">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full border border-[var(--nb-border)] hover:border-[var(--nb-gold)] flex items-center justify-center transition-colors group"
            aria-label="Chiudi"
          >
            <X className="w-5 h-5 text-[var(--nb-muted)] group-hover:text-[var(--nb-gold)]" strokeWidth={1.5} />
          </button>

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-[var(--nb-gold)]/10 border border-[var(--nb-gold)]/30 flex items-center justify-center">
              <Video className="w-8 h-8 text-[var(--nb-gold)]" strokeWidth={1.5} />
            </div>
          </div>

          {/* Headline */}
          <h3 className="font-display text-[28px] md:text-[32px] tracking-editorial text-center text-[var(--nb-ivory)] mb-4 leading-[1.15]">
            1 video al giorno,<br />
            <span className="text-[var(--nb-gold)] italic">zero fatica.</span>
          </h3>

          {/* Description */}
          <p className="text-[15px] md:text-[16px] leading-[1.7] text-[var(--nb-ivory-dim)] text-center mb-6 max-w-[420px] mx-auto">
            Ogni giorno alle <strong className="text-[var(--nb-ivory)]">8:45</strong> ricevi via email:
          </p>

          {/* Benefits list */}
          <ul className="space-y-3 mb-8 max-w-[380px] mx-auto">
            {[
              "L'idea per il video",
              "Come fare le riprese",
              "Il testo pronto",
              "Gli hashtag da usare",
              "Il tema del giorno",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-[14px] md:text-[15px] text-[var(--nb-ivory)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--nb-gold)] shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          {/* Badge */}
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-2 bg-[var(--nb-gold)]/10 border border-[var(--nb-gold)]/30 rounded-full text-[12px] tracking-micro uppercase text-[var(--nb-gold)] font-semibold">
              Zero costi · Zero impegni
            </span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--nb-muted)]" strokeWidth={1.5} />
              <input
                type="email"
                name="EMAIL"
                placeholder="La tua email"
                required
                className="w-full px-12 py-4 bg-[#0a0a0a] border border-[var(--nb-border)] rounded-lg text-[15px] text-[var(--nb-ivory)] placeholder:text-[var(--nb-muted)] focus:outline-none focus:border-[var(--nb-gold)] transition-colors"
              />
            </div>

            <input type="text" name="email_address_check" defaultValue="" style={{display: 'none'}} />
            <input type="hidden" name="locale" value="it" />
            <input type="hidden" name="html_type" value="simple" />

            <button
              type="submit"
              className="w-full px-8 py-4 bg-[var(--nb-gold)] hover:bg-[var(--nb-gold)]/90 text-[#0B0B0C] font-semibold text-[15px] tracking-micro uppercase transition-all duration-300 shadow-lg shadow-[var(--nb-gold)]/20 rounded-lg"
            >
              Voglio iniziare oggi
            </button>
          </form>

          {/* Footer note */}
          <p className="text-[11px] text-[var(--nb-muted)] text-center mt-4">
            Puoi disiscriverti quando vuoi. Nessuna email spam.
          </p>
        </div>
      </div>
    </>
  );
};

export default VideoGiornoPopup;
