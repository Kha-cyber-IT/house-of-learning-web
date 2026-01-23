
import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="px-6 lg:px-20 py-24 bg-[#fcfdfb] space-y-16 animate-fade-in max-w-4xl mx-auto" id="about">
      
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-heading font-bold text-slate-900">About Us</h2>
        <div className="h-1.5 w-20 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="space-y-12">
        
        {/* Intro */}
        <div className="prose prose-lg mx-auto">
          <p className="text-lg leading-relaxed text-slate-500 text-center">
              House of Learning is dedicated to helping learners improve in their schoolwork and grow academically. We guide learners to discover their vision for the future, what they want to study, and who they want to become. We believe that everything is possible, and there is always room for improvement. Our goal is to help every learner build confidence, develop strong study habits, and realize their true potential.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-center text-center">
                <div className="w-12 h-12 bg-[#80ec13]/10 flex items-center justify-center rounded-xl mb-4 border border-[#80ec13]/20 mx-auto">
                    <span className="material-symbols-outlined text-[#65a30d]">lightbulb</span>
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4 text-slate-900">Our Mission</h3>
                <p className="text-slate-500">
                To educate every learner to achieve their academic best and empower them to reach their full potential.
                </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-center text-center">
                <div className="w-12 h-12 bg-[#80ec13]/10 flex items-center justify-center rounded-xl mb-4 border border-[#80ec13]/20 mx-auto">
                    <span className="material-symbols-outlined text-[#65a30d]">visibility</span>
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4 text-slate-900">Our Vision</h3>
                <p className="text-slate-500">
                To ensure that learners excel academically in all subjects and build a bright future.
                </p>
            </div>
        </div>

        {/* Why We Exist */}
        <div className="p-8 md:p-10 bg-[#2A6EBB] text-white shadow-lg rounded-3xl border border-transparent">
            <h3 className="text-2xl font-bold text-white mb-8 font-heading uppercase tracking-wide border-b border-white/20 pb-4">Why We Exist</h3>
            <div className="space-y-5 text-white/90 leading-relaxed">
              <p>
                We exist because there is a real need in Eldorado Park. As an organization rooted in the community, we understand the challenges learners face every day.
              </p>
              <p>
                During the COVID-19 lockdown, many learners fell behind in their academic progress. We saw the effects, and we decided to take action.
              </p>
              <p>
                We aim to bring real change to the learning journey of every child who enters our doors.
              </p>
              <p>
                We offer face-to-face learning because personal connection is powerful. It helps learners understand better, ask questions freely, and build confidence.
              </p>
              <p>
                We support learners who may not always receive enough academic help, especially in schools where teachers don’t have extra support with content.
              </p>
              <p>
                We serve as a bridge between learners and teachers, helping them catch up with their schoolwork and stay on track.
              </p>
              <p>
                We assist learners with exam preparation, revision, and understanding key concepts across different subjects.
              </p>
            </div>
        </div>

      </div>
    </section>
  );
};
