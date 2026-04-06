"use client";

import { useEffect, useState, useCallback } from "react";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#tecnologias", label: "Skills" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#sobre");

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.35, rootMargin: "-80px 0px -40% 0px" }
    );

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-bg/70 backdrop-blur-2xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between" role="navigation" aria-label="Navegação principal">
          {/* Logo */}
          <a href="#" className="font-display font-bold text-lg tracking-tight text-white hover:text-gold transition-colors duration-300" aria-label="Página inicial">
            { "R." }
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative font-mono text-xs uppercase tracking-[0.15em] px-4 py-2 rounded transition-all duration-300 ${
                    activeSection === link.href
                      ? "text-gold"
                      : "text-muted/60 hover:text-white"
                  }`}
                >
                  {link.label}
                  {activeSection === link.href && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contato"
            className="hidden md:inline-flex items-center gap-2 border border-white/10 text-muted font-mono text-xs px-4 py-2 rounded transition-all duration-300 hover:border-gold/30 hover:text-gold"
          >
            Fale comigo
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            <span className={`block w-5 h-px bg-white transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-1" : ""}`} />
            <span className={`block w-5 h-px bg-muted transition-all duration-300 ${menuOpen ? "opacity-0 w-0" : ""}`} />
            <span className={`block w-5 h-px bg-white transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-1" : ""}`} />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-bg/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-6 text-white text-2xl font-display hover:text-gold transition-colors"
          onClick={() => setMenuOpen(false)}
          aria-label="Fechar menu"
        >
          {"✕"}
        </button>

        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className={`font-display font-bold text-4xl text-white hover:text-gold transition-all duration-300 ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: menuOpen ? `${i * 80}ms` : "0ms" }}
          >
            {link.label}
          </a>
        ))}

        <a
          href="mailto:ruan.espindola17@gmail.com"
          className="mt-4 font-mono text-xs text-gold border border-gold/30 px-6 py-3 rounded-lg hover:bg-gold hover:text-bg transition-all duration-300"
          onClick={() => setMenuOpen(false)}
        >
          ruan.espindola17@gmail.com
        </a>
      </div>
    </>
  );
}