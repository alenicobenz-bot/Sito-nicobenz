# 📖 GUIDA: Come Aggiungere Articoli al Blog

## 📍 File da modificare:
`/app/frontend/src/data/blogArticles.js`

---

## ✏️ PASSO 1: Apri il file

Su Emergent:
1. Cerca il file `blogArticles.js` nella cartella `frontend/src/data/`
2. Aprilo per modificarlo

---

## ✏️ PASSO 2: Aggiungi il nuovo articolo

All'inizio dell'array `BLOG_ARTICLES`, aggiungi questo:

```javascript
export const BLOG_ARTICLES = [
  // ⬇️ NUOVO ARTICOLO (aggiungi qui)
  {
    id: "titolo-del-tuo-nuovo-articolo",
    slug: "titolo-del-tuo-nuovo-articolo",
    title: "Il Titolo Completo del Nuovo Articolo",
    excerpt: "Una breve descrizione di 1-2 righe che appare nell'anteprima.",
    category: "Marketing",  // Scegli tra: Marketing, Strategia, Mindset
    date: "2025",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-XXXXXXXX?auto=format&fit=crop&w=1200&q=80",
    content: `
# Il Titolo del Tuo Articolo

Introduzione dell'articolo. Scrivi qui il contenuto.

Nel settore beauty, il vero differenziale non è più il nome del salone o il logo sulla vetrina.

**È la persona.**

## Primo Sottotitolo

Testo del primo paragrafo.

### Sotto-sottotitolo (opzionale)

Altro testo.

## Secondo Sottotitolo

Quando costruisci il tuo personal brand:
- I clienti ti cercano per nome, non solo per servizio
- Puoi aumentare i prezzi perché loro vogliono proprio te
- La concorrenza diventa irrilevante

## Conclusione

Il personal branding non è vanità. È strategia.

---

**Nico**benz · Beauty Social Coach
    `
  },
  // ... (gli altri articoli esistenti rimangono sotto)
  {
    id: "oggi-vince-la-persona-non-il-brand",
    // ...
  }
];
```

---

## 🎨 GUIDA FORMATTAZIONE CONTENUTO

### Titoli:
- `# Titolo H1` → Titolo principale (grande)
- `## Titolo H2` → Sezione
- `### Titolo H3` → Sotto-sezione

### Testo:
- Normale: scrivi normalmente
- **Grassetto**: `**testo grassetto**`
- *Corsivo*: non supportato (usa il grassetto)

### Liste:
```
- Primo punto
- Secondo punto
- Terzo punto
```

### Separatore:
```
---
```

### Fine articolo (firma):
```
---

**Nico**benz · Beauty Social Coach
```

---

## 🖼️ COME TROVARE IMMAGINI

### Opzione 1: Unsplash (gratis)
1. Vai su https://unsplash.com
2. Cerca (es: "hairstylist", "beauty salon", "entrepreneur")
3. Clicca sull'immagine
4. Copia l'URL e aggiungi alla fine: `?auto=format&fit=crop&w=1200&q=80`
5. Incolla nel campo `image`

Esempio:
```javascript
image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80"
```

### Opzione 2: Tue immagini
1. Carica l'immagine su un servizio (es: Imgur, Dropbox)
2. Ottieni link pubblico
3. Usa quel link

---

## 📌 CAMPI IMPORTANTI

### `id` e `slug`
- Devono essere **identici**
- Solo minuscole e trattini
- Esempio: `"come-fare-video-per-parrucchieri"`

### `category`
Scegli tra:
- `"Marketing"` - Social media, branding, visibilità
- `"Strategia"` - Business, crescita, sistemi
- `"Mindset"` - Mentalità, atteggiamento, filosofia

### `date`
- Solo anno: `"2025"`
- Oppure mese e anno: `"Gen 2025"`

### `readTime`
- Stima: circa 200 parole = 1 minuto
- Esempio: articolo 1000 parole → `"5 min"`

---

## ✅ PASSO 3: Salva e pubblica

1. **Salva il file** modificato
2. **Fai "Save to GitHub"** su Emergent
3. **Vercel auto-deploya** (2 minuti)
4. **Vai su `nicobenz.it/blog`** → nuovo articolo online! 🎉

---

## 🔧 TROUBLESHOOTING

### "Il nuovo articolo non appare"
- Controlla che l'articolo sia **prima** degli altri nell'array
- Verifica che `id` e `slug` siano identici
- Assicurati di aver fatto push su GitHub

### "Errore di sintassi"
- Controlla le virgole tra gli articoli
- Verifica che tutte le graffe `{ }` siano chiuse
- Controlla che il backtick `` ` `` del contenuto sia chiuso

### "Immagine non si vede"
- Controlla che l'URL inizi con `https://`
- Prova ad aprire l'URL in una nuova tab del browser
- Assicurati che l'immagine sia pubblica

---

## 💡 CONSIGLI

1. **Scrivi offline** - Prepara il contenuto su un documento, poi copialo nel file
2. **Usa titoli chiari** - Il titolo deve catturare l'attenzione
3. **Excerpt accattivante** - Le prime 2 righe vendono l'articolo
4. **Liste e sottotitoli** - Rendono l'articolo più leggibile
5. **Call to action** - Finisci sempre con un invito all'azione

---

## 📞 SUPPORT

Se hai problemi, torna qui su Emergent e chiedi aiuto! 

Buona scrittura! ✍️

**Nico**benz
