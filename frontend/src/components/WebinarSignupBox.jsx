import { ArrowUpRight, Calendar, Clock, MapPin } from "lucide-react";
import { webinar23Nov } from "../data/webinar23Nov";

const WebinarSignupBox = () => {
  return (
    <aside
      aria-label="Iscrizione al webinar"
      className="mb-10 border border-[var(--nb-border-strong)] bg-[var(--nb-bg-2)] px-6 py-7 md:px-8 md:py-8"
    >
      <p className="nb-eyebrow mb-3">Webinar gratuito</p>
      <p className="font-display tracking-editorial text-[26px] md:text-[32px] leading-[1.15] text-[var(--nb-ivory)] mb-5">
        {webinar23Nov.title}
      </p>
      <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3 mb-6 text-[14px] md:text-[15px] text-[var(--nb-ivory)]">
        <li className="inline-flex items-center gap-2">
          <Calendar className="w-4 h-4 text-[var(--nb-gold)]" strokeWidth={1.6} />
          23/11/2026
        </li>
        <li className="inline-flex items-center gap-2">
          <Clock className="w-4 h-4 text-[var(--nb-gold)]" strokeWidth={1.6} />
          ore {webinar23Nov.timeLabel}
        </li>
        <li className="inline-flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[var(--nb-gold)]" strokeWidth={1.6} />
          {webinar23Nov.placeLabel}
        </li>
      </ul>
      <a
        href={webinar23Nov.signupUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="nb-btn-primary"
      >
        {webinar23Nov.ctaLabel}
        <ArrowUpRight className="w-4 h-4" strokeWidth={1.6} />
      </a>
    </aside>
  );
};

export default WebinarSignupBox;
