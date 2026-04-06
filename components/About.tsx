"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CodeIcon, GlobeIcon, SparkleIcon, UsersIcon } from "./icons";

const stats = [
  { value: "3+", label: "Anos de experiência", icon: <SparkleIcon className="w-5 h-5" /> },
  { value: "40+", label: "Projetos entregues", icon: <CodeIcon className="w-5 h-5" /> },
  { value: "15+", label: "Clientes atendidos", icon: <UsersIcon className="w-5 h-5" /> },
  { value: "100%", label: "Comprometimento", icon: <GlobeIcon className="w-5 h-5" /> },
];

export default function About() {
  const ref = useScrollReveal({ delay: 100, threshold: 0.1 });

  return (
    <section
      id="sobre"
      ref={ref}
      className="relative py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="animate-on-scroll flex items-center gap-4 mb-16">
          <span className="h-px w-8 bg-accent" />
          <span className="font-mono text-accent text-sm">01.</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Sobre mim
          </h2>
          <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="space-y-6">
            <p className="animate-on-scroll font-body text-muted text-lg leading-relaxed">
              Sou um desenvolvedor Frontend apaixonado por criar experiências digitais
              que combinam <span className="text-accent font-medium">estética impecável</span> e <span className="text-accent font-medium">funcionalidade robusta</span>.
              Baseado em <span className="text-light font-medium">Brasília, DF</span>, trabalho com
              foco em construir interfaces modernas, performáticas e acessíveis.
            </p>

            <div className="animate-on-scroll p-5 border border-border rounded-xl bg-surface/50">
              <p className="font-mono text-xs text-accent/70 uppercase tracking-widest mb-3">
                Core Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Tailwind", "Node.js", "Prisma"].map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs text-accent border border-accent/20 px-3 py-1.5 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

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
                className="inline-flex items-center gap-2 font-mono text-sm text-accent border-b border-accent/30 pb-1 hover:border-accent hover:text-accent/90 transition-all duration-200"
              >
                ruan.espindola17@gmail.com
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="animate-on-scroll group relative border border-border rounded-xl p-6 hover:border-accent/30 transition-all duration-300 hover:shadow-[0_0_30px_#64FFDA11]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <div className="relative z-10">
                  <div className="text-muted/40 group-hover:text-accent/60 transition-colors duration-300 mb-3">
                    {stat.icon}
                  </div>
                  <p className="font-display font-extrabold text-3xl text-accent mb-1">
                    {stat.value}
                  </p>
                  <p className="font-body text-muted text-sm leading-snug">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider absolute bottom-0 left-1/2 -translate-x-1/2 w-full px-6" aria-hidden="true">
        <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent max-w-3xl mx-auto" />
      </div>
    </section>
  );
}
