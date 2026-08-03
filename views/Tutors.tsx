import React from 'react';
import { TUTORS } from '../constants';

const COLORS = {
  ink: '#20241F',
  paper: '#F7F2E7',
  muted: '#B9C2B8',
  honey: '#D9A441',
};

export const Tutors: React.FC = () => {
  return (
    <section
      className="animate-fade-in py-16 md:py-24 px-4"
      style={{ backgroundColor: COLORS.ink }}
    >
      <div className="max-w-5xl mx-auto space-y-16">

        <div className="text-center">
          <p
            className="font-label text-xs uppercase tracking-[0.25em] mb-4 font-bold"
            style={{ color: COLORS.honey }}
          >
            Our Educators
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-bold mb-4"
            style={{ color: COLORS.paper }}
          >
            Meet Our Team
          </h2>
          <p style={{ color: COLORS.muted }}>
            Dedicated educators committed to your success.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {TUTORS.map((tutor, index) => {
            const imageRight = index % 2 === 1;
            return (
              <div
                key={tutor.id}
                className={`group p-8 md:p-10 rounded-3xl flex flex-col gap-8 items-center border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-[#D9A441] ${
                  imageRight ? 'md:flex-row-reverse' : 'md:flex-row'
                } md:items-start`}
              >
                <div className="flex-shrink-0">
                  <img
                    src={tutor.image}
                    alt={tutor.name}
                    className="w-40 h-40 md:w-44 md:h-44 rounded-full object-cover shadow-xl border-4"
                    style={{ borderColor: COLORS.honey }}
                  />
                </div>

                <div className={`flex-grow text-center ${imageRight ? 'md:text-right' : 'md:text-left'}`}>
                  <h4
                    className="font-display text-2xl font-bold mb-2"
                    style={{ color: COLORS.paper }}
                  >
                    {tutor.name}
                  </h4>
                  <p
                    className="font-bold mb-4 uppercase tracking-wider text-sm"
                    style={{ color: COLORS.honey }}
                  >
                    {tutor.role}
                  </p>
                  <div
                    className={`w-12 h-[2px] mb-5 mx-auto ${imageRight ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'}`}
                    style={{ backgroundColor: COLORS.honey }}
                  ></div>
                  <div className="space-y-3 leading-relaxed font-medium" style={{ color: COLORS.muted }}>
                    {tutor.description.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
