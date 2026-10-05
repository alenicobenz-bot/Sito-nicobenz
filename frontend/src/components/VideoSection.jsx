import React, { useEffect, useState } from "react";
import { Youtube, ArrowUpRight } from "lucide-react";

// ---- Config da .env ----
const API_KEY = process.env.REACT_APP_YT_API_KEY;
const PLAYLIST_ID = process.env.REACT_APP_YT_PLAYLIST_ID;
const CHANNEL_URL = process.env.REACT_APP_YT_CHANNEL_URL || "https://www.youtube.com/@nicobenzbeautysocialcoach";
const MAX_VIDEOS = parseInt(process.env.REACT_APP_YT_MAX_VIDEOS || "6", 10);

// ---- Fallback: video hardcoded se la API fallisce ----
const FALLBACK_VIDEOS = [
  { id: "fZ-mOQe0Ypc", title: "Intervista a Jenny Fratini", subtitle: "Jenny, la Manga dei Parrucchieri." },
  { id: "1-MKaUX1HyU", title: "La Live dei TOP", subtitle: "Il meglio degli hairstylist sui social, tutti insieme!" },
  { id: "2Euvm_KI0Os", title: "Intervista al Maestro Francesco Cirignotta", subtitle: "Un dialogo con uno dei Maestri italiani della hairstyling." },
  { id: "NKgB3S-soVU", title: "Intervista a Andrea Bozzano", subtitle: "Il Boss di HC Salon." },
];

const VideoSection = () => {
  const [videos, setVideos] = useState(FALLBACK_VIDEOS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const fetchVideos = async () => {
      if (!API_KEY || !PLAYLIST_ID) {
        setLoading(false);
        return;
      }
      try {
        const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=${MAX_VIDEOS}&key=${API_KEY}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        const items = (data.items || []).map((it) => ({
          id: it.snippet?.resourceId?.videoId,
          title: it.snippet?.title || "Video YouTube",
          subtitle: null,
        })).filter((v) => v.id);
        if (active && items.length > 0) {
          setVideos(items.slice(0, MAX_VIDEOS));
        }
      } catch (err) {
        // Fallback silenzioso ai video hardcoded
        console.warn("[VideoSection] YouTube API fetch failed, using fallback:", err.message);
      } finally {
        if (active) setLoading(false);
      }
    };

    fetchVideos();
    return () => { active = false; };
  }, []);

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

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {loading && videos.length === 0 && (
            <div className="col-span-full text-center text-[var(--nb-muted)] py-16">
              Caricamento video…
            </div>
          )}

          {videos.map((video) => (
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
                  src={`https://www.youtube-nocookie.com/embed/${video.id}`}
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
              <div className="mt-5">
                <h3 className="font-display text-[20px] md:text-[22px] leading-[1.25] tracking-editorial text-[var(--nb-ivory)]">
                  {video.title}
                </h3>
                {video.subtitle && (
                  <p className="mt-2 text-[14px] text-[var(--nb-ivory-dim)] leading-[1.6]">
                    {video.subtitle}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA — Guarda tutte le interviste */}
        <div className="mt-16 md:mt-20 flex flex-col items-center">
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--nb-gold)] hover:bg-[var(--nb-gold)]/90 text-[#0B0B0C] font-semibold text-[13px] md:text-[14px] tracking-micro uppercase transition-all duration-300 group"
            data-testid="cta-all-interviews"
          >
            <Youtube className="w-4 h-4" strokeWidth={2} />
            Guarda tutte le interviste
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" strokeWidth={2} />
          </a>
          <p className="mt-4 text-[11px] tracking-micro uppercase text-[var(--nb-muted)]">
            Vai sul canale YouTube di Nicobenz
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
