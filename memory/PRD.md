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
- **Repo GitHub:** `alenicobenz-bot/Sito-nicobenz` (branch `main`)
- **Auto-publisher esterno:** progetto Emergent "Mappa Madre" committa articoli direttamente su `frontend/src/data/blogArticles.js` via GitHub Contents API.

## Integrazioni di terze parti
- Brevo (Exit-Intent Popup "1 video al giorno")
- YouCanBook.me (calendario `/prenota`)
- Spotify (podcast iframe)
- YouTube (interviste embeddate)
- Google Analytics 4 (`G-2QZDJE2K29`) — bloccato fino a consenso iubenda
- iubenda Cookie Solution (site ID 854512, cookie policy 8164139)
- WhatsApp Business (floating button)
- Mappa Madre (progetto Emergent separato per pubblicazione articoli auto)

## Implemented Features (aggiornato Mag 2026)
- Layout editoriale luxury-minimal completo (Hero, Problem, SocialProof, Method, Qualifier, FreeResource, MediaSection, PodcastSection, Journal, FAQ, BookingCTA, Footer)
- **VideoSection** con 4 interviste YouTube embeddate (Jenny Fratini, Live dei TOP, Maestro Cirignotta, Andrea Bozzano)
- Blog statico Markdown-driven (`blogArticles.js`), 18+ articoli (vecchi + Mappa Madre auto-publish)
- SEO avanzato:
  - Sitemap automatica via `scripts/generate-sitemap.js` (rigenerata ad ogni build)
  - Robots.txt (con bot AI), JSON-LD (FAQPage, Article, BreadcrumbList)
  - Hook custom `useSeo` (React 19 compatible) → canonical dinamico per ogni pagina
  - Redirect Wix 301 in `vercel.json` (`/forum/*`, `/group/*`, `/post/*`, `/single-post/*`, `/blog-1/*`, ecc.)
  - URL canonico: `https://www.nicobenz.it/` (con www)
  - Property GSC: "Dominio" `nicobenz.it`
- Exit-intent popup Brevo `VideoGiornoPopup.jsx`
- Floating WhatsApp Button
- Pagina `/prenota` con YouCanBook.me iframe
- iubenda Cookie Solution + Auto-Blocking (banner + pulsante flottante preferenze)
- Dati aziendali nel footer: Marketing Parrucchieri S.r.l. · Via Prestinari 4, 20080 Besate (MI) · P.IVA 11579150969
- Fallback immagini cover (`/blog-covers/default-cover.svg`) → se un'immagine articolo è 404, mostra cover editoriale Nicobenz

## ⚠️ Procedura Save to GitHub (memo per future sessioni)
Il repo è condiviso tra Emergent (sviluppo sito) e Mappa Madre (pubblicazione articoli automatica). Questo crea conflitti Git quando entrambi committano. Procedura corretta:

1. Click "Save to GitHub" nel chat
2. **VERIFICA SEMPRE che il branch sia `main`** (non `conflict_*`)
3. Se appare popup conflitto → **"Create Branch & Push"** (mai "Force Push")
4. Vai su https://github.com/alenicobenz-bot/Sito-nicobenz → branch nuovo → Create Pull Request → Merge
5. Se conflitto nel merge → Resolve conflicts → l'agente fornisce file mergiato in `/frontend/public/temp/blogArticles-merged.txt`

**Decisione utente (mag 2026):** NON fare refactor articoli (sposta in `blog-data/<slug>.json`) per non rischiare di rompere l'integrazione Mappa Madre. Si gestiscono i conflitti caso per caso.

## Files of Reference
- `/app/frontend/src/components/VideoSection.jsx` (4 video iframe)
- `/app/frontend/src/pages/HomePage.jsx` (usa useSeo + tutte le sezioni)
- `/app/frontend/src/pages/BlogListPage.jsx`, `BlogArticlePage.jsx`, `PrenotaPage.jsx`
- `/app/frontend/src/hooks/useSeo.js` (custom SEO hook React 19 compatible)
- `/app/frontend/src/data/blogArticles.js` (articoli — toccato anche da Mappa Madre!)
- `/app/frontend/scripts/generate-sitemap.js` (sitemap auto, prebuild)
- `/app/frontend/vercel.json` (redirect Wix 301 + framework config)
- `/app/frontend/public/blog-covers/default-cover.svg` (fallback editoriale)
- `/app/frontend/public/index.html` (GA4 blocked + iubenda Cookie Solution)
- `/app/memory/MAPPA_MADRE_INTEGRATION.md` (specifiche per il publisher esterno)

## P0 — Next Actions (per utente)
- (Quando vuole) chiedere a Mappa Madre di sostituire le 2 cover broken `il-momento-in-cui-smetti-di-pensare-che-i-social-siano-un-gioco` e `perche-ai-non-funziona-ti-manca-solo-questo` (per ora mostrano il fallback Nicobenz)
- **Email `support@emergent.sh`** per rimuovere badge "Made with Emergent"

## Backlog
- **P2** Sticky CTA bar mobile/desktop
- **P2** Cleanup cartella `/app/backend` (dead code)
- **P3** Refactor articoli in JSON separati (sospeso per non rischiare di rompere Mappa Madre)
- **P3** Eventuale A/B test su CTA Hero
- **P3** Mini-admin per gestire VideoSection senza passare per Emergent
