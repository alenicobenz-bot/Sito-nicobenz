// Section-by-section blueprint for Wix Studio reconstruction
(function(){

const sections = [
  {
    num: '01', kicker: 'Hero', title: 'Hero \u2014 prima impressione, un colpo solo.',
    intro: 'La sezione pi\u00f9 importante: deve comunicare posizionamento, credibilit\u00e0 e invito all\'azione in 3 secondi.',
    preview: 'https://images.unsplash.com/photo-1655801856579-be4f3402eea4?auto=format&fit=crop&w=1200&q=80',
    layout: [
      'Section full-width, background #0B0B0C, padding verticale 120px (mobile) / 180px (desktop)',
      'Grid 12 colonne: colonna sinistra 7/12 (titolo + CTA), colonna destra 5/12 (ritratto)',
      'Su mobile: stack verticale, ritratto sotto il titolo'
    ],
    elements: [
      'Text \"Eyebrow\" (Inter 500, 12px, UPPERCASE, tracking 0.24em, colore Gold) preceduto da Vector Image o Container 40x1px colore Gold',
      'Text \"H1\" (Fraunces 300, 88px desktop / 44px mobile) su 3 righe. La parola \"seguono\" in italic colore Gold',
      'Text body (Inter 400, 18px) max-width 560px',
      '2 Button: primario (background Ivory, text Ink) + ghost (border Ivory 22% opacit\u00e0)',
      'Image ritratto con Object Fit: Cover, filter grayscale 20%, gradient overlay dal basso',
      'Container overlay sopra l\'immagine (bottom-left) con nome e ruolo',
      'Container \"quote flottante\" (opzionale) con border-left 2px Gold'
    ],
    copyTitle: 'Copy Hero',
    copy: 'EYEBROW:\nBeauty Social Coach \u00b7 Fondatore Marketing Parrucchieri\n\nH1:\nTrasformo saloni di bellezza\nin brand che le persone\nscelgono, <em>seguono</em> e ricordano.\n\nBODY:\nStrategia, personal branding e video marketing per parrucchieri e professionisti beauty che vogliono smettere di inseguire i clienti e iniziare ad attrarli.\n\nCTA PRIMARIO: Prenota una consulenza gratuita\nCTA SECONDARIO: Scopri il metodo\n\nTAG IMMAGINE (top-left): Milano \u00b7 Italia\nOVERLAY IMMAGINE: Nico Benz / Fondatore \u00b7 Parrucchiere Social / \u201412\u2019\n\nQUOTE (opzionale): \"Smetti di inseguire i clienti. Inizia a costruire il motivo per cui ti cercano.\"\n\nMICRO BAR (in basso): EST. 2013 \u00b7 No. 01 \u2014 Homepage'
  },
  {
    num: '02', kicker: 'Social Proof', title: 'Statistiche + press, <em>autorevolezza istantanea.</em>',
    intro: 'Due righe: 4 numeri secchi e un carosello scorrevole di testate/brand. Crea credibilit\u00e0 prima ancora che l\'utente scrolli.',
    preview: 'https://images.unsplash.com/photo-1773904215697-e6c21fc27ac2?auto=format&fit=crop&w=1200&q=80',
    layout: [
      'Section background #111012 (alternativo), border sopra e sotto con linea 1px 12% opacit\u00e0',
      'Row 1: Grid 4 colonne (2 su mobile), padding verticale 80px',
      'Row 2: Marquee scorrevole orizzontale (usa Pro Gallery in modalit\u00e0 Slider \u201ctext-only\u201d oppure Custom Code con CSS animation)',
      'Separatore Hairline tra i due'
    ],
    elements: [
      'Per ogni stat: Container \u2192 Text numero grande (Fraunces 300, 56px) + Text label (Inter 500, 11px UPPERCASE)',
      'Marquee: 6 Text in fila (Fraunces italic 22px, colore Ivory Dim) separati da \u201c\u2014\u201d. In Wix Studio usa \u201cRepeater\u201d + animazione \u201cScroll on loop\u201d oppure Custom Code'
    ],
    copyTitle: 'Copy Social Proof',
    copy: 'STATISTICA 1: +2.400 / Saloni formati in Italia\nSTATISTICA 2: 12 anni / Nel marketing per il beauty\nSTATISTICA 3: +180 / Case study documentati\nSTATISTICA 4: 4,9 / 5 / Valutazione clienti\n\nPRESS MARQUEE (in loop):\nEstetica Magazine \u2014 Hairdresser\'s Journal \u2014 Cosmoprof \u2014 Il Sole 24 Ore Moda \u2014 Vanity Fair Beauty \u2014 Salone Internazionale'
  },
  {
    num: '03', kicker: 'Metodo', title: 'Metodo in 4 step, <em>una regia chiara.</em>',
    intro: 'Il cuore della tua offerta. Quattro tessere uguali che raccontano il sistema. Sobrio, pulito, nessuna icona infantile.',
    preview: 'https://images.unsplash.com/photo-1631648080466-906e6a83dc7d?auto=format&fit=crop&w=1200&q=80',
    layout: [
      'Section padding 96\u2013144px verticale',
      'Head: Grid 12 col. Colonna sinistra 5/12 (eyebrow + H2), colonna destra 6/12 (paragrafo descrittivo)',
      'Griglia 2\u00d72 di tessere, separate da linea hairline 1px',
      'Tessere con background #0B0B0C, hover su #111012'
    ],
    elements: [
      'Ogni tessera (Container) contiene: Text numero italic Gold \"01\" (top-left) + Text \"Step\" micro (top-right) + Text titolo Fraunces 34px + Text body 15px',
      'Linea decorativa 1px in basso che si estende al hover (Wix Studio: aggiungi Container 1px altezza con transition width 0\u2192100%)'
    ],
    copyTitle: 'Copy Metodo',
    copy: 'EYEBROW: Il Metodo\nH2: Un sistema in <em>quattro movimenti.</em>\nDESCRIZIONE: Niente ricette miracolose. Una regia chiara che unisce posizionamento, contenuti e conversione \u2014 pensata per chi vive di appuntamenti e reputazione.\n\nSTEP 01 \u2014 Posizionamento\nDefiniamo chi sei, a chi parli e perch\u00e9 meriti di essere scelto. Un\'identit\u00e0 editoriale che distingue il tuo salone dal rumore locale.\n\nSTEP 02 \u2014 Contenuto\nCostruiamo un piano video sostenibile: 1 contenuto al giorno, calibrato sul tuo tempo e sulla tua voce. Niente trend copiati, solo storia vera.\n\nSTEP 03 \u2014 Distribuzione\nInstagram, TikTok, YouTube e Google Business. Ogni piattaforma ha un ruolo preciso dentro un ecosistema che lavora per te 24/7.\n\nSTEP 04 \u2014 Conversione\nTrasformiamo follower in appuntamenti reali, con funnel semplici, offerte coerenti e un tono di voce che costruisce fiducia nel tempo.'
  },
  {
    num: '04', kicker: 'Case Study', title: 'Case study, <em>risultati veri.</em>',
    intro: 'Quattro clienti reali con metrica chiara. Layout \u201cmagazine\u201d: una card grande su due colonne, due piccole, un\'altra grande.',
    preview: 'https://images.unsplash.com/photo-1773904215697-e6c21fc27ac2?auto=format&fit=crop&w=1200&q=80',
    layout: [
      'Section background Surface #111012, padding 96\u2013144px',
      'Header: flex row (titolo a sinistra, paragrafo a destra)',
      'Grid: card 1 full-width (2 colonne), card 2+3 affiancate, card 4 full-width',
      'Aspect ratio immagini: 21:9 per le wide, 4:3 per le quadrate'
    ],
    elements: [
      'Ogni card (Container con border 1px 12%): Image + Gradient overlay dal basso + Text categoria (top-left) + Text nome salone (bottom-left) + Text risultato italic Gold (bottom-right)',
      'Sotto ogni card: Text summary + Link \u201cLeggi \u2197\u201d (12px uppercase)',
      'Hover: image scale 1.05, border color pi\u00f9 chiaro'
    ],
    copyTitle: 'Copy Case Studies',
    copy: 'EYEBROW: Case study\nH2: Risultati misurabili, <em>saloni reali.</em>\nDESCRIZIONE: Una selezione di clienti con cui abbiamo lavorato sulla crescita organica, il posizionamento editoriale e la conversione degli appuntamenti.\n\nCASE 1 \u2014 Atelier Moreno (Milano) \u2014 Salone premium\nRisultato: +312% prenotazioni in 8 mesi\nSummary: Riposizionamento come hair atelier per clientela corporate. Agenda satura con prezzi aumentati del 28%.\n\nCASE 2 \u2014 Studio Vitale (Napoli) \u2014 Barber shop\nRisultato: +184% follower qualificati in 6 mesi\nSummary: Personal brand del titolare costruito su TikTok e Reels. Lista d\'attesa per i nuovi clienti a 3 settimane.\n\nCASE 3 \u2014 Bianca Parrucchieri (Torino) \u2014 Salone di quartiere\nRisultato: +47% scontrino medio in 5 mesi\nSummary: Nuovo tono editoriale e servizi signature. Clientela pi\u00f9 fedele, meno sconti, pi\u00f9 margine.\n\nCASE 4 \u2014 Officina Capelli (Bologna) \u2014 Concept store beauty\nRisultato: +22.000 visualizzazioni/mese organiche\nSummary: Serie di contenuti dietro le quinte e micro-documentari. Nuova clientela fuori citt\u00e0 ogni settimana.'
  },
  {
    num: '05', kicker: 'Testimonianze', title: 'Voci dei clienti, <em>con video.</em>',
    intro: 'Quattro card con citazione + video testimonianza. Il video si apre in lightbox (Wix Studio: Lightbox + Video element).',
    preview: 'https://images.unsplash.com/photo-1754683378256-4b17627097d0?auto=format&fit=crop&w=800&q=80',
    layout: [
      'Section standard, header 2 colonne (titolo + paragrafo)',
      'Griglia 2\u00d72 di card con padding 40px',
      'Ogni card cliccabile che apre Lightbox con YouTube Video'
    ],
    elements: [
      'Card: Container con border 1px \u2192 Icona virgoletta Fraunces 36px Gold (top-left) + Text \u201cGuarda\u201d (top-right, uppercase) + Text citazione Fraunces 26px + Row in basso con Avatar rotondo 48px + Nome + Ruolo',
      'Click su card \u2192 Trigger Lightbox con Video element (URL YouTube del video testimonianza)',
      'In Wix Studio: Lightboxes \u2192 Add new \u2192 inserisci Video element \u2192 connettilo al click sulla card'
    ],
    copyTitle: 'Copy Testimonianze',
    copy: 'EYEBROW: Le voci dei clienti\nH2: Non le mie parole. <em>Le loro.</em>\nDESCRIZIONE: Quattro storie, quattro saloni, quattro citt\u00e0. Clicca su ogni tessera per guardare la testimonianza video.\n\nT1 \u2014 Laura Marchesi \u2014 Atelier Moreno, Milano\n\"Nico non vende fumo. Ti costringe a guardare il tuo salone con occhi nuovi e a lavorare sulle cose che contano: identit\u00e0, qualit\u00e0 e coerenza.\"\n\nT2 \u2014 Marco Vitale \u2014 Master Barber, Napoli\n\"Abbiamo smesso di inseguire la clientela. Oggi siamo noi a scegliere chi far sedere sulla poltrona. \u00c8 un altro mestiere.\"\n\nT3 \u2014 Bianca Ferri \u2014 Bianca Parrucchieri, Torino\n\"Mi ha insegnato a raccontare il mio lavoro senza imbarazzo. I social sono diventati uno strumento, non un peso.\"\n\nT4 \u2014 Alessia Conti \u2014 Officina Capelli, Bologna\n\"Un percorso chirurgico. Ogni consulenza lascia un\'azione concreta e una metrica da rispettare.\"'
  },
  {
    num: '06', kicker: 'Libro', title: 'Il libro, <em>un asset editoriale.</em>',
    intro: 'Sezione a due colonne: copertina del libro con rotazione leggera + glow gold, copy sulla sinistra con quotes di press.',
    preview: 'https://static.wixstatic.com/media/e71624_ef03b6e0429f4bd2a0648274d1a468a7~mv2.png/v1/fill/w_594,h_394,al_c,q_85/519d1e8c-5d02-4710-8e0f-16c669584e55.png',
    layout: [
      'Section background Surface',
      'Grid 12 col: sinistra 5/12 (copy), destra 7/12 (cover)',
      'Cover: Image con rotazione -6deg, box-shadow drammatico. Glow gold dietro (Container con background radiale oro 10% + blur 48px)'
    ],
    elements: [
      'Sinistra: Eyebrow \"Il libro\", H2 Fraunces 58px italic Gold, subtitle Fraunces italic 20px, paragrafo 16px, 2 quotes con border-left Gold 2px, Button primario \"Acquista il libro \u2197\"',
      'Destra: Container 5/4 aspect ratio con background gradient da #1a1813 a #0B0B0C',
      'In Wix Studio: Image element \u2192 Advanced \u2192 Rotation -6deg; Container \u2192 Effects \u2192 Shadow personalizzata'
    ],
    copyTitle: 'Copy Libro',
    copy: 'EYEBROW: Il libro\nH2: <em>Un video al giorno.</em>\nSUBTITLE: Il manuale che ha cambiato il marketing dei saloni italiani.\n\nDESCRIZIONE: Un sistema pratico per costruire un personal brand autentico con un solo video al giorno. Pagine fitte di esempi, template e check-list pensate per chi non ha tempo da perdere.\n\nQUOTE 1: \u00ab Un libro che dovrebbe leggere ogni titolare di salone. \u00bb \u2014 Estetica Magazine\nQUOTE 2: \u00ab Pragmatico, diretto, senza scorciatoie. \u00bb \u2014 Hairdresser\'s Journal\n\nCTA: Acquista il libro (link Amazon)\n\nTAG tl: No. 02 \u2014 Pubblicato da Nicobenz\nTAG br: \u2014 disponibile su Amazon'
  },
  {
    num: '07', kicker: 'Podcast', title: 'Podcast, <em>una lista editoriale.</em>',
    intro: 'Lista verticale di episodi. Niente grid di card, uno sotto l\'altro con hairline divider. Click apre video in lightbox.',
    preview: 'https://images.pexels.com/photos/8867553/pexels-photo-8867553.jpeg?auto=compress&cs=tinysrgb&w=1200',
    layout: [
      'Section standard',
      'Head: flex (titolo sinistra, bottone ghost \"Ascolta su YouTube\" destra)',
      'Lista: 3 righe separate da border-bottom 1px 12%, padding 24\u201332px verticale'
    ],
    elements: [
      'Ogni riga Repeater/Container flex: Text italic Gold \"EP. 48\" width 60px, Cerchio 44px con border 1px (Vector circle) + triangolo Play Vector Image, Text titolo Fraunces 24px, Text lunghezza \"42 min\" (destra, uppercase 11px)',
      'Hover: background diventa #111012, cerchio Play si riempie Gold, testo titolo diventa Gold',
      'Click riga: apre Lightbox con YouTube Video element'
    ],
    copyTitle: 'Copy Podcast',
    copy: 'EYEBROW: Podcast\nH2: Beauty Social Coach <em>\u2014 il podcast.</em>\nDESCRIZIONE: Conversazioni senza filtri con imprenditori beauty, creativi e marketer. Episodi nuovi ogni settimana.\n\nCTA: Ascolta su YouTube (link canale)\n\nEP. 48 \u2014 42 min\nPerch\u00e9 il tuo salone non sta crescendo (anche se lavori benissimo)\n\nEP. 47 \u2014 38 min\nCome ho trasformato un barber shop in un brand da lista d\'attesa\n\nEP. 46 \u2014 51 min\nLa formula dei contenuti che vendono senza sembrare pubblicit\u00e0'
  },
  {
    num: '08', kicker: 'Journal', title: 'Journal (blog), <em>3 articoli in evidenza.</em>',
    intro: 'Preview del blog con 3 post in griglia. In Wix Studio puoi collegare il Wix Blog nativo e stilizzarlo con questo layout.',
    preview: 'https://images.unsplash.com/photo-1759142235060-3191ee596c81?auto=format&fit=crop&w=1200&q=80',
    layout: [
      'Section background Surface',
      'Head: titolo + bottone ghost \"Tutti gli articoli \u2197\"',
      'Grid 3 colonne (1 su mobile) con 32px gap'
    ],
    elements: [
      'Card post: Image 4:3 + badge categoria (border + blur) + Container body con: Row meta (data \u00b7 tempo lettura, Inter 11px uppercase), Text titolo Fraunces 24px (hover Gold), Text excerpt 14px, Link \"Leggi articolo \u2197\"',
      'In Wix Studio: aggiungi \"Wix Blog\" \u2192 personalizza i \"Featured posts\" con questo layout o usa Repeater manuale'
    ],
    copyTitle: 'Copy Journal',
    copy: 'EYEBROW: Journal\nH2: Idee, strumenti, <em>ossessioni.</em>\nCTA: Tutti gli articoli \u2197\n\nPOST 1 \u2014 Strategia \u00b7 12 Giugno 2025 \u00b7 6 min\nIl mito del trend: perch\u00e9 copiare gli altri ti rende invisibile\nExcerpt: Il salone che vince nel 2025 non rincorre i trend: li interpreta. Una guida pratica per costruire una voce riconoscibile.\n\nPOST 2 \u2014 Video \u00b7 04 Giugno 2025 \u00b7 8 min\nUn video al giorno: la routine in 18 minuti che cambia la tua agenda\nExcerpt: Metodo, template e tre esempi reali da saloni italiani. Tutto quello che serve per iniziare domani mattina.\n\nPOST 3 \u2014 Brand \u00b7 27 Maggio 2025 \u00b7 7 min\nAlzare i prezzi senza perdere clienti: tre leve di posizionamento\nExcerpt: Dal linguaggio al format dell\'appuntamento: come costruire percezione di valore che giustifica ogni euro.'
  },
  {
    num: '09', kicker: 'FAQ', title: 'FAQ, <em>accordion sobrio.</em>',
    intro: 'Sei domande, formato editoriale. Wix Studio ha il componente \u201cFAQ\u201d nativo \u2014 usalo, ma stilizzalo con i font del tema.',
    preview: 'https://images.pexels.com/photos/7195812/pexels-photo-7195812.jpeg?auto=compress&cs=tinysrgb&w=1200',
    layout: [
      'Section standard, grid 12 col: sinistra 5/12 (titolo e lead), destra 7/12 (accordion)',
      'Accordion: ogni domanda \u00e8 un Container con border-bottom 1px, padding 28px verticale',
      'Icona +/- dentro cerchio 40px con border 1px'
    ],
    elements: [
      'Wix Studio: \"Add\" \u2192 \"FAQ\" \u2192 stilizza con Fraunces 22px per domande, Inter 16px per risposte',
      'Oppure costruisci con Collapsible Text'
    ],
    copyTitle: 'Copy FAQ',
    copy: 'EYEBROW: FAQ\nH2: Domande ricorrenti, <em>risposte dirette.</em>\nLEAD: Se non trovi quello che cerchi, la consulenza gratuita \u00e8 il modo pi\u00f9 rapido per togliersi ogni dubbio.\n\nQ1: A chi si rivolge la consulenza?\nA: A titolari di saloni di bellezza, parrucchieri, barber shop e professionisti beauty che vogliono trasformare la propria presenza online in un vero canale di acquisizione e posizionamento.\n\nQ2: La prima consulenza \u00e8 davvero gratuita?\nA: S\u00ec. \u00c8 una call di 30 minuti senza impegno. Analizziamo il tuo posizionamento attuale, individuiamo il primo blocco da risolvere e decidiamo insieme se ha senso proseguire.\n\nQ3: Devo gi\u00e0 avere una presenza sui social?\nA: No. Lavoro con saloni che partono da zero e con realt\u00e0 gi\u00e0 strutturate. Il metodo si adatta al punto in cui sei, non viceversa.\n\nQ4: Quanto tempo devo dedicare ogni settimana?\nA: Il metodo \u00e8 costruito su un video al giorno e circa 60 minuti di produzione settimanale, al netto del lavoro strategico che facciamo insieme.\n\nQ5: In quanto tempo si vedono i primi risultati?\nA: I primi segnali \u2014 qualit\u00e0 dei contatti, conversazioni, richieste \u2014 arrivano in 4-6 settimane. L\'impatto strutturale sul fatturato in 4-6 mesi.\n\nQ6: Lavori anche fuori dall\'Italia?\nA: S\u00ec, su selezione. Seguo saloni in Italia, Svizzera italiana e alcune realt\u00e0 europee in lingua italiana o inglese.'
  },
  {
    num: '10', kicker: 'Prenota', title: 'Consulenza gratuita, <em>la conversione.</em>',
    intro: 'La sezione pi\u00f9 importante dal punto di vista commerciale. Due colonne: messaggio + lista di benefit a sinistra, form Wix Forms a destra.',
    preview: 'https://images.unsplash.com/photo-1674882629415-6aab3ce98051?auto=format&fit=crop&w=1200&q=80',
    layout: [
      'Section con linea gradient Gold sottile in alto',
      'Grid 12 col: sinistra 6/12 (copy + checklist + CTA secondaria), destra 6/12 (form)',
      'Form dentro Container background Surface con border 1px'
    ],
    elements: [
      'Sinistra: H2 Fraunces 80px con \"per capire\" italic Gold, paragrafo body, lista di 4 benefit con cerchio 24px border Gold + checkmark, Button ghost \"Apri YouCanBook.me\"',
      'Destra: Usa \"Wix Forms\" nativo (Add \u2192 Contact & Forms \u2192 stile Minimal). Campi: Nome, Email, Telefono, Salone/Citt\u00e0, Obiettivo (textarea), Checkbox privacy',
      'Personalizza gli input: background trasparente, border-bottom 1px, focus border Gold'
    ],
    copyTitle: 'Copy Prenota',
    copy: 'EYEBROW: Consulenza gratuita\nH2: Trenta minuti <em>per capire</em> se il tuo salone pu\u00f2 crescere di un altro livello.\nDESCRIZIONE: Una call 1-a-1 con me. Analizziamo il tuo posizionamento, individuiamo il primo ostacolo da rimuovere e decidi in autonomia se proseguire.\n\nCHECKLIST:\n\u2713 Analisi del posizionamento attuale\n\u2713 Audit dei contenuti e della presenza social\n\u2713 Prima azione strategica, gi\u00e0 pronta\n\u2713 Zero impegno, zero vendite forzate\n\nCTA SECONDARIA: Apri il calendario YouCanBook.me \u2197\nLink: https://nicobenz.youcanbook.me/\n\nFORM:\nNome \u00b7 Email \u00b7 Telefono \u00b7 Salone / Citt\u00e0 \u00b7 Obiettivo principale (textarea)\nCheckbox: Ho letto e accetto l\'informativa sulla privacy.\nButton: Invia richiesta \u2197'
  },
  {
    num: '11', kicker: 'Footer', title: 'Footer, <em>una firma editoriale.</em>',
    intro: 'Non un footer tecnico: un invito finale alla conversione con un titolo enorme \"Scriviamoci.\" e poi i link utili.',
    preview: 'https://images.pexels.com/photos/7195799/pexels-photo-7195799.jpeg?auto=compress&cs=tinysrgb&w=1200',
    layout: [
      'Section con border-top 1px, padding 96px sopra / 48px sotto',
      'Top: Text label \"\u2014 Contatto\" + Mega text \"Scriviamoci.\" (Fraunces italic 140px) + cerchio grande con freccia',
      'Grid 4 colonne: Brand, Sito, Social, Legale (stack su mobile)',
      'Bottom row: copyright + credit'
    ],
    elements: [
      'Mega text \u00e8 un Link Button cliccabile verso #prenota',
      'Cerchio freccia: Container 80x80 circolare border 1px 22%, Vector Image freccia. Hover: bg Gold, freccia ruota 45deg',
      'Lista Social: Icon Button nativi Wix + Text'
    ],
    copyTitle: 'Copy Footer',
    copy: 'LABEL: \u2014 Contatto\nMEGA: Scriviamoci.\n\nBRAND:\nNicobenz\nIl primo Beauty Social Coach italiano. Strategia, personal brand e video marketing per saloni e professionisti beauty.\nEmail: info@nicobenz.it\n\nCOLONNA \"Sito\":\nMetodo \u00b7 Case study \u00b7 Libro \u00b7 Podcast \u00b7 Journal \u00b7 Contatti\n\nCOLONNA \"Social\":\nInstagram \u00b7 YouTube \u00b7 Facebook \u00b7 TikTok\n\nCOLONNA \"Legale\":\nPrivacy Policy \u00b7 Cookie Policy\n\nBOTTOM:\n\u00a9 2025 Nicobenz \u00b7 Tutti i diritti riservati  |  Design editoriale \u00b7 Redesigned with care'
  }
];

const assets = [
  {name:'Ritratto Nico (Hero)', url:'https://images.unsplash.com/photo-1655801856579-be4f3402eea4?auto=format&fit=crop&w=1600&q=90'},
  {name:'Case 1 \u2014 Atelier Moreno', url:'https://images.unsplash.com/photo-1773904215697-e6c21fc27ac2?auto=format&fit=crop&w=1600&q=90'},
  {name:'Case 2 \u2014 Studio Vitale', url:'https://images.pexels.com/photos/2881253/pexels-photo-2881253.jpeg?auto=compress&cs=tinysrgb&w=1600'},
  {name:'Case 3 \u2014 Bianca Parrucchieri', url:'https://images.pexels.com/photos/7195812/pexels-photo-7195812.jpeg?auto=compress&cs=tinysrgb&w=1600'},
  {name:'Case 4 \u2014 Officina Capelli', url:'https://images.pexels.com/photos/7195799/pexels-photo-7195799.jpeg?auto=compress&cs=tinysrgb&w=1600'},
  {name:'Testimonianza Laura', url:'https://images.unsplash.com/photo-1754683378256-4b17627097d0?auto=format&fit=crop&w=800&q=90'},
  {name:'Testimonianza Marco', url:'https://images.pexels.com/photos/8867553/pexels-photo-8867553.jpeg?auto=compress&cs=tinysrgb&w=800'},
  {name:'Testimonianza Bianca', url:'https://images.unsplash.com/photo-1674882629415-6aab3ce98051?auto=format&fit=crop&w=800&q=90'},
  {name:'Testimonianza Alessia', url:'https://images.unsplash.com/photo-1761839256840-7780a45b85dc?auto=format&fit=crop&w=800&q=90'},
  {name:'Blog 1 \u2014 Trend', url:'https://images.unsplash.com/photo-1631648080466-906e6a83dc7d?auto=format&fit=crop&w=1200&q=90'},
  {name:'Blog 2 \u2014 Video routine', url:'https://images.pexels.com/photos/8867553/pexels-photo-8867553.jpeg?auto=compress&cs=tinysrgb&w=1200'},
  {name:'Blog 3 \u2014 Prezzi', url:'https://images.unsplash.com/photo-1759142235060-3191ee596c81?auto=format&fit=crop&w=1200&q=90'},
  {name:'Cover Libro', url:'https://static.wixstatic.com/media/e71624_ef03b6e0429f4bd2a0648274d1a468a7~mv2.png/v1/fill/w_594,h_394,al_c,q_85/519d1e8c-5d02-4710-8e0f-16c669584e55.png'}
];

function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}

function render() {
  var html = '';

  // ASSETS LIBRARY
  html += '<section class="dk-section dk-section--alt" id="assets">';
  html += '<div class="dk-container">';
  html += '<div class="dk-sec-head">';
  html += '<span class="dk-kicker">04 \u00b7 Immagini</span>';
  html += '<h2 class="dk-h2">Libreria asset, <em>pronta all\'uso.</em></h2>';
  html += '<p class="dk-sec-desc">13 immagini curate per ricreare il sito. Apri ogni immagine, tasto destro \u2192 Salva, poi caricala nel <strong>Wix Media Manager</strong>. Per la foto di Nico ti consiglio di usare la tua foto professionale reale, qui c\'\u00e8 un placeholder.</p>';
  html += '</div>';
  html += '<div class="dk-assets">';
  assets.forEach(function(a){
    html += '<div class="dk-asset">';
    html += '<img src="'+a.url+'" alt="'+esc(a.name)+'" loading="lazy" />';
    html += '<div class="dk-asset__actions"><span>'+esc(a.name)+'</span><a href="'+a.url+'" target="_blank" rel="noreferrer" download>Apri</a></div>';
    html += '</div>';
  });
  html += '</div>';
  html += '</div>';
  html += '</section>';

  // BLUEPRINT
  html += '<section class="dk-section" id="blueprint">';
  html += '<div class="dk-container">';
  html += '<div class="dk-sec-head">';
  html += '<span class="dk-kicker">05 \u00b7 Blueprint</span>';
  html += '<h2 class="dk-h2">Sezione per sezione, <em>come costruirle.</em></h2>';
  html += '<p class="dk-sec-desc">Per ogni sezione trovi: anteprima visiva, layout consigliato in Wix Studio, elementi nativi da usare e tutto il copy pronto da copiare. Segui l\'ordine: parti dalla Hero, poi a cascata.</p>';
  html += '</div>';
  html += '<div class="dk-bp">';
  sections.forEach(function(s){
    html += '<div class="dk-bp__item">';
    // LEFT column: number + title + intro + specs
    html += '<div>';
    html += '<div class="dk-bp__num"><strong>'+s.num+'</strong><span>\u00b7 '+s.kicker+'</span></div>';
    html += '<h3 class="dk-bp__title">'+s.title+'</h3>';
    html += '<p class="dk-bp__intro">'+s.intro+'</p>';
    html += '<div class="dk-bp__spec-title">Layout Wix Studio</div>';
    html += '<ul class="dk-bp__list">';
    s.layout.forEach(function(l){ html += '<li>'+l+'</li>'; });
    html += '</ul>';
    html += '<div class="dk-bp__spec-title">Elementi da usare</div>';
    html += '<ul class="dk-bp__list">';
    s.elements.forEach(function(e){ html += '<li>'+e+'</li>'; });
    html += '</ul>';
    html += '<div class="dk-bp__spec-title">'+s.copyTitle+'</div>';
    var copyJson = JSON.stringify(s.copy);\n    html += '<div class="dk-bp__copy"><button class="dk-bp__copy-btn" data-copytext=\\'' + s.copy.replace(/'/g,'&apos;').replace(/\\n/g,'\\\\n') + '\\'>Copia tutto</button><pre>'+esc(s.copy).replace(/&lt;em&gt;/g,'<em>').replace(/&lt;\\/em&gt;/g,'</em>')+'</pre></div>';\n    html += '</div>';\n    // RIGHT column: preview image\n    html += '<div>';\n    html += '<div class=\"dk-bp__preview\"><img src=\"'+s.preview+'\" alt=\"Preview '+s.kicker+'\" loading=\"lazy\" /></div>';\n    html += '</div>';\n    html += '</div>';\n  });\n  html += '</div>';\n  html += '</div>';\n  html += '</section>';\n\n  var mount = document.getElementById('part2-mount');\n  if(mount){ mount.innerHTML = html; bindCopy(); }\n}\n\nfunction bindCopy(){\n  document.querySelectorAll('[data-copytext]').forEach(function(btn){\n    btn.addEventListener('click', function(){\n      var txt = btn.getAttribute('data-copytext').replace(/\\\\n/g,'\\n').replace(/&apos;/g,\"'\");\n      if(window.dkCopy){\n        window.dkCopy(txt).then(function(){ window.dkToast && window.dkToast('Copy di sezione copiato'); });\n      }\n    });\n  });\n}\n\ndocument.addEventListener('DOMContentLoaded', render);\n\n})();\n