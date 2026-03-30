"use client";

import { useEffect, useRef } from "react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".animate-on-scroll").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const links = [
    {
      label: "LinkedIn",
      handle: "/in/ruanespindola",
      href: "https://www.linkedin.com/in/ruanespindola/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      handle: "Ruan-Init",
      href: "https://github.com/Ruan-Init",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      label: "Email",
      handle: "ruan.espindola17@gmail.com",
      href: "mailto:ruan.espindola17@gmail.com",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      label: "WhatsApp",
      handle: "(61) 99640-1764",
      href: "https://wa.me/5561996401764",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="contato" ref={ref} className="relative py-32 px-6">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center bottom, #64FFDA08 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="animate-on-scroll flex items-center gap-4 mb-16">
          <span className="font-mono text-accent text-sm">04.</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Contato
          </h2>
          <span className="h-px flex-1 bg-border max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* CTA text */}
          <div>
            <h3 className="animate-on-scroll font-display font-bold text-4xl sm:text-5xl text-white leading-tight mb-6">
              Vamos construir
              <br />
              <span className="gradient-text">algo incrível?</span>
            </h3>
            <p className="animate-on-scroll font-body text-muted text-lg leading-relaxed mb-8">
              Estou disponível para projetos freelance, oportunidades de emprego
              ou simplesmente para trocar uma ideia sobre tecnologia. Me manda
              uma mensagem!
            </p>
            <div className="animate-on-scroll flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:ruan.espindola17@gmail.com"
                className="inline-flex items-center gap-3 bg-accent text-bg font-display font-bold px-8 py-4 rounded-lg text-sm tracking-wide hover:shadow-[0_0_40px_#64FFDA44] transition-all duration-300"
              >
                Enviar mensagem
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              <a
                href="https://wa.me/5561996401764"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white font-display font-bold px-8 py-4 rounded-lg text-sm tracking-wide hover:bg-[#1ebe5a] transition-all duration-300"
              >
                WhatsApp
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.52 3.48A11.8 11.8 0 0012.03.75C6.2.75 1.68 5.27 1.68 11.11c0 1.96.51 3.86 1.47 5.56L.5 23.5l6.96-1.83a11.84 11.84 0 005.57 1.42h.01c5.83 0 10.35-4.52 10.35-10.36 0-2.77-1.08-5.37-3.27-7.36zm-8.49 16.5h-.01c-1.81 0-3.57-.5-5.08-1.43l-.36-.22-4.13 1.09 1.1-3.99-.24-.38A8.26 8.26 0 013.77 11.1c0-4.55 3.71-8.26 8.26-8.26 2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 012.42 5.84 8.25 8.25 0 01-8.25 8.26zm4.51-7.2c-.25-.12-1.48-.73-1.71-.82-.23-.08-.4-.12-.57.12-.18.24-.7.82-.86.99-.16.16-.32.18-.57.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.01-.38.11-.5.11-.11.25-.29.38-.43.13-.14.17-.24.25-.4.08-.16.04-.3-.02-.42-.06-.12-.57-1.38-.78-1.9-.2-.5-.4-.43-.57-.44-.15-.01-.32-.01-.49-.01-.18 0-.46.07-.7.34-.24.27-.92.9-.92 2.2 0 1.3.94 2.56 1.07 2.74.12.18 1.85 2.83 4.49 3.96.63.27 1.12.43 1.5.55.63.2 1.2.17 1.65.1.5-.08 1.48-.61 1.69-1.2.21-.6.21-1.12.15-1.23-.06-.12-.22-.18-.47-.3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="animate-on-scroll group flex items-center gap-4 border border-border rounded-xl px-5 py-4 hover:border-accent/40 transition-all duration-300 overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 text-muted group-hover:text-accent transition-colors duration-300">
                  {link.icon}
                </span>
                <div className="relative z-10">
                  <p className="font-mono text-xs text-muted/60 uppercase tracking-widest mb-0.5">
                    {link.label}
                  </p>
                  <p className="font-body text-light text-sm font-medium group-hover:text-accent transition-colors duration-300">
                    {link.handle}
                  </p>
                </div>
                <svg
                  className="w-4 h-4 text-muted/40 group-hover:text-accent ml-auto relative z-10 group-hover:translate-x-0.5 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
