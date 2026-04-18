import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Clock, Tag, Home } from "lucide-react";
import { getArticleBySlug } from "../data/blogArticles";

const BlogArticlePage = () => {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

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
              alt={article.title} 
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
  );
};

export default BlogArticlePage;