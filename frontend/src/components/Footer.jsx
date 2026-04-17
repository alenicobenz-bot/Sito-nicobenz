import React from "react";
import { Instagram, Youtube, Facebook, Mail, ArrowUpRight } from "lucide-react";
import { BRAND, FOOTER_LINKS } from "../mock";

const Footer = () => {
  return (
    <footer className="relative bg-[var(--nb-bg)] border-t border-[var(--nb-border)] pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Big editorial word */}
        <div className="mb-16">
          <div className="text-[11px] tracking-micro uppercase text-[var(--nb-muted)] mb-6">
            — Contatto
          </div>
          <a
            href="#prenota"
            className="group inline-flex items-center gap-4 flex-wrap"
          >
            <span className="font-display font-light italic tracking-editorial text-[46px] sm:text-[72px] md:text-[110px] lg:text-[140px] leading-[0.95] text-[var(--nb-ivory)] group-hover:text-[var(--nb-gold)] transition-colors duration-500">
              Scriviamoci.
            </span>
            <span className="mb-4 md:mb-8 w-14 h-14 md:w-20 md:h-20 rounded-full border border-[var(--nb-border-strong)] flex items-center justify-center group-hover:border-[var(--nb-gold)] group-hover:bg-[var(--nb-gold)] transition-all duration-500">
              <ArrowUpRight
                className="w-6 h-6 md:w-8 md:h-8 text-[var(--nb-ivory)] group-hover:text-[#0B0B0C] transition-all duration-500 group-hover:rotate-45"
                strokeWidth={1.2}
              />
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-12 border-t border-[var(--nb-border)]">
          <div className="md:col-span-4">
            <div className="font-display text-[22px] tracking-editorial mb-4">
              Nico<span className="text-[var(--nb-gold)]">benz</span>
            </div>
            <p className="text-[14px] leading-[1.7] text-[var(--nb-ivory-dim)] max-w-[320px]">
              Il primo Beauty Social Coach italiano. Strategia, personal brand e video marketing per saloni e professionisti beauty.
            </p>
            <a
              href={`mailto:${BRAND.email}`}
              className="mt-6 inline-flex items-center gap-2 text-[14px] text-[var(--nb-ivory)] hover:text-[var(--nb-gold)] transition-colors"
            >
              <Mail className="w-4 h-4" strokeWidth={1.5} />
              {BRAND.email}
            </a>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] tracking-micro uppercase text-[var(--nb-muted)] mb-5">Sito</div>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[14px] text-[var(--nb-ivory-dim)] hover:text-[var(--nb-ivory)] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] tracking-micro uppercase text-[var(--nb-muted)] mb-5">Social</div>
            <ul className="space-y-3">
              <li>
                <a href={BRAND.socials.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-[14px] text-[var(--nb-ivory-dim)] hover:text-[var(--nb-gold)] transition-colors">
                  <Instagram className="w-4 h-4" strokeWidth={1.4} /> Instagram
                </a>
              </li>
              <li>
                <a href={BRAND.socials.youtube} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-[14px] text-[var(--nb-ivory-dim)] hover:text-[var(--nb-gold)] transition-colors">
                  <Youtube className="w-4 h-4" strokeWidth={1.4} /> YouTube
                </a>
              </li>
              <li>
                <a href={BRAND.socials.facebook} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-[14px] text-[var(--nb-ivory-dim)] hover:text-[var(--nb-gold)] transition-colors">
                  <Facebook className="w-4 h-4" strokeWidth={1.4} /> Facebook
                </a>
              </li>
              <li>
                <a href={BRAND.socials.tiktok} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-[14px] text-[var(--nb-ivory-dim)] hover:text-[var(--nb-gold)] transition-colors">
                  <span className="text-xs font-semibold">Tt</span> TikTok
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] tracking-micro uppercase text-[var(--nb-muted)] mb-5">Legale</div>
            <ul className="space-y-3">
              <li><a href="#" className="text-[14px] text-[var(--nb-ivory-dim)] hover:text-[var(--nb-ivory)] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-[14px] text-[var(--nb-ivory-dim)] hover:text-[var(--nb-ivory)] transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-[var(--nb-border)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[11px] tracking-micro uppercase text-[var(--nb-muted)]">
            © {new Date().getFullYear()} Nicobenz · Tutti i diritti riservati
          </p>
          <p className="text-[11px] tracking-micro uppercase text-[var(--nb-muted)]">
            Design editoriale · Redesigned with care
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
