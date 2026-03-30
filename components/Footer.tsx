export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-muted text-xs">
          Desenvolvido por{" "}
          <span className="text-accent">Ruan Espindola</span> — Brasília, DF
        </p>
        <p className="font-mono text-muted/40 text-xs">
          Built with Next.js 16 · Three.js · Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
