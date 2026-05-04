import React, { useState } from "react";
import { Play, X, Youtube } from "lucide-react";

const VIDEOS = [
  {
    id: "fZ-mOQe0Ypc",
    title: "Intervista a Gianni Frattini",
    thumbnail: "https://img.youtube.com/vi/fZ-mOQe0Ypc/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/fZ-mOQe0Ypc"
  },
  {
    id: "1-MKaUX1HyU",
    title: "La Live dei TOP",
    thumbnail: "https://img.youtube.com/vi/1-MKaUX1HyU/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/1-MKaUX1HyU"
  }
];

const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openVideo = (video) => {
    setSelectedVideo(video);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section className="relative py-24 md:py-36 bg-[var(--nb-bg)] border-t border-[var(--nb-border)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-10 h-[1px] bg-[var(--nb-gold)]" />
              <span className="nb-eyebrow flex items-center gap-2">
                <Youtube className="w-4 h-4" strokeWidth={1.5} />
                Video YouTube
              </span>
              <span className="w-10 h-[1px] bg-[var(--nb-gold)]" />
            </div>
            
            <h2 className="font-display font-light tracking-editorial text-[36px] md:text-[52px] lg:text-[60px] leading-[1.05] text-[var(--nb-ivory)] max-w-[900px] mx-auto">
              🎥 Guarda le <em className="italic text-[var(--nb-gold)]">interviste complete</em>
            </h2>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VIDEOS.map((video) => (
              <div 
                key={video.id}
                onClick={() => openVideo(video)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-[#0a0a0a] border border-[var(--nb-border)] hover:border-[var(--nb-gold)]/50 transition-all duration-300 rounded-xl">
                  
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    {/* Overlay + Play Button */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-[var(--nb-gold)] group-hover:scale-110 transition-transform duration-300 flex items-center justify-center shadow-2xl">
                        <Play className="w-10 h-10 text-[#0B0B0C] ml-1" fill="currentColor" strokeWidth={0} />
                      </div>
                    </div>

                    {/* Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-600 text-white text-[11px] tracking-micro uppercase font-semibold rounded">
                        <Youtube className="w-3.5 h-3.5" strokeWidth={2} />
                        VIDEO
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="p-6">
                    <h3 className="font-display text-[20px] md:text-[24px] tracking-editorial text-[var(--nb-ivory)] group-hover:text-[var(--nb-gold)] transition-colors">
                      {video.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={closeVideo}
        >
          {/* Close button */}
          <button
            onClick={closeVideo}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 flex items-center justify-center transition-colors z-10"
            aria-label="Chiudi video"
          >
            <X className="w-6 h-6 text-white" strokeWidth={2} />
          </button>

          {/* Video Player */}
          <div 
            className="relative w-full max-w-[1200px] aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`${selectedVideo.url}?autoplay=1`}
              className="w-full h-full rounded-xl"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={selectedVideo.title}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default VideoSection;
