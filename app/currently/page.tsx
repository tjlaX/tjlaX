import type { Metadata } from 'next';
import RevealOnScroll from '@/components/RevealOnScroll';
import {
  BookOpen,
  Telescope,
  Cpu,
  Clapperboard,
  Sparkles,
  Lightbulb,
  Compass,
  Star,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Currently — CelestialX',
  description: 'What CelestialX is up to right now — exploring, learning, discovering.',
};

const currentItems = [
  {
    icon: Compass,
    label: 'Exploring',
    body: 'New interests as they surface — following curiosity into unfamiliar territory and seeing where it leads.',
    color: 'text-blue-400',
    bg: 'bg-blue-950/30',
  },
  {
    icon: BookOpen,
    label: 'Learning',
    body: 'Subjects that have captured genuine attention — going deep rather than skimming the surface.',
    color: 'text-blue-300',
    bg: 'bg-slate-950/40',
  },
  {
    icon: Lightbulb,
    label: 'Experimenting',
    body: 'Trying things out — digital tools, creative ideas, new approaches — to see what actually works.',
    color: 'text-blue-400',
    bg: 'bg-blue-950/30',
  },
  {
    icon: Telescope,
    label: 'Looking at the Stars',
    body: 'Keeping up with space and astronomy — new discoveries, old questions, and the vast amount we still don\'t know.',
    color: 'text-blue-300',
    bg: 'bg-slate-950/40',
  },
  {
    icon: Clapperboard,
    label: 'Watching',
    body: 'Movies and anime that are worth the time — stories with something to say, worlds worth entering.',
    color: 'text-blue-400',
    bg: 'bg-blue-950/30',
  },
  {
    icon: Cpu,
    label: 'Discovering',
    body: 'What technology can do, what tools exist, and what becomes possible when you start putting things together.',
    color: 'text-blue-300',
    bg: 'bg-slate-950/40',
  },
  {
    icon: Sparkles,
    label: 'Creating',
    body: 'Turning ideas and curiosity into something tangible — digital creativity as a form of thinking out loud.',
    color: 'text-blue-400',
    bg: 'bg-blue-950/30',
  },
  {
    icon: Star,
    label: 'Figuring It Out',
    body: 'The chapter of being a teenager — interests forming, perspectives shifting, the future still wide open.',
    color: 'text-blue-300',
    bg: 'bg-slate-950/40',
  },
];

export default function CurrentlyPage() {
  return (
    <div className="page-enter pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="mb-20">
          <span className="text-[10px] tracking-[0.25em] uppercase text-blue-400/70 mb-4 block animate-fade-down">
            Right Now
          </span>
          <h1 className="font-[var(--font-space)] font-bold text-white leading-none mb-6 animate-fade-up"
            style={{ fontSize: 'clamp(3rem, 9vw, 7rem)' }}>
            <span className="gradient-text">Currently</span>
          </h1>
          <p className="text-slate-500 max-w-lg animate-fade-up delay-200 leading-relaxed">
            A snapshot of what&apos;s happening in the universe of CelestialX —
            not a plan, not a resume, just an honest look at the current chapter.
          </p>
          <div className="blue-divider mt-10 animate-fade-in delay-300" />
        </div>

        {/* Atmospheric glow */}
        <div className="fixed bottom-1/4 left-1/3 w-[400px] h-[300px] bg-blue-700/4 rounded-full blur-[150px] pointer-events-none" aria-hidden="true" />

        {/* Status badge */}
        <RevealOnScroll className="mb-16">
          <div className="inline-flex items-center gap-3 glass rounded-full px-5 py-2.5">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-slate-300 text-sm tracking-wider">Active · Exploring · Open</span>
          </div>
        </RevealOnScroll>

        {/* Currently items */}
        <div className="grid md:grid-cols-2 gap-5 mb-20">
          {currentItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <RevealOnScroll key={item.label} delay={Math.floor(i / 2) * 80}>
                <div className={`glass-card rounded-2xl p-6 border border-blue-950/30 ${item.bg} flex gap-5`}>
                  <div className={`mt-0.5 shrink-0 ${item.color}`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-[var(--font-space)] font-semibold text-white mb-2">
                      {item.label}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        <div className="blue-divider mb-20" />

        {/* Open-ended note */}
        <RevealOnScroll>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-[var(--font-space)] text-2xl md:text-3xl font-semibold text-white mb-6 leading-tight">
                This chapter is still <br />
                <span className="gradient-text-blue">being written.</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-5">
                There is no finished version of CelestialX — just the current one,
                always in the process of discovering, adjusting, and moving forward.
              </p>
              <p className="text-slate-500 leading-relaxed">
                What comes next isn&apos;t fixed. The interests might shift. New subjects
                will appear. The only constant is the curiosity — and wherever that leads,
                that&apos;s where CelestialX is headed.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { phrase: 'Learning → Exploring', sub: 'The cycle keeps going.' },
                { phrase: 'Experimenting → Creating', sub: 'Ideas into existence.' },
                { phrase: 'Improving → Reaching', sub: 'Never quite done.' },
              ].map((row) => (
                <div
                  key={row.phrase}
                  className="glass-card rounded-xl px-6 py-5"
                >
                  <div className="font-[var(--font-space)] font-semibold text-blue-300 text-sm tracking-wide mb-0.5">
                    {row.phrase}
                  </div>
                  <div className="text-slate-600 text-xs">{row.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Final quote */}
        <RevealOnScroll className="mt-24">
          <div className="text-center">
            <p className="font-[var(--font-space)] text-slate-600 text-xs tracking-[0.2em] uppercase mb-3">
              The operating principle
            </p>
            <p className="font-[var(--font-space)] text-2xl md:text-3xl font-medium gradient-text">
              &ldquo;Look beyond the ordinary. Stay curious. Keep exploring.&rdquo;
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
