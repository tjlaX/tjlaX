import type { Metadata } from 'next';
import RevealOnScroll from '@/components/RevealOnScroll';
import { Telescope, Cpu, Clapperboard, Sparkles, BookOpen, Wand2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Interests — CelestialX',
  description: 'What CelestialX is genuinely into — space, technology, movies, anime, storytelling, and digital creativity.',
};

const sections = [
  {
    id: 'space',
    icon: Telescope,
    label: '01',
    title: 'Space & Astronomy',
    accent: 'from-blue-900/25 to-transparent',
    body: [
      'Space is the ultimate reminder that everything is bigger than it appears. Stars that look like points of light from Earth are burning systems hundreds of times larger than the Sun. Galaxies containing billions of stars sit so far away that their light takes millions of years to reach us. Black holes bend reality itself.',
      'The fascination isn\'t just scientific — it\'s philosophical. Space raises questions that don\'t have clean answers: What exists beyond the observable universe? Are we the only ones asking these questions? How did all of this begin, and what does it mean that it exists at all?',
      'Astronomy also provides a sense of scale that\'s hard to find anywhere else. Whenever things feel large or overwhelming, space is a reminder of the actual size of things — which is simultaneously humbling and freeing.',
      'Galaxies, nebulae, exoplanets, the mechanics of time and light — these are subjects worth exploring not because they\'re useful, but because they\'re extraordinary.',
    ],
    tags: ['Astronomy', 'Cosmology', 'Stars', 'Galaxies', 'Black Holes', 'The Unknown'],
  },
  {
    id: 'tech',
    icon: Cpu,
    label: '02',
    title: 'Technology',
    accent: 'from-slate-900/30 to-transparent',
    body: [
      'Technology is interesting because it\'s fundamentally about expanding what\'s possible. Every tool that exists today was once just an idea that someone decided to try building. That process — from concept to reality — is what makes technology genuinely fascinating.',
      'The interest isn\'t limited to any single area. It spans the way software is built, the devices we use, the infrastructure that makes modern communication possible, and the new technologies that keep pushing the edge of what\'s achievable.',
      'There\'s also the experimental side — trying out new tools, figuring out how things actually work under the surface, and using technology as a medium for creativity. Digital tools have made it possible for one person with an idea and a device to build things that would have required entire teams just a few decades ago.',
      'Technology is also deeply connected to the future — which makes it impossible not to pay attention to where it\'s heading.',
    ],
    tags: ['Digital Tools', 'Experimentation', 'Innovation', 'Software', 'The Future'],
  },
  {
    id: 'movies',
    icon: Clapperboard,
    label: '03',
    title: 'Movies',
    accent: 'from-blue-950/25 to-transparent',
    body: [
      'Movies are one of the most complete art forms there is. A single film combines visual design, music, performance, writing, pacing, and direction into a unified experience — one that can make you feel something in ways that are hard to explain but impossible to dismiss.',
      'What makes a great movie isn\'t just technical craft. It\'s the feeling that stays with you afterward. The image or scene that you keep thinking about days later. The character who felt unexpectedly real. The story that made you see something differently.',
      'Cinema also builds fictional worlds that exist only through the medium — places and people that couldn\'t exist anywhere else, brought to life with enough detail and intention to feel genuinely lived-in.',
      'The interest covers a wide range: films that ask difficult questions, films that are purely about the pleasure of a great story, and everything in between.',
    ],
    tags: ['Storytelling', 'Cinematography', 'Fictional Worlds', 'Character', 'Visual Design'],
  },
  {
    id: 'anime',
    icon: Sparkles,
    label: '04',
    title: 'Anime',
    accent: 'from-slate-900/35 to-transparent',
    body: [
      'Anime has a way of going places that other storytelling formats don\'t. The combination of animation, genre blending, and the creative freedom of the medium allows for worlds and ideas that feel genuinely unlike anything else.',
      'What makes anime compelling isn\'t just the style — it\'s the range. A single season can shift between intense action, genuine emotion, philosophical questions, and moments of unexpected beauty. The best anime creates characters who feel complex and stories that take their time to develop.',
      'There\'s also something interesting about how anime often explores ideas that mainstream storytelling tends to avoid: the nature of power, the cost of ambition, what it actually means to protect something, identity, change, and memory.',
      'The worlds built within anime can be extraordinarily detailed — mythology, rules, history, geography — all constructed to create a complete universe that follows its own internal logic.',
    ],
    tags: ['Animation', 'Worldbuilding', 'Storytelling', 'Character Development', 'Imagination'],
  },
  {
    id: 'storytelling',
    icon: BookOpen,
    label: '05',
    title: 'Storytelling',
    accent: 'from-blue-900/20 to-transparent',
    body: [
      'Stories are how humans make sense of things. Before we had science, we had myths. Before we had psychology, we had character studies told through narrative. The impulse to tell and hear stories seems to be something fundamental — not a luxury, but a way of understanding.',
      'The mechanics of storytelling are genuinely interesting: how structure creates tension, how character decisions define who someone is more than any description could, how theme gives a story meaning beyond its plot, and how the right detail makes a world feel real.',
      'Fictional worlds function as laboratories. They let you explore questions that are too big, too uncomfortable, or too hypothetical to examine directly — and they do it in a way that creates real emotional engagement.',
      'The fascination with storytelling extends across every medium — film, anime, books, games — anywhere that someone has constructed a narrative worth following.',
    ],
    tags: ['Narrative', 'Character', 'Worldbuilding', 'Theme', 'Fictional Worlds'],
  },
  {
    id: 'digital-creativity',
    icon: Wand2,
    label: '06',
    title: 'Digital Creativity',
    accent: 'from-slate-900/30 to-transparent',
    body: [
      'Digital creativity sits at the point where technology and imagination meet. It\'s the idea that a device and the right tool can let you build, design, or express something that wouldn\'t otherwise exist.',
      'The appeal isn\'t just about output — it\'s about the process of taking an idea that exists only in your head and finding ways to give it form. Whether that\'s through design, writing, building something interactive, or experimenting with a new tool, the creative process involves a particular kind of thinking that feels different from most other activities.',
      'Technology has made creative tools more accessible than ever — what once required expensive equipment and professional training can now be approached by anyone willing to experiment and learn.',
      'Digital creativity is also a space of continuous evolution. New tools, new formats, new possibilities keep appearing — which makes it permanently interesting.',
    ],
    tags: ['Design', 'Experimentation', 'Creative Tools', 'Digital Expression', 'Building'],
  },
];

export default function InterestsPage() {
  return (
    <div className="page-enter pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="mb-20">
          <span className="text-[10px] tracking-[0.25em] uppercase text-blue-400/70 mb-4 block animate-fade-down">
            Genuine Passions
          </span>
          <h1 className="font-[var(--font-space)] font-bold text-white leading-none mb-6 animate-fade-up"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}>
            What I&apos;m <span className="gradient-text">Into</span>
          </h1>
          <p className="text-slate-500 max-w-lg animate-fade-up delay-200">
            Six territories of genuine curiosity — each one a window into a different aspect of how CelestialX sees the world.
          </p>
          <div className="blue-divider mt-10 animate-fade-in delay-300" />
        </div>

        {/* Atmospheric glow */}
        <div className="fixed top-40 left-0 w-[300px] h-[300px] bg-blue-700/3 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

        {/* Interest sections */}
        <div className="space-y-24">
          {sections.map((section, i) => {
            const Icon = section.icon;
            return (
              <RevealOnScroll key={section.id} delay={0}>
                <div className={`rounded-2xl overflow-hidden bg-gradient-to-br ${section.accent} border border-blue-950/30`}>
                  <div className="p-8 md:p-12">
                    {/* Section header */}
                    <div className="flex items-start gap-5 mb-8">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-950/60 border border-blue-800/30 flex items-center justify-center text-blue-400">
                        <Icon size={22} />
                      </div>
                      <div>
                        <span className="font-[var(--font-space)] text-blue-500/50 text-xs tracking-widest">
                          {section.label}
                        </span>
                        <h2 className="font-[var(--font-space)] text-2xl md:text-3xl font-semibold text-white mt-0.5">
                          {section.title}
                        </h2>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="space-y-4 mb-8">
                      {section.body.map((para, pi) => (
                        <p
                          key={pi}
                          className={pi === 0 ? 'text-slate-300 leading-relaxed' : 'text-slate-400 leading-relaxed'}
                        >
                          {para}
                        </p>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {section.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs tracking-wider text-blue-300/60 bg-blue-950/40 border border-blue-800/20 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </div>
  );
}
