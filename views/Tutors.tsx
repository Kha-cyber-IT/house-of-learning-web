import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { TUTORS } from '../constants';

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
  { bg: C.lightMint, hover: C.cardYellow },
  { bg: C.lightBlue, hover: C.cardYellow },
  { bg: C.cardYellow, hover: C.goldTouch },
  { bg: '#FFFFFF', hover: C.cardYellow },
];

const CSS = `
  .hl-card {
    background: var(--card-bg);
    transition: background-color .2s ease, transform .2s ease, box-shadow .2s ease;
  }
  .hl-card:hover, .hl-card:active { background: var(--card-hover); }
  @media (hover: hover) { .hl-card:hover { transform: translateY(-4px); } }

  /* Mobile: preview only. Desktop: show everything. */
  .hl-clamp {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  @media (min-width: 768px) {
    .hl-clamp { display: block; -webkit-line-clamp: unset; overflow: visible; }
  }
`;

type Tutor = (typeof TUTORS)[number];

const TutorCard: React.FC<{ tutor: Tutor; color: { bg: string; hover: string } }> = ({ tutor, color }) => {
  const [open, setOpen] = useState(false);
  const [first, ...rest] = tutor.description;
  const hasMore = rest.length > 0 || first.length > 110;

  return (
    <article
      className="hl-card rounded-2xl p-4 md:p-8 shadow-md"
      style={{ ['--card-bg' as string]: color.bg, ['--card-hover' as string]: color.hover, color: C.ink } as React.CSSProperties}
    >
      <div className="grid grid-cols-[64px_1fr] md:grid-cols-[160px_1fr] gap-x-4 md:gap-x-8 gap-y-3 items-center md:items-start">
        <img
          src={tutor.image}
          alt={tutor.name}
          loading="lazy"
          className="w-16 h-16 md:w-40 md:h-40 rounded-full object-cover md:row-span-2 border-[3px] md:border-4 border-white shadow-md"
        />

        <div className="min-w-0">
          <h3 className="font-display text-lg md:text-2xl font-bold leading-tight">{tutor.name}</h3>
          <p className="mt-0.5 text-xs md:text-sm font-bold uppercase tracking-wider" style={{ color: C.navy }}>
            {tutor.role}
          </p>
          <div className="hidden md:block w-12 h-[2px] mt-4" style={{ backgroundColor: C.navy }} />
        </div>

        <div className="col-span-2 md:col-span-1 md:-mt-2">
          <div className="space-y-2 text-sm md:text-base leading-relaxed opacity-90">
            <p className={open ? '' : 'hl-clamp'}>{first}</p>
            {rest.map((para, i) => (
              <p key={i} className={open ? '' : 'hidden md:block'}>
                {para}
              </p>
            ))}
          </div>

          {hasMore && (
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              className="md:hidden mt-2 inline-flex items-center gap-1 text-sm font-bold"
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

export const Tutors: React.FC = () => {
  return (
    <section
      className="animate-fade-in w-full py-10 md:py-20 px-4"
      style={{ backgroundColor: C.mainGreen }}
    >
      <style>{CSS}</style>

      <div className="max-w-5xl mx-auto space-y-8 md:space-y-14">
        <div className="text-center">
          <p
            className="font-label text-xs uppercase tracking-[0.25em] mb-3 font-bold"
            style={{ color: C.cardYellow }}
          >
            Our Educators
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-2 text-white">Meet Our Team</h2>
          <p className="text-sm md:text-base" style={{ color: C.lightBlue }}>
            Dedicated educators committed to your success.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 md:gap-6">
          {TUTORS.map((tutor, index) => (
            <TutorCard key={tutor.id} tutor={tutor} color={CARD_COLORS[index % CARD_COLORS.length]} />
          ))}
        </div>
      </div>
    </section>
  );
};
