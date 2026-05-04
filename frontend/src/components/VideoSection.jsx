import React from "react";
import { Youtube } from "lucide-react";

const VIDEOS = [
  {
    id: "fZ-mOQe0Ypc",
    title: "Intervista a Jenny Fratini",
    subtitle: "Jenny, la Manga dei Parrucchieri.",
    url: "https://www.youtube.com/embed/fZ-mOQe0Ypc"
  },
  {
    id: "1-MKaUX1HyU",
    title: "La Live dei TOP",
    subtitle: "Il meglio degli hairstylist sui social, tutti insieme!",
    url: "https://www.youtube.com/embed/1-MKaUX1HyU"
  }
];

const VideoSection = () => {
  return (
    <section
      id="video-interviste"
      className="relative py-24 md:py-36 bg-[var(--nb-bg)] border-y border-[var(--nb-border)]"
      data-testid="video-section"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 md:mb-20">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[1px] bg-[var(--nb-gold)]" />
              <span className="nb-eyebrow flex items-center gap-2">
                <Youtube className="w-4 h-4" strokeWidth={1.5} />
                Video YouTube
              </span>
            </div>
            <h2 className="font-display font-light tracking-editorial text-[36px] md:text-[52px] lg:text-[60px] leading-[1.05] text-[var(--nb-ivory)]">
              Guarda le <em className="italic text-[var(--nb-gold)]">interviste complete.</em>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-[16px] leading-[1.7] text-[var(--nb-ivory-dim)] max-w-[520px]">
              Conversazioni senza filtri con i migliori professionisti del settore beauty. Premi play e guarda direttamente qui.
            </p>
          </div>
        </div>

        {/* Videos Grid — Embedded iframes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {VIDEOS.map((video) => (
            <div
              key={video.id}
              className="group flex flex-col"
              data-testid={`video-card-${video.id}`}
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-600/90 text-white text-[10px] tracking-micro uppercase font-semibold rounded">
                  <Youtube className="w-3.5 h-3.5" strokeWidth={2} />
                  Video
                </span>
                <span className="text-[11px] tracking-micro uppercase text-[var(--nb-muted)]">
                  Intervista completa
                </span>
              </div>

              {/* Embedded Player */}
              <div className="relative aspect-video overflow-hidden rounded-sm border border-[var(--nb-border)] group-hover:border-[var(--nb-gold)]/50 transition-colors duration-300 bg-black">
                <iframe
                  src={video.url}
                  title={video.title}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                  data-testid={`video-iframe-${video.id}`}
                />
              </div>

              {/* Title */}
              <div className="mt-6">
                <h3 className="font-display text-[22px] md:text-[26px] leading-[1.25] tracking-editorial text-[var(--nb-ivory)]">
                  {video.title}
                </h3>
                <p className="mt-2 text-[14px] md:text-[15px] text-[var(--nb-ivory-dim)] leading-[1.6]">
                  {video.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
