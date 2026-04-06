"use client";

import { useEffect, useState, useCallback, useRef } from "react";

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
        typingSpeed.current = 2500;
        setIsDeleting(true);
      }
    } else {
      setDisplayedText(role.slice(0, displayedText.length - 1));
      typingSpeed.current = 40;
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Decorative ring */}
      <div className="absolute w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] md:w-[900px] md:h-[900px] border border-white/[0.03] rounded-full animate-[float_8s_ease-in-out_infinite]" aria-hidden="true" />
      <div className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[650px] md:h-[650px] border border-gold/[0.06] rounded-full animate-[float_6s_ease-in-out_infinite_reverse]" aria-hidden="true" />

      <div className="relative z-10 text-center px-6">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 border border-gold/20 bg-gold/[0.04] rounded-full px-5 py-2 mb-12"
          style={{ animation: "fadeUp 0.7s ease 0.1s both" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          <span className="font-mono text-[10px] text-gold/80 tracking-[0.2em] uppercase">
            DisponÍvel para projetos
          </span>
        </div>

        {/* Name - small label */}
        <p
          className="font-mono text-xs sm:text-sm text-muted/50 tracking-[0.4em] uppercase mb-4"
          style={{ animation: "fadeUp 0.7s ease 0.2s both" }}
        >
          Desenvolvedor Frontend &middot; Bras&iacute;lia, DF
        </p>

        {/* Main name */}
        <h1
          className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tight mb-8"
          style={{ animation: "fadeUp 0.8s ease 0.3s both" }}
        >
          <span className="text-white">Ruan</span>
          <br />
          <span className="gradient-text">Carlos</span>
        </h1>

        {/* Typewriter */}
        <div
          className="flex items-center justify-center gap-3 mb-10 min-h-[2rem]"
          style={{ animation: "fadeUp 0.8s ease 0.45s both" }}
        >
          <span className="font-mono text-sm sm:text-base text-muted">// </span>
          <span className="font-mono text-sm sm:text-base text-light font-medium tracking-wide">
            {displayedText}
          </span>
          <span className="inline-block w-0.5 h-5 bg-gold animate-pulse rounded-full" aria-hidden="true" />
        </div>

        {/* Description */}
        <p
          className="font-body text-muted text-base sm:text-lg max-w-lg mx-auto leading-relaxed mb-10"
          style={{ animation: "fadeUp 0.8s ease 0.6s both" }}
        >
          Interfaces modernas e perform&aacute;ticas com foco em cada
          detalhe da experi&ecirc;ncia do usu&aacute;rio.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap justify-center gap-4"
          style={{ animation: "fadeUp 0.8s ease 0.75s both" }}
        >
          <a
            href="#projetos"
            className="group inline-flex items-center gap-2 bg-gold text-bg font-display font-bold px-8 py-4 rounded-lg text-sm tracking-wide hover:bg-gold/90 transition-all duration-300"
          >
            Ver projetos
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a
            href="mailto:ruan.espindola17@gmail.com"
            className="inline-flex items-center gap-2 border border-white/10 text-light font-display font-medium px-8 py-4 rounded-lg text-sm tracking-wide hover:border-gold/50 hover:text-gold transition-all duration-300"
          >
            Fale comigo
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
        style={{ animation: "fadeIn 1s ease 2s both" }}
        aria-hidden="true"
      >
        <span className="font-mono text-[9px] text-muted/60 tracking-[0.4em] uppercase">scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent animate-pulse" />
      </div>

      {/* Side decoration */}
      <div className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-3 opacity-25 z-30" aria-hidden="true">
        <div className="w-px h-12 bg-gradient-to-b from-gold/40 to-transparent" />
        <span className="font-mono text-[9px] text-muted/40 tracking-[0.3em] uppercase rotate-90 whitespace-nowrap">Ruan Espindola — Portfolio</span>
        <div className="w-px h-12 bg-gradient-to-t from-gold/40 to-transparent" />
      </div>
    </section>
  );
}