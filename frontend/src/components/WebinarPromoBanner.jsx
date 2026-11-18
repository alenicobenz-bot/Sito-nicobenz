import { useState } from "react";
import { ArrowUpRight, Calendar, Clock, X } from "lucide-react";
import { isWebinarPromoActive, webinar23Nov } from "../data/webinar23Nov";

const DISMISSED_VALUE = "1";

function isDismissed() {
  try {
    return localStorage.getItem(webinar23Nov.storageKey) === DISMISSED_VALUE;
  } catch {
    return false;
  }
}

const WebinarPromoBanner = () => {
  const [visible, setVisible] = useState(
    () => isWebinarPromoActive() && !isDismissed()
  );

  if (!visible) return null;

  const dismiss = () => {
    try {
      localStorage.setItem(webinar23Nov.storageKey, DISMISSED_VALUE);
    } catch {
      // localStorage può essere bloccato: chiudiamo comunque il banner.
    }
    setVisible(false);
  };

  return (
    <aside
      aria-label="Webinar gratuito del 23 novembre"
      className="relative border-b border-[var(--nb-border)] bg-[var(--nb-bg-2)] text-[var(--nb-ivory)]"
    >
      <div className="pt-[76px] md:pt-[88px]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 md:py-6">
          <div className="flex items-start gap-4">
            <div className="min-w-0 flex-1">
              <p className="nb-eyebrow mb-2">Webinar gratuito · Google Meet</p>
              <div className="flex flex-col lg:flex-row lg:items-end gap-5 lg:gap-10">
                <div className="min-w-0 flex-1">
                  <p className="font-display tracking-editorial text-[24px] md:text-[32px] leading-[1.15] text-[var(--nb-ivory)]">
                    {webinar23Nov.title}
                  </p>
                  <p className="mt-2 max-w-[720px] text-[14px] md:text-[15px] leading-[1.6] text-[var(--nb-ivory-dim)]">
                    {webinar23Nov.topicLine}
                  </p>
                  <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-[var(--nb-ivory)]">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[var(--nb-gold)]" strokeWidth={1.6} />
                      {webinar23Nov.dateLabel}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[var(--nb-gold)]" strokeWidth={1.6} />
                      {webinar23Nov.timeLabel}
                    </span>
                    <span className="text-[var(--nb-gold)]">{webinar23Nov.placeLabel}</span>
                  </p>
                  <p className="mt-3 max-w-[720px] text-[13px] md:text-[14px] leading-[1.55] text-[var(--nb-ivory-dim)]">
                    Bonus: chi prenota la call entro giovedì 26/11/2026 alle 23:59 riceve la configurazione gratuita del primo agente social.
                  </p>
                </div>
                <a
                  href={webinar23Nov.signupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nb-btn-primary shrink-0 self-start"
                >
                  {webinar23Nov.ctaLabel}
                  <ArrowUpRight className="w-4 h-4" strokeWidth={1.6} />
                </a>
              </div>
            </div>
            <button
              type="button"
              onClick={dismiss}
              className="nb-focus mt-0.5 w-9 h-9 shrink-0 rounded-full border border-[var(--nb-border)] hover:border-[var(--nb-gold)] flex items-center justify-center transition-colors"
              aria-label="Chiudi il banner del webinar"
            >
              <X className="w-4 h-4 text-[var(--nb-ivory)]" strokeWidth={1.6} />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default WebinarPromoBanner;
