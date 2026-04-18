import React from "react";
import { Link } from "react-router-dom";
import { Check, Home } from "lucide-react";

const VideoGiornoPage = () => {
  return (
    <div className="relative bg-[var(--nb-bg)] text-[var(--nb-ivory)]">
      {/* Simple Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(11,11,12,0.85)] backdrop-blur-md border-b border-[var(--nb-border)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-[70px] flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="font-display text-[22px] md:text-[26px] font-medium tracking-editorial text-[var(--nb-ivory)]">
              Nico<span className="text-[var(--nb-gold)]">benz</span>
            </span>
          </Link>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-4 py-2 text-[13px] tracking-micro uppercase text-[var(--nb-ivory)] hover:text-[var(--nb-gold)] transition-colors"
          >
            <Home className="w-4 h-4" strokeWidth={1.6} />
            Home
          </Link>
        </div>
      </header>

      {/* Add padding for fixed header */}
      <div className="h-[70px]" />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-[var(--nb-bg)] nb-grain">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--nb-gold)] to-transparent opacity-40" />
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--nb-gold)]/10 border border-[var(--nb-gold)]/30 rounded-full mb-6">
                <span className="text-[11px] tracking-micro uppercase text-[var(--nb-gold)] font-semibold">
                  Idea Video del Giorno per Parrucchieri
                </span>
              </div>

              <h1 className="font-display font-light tracking-editorial text-[40px] sm:text-[52px] md:text-[64px] leading-[1.05] text-[var(--nb-ivory)] mb-6">
                Ogni giorno un'idea video pronta da pubblicare
              </h1>

              <p className="text-[17px] md:text-[19px] leading-[1.7] text-[var(--nb-ivory-dim)] max-w-[560px] mb-8">
                Se ogni volta non sai cosa postare su Instagram o TikTok, qui trovi la soluzione:
                ricevi ogni giorno un'idea di reel semplice, concreta e pensata per attirare clienti.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Idea video pronta",
                  "Hook iniziale forte",
                  "Scaletta facile da registrare",
                  "Caption pronta da usare"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[15px] text-[var(--nb-ivory)]">
                    <span className="w-6 h-6 rounded-full border border-[var(--nb-gold)] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-[var(--nb-gold)]" strokeWidth={2.5} />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="nb-tile p-8 md:p-10 sticky top-8">
                <h3 className="font-display text-[26px] md:text-[30px] tracking-editorial text-[var(--nb-ivory)] mb-3">
                  Ricevi gratis la tua idea video
                </h3>
                <p className="text-[15px] leading-[1.65] text-[var(--nb-ivory-dim)] mb-8">
                  Iscriviti e inizia a ricevere ogni giorno un contenuto semplice da registrare nel tuo salone.
                </p>

                <form
                  method="POST"
                  action="https://cafe0d23.sibforms.com/serve/MUIFABZ43SZXZJH3nshDiaEg6ITekEZFU8PddpHeCiP8S5uTb9c9TdmBgvBb6YOe4JWzk0GPU-rui_Fh58JPoW11WkmpCiZK3cfFJ1wm0t37eIN51lM70FU7cyI2ZSEPvDBFVNOY4rahnCk05XQEBHjxGtsfev6ojgvmcxsu6hEARNFV78urib3ojuu2WimeYvDMgahxoLNf1Cg9lQ=="
                  className="space-y-5"
                >
                  <div>
                    <label htmlFor="EMAIL-top" className="block text-[13px] tracking-micro uppercase text-[var(--nb-muted)] mb-2 font-semibold">
                      La tua email
                    </label>
                    <input
                      type="email"
                      id="EMAIL-top"
                      name="EMAIL"
                      placeholder="nome@esempio.it"
                      required
                      className="w-full px-4 py-3 bg-[rgba(255,255,255,0.04)] border border-[var(--nb-border)] text-[var(--nb-ivory)] placeholder:text-[var(--nb-muted)] focus:border-[var(--nb-gold)] focus:ring-1 focus:ring-[var(--nb-gold)] transition-all outline-none"
                    />
                  </div>

                  <input type="text" name="email_address_check" defaultValue="" className="hidden" />
                  <input type="hidden" name="locale" value="it" />
                  <input type="hidden" name="html_type" value="simple" />

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-[var(--nb-gold)] hover:bg-[var(--nb-gold)]/90 text-[#0B0B0C] font-semibold text-[15px] tracking-micro uppercase transition-all duration-300 shadow-lg shadow-[var(--nb-gold)]/20"
                  >
                    Mandami l'idea video
                  </button>

                  <p className="text-[12px] text-[var(--nb-muted)] text-center">
                    Gratis. Nessuno spam. Solo idee video utili per parrucchieri.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative py-24 md:py-32 border-t border-[var(--nb-border)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-[800px] mx-auto mb-16">
            <h2 className="font-display font-light tracking-editorial text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] text-[var(--nb-ivory)] mb-6">
              Il vero problema non è fare i video. È sapere <em className="italic text-[var(--nb-gold)]">cosa dire.</em>
            </h2>
            <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--nb-ivory-dim)]">
              La maggior parte dei parrucchieri non pubblica con continuità non perché non sia capace,
              ma perché ogni giorno perde tempo a chiedersi: "Oggi che cosa posto?"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Resti fermo",
                text: "Hai buone intenzioni, ma rimandi sempre perché non ti viene in mente un'idea chiara."
              },
              {
                title: "Pubblichi a caso",
                text: "Metti online contenuti senza una direzione precisa e i social non portano risultati."
              },
              {
                title: "Perdi clienti",
                text: "Mentre tu non pubblichi, altri saloni diventano visibili ogni giorno davanti ai tuoi potenziali clienti."
              }
            ].map((item, i) => (
              <div key={i} className="nb-tile p-8">
                <h3 className="font-display text-[22px] md:text-[24px] tracking-editorial text-[var(--nb-ivory)] mb-3">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-[1.65] text-[var(--nb-ivory-dim)]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative py-24 md:py-32 bg-[var(--nb-bg-2)] border-y border-[var(--nb-border)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-[800px] mx-auto mb-16">
            <h2 className="font-display font-light tracking-editorial text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] text-[var(--nb-ivory)] mb-6">
              La soluzione: un'idea video al giorno, <em className="italic text-[var(--nb-gold)]">già pensata per te</em>
            </h2>
            <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--nb-ivory-dim)]">
              Ogni giorno ricevi un'idea pratica, veloce e registrabile anche in pochi minuti.
              Tu devi solo prendere il telefono e girarla.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Titolo e hook",
                text: "Ricevi un'idea chiara e una frase iniziale forte per catturare subito l'attenzione."
              },
              {
                title: "Scaletta semplice",
                text: "Ti diciamo esattamente come costruire il reel in modo facile, anche se non sei creativo."
              },
              {
                title: "Caption pronta",
                text: "Hai già una base pronta per pubblicare senza perdere altro tempo davanti al telefono."
              }
            ].map((item, i) => (
              <div key={i} className="nb-tile p-8">
                <h3 className="font-display text-[22px] md:text-[24px] tracking-editorial text-[var(--nb-ivory)] mb-3">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-[1.65] text-[var(--nb-ivory-dim)]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Section */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <h2 className="font-display font-light tracking-editorial text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] text-[var(--nb-ivory)] mb-6">
              Esempio reale di quello che riceverai
            </h2>
            <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--nb-ivory-dim)] max-w-[700px] mx-auto">
              Contenuti semplici, veloci, utili e perfetti per un reel quotidiano.
            </p>
          </div>

          <div className="nb-tile p-10 md:p-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--nb-gold)]/10 border border-[var(--nb-gold)]/30 rounded-full mb-6">
              <span className="text-[11px] tracking-micro uppercase text-[var(--nb-gold)] font-semibold">
                Esempio Idea Video di Oggi
              </span>
            </div>

            <h3 className="font-display text-[28px] md:text-[34px] tracking-editorial text-[var(--nb-ivory)] mb-8">
              3 errori che rovinano i capelli colorati
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  label: "Hook iniziale",
                  content: '"Se hai i capelli colorati, questi 3 errori ti stanno rovinando il risultato."'
                },
                {
                  label: "Scaletta del reel",
                  content: (
                    <ul className="space-y-2 text-[15px] leading-[1.65] text-[var(--nb-ivory-dim)]">
                      <li>• Mostra un esempio di capello spento o secco</li>
                      <li>• Spiega un errore comune che molte fanno a casa</li>
                      <li>• Chiudi con il consiglio corretto da dare subito</li>
                    </ul>
                  )
                },
                {
                  label: "Caption pronta",
                  content: "Se hai i capelli colorati salva questo reel prima del prossimo lavaggio 👇"
                },
                {
                  label: "Perché funziona",
                  content: "Parla di un problema reale, cattura attenzione subito e ti posiziona come professionista."
                }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-[rgba(255,255,255,0.02)] border border-[var(--nb-border)] rounded-lg">
                  <h4 className="text-[13px] tracking-micro uppercase text-[var(--nb-gold)] font-semibold mb-3">
                    {item.label}
                  </h4>
                  {typeof item.content === 'string' ? (
                    <p className="text-[15px] leading-[1.65] text-[var(--nb-ivory-dim)]">
                      {item.content}
                    </p>
                  ) : (
                    item.content
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section className="relative py-24 md:py-32 bg-[var(--nb-bg-2)] border-y border-[var(--nb-border)]">
        <div className="max-w-[900px] mx-auto px-6 md:px-10">
          <div className="nb-tile p-10 md:p-12 text-center">
            <h3 className="font-display text-[28px] md:text-[34px] tracking-editorial text-[var(--nb-ivory)] mb-4">
              Creato da <span className="text-[var(--nb-ivory)]">Nico</span><span className="text-[var(--nb-gold)]">benz</span>
            </h3>
            <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--nb-ivory-dim)] max-w-[700px] mx-auto">
              Aiuto parrucchieri a crescere sui social attraverso i video. Ho creato questo progetto
              per darti ogni giorno un contenuto pratico, semplice e subito utilizzabile, così non resti
              mai senza idee e inizi a pubblicare con continuità.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-36">
        <div className="max-w-[1000px] mx-auto px-6 md:px-10">
          <div className="relative p-12 md:p-16 bg-gradient-to-br from-[var(--nb-gold)] to-[#d4940a] text-[#0B0B0C] rounded-3xl overflow-hidden">
            <div className="absolute inset-0 opacity-10 nb-grain" />
            
            <div className="relative text-center">
              <h2 className="font-display font-light tracking-editorial text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] mb-6">
                Da domani puoi smettere di chiederti cosa pubblicare
              </h2>
              <p className="text-[17px] md:text-[19px] leading-[1.7] max-w-[700px] mx-auto mb-10 text-[#0B0B0C]/90">
                Iscriviti gratis e ricevi ogni giorno un'idea video pronta da registrare per il tuo salone.
              </p>

              <form
                method="POST"
                action="https://cafe0d23.sibforms.com/serve/MUIFABZ43SZXZJH3nshDiaEg6ITekEZFU8PddpHeCiP8S5uTb9c9TdmBgvBb6YOe4JWzk0GPU-rui_Fh58JPoW11WkmpCiZK3cfFJ1wm0t37eIN51lM70FU7cyI2ZSEPvDBFVNOY4rahnCk05XQEBHjxGtsfev6ojgvmcxsu6hEARNFV78urib3ojuu2WimeYvDMgahxoLNf1Cg9lQ=="
                className="max-w-[520px] mx-auto space-y-5"
              >
                <div>
                  <label htmlFor="EMAIL-bottom" className="block text-[13px] tracking-micro uppercase text-[#0B0B0C] mb-2 font-semibold">
                    Inserisci la tua email
                  </label>
                  <input
                    type="email"
                    id="EMAIL-bottom"
                    name="EMAIL"
                    placeholder="nome@esempio.it"
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-[#0B0B0C]/20 text-[#0B0B0C] placeholder:text-[#0B0B0C]/50 focus:border-[#0B0B0C] focus:ring-2 focus:ring-[#0B0B0C]/30 transition-all outline-none"
                  />
                </div>

                <input type="text" name="email_address_check" defaultValue="" className="hidden" />
                <input type="hidden" name="locale" value="it" />
                <input type="hidden" name="html_type" value="simple" />

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#0B0B0C] hover:bg-[#1a1a1c] text-white font-semibold text-[15px] tracking-micro uppercase transition-all duration-300 shadow-xl"
                >
                  Iscrivimi ora
                </button>

                <p className="text-[12px] text-[#0B0B0C]/70 text-center">
                  Nessuno spam. Solo idee video chiare, pratiche e pensate per parrucchieri.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="border-t border-[var(--nb-border)] py-8">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
          <p className="text-[12px] tracking-micro uppercase text-[var(--nb-muted)]">
            © {new Date().getFullYear()} <span className="text-[var(--nb-ivory)]">Nico</span><span className="text-[var(--nb-gold)]">benz</span> — Idea Video del Giorno per Parrucchieri
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoGiornoPage;
