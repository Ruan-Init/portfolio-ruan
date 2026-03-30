"use client";

import { useEffect, useRef } from "react";

const projects = [
  {
    number: "01",
    name: "Kainde Tecnologia",
    description:
      "Site institucional completo para empresa de TI. Apresenta serviços de infraestrutura, cloud computing, DevOps e desenvolvimento sob medida. Interface bilíngue (PT/EN) com animações fluidas e design profissional.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "i18n"],
    url: "https://www.kainde.com.br",
    featured: true,
  },
  {
    number: "02",
    name: "PMS Enterprise",
    description:
      "Dashboard de gerenciamento empresarial (Project Management System). Interface administrativa robusta com visualização de dados, controle de projetos e gestão de equipes em tempo real.",
    tags: ["React", "Next.js", "TypeScript", "Dashboard"],
    url: "https://pms-enterprise-v2.vercel.app/dashboard",
    featured: true,
  },
  {
    number: "03",
    name: "Finance Dashboard",
    description:
      "Painel financeiro interativo com gráficos e métricas de desempenho. Visualização clara de receitas, despesas e indicadores financeiros com UI moderna e responsiva.",
    tags: ["React", "TypeScript", "Charts", "Tailwind"],
    url: "https://finance-dashboard-ldp5mw3vj-ruan-inits-projects.vercel.app",
    featured: false,
  },
  {
    number: "04",
    name: "DataLens",
    description:
      "Plataforma de análise e visualização de dados. Interface intuitiva para exploração de datasets com componentes interativos e foco em UX para tomada de decisões orientadas por dados.",
    tags: ["Next.js", "TypeScript", "Data Viz", "React"],
    url: "https://datalens-next-zsed.vercel.app",
    featured: false,
  },
];

function ExternalIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".animate-on-scroll").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projetos" ref={ref} className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="animate-on-scroll flex items-center gap-4 mb-16">
          <span className="font-mono text-accent text-sm">03.</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Projetos
          </h2>
          <span className="h-px flex-1 bg-border max-w-xs" />
        </div>

        {/* Featured (first 2) */}
        <div className="space-y-8 mb-12">
          {projects.filter((p) => p.featured).map((project) => (
            <div
              key={project.number}
              className="animate-on-scroll group relative border border-border rounded-2xl p-8 hover:border-accent/30 transition-all duration-500 overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-[#7B9CF7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-accent/50 text-xs">
                      {project.number}
                    </span>
                    <span className="h-px w-8 bg-border" />
                    <span className="font-mono text-accent text-xs uppercase tracking-widest">
                      Projeto em destaque
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-3 group-hover:text-accent transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="font-body text-muted leading-relaxed max-w-xl mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs text-accent/70 border border-accent/20 px-2.5 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 flex items-center gap-2 border border-border text-muted font-mono text-sm px-5 py-2.5 rounded-lg hover:border-accent hover:text-accent transition-all duration-300 self-start"
                >
                  Ver projeto
                  <ExternalIcon />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Other projects (2 columns) */}
        <div className="grid sm:grid-cols-2 gap-5">
          {projects.filter((p) => !p.featured).map((project) => (
            <div
              key={project.number}
              className="animate-on-scroll group relative border border-border rounded-xl p-6 hover:border-accent/30 transition-all duration-400 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <span className="font-mono text-accent/40 text-xs">{project.number}</span>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors duration-200"
                  >
                    <ExternalIcon />
                  </a>
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-accent transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="font-body text-muted text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs text-muted/60 border border-border px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
