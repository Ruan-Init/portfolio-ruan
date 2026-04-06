"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SendIcon, CheckCircleIcon, AlertCircleIcon } from "./icons";

export default function Contact() {
  const ref = useScrollReveal({ delay: 120, threshold: 0.15 });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Nome é obrigatório";
    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Mensagem é obrigatória";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Mínimo 10 caracteres";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const isExternal = (href: string) => href.startsWith("http");

  const links = [
    {
      label: "LinkedIn",
      handle: "/in/ruanespindola",
      href: "https://www.linkedin.com/in/ruanespindola/",
      icon: <SendIcon />,
    },
    {
      label: "GitHub",
      handle: "Ruan-Init",
      href: "https://github.com/Ruan-Init",
      icon: <SendIcon />,
    },
    {
      label: "Email",
      handle: "ruan.espindola17@gmail.com",
      href: "mailto:ruan.espindola17@gmail.com",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
    {
      label: "WhatsApp",
      handle: "(61) 99640-1764",
      href: "https://wa.me/5561996401764",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
    },
  ];

  const statusMessages = {
    sent: { text: "Mensagem enviada com sucesso! Responderemos em breve.", type: "success" as const },
    error: { text: "Erro ao enviar. Tente novamente ou envie diretamente pelo email.", type: "error" as const },
  };

  return (
    <section id="contato" ref={ref} className="relative py-32 px-6">
      {" "}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center bottom, #64FFDA06 0%, transparent 50%)",
        }}
        aria-hidden="true"/>

      {" "}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="animate-on-scroll flex items-center gap-4 mb-16">
          <span className="h-px w-8 bg-accent" />
          <span className="font-mono text-accent text-sm">04.</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Contato
          </h2>
          <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent max-w-xs" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-10">
          {/* Left: CTA text */}
          <div className="lg:col-span-2">
            <h3 className="animate-on-scroll font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
              Vamos construir
              <br />
              <span className="gradient-text">algo incrível?</span>
            </h3>
            <p className="animate-on-scroll font-body text-muted text-base lg:text-lg leading-relaxed mb-10">
              Estou disponível para projetos freelance, oportunidades de emprego
              ou simplesmente para trocar uma ideia sobre tecnologia. Me manda
              uma mensagem!
            </p>

            {/* Social links */}
            <div className="flex flex-wrap gap-3 mb-10">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(isExternal(link.href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="animate-on-scroll group relative flex items-center gap-3 border border-border rounded-xl px-4 py-3 hover:border-accent/30 transition-all duration-300 hover:shadow-[0_0_20px_#64FFDA11]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  <span className="relative z-10 text-muted/60 group-hover:text-accent transition-colors duration-300">
                    {link.icon}
                  </span>
                  <div className="relative z-10">
                    <p className="font-body text-light text-xs group-hover:text-accent transition-colors duration-300">
                      {link.handle}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} noValidate className="animate-on-scroll">
              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block font-mono text-xs text-muted/60 uppercase tracking-widest mb-2">
                    Nome
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    className={`w-full bg-surface/80 border font-body text-light rounded-lg px-4 py-3.5 text-sm transition-all duration-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30 placeholder:text-muted/30 ${
                      errors.name ? "border-red-500/50" : "border-border"
                    }`}
                    placeholder="Seu nome completo"
                    autoComplete="name"
                  />
                  {errors.name && (
                    <p className="mt-1.5 font-mono text-xs text-red-400 flex items-center gap-1.5">
                      <AlertCircleIcon className="w-3 h-3" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="form-email" className="block font-mono text-xs text-muted/60 uppercase tracking-widest mb-2">
                    Email
                  </label>
                  <input
                    id="form-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    className={`w-full bg-surface/80 border font-body text-light rounded-lg px-4 py-3.5 text-sm transition-all duration-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30 placeholder:text-muted/30 ${
                      errors.email ? "border-red-500/50" : "border-border"
                    }`}
                    placeholder="seu@email.com"
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p className="mt-1.5 font-mono text-xs text-red-400 flex items-center gap-1.5">
                      <AlertCircleIcon className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block font-mono text-xs text-muted/60 uppercase tracking-widest mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                    rows={5}
                    className={`w-full bg-surface/80 border font-body text-light rounded-lg px-4 py-3.5 text-sm transition-all duration-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30 placeholder:text-muted/30 resize-none ${
                      errors.message ? "border-red-500/50" : "border-border"
                    }`}
                    placeholder="Me conta sobre seu projeto, ideia ou proposta..."
                  />
                  {errors.message && (
                    <p className="mt-1.5 font-mono text-xs text-red-400 flex items-center gap-1.5">
                      <AlertCircleIcon className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Status messages */}
              {" "}
              {status === "sent" && statusMessages.sent && (
                <div className="mt-4 p-3 border border-green-500/30 rounded-lg bg-green-500/5 flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm">{statusMessages.sent.text}</span>
                </div>
              )}
              {status === "error" && statusMessages.error && (
                <div className="mt-4 p-3 border border-red-500/30 rounded-lg bg-red-500/5 flex items-center gap-2">
                  <AlertCircleIcon className="w-4 h-4 text-red-400" />
                  <span className="text-red-400 text-sm">{statusMessages.error.text}</span>
                </div>
              )}

              {/* Submit */}
              {" "}
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-ripple inline-flex items-center gap-2.5 bg-accent text-bg font-display font-bold px-8 py-4 rounded-lg text-sm tracking-wide transition-all duration-300 hover:shadow-[0_0_40px_#64FFDA44] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                >
                  {" "}
                  {status === "sending" ? (
                    <>
                      <span className="animate-spin h-4 w-4 border-2 border-bg/40 border-t-bg rounded-full" aria-hidden="true" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar mensagem
                      <SendIcon className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
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
