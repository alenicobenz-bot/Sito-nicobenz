import React, { useState } from "react";
import { ArrowUpRight, Check, Calendar, Mail, Phone, User, Building2 } from "lucide-react";
import { toast } from "sonner";
import { BRAND } from "../mock";

const BookingCTA = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    salon: "",
    goal: "",
    privacy: false,
  });
  const [sent, setSent] = useState(false);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.privacy) {
      toast.error("Accetta l'informativa sulla privacy per procedere.");
      return;
    }
    if (!form.name || !form.email) {
      toast.error("Compila almeno nome ed email.");
      return;
    }
    try {
      const existing = JSON.parse(localStorage.getItem("nb_bookings") || "[]");
      existing.push({ ...form, ts: new Date().toISOString() });
      localStorage.setItem("nb_bookings", JSON.stringify(existing));
    } catch (e) {}
    setSent(true);
    toast.success("Richiesta inviata. Ti ricontatto entro 24 ore.");
  };

  const inputCls =
    "w-full bg-transparent border-b border-[var(--nb-border-strong)] focus:border-[var(--nb-gold)] outline-none py-3 text-[15px] text-[var(--nb-ivory)] placeholder:text-[var(--nb-muted)] transition-colors";

  return (
    <section id="prenota" className="relative py-24 md:py-36 bg-[var(--nb-bg)] nb-grain overflow-hidden">
      {/* Gold accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--nb-gold)] to-transparent opacity-40" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: editorial CTA */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[1px] bg-[var(--nb-gold)]" />
              <span className="nb-eyebrow">Consulenza gratuita</span>
            </div>
            <h2 className="font-display font-light tracking-editorial text-[44px] md:text-[64px] lg:text-[80px] leading-[1.02] text-[var(--nb-ivory)]">
              Trenta minuti <em className="italic text-[var(--nb-gold)]">per capire</em> se il tuo salone può crescere di un altro livello.
            </h2>
            <p className="mt-8 text-[16px] md:text-[18px] leading-[1.7] text-[var(--nb-ivory-dim)] max-w-[520px]">
              Una call 1-a-1 con me. Analizziamo il tuo posizionamento, individuiamo il primo ostacolo da rimuovere e decidi in autonomia se proseguire.
            </p>

            <ul className="mt-10 space-y-4">
              {[
                "Analisi del posizionamento attuale",
                "Audit dei contenuti e della presenza social",
                "Prima azione strategica, già pronta",
                "Zero impegno, zero vendite forzate",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-[15px] text-[var(--nb-ivory)]">
                  <span className="mt-0.5 w-6 h-6 rounded-full border border-[var(--nb-gold)] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[var(--nb-gold)]" strokeWidth={2} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={BRAND.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="nb-btn-ghost mt-12"
            >
              <Calendar className="w-4 h-4" strokeWidth={1.6} />
              Apri il calendario YouCanBook.me
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.6} />
            </a>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-6">
            <div className="relative bg-[var(--nb-bg-2)] border border-[var(--nb-border)] p-8 md:p-12">
              <div className="absolute top-4 right-4 text-[10px] tracking-micro uppercase text-[var(--nb-muted)]">
                Modulo · No. 03
              </div>

              {sent ? (
                <div className="py-14 text-center">
                  <div className="mx-auto w-16 h-16 rounded-full border border-[var(--nb-gold)] flex items-center justify-center mb-6">
                    <Check className="w-6 h-6 text-[var(--nb-gold)]" strokeWidth={1.6} />
                  </div>
                  <h3 className="font-display text-[28px] tracking-editorial text-[var(--nb-ivory)]">
                    Grazie, ci sentiamo presto.
                  </h3>
                  <p className="mt-3 text-[15px] text-[var(--nb-ivory-dim)] max-w-[360px] mx-auto">
                    Ho ricevuto la tua richiesta. Ti contatterò entro 24 ore lavorative per fissare la consulenza.
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setForm({ name: "", email: "", phone: "", salon: "", goal: "", privacy: false });
                    }}
                    className="mt-8 text-[12px] tracking-micro uppercase text-[var(--nb-ivory)] hover:text-[var(--nb-gold)] transition-colors"
                  >
                    Invia un'altra richiesta →
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <label className="block">
                      <span className="inline-flex items-center gap-2 text-[10px] tracking-micro uppercase text-[var(--nb-muted)] mb-2">
                        <User className="w-3.5 h-3.5" strokeWidth={1.6} /> Nome
                      </span>
                      <input name="name" value={form.name} onChange={onChange} className={inputCls} placeholder="Mario Rossi" />
                    </label>
                    <label className="block">
                      <span className="inline-flex items-center gap-2 text-[10px] tracking-micro uppercase text-[var(--nb-muted)] mb-2">
                        <Mail className="w-3.5 h-3.5" strokeWidth={1.6} /> Email
                      </span>
                      <input name="email" type="email" value={form.email} onChange={onChange} className={inputCls} placeholder="tu@salone.it" />
                    </label>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <label className="block">
                      <span className="inline-flex items-center gap-2 text-[10px] tracking-micro uppercase text-[var(--nb-muted)] mb-2">
                        <Phone className="w-3.5 h-3.5" strokeWidth={1.6} /> Telefono
                      </span>
                      <input name="phone" value={form.phone} onChange={onChange} className={inputCls} placeholder="+39 ..." />
                    </label>
                    <label className="block">
                      <span className="inline-flex items-center gap-2 text-[10px] tracking-micro uppercase text-[var(--nb-muted)] mb-2">
                        <Building2 className="w-3.5 h-3.5" strokeWidth={1.6} /> Salone / Città
                      </span>
                      <input name="salon" value={form.salon} onChange={onChange} className={inputCls} placeholder="Atelier Rossi — Milano" />
                    </label>
                  </div>
                  <label className="block">
                    <span className="inline-flex items-center gap-2 text-[10px] tracking-micro uppercase text-[var(--nb-muted)] mb-2">
                      Obiettivo principale
                    </span>
                    <textarea
                      name="goal"
                      value={form.goal}
                      onChange={onChange}
                      rows={3}
                      className={`${inputCls} resize-none`}
                      placeholder="Cosa vorresti ottenere nei prossimi 6 mesi?"
                    />
                  </label>
                  <label className="flex items-start gap-3 text-[13px] text-[var(--nb-ivory-dim)] pt-2">
                    <input
                      type="checkbox"
                      name="privacy"
                      checked={form.privacy}
                      onChange={onChange}
                      className="mt-1 accent-[var(--nb-gold)] w-4 h-4"
                    />
                    <span>
                      Ho letto e accetto l'{" "}
                      <a href="#" className="underline hover:text-[var(--nb-gold)]">informativa sulla privacy</a>.
                    </span>
                  </label>
                  <button type="submit" className="nb-btn-primary w-full justify-center mt-4">
                    Invia richiesta
                    <ArrowUpRight className="w-4 h-4" strokeWidth={1.6} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;
