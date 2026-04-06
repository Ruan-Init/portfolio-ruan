"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 88 },
  { name: "Tailwind / CSS", level: 94 },
  { name: "Node.js / APIs", level: 78 },
];

export default function About() {
  const ref = useScrollReveal({ delay: 100, threshold: 0.1 });

  return (
    <section id="sobre" ref={ref} className="relative py-32 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="animate-on-scroll flex flex-col sm:flex-row sm:items-end gap-4 mb-20">
          <span className="font-mono text-gold/50 text-xs tracking-[0.3em] uppercase">01</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white">
            Sobre
          </h2>
          <p className="font-body text-muted text-sm sm:text-base leading-relaxed max-w-md sm:ml-8 sm:border-l sm:border-white/10 sm:pl-8">
            Criando interfaces de alto impacto desde { new Date().getFullYear() - 3 }, com foco em cada pixel da experi&ecirc;ncia final.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-20">
          {/* Left text */}
          <div className="space-y-6">
            <p className="animate-on-scroll font-body text-muted text-base leading-relaxed">
              Sou um desenvolvedor Frontend baseado em{" "}
              <span className="text-white font-medium">Brasília, DF</span>,
              especializado em construir interfaces que combinam est&eacute;tica
              impec&aacute;vel com funcionalidade robusta.
            </p>

            <p className="animate-on-scroll font-body text-muted text-base leading-relaxed">
              Minha stack principal gira em torno do ecossistema{" "}
              <span className="text-gold">React / Next.js</span> com{" "}
              <span className="text-gold">TypeScript</span>, sempre buscando
              as melhores pr&aacute;ticas de desenvolvimento — desde a
              arquitetura do c&oacute;digo at&eacute; a experi&ecirc;ncia
              final do usu&aacute;rio.
            </p>

            <p className="animate-on-scroll font-body text-muted text-base leading-relaxed">
              Al&eacute;m do frontend, tenho experi&ecirc;ncia com{" "}
              <span className="text-gold">Node.js</span> e APIs REST, o que
              me permite colaborar em toda a stack de um produto digital.
            </p>
          </div>

          {/* Right - skills + stats */}
          <div className="space-y-8">
            {/* Skill bars */}
            <div>
              <h3 className="animate-on-scroll font-mono text-[10px] text-gold/50 uppercase tracking-[0.3em] mb-4">
                Compet&ecirc;ncias
              </h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="animate-on-scroll">
                    <div className="flex justify-between mb-1.5">
                      <span className="font-body text-light text-sm">{skill.name}</span>
                      <span className="font-mono text-xs text-muted">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="skill-bar h-full rounded-full bg-gradient-to-r from-gold to-purple origin-left"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
              {[
                { value: "3+", label: "Anos de exp." },
                { value: "40+", label: "Projetos" },
                { value: "15+", label: "Clientes" },
                { value: "100%", label: "Dedica&ccedil;&atilde;o" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="animate-on-scroll py-4 px-3 border border-white/5 rounded-lg hover:border-gold/20 transition-all duration-300"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <p className="font-display font-bold text-2xl text-gold">{stat.value}</p>
                  <p className="font-body text-muted text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}