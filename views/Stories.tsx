import React, { useState } from 'react';
import { ChevronDown, Quote } from 'lucide-react';
import { STORIES } from '../constants';

// Same palette as Home.tsx
const C = {
  mainGreen: '#4CA771',
  cardYellow: '#F9CE69',
  lightBlue: '#D9EFF7',
  lightMint: '#C0E6BA',
  navy: '#123B63',
  ink: '#14213D',
  goldTouch: '#F2B84B',
};

// Each card gets its own colour; every card turns gold when touched / hovered.
const CARD_COLORS = [
  { bg: C.cardYellow, hover: C.goldTouch },
  { bg: C.lightBlue, hover: C.cardYellow },
  { bg: C.lightMint, hover: C.cardYellow },
  { bg: '#FFFFFF', hover: C.cardYellow },
  { bg: C.lightBlue, hover: C.cardYellow },
];

const CSS = `
  .hl-card {
    background: var(--card-bg);
    transition: background-color .2s ease, transform .2s ease, box-shadow .2s ease;
  }
  .hl-card:hover, .hl-card:active { background: var(--card-hover); }
  @media (hover: hover) { .hl-card:hover { transform: translateY(-4px); } }

  /* Mobile: 3-line preview. Desktop: show everything. */
  .hl-clamp-3 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  @media (min-width: 768px) {
    .hl-clamp-3 { display: block; -webkit-line-clamp: unset; overflow: visible; }
  }
`;

type Story = (typeof STORIES)[number];

const StoryCard: React.FC<{ story: Story; color: { bg: string; hover: string }; className?: string }> = ({
  story,
  color,
  className = '',
}) => {
  const [open, setOpen] = useState(false);
  const [first, ...rest] = story.text;
  const hasMore = rest.length > 0 || first.length > 130;

  return (
    <article
      className={`hl-card relative overflow-hidden rounded-2xl p-4 md:p-8 shadow-md ${className}`}
      style={{ ['--card-bg' as string]: color.bg, ['--card-hover' as string]: color.hover, color: C.ink } as React.CSSProperties}
    >
      <Quote
        size={44}
        className="absolute top-3 right-3 md:top-5 md:right-5 opacity-[0.12] pointer-events-none"
        style={{ color: C.navy }}
        fill={C.navy}
      />

      <div className="relative grid grid-cols-[56px_1fr] md:grid-cols-[96px_1fr] gap-x-4 md:gap-x-6 gap-y-3 items-center">
        <img
          src={story.image}
          alt={story.name}
          loading="lazy"
          className="w-14 h-14 md:w-24 md:h-24 rounded-full object-cover border-[3px] md:border-4 border-white shadow-md"
        />

        <div className="min-w-0">
          <h3 className="font-display text-lg md:text-2xl font-bold leading-tight">{story.name}</h3>
          <p className="mt-0.5 text-xs md:text-sm font-bold uppercase tracking-wider" style={{ color: C.navy }}>
            Learner story
          </p>
        </div>

        <div className="col-span-2">
          <div className="space-y-2 text-sm md:text-lg leading-relaxed italic opacity-90">
            <p className={open ? '' : 'hl-clamp-3'}>“{first}{rest.length === 0 ? '”' : ''}</p>
            {rest.map((para, i) => (
              <p key={i} className={open ? '' : 'hidden md:block'}>
                {para}
                {i === rest.length - 1 ? '”' : ''}
              </p>
            ))}
          </div>

          {hasMore && (
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              className="md:hidden mt-2 inline-flex items-center gap-1 text-sm font-bold not-italic"
              style={{ color: C.navy }}
            >
              {open ? 'Show less' : 'Read more'}
              <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export const Stories: React.FC = () => {
  const lastIsOdd = STORIES.length % 2 !== 0;

  return (
    <section
      className="animate-fade-in w-full py-10 md:py-20 px-4"
      style={{ backgroundColor: C.mainGreen }}
    >
      <style>{CSS}</style>

      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <p
            className="font-label text-xs uppercase tracking-[0.25em] mb-3 font-bold"
            style={{ color: C.cardYellow }}
          >
            Real Results
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-2 text-white">Success Stories</h2>
          <p className="text-sm md:text-base" style={{ color: C.lightBlue }}>
            In the words of our learners.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6">
          {STORIES.map((story, index) => (
            <StoryCard
              key={story.id}
              story={story}
              color={CARD_COLORS[index % CARD_COLORS.length]}
              className={
                lastIsOdd && index === STORIES.length - 1 ? 'lg:col-span-2 lg:w-3/4 lg:mx-auto' : ''
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};
