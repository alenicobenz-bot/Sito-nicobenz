import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, Sparkles, ShieldCheck, Users, FileText, MessageCircle } from "lucide-react";
import { useSeo } from "../hooks/useSeo";

const TrasparenzaAiPage = () => {
  useSeo({
    title: "Trasparenza AI — Come uso l'intelligenza artificiale | Nicobenz",
    description: "La mia politica di trasparenza sull'uso dell'intelligenza artificiale nei contenuti pubblicati su nicobenz.it. Conforme al Regolamento UE 2024/1689 (AI Act).",
    canonical: "https://www.nicobenz.it/trasparenza-ai",
    ogType: "article",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: Sparkles,
      title: "Dove uso l'intelligenza artificiale",
      body: (
        <ul className="space-y-3 text-[15px] md:text-[16px] leading-[1.7] text-[var(--nb-ivory-dim)]">
          <li className="flex gap-3"><span className="text-[var(--nb-gold)]">•</span><span><strong className="text-[var(--nb-ivory)]">Articoli del blog</strong> — Alcuni articoli sono redatti con l'assistenza di modelli linguistici (LLM) e successivamente revisionati editorialmente da me. Sono sempre contrassegnati con il badge "AI Assisted" e con una nota di trasparenza in cima al testo.</span></li>
          <li className="flex gap-3"><span className="text-[var(--nb-gold)]">•</span><span><strong className="text-[var(--nb-ivory)]">Idee video quotidiane</strong> — Il servizio gratuito "Un video al giorno" utilizza intelligenza artificiale per generare hook, scalette e caption. Ogni idea viene revisionata prima di essere inviata via email agli iscritti.</span></li>
          <li className="flex gap-3"><span className="text-[var(--nb-gold)]">•</span><span><strong className="text-[var(--nb-ivory)]">Immagini di copertina</strong> — Alcune cover degli articoli sono generate con strumenti di image generation (es. Google Gemini, OpenAI). Le foto reali di persone, video interviste e materiale personale sono sempre autentiche.</span></li>
        </ul>
      ),
    },
    {
      icon: Users,
      title: "Dove NON uso l'intelligenza artificiale",
      body: (
        <ul className="space-y-3 text-[15px] md:text-[16px] leading-[1.7] text-[var(--nb-ivory-dim)]">
          <li className="flex gap-3"><span className="text-[var(--nb-gold)]">•</span><span><strong className="text-[var(--nb-ivory)]">Consulenze 1-a-1</strong> — Le sessioni di consulenza sono sempre in videochiamata diretta con me. Nessun assistente AI, nessun bot.</span></li>
          <li className="flex gap-3"><span className="text-[var(--nb-gold)]">•</span><span><strong className="text-[var(--nb-ivory)]">Video-interviste</strong> — Tutte le interviste con i professionisti del settore sono conversazioni reali con persone reali.</span></li>
          <li className="flex gap-3"><span className="text-[var(--nb-gold)]">•</span><span><strong className="text-[var(--nb-ivory)]">Testimonianze</strong> — Le testimonianze dei clienti sono autentiche e verificabili su richiesta.</span></li>
          <li className="flex gap-3"><span className="text-[var(--nb-gold)]">•</span><span><strong className="text-[var(--nb-ivory)]">Podcast e comunicazioni personali</strong> — La mia voce, i miei contenuti sui social e il podcast sono sempre creati da me.</span></li>
        </ul>
      ),
    },
    {
      icon: ShieldCheck,
      title: "Come garantisco la qualità",
      body: (
        <div className="space-y-4 text-[15px] md:text-[16px] leading-[1.7] text-[var(--nb-ivory-dim)]">
          <p>
            Ogni contenuto AI-assisted passa da un processo di <strong className="text-[var(--nb-ivory)]">revisione editoriale umana</strong> prima della pubblicazione. Verifico che:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex gap-3"><span className="text-[var(--nb-gold)]">✓</span><span>Il contenuto sia accurato e coerente con la mia esperienza di 15+ anni nel settore beauty.</span></li>
            <li className="flex gap-3"><span className="text-[var(--nb-gold)]">✓</span><span>Non ci siano affermazioni fuorvianti, allucinazioni o dati inventati.</span></li>
            <li className="flex gap-3"><span className="text-[var(--nb-gold)]">✓</span><span>Il tono di voce sia in linea con il mio modo di comunicare.</span></li>
            <li className="flex gap-3"><span className="text-[var(--nb-gold)]">✓</span><span>Il valore per il lettore sia concreto e applicabile in salone.</span></li>
          </ul>
        </div>
      ),
    },
    {
      icon: FileText,
      title: "Riferimenti normativi",
      body: (
        <div className="space-y-4 text-[15px] md:text-[16px] leading-[1.7] text-[var(--nb-ivory-dim)]">
          <p>
            Questa politica di trasparenza è conforme a:
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3"><span className="text-[var(--nb-gold)]">•</span><span>
              <strong className="text-[var(--nb-ivory)]">Regolamento UE 2024/1689 (AI Act)</strong> — In particolare l'<em>Articolo 50</em> sulla trasparenza dei sistemi di intelligenza artificiale e la disclosure dei contenuti sintetici.
            </span></li>
            <li className="flex gap-3"><span className="text-[var(--nb-gold)]">•</span><span>
              <strong className="text-[var(--nb-ivory)]">Regolamento UE 2016/679 (GDPR)</strong> — Per il trattamento dei dati personali. Vedi la <Link to="/" onClick={() => window.location.href = "https://www.iubenda.com/privacy-policy/8164139"} className="text-[var(--nb-gold)] hover:underline">Privacy Policy</Link>.
            </span></li>
            <li className="flex gap-3"><span className="text-[var(--nb-gold)]">•</span><span>
              <strong className="text-[var(--nb-ivory)]">D.Lgs. 70/2003</strong> — Sul commercio elettronico e i servizi della società dell'informazione.
            </span></li>
          </ul>
        </div>
      ),
    },
    {
      icon: MessageCircle,
      title: "Domande, dubbi o segnalazioni",
      body: (
        <div className="space-y-4 text-[15px] md:text-[16px] leading-[1.7] text-[var(--nb-ivory-dim)]">
          <p>
            Se pensi che un contenuto AI-assisted sul sito contenga informazioni errate, se hai domande sulla mia politica di uso dell'intelligenza artificiale, o se vuoi semplicemente parlarne, scrivimi.
          </p>
          <p>
            Puoi contattarmi attraverso:
          </p>
          <ul className="space-y-2 ml-2">
            <li className="flex gap-3"><span className="text-[var(--nb-gold)]">•</span><span>Il pulsante <strong className="text-[var(--nb-ivory)]">WhatsApp</strong> in basso a destra sul sito</span></li>
            <li className="flex gap-3"><span className="text-[var(--nb-gold)]">•</span><span>La <Link to="/prenota" className="text-[var(--nb-gold)] hover:underline">pagina di prenotazione consulenza</Link></span></li>
          </ul>
        </div>
      ),
    },
  ];

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

      <div className="h-[70px]" />

      {/* Hero */}
      <section className="relative py-16 md:py-24 border-b border-[var(--nb-border)]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--nb-gold)] to-transparent opacity-40" />
        <div className="max-w-[900px] mx-auto px-6 md:px-10">
          <Link to="/" className="inline-flex items-center gap-2 text-[13px] tracking-micro uppercase text-[var(--nb-muted)] hover:text-[var(--nb-gold)] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
            Torna alla home
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--nb-gold)]/10 border border-[var(--nb-gold)]/40 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[var(--nb-gold)]" strokeWidth={1.8} />
            <span className="text-[11px] tracking-micro uppercase text-[var(--nb-gold)] font-semibold">Trasparenza AI Act</span>
          </div>

          <h1 className="font-display font-light tracking-editorial text-[40px] sm:text-[52px] md:text-[64px] leading-[1.05] text-[var(--nb-ivory)] mb-6">
            Come uso l'<em className="italic text-[var(--nb-gold)]">intelligenza artificiale</em>
          </h1>

          <p className="text-[17px] md:text-[19px] leading-[1.7] text-[var(--nb-ivory-dim)] max-w-[680px]">
            Credo nella trasparenza. Per questo ti spiego in modo chiaro dove uso l'intelligenza artificiale sul mio sito, come garantisco la qualità dei contenuti, e quali sono i riferimenti normativi che seguo.
          </p>

          <p className="mt-6 text-[13px] tracking-micro uppercase text-[var(--nb-muted)]">
            Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT", { day: "2-digit", month: "long", year: "numeric" })}
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-[900px] mx-auto px-6 md:px-10 space-y-14 md:space-y-20">
          {sections.map((section, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10" data-testid={`transparency-section-${i}`}>
              <div className="md:col-span-3">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[var(--nb-gold)]/10 border border-[var(--nb-gold)]/40 mb-3">
                  <section.icon className="w-6 h-6 text-[var(--nb-gold)]" strokeWidth={1.5} />
                </div>
                <div className="text-[11px] tracking-micro uppercase text-[var(--nb-gold)] font-semibold">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="md:col-span-9">
                <h2 className="font-display font-light tracking-editorial text-[26px] md:text-[36px] leading-[1.15] text-[var(--nb-ivory)] mb-5">
                  {section.title}
                </h2>
                {section.body}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-24 bg-[var(--nb-bg-2)] border-t border-[var(--nb-border)]">
        <div className="max-w-[900px] mx-auto px-6 md:px-10 text-center">
          <h2 className="font-display font-light tracking-editorial text-[28px] md:text-[40px] leading-[1.15] text-[var(--nb-ivory)] mb-6">
            Preferisci parlare direttamente con me?
          </h2>
          <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--nb-ivory-dim)] max-w-[600px] mx-auto mb-8">
            La consulenza è sempre umana, sempre 1-a-1, sempre in videochiamata diretta con me.
          </p>
          <Link
            to="/prenota"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--nb-gold)] hover:bg-[var(--nb-gold)]/90 text-[#0B0B0C] font-semibold text-[15px] tracking-micro uppercase transition-all duration-300 shadow-lg shadow-[var(--nb-gold)]/20"
            data-testid="cta-prenota-consulenza"
          >
            Prenota una consulenza gratuita
          </Link>
        </div>
      </section>

      {/* Footer */}
      <div className="border-t border-[var(--nb-border)] py-8">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
          <p className="text-[12px] tracking-micro uppercase text-[var(--nb-muted)]">
            © {new Date().getFullYear()} <span className="text-[var(--nb-ivory)]">Nico</span><span className="text-[var(--nb-gold)]">benz</span> · Marketing Parrucchieri S.r.l. · P.IVA 11579150969
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrasparenzaAiPage;
