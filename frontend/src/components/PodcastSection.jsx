import React from "react";
import { Headphones, ExternalLink } from "lucide-react";

const PodcastSection = () => {
  return (
    <section className="relative py-24 md:py-36 bg-[var(--nb-bg)] border-t border-[var(--nb-border)]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-10 h-[1px] bg-[var(--nb-gold)]" />
            <span className="nb-eyebrow">Podcast Parrucchieri</span>
            <span className="w-10 h-[1px] bg-[var(--nb-gold)]" />
          </div>
          
          <h2 className="font-display font-light tracking-editorial text-[36px] md:text-[52px] lg:text-[60px] leading-[1.05] text-[var(--nb-ivory)] max-w-[800px] mx-auto mb-6">
            Ascolta il <em className="italic text-[var(--nb-gold)]">podcast</em>
          </h2>
          
          <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--nb-ivory-dim)] max-w-[600px] mx-auto">
            Strategie, mindset e casi studio per parrucchieri che vogliono crescere attraverso i social e il video marketing.
          </p>
        </div>

        {/* Spotify Player */}
        <div className="max-w-[900px] mx-auto">
          <div className="relative bg-[#0a0a0a] border border-[var(--nb-border)] rounded-2xl overflow-hidden p-6 md:p-8">
            
            {/* Icon decoration */}
            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 rounded-full bg-[var(--nb-gold)]/10 border border-[var(--nb-gold)]/30 flex items-center justify-center">
                <Headphones className="w-7 h-7 text-[var(--nb-gold)]" strokeWidth={1.5} />
              </div>
            </div>

            {/* Spotify Embed */}
            <div className="rounded-xl overflow-hidden">
              <iframe
                style={{
                  borderRadius: '12px',
                  width: '100%',
                  height: '352px'
                }}
                src="https://open.spotify.com/embed/show/6r3C9VAJsVIorNdB16M4xP?utm_source=generator&theme=0"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Nicobenz Podcast su Spotify"
              />
            </div>

            {/* CTA Button */}
            <div className="mt-8 text-center">
              <a
                href="https://open.spotify.com/show/6r3C9VAJsVIorNdB16M4xP?si=ec78f50cfcc44831"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--nb-gold)]/10 hover:bg-[var(--nb-gold)]/20 border border-[var(--nb-gold)]/30 hover:border-[var(--nb-gold)]/50 text-[var(--nb-gold)] font-semibold text-[14px] tracking-micro uppercase transition-all duration-300 rounded-lg group"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                Ascolta su Spotify
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Stats or note */}
          <div className="mt-6 text-center">
            <p className="text-[13px] text-[var(--nb-muted)]">
              📱 Disponibile anche su Apple Podcasts, Google Podcasts e tutte le piattaforme
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PodcastSection;
