import Link from 'next/link';
import RevealOnScroll from '@/components/RevealOnScroll';
import {
  Telescope,
  Clapperboard,
  Sparkles,
  Cpu,
  MapPin,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';

const interests = [
  {
    icon: Telescope,
    title: 'Space & Astronomy',
    desc: 'A fascination with the universe, stars, planets, galaxies, and the cosmic mysteries that remain beautifully unanswered.',
    color: 'from-blue-900/30 to-slate-900/30',
    iconColor: 'text-blue-400',
  },
  {
    icon: Clapperboard,
    title: 'Movies',
    desc: 'An appreciation for cinematic worlds — the stories, characters, and ideas that leave a lasting mark long after the credits roll.',
    color: 'from-slate-900/40 to-blue-950/30',
    iconColor: 'text-blue-300',
  },
  {
    icon: Sparkles,
    title: 'Anime',
    desc: 'Imaginative worlds, compelling characters, and storytelling that sees the world through a completely different lens.',
    color: 'from-blue-950/30 to-slate-900/40',
    iconColor: 'text-blue-400',
  },
  {
    icon: Cpu,
    title: 'Technology & Digital Creativity',
    desc: 'Exploring what technology can do, experimenting with digital tools, and turning ideas into something tangible and creative.',
    color: 'from-slate-900/30 to-blue-900/20',
    iconColor: 'text-blue-300',
  },
];

export default function Home() {
  return (
    <div className="page-enter">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Atmospheric glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[200px] bg-blue-800/8 rounded-full blur-[100px]" />
        </div>

        {/* Orbit decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] orbit-ring opacity-20 pointer-events-none hidden lg:block" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] orbit-ring opacity-10 pointer-events-none hidden lg:block" style={{ animationDelay: '2s' }} aria-hidden="true" />

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Tag */}
          <div className="animate-fade-down inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-[10px] tracking-[0.2em] uppercase text-blue-300/80">
              celestialx.space
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="animate-fade-up font-[var(--font-space)] font-bold tracking-tight leading-none mb-6"
            style={{ fontSize: 'clamp(3.5rem, 12vw, 9rem)' }}
          >
            <span className="gradient-text glow-text">CELESTIALX</span>
          </h1>

          {/* Tagline */}
          <p
            className="animate-fade-up delay-200 font-[var(--font-space)] text-slate-400 tracking-widest uppercase mb-8"
            style={{ fontSize: 'clamp(0.65rem, 2vw, 0.95rem)', letterSpacing: '0.25em' }}
          >
            Beyond the Ordinary
          </p>

          {/* Description */}
          <p className="animate-fade-up delay-300 text-slate-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-12">
            A curious mind exploring technology, stories, creativity, and the universe beyond the ordinary.
          </p>

          {/* CTA */}
          <div className="animate-fade-up delay-400 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm tracking-wider uppercase px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
            >
              Enter the Journey
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/interests"
              className="inline-flex items-center gap-2 glass text-slate-300 hover:text-white font-medium text-sm tracking-wider uppercase px-7 py-3.5 rounded-full transition-all duration-300 hover:border-blue-500/40"
            >
              Explore My World
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in delay-800 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
          <span className="text-[9px] tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown size={14} className="animate-bounce" />
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="section-pad max-w-7xl mx-auto">
        <div className="blue-divider mb-20" />
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <RevealOnScroll>
            <span className="text-[10px] tracking-[0.25em] uppercase text-blue-400/70 mb-4 block">
              Hello, Universe
            </span>
            <h2 className="font-[var(--font-space)] text-3xl md:text-4xl font-semibold text-white leading-tight mb-6">
              A mind always <br />
              <span className="gradient-text-blue">reaching further.</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-5">
              CelestialX is a curious, creative teenager currently based in Bangalore, India —
              fascinated by space and astronomy, drawn to technology, stories, and the art of
              exploring ideas that most people walk right past.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              Whether it&apos;s the mechanics of a distant galaxy, the plot of a memorable film, or
              a new piece of technology to experiment with — curiosity is the constant thread running
              through everything.
            </p>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm tracking-wider uppercase transition-colors"
            >
              More About Me
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </RevealOnScroll>

          <RevealOnScroll delay={150} className="space-y-4">
            {[
              { label: 'Based in', value: 'Bangalore, India' },
              { label: 'Driven by', value: 'Curiosity & Exploration' },
              { label: 'Fascinated by', value: 'Space, Technology, Stories' },
              { label: 'Always', value: 'Learning → Exploring → Creating' },
            ].map((item) => (
              <div key={item.label} className="glass-card rounded-xl px-6 py-4 flex items-center justify-between">
                <span className="text-slate-500 text-sm tracking-wider uppercase text-xs">{item.label}</span>
                <span className="text-slate-200 text-sm font-medium">{item.value}</span>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      {/* ── INTERESTS PREVIEW ── */}
      <section className="section-pad max-w-7xl mx-auto">
        <div className="blue-divider mb-20" />
        <RevealOnScroll className="text-center mb-16">
          <span className="text-[10px] tracking-[0.25em] uppercase text-blue-400/70 mb-3 block">
            What I Explore
          </span>
          <h2 className="font-[var(--font-space)] text-3xl md:text-4xl font-semibold text-white">
            Interests & Passions
          </h2>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {interests.map((item, i) => {
            const Icon = item.icon;
            return (
              <RevealOnScroll key={item.title} delay={i * 80}>
                <Link href="/interests" className="block h-full">
                  <div className={`glass-card rounded-2xl p-6 h-full bg-gradient-to-br ${item.color} flex flex-col gap-4`}>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-blue-950/50 ${item.iconColor}`}>
                      <Icon size={20} />
                    </div>
                    <h3 className="font-[var(--font-space)] font-semibold text-white text-base leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed flex-1">{item.desc}</p>
                    <span className="text-blue-400/60 text-xs tracking-widest uppercase flex items-center gap-1 group-hover:text-blue-400">
                      Explore <ArrowRight size={10} />
                    </span>
                  </div>
                </Link>
              </RevealOnScroll>
            );
          })}
        </div>
      </section>

      {/* ── TEENAGE IDENTITY ── */}
      <section className="section-pad max-w-7xl mx-auto">
        <div className="blue-divider mb-20" />
        <div className="max-w-3xl mx-auto">
          <RevealOnScroll className="text-center mb-12">
            <span className="text-[10px] tracking-[0.25em] uppercase text-blue-400/70 mb-3 block">
              The Chapter Right Now
            </span>
            <h2 className="font-[var(--font-space)] text-3xl md:text-4xl font-semibold text-white">
              Still figuring it out.
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={100} className="glass-card rounded-2xl p-8 md:p-12">
            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6">
              Being a teenager means being right in the middle of discovering what actually matters.
              New interests appear. Old assumptions dissolve. Some things click instantly;
              others take much longer.
            </p>
            <p className="text-slate-400 leading-relaxed mb-6">
              Technology is fascinating because it opens up what&apos;s possible. Space is humbling
              because it puts everything in perspective. Movies and anime offer windows into worlds
              that couldn&apos;t exist anywhere else. And every now and then, something completely
              new comes along that shifts what you thought you knew.
            </p>
            <p className="text-slate-500 leading-relaxed mb-10">
              This is the part of the story where everything is still forming — and that&apos;s
              exactly what makes it interesting.
            </p>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 glass text-slate-300 hover:text-white font-medium text-sm tracking-wider uppercase px-6 py-3 rounded-full transition-all duration-300"
            >
              More About Me
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── LOCATION ── */}
      <section className="pb-24 px-6">
        <RevealOnScroll className="flex items-center justify-center gap-2 text-slate-600">
          <MapPin size={13} />
          <span className="text-xs tracking-widest uppercase">Currently based in Bangalore, India</span>
        </RevealOnScroll>
      </section>
    </div>
  );
}
