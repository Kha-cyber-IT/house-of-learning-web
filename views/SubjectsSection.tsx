import React, { useState } from 'react';

const COLORS = {
  ink: '#20241F',
  secondary: '#23302A',
  paper: '#F7F2E7',
  muted: '#B9C2B8',
  honey: '#D9A441',
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
    <section className="mb-32 px-4 md:px-0">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 gap-4">
        <div>
          <h2 className="font-heading text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Our Subjects
          </h2>
          <p className="text-slate-500 text-lg font-medium">
            Expert tutoring across all major disciplines.
          </p>
        </div>

        <button
          id="browse-all-btn"
          onClick={toggleAll}
          className="font-bold flex items-center gap-2 group hover:gap-3 transition-all text-lg"
          style={{ color: COLORS.honey }}
        >
          {activeCategory === 'all' ? 'Hide all' : 'Browse all'}
          <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
            arrow_forward
          </span>
        </button>
      </div>

      {/* CATEGORY GRID — single palette, equal height, minimal borders */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
        {(Object.entries(subjectData) as [CategoryKey, typeof subjectData[CategoryKey]][]).map(([key, data]) => {
          const isOpen = activeCategory === key || activeCategory === 'all';
          return (
            <div
              key={key}
              className="h-full flex flex-col justify-between p-8 rounded-3xl border border-white/10 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              style={{ backgroundColor: COLORS.ink }}
            >
              <div>
                <div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: COLORS.secondary, color: COLORS.honey }}
                >
                  <span className="material-symbols-outlined text-2xl md:text-3xl">{data.icon}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 font-heading" style={{ color: COLORS.paper }}>
                  {data.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: COLORS.muted }}>
                  {data.desc}
                </p>
              </div>

              <button
                onClick={() => toggleCategory(key)}
                className="group mt-8 inline-flex items-center gap-2 text-sm font-bold self-start"
                style={{ color: COLORS.honey }}
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

      {/* EXPANDED COURSES — a plain list, not a second layer of cards, animated open with grid-rows */}
      <div
        className="grid transition-all duration-500 ease-in-out"
        style={{ gridTemplateRows: activeCategory ? '1fr' : '0fr', opacity: activeCategory ? 1 : 0 }}
      >
        <div className="overflow-hidden">
          <div className="mt-10 pt-10 border-t" style={{ borderColor: 'rgba(35,48,42,0.15)' }}>
            {groupsToShow.map((key) => {
              const data = subjectData[key];
              return (
                <div key={key} className="mb-10 last:mb-0">
                  {activeCategory === 'all' && (
                    <p
                      className="font-label text-xs uppercase tracking-widest mb-4 font-bold"
                      style={{ color: COLORS.honey }}
                    >
                      {data.title}
                    </p>
                  )}
                  <div className="border-t" style={{ borderColor: 'rgba(35,48,42,0.12)' }}>
                    {data.subSubjects.map((sub, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-5 py-6 border-b"
                        style={{ borderColor: 'rgba(35,48,42,0.12)' }}
                      >
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                          style={{ backgroundColor: `${COLORS.honey}1A`, color: COLORS.honey }}
                        >
                          <span className="material-symbols-outlined text-xl">{data.icon}</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-1 font-display">{sub.title}</h4>
                          <p className="text-sm text-slate-500 leading-relaxed">{sub.desc}</p>
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

