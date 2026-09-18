export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-blue-950/40 mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-[var(--font-space)] text-xl font-bold tracking-widest text-white">
          CELESTIAL<span className="text-blue-400">X</span>
        </div>

        <div className="flex flex-col items-center gap-1 text-center">
          <p className="text-slate-400 text-sm tracking-wide italic">
            &ldquo;Keep looking beyond.&rdquo;
          </p>
          <p className="text-slate-600 text-xs tracking-widest uppercase">
            Built around curiosity
          </p>
        </div>

        <div className="text-slate-600 text-xs tracking-widest uppercase">
          celestialx.space
        </div>
      </div>
    </footer>
  );
}
