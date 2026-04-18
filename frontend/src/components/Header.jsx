import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV, BRAND } from "../mock";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Aggiungi Blog al NAV
  const navItems = [
    ...NAV,
    { label: "Blog", href: isHomePage ? "#journal" : "/blog" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background,backdrop-filter,border-color] duration-500 ${
        scrolled
          ? "bg-[rgba(11,11,12,0.78)] backdrop-blur-md border-b border-[var(--nb-border)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-[76px] md:h-[88px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="font-display text-[22px] md:text-[26px] font-medium tracking-editorial text-[var(--nb-ivory)]">
            Nico<span className="text-[var(--nb-gold)]">benz</span>
          </span>
          <span className="hidden md:inline text-[10px] tracking-micro uppercase text-[var(--nb-muted)] border-l border-[var(--nb-border)] pl-3">
            {BRAND.role}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            item.href.startsWith('#') && isHomePage ? (
              <a
                key={item.href}
                href={item.href}
                className="nb-link text-[13px] tracking-wide"
              >
                {item.label}
              </a>
            ) : item.href === "/blog" ? (
              <Link
                key={item.href}
                to={item.href}
                className="nb-link text-[13px] tracking-wide"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={isHomePage ? item.href : `/${item.href}`}
                className="nb-link text-[13px] tracking-wide"
              >
                {item.label}
              </a>
            )
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {isHomePage ? (
            <a href="#prenota" className="nb-btn-primary text-[13px]">
              Prenota consulenza
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.6} />
            </a>
          ) : (
            <Link to="/#prenota" className="nb-btn-primary text-[13px]">
              Prenota consulenza
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.6} />
            </Link>
          )}
        </div>

        <button
          onClick={() => setOpen(true)}
          className="lg:hidden text-[var(--nb-ivory)] nb-focus p-2"
          aria-label="Apri menu"
        >
          <Menu className="w-6 h-6" strokeWidth={1.4} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-[rgba(5,5,6,0.88)] backdrop-blur-md"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[88%] max-w-[420px] bg-[var(--nb-bg-2)] border-l border-[var(--nb-border)] p-8 flex flex-col transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-12">
            <span className="font-display text-[22px] tracking-editorial">
              Nico<span className="text-[var(--nb-gold)]">benz</span>
            </span>
            <button
              onClick={() => setOpen(false)}
              className="text-[var(--nb-ivory)] nb-focus p-2"
              aria-label="Chiudi menu"
            >
              <X className="w-6 h-6" strokeWidth={1.4} />
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            {navItems.map((item) => (
              item.href.startsWith('#') && isHomePage ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl tracking-editorial text-[var(--nb-ivory)] hover:text-[var(--nb-gold)] transition-colors duration-300"
                >
                  {item.label}
                </a>
              ) : item.href === "/blog" ? (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl tracking-editorial text-[var(--nb-ivory)] hover:text-[var(--nb-gold)] transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={isHomePage ? item.href : `/${item.href}`}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl tracking-editorial text-[var(--nb-ivory)] hover:text-[var(--nb-gold)] transition-colors duration-300"
                >
                  {item.label}
                </a>
              )
            ))}
          </nav>
          {isHomePage ? (
            <a
              href="#prenota"
              onClick={() => setOpen(false)}
              className="nb-btn-primary mt-auto justify-center"
            >
              Prenota consulenza
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.6} />
            </a>
          ) : (
            <Link
              to="/#prenota"
              onClick={() => setOpen(false)}
              className="nb-btn-primary mt-auto justify-center"
            >
              Prenota consulenza
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.6} />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
