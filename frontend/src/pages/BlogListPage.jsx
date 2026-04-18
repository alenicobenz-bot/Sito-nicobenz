import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { BLOG_ARTICLES } from "../data/blogArticles";

const BlogListPage = () => {
  return (
    <div className="relative bg-[var(--nb-bg)] text-[var(--nb-ivory)] min-h-screen">
      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-[var(--nb-bg)] nb-grain border-b border-[var(--nb-border)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Link to="/" className="inline-flex items-center gap-2 text-[13px] tracking-micro uppercase text-[var(--nb-muted)] hover:text-[var(--nb-gold)] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
            Torna alla home
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-[1px] bg-[var(--nb-gold)]" />
            <span className="nb-eyebrow">Journal</span>
          </div>
          
          <h1 className="font-display font-light tracking-editorial text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-[0.95] text-[var(--nb-ivory)] mb-6">
            Ultimi <em className="italic text-[var(--nb-gold)]">articoli.</em>
          </h1>
          
          <p className="text-[17px] md:text-[19px] leading-[1.7] text-[var(--nb-ivory-dim)] max-w-[640px]">
            Marketing, strategia e mindset per parrucchieri che vogliono crescere attraverso il personal brand e i social.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_ARTICLES.map((article) => (
              <Link
                key={article.id}
                to={`/blog/${article.slug}`}
                className="nb-tile group cursor-pointer block"
              >
                <article>
                  <div className="relative aspect-[4/3] overflow-hidden mb-6">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      loading="lazy" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute top-4 left-4 text-[10px] tracking-micro uppercase text-[var(--nb-ivory)] border border-[var(--nb-border-strong)] bg-[rgba(11,11,12,0.55)] backdrop-blur px-3 py-1.5">
                      {article.category}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-[11px] tracking-micro uppercase text-[var(--nb-muted)] mb-4">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 rounded-full bg-[var(--nb-muted)]" />
                    <span>{article.readTime} lettura</span>
                  </div>
                  
                  <h3 className="font-display tracking-editorial text-[24px] md:text-[26px] leading-[1.2] text-[var(--nb-ivory)] group-hover:text-[var(--nb-gold)] transition-colors mb-3">
                    {article.title}
                  </h3>
                  
                  <p className="text-[15px] leading-[1.65] text-[var(--nb-ivory-dim)] mb-6">
                    {article.excerpt}
                  </p>
                  
                  <div className="inline-flex items-center gap-2 text-[12px] tracking-micro uppercase text-[var(--nb-gold)]">
                    Leggi articolo
                    <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogListPage;