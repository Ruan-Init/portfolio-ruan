"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const techs = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5 / CSS3"] },
  { category: "Backend", items: ["Node.js", "Express", "REST APIs", "PostgreSQL", "Prisma"] },
  { category: "Dev & Tools", items: ["Git / GitHub", "Docker", "Vercel", "Figma", "VS Code"] },
];

export default function Technologies() {
  const ref = useScrollReveal({ delay: 80, threshold: 0.1 });
  const ref2 = useScrollReveal({ delay: 100, threshold: 0.1 });

  return (
    <section id="tecnologias" ref={ref} className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="animate-on-scroll flex flex-col sm:flex-row sm:items-end gap-4 mb-20">
          <span className="font-mono text-gold/50 text-xs tracking-[0.3em] uppercase">02</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white">
            Stack
          </h2>
          <p className="font-body text-muted text-sm sm:text-base max-w-md sm:ml-8 sm:border-l sm:border-white/10 sm:pl-8">
            As ferramentas que uso para transformar ideias em produto.
          </p>
        </div>

        {/* Tech grid */}
        <div ref={ref2} className="grid md:grid-cols-3 gap-6 md:gap-8">
          {techs.map((group) => (
            <div
              key={group.category}
              className="animate-on-scroll group border border-white/5 rounded-2xl p-8 hover:border-gold/15 transition-all duration-500 hover:bg-white/[0.01]"
            >
              <h3 className="font-mono text-[10px] text-gold/40 uppercase tracking-[0.3em] mb-8">
                {group.category}
              </h3>

              <div className="space-y-4">
                {group.items.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center justify-between group/item"
                  >
                    <span className="font-body text-light group-hover/item:text-white transition-colors duration-200 text-sm">
                      {tech}
                    </span>
                    <div className="w-12 h-px bg-white/5 group-hover/item:bg-gold/30 transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="mt-24 overflow-hidden" aria-hidden="true">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <span key={i} className="flex items-center gap-6 mr-6">
                {["React", "Next.js", "TypeScript", "Tailwind", "Node.js", "Prisma", "PostgreSQL", "Docker", "Git"].map((t, j) => (
                  <span key={j} className="font-mono text-xs text-muted/20">{t}</span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}