import React, { useState } from 'react';

// 1. CONFIGURATION DATA
const subjectData = {
  math: {
    title: 'Mathematics',
    desc: 'Foundational algebra, calculus, and advanced statistical analysis.',
    icon: 'calculate',
    // Blue Theme Classes
    cardClass: 'bg-blue-50/50 border-blue-100 shadow-blue-900/5 hover:shadow-blue-900/10 text-blue-700',
    iconBg: 'bg-blue-100/50',
    solidBg: 'bg-blue-600',
    subSubjects: [
      { title: 'Pure Mathematics', desc: 'Algebra, Geometry, and Calculus mastery.' },
      { title: 'Mathematical Literacy', desc: 'Practical math applications for everyday life.' }
    ]
  },
  science: {
    title: 'Science',
    desc: 'Comprehensive physics, chemistry, and biology curriculum.',
    icon: 'science',
    // Lime Theme Classes
    cardClass: 'bg-lime-50/40 border-lime-100 shadow-lime-900/5 hover:shadow-lime-900/10 text-lime-700',
    iconBg: 'bg-lime-100/50',
    solidBg: 'bg-primary', // Use brand primary
    subSubjects: [
      { title: 'Physical Science', desc: 'Physics and Chemistry fundamentals.' },
      { title: 'Life Sciences', desc: 'Biology and human anatomy.' }
    ]
  },
  commerce: {
    title: 'Commerce',
    desc: 'Accounting principles, economics, and financial systems.',
    icon: 'account_balance',
    // Amber Theme Classes
    cardClass: 'bg-amber-50/50 border-amber-100 shadow-amber-900/5 hover:shadow-amber-900/10 text-amber-700',
    iconBg: 'bg-amber-100/50',
    solidBg: 'bg-amber-500',
    subSubjects: [
      { title: 'Accounting', desc: 'Financial recording and reporting.' },
      { title: 'Economics', desc: 'Micro and macro economic principles.' }
    ]
  },
  humanities: {
    title: 'Humanities',
    desc: 'History, geography, and social sciences exploration.',
    icon: 'history_edu',
    // Purple Theme Classes
    cardClass: 'bg-purple-50/50 border-purple-100 shadow-purple-900/5 hover:shadow-purple-900/10 text-purple-700',
    iconBg: 'bg-purple-100/50',
    solidBg: 'bg-purple-600',
    subSubjects: [
      { title: 'History', desc: 'Understanding past events and societies.' },
      { title: 'Geography', desc: 'Physical environment and human impact.' }
    ]
  },
  business: {
    title: 'Business',
    desc: 'Strategic management, marketing, and leadership skills.',
    icon: 'trending_up',
    // Slate Theme Classes
    cardClass: 'bg-slate-50 border-slate-200 shadow-slate-900/5 hover:shadow-slate-900/10 text-slate-700',
    iconBg: 'bg-slate-200/50',
    solidBg: 'bg-slate-700',
    subSubjects: [
      { title: 'Business Studies', desc: 'Corporate structure and strategy.' },
      { title: 'Business Management', desc: 'Leadership and operational skills.' }
    ]
  },
  languages: {
    title: 'Languages',
    desc: 'Mastery of English Home Language and Afrikaans First Additional Language.',
    icon: 'translate',
    // Rose Theme Classes
    cardClass: 'bg-rose-50/50 border-rose-100 shadow-rose-900/5 hover:shadow-rose-900/10 text-rose-700',
    iconBg: 'bg-rose-100/50',
    solidBg: 'bg-rose-600',
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
                    <h3 className="text-2xl font-bold mb-3 text-slate-900 capitalize font-heading">{data.title}</h3>
                    <p className="text-slate-500 text-base leading-relaxed">{data.desc}</p>
                 </div>
                 {/* This button triggers the drill-down */}
                 <button
                    onClick={() => setActiveCategory(key)}
                    className="font-bold text-sm flex items-center gap-2 group hover:gap-3 transition-all mt-2"
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

                {/* 10% White Footer Section */}
                <div className="bg-white p-5 flex items-center justify-between border-t border-gray-100">
                     <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">View Syllabus</span>
                     <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                     </div>
                </div>
             </div>
           ))}
        </div>
      )}

    </section>
  );
};
