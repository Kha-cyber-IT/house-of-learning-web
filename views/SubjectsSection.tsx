import React, { useState } from 'react';

// 1. CONFIGURATION DATA
const subjectData = {
  math: {
    title: 'Mathematics',
    desc: 'Foundational algebra, calculus, and advanced statistical analysis.',
    icon: 'calculate',
    // Blue Theme (#2563EB)
    cardClass: 'bg-[#2563EB] text-white shadow-xl',
    iconBg: 'bg-white/20 text-white',
    btnClass: 'bg-white text-[#2563EB]',
    solidBg: 'bg-[#2563EB]',
    subSubjects: [
      { title: 'Pure Mathematics', desc: 'Algebra, Geometry, and Calculus mastery.' },
      { title: 'Mathematical Literacy', desc: 'Practical math applications for everyday life.' }
    ]
  },
  science: {
    title: 'Science',
    desc: 'Comprehensive physics, chemistry, and biology curriculum.',
    icon: 'science',
    // Gold Theme (#D97706)
    cardClass: 'bg-[#D97706] text-white shadow-xl',
    iconBg: 'bg-white/20 text-white',
    btnClass: 'bg-white text-[#D97706]',
    solidBg: 'bg-[#D97706]',
    subSubjects: [
      { title: 'Physical Science', desc: 'Physics and Chemistry fundamentals.' },
      { title: 'Life Sciences', desc: 'Biology and human anatomy.' }
    ]
  },
  commerce: {
    title: 'Commerce',
    desc: 'Accounting principles, economics, and financial systems.',
    icon: 'account_balance',
    // Orange Theme (#EA580C)
    cardClass: 'bg-[#EA580C] text-white shadow-xl',
    iconBg: 'bg-white/20 text-white',
    btnClass: 'bg-white text-[#EA580C]',
    solidBg: 'bg-[#EA580C]',
    subSubjects: [
      { title: 'Accounting', desc: 'Financial recording and reporting.' },
      { title: 'Economics', desc: 'Micro and macro economic principles.' }
    ]
  },
  humanities: {
    title: 'Humanities',
    desc: 'History, geography, and social sciences exploration.',
    icon: 'history_edu',
    // Blue Theme (#2563EB)
    cardClass: 'bg-[#2563EB] text-white shadow-xl',
    iconBg: 'bg-white/20 text-white',
    btnClass: 'bg-white text-[#2563EB]',
    solidBg: 'bg-[#2563EB]',
    subSubjects: [
      { title: 'History', desc: 'Understanding past events and societies.' },
      { title: 'Geography', desc: 'Physical environment and human impact.' }
    ]
  },
  business: {
    title: 'Business',
    desc: 'Strategic management, marketing, and leadership skills.',
    icon: 'trending_up',
    // Gold Theme (#D97706)
    cardClass: 'bg-[#D97706] text-white shadow-xl',
    iconBg: 'bg-white/20 text-white',
    btnClass: 'bg-white text-[#D97706]',
    solidBg: 'bg-[#D97706]',
    subSubjects: [
      { title: 'Business Studies', desc: 'Corporate structure and strategy.' },
      { title: 'Business Management', desc: 'Leadership and operational skills.' }
    ]
  },
  languages: {
    title: 'Languages',
    desc: 'Mastery of English Home Language and Afrikaans First Additional Language.',
    icon: 'translate',
    // Orange Theme (#EA580C)
    cardClass: 'bg-[#EA580C] text-white shadow-xl',
    iconBg: 'bg-white/20 text-white',
    btnClass: 'bg-white text-[#EA580C]',
    solidBg: 'bg-[#EA580C]',
    subSubjects: [
       { title: 'English HL', desc: 'Literature, poetry, and advanced grammar.' },
       { title: 'Afrikaans FAL', desc: 'Communication skills and comprehension.' }
    ]
  }
};

export const SubjectsSection = () => {
  // State to track if a category is open. Null means showing the main list. 'all' means showing everything.
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Helper to get current active data or title
  const getTitle = () => {
    if (!activeCategory) return 'Our Subjects';
    if (activeCategory === 'all') return 'All Subjects';
    return subjectData[activeCategory as keyof typeof subjectData]?.title;
  };

  // Derive the subjects to display
  const displaySubjects = activeCategory
    ? (activeCategory === 'all'
        ? Object.values(subjectData).flatMap(cat => cat.subSubjects.map(sub => ({ ...sub, icon: cat.icon })))
        : subjectData[activeCategory as keyof typeof subjectData].subSubjects.map(sub => ({ ...sub, icon: subjectData[activeCategory as keyof typeof subjectData].icon }))
      )
    : [];

  return (
    <section className="mb-32">

      {/* 2. HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
        <div>
          {/* Dynamic Title */}
          <h2 className="font-heading text-4xl font-extrabold text-slate-900 mb-3 tracking-tight animate-fade-in">
            {getTitle()}
          </h2>
          <p className="text-slate-500 text-lg font-medium">
            {activeCategory ? 'Select a specific course below.' : 'Expert tutoring across all major disciplines.'}
          </p>
        </div>

        {/* Back Button: Only visible when drilled down */}
        {activeCategory ? (
          <button
            onClick={() => setActiveCategory(null)}
            className="text-slate-500 font-bold flex items-center gap-2 hover:text-slate-900 transition-colors text-lg"
          >
            <span className="material-symbols-outlined text-[20px] rotate-180">arrow_forward</span> Back to Categories
          </button>
        ) : (
          <button
            id="browse-all-btn"
            onClick={() => setActiveCategory('all')}
            className="text-primary font-bold flex items-center gap-2 group hover:gap-3 transition-all text-lg"
          >
            Browse all <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">arrow_forward</span>
          </button>
        )}
      </div>

      {/* 3. MAIN CATEGORIES GRID (Visible when activeCategory is null) */}
      {!activeCategory && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
           {Object.entries(subjectData).map(([key, data]) => (
              <div
                key={key}
                className={`card-base p-10 rounded-2xl flex flex-col items-start gap-6 border shadow-xl transition-all duration-300 ${data.cardClass}`}
              >
                 <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center ${data.iconBg}`}>
                    <span className="material-symbols-outlined text-3xl md:text-4xl">{data.icon}</span>
                 </div>
                 <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-3 text-white capitalize font-heading">{data.title}</h3>
                    <p className="text-white/90 text-base leading-relaxed">{data.desc}</p>
                 </div>
                 {/* This button triggers the drill-down */}
                 <button
                    onClick={() => setActiveCategory(key)}
                    className={`font-bold text-sm flex items-center justify-center gap-2 group transition-all mt-2 px-6 py-3 rounded-xl shadow-sm hover:shadow-md ${data.btnClass || 'bg-white text-slate-900'}`}
                 >
                    Learn More <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                 </button>
              </div>
           ))}
        </div>
      )}

      {/* 4. SUB-SUBJECTS GRID (Visible when a category or 'all' is selected) */}
      {activeCategory && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {displaySubjects.map((sub, index) => (
             <div
               key={index}
               className="group flex flex-col rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
             >
                {/* 90% Colored Body Section - Always Brand Primary (Green) */}
                <div className="bg-primary p-8 flex-grow flex flex-col justify-between relative overflow-hidden min-h-[200px]">

                    {/* Background Decoration */}
                    <div className="absolute -right-6 -top-6 opacity-10 rotate-12">
                        <span className="material-symbols-outlined text-[80px] md:text-[140px] text-black/5 select-none">
                            {sub.icon}
                        </span>
                    </div>

                    <div className="relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-slate-900 mb-6 border border-black/5">
                           <span className="material-symbols-outlined text-2xl">school</span>
                        </div>
                        <h4 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 font-display tracking-tight">{sub.title}</h4>
                        <p className="text-slate-800 text-sm font-medium leading-relaxed max-w-sm">{sub.desc}</p>
                    </div>
                </div>
             </div>
           ))}
        </div>
      )}

    </section>
  );
};
