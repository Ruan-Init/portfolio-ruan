"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { LinkedInIcon, GitHubIcon } from "./icons";

const roles = ["Frontend Developer", "React Specialist", "UI Craftsman", "Next.js Dev"];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = useRef(100);

  const typeEffect = useCallback(() => {
    const role = roles[currentRole];

    if (!isDeleting) {
      setDisplayedText(role.slice(0, displayedText.length + 1));
      typingSpeed.current = 80;

      if (displayedText === role) {
        typingSpeed.current = 2000;
        setIsDeleting(true);
      }
    } else {
      setDisplayedText(role.slice(0, displayedText.length - 1));
      typingSpeed.current = 50;

      if (displayedText === "") {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }
  }, [currentRole, displayedText, isDeleting]);

  useEffect(() => {
    const timer = setTimeout(typeEffect, typingSpeed.current);
    return () => clearTimeout(timer);
  }, [typeEffect]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-16"
    >
      {/* Background decorative elements */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 80% 50%, #64FFDA08 0%, transparent 60%),
            radial-gradient(circle at 20% 80%, #7B9CF708 0%, transparent 50%)
          `,
        }}
        aria-hidden="true"
      />

      {/* Corner decorations */}
      <div className="absolute top-24 right-8 w-20 h-20 border-t border-r border-accent/10 rounded-tr-3xl opacity-40 hidden lg:block" aria-hidden="true" />
      <div className="absolute bottom-24 left-8 w-20 h-20 border-b border-l border-accent/10 rounded-bl-3xl opacity-40 hidden lg:block" aria-hidden="true" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Top label */}
        <div
          className="flex items-center gap-3 mb-8"
          style={{ animation: "fadeUp 0.7s ease 0.1s both" }}
        >
          <span className="h-px w-12 bg-gradient-to-r from-accent to-transparent" />
          <span className="font-mono text-accent text-sm tracking-widest uppercase">
            Olá, mundo. Eu sou
          </span>
        </div>

        {/* Name */}
        <h1
          className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none text-white mb-4"
          style={{ animation: "fadeUp 0.7s ease 0.25s both" }}
        >
          Ruan
          <br />
          <span className="gradient-text">Espindola</span>
        </h1>

        {/* Typewriter */}
        <div
          className="flex items-center gap-3 mb-8 h-10"
          style={{ animation: "fadeUp 0.7s ease 0.4s both" }}
        >
          <span className="font-display text-2xl sm:text-3xl text-muted font-medium">
            { "// " }
          </span>
          <span className="font-display text-2xl sm:text-3xl text-light font-medium min-w-[340px]">
            { displayedText }
            <span className="inline-block w-[3px] h-8 bg-accent ml-0.5 animate-pulse rounded-full" aria-hidden="true" />
          </span>
        </div>

        {/* Bio */}
        <p
          className="font-body text-muted text-lg sm:text-xl max-w-2xl leading-relaxed mb-12"
          style={{ animation: "fadeUp 0.7s ease 0.55s both" }}
        >
          Transformo ideias em interfaces de alto impacto. Especialista em{" "}
          <span className="text-accent font-medium">React</span>,{" "}
          <span className="text-accent font-medium">Next.js</span> e{" "}
          <span className="text-accent font-medium">TypeScript</span> — construindo produtos
          digitais com foco em performance, usabilidade e design.
        </p>

        {/* CTAs */}
        <div
          className="group flex flex-wrap items-center gap-4"
          style={{ animation: "fadeUp 0.7s ease 0.7s both" }}
        >
          <a
            href="#projetos"
            className="group/btn relative inline-flex items-center gap-2.5 bg-accent text-bg font-display font-bold px-8 py-4 rounded-lg text-sm tracking-wide overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_#64FFDA44] hover:-translate-y-0.5"
          >
            <span className="relative z-10">Ver Projetos</span>
            <svg className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <span className="absolute inset-0 bg-gradient-to-r from-accent to-[#7B9CF7] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
          </a>

          <a
            href="https://www.linkedin.com/in/ruanespindola/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border text-light font-display font-medium px-6 py-4 rounded-lg text-sm tracking-wide hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all duration-300"
          >
            <LinkedInIcon className="w-4 h-4" />
            LinkedIn
          </a>

          <a
            href="https://github.com/Ruan-Init"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border text-light font-display font-medium px-6 py-4 rounded-lg text-sm tracking-wide hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all duration-300"
          >
            <GitHubIcon className="w-4 h-4" />
            GitHub
          </a>
        </div>

        {/* Stats bar */}
        <div
          className="flex flex-wrap gap-12 mt-20 pt-8 border-t border-border/50"
          style={{ animation: "fadeUp 0.7s ease 0.85s both" }}
        >
          {[
            { value: "3+", label: "Anos de exp." },
            { value: "40+", label: "Projetos" },
            { value: "100%", label: "Dedicação" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display font-extrabold text-2xl text-white mb-0.5">
                { stat.value }
              </div>
              <div className="font-mono text-xs text-muted/60 uppercase tracking-wider">
                { stat.label }
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
          style={{ animation: "fadeIn 1s ease 1.5s both" }}
          aria-hidden="true"
        >
          <span className="font-mono text-[10px] text-muted tracking-[0.3em] uppercase">scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-accent via-accent/50 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
