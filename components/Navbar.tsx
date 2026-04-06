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
          setScrolled(window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section detection
  const updateActiveSection = useCallback(() => {
    const sections = navLinks.map((link) => link.href).map((href) => {
      const el = document.querySelector(href);
      if (!el) return { href, top: 0 };
      return { href, top: el.getBoundingClientRect().top + window.scrollY - 120 };
    });

    const current = sections.reduce((acc, section) => {
      if (window.scrollY >= section.top) return section.href;
      return acc;
    }, sections[0]?.href || "#sobre");

    setActiveSection(current);
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
      { threshold: 0.35, rootMargin: "-100px 0px -40% 0px" }
    );

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between" role="navigation" aria-label="Navegação principal">
        {/* Logo */}
        <a
          href="#"
          className="font-display font-bold text-xl tracking-tight text-white group"
          aria-label="Página inicial"
        >
          <span className="text-accent">&lt;</span>
          <span className="group-hover:text-accent transition-colors duration-300">Ruan</span>
          <span className="text-accent"> /&gt;</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`font-mono text-sm px-3 py-2 rounded-md transition-all duration-300 relative ${
                  activeSection === link.href
                    ? "text-accent bg-accent/5"
                    : "text-muted hover:text-accent hover:bg-accent/5"
                }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-px bg-accent rounded-full" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:ruan.espindola17@gmail.com"
          className="hidden md:flex items-center gap-2 border border-accent/80 text-accent font-mono text-sm px-4 py-2 rounded-lg hover:bg-accent hover:text-bg transition-all duration-300"
        >
          Fale comigo
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <span className={`block w-5 h-px bg-accent transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-1" : ""}`} />
          <span className={`block w-5 h-px bg-light transition-all duration-300 ${menuOpen ? "opacity-0 translate-x-2" : ""}`} />
          <span className={`block w-5 h-px bg-accent transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-1" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100 border-b border-border" : "max-h-0 opacity-0"
        } bg-bg/95 backdrop-blur-xl`}
        role="menu"
      >
        <ul className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map((link) => (
            <li key={link.href} role="none">
              <a
                href={link.href}
                role="menuitem"
                className={`font-mono text-sm px-3 py-3 rounded-lg transition-all duration-300 block ${
                  activeSection === link.href
                    ? "text-accent bg-accent/5"
                    : "text-muted hover:text-accent"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                <span className="text-accent/50 mr-3">#</span>
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-4" role="none">
            <a
              href="mailto:ruan.espindola17@gmail.com"
              role="menuitem"
              className="font-mono text-sm text-accent border border-accent px-4 py-3 rounded-lg inline-block w-full text-center hover:bg-accent hover:text-bg transition-all duration-300"
            >
              Fale comigo
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
