export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6 hidden sm:block">
      <div className="max-w-6xl mx-auto flex flex-row items-center justify-between gap-4">
        <p className="font-mono text-muted text-xs">
          Desenvolvido por{" "}
          <span className="text-gold">Ruan Espindola</span> — Brasília, DF
        </p>
        <p className="font-mono text-muted/30 text-xs">
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}