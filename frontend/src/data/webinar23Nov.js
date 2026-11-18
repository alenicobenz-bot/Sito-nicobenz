export const webinar23Nov = {
  title: "Secondo me un salone su tre chiuderà",
  slug: "agenti-ai-per-parrucchieri-webinar",
  dateLabel: "Lunedì 23 novembre 2026",
  timeLabel: "21:00",
  placeLabel: "Online e gratuito",
  topicLine:
    "Il futuro dei saloni e gli agenti social: l'AI che legge commenti e recensioni e prepara le risposte.",
  ctaLabel: "Iscriviti gratis",
  signupUrl: "https://anteprima-webinar-23-11-saloni.vercel.app/",
  storageKey: "nb-webinar-23-11-dismissed",
  end: "2026-11-23T23:00:00+01:00",
};

export function isWebinarPromoActive(now = new Date()) {
  const current = now instanceof Date ? now.getTime() : new Date(now).getTime();
  const end = new Date(webinar23Nov.end).getTime();
  return Number.isFinite(current) && Number.isFinite(end) && current < end;
}
