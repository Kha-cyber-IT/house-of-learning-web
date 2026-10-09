import React, { useState } from 'react';

// Same palette as Home.tsx. This section sits on Home's yellow band.
const C = {
  mainGreen: '#4CA771',
  cardYellow: '#F9CE69',
  lightBlue: '#D9EFF7',
  lightMint: '#C0E6BA',
  navy: '#123B63',
  blue: '#2A6592',
  ink: '#14213D',
};

const subjectData = {
  math: {
    title: 'Mathematics',
    desc: 'Foundational algebra, calculus, and advanced statistical analysis.',
    icon: 'calculate',
    subSubjects: [
      { title: 'Pure Mathematics', desc: 'Algebra, Geometry, and Calculus mastery.' },
      { title: 'Mathematical Literacy', desc: 'Practical math applications for everyday life.' }
    ]
  },
  science: {
    title: 'Science',
    desc: 'Comprehensive physics, chemistry, and biology curriculum.',
    icon: 'science',
    subSubjects: [
      { title: 'Physical Science', desc: 'Physics and Chemistry fundamentals.' },
      { title: 'Life Sciences', desc: 'Biology and human anatomy.' }
    ]
  },
  commerce: {
    title: 'Commerce',
    desc: 'Accounting principles, economics, and financial systems.',
    icon: 'account_balance',
    subSubjects: [
      { title: 'Accounting', desc: 'Financial recording and reporting.' },
      { title: 'Economics', desc: 'Micro and macro economic principles.' }
    ]
  },
  humanities: {
    title: 'Humanities',
    desc: 'History, geography, and social sciences exploration.',
    icon: 'history_edu',
    subSubjects: [
      { title: 'History', desc: 'Understanding past events and societies.' },
      { title: 'Geography', desc: 'Physical environment and human impact.' }
    ]
  },
  business: {
    title: 'Business',
    desc: 'Strategic management, marketing, and leadership skills.',
    icon: 'trending_up',
    subSubjects: [
      { title: 'Business Studies', desc: 'Corporate structure and strategy.' },
      { title: 'Business Management', desc: 'Leadership and operational skills.' }
    ]
  },
  languages: {
    title: 'Languages',
    desc: 'Mastery of English Home Language and Afrikaans First Additional Language.',
    icon: 'translate',
    subSubjects: [
      { title: 'English HL', desc: 'Literature, poetry, and advanced grammar.' },
      { title: 'Afrikaans FAL', desc: 'Communication skills and comprehension.' }
    ]
  }
};

type CategoryKey = keyof typeof subjectData;

// Each subject gets its own Home colour. bg / text / icon chip / chip icon / touch ring.
const SUBJECT_COLORS: Record<CategoryKey, { bg: string; fg: string; chip: string; chipFg: string; ring: string }> = {
  math:       { bg: C.navy,      fg: '#FFFFFF', chip: C.cardYellow, chipFg: C.navy,      ring: '#FFFFFF' },
  science:    { bg: C.mainGreen, fg: '#FFFFFF', chip: '#FFFFFF',    chipFg: C.mainGreen, ring: C.navy },
  commerce:   { bg: '#FFFFFF',   fg: C.ink,     chip: C.navy,       chipFg: '#FFFFFF',   ring: C.navy },
  humanities: { bg: C.lightBlue, fg: C.ink,     chip: C.navy,       chipFg: '#FFFFFF',   ring: C.navy },
  business:   { bg: C.lightMint, fg: C.ink,     chip: C.navy,       chipFg: '#FFFFFF',   ring: C.navy },
  languages:  { bg: C.blue,      fg: '#FFFFFF', chip: C.cardYellow, chipFg: C.navy,      ring: '#FFFFFF' },
};

// Cards sit on a yellow band, so "gold on touch" would vanish into the background.
// Instead a colour ring lights up around the card while it is touched / hovered.
const CSS = `
  .hl-sub {
    background: var(--sub-bg);
    color: var(--sub-fg);
    transition: box-shadow .2s ease, transform .2s ease;
  }
  .hl-sub:hover, .hl-sub:active {
    box-shadow: 0 0 0 4px var(--sub-ring), 0 12px 24px rgba(0, 0, 0, 0.18);
  }
  @media (hover: hover) { .hl-sub:hover { transform: translateY(-4px); } }

  .hl-sub-clamp {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  @media (min-width: 768px) {
    .hl-sub-clamp { display: block; -webkit-line-clamp: unset; overflow: visible; }
  }
`;

export const SubjectsSection = () => {
  // null = closed. A category key = that category's list is open. 'all' = every list is open.
  const [activeCategory, setActiveCategory] = useState<CategoryKey | 'all' | null>(null);

  const toggleCategory = (key: CategoryKey) => {
    setActiveCategory((prev) => (prev === key ? null : key));
  };

  const toggleAll = () => {
    setActiveCategory((prev) => (prev === 'all' ? null : 'all'));
  };

  const groupsToShow: CategoryKey[] =
    activeCategory === 'all'
      ? (Object.keys(subjectData) as CategoryKey[])
      : activeCategory
      ? [activeCategory]
      : [];

  return (
    <section>
      <style>{CSS}</style>

      {/* HEADER (the "Our Subjects" heading itself lives in Home.tsx) */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-5 md:mb-8 gap-3">
        <p className="text-base md:text-lg font-medium" style={{ color: C.ink }}>
          Expert tutoring across all major disciplines.
        </p>

        <button
          id="browse-all-btn"
          type="button"
          onClick={toggleAll}
          aria-expanded={activeCategory === 'all'}
          className="font-bold inline-flex items-center gap-2 group rounded-xl px-5 py-2.5 text-sm md:text-base text-white shadow-md transition active:scale-[0.98] hover:brightness-110"
          style={{ backgroundColor: C.navy }}
        >
          {activeCategory === 'all' ? 'Hide all' : 'Browse all'}
          <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
            arrow_forward
          </span>
        </button>
      </div>

      {/* CATEGORY GRID: compact on mobile, equal height */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 items-stretch">
        {(Object.entries(subjectData) as [CategoryKey, typeof subjectData[CategoryKey]][]).map(([key, data]) => {
          const isOpen = activeCategory === key || activeCategory === 'all';
          const col = SUBJECT_COLORS[key];
          return (
            <div
              key={key}
              className="hl-sub h-full flex flex-col justify-between gap-3 p-4 md:p-6 rounded-2xl shadow-md"
              style={
                {
                  '--sub-bg': col.bg,
                  '--sub-fg': col.fg,
                  '--sub-ring': col.ring,
                } as React.CSSProperties
              }
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: col.chip, color: col.chipFg }}
                >
                  <span className="material-symbols-outlined text-2xl md:text-3xl">{data.icon}</span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg md:text-2xl font-bold mb-1 font-heading leading-tight">
                    {data.title}
                  </h3>
                  <p className="hl-sub-clamp text-sm leading-relaxed opacity-90">{data.desc}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => toggleCategory(key)}
                aria-expanded={isOpen}
                className="group inline-flex items-center gap-2 text-sm font-bold self-start underline underline-offset-4"
                style={{ color: col.chip }}
              >
                {isOpen ? 'Hide courses' : 'Explore courses'}
                <span
                  className="material-symbols-outlined text-[18px] transition-transform"
                  style={{ transform: isOpen ? 'rotate(90deg)' : 'none' }}
                >
                  arrow_forward
                </span>
              </button>
            </div>
          );
        })}
      </div>

      {/* EXPANDED COURSES: a plain list on the yellow band, animated open with grid-rows */}
      <div
        className="grid transition-all duration-500 ease-in-out"
        style={{ gridTemplateRows: activeCategory ? '1fr' : '0fr', opacity: activeCategory ? 1 : 0 }}
      >
        <div className="overflow-hidden">
          <div className="mt-8 pt-6 md:mt-10 md:pt-10 border-t" style={{ borderColor: 'rgba(18,59,99,0.25)' }}>
            {groupsToShow.map((key) => {
              const data = subjectData[key];
              return (
                <div key={key} className="mb-8 last:mb-0">
                  {activeCategory === 'all' && (
                    <p
                      className="text-xs uppercase tracking-widest mb-3 font-bold"
                      style={{ color: C.navy }}
                    >
                      {data.title}
                    </p>
                  )}
                  <div className="border-t" style={{ borderColor: 'rgba(18,59,99,0.2)' }}>
                    {data.subSubjects.map((sub, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 py-4 md:py-6 border-b"
                        style={{ borderColor: 'rgba(18,59,99,0.2)' }}
                      >
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                          style={{ backgroundColor: C.navy, color: C.cardYellow }}
                        >
                          <span className="material-symbols-outlined text-xl">{data.icon}</span>
                        </div>
                        <div>
                          <h4 className="text-base md:text-lg font-bold mb-1 font-display" style={{ color: C.ink }}>
                            {sub.title}
                          </h4>
                          <p className="text-sm leading-relaxed" style={{ color: 'rgba(20,33,61,0.78)' }}>
                            {sub.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
