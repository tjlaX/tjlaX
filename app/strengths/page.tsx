import type { Metadata } from 'next';
import RevealOnScroll from '@/components/RevealOnScroll';
import {
  Search,
  Palette,
  Zap,
  Wind,
  Anchor,
  Compass,
  TrendingUp,
  Stars,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Strengths — CelestialX',
  description: 'The defining qualities of CelestialX — curiosity, creativity, persistence, and more.',
};

const strengths = [
  {
    icon: Search,
    title: 'Curious',
    color: 'border-blue-700/30 bg-blue-950/20',
    iconBg: 'bg-blue-900/40',
    iconColor: 'text-blue-400',
    headline: 'Asking questions is the start of everything.',
    body: 'CelestialX is naturally eager to explore, question, discover, and understand things beyond the obvious. Curiosity isn\'t something that has to be switched on — it\'s the default setting. New subjects, unfamiliar ideas, and questions without easy answers are genuinely interesting rather than unsettling.',
    quote: '"The most important thing is to not stop questioning."',
  },
  {
    icon: Palette,
    title: 'Creative',
    color: 'border-blue-800/25 bg-slate-950/30',
    iconBg: 'bg-blue-900/30',
    iconColor: 'text-blue-300',
    headline: 'Thinking differently, by default.',
    body: 'There is an enjoyment in imagining possibilities — approaching ideas from angles that aren\'t the most obvious, finding connections between things that don\'t initially seem related, and thinking about what could exist rather than just what already does.',
    quote: '"Creativity is the willingness to see what others overlook."',
  },
  {
    icon: Zap,
    title: 'Fast Learner',
    color: 'border-blue-700/30 bg-blue-950/20',
    iconBg: 'bg-blue-900/40',
    iconColor: 'text-blue-400',
    headline: 'Engagement accelerates everything.',
    body: 'When something genuinely captures the interest, the learning happens quickly and without much friction. This isn\'t about raw intelligence — it\'s about genuine engagement. The difference between studying a subject out of obligation and exploring it out of fascination is enormous.',
    quote: '"Interest is the most powerful accelerator."',
  },
  {
    icon: Wind,
    title: 'Adaptable',
    color: 'border-blue-800/25 bg-slate-950/30',
    iconBg: 'bg-blue-900/30',
    iconColor: 'text-blue-300',
    headline: 'Comfortable with the unfamiliar.',
    body: 'New situations, unfamiliar problems, and shifting circumstances are not obstacles — they\'re part of the process. CelestialX is comfortable operating in territory that isn\'t fully mapped and adjusting when something doesn\'t go as expected. Flexibility makes it possible to keep moving even when the path isn\'t clear.',
    quote: '"Uncertainty is not a problem — it\'s the condition of discovery."',
  },
  {
    icon: Anchor,
    title: 'Persistent',
    color: 'border-blue-700/30 bg-blue-950/20',
    iconBg: 'bg-blue-900/40',
    iconColor: 'text-blue-400',
    headline: 'Difficult means worth continuing.',
    body: 'When something becomes challenging, the instinct isn\'t to abandon it — it\'s to figure out where the difficulty is coming from and work through it. Persistence here isn\'t stubbornness; it\'s the recognition that the most interesting things usually require more than the first attempt.',
    quote: '"The obstacle is the path."',
  },
  {
    icon: Compass,
    title: 'Independent-Minded',
    color: 'border-blue-800/25 bg-slate-950/30',
    iconBg: 'bg-blue-900/30',
    iconColor: 'text-blue-300',
    headline: 'Charting the personal course.',
    body: 'CelestialX enjoys forming personal conclusions, exploring ideas independently, and creating an individual path rather than following a template. This doesn\'t mean ignoring other perspectives — it means engaging with them critically and arriving at positions through genuine thinking rather than default acceptance.',
    quote: '"Think for yourself — that\'s the only way forward."',
  },
  {
    icon: TrendingUp,
    title: 'Ambitious',
    color: 'border-blue-700/30 bg-blue-950/20',
    iconBg: 'bg-blue-900/40',
    iconColor: 'text-blue-400',
    headline: 'Always moving toward something more.',
    body: 'There is a genuine interest in growth — in improving, experimenting, and turning ideas into something meaningful. This ambition isn\'t about specific outcomes; it\'s about direction. Always moving toward a better version of something, whether that\'s a skill, a project, or an understanding.',
    quote: '"Better is always available."',
  },
  {
    icon: Stars,
    title: 'Imaginative',
    color: 'border-blue-800/25 bg-slate-950/30',
    iconBg: 'bg-blue-900/30',
    iconColor: 'text-blue-300',
    headline: 'Drawn to what could be.',
    body: 'Fictional worlds, storytelling, and creative possibilities have a particular appeal. Imagination isn\'t just about fantasy — it\'s about being able to conceive of things that don\'t yet exist, and that capacity is what makes creativity and innovation possible. CelestialX is drawn toward ideas, stories, and visions that push beyond everyday reality.',
    quote: '"Imagination is more important than knowledge."',
  },
];

export default function StrengthsPage() {
  return (
    <div className="page-enter pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="mb-20">
          <span className="text-[10px] tracking-[0.25em] uppercase text-blue-400/70 mb-4 block animate-fade-down">
            Core Qualities
          </span>
          <h1 className="font-[var(--font-space)] font-bold text-white leading-none mb-6 animate-fade-up"
            style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}>
            What Defines <span className="gradient-text">CelestialX</span>
          </h1>
          <p className="text-slate-500 max-w-lg animate-fade-up delay-200">
            Eight defining qualities — not a performance, not a list of metrics.
            Just the genuine characteristics that shape how CelestialX moves through the world.
          </p>
          <div className="blue-divider mt-10 animate-fade-in delay-300" />
        </div>

        {/* Atmospheric glow */}
        <div className="fixed top-60 right-0 w-[350px] h-[350px] bg-blue-600/3 rounded-full blur-[130px] pointer-events-none" aria-hidden="true" />

        {/* Strengths grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {strengths.map((item, i) => {
            const Icon = item.icon;
            return (
              <RevealOnScroll key={item.title} delay={Math.floor(i / 2) * 100}>
                <div className={`glass-card rounded-2xl p-7 border ${item.color} h-full flex flex-col gap-5`}>
                  {/* Icon + title */}
                  <div className="flex items-center gap-4">
                    <div className={`w-11 h-11 rounded-xl ${item.iconBg} flex items-center justify-center ${item.iconColor} shrink-0`}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <h2 className="font-[var(--font-space)] font-bold text-white text-xl">
                        {item.title}
                      </h2>
                      <p className="text-blue-400/60 text-xs mt-0.5 italic">{item.headline}</p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-blue-950/60" />

                  {/* Body */}
                  <p className="text-slate-400 text-sm leading-relaxed flex-1">{item.body}</p>

                  {/* Quote */}
                  <p className="text-slate-600 text-xs italic border-l-2 border-blue-800/40 pl-3">
                    {item.quote}
                  </p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Bottom note */}
        <RevealOnScroll className="mt-20 text-center">
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-slate-400 leading-relaxed">
              These aren&apos;t presented as achievements or credentials — they&apos;re the qualities
              that are genuinely present in how CelestialX approaches things. A curious mind,
              always moving. Always learning. Always looking for what&apos;s beyond the edge
              of the known.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
