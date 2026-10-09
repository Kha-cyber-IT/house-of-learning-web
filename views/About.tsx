import React from 'react';
import { Lightbulb, Eye, CheckCircle2 } from 'lucide-react';

// Same palette as Home.tsx
const C = {
  mainGreen: '#4CA771',
  cardYellow: '#F9CE69',
  lightBlue: '#D9EFF7',
  lightMint: '#C0E6BA',
  navy: '#123B63',
  blue: '#2A6592',
  ink: '#14213D',
  goldTouch: '#F2B84B',
};

// A card colour set: background, text, accent, plus what it turns into on touch / hover (gold).
const mk = (bg: string, fg: string, accent: string, hover = C.cardYellow) => ({
  bg,
  fg,
  accent,
  hover,
  hoverFg: C.ink,
  hoverAccent: C.navy,
});

type CardColor = ReturnType<typeof mk>;

const MISSION = mk(C.navy, '#FFFFFF', C.cardYellow); // navy, white text, yellow accents
const VISION = mk(C.cardYellow, C.ink, C.navy, C.goldTouch); // yellow, navy accents

const HIGHLIGHT_COLORS: CardColor[] = [
  mk(C.cardYellow, C.ink, C.navy, C.goldTouch),
  mk(C.lightMint, C.ink, C.navy),
  mk(C.lightBlue, C.ink, C.blue),
  mk('#FFFFFF', C.ink, C.mainGreen),
  mk(C.lightBlue, C.ink, C.blue),
  mk(C.cardYellow, C.ink, C.navy, C.goldTouch),
];

const highlights = [
  'Face-to-face tutoring',
  'Homework support',
  'Exam preparation',
  'Study skills development',
  'Individual academic support',
  'Building learner confidence',
];

const CSS = `
  .hl-card {
    background: var(--card-bg);
    color: var(--card-fg);
    transition: background-color .2s ease, color .2s ease, transform .2s ease;
  }
  .hl-card .hl-accent { color: var(--card-accent); transition: color .2s ease; }
  .hl-card .hl-chip { background: var(--card-accent); transition: background-color .2s ease; }
  .hl-card .hl-chip svg { color: var(--card-bg); }
  .hl-card:hover, .hl-card:active {
    background: var(--card-hover);
    color: var(--card-fg-hover);
  }
  .hl-card:hover .hl-accent, .hl-card:active .hl-accent { color: var(--card-accent-hover); }
  .hl-card:hover .hl-chip, .hl-card:active .hl-chip { background: var(--card-accent-hover); }
  .hl-card:hover .hl-chip svg, .hl-card:active .hl-chip svg { color: var(--card-hover); }
  @media (hover: hover) { .hl-card:hover { transform: translateY(-4px); } }
`;

const cardVars = (c: CardColor) =>
  ({
    '--card-bg': c.bg,
    '--card-hover': c.hover,
    '--card-fg': c.fg,
    '--card-fg-hover': c.hoverFg,
    '--card-accent': c.accent,
    '--card-accent-hover': c.hoverAccent,
  }) as React.CSSProperties;

/** Yellow highlight for key words inside paragraphs. */
const Hi: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <strong className="font-bold" style={{ color: C.cardYellow }}>
    {children}
  </strong>
);

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="animate-fade-in w-full px-4 md:px-8 lg:px-12 xl:px-16 py-10 md:py-24"
      style={{ backgroundColor: C.mainGreen }}
    >
      <style>{CSS}</style>

      <div className="max-w-[1760px] mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span
            className="font-semibold tracking-[0.2em] uppercase text-xs md:text-sm"
            style={{ color: C.cardYellow }}
          >
            About House of Learning
          </span>

          <h2 className="mt-3 md:mt-4 text-3xl md:text-5xl font-extrabold tracking-tight font-display text-white">
            Helping Learners Build <span style={{ color: C.cardYellow }}>Brighter Futures</span>
          </h2>

          <div
            className="w-16 h-[3px] mx-auto mt-5 mb-2 rounded-full"
            style={{ backgroundColor: C.cardYellow }}
          />

          <p className="mt-4 md:mt-6 text-base md:text-lg leading-7 md:leading-8" style={{ color: C.lightBlue }}>
            House of Learning is dedicated to helping learners improve their academic performance while
            building <Hi>confidence</Hi>, <Hi>discipline</Hi> and a <Hi>love for learning</Hi>. We guide every
            learner to discover their strengths, develop strong study habits and prepare for a successful
            future.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid gap-3 md:gap-6 md:grid-cols-2 mt-10 md:mt-20">
          <div className="hl-card rounded-2xl p-5 md:p-8 shadow-md" style={cardVars(MISSION)}>
            <div className="flex items-center gap-4 mb-3 md:mb-5">
              <div className="hl-chip w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center shrink-0">
                <Lightbulb size={22} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-display">Our Mission</h3>
            </div>
            <p className="text-sm md:text-base leading-7 md:leading-8 opacity-95">
              To educate, inspire and empower every learner to achieve their academic best while developing
              confidence and lifelong learning skills.
            </p>
          </div>

          <div className="hl-card rounded-2xl p-5 md:p-8 shadow-md" style={cardVars(VISION)}>
            <div className="flex items-center gap-4 mb-3 md:mb-5">
              <div className="hl-chip w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center shrink-0">
                <Eye size={22} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-display">Our Vision</h3>
            </div>
            <p className="text-sm md:text-base leading-7 md:leading-8 opacity-95">
              To become a trusted academic support centre where learners gain the knowledge, confidence and
              skills needed to succeed in school and beyond.
            </p>
          </div>
        </div>

        {/* Why We Exist */}
        <div className="mt-10 md:mt-20 grid gap-5 md:gap-12 lg:grid-cols-[1fr_1.6fr] items-start">
          <div>
            <span
              className="font-semibold uppercase tracking-[0.18em] text-xs md:text-sm"
              style={{ color: C.cardYellow }}
            >
              Why We Exist
            </span>

            <h3 className="mt-2 md:mt-3 text-2xl md:text-4xl font-bold tracking-tight font-display text-white">
              Supporting learners where they <span style={{ color: C.cardYellow }}>need it most.</span>
            </h3>
          </div>

          <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-7 md:leading-8" style={{ color: C.lightBlue }}>
            <p>
              House of Learning was established because we recognised a growing need for quality academic
              support within the <Hi>Eldorado Park community</Hi>. Many learners have the potential to succeed
              but simply need additional guidance, encouragement and structured learning.
            </p>

            <p>
              Following the COVID-19 pandemic, many learners experienced <Hi>learning gaps</Hi> that affected
              their confidence and academic progress. We chose to respond by creating a supportive environment
              where learners can ask questions freely, strengthen their understanding and regain confidence.
            </p>

            <p>
              Through <Hi>face-to-face tutoring</Hi>, <Hi>personalised attention</Hi> and practical academic
              support, we help learners improve their performance while preparing them for long-term success.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid gap-3 md:gap-5 grid-cols-2 lg:grid-cols-3 mt-10 md:mt-20">
          {highlights.map((item, i) => (
            <div
              key={item}
              className="hl-card flex items-center gap-2.5 md:gap-3 p-3.5 md:p-6 rounded-2xl shadow-md"
              style={cardVars(HIGHLIGHT_COLORS[i % HIGHLIGHT_COLORS.length])}
            >
              <CheckCircle2 className="hl-accent shrink-0 w-5 h-5 md:w-6 md:h-6" />
              <p className="text-sm md:text-lg font-semibold leading-snug">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
