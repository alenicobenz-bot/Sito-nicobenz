import React from "react";
import { ArrowUpRight } from "lucide-react";
import { JOURNAL } from "../mock";

const Journal = () => {
  return (
    <section id="journal" className="relative py-24 md:py-36 bg-[var(--nb-bg-2)] border-y border-[var(--nb-border)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 md:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[1px] bg-[var(--nb-gold)]" />
              <span className="nb-eyebrow">Journal</span>
            </div>
            <h2 className="font-display font-light tracking-editorial text-[36px] md:text-[52px] lg:text-[60px] leading-[1.05] text-[var(--nb-ivory)] max-w-[640px]">
              Ultimi <em className="italic text-[var(--nb-gold)]">articoli.</em>
            </h2>
          </div>
          <a href="https://www.nicobenz.it/blog-1" target="_blank" rel="noreferrer" className="nb-btn-ghost self-start md:self-end">
            Tutti gli articoli
            <ArrowUpRight className="w-4 h-4" strokeWidth={1.6} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {JOURNAL.map((post) => (
            <a
              key={post.id}
              href={post.href}
              target="_blank"
              rel="noreferrer"
              className="nb-tile group cursor-pointer block"
            >
              <article>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-4 left-4 text-[10px] tracking-micro uppercase text-[var(--nb-ivory)] border border-[var(--nb-border-strong)] bg-[rgba(11,11,12,0.55)] backdrop-blur px-3 py-1.5">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 md:p-7">
                  <div className="flex items-center gap-3 text-[11px] tracking-micro uppercase text-[var(--nb-muted)]">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-[var(--nb-muted)]" />
                    <span>{post.read} lettura</span>
                  </div>
                  <h3 className="mt-4 font-display tracking-editorial text-[22px] md:text-[24px] leading-[1.25] text-[var(--nb-ivory)] group-hover:text-[var(--nb-gold)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.65] text-[var(--nb-ivory-dim)]">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-[11px] tracking-micro uppercase text-[var(--nb-ivory)] group-hover:text-[var(--nb-gold)] transition-colors">
                    Leggi articolo <ArrowUpRight className="w-4 h-4" strokeWidth={1.4} />
                  </div>
                </div>
              </article>
            </a>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
