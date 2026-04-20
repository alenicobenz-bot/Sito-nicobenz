import React, { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Clock, Tag, Home, Share2 } from "lucide-react";
import { getArticleBySlug, getRelatedArticles } from "../data/blogArticles";
import { Helmet } from "react-helmet";

const BlogArticlePage = () => {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);
  const relatedArticles = article ? getRelatedArticles(slug, 3) : [];

  // Scroll to top quando la pagina si carica
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  // Schema JSON-LD Article per AI search e Google rich snippets
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "image": article.image,
    "datePublished": article.date,
    "author": {
      "@type": "Person",
      "name": "Nicobenz",
      "jobTitle": "Beauty Social Coach",
      "url": "https://nicobenz.it"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nicobenz",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nicobenz.it/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://nicobenz.it/blog/${slug}`
    },
    "keywords": "marketing parrucchieri, formazione parrucchieri, social media parrucchieri, personal branding beauty, strategia social saloni"
  };

  // Breadcrumb Schema per navigazione
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://nicobenz.it"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://nicobenz.it/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.title,
        "item": `https://nicobenz.it/blog/${slug}`
      }
    ]
  };

  // Simple markdown-like rendering
  const renderContent = (content) => {
    const lines = content.trim().split('\n');
    const elements = [];
    let currentParagraph = [];

    lines.forEach((line, index) => {
      const trimmed = line.trim();
      
      if (trimmed.startsWith('# ')) {
        if (currentParagraph.length > 0) {
          elements.push(<p key={`p-${index}`} className="text-[16px] md:text-[17px] leading-[1.8] text-[var(--nb-ivory-dim)] mb-6">{currentParagraph.join(' ')}</p>);
          currentParagraph = [];
        }
        elements.push(
          <h1 key={index} className="font-display font-light tracking-editorial text-[40px] md:text-[52px] leading-[1.1] text-[var(--nb-ivory)] mb-8 mt-12">
            {trimmed.replace('# ', '')}
          </h1>
        );
      } else if (trimmed.startsWith('## ')) {
        if (currentParagraph.length > 0) {
          elements.push(<p key={`p-${index}`} className="text-[16px] md:text-[17px] leading-[1.8] text-[var(--nb-ivory-dim)] mb-6">{currentParagraph.join(' ')}</p>);
          currentParagraph = [];
        }
        elements.push(
          <h2 key={index} className="font-display tracking-editorial text-[28px] md:text-[34px] leading-[1.15] text-[var(--nb-ivory)] mb-6 mt-10">
            {trimmed.replace('## ', '')}
          </h2>
        );
      } else if (trimmed.startsWith('### ')) {
        if (currentParagraph.length > 0) {
          elements.push(<p key={`p-${index}`} className="text-[16px] md:text-[17px] leading-[1.8] text-[var(--nb-ivory-dim)] mb-6">{currentParagraph.join(' ')}</p>);
          currentParagraph = [];
        }
        elements.push(
          <h3 key={index} className="font-display tracking-editorial text-[22px] md:text-[26px] leading-[1.2] text-[var(--nb-ivory)] mb-4 mt-8">
            {trimmed.replace('### ', '')}
          </h3>
        );
      } else if (trimmed.startsWith('- ')) {
        if (currentParagraph.length > 0) {
          elements.push(<p key={`p-${index}`} className="text-[16px] md:text-[17px] leading-[1.8] text-[var(--nb-ivory-dim)] mb-6">{currentParagraph.join(' ')}</p>);
          currentParagraph = [];
        }
        if (!elements[elements.length - 1]?.type || elements[elements.length - 1].type !== 'ul') {
          elements.push(<ul key={`ul-${index}`} className="space-y-3 mb-6 ml-6">{[]}</ul>);
        }
        const ul = elements[elements.length - 1];
        ul.props.children.push(
          <li key={index} className="text-[16px] md:text-[17px] leading-[1.8] text-[var(--nb-ivory-dim)] before:content-['•'] before:text-[var(--nb-gold)] before:mr-3">
            {trimmed.replace('- ', '')}
          </li>
        );
      } else if (trimmed.startsWith('---')) {
        if (currentParagraph.length > 0) {
          elements.push(<p key={`p-${index}`} className="text-[16px] md:text-[17px] leading-[1.8] text-[var(--nb-ivory-dim)] mb-6">{currentParagraph.join(' ')}</p>);
          currentParagraph = [];
        }
        elements.push(<hr key={index} className="my-12 border-t border-[var(--nb-border)]" />);
      } else if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
        if (currentParagraph.length > 0) {
          elements.push(<p key={`p-${index}`} className="text-[16px] md:text-[17px] leading-[1.8] text-[var(--nb-ivory-dim)] mb-6">{currentParagraph.join(' ')}</p>);
          currentParagraph = [];
        }
        elements.push(
          <p key={index} className="text-[17px] md:text-[19px] leading-[1.7] text-[var(--nb-ivory)] font-semibold mb-6">
            {trimmed.replace(/\*\*/g, '')}
          </p>
        );
      } else if (trimmed) {
        currentParagraph.push(trimmed);
      } else if (currentParagraph.length > 0) {
        elements.push(<p key={`p-${index}`} className="text-[16px] md:text-[17px] leading-[1.8] text-[var(--nb-ivory-dim)] mb-6">{currentParagraph.join(' ')}</p>);
        currentParagraph = [];
      }
    });

    if (currentParagraph.length > 0) {
      elements.push(<p key="p-final" className="text-[16px] md:text-[17px] leading-[1.8] text-[var(--nb-ivory-dim)] mb-6">{currentParagraph.join(' ')}</p>);
    }

    return elements;
  };

  return (
    <>
      <Helmet>
        <title>{`${article.title} — Nicobenz Blog`}</title>
        <meta name="description" content={article.excerpt} />
        <meta name="keywords" content="marketing parrucchieri, formazione parrucchieri, social media parrucchieri, personal branding beauty, consulenza saloni" />
        
        {/* Open Graph */}
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={article.image} />
        <meta property="og:url" content={`https://nicobenz.it/blog/${slug}`} />
        <meta property="og:type" content="article" />
      </Helmet>
      
      {/* JSON-LD Schemas injected directly into DOM */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <div className="relative bg-[var(--nb-bg)] text-[var(--nb-ivory)] min-h-screen">
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

      {/* Header */}
      <section className="relative py-12 md:py-16 border-b border-[var(--nb-border)]">
        <div className="max-w-[900px] mx-auto px-6 md:px-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-[13px] tracking-micro uppercase text-[var(--nb-muted)] hover:text-[var(--nb-gold)] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
            Tutti gli articoli
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="inline-flex items-center gap-2 text-[11px] tracking-micro uppercase text-[var(--nb-gold)] border border-[var(--nb-gold)]/30 bg-[var(--nb-gold)]/10 px-3 py-1.5 rounded-full">
              <Tag className="w-3 h-3" />
              {article.category}
            </span>
            <span className="inline-flex items-center gap-2 text-[11px] tracking-micro uppercase text-[var(--nb-muted)]">
              <Clock className="w-3 h-3" />
              {article.readTime} di lettura
            </span>
          </div>

          <h1 className="font-display font-light tracking-editorial text-[36px] sm:text-[48px] md:text-[60px] leading-[1.05] text-[var(--nb-ivory)] mb-6">
            {article.title}
          </h1>

          <p className="text-[17px] md:text-[19px] leading-[1.7] text-[var(--nb-ivory-dim)]">
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-12">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
            <img 
              src={article.image} 
              alt={`${article.title} - Articolo marketing parrucchieri e formazione beauty social media`} 
              className="w-full h-full object-cover" 
              loading="eager" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6 md:px-10">
          <div className="prose prose-invert max-w-none">
            {renderContent(article.content)}
          </div>
        </div>
      </section>

      {/* Social Share Buttons */}
      <section className="relative py-12 border-t border-[var(--nb-border)]">
        <div className="max-w-[900px] mx-auto px-6 md:px-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Share2 className="w-5 h-5 text-[var(--nb-gold)]" strokeWidth={1.5} />
              <span className="text-[15px] font-semibold text-[var(--nb-ivory)]">Condividi questo articolo:</span>
            </div>
            
            <div className="flex items-center gap-3">
              {/* X (Twitter) */}
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`https://nicobenz.it/blog/${slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 border border-[#1DA1F2]/30 hover:border-[#1DA1F2]/50 flex items-center justify-center transition-all group"
                aria-label="Condividi su X (Twitter)"
              >
                <svg className="w-5 h-5 text-[#1DA1F2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://nicobenz.it/blog/${slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#1877F2]/10 hover:bg-[#1877F2]/20 border border-[#1877F2]/30 hover:border-[#1877F2]/50 flex items-center justify-center transition-all group"
                aria-label="Condividi su Facebook"
              >
                <svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://nicobenz.it/blog/${slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 border border-[#0A66C2]/30 hover:border-[#0A66C2]/50 flex items-center justify-center transition-all group"
                aria-label="Condividi su LinkedIn"
              >
                <svg className="w-5 h-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/?text=${encodeURIComponent(`${article.title} - https://nicobenz.it/blog/${slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 hover:border-[#25D366]/50 flex items-center justify-center transition-all group"
                aria-label="Condividi su WhatsApp"
              >
                <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="relative py-16 md:py-20 border-t border-[var(--nb-border)]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <h3 className="font-display text-[28px] md:text-[36px] tracking-editorial text-[var(--nb-ivory)] mb-10 text-center">
              📖 Leggi anche
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((related) => (
                <Link
                  key={related.id}
                  to={`/blog/${related.slug}`}
                  className="group"
                >
                  <article className="nb-tile overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-[var(--nb-gold)]/50">
                    {/* Image */}
                    <div className="relative aspect-[16/9] overflow-hidden bg-[#0a0a0a]">
                      <img 
                        src={related.image} 
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="inline-block px-3 py-1 bg-[var(--nb-gold)]/90 text-[#0B0B0C] text-[11px] tracking-micro uppercase font-semibold">
                          {related.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h4 className="font-display text-[20px] md:text-[22px] tracking-editorial text-[var(--nb-ivory)] mb-3 line-clamp-2 group-hover:text-[var(--nb-gold)] transition-colors">
                        {related.title}
                      </h4>
                      <p className="text-[14px] leading-[1.6] text-[var(--nb-ivory-dim)] mb-4 line-clamp-2 flex-1">
                        {related.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-[12px] text-[var(--nb-muted)]">
                        <span>{related.date}</span>
                        <span>•</span>
                        <span>{related.readTime}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative py-16 md:py-20 border-t border-[var(--nb-border)]">
        <div className="max-w-[900px] mx-auto px-6 md:px-10">
          <div className="nb-tile p-10 md:p-12 text-center">
            <h3 className="font-display text-[28px] md:text-[34px] tracking-editorial text-[var(--nb-ivory)] mb-4">
              Vuoi far crescere il tuo salone?
            </h3>
            <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--nb-ivory-dim)] mb-8 max-w-[600px] mx-auto">
              Prenota una consulenza gratuita e scopri come trasformare il tuo personal brand in un asset strategico.
            </p>
            <Link
              to="/#prenota"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--nb-gold)] hover:bg-[var(--nb-gold)]/90 text-[#0B0B0C] font-semibold text-[15px] tracking-micro uppercase transition-all duration-300 shadow-lg shadow-[var(--nb-gold)]/20"
            >
              Prenota consulenza gratuita
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default BlogArticlePage;