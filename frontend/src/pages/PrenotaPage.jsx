import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, Calendar, Clock, Video } from "lucide-react";

const PrenotaPage = () => {
  // Scroll to top quando la pagina si carica
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-[var(--nb-bg)] text-[var(--nb-ivory)] min-h-screen">
      {/* Header */}
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

      {/* Spacer for fixed header */}
      <div className="h-[70px]" />

      {/* Hero Section */}
      <section className="relative py-12 md:py-16 border-b border-[var(--nb-border)]">
        <div className="max-w-[900px] mx-auto px-6 md:px-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--nb-gold)]/10 border border-[var(--nb-gold)]/30 rounded-full mb-6">
            <Calendar className="w-4 h-4 text-[var(--nb-gold)]" strokeWidth={1.5} />
            <span className="text-[11px] tracking-micro uppercase text-[var(--nb-gold)] font-semibold">
              Consulenza Gratuita
            </span>
          </div>

          <h1 className="font-display font-light tracking-editorial text-[36px] sm:text-[48px] md:text-[56px] leading-[1.05] text-[var(--nb-ivory)] mb-6">
            Prenota la tua consulenza <em className="italic text-[var(--nb-gold)]">gratuita</em>
          </h1>

          <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--nb-ivory-dim)] max-w-[600px] mx-auto mb-8">
            Call 1-a-1 di 30 minuti per analizzare il posizionamento del tuo salone e capire come far crescere il tuo personal brand.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[700px] mx-auto mb-12">
            {[
              { icon: Clock, text: "30 minuti 1-a-1" },
              { icon: Video, text: "Online via Zoom" },
              { icon: Calendar, text: "Zero impegni" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 justify-center md:justify-start px-4 py-3 bg-[#0a0a0a] border border-[var(--nb-border)] rounded-lg">
                <item.icon className="w-5 h-5 text-[var(--nb-gold)] shrink-0" strokeWidth={1.5} />
                <span className="text-[14px] text-[var(--nb-ivory)]">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="relative py-12 md:py-16">
        <div className="max-w-[1000px] mx-auto px-6 md:px-10">
          <div className="bg-[#0a0a0a] border border-[var(--nb-border)] rounded-2xl overflow-hidden">
            {/* YouCanBook.me iframe */}
            <iframe
              src="https://nicobenz.youcanbook.me/"
              id="ycbmiframenicobenz"
              style={{
                width: '100%',
                height: '1000px',
                border: '0px',
                backgroundColor: 'transparent'
              }}
              frameBorder="0"
              allowTransparency="true"
              title="Prenota consulenza con Nicobenz"
            />
          </div>

          {/* Trust note */}
          <p className="text-[13px] text-[var(--nb-muted)] text-center mt-6">
            🔒 I tuoi dati sono protetti e non verranno condivisi con terze parti
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative py-16 md:py-20 border-t border-[var(--nb-border)]">
        <div className="max-w-[800px] mx-auto px-6 md:px-10 text-center">
          <h3 className="font-display text-[24px] md:text-[28px] tracking-editorial text-[var(--nb-ivory)] mb-4">
            Non trovi l'orario giusto?
          </h3>
          <p className="text-[15px] md:text-[16px] leading-[1.7] text-[var(--nb-ivory-dim)] mb-6">
            Contattami direttamente su WhatsApp e troviamo insieme il momento migliore.
          </p>
          <a
            href="https://wa.me/393923141757"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold text-[14px] tracking-micro uppercase transition-all duration-300 rounded-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Scrivimi su WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default PrenotaPage;
