import type { Metadata } from 'next';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata: Metadata = {
  title: 'My Universe — CelestialX',
  description: 'The personal philosophy of CelestialX — curiosity, exploration, stories, and the universe.',
};

const philosophyLines = [
  { text: 'Curiosity is my compass.', size: 'text-3xl md:text-5xl', weight: 'font-bold', color: 'text-white' },
  { text: 'Every story is another universe.', size: 'text-xl md:text-3xl', weight: 'font-medium', color: 'text-slate-300' },
  { text: 'Some questions are bigger than answers.', size: 'text-lg md:text-2xl', weight: 'font-normal', color: 'text-slate-400' },
  { text: 'There is always something new to discover.', size: 'text-xl md:text-3xl', weight: 'font-medium', color: 'text-slate-300' },
  { text: 'Create. Explore. Learn. Repeat.', size: 'text-2xl md:text-4xl', weight: 'font-semibold', color: 'gradient-text' },
  { text: 'The universe does not run out of things to say.', size: 'text-base md:text-xl', weight: 'font-normal', color: 'text-slate-500' },
  { text: 'Keep looking beyond.', size: 'text-3xl md:text-5xl', weight: 'font-bold', color: 'gradient-text-blue glow-text' },
];

const pillars = [
  {
    symbol: '∞',
    title: 'Endless Curiosity',
    body: 'The universe is not something to be finished. There are always more questions, more edges, more depths to explore. Curiosity is not a phase — it\'s the operating system.',
  },
  {
    symbol: '✦',
    title: 'Stories as Maps',
    body: 'Every story is a map of a different reality. Fiction isn\'t an escape from the world — it\'s a way of exploring versions of it that couldn\'t otherwise be visited.',
  },
  {
    symbol: '◎',
    title: 'Scale and Perspective',
    body: 'Space teaches perspective. The things that feel enormous are, in the scale of the universe, almost impossibly small. That\'s not discouraging — it\'s freeing.',
  },
  {
    symbol: '→',
    title: 'Forward Motion',
    body: 'Movement. Learning, creating, experimenting. Not in a rush — but always oriented toward something. The goal is direction, not destination.',
  },
];

export default function UniversePage() {
  return (
    <div className="page-enter pt-28 pb-24 overflow-hidden">

      {/* Atmospheric glows */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-800/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-blue-600/4 rounded-full blur-[140px]" />
      </div>

      {/* Hero */}
      <div className="relative max-w-5xl mx-auto px-6 md:px-10 mb-32">
        <div className="mb-20">
          <span className="text-[10px] tracking-[0.25em] uppercase text-blue-400/70 mb-4 block animate-fade-down">
            Personal Philosophy
          </span>
          <h1 className="font-[var(--font-space)] font-bold text-white leading-none mb-6 animate-fade-up"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}>
            My <span className="gradient-text">Universe</span>
          </h1>
          <p className="text-slate-500 max-w-lg animate-fade-up delay-200">
            Not a biography. Not a resume. A personal philosophy — the ideas and beliefs
            that sit at the center of CelestialX.
          </p>
          <div className="blue-divider mt-10 animate-fade-in delay-300" />
        </div>

        {/* Space image */}
        <RevealOnScroll>
          <div className="relative rounded-2xl overflow-hidden mb-20 border border-blue-900/20" style={{ height: '380px' }}>
            <img
              src="https://images.pexels.com/photos/8148340/pexels-photo-8148340.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Star-filled sky with nebula"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060810] via-[#060810]/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="font-[var(--font-space)] text-white text-lg md:text-2xl font-medium">
                &ldquo;Somewhere, something incredible is waiting to be known.&rdquo;
              </p>
              <p className="text-slate-500 text-sm mt-2 tracking-wider">The universe, always.</p>
            </div>
          </div>
        </RevealOnScroll>

        {/* Philosophy statements */}
        <div className="space-y-16 mb-32">
          {philosophyLines.map((line, i) => (
            <RevealOnScroll key={i} delay={0}>
              <div className={`font-[var(--font-space)] ${line.size} ${line.weight} ${line.color} leading-tight`}>
                {line.text}
              </div>
              {i < philosophyLines.length - 1 && (
                <div className="mt-4 h-px bg-gradient-to-r from-blue-900/30 to-transparent" />
              )}
            </RevealOnScroll>
          ))}
        </div>

        {/* Pillars */}
        <RevealOnScroll className="mb-20">
          <h2 className="font-[var(--font-space)] text-2xl md:text-3xl font-semibold text-white mb-10 text-center">
            The Pillars
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <RevealOnScroll key={p.title} delay={i * 80}>
                <div className="glass-card rounded-2xl p-8 text-center">
                  <div className="font-[var(--font-space)] text-4xl text-blue-400/60 mb-4">
                    {p.symbol}
                  </div>
                  <h3 className="font-[var(--font-space)] font-semibold text-white text-lg mb-3">
                    {p.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{p.body}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </RevealOnScroll>

        {/* Closing statement */}
        <RevealOnScroll>
          <div className="relative rounded-2xl border border-blue-800/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 to-transparent pointer-events-none" />
            <div className="relative p-10 md:p-16 text-center">
              <div className="font-[var(--font-space)] text-blue-400/30 text-7xl mb-6 select-none">✦</div>
              <p className="font-[var(--font-space)] text-2xl md:text-3xl font-semibold text-white mb-4 leading-tight">
                The universe is the invitation.
              </p>
              <p className="text-slate-400 max-w-lg mx-auto leading-relaxed">
                CelestialX is one person, in one city, on one planet — with a mind that keeps
                reaching further than that. Curiosity doesn&apos;t require permission.
                Exploration doesn&apos;t require a map. And the universe has no shortage of
                things worth understanding.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
