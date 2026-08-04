/**
 * Lista degli slug degli articoli scritti da Nico Benz (autore umano).
 * Tutti gli altri articoli in blogArticles.js sono automaticamente
 * considerati "AI-assisted" e riceveranno il badge di trasparenza AI Act.
 *
 * ⚠️ Quando aggiungi un articolo scritto da te (umano), aggiungi lo slug qui.
 * ⚠️ Se un articolo viene pubblicato da Mappa Madre (AI), NON aggiungerlo:
 *    verrà automaticamente marcato come AI-assisted.
 */
export const HUMAN_AUTHORED_SLUGS = new Set([
  // Articolo personale di Nico
  "resto-acceso-omaggio-parrucchieri",

  // 7 articoli originali scritti da Nico Benz (pre-Mappa Madre)
  "10-contenuti-instagram-tiktok-parrucchieri",
  "7-errori-instagram-parrucchieri",
  "il-90-percento-dei-parrucchieri-non-fa-video",
  "il-problema-non-e-il-talento",
  "oggi-vince-la-persona-non-il-brand",
  "parrucchieri-facebook-instagram",
  "parrucchieri-e-tempo",
]);

/**
 * Ritorna true se l'articolo è stato scritto da un umano (Nico Benz),
 * false se è stato generato con assistenza AI.
 */
export function isHumanAuthored(slug) {
  return HUMAN_AUTHORED_SLUGS.has(slug);
}

/**
 * Ritorna true se l'articolo è AI-assisted (obbligo di trasparenza AI Act).
 */
export function isAiAssisted(slug) {
  return !HUMAN_AUTHORED_SLUGS.has(slug);
}
