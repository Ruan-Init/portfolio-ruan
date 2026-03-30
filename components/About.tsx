"use client";

import { useEffect, useRef } from "react";

export default function About() {
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
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "3+", label: "Anos de experiência" },
    { value: "40+", label: "Projetos entregues" },
    { value: "4", label: "Tecnologias core" },
    { value: "100%", label: "Comprometimento" },
  ];

  return (
    <section
      id="sobre"
      ref={ref}
      className="relative py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="animate-on-scroll flex items-center gap-4 mb-16">
          <span className="font-mono text-accent text-sm">01.</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Sobre mim
          </h2>
          <span className="h-px flex-1 bg-border max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="space-y-5">
            <p className="animate-on-scroll font-body text-muted text-lg leading-relaxed">
              Sou um desenvolvedor Frontend apaixonado por criar experiências digitais
              que combinam estética e funcionalidade. Baseado em{" "}
              <span className="text-light font-medium">Brasília, DF</span>, trabalho
              com foco em construir interfaces modernas, performáticas e acessíveis.
            </p>
            <p className="animate-on-scroll font-body text-muted text-lg leading-relaxed">
              Minha stack principal gira em torno do ecossistema{" "}
              <span className="text-accent">React / Next.js</span> com{" "}
              <span className="text-accent">TypeScript</span>, sempre buscando as
              melhores práticas de desenvolvimento — desde a arquitetura do código até
              a experiência final do usuário.
            </p>
            <p className="animate-on-scroll font-body text-muted text-lg leading-relaxed">
              Além do frontend, tenho experiência com{" "}
              <span className="text-accent">Node.js</span> e APIs REST, o que me
              permite compreender e colaborar em toda a stack de desenvolvimento de
              um produto digital.
            </p>
            <div className="animate-on-scroll pt-2">
              <a
                href="mailto:ruan.espindola17@gmail.com"
                className="font-mono text-sm text-accent border-b border-accent pb-0.5 hover:pb-1 transition-all duration-200"
              >
                ruan.espindola17@gmail.com ↗
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="animate-on-scroll group relative border border-border rounded-lg p-6 hover:border-accent/40 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="font-display font-extrabold text-4xl text-accent mb-1 relative z-10">
                  {stat.value}
                </p>
                <p className="font-body text-muted text-sm relative z-10">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
