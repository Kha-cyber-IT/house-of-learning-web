import React from 'react';
import { 
  BookOpen, 
  ArrowRight, 
  Star, 
  Clock, 
  CheckCircle2, 
  Users, 
  Calendar, 
  Award, 
  TrendingUp,
  Calculator,
  BookA,
  FlaskConical,
  Briefcase,
  Microscope,
  Quote,
  Check,
  Phone,
  ShieldCheck,
  GraduationCap,
  ChevronRight
} from 'lucide-react';
import { ViewState } from '../types';
import { LINKS } from '../constants';
import { SubjectsSection } from './SubjectsSection';

interface HomeProps {
  setActiveView: (view: ViewState) => void;
}

export const Home: React.FC<HomeProps> = ({ setActiveView }) => {
  return (
    <div className="w-full flex flex-col gap-24 md:gap-32 pb-24 bg-slate-50 font-sans">
      
      {/* HERO SECTION */}
      <section className="relative mx-4 mt-4 lg:mx-8 lg:mt-8 rounded-[2.5rem] overflow-hidden bg-slate-900">
        {/* Background Image & Overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
          style={{
            backgroundImage: "url('https://i.postimg.cc/7PjBXjJF/1769278237608.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 20%',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900/90" />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-[2px]" />

        {/* Floating Gradient Cards (Desktop Only) */}
        <div className="hidden lg:flex absolute top-32 right-[10%] z-20 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-3xl shadow-2xl items-center gap-4 transition-transform hover:-translate-y-2 duration-500">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-inner">
            <TrendingUp className="text-white w-6 h-6" />
          </div>
          <div>
            <p className="text-white font-extrabold text-xl leading-none">98%</p>
            <p className="text-white/80 font-medium text-sm mt-1">Success Rate</p>
          </div>
        </div>

        <div className="hidden lg:flex absolute bottom-40 left-[8%] z-20 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-3xl shadow-2xl items-center gap-4 transition-transform hover:-translate-y-2 duration-500">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-inner">
            <GraduationCap className="text-white w-6 h-6" />
          </div>
          <div>
            <p className="text-white font-extrabold text-xl leading-none">Top 1%</p>
            <p className="text-white/80 font-medium text-sm mt-1">Expert Tutors</p>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-40 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-white/90 text-sm font-semibold tracking-wide uppercase">Trusted Education Partner</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[1.05] mb-8 max-w-5xl">
            Unlock Your Child's <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              True Potential
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-300 font-medium max-w-3xl mb-12 leading-relaxed">
            Premium personalized tutoring designed to build confidence, master subjects, and achieve exceptional results.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a 
              href={LINKS.REGISTRATION}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold text-lg hover:bg-slate-100 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2"
            >
              Book a Session <ArrowRight className="w-5 h-5" />
            </a>
            <button 
              onClick={() => setActiveView('subjects')}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
            >
              Explore Subjects
            </button>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="max-w-7xl mx-auto px-6 w-full -mt-16 md:-mt-24 relative z-30">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 divide-x-0 lg:divide-x divide-slate-100">
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">500+</span>
              <span className="text-slate-500 font-medium">Active Students</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">98%</span>
              <span className="text-slate-500 font-medium">Success Rate</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">R–12</span>
              <span className="text-slate-500 font-medium">Grades Covered</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">50+</span>
              <span className="text-slate-500 font-medium">Experienced Tutors</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">The House of Learning Difference</h2>
          <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
            We move beyond traditional teaching. Our approach is designed to adapt to your child, fostering a deep understanding and love for learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              icon: <Users className="w-8 h-8 text-blue-600" />,
              title: "Personalized Learning",
              desc: "Individualized learning plans tailored to your child's unique needs, style, and academic goals.",
              bg: "bg-blue-50"
            },
            {
              icon: <Award className="w-8 h-8 text-emerald-600" />,
              title: "Qualified Tutors",
              desc: "Rigorous vetting ensures only the most passionate and knowledgeable experts guide your child.",
              bg: "bg-emerald-50"
            },
            {
              icon: <Calendar className="w-8 h-8 text-indigo-600" />,
              title: "Flexible Scheduling",
              desc: "Tutoring that fits your busy life. Schedule sessions when it works best for your family.",
              bg: "bg-indigo-50"
            },
            {
              icon: <TrendingUp className="w-8 h-8 text-orange-600" />,
              title: "Proven Results",
              desc: "A track record of dramatic grade improvements, higher test scores, and renewed confidence.",
              bg: "bg-orange-50"
            }
          ].map((feature, idx) => (
            <div 
              key={idx}
              className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col"
            >
              <div className={`w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed flex-grow">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED SUBJECTS */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Featured Subjects</h2>
            <p className="text-lg text-slate-500 font-medium">
              Master the core curriculum with focused, expert-led sessions in our most popular subjects.
            </p>
          </div>
          <button 
            onClick={() => setActiveView('subjects')}
            className="group flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-900 rounded-xl font-bold hover:bg-slate-200 transition-colors shrink-0"
          >
            View All Subjects
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { name: "Mathematics", icon: <Calculator className="w-7 h-7" />, color: "text-blue-600", bg: "bg-blue-50" },
            { name: "English", icon: <BookA className="w-7 h-7" />, color: "text-rose-600", bg: "bg-rose-50" },
            { name: "Physical Sciences", icon: <FlaskConical className="w-7 h-7" />, color: "text-emerald-600", bg: "bg-emerald-50" },
            { name: "Accounting", icon: <Briefcase className="w-7 h-7" />, color: "text-amber-600", bg: "bg-amber-50" },
            { name: "Life Sciences", icon: <Microscope className="w-7 h-7" />, color: "text-teal-600", bg: "bg-teal-50" },
            { name: "Business Studies", icon: <TrendingUp className="w-7 h-7" />, color: "text-indigo-600", bg: "bg-indigo-50" },
          ].map((subject, idx) => (
            <div 
              key={idx}
              className="group cursor-pointer bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all duration-300 flex items-center gap-6"
              onClick={() => setActiveView('subjects')}
            >
              <div className={`w-14 h-14 rounded-2xl ${subject.bg} ${subject.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                {subject.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{subject.name}</h3>
                <p className="text-slate-400 font-medium text-sm mt-1">Grade R - 12</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LEARNING JOURNEY */}
      <section className="max-w-7xl mx-auto px-6 w-full py-12">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Your Journey to Success</h2>
          <p className="text-lg md:text-xl text-slate-500 font-medium">
            A simple, transparent process designed to get your child on the fast track to academic excellence.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-100 via-indigo-100 to-blue-100 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {[
              { step: "1", title: "Book", desc: "Schedule a convenient time for an initial consultation.", icon: <Calendar className="w-6 h-6" /> },
              { step: "2", title: "Assessment", desc: "We identify strengths, weaknesses, and learning gaps.", icon: <ClipboardCheck className="w-6 h-6" /> },
              { step: "3", title: "Tutoring", desc: "Engage in focused, 1-on-1 personalized sessions.", icon: <BookOpen className="w-6 h-6" /> },
              { step: "4", title: "Achieve Results", desc: "Watch grades improve and confidence soar.", icon: <Star className="w-6 h-6" /> },
            ].map((item, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center justify-center text-blue-600 mb-6 group-hover:-translate-y-2 group-hover:shadow-2xl transition-all duration-300 relative z-10">
                  {item.icon}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm border-4 border-slate-50">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                
                {/* Mobile Down Arrow */}
                {idx < 3 && (
                  <div className="lg:hidden mt-8 text-slate-300">
                    <ArrowRight className="w-8 h-8 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT SUCCESS BANNER */}
      <section className="w-full px-4 lg:px-8">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-blue-600 via-indigo-700 to-slate-900 rounded-[2.5rem] p-10 md:p-16 lg:p-20 overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Empowering Students for a Brighter Future
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  "Grade R–12 Expertise",
                  "Dedicated Homework Support",
                  "Comprehensive Exam Prep",
                  "Premium One-on-One Tutoring"
                ].map((text, i) => (
                  <div key={i} className="flex items-center justify-center lg:justify-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-400/20 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="text-white/90 font-medium text-lg">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="shrink-0 w-full lg:w-auto">
              <a 
                href={LINKS.REGISTRATION}
                target="_blank"
                rel="noreferrer"
                className="block w-full text-center px-10 py-5 bg-white text-indigo-700 rounded-2xl font-bold text-xl hover:bg-slate-50 hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Start Learning Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <div className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Simple, Transparent Pricing</h2>
            <p className="text-lg text-slate-500 font-medium mb-8 leading-relaxed">
              Invest in your child's future with our flexible and affordable tutoring packages. No hidden fees, just pure value.
            </p>
            <button 
              onClick={() => setActiveView('pricing')}
              className="hidden lg:inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20"
            >
              See Full Pricing <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="w-full max-w-md bg-slate-50 rounded-3xl p-8 border border-slate-200 relative">
            <div className="absolute -top-4 -right-4 bg-emerald-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
              Most Flexible
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Hourly Sessions</h3>
                <p className="text-slate-500 text-sm font-medium">Pay as you go</p>
              </div>
            </div>
            
            <div className="mb-8">
              <span className="text-slate-500 font-medium">Starting From</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-5xl font-extrabold text-slate-900">R150</span>
                <span className="text-slate-500 font-medium">/hour</span>
              </div>
            </div>

            <a 
              href={LINKS.WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="block w-full py-4 text-center bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 mb-4"
            >
              Book Now
            </a>

            <button 
              onClick={() => setActiveView('pricing')}
              className="lg:hidden w-full py-4 text-center bg-transparent border border-slate-300 text-slate-700 rounded-xl font-bold hover:bg-slate-100 transition-colors"
            >
              See Full Pricing
            </button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Loved by Parents & Students</h2>
          <p className="text-lg md:text-xl text-slate-500 font-medium">
            Don't just take our word for it. Hear from the families whose lives we've helped transform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              role: "Parent Review",
              name: "Sarah M.",
              quote: "The personalized attention my son received was incredible. His math marks improved by 30% in just one term. The tutors genuinely care.",
              avatar: "SM"
            },
            {
              role: "Student Review",
              name: "Jason T., Grade 11",
              quote: "I used to dread Physical Sciences, but my tutor broke down complex concepts so easily. I actually look forward to my sessions now!",
              avatar: "JT"
            },
            {
              role: "Success Story",
              name: "Lerato K.",
              quote: "Thanks to the intensive exam prep, I was able to secure my spot at university. The resources and mock exams were a game changer.",
              avatar: "LK"
            }
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-100 group-hover:text-blue-50 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 font-medium leading-relaxed mb-8 relative z-10 text-lg">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-lg shrink-0">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 w-full mb-12">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">
              Ready to Help Your Child Succeed?
            </h2>
            <p className="text-xl text-slate-300 font-medium mb-12">
              Join the House of Learning family today. Let's build a foundation for lifelong academic excellence together.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href={LINKS.REGISTRATION}
                target="_blank"
                rel="noreferrer"
                className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-500 hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2"
              >
                Book Session <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href={`tel:${LINKS.PHONE.replace(/\s/g, '')}`}
                className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" /> Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

// Helper component for timeline icon (not imported from lucide to keep imports clean above)
function ClipboardCheck(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m9 14 2 2 4-4" />
    </svg>
  );
}

