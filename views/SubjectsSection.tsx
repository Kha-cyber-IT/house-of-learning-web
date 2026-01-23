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
    subSubjects: [
      { title: 'Business Studies', desc: 'Corporate structure and strategy.' },
      { title: 'Business Management', desc: 'Leadership and operational skills.' }
    ]
  }
};

export const SubjectsSection = () => {
  // State to track if a category is open. Null means showing the main list.
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Helper to get current active data
  const currentData = activeCategory ? subjectData[activeCategory as keyof typeof subjectData] : null;

  return (
    <section className="mb-32">

      {/* 2. HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
        <div>
          {/* Dynamic Title: Shows "Explore Subjects" or the specific Category Name */}
          <h2 className="font-heading text-4xl font-extrabold text-slate-900 mb-3 tracking-tight animate-fade-in">
            {activeCategory ? currentData?.title : 'Our Subjects'}
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
          <button className="text-primary font-bold flex items-center gap-2 group hover:gap-3 transition-all text-lg">
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
                 <div className={`size-14 rounded-2xl flex items-center justify-center ${data.iconBg}`}>
                    <span className="material-symbols-outlined text-4xl">{data.icon}</span>
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

      {/* 4. SUB-SUBJECTS GRID (Visible when a category is selected) */}
      {activeCategory && currentData && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {currentData.subSubjects.map((sub, index) => (
             <div
               key={index}
               className="card-base p-8 rounded-2xl bg-white border border-slate-200 shadow-lg flex items-center gap-6 hover:border-primary/50 cursor-pointer group transition-all duration-300 hover:-translate-y-1"
             >
                <div className="size-16 rounded-2xl bg-slate-50 flex flex-shrink-0 items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors text-slate-400">
                   <span className="material-symbols-outlined text-3xl">school</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 font-heading group-hover:text-primary transition-colors">{sub.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{sub.desc}</p>
                </div>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">
                    <span className="material-symbols-outlined text-primary">arrow_forward</span>
                </div>
             </div>
           ))}
        </div>
      )}

    </section>
  );
};
