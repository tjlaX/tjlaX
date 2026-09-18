import type { Metadata } from 'next';
import Link from 'next/link';
import RevealOnScroll from '@/components/RevealOnScroll';
import { ArrowRight, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About — CelestialX',
  description: 'The complete introduction to CelestialX — a curious, creative teenager from Bangalore, India.',
};

const traits = [
  { label: 'Curious', short: 'Asking why is never enough.' },
  { label: 'Creative', short: 'Ideas are the starting point.' },
  { label: 'Ambitious', short: 'Growth, always.' },
  { label: 'Independent', short: 'Thinking for myself.' },
  { label: 'Imaginative', short: 'Fictional worlds feel real.' },
  { label: 'Persistent', short: 'Difficult is interesting.' },
];

export default function AboutPage() {
  return (
    <div className="page-enter pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="mb-20">
          <span className="text-[10px] tracking-[0.25em] uppercase text-blue-400/70 mb-4 block animate-fade-down">
            The Person Behind The Name
          </span>
          <h1 className="font-[var(--font-space)] font-bold text-white leading-none mb-6 animate-fade-up"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}>
            About <span className="gradient-text">CelestialX</span>
          </h1>
          <div className="blue-divider animate-fade-in delay-200" />
        </div>

        {/* Atmospheric glow */}
        <div className="fixed top-32 right-0 w-[400px] h-[400px] bg-blue-700/4 rounded-full blur-[150px] pointer-events-none" aria-hidden="true" />

        {/* Main intro */}
        <div className="grid md:grid-cols-5 gap-12 mb-20">
          <RevealOnScroll className="md:col-span-3 space-y-6">
            <p className="text-slate-200 text-lg md:text-xl leading-relaxed">
              CelestialX is a curious, creative, and independently-minded teenager currently based
              in Bangalore, India — someone who finds the world far more interesting when you look
              a little closer and question what&apos;s actually going on beneath the surface.
            </p>
            <p className="text-slate-400 leading-relaxed">
              The curiosity comes first. It&apos;s not something that was taught or deliberately
              developed — it&apos;s just the default mode. New ideas, unfamiliar subjects, strange
              questions — these are genuinely interesting rather than overwhelming.
              That curiosity is what pulls CelestialX toward technology, toward space,
              toward stories, and toward creative experimentation.
            </p>
            <p className="text-slate-400 leading-relaxed">
              There&apos;s a particular fascination with astronomy and space — not just the
              science of it, but the sheer scale and the way it reframes everything.
              Standing under a star-filled sky and realizing how little we actually know
              is both humbling and energizing.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Technology is another territory of genuine interest — not because it&apos;s
              practical, but because it&apos;s one of the most powerful tools for turning
              an idea into something real. Digital creativity sits at the intersection of
              imagination and possibility.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={150} className="md:col-span-2 space-y-4">
            <div className="glass-card rounded-2xl p-6 space-y-5">
              <h3 className="font-[var(--font-space)] text-xs tracking-widest uppercase text-blue-400/70">
                Quick Profile
              </h3>
              <div className="space-y-4 divide-y divide-blue-950/40">
                {[
                  { k: 'Identity', v: 'CelestialX' },
                  { k: 'Location', v: 'Bangalore, India' },
                  { k: 'Focused on', v: 'Learning & Creating' },
                  { k: 'Interests', v: 'Space · Tech · Movies · Anime' },
                  { k: 'Mode', v: 'Exploring' },
                ].map(({ k, v }) => (
                  <div key={k} className="pt-4 first:pt-0 flex flex-col gap-0.5">
                    <span className="text-slate-600 text-xs tracking-widest uppercase">{k}</span>
                    <span className="text-slate-200 text-sm">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-600 px-2">
              <MapPin size={12} />
              <span className="text-xs tracking-wider">Currently based in Bangalore, India</span>
            </div>
          </RevealOnScroll>
        </div>

        <div className="blue-divider mb-20" />

        {/* Learning and exploration */}
        <RevealOnScroll className="mb-20">
          <h2 className="font-[var(--font-space)] text-2xl md:text-3xl font-semibold text-white mb-8">
            The Way of Learning
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                step: '01',
                title: 'Curiosity',
                body: 'Something catches the attention. It might be a question without a clear answer, a subject that barely anyone talks about, or a technology that seems to do something impossible. The interest arrives before the understanding.',
              },
              {
                step: '02',
                title: 'Exploration',
                body: 'Following the thread wherever it leads. Reading, experimenting, watching, researching. The process of learning something genuinely interesting doesn\'t feel like effort — it feels like discovery.',
              },
              {
                step: '03',
                title: 'Experimentation',
                body: 'The best way to understand something is to try doing it. Whether it\'s a technology, a creative idea, or a new way of thinking about something — experimentation turns theory into experience.',
              },
              {
                step: '04',
                title: 'Creation',
                body: 'Taking what\'s been learned and making something out of it. This is where curiosity becomes something visible — something that didn\'t exist before.',
              },
            ].map((item) => (
              <div key={item.step} className="glass-card rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="font-[var(--font-space)] text-blue-500/40 text-3xl font-bold leading-none mt-1">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-[var(--font-space)] font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <div className="blue-divider mb-20" />

        {/* Traits */}
        <RevealOnScroll className="mb-20">
          <h2 className="font-[var(--font-space)] text-2xl md:text-3xl font-semibold text-white mb-8">
            At a Glance
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {traits.map((t, i) => (
              <RevealOnScroll key={t.label} delay={i * 70}>
                <div className="glass-card rounded-xl p-5 text-center">
                  <div className="font-[var(--font-space)] font-semibold text-white mb-1">
                    {t.label}
                  </div>
                  <div className="text-slate-500 text-xs italic">{t.short}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </RevealOnScroll>

        {/* CTA */}
        <RevealOnScroll className="text-center">
          <p className="text-slate-500 text-sm mb-6">
            Discover more about what drives CelestialX.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/interests"
              className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm tracking-wider uppercase px-6 py-3 rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]">
              My Interests
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/strengths"
              className="group inline-flex items-center gap-2 glass text-slate-300 hover:text-white font-medium text-sm tracking-wider uppercase px-6 py-3 rounded-full transition-all duration-300">
              My Strengths
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
