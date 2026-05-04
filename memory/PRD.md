# Nicobenz.it — Sito Premium Static React

## Problem Statement
Analizza il sito nicobenz.it e ricrealo da zero con design premium, autorevole, contemporaneo.
Obiettivo: far prenotare una consulenza gratuita.
Stile: luxury minimal, editoriale, maschile ma elegante.

## Architecture
- **Frontend-only** (React + Tailwind + Shadcn UI). Deploy su Vercel, DNS Tophost.
- **Backend abbandonato** (`/app/backend` è dead code — futura pulizia P2).
- **Routing:** React Router DOM → `/`, `/blog`, `/blog/:slug`, `/prenota`.
- **Linguaggio:** italiano only.

## Integrazioni di terze parti
- Brevo (Exit-Intent Popup "1 video al giorno")
- YouCanBook.me (calendario `/prenota`)
- Spotify (podcast iframe)
- YouTube (interviste embeddate — `fZ-mOQe0Ypc`, `1-MKaUX1HyU`)
- Google Analytics 4 (`G-2QZDJE2K29`)
- WhatsApp Business (floating button `wa.me`/`web.whatsapp.com`)

## Implemented Features (Feb 2026)
- Layout editoriale luxury-minimal completo (Hero, Problem, SocialProof, Method, Qualifier, FreeResource, MediaSection, PodcastSection, Journal, FAQ, BookingCTA, Footer)
- **VideoSection embedded** (Feb 04, 2026): due player YouTube iframe in pagina dopo Qualifier, sostituisce vecchia `Testimonials` modal
- Blog statico Markdown-driven (`blogArticles.js`), 5 articoli SEO-optimised
- SEO avanzato: sitemap.xml, robots.txt, JSON-LD (FAQPage, Article, BreadcrumbList)
- Exit-intent popup Brevo `VideoGiornoPopup.jsx`
- Floating WhatsApp Button
- Pagina `/prenota` con YouCanBook.me iframe
- Google Analytics 4
- FAQ espansa 20 domande
- Blog: social share (X/FB/LinkedIn/WA) + Related Articles

## P0 — Next Actions (per utente)
- **Salva su GitHub** (tasto in chat) per deployare il VideoSection aggiornato su Vercel
- **Email `support@emergent.sh`** per rimuovere badge "Made with Emergent"

## Backlog
- **P2** Sticky CTA bar mobile/desktop
- **P2** Cleanup cartella `/app/backend` (dead code)
- **P3** Eventuale A/B test su CTA Hero

## Files of Reference
- `/app/frontend/src/components/VideoSection.jsx` (NUOVO, iframe embed)
- `/app/frontend/src/pages/HomePage.jsx` (VideoSection al posto di Testimonials)
- `/app/frontend/src/components/Testimonials.jsx` (DEPRECATED, non più importato — potenzialmente rimovibile)
- `/app/frontend/src/data/blogArticles.js`
- `/app/frontend/public/index.html`, `sitemap.xml`, `robots.txt`
