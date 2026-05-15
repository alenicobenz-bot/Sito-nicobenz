# 🔗 Integrazione Mappa Madre → nicobenz.it (Opzione B: GitHub-driven)

## 🎯 Obiettivo
Mappa Madre genera un articolo → lo pubblica direttamente su nicobenz.it **senza endpoint HTTP**, committando il nuovo articolo nel repo GitHub. Vercel rileva il commit e fa il deploy in 2-5 minuti.

**Vantaggi vs Opzione A (POST API):**
- Zero infrastruttura nuova (niente DB, niente serverless functions)
- Costo zero
- Storico articoli versionato su Git
- Il sito resta 100% statico → performance e SEO al top

---

## 📦 Cosa deve fare Mappa Madre

Quando genera un nuovo articolo, deve:

1. **Comporre l'oggetto articolo** nel formato esatto di `nicobenz.it` (vedi sotto)
2. **Leggere il file** `frontend/src/data/blogArticles.js` dal repo GitHub di nicobenz.it
3. **Inserire il nuovo articolo** in cima all'array `BLOG_ARTICLES = [ … ]`
4. **Committare** il file modificato sul branch `main` con un commit message tipo:
   `feat(blog): nuovo articolo "<titolo>"`
5. Vercel rileva il commit automaticamente → build → deploy live in 2-5 min

---

## 🔑 Credenziali necessarie (da configurare in Mappa Madre)

Variabili d'ambiente da aggiungere nel `.env` di Mappa Madre:

```env
NICOBENZ_GITHUB_REPO=<owner>/<nome-repo>           # es: nicobenz/nicobenz-site
NICOBENZ_GITHUB_BRANCH=main                         # branch su cui committare
NICOBENZ_GITHUB_TOKEN=<github_personal_access_token>
NICOBENZ_BLOG_FILE_PATH=frontend/src/data/blogArticles.js
```

### Come ottenere il GitHub Token
1. Vai su https://github.com/settings/personal-access-tokens/new
2. **Token name:** `mappa-madre-publisher`
3. **Resource owner:** scegli l'owner del repo nicobenz
4. **Expiration:** 1 year (o "No expiration" se preferisci)
5. **Repository access** → "Only select repositories" → seleziona il repo di nicobenz.it
6. **Permissions** → Repository permissions:
   - **Contents:** Read and write ✅
   - **Metadata:** Read-only ✅ (auto)
7. Click **"Generate token"** → copia il token e mettilo in `.env` di Mappa Madre

---

## 📐 Formato dell'oggetto articolo (DEVE essere così, è il contratto)

```js
{
  id: "slug-dell-articolo",              // == slug
  slug: "slug-dell-articolo",            // kebab-case, no accenti, no caratteri speciali
  title: "Titolo dell'articolo",         // string, max ~80 char
  excerpt: "Sommario breve max 160 caratteri.",  // meta description SEO
  category: "Contenuti",                 // string, es: "Contenuti", "Strategia", "Branding", "Social"
  date: "2026",                          // "YYYY" o "YYYY-MM-DD"
  readTime: "7 min",                     // string, es: "5 min", "10 min"
  image: "https://nicobenz.it/blog-covers/cover-articolo.jpg",  // URL cover image (HTTPS)
  content: `
# Titolo H1 (di solito uguale a "title")

Paragrafo introduttivo in Markdown.

## Sezione H2

Testo della sezione.

### Sotto-sezione H3

- Elemento lista 1
- Elemento lista 2

**Testo in grassetto su riga propria diventa paragrafo enfatizzato.**

---

## Altra sezione

Altro contenuto...
  `
}
```

### Markdown supportato dal renderer attuale di nicobenz.it:
- ✅ `# H1`, `## H2`, `### H3`
- ✅ Paragrafi
- ✅ Liste puntate: `- elemento`
- ✅ Grassetto su riga propria: `**testo**` → diventa paragrafo enfatizzato
- ✅ Separatori orizzontali: `---`
- ⚠️ Link, immagini inline, code blocks: **non supportati** dal renderer custom (eventualmente li ignoriamo)

---

## 🛠️ Logica di commit GitHub (pseudocodice Python con `requests`)

```python
import base64
import json
import requests
import re

GITHUB_API = "https://api.github.com"
REPO = os.environ["NICOBENZ_GITHUB_REPO"]
BRANCH = os.environ["NICOBENZ_GITHUB_BRANCH"]
TOKEN = os.environ["NICOBENZ_GITHUB_TOKEN"]
FILE_PATH = os.environ["NICOBENZ_BLOG_FILE_PATH"]

HEADERS = {
    "Authorization": f"Bearer {TOKEN}",
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
}

def publish_article_to_nicobenz(article: dict) -> dict:
    """
    article = {
        "title": "...",
        "slug": "...",
        "excerpt": "...",
        "category": "...",
        "date": "...",
        "readTime": "...",
        "image": "...",
        "content": "...",
    }
    """
    # 1. GET current blogArticles.js
    url = f"{GITHUB_API}/repos/{REPO}/contents/{FILE_PATH}?ref={BRANCH}"
    r = requests.get(url, headers=HEADERS)
    r.raise_for_status()
    data = r.json()
    current_sha = data["sha"]
    current_content = base64.b64decode(data["content"]).decode("utf-8")

    # 2. Build the new article JS object (as a string)
    new_block = build_article_js_block(article)

    # 3. Insert it right after `export const BLOG_ARTICLES = [`
    new_content = re.sub(
        r"(export const BLOG_ARTICLES\s*=\s*\[\s*)",
        r"\1\n" + new_block + ",\n",
        current_content,
        count=1,
    )

    # 4. Commit via PUT
    put_url = f"{GITHUB_API}/repos/{REPO}/contents/{FILE_PATH}"
    payload = {
        "message": f"feat(blog): nuovo articolo \"{article['title']}\"",
        "content": base64.b64encode(new_content.encode("utf-8")).decode("ascii"),
        "sha": current_sha,
        "branch": BRANCH,
    }
    r = requests.put(put_url, headers=HEADERS, json=payload)
    r.raise_for_status()

    return {
        "url": f"https://www.nicobenz.it/blog/{article['slug']}",
        "slug": article["slug"],
        "commit_sha": r.json()["commit"]["sha"],
        "published_at": r.json()["commit"]["committer"]["date"],
    }


def build_article_js_block(a: dict) -> str:
    """Serializes article dict into a JS object literal string."""
    # Escape backticks in content
    content = a["content"].replace("`", "\\`").replace("${", "\\${")
    return f"""  {{
    id: {json.dumps(a['slug'])},
    slug: {json.dumps(a['slug'])},
    title: {json.dumps(a['title'])},
    excerpt: {json.dumps(a['excerpt'])},
    category: {json.dumps(a['category'])},
    date: {json.dumps(a['date'])},
    readTime: {json.dumps(a['readTime'])},
    image: {json.dumps(a['image'])},
    content: `
{content}
    `
  }}"""
```

---

## ✅ Risposta che Mappa Madre deve ritornare al chiamante

Dopo aver committato con successo:

```json
{
  "url": "https://www.nicobenz.it/blog/<slug>",
  "slug": "<slug>",
  "commit_sha": "abc123...",
  "published_at": "2026-05-15T17:30:00Z",
  "note": "L'articolo sarà visibile entro 2-5 minuti (build Vercel)."
}
```

---

## 🧪 Test end-to-end

1. Mappa Madre genera un articolo di test (titolo: "Test integrazione", slug: "test-integrazione")
2. Mappa Madre committa su GitHub
3. Vercel parte il deploy (verifica su https://vercel.com)
4. Dopo 2-5 min → apri `https://www.nicobenz.it/blog/test-integrazione`
5. Se vedi l'articolo formattato correttamente → ✅ tutto funziona
6. Mappa Madre può poi rimuovere l'articolo di test con un altro commit (richiede operazione di "delete" o nuovo commit che rimuove il blocco)

---

## ⚠️ Cose IMPORTANTI da rispettare

1. **Slug**: kebab-case, solo `[a-z0-9-]`, niente accenti. Es: `5-strategie-tiktok-2026` ✅, `5 strategie TikTok 2026` ❌
2. **Unicità slug**: se uno slug esiste già, il commit fallirà o creerà duplicati. Mappa Madre deve verificare prima leggendo il file.
3. **Cover image**: deve essere HTTPS, accessibile pubblicamente. Consigliato hostarle su un CDN o sullo stesso bucket di Mappa Madre.
4. **Content Markdown**: niente backtick singoli non escapati (rischio di rompere il template literal JS). Lo script di build li escapa già automaticamente.
5. **No JSON-LD necessario**: nicobenz.it genera Article + Breadcrumb schema da sé partendo dai dati dell'articolo. Mappa Madre **non** deve inviare il campo `jsonld`.
6. **Commit message**: usa un formato standard tipo `feat(blog): nuovo articolo "..."` per leggibilità storica.

---

## 📌 Cosa fa nicobenz.it automaticamente dopo il commit

1. **Vercel build** → rilancia `yarn build`
2. Lo script `scripts/generate-sitemap.js` parte automaticamente → **aggiorna `sitemap.xml`** con il nuovo URL
3. Deploy live
4. JSON-LD Article + Breadcrumb auto-iniettati in pagina (`BlogArticlePage.jsx`)
5. Open Graph meta tags auto-generati
6. Articolo appare nella lista `/blog`
7. **Google scoprirà l'articolo** dalla sitemap aggiornata entro qualche giorno (oppure puoi forzare l'indicizzazione su Search Console)

---

## 🔄 Workflow finale (riassunto)

```
Mappa Madre genera articolo
       ↓
GitHub commit su frontend/src/data/blogArticles.js
       ↓
Vercel auto-deploy (2-5 min)
       ↓
Sitemap aggiornata automaticamente
       ↓
Articolo live su www.nicobenz.it/blog/<slug>
       ↓
Google indicizza (giorni, oppure forziamo su Search Console)
```

---

**Domande?** Contatta l'agente di sviluppo del progetto nicobenz.it. 🤝
