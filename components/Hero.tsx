"use client";

import { useEffect, useRef } from "react";
import { LinkedInIcon, GitHubIcon } from "./icons";

export default function Hero() {
  const lineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const roles = ["Frontend Developer", "React Specialist", "UI Craftsman", "Next.js Dev"];
    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      const el = lineRef.current;
      if (!el) return;

      const current = roles[roleIdx];
      if (!deleting) {
        el.textContent = current.slice(0, charIdx + 1);
        charIdx++;
        if (charIdx === current.length) {
          deleting = true;
          timeoutId = setTimeout(type, 2000);
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
      timeoutId = setTimeout(type, deleting ? 60 : 100);
    };
    timeoutId = setTimeout(type, 800);
    return () => clearTimeout(timeoutId);
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
            <LinkedInIcon className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="https://github.com/Ruan-Init"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border text-light font-display font-medium px-7 py-3.5 rounded text-sm tracking-wide hover:border-accent hover:text-accent transition-all duration-300"
          >
            <GitHubIcon className="w-4 h-4" />
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
