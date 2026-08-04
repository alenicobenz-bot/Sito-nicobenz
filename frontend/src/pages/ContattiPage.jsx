import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, Mail, MapPin, Building2, FileText, MessageCircle, Calendar, Instagram, Youtube, Facebook } from "lucide-react";
import { useSeo } from "../hooks/useSeo";
import { BRAND } from "../mock";

const ContattiPage = () => {
  useSeo({
    title: "Contatti — Nicobenz Beauty Social Coach | Marketing Parrucchieri S.r.l.",
    description: "Contatta Nico Benz per una consulenza gratuita. Marketing Parrucchieri S.r.l., Besate (MI). Email, WhatsApp, calendario prenotazioni.",
    canonical: "https://www.nicobenz.it/contatti",
    ogType: "website",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // JSON-LD Organization schema per SEO local
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Marketing Parrucchieri S.r.l.",
    "alternateName": "Nicobenz",
    "url": "https://www.nicobenz.it",
    "logo": "https://www.nicobenz.it/blog-covers/default-cover.svg",
    "description": "Beauty Social Coach. Consulenza di marketing digitale, personal branding e video marketing per parrucchieri e professionisti beauty.",
    "founder": {
      "@type": "Person",
      "name": "Nico Benz",
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Prestinari 4",
      "addressLocality": "Besate",
      "addressRegion": "MI",
      "postalCode": "20080",
      "addressCountry": "IT",
    },
    "vatID": "IT11579150969",
    "email": BRAND.email,
    "sameAs": [
      BRAND.socials.instagram,
      BRAND.socials.youtube,
      BRAND.socials.facebook,
      BRAND.socials.tiktok,
    ],
  };

  const contactMethods = [
    {
      icon: Calendar,
      title: "Prenota una consulenza",
      description: "Videochiamata gratuita di 30 minuti, direttamente con me.",
      cta: "Vai alla pagina prenota",
      to: "/prenota",
      isPrimary: true,
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Risposta rapida durante gli orari lavorativi.",
      cta: "Trova il pulsante flottante ↘",
      to: null,
      isPrimary: false,
    },
    {
      icon: Mail,
      title: "Email",
      description: "Per collaborazioni, stampa, richieste specifiche.",
      cta: BRAND.email,
      href: `mailto:${BRAND.email}`,
      isPrimary: false,
    },
  ];

  const companyInfo = [
    { icon: Building2, label: "Ragione sociale", value: "Marketing Parrucchieri S.r.l." },
    { icon: MapPin, label: "Sede legale", value: "Via Prestinari 4, 20080 Besate (MI) — Italia" },
    { icon: FileText, label: "Partita IVA / Codice Fiscale", value: "IT 11579150969" },
  ];

  return (
    <div className="relative bg-[var(--nb-bg)] text-[var(--nb-ivory)] min-h-screen">
      {/* JSON-LD Organization schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <Link to="/" className="inline-flex items-center gap-2 text-[13px] tracking-micro uppercase text-[var(--nb-muted)] hover:text-[var(--nb-gold)] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
            Torna alla home
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <span className="inline-block text-[11px] tracking-micro uppercase text-[var(--nb-gold)] mb-4">
                Contatti · Info aziendali
              </span>
              <h1 className="font-display font-light tracking-editorial text-[42px] sm:text-[56px] md:text-[72px] leading-[1.02] text-[var(--nb-ivory)]">
                Scrivimi.<br />
                <em className="italic text-[var(--nb-gold)]">Ti rispondo io</em>.
              </h1>
            </div>
            <div className="md:col-span-4">
              <p className="text-[16px] md:text-[17px] leading-[1.7] text-[var(--nb-ivory-dim)]">
                Niente call center, niente assistenti. Se scrivi qui, la risposta la scrivo io o qualcuno del mio team ristretto — con nome, cognome e responsabilità.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact methods */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <span className="inline-block text-[11px] tracking-micro uppercase text-[var(--nb-gold)] mb-8">
            Come contattarmi
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {contactMethods.map((m, i) => {
              const Wrapper = m.to ? Link : (m.href ? "a" : "div");
              const wrapperProps = m.to ? { to: m.to } : (m.href ? { href: m.href } : {});
              return (
                <Wrapper
                  key={i}
                  {...wrapperProps}
                  className={`group flex flex-col p-6 md:p-8 border transition-all duration-300 rounded-sm ${
                    m.isPrimary
                      ? "bg-[var(--nb-gold)]/10 border-[var(--nb-gold)]/50 hover:bg-[var(--nb-gold)]/15"
                      : "bg-[var(--nb-bg-2)] border-[var(--nb-border)] hover:border-[var(--nb-gold)]/40"
                  }`}
                  data-testid={`contact-method-${i}`}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-5 ${m.isPrimary ? "bg-[var(--nb-gold)]/20" : "bg-[var(--nb-gold)]/10"}`}>
                    <m.icon className="w-5 h-5 text-[var(--nb-gold)]" strokeWidth={1.6} />
                  </div>
                  <h3 className="font-display text-[20px] md:text-[22px] leading-[1.2] tracking-editorial text-[var(--nb-ivory)] mb-2">
                    {m.title}
                  </h3>
                  <p className="text-[14px] leading-[1.6] text-[var(--nb-ivory-dim)] mb-5">
                    {m.description}
                  </p>
                  <div className={`mt-auto text-[12px] tracking-micro uppercase font-semibold ${m.isPrimary ? "text-[var(--nb-gold)]" : "text-[var(--nb-ivory)] group-hover:text-[var(--nb-gold)]"} transition-colors`}>
                    {m.cta}
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company info */}
      <section className="relative py-16 md:py-24 bg-[var(--nb-bg-2)] border-y border-[var(--nb-border)]">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <span className="inline-block text-[11px] tracking-micro uppercase text-[var(--nb-gold)] mb-4">
                Informazioni aziendali
              </span>
              <h2 className="font-display font-light tracking-editorial text-[32px] md:text-[44px] leading-[1.1] text-[var(--nb-ivory)] mb-4">
                Trasparenza <em className="italic text-[var(--nb-gold)]">totale</em>.
              </h2>
              <p className="text-[15px] leading-[1.7] text-[var(--nb-ivory-dim)]">
                Dietro Nicobenz c'è una società italiana, con sede reale e P.IVA verificabile. Nessun freelancer camuffato, nessuna società offshore.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="border-t border-[var(--nb-border)]">
                {companyInfo.map((info, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 py-5 border-b border-[var(--nb-border)]"
                    data-testid={`company-info-${i}`}
                  >
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--nb-gold)]/10 shrink-0">
                      <info.icon className="w-4 h-4 text-[var(--nb-gold)]" strokeWidth={1.6} />
                    </div>
                    <div>
                      <div className="text-[11px] tracking-micro uppercase text-[var(--nb-muted)] mb-1">
                        {info.label}
                      </div>
                      <div className="text-[16px] md:text-[17px] text-[var(--nb-ivory)] font-medium">
                        {info.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="relative py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <span className="inline-block text-[11px] tracking-micro uppercase text-[var(--nb-gold)] mb-6">
            Seguimi anche su
          </span>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "Instagram", icon: Instagram, href: BRAND.socials.instagram },
              { name: "YouTube", icon: Youtube, href: BRAND.socials.youtube },
              { name: "Facebook", icon: Facebook, href: BRAND.socials.facebook },
              { name: "TikTok", icon: null, href: BRAND.socials.tiktok, letter: "Tt" },
            ].map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 border border-[var(--nb-border)] rounded-full hover:border-[var(--nb-gold)]/50 hover:bg-[var(--nb-gold)]/5 text-[14px] text-[var(--nb-ivory)] transition-all duration-300"
                data-testid={`social-${s.name.toLowerCase()}`}
              >
                {s.icon ? (
                  <s.icon className="w-4 h-4" strokeWidth={1.5} />
                ) : (
                  <span className="text-[13px] font-semibold">{s.letter}</span>
                )}
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer minimal */}
      <div className="border-t border-[var(--nb-border)] py-8">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
          <p className="text-[12px] tracking-micro uppercase text-[var(--nb-muted)]">
            © {new Date().getFullYear()} <span className="text-[var(--nb-ivory)]">Nico</span><span className="text-[var(--nb-gold)]">benz</span> · Marketing Parrucchieri S.r.l. · P.IVA IT 11579150969
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContattiPage;
