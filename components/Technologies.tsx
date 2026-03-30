"use client";

import { useEffect, useRef } from "react";

const techs = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 94 },
    ],
  },
  {
    category: "Backend & Tools",
    items: [
      { name: "Node.js", level: 78 },
      { name: "Express", level: 75 },
      { name: "REST APIs", level: 85 },
      { name: "Git / GitHub", level: 90 },
    ],
  },
];

const badges = [
  "React", "Next.js", "TypeScript", "Tailwind CSS",
  "Node.js", "Express", "REST API", "Git",
  "HTML5", "CSS3", "JavaScript", "Figma",
  "Vercel", "PostgreSQL", "Prisma", "Docker",
];

export default function Technologies() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".animate-on-scroll").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="tecnologias" ref={ref} className="relative py-32 px-6">
      {/* Subtle background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, #64FFDA06 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="animate-on-scroll flex items-center gap-4 mb-16">
          <span className="font-mono text-accent text-sm">02.</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Tecnologias
          </h2>
          <span className="h-px flex-1 bg-border max-w-xs" />
        </div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {techs.map((group) => (
            <div key={group.category}>
              <h3 className="animate-on-scroll font-mono text-accent text-xs uppercase tracking-widest mb-6">
                {group.category}
              </h3>
              <div className="space-y-5">
                {group.items.map((item) => (
                  <div key={item.name} className="animate-on-scroll">
                    <div className="flex justify-between mb-1.5">
                      <span className="font-body text-light text-sm font-medium">
                        {item.name}
                      </span>
                      <span className="font-mono text-accent text-xs">
                        {item.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-border rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent to-[#7B9CF7] transition-all duration-1000"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div className="animate-on-scroll">
          <p className="font-mono text-muted text-xs uppercase tracking-widest mb-6">
            Ferramentas & Ecossistema
          </p>
          <div className="flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span
                key={badge}
                className="group font-mono text-xs text-muted border border-border px-3 py-1.5 rounded hover:border-accent hover:text-accent transition-all duration-200 cursor-default"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
