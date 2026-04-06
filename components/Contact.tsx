"use client";

import { useState } from "react";
import { SendIcon, CheckCircleIcon, AlertCircleIcon } from "./icons";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Nome é obrigatório";
    if (!formData.email.trim()) newErrors.email = "Email é obrigatório";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Email inválido";
    if (!formData.message.trim()) newErrors.message = "Mensagem é obrigatória";
    else if (formData.message.trim().length < 10) newErrors.message = "Mínimo 10 caracteres";
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
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contato" className="relative py-32 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end gap-4 mb-20">
          <span className="font-mono text-gold/50 text-xs tracking-[0.3em] uppercase">04</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white">
            Contato
          </h2>
          <p className="font-body text-muted text-sm sm:text-base max-w-md sm:ml-8 sm:border-l sm:border-white/10 sm:pl-8">
            Tem um projeto em mente? Vamos conversar.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16 lg:gap-10">
          {/* Left */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white leading-tight mb-6">
              Vamos criar algo{" "}
              <span className="gradient-text">incrível.</span>
            </h3>
            <p className="font-body text-muted text-base leading-relaxed mb-10">
              Disponível para freelance, oportunidades ou papo sobre tecnologia.
            </p>

            {/* Contact info */}
            <div className="space-y-4">
              {[
                { label: "Email", value: "ruan.espindola17@gmail.com", href: "mailto:ruan.espindola17@gmail.com" },
                { label: "LinkedIn", value: "/in/ruanespindola", href: "https://www.linkedin.com/in/ruanespindola/" },
                { label: "GitHub", value: "Ruan-Init", href: "https://github.com/Ruan-Init" },
                { label: "WhatsApp", value: "(61) 99640-1764", href: "https://wa.me/5561996401764" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center justify-between py-3 border-b border-white/5 hover:border-gold/20 transition-all duration-300"
                >
                  <div>
                    <p className="font-mono text-[10px] text-muted/40 uppercase tracking-[0.2em] mb-1">
                      {link.label}
                    </p>
                    <p className="font-body text-light text-sm group-hover:text-gold transition-colors duration-300">
                      {link.value}
                    </p>
                  </div>
                  <svg className="w-3.5 h-3.5 text-muted/20 group-hover:text-gold/50 transition-all duration-300 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label htmlFor="name" className="block font-mono text-[10px] text-muted/40 uppercase tracking-[0.2em] mb-2">
                  Nome
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                  className={`w-full bg-white/[0.02] border font-body text-white rounded-lg px-4 py-3.5 text-sm transition-all duration-200 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/20 placeholder:text-muted/20 ${
                    errors.name ? "border-red-500/30" : "border-white/5"
                  }`}
                  placeholder="Seu nome"
                  autoComplete="name"
                />
                {errors.name && <p className="mt-1.5 font-mono text-xs text-red-400">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block font-mono text-[10px] text-muted/40 uppercase tracking-[0.2em] mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                  className={`w-full bg-white/[0.02] border font-body text-white rounded-lg px-4 py-3.5 text-sm transition-all duration-200 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/20 placeholder:text-muted/20 ${
                    errors.email ? "border-red-500/30" : "border-white/5"
                  }`}
                  placeholder="seu@email.com"
                  autoComplete="email"
                />
                {errors.email && <p className="mt-1.5 font-mono text-xs text-red-400">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-[10px] text-muted/40 uppercase tracking-[0.2em] mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                  rows={5}
                  className={`w-full bg-white/[0.02] border font-body text-white rounded-lg px-4 py-3.5 text-sm transition-all duration-200 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/20 placeholder:text-muted/20 resize-none ${
                    errors.message ? "border-red-500/30" : "border-white/5"
                  }`}
                  placeholder="Me conta sobre seu projeto..."
                />
                {errors.message && <p className="mt-1.5 font-mono text-xs text-red-400">{errors.message}</p>}
              </div>

              {status === "sent" && (
                <div className="p-3 border border-green-500/20 rounded-lg bg-green-500/5 flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm">Mensagem enviada! Responderemos em breve.</span>
                </div>
              )}
              {status === "error" && (
                <div className="p-3 border border-red-500/20 rounded-lg bg-red-500/5 flex items-center gap-2">
                  <AlertCircleIcon className="w-4 h-4 text-red-400" />
                  <span className="text-red-400 text-sm">Erro ao enviar. Tente novamente.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-2 inline-flex items-center gap-2.5 bg-gold text-bg font-display font-bold px-8 py-4 rounded-lg text-sm tracking-wide transition-all duration-300 hover:bg-gold/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <span className="animate-spin h-4 w-4 border-2 border-bg/30 border-t-bg rounded-full" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar mensagem
                    <SendIcon className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}