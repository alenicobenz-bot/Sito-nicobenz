import React from "react";
import { Sparkles } from "lucide-react";

/**
 * Badge compatto di trasparenza AI per le card degli articoli.
 * Conforme al Regolamento UE 2024/1689 (AI Act) - Art. 50.
 */
export const AiBadgeCompact = ({ className = "" }) => (
  <span
    className={`inline-flex items-center gap-1.5 px-2.5 py-1 bg-[var(--nb-gold)]/10 border border-[var(--nb-gold)]/40 rounded-full text-[10px] tracking-micro uppercase text-[var(--nb-gold)] font-medium ${className}`}
    title="Contenuto redatto con assistenza di intelligenza artificiale"
    data-testid="ai-badge-compact"
  >
    <Sparkles className="w-3 h-3" strokeWidth={2} />
    AI Assisted
  </span>
);

/**
 * Box di trasparenza AI completo per il corpo degli articoli generati da AI.
 * Conforme al Regolamento UE 2024/1689 (AI Act) - Art. 50.
 */
export const AiDisclosureBox = ({ className = "" }) => (
  <div
    className={`flex items-start gap-3 p-4 md:p-5 bg-[var(--nb-gold)]/5 border border-[var(--nb-gold)]/30 rounded-lg ${className}`}
    data-testid="ai-disclosure-box"
    role="note"
    aria-label="Trasparenza AI"
  >
    <Sparkles className="w-5 h-5 text-[var(--nb-gold)] shrink-0 mt-0.5" strokeWidth={1.8} />
    <div>
      <p className="text-[13px] md:text-[14px] tracking-micro uppercase text-[var(--nb-gold)] font-semibold mb-1">
        Trasparenza AI
      </p>
      <p className="text-[14px] md:text-[15px] leading-[1.6] text-[var(--nb-ivory-dim)]">
        Questo articolo è stato redatto con l'assistenza di intelligenza artificiale
        e revisionato editorialmente da <span className="text-[var(--nb-ivory)]">Nico Benz</span>.
        Segnalazione obbligatoria ai sensi del Regolamento UE 2024/1689 (AI Act).
      </p>
    </div>
  </div>
);

/**
 * Riga di trasparenza AI compatta, usata su pagine informative
 * (lead magnet, thank you, popup).
 */
export const AiTransparencyNote = ({ text, className = "" }) => (
  <div
    className={`flex items-start gap-2 text-[12px] leading-[1.55] text-[var(--nb-muted)] ${className}`}
    data-testid="ai-transparency-note"
    role="note"
  >
    <Sparkles className="w-3.5 h-3.5 text-[var(--nb-gold)] shrink-0 mt-[3px]" strokeWidth={2} />
    <span>{text}</span>
  </div>
);
