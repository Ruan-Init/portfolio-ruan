"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const lineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Typewriter for role
    const roles = ["Frontend Developer", "React Specialist", "UI Craftsman", "Next.js Dev"];
    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;

    const type = () => {
      const el = lineRef.current;
      if (!el) return;

      const current = roles[roleIdx];
      if (!deleting) {
        el.textContent = current.slice(0, charIdx + 1);
        charIdx++;
        if (charIdx === current.length) {
          deleting = true;
          setTimeout(type, 2000);
          return;
        }
      } else {
        el.textContent = current.slice(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          roleIdx = (roleIdx + 1) % roles.length;
        }
      }
      setTimeout(type, deleting ? 60 : 100);
    };
    const t = setTimeout(type, 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-16"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Top label */}
        <div
          className="flex items-center gap-3 mb-6"
          style={{ animation: "fadeUp 0.7s ease 0.1s both" }}
        >
          <span className="h-px w-10 bg-accent" />
          <span className="font-mono text-accent text-sm tracking-widest uppercase">
            Olá, mundo. Eu sou
          </span>
        </div>

        {/* Name */}
        <h1
          className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl leading-none text-white mb-4"
          style={{ animation: "fadeUp 0.7s ease 0.25s both" }}
        >
          Ruan
          <br />
          <span className="gradient-text">Espindola</span>
        </h1>

        {/* Typewriter */}
        <div
          className="flex items-center gap-3 mb-8"
          style={{ animation: "fadeUp 0.7s ease 0.4s both" }}
        >
          <span className="font-display text-2xl sm:text-3xl text-muted font-medium">
            {"//"}
          </span>
          <span className="font-display text-2xl sm:text-3xl text-light font-medium">
            <span ref={lineRef} />
            <span className="animate-pulse text-accent ml-0.5">|</span>
          </span>
        </div>

        {/* Bio */}
        <p
          className="font-body text-muted text-lg max-w-xl leading-relaxed mb-10"
          style={{ animation: "fadeUp 0.7s ease 0.55s both" }}
        >
          Transformo ideias em interfaces de alto impacto. Especialista em{" "}
          <span className="text-accent">React</span>,{" "}
          <span className="text-accent">Next.js</span> e{" "}
          <span className="text-accent">TypeScript</span> — construindo produtos
          digitais com foco em performance, usabilidade e design.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-4"
          style={{ animation: "fadeUp 0.7s ease 0.7s both" }}
        >
          <a
            href="#projetos"
            className="group relative inline-flex items-center gap-2 bg-accent text-bg font-display font-bold px-7 py-3.5 rounded text-sm tracking-wide overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_#64FFDA44]"
          >
            <span className="relative z-10">Ver Projetos</span>
            <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/ruanespindola/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border text-light font-display font-medium px-7 py-3.5 rounded text-sm tracking-wide hover:border-accent hover:text-accent transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/Ruan-Init"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border text-light font-display font-medium px-7 py-3.5 rounded text-sm tracking-wide hover:border-accent hover:text-accent transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
          style={{ animation: "fadeIn 1s ease 1.5s both" }}
        >
          <span className="font-mono text-xs text-muted">scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-accent to-transparent animate-float" />
        </div>
      </div>

      {/* Decorative grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 50%, #64FFDA08 0%, transparent 60%), radial-gradient(circle at 20% 80%, #7B9CF708 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
