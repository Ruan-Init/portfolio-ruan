"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    tag: "Destaque",
    name: "Kainde Tecnologia",
    description:
      "Site institucional bilíngue com serviços de TI, cloud computing e DevOps.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    url: "https://www.kainde.com.br",
  },
  {
    tag: "Destaque",
    name: "PMS Enterprise",
    description:
      "Dashboard de gerenciamento empresarial com gestão de projetos em tempo real.",
    tech: ["React", "Next.js", "Dashboard"],
    url: "https://pms-enterprise-v2.vercel.app/dashboard",
  },
  {
    tag: null,
    name: "Finance Dashboard",
    description: "Painel financeiro interativo com gráficos e métricas.",
    tech: ["React", "TypeScript", "Charts"],
    url: "https://finance-dashboard-ldp5mw3vj-ruan-inits-projects.vercel.app",
  },
  {
    tag: null,
    name: "DataLens",
    description: "Plataforma de análise e visualização de dados.",
    tech: ["Next.js", "Data Viz", "React"],
    url: "https://datalens-next-zsed.vercel.app",
  },
  {
    tag: null,
    name: "E-commerce Platform",
    description:
      "Plataforma de e-commerce fullstack com carrinho inteligente e checkout seguro.",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    url: "#",
  },
  {
    tag: null,
    name: "Task Manager Pro",
    description:
      "Aplicação de gerenciamento de tarefas com sincronização em tempo real.",
    tech: ["React", "Firebase", "Tailwind"],
    url: "#",
  },
  {
    tag: null,
    name: "Weather App",
    description:
      "Aplicativo de previsão do tempo com localização automática e histórico.",
    tech: ["React", "API REST", "Charts"],
    url: "#",
  },
  {
    tag: null,
    name: "Social Network",
    description:
      "Rede social com feed, mensagens diretas e sistema de notificações.",
    tech: ["React", "Node.js", "MongoDB"],
    url: "#",
  },
  {
    tag: null,
    name: "Blog Platform",
    description:
      "Plataforma de blogging com editor rico, comentários e sistema de tags.",
    tech: ["Next.js", "MDX", "Tailwind"],
    url: "#",
  },
  {
    tag: null,
    name: "Video Streaming",
    description:
      "Plataforma de streaming de vídeos com reprodutor customizado.",
    tech: ["React", "HLS", "AWS S3"],
    url: "#",
  },
  {
    tag: null,
    name: "Music Player",
    description:
      "Reprodutor de música com playlist, busca avançada e recomendações.",
    tech: ["React", "Web Audio API", "Tailwind"],
    url: "#",
  },
  {
    tag: null,
    name: "CRM System",
    description:
      "Sistema CRM para pequenas empresas com gestão de leads e clientes.",
    tech: ["Next.js", "PostgreSQL", "TypeScript"],
    url: "#",
  },
  {
    tag: null,
    name: "Analytics Dashboard",
    description:
      "Painel de análise com gráficos em tempo real e relatórios personalizáveis.",
    tech: ["React", "D3.js", "Node.js"],
    url: "#",
  },
  {
    tag: null,
    name: "Fitness Tracker",
    description: "Aplicativo para rastreamento de exercícios e meta de saúde.",
    tech: ["React Native", "Firebase", "Redux"],
    url: "#",
  },
  {
    tag: null,
    name: "Hotel Booking",
    description:
      "Sistema de reserva de hotéis com mapa interativo e processamento de pagamento.",
    tech: ["Next.js", "Google Maps", "Stripe"],
    url: "#",
  },
  {
    tag: null,
    name: "Recipe App",
    description:
      "Aplicativo de receitas com filtros, avaliações e lista de compras.",
    tech: ["React", "Firebase", "Tailwind"],
    url: "#",
  },
  {
    tag: null,
    name: "Real Estate Portal",
    description:
      "Portal imobiliário com busca avançada, tours virtuais e agendamento.",
    tech: ["Next.js", "Three.js", "PostgreSQL"],
    url: "#",
  },
  {
    tag: null,
    name: "Learning Management",
    description:
      "Plataforma de aprendizado online com vídeos, quizzes e certificados.",
    tech: ["Next.js", "Stripe", "AWS Lambda"],
    url: "#",
  },
  {
    tag: null,
    name: "Event Manager",
    description:
      "Gerenciador de eventos com tickets, check-in e análise de presença.",
    tech: ["React", "Node.js", "MongoDB"],
    url: "#",
  },
  {
    tag: null,
    name: "Code Snippet Share",
    description:
      "Plataforma para compartilhar snippets de código com sintaxe highlighted.",
    tech: ["Next.js", "Prisma", "TypeScript"],
    url: "#",
  },
  {
    tag: null,
    name: "Chat Application",
    description:
      "Aplicação de chat em tempo real com salas, mensagens e multimedia.",
    tech: ["React", "Socket.io", "Node.js"],
    url: "#",
  },
  {
    tag: null,
    name: "Portfolio Builder",
    description: "Ferramenta para criar portfólios profissionais sem código.",
    tech: ["Next.js", "Tailwind", "Vercel"],
    url: "#",
  },
  {
    tag: null,
    name: "Expense Tracker",
    description:
      "Aplicativo de controle de despesas com gráficos e orçamento mensal.",
    tech: ["React", "LocalStorage", "Chart.js"],
    url: "#",
  },
  {
    tag: null,
    name: "API Documentation",
    description:
      "Documentação interativa de API com sandbox integrado e exemplos.",
    tech: ["Next.js", "Swagger", "Tailwind"],
    url: "#",
  },
  {
    tag: null,
    name: "Marketplace",
    description:
      "Marketplace com sistema de vendedor, avaliações e sistema de pagamento.",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    url: "#",
  },
];

export default function Projects() {
  const ref = useScrollReveal({ delay: 100, threshold: 0.05 });

  return (
    <section
      id="projetos"
      ref={ref}
      className="relative py-32 px-6 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="animate-on-scroll flex flex-col sm:flex-row sm:items-end gap-4 mb-20">
          <span className="font-mono text-gold/50 text-xs tracking-[0.3em] uppercase">
            03
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white">
            Projetos
          </h2>
          <p className="font-body text-muted text-sm sm:text-base max-w-md sm:ml-8 sm:border-l sm:border-white/10 sm:pl-8">
            Trabalhos selecionados — cada projeto resolve desafios únicos.
          </p>
        </div>

        {/* Projects list */}
        <div className="space-y-1">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="animate-on-scroll group"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-8 border-b border-white/5 hover:border-gold/15 transition-all duration-400 group"
              >
                {/* Left */}
                <div className="flex items-center gap-6 sm:gap-10 min-w-0">
                  <span className="font-mono text-[10px] text-muted/30 shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-gold transition-colors duration-300 truncate">
                        {project.name}
                      </h3>
                      {project.tag && (
                        <span className="shrink-0 font-mono text-[9px] text-gold/60 border border-gold/20 uppercase tracking-wider px-2 py-0.5 rounded-full">
                          {project.tag}
                        </span>
                      )}
                    </div>
                    <p className="font-body text-muted text-sm truncate">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Right */}
                <div className="flex items-center gap-4 shrink-0">
                  <div className="hidden sm:flex gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] text-muted/40 px-2 py-0.5 border border-white/5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="text-muted/30 group-hover:text-gold/60 transition-colors duration-300">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
