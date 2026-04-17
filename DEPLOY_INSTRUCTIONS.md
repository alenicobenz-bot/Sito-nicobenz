# 🚀 Deploy Nicobenz Homepage su Vercel

## Opzione 1: Deploy Automatico (CONSIGLIATO)

### Step 1: Prepara il progetto
```bash
cd /app/frontend
yarn build
```

### Step 2: Deploy su Vercel
1. Vai su [vercel.com](https://vercel.com) e fai login (o crea account)
2. Clicca "Add New Project"
3. Importa questo repository Git oppure:
   - Usa Vercel CLI: `npm i -g vercel && vercel --prod`
4. Configura:
   - **Framework Preset**: Create React App
   - **Root Directory**: `frontend/`
   - **Build Command**: `yarn build`
   - **Output Directory**: `build`
5. Clicca "Deploy"

### Step 3: Dominio Custom (nicobenz.it)
1. In Vercel, vai su Settings → Domains
2. Aggiungi `nicobenz.it`
3. Vercel ti darà i DNS records da configurare:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
4. Vai dal tuo provider DNS (GoDaddy, Namecheap, etc.) e aggiungi questi record
5. Attendi 24-48h per propagazione DNS

---

## Opzione 2: Deploy Manuale

### Build locale
```bash
cd /app/frontend
yarn build
```

### Upload su Vercel
1. Comprimi cartella `/app/frontend/build/`
2. Vai su Vercel → Add New Project → Deploy from Zip
3. Carica il file zip
4. Configura dominio custom come sopra

---

## ⚠️ IMPORTANTE: Disattiva Forum Spam su Wix

Prima di puntare nicobenz.it alla nuova app:

1. Vai su Wix Dashboard
2. Sezione "Groups" o "Forum"
3. **Disattiva completamente** o nascondi dalla navigazione
4. Disabilita indicizzazione SEO per `/group/*`
5. (Opzionale) Crea redirect 301 da `/group/*` a homepage

---

## 🎯 URL Finali

- **Vercel preview**: `nicobenz-premium.vercel.app` (o simile)
- **Dominio finale**: `nicobenz.it`

---

## 🔍 Verifica Post-Deploy

- [ ] Homepage carica correttamente
- [ ] Video testimonials funzionano
- [ ] Form prenotazione apre YouCanBook.me
- [ ] Tutti i link social funzionano
- [ ] SEO meta tags presenti (view source)
- [ ] Mobile responsive
- [ ] Performance Lighthouse > 90

---

## 📞 Supporto

Se hai problemi con il deploy, contatta supporto Vercel o Emergent.
