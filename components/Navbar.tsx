"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#tecnologias", label: "Skills" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-display font-bold text-xl tracking-tight text-white group"
        >
          <span className="text-accent">R</span>
          <span className="group-hover:text-accent transition-colors duration-300">uan</span>
          <span className="text-muted">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-sm text-muted hover:text-accent transition-colors duration-300 relative group"
              >
                <span className="text-accent mr-1 text-xs opacity-60 group-hover:opacity-100 transition-opacity">#</span>
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:ruan.espindola17@gmail.com"
          className="hidden md:flex items-center gap-2 border border-accent text-accent font-mono text-sm px-4 py-2 rounded hover:bg-accent-dim transition-all duration-300"
        >
          Fale comigo
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-px bg-accent transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-px bg-light transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-accent transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-80 border-b border-border" : "max-h-0"
        } bg-bg/95 backdrop-blur-xl`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-sm text-muted hover:text-accent transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                <span className="text-accent mr-2">#</span>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:ruan.espindola17@gmail.com"
              className="font-mono text-sm text-accent border border-accent px-4 py-2 rounded inline-block mt-2 hover:bg-accent-dim transition-all duration-300"
            >
              Fale comigo
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
