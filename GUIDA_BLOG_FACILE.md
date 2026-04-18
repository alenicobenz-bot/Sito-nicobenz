# 📝 COME AGGIUNGERE UN NUOVO ARTICOLO AL BLOG

## 🚀 METODO FACILE (Consigliato!)

### Passo 1: Apri il Terminale
Su Emergent:
1. Clicca sull'icona "Terminal" o "Console"
2. Oppure chiedi all'agente: "Aggiungi un nuovo articolo al blog"

### Passo 2: Esegui lo Script
Copia e incolla questo comando:

```bash
cd /app/frontend/src/data && node aggiungi-articolo.js
```

### Passo 3: Rispondi alle Domande
Lo script ti chiederà:
- ✅ Titolo dell'articolo
- ✅ Breve descrizione
- ✅ Categoria (Marketing, Strategia, o Mindset)
- ✅ Data (esempio: "2025")
- ✅ Tempo di lettura (esempio: "5 min")
- ✅ URL immagine (da Unsplash)
- ✅ Contenuto (scrivi il testo)

Quando finisci di scrivere il contenuto, scrivi `FINE` su una riga vuota.

### Passo 4: Pubblica
1. Fai "Save to GitHub" su Emergent
2. Vercel auto-deploya (2 minuti)
3. Articolo online! 🎉

---

## 🖼️ Come Trovare Immagini

### Unsplash (Gratis):
1. Vai su https://unsplash.com
2. Cerca (es: "hairstylist", "beauty salon", "entrepreneur")
3. Clicca sull'immagine che ti piace
4. Copia l'URL
5. Aggiungi alla fine: `?auto=format&fit=crop&w=1200&q=80`
6. Incolla quando lo script chiede l'immagine

Esempio URL completo:
```
https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80
```

---

## ✍️ Formattazione Testo

Quando scrivi il contenuto, puoi usare:

### Titoli:
```
# Titolo Principale
## Sottotitolo
### Sotto-sottotitolo
```

### Grassetto:
```
**questo è in grassetto**
```

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

**Esempio articolo:**
```
# Come Fare Video per Parrucchieri

Fare video non è difficile, ma serve strategia.

## Prima Regola: Parti dal Problema

Ogni video deve rispondere a una domanda che il tuo cliente si fa.

**Esempi:**
- Come mantenere il colore più a lungo?
- Quale taglio per viso ovale?
- Come proteggere i capelli dal calore?

## Seconda Regola: Sii Te Stesso

Il personal brand vince.

---
```

---

## 🆘 Problemi?

### "Lo script non funziona"
Copia e incolla esattamente questo comando:
```bash
cd /app/frontend/src/data && node aggiungi-articolo.js
```

### "Non trovo il Terminal"
Chiedi all'agente Emergent: **"Esegui lo script per aggiungere un articolo al blog"**

### "Voglio modificare un articolo esistente"
1. Apri il file `/app/frontend/src/data/blogArticles.js`
2. Trova l'articolo da modificare
3. Cambia il testo direttamente
4. Save to GitHub → Deploy

---

## 💡 ALTERNATIVA: Chiedi all'Agente

Se non vuoi usare lo script, puoi sempre dire all'agente:

> "Aggiungi un nuovo articolo al blog con titolo [TITOLO], categoria [CATEGORIA], e questo contenuto: [TESTO]"

L'agente creerà l'articolo per te! 😊

---

**Hai tutto!** Ora puoi pubblicare articoli facilmente. 🎊

**Nico**benz
