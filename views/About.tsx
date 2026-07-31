import React from 'react';
import { Lightbulb, Eye, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 lg:px-12 py-20 md:py-28 animate-fade-in"
    >
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm">
          About House of Learning
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Helping Learners Build Brighter Futures
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          House of Learning is dedicated to helping learners improve their
          academic performance while building confidence, discipline and a love
          for learning. We guide every learner to discover their strengths,
          develop strong study habits and prepare for a successful future.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid gap-6 md:grid-cols-2 mt-20">

        <div className="rounded-3xl bg-[#2A6EBB] text-white p-8 shadow-lg">
          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6">
            <Lightbulb className="text-[#2A6EBB]" size={24} />
          </div>

          <h3 className="text-2xl font-bold mb-4">
            Our Mission
          </h3>

          <p className="leading-8 text-white/90">
            To educate, inspire and empower every learner to achieve their
            academic best while developing confidence and lifelong learning
            skills.
          </p>
        </div>

        <div className="rounded-3xl bg-[#2A6EBB] text-white p-8 shadow-lg">
          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6">
            <Eye className="text-[#2A6EBB]" size={24} />
          </div>

          <h3 className="text-2xl font-bold mb-4">
            Our Vision
          </h3>

          <p className="leading-8 text-white/90">
            To become a trusted academic support centre where learners gain the
            knowledge, confidence and skills needed to succeed in school and
            beyond.
          </p>
        </div>

      </div>

      {/* Why We Exist */}
      <div className="mt-24 max-w-4xl">

        <span className="text-primary font-semibold uppercase tracking-[0.18em] text-sm">
          Why We Exist
        </span>

        <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
          Supporting learners where they need it most.
        </h3>

        <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">

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

      {/* Highlights */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-16">

        <div className="flex items-start gap-3">
          <CheckCircle2 className="text-primary mt-1" size={20} />
          <p className="text-slate-700">Face-to-face tutoring</p>
        </div>

        <div className="flex items-start gap-3">
          <CheckCircle2 className="text-primary mt-1" size={20} />
          <p className="text-slate-700">Homework support</p>
        </div>

        <div className="flex items-start gap-3">
          <CheckCircle2 className="text-primary mt-1" size={20} />
          <p className="text-slate-700">Exam preparation</p>
        </div>

        <div className="flex items-start gap-3">
          <CheckCircle2 className="text-primary mt-1" size={20} />
          <p className="text-slate-700">Study skills development</p>
        </div>

        <div className="flex items-start gap-3">
          <CheckCircle2 className="text-primary mt-1" size={20} />
          <p className="text-slate-700">Individual academic support</p>
        </div>

        <div className="flex items-start gap-3">
          <CheckCircle2 className="text-primary mt-1" size={20} />
          <p className="text-slate-700">Building learner confidence</p>
        </div>

      </div>
    </section>
  );
}
