import React from 'react';
import { Lightbulb, Eye, CheckCircle2 } from 'lucide-react';

const COLORS = {
  ink: '#20241F',
  secondary: '#23302A',
  border: '#3A423A',
  paper: '#F7F2E7',
  muted: '#B9C2B8',
  honey: '#D9A441',
};

const highlights = [
  'Face-to-face tutoring',
  'Homework support',
  'Exam preparation',
  'Study skills development',
  'Individual academic support',
  'Building learner confidence',
];

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 lg:px-12 py-20 md:py-28 animate-fade-in"
      style={{ backgroundColor: COLORS.ink }}
    >
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <span
          className="font-semibold tracking-[0.2em] uppercase text-sm"
          style={{ color: COLORS.honey }}
        >
          About House of Learning
        </span>

        <h2
          className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight font-display"
          style={{ color: COLORS.paper }}
        >
          Helping Learners Build Brighter Futures
        </h2>

        <div
          className="w-16 h-[3px] mx-auto mt-6 mb-2 rounded-full"
          style={{ backgroundColor: COLORS.honey }}
        ></div>

        <p className="mt-6 text-lg leading-8" style={{ color: COLORS.muted }}>
          House of Learning is dedicated to helping learners improve their
          academic performance while building confidence, discipline and a love
          for learning. We guide every learner to discover their strengths,
          develop strong study habits and prepare for a successful future.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid gap-6 md:grid-cols-2 mt-24 md:mt-32">

        <div
          className="rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-1"
          style={{ backgroundColor: COLORS.secondary, borderColor: COLORS.border }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = COLORS.honey)}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = COLORS.border)}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
            style={{ backgroundColor: `${COLORS.honey}1A` }}
          >
            <Lightbulb style={{ color: COLORS.honey }} size={24} />
          </div>

          <h3 className="text-2xl font-bold mb-4 font-display" style={{ color: COLORS.paper }}>
            Our Mission
          </h3>

          <p className="leading-8" style={{ color: COLORS.muted }}>
            To educate, inspire and empower every learner to achieve their
            academic best while developing confidence and lifelong learning
            skills.
          </p>
        </div>

        <div
          className="rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-1"
          style={{ backgroundColor: COLORS.secondary, borderColor: COLORS.border }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = COLORS.honey)}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = COLORS.border)}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
            style={{ backgroundColor: `${COLORS.honey}1A` }}
          >
            <Eye style={{ color: COLORS.honey }} size={24} />
          </div>

          <h3 className="text-2xl font-bold mb-4 font-display" style={{ color: COLORS.paper }}>
            Our Vision
          </h3>

          <p className="leading-8" style={{ color: COLORS.muted }}>
            To become a trusted academic support centre where learners gain the
            knowledge, confidence and skills needed to succeed in school and
            beyond.
          </p>
        </div>

      </div>

      {/* Why We Exist */}
      <div className="mt-24 md:mt-32 max-w-4xl">

        <span
          className="font-semibold uppercase tracking-[0.18em] text-sm"
          style={{ color: COLORS.honey }}
        >
          Why We Exist
        </span>

        <h3
          className="mt-3 text-3xl font-bold tracking-tight font-display"
          style={{ color: COLORS.paper }}
        >
          Supporting learners where they need it most.
        </h3>

        <div className="mt-8 space-y-6 text-lg leading-8" style={{ color: COLORS.muted }}>

          <p>
            House of Learning was established because we recognised a growing
            need for quality academic support within the Eldorado Park
            community. Many learners have the potential to succeed but simply
            need additional guidance, encouragement and structured learning.
          </p>

          <p>
            Following the COVID-19 pandemic, many learners experienced learning
            gaps that affected their confidence and academic progress. We chose
            to respond by creating a supportive environment where learners can
            ask questions freely, strengthen their understanding and regain
            confidence.
          </p>

          <p>
            Through face-to-face tutoring, personalised attention and practical
            academic support, we help learners improve their performance while
            preparing them for long-term success.
          </p>

        </div>

      </div>

      {/* Highlights — bordered grid instead of plain text rows */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-24 md:mt-32">
        {highlights.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3 p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1"
            style={{ backgroundColor: COLORS.secondary, borderColor: COLORS.border }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = COLORS.honey)}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = COLORS.border)}
          >
            <CheckCircle2 style={{ color: COLORS.honey }} className="mt-1 shrink-0" size={20} />
            <p style={{ color: COLORS.paper }}>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

