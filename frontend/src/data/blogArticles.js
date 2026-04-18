// Blog Articles Data
// Per aggiungere un nuovo articolo, aggiungi un oggetto qui sotto

export const BLOG_ARTICLES = [
  {
    id: "oggi-vince-la-persona-non-il-brand",
    slug: "oggi-vince-la-persona-non-il-brand",
    title: "Oggi vince la persona, non il brand",
    excerpt: "Perché il personal branding è diventato l'unica vera leva di differenziazione nel settore beauty.",
    category: "Marketing",
    date: "2024",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
    content: `
# Oggi vince la persona, non il brand

Nel settore beauty, il vero differenziale non è più il nome del salone o il logo sulla vetrina. 

**È la persona.**

I clienti oggi non cercano "un parrucchiere qualsiasi". Cercano **qualcuno** che li capisca, che abbia uno stile riconoscibile, che sappia consigliarli e con cui si trovino bene.

## Perché il personal brand è tutto

Quando costruisci il tuo personal brand:
- I clienti ti cercano per nome, non solo per servizio
- Puoi aumentare i prezzi perché loro vogliono proprio te
- La concorrenza diventa irrilevante
- Le persone tornano e ti consigliano

## Come iniziare

1. **Racconta chi sei** - Non solo cosa fai, ma perché lo fai
2. **Mostra il tuo stile** - Ogni parrucchiere ha un'impronta unica
3. **Condividi la tua esperienza** - Le persone si fidano di chi dimostra competenza
4. **Sii presente** - Sui social, con continuità

Il personal branding non è vanità. È strategia. È il modo in cui trasformi il tuo nome in un asset di valore.

---

**Nico**benz · Beauty Social Coach
    `
  },
  {
    id: "parrucchieri-facebook-instagram",
    slug: "parrucchieri-facebook-instagram",
    title: "Parrucchieri che fanno i soldi con Facebook e Instagram VS Parrucchieri che non li fanno",
    excerpt: "Le differenze concrete tra chi usa i social per crescere e chi li subisce senza risultati.",
    category: "Strategia",
    date: "2023",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1200&q=80",
    content: `
# Parrucchieri che fanno i soldi con Facebook e Instagram VS Parrucchieri che non li fanno

Ci sono parrucchieri che usano i social e **guadagnano**. E ci sono parrucchieri che li usano e **perdono tempo**.

La differenza non è la tecnica, non è il numero di follower, non è nemmeno il budget.

**La differenza è l'approccio.**

## Chi guadagna fa questo:

### 1. Pubblica con strategia
Non mette foto a caso. Ogni post ha un obiettivo: educare, intrattenere, o vendere.

### 2. Parla alle persone giuste
Non cerca di piacere a tutti. Si concentra sul suo cliente ideale e parla la sua lingua.

### 3. È costante
Pubblica regolarmente, non solo quando si ricorda. I social premiano la continuità.

### 4. Usa i video
Perché i video convertono. Mostrano competenza, personalità, e creano connessione.

## Chi non guadagna fa questo:

- Pubblica quando capita
- Copia quello che fanno gli altri
- Non ha una direzione chiara
- Spera che "magicamente" arrivino clienti

## Il punto

I social **funzionano**. Ma solo se li usi bene. Se pubblichi con criterio, se parli alle persone che vuoi attrarre, se sei presente e costante.

Altrimenti stai solo perdendo tempo.

---

**Nico**benz · Beauty Social Coach
    `
  },
  {
    id: "parrucchieri-e-tempo",
    slug: "parrucchieri-e-tempo",
    title: "Parrucchieri e tempo",
    excerpt: "Come smettere di essere schiavi dell'agenda e iniziare a gestire il tempo con strategia.",
    category: "Mindset",
    date: "2023",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80",
    content: `
# Parrucchieri e tempo

Il tempo è la risorsa più preziosa che hai. E nel nostro settore, sembra non bastare mai.

Clienti, appuntamenti, fornitori, social, formazione. Tutto richiede tempo. E tu sei sempre lì, in salone, dalla mattina alla sera.

**Ma il problema non è che non hai tempo.**

Il problema è che non lo gestisci.

## La verità

Se sei sempre occupato ma non cresci, significa che stai riempiendo il tempo con cose urgenti, ma non con cose **importanti**.

Le cose urgenti sono:
- L'appuntamento dell'ultimo minuto
- La telefonata del fornitore
- La cliente che vuole cambiare orario

Le cose importanti sono:
- Costruire il tuo personal brand
- Formarti su nuove tecniche
- Pianificare la strategia del salone

## Come cambiare

1. **Blocca il tempo** - Dedica ore fisse alla settimana per le cose strategiche
2. **Delega** - Non puoi fare tutto tu
3. **Di' di no** - Non tutti gli appuntamenti meritano il tuo tempo
4. **Automatizza** - Social, prenotazioni, gestione clienti

Il tempo non si trova. **Si crea.**

---

**Nico**benz · Beauty Social Coach
    `
  }
];

// Helper per trovare un articolo per slug
export const getArticleBySlug = (slug) => {
  return BLOG_ARTICLES.find(article => article.slug === slug);
};

// Helper per ottenere gli ultimi N articoli
export const getLatestArticles = (count = 3) => {
  return BLOG_ARTICLES.slice(0, count);
};
