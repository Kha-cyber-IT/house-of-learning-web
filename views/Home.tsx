import React, { useState } from 'react';
import {
  Clock,
  Star,
  Calendar,
  Check,
  MapPin,
  Mail,
  Phone,
  Send,
  CheckCircle,
} from 'lucide-react';
import { ViewState } from '../types';
import { LINKS } from '../constants';
import { SubjectsSection } from './SubjectsSection';

interface HomeProps {
  setActiveView: (view: ViewState) => void;
}

// --- HUMAN COLOR TOKENS ---
// ink: deep charcoal-green background, paper: warm parchment,
// honey: primary accent, brick: warm secondary accent,
// sage / denim / plum: category accents (mirrors the Services redesign)
const COLORS = {
  ink: '#20241F',
  inkDeep: '#23302A',
  paper: '#F7F2E7',
  muted: '#B9C2B8',
  honey: '#D9A441',
  honeyHover: '#C7943A',
  brick: '#B6472F',
  sage: '#6F8F6A',
  denim: '#3E6C86',
  plum: '#8B5D6B',
};

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  icon: React.ElementType;
  accent: string;
  features: string[];
  popular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    id: "hourly",
    name: "Hourly Sessions",
    description: "Flexible help when you need it most.",
    price: "R150",
    period: "per hour",
    icon: Clock,
    accent: COLORS.sage,
    features: [
      "1-on-1 personalized tutoring",
      "Subject specific assistance",
      "Flexible scheduling",
      "Pay as you go",
    ],
  },
  {
    id: "monthly",
    name: "Monthly Package",
    description: "Consistent support for sustained improvement.",
    price: "R260",
    period: "per month",
    icon: Star,
    accent: COLORS.honey,
    popular: true,
    features: [
      "16 hours monthly tutoring",
      "Dedicated mentor assignment",
      "Personalized development plan",
      "Monthly progress assessments",
      "Exam readiness preparation",
      "Unlimited resource access",
    ],
  },
  {
    id: "weekly",
    name: "Weekly Plan",
    description: "Intensive support for rapid progress.",
    price: "R600",
    period: "per month",
    icon: Calendar,
    accent: COLORS.plum,
    features: [
      "4 hours weekly tutoring",
      "Priority session booking",
      "Weekly goal setting",
      "Detailed progress reports",
      "Homework & assignment help",
    ],
  },
];

// Small helper: a section whose BACKGROUND bleeds full viewport width on
// mobile (no side gutters) but stays a normal rounded, centered, max-w-6xl
// block from md upward — exactly like the current desktop design.
const FullBleedSection: React.FC<{
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
  id?: string;
}> = ({ className = '', innerClassName = '', children, id }) => (
  <section
    id={id}
    className={`relative left-1/2 right-1/2 -mx-[50vw] w-screen md:static md:left-auto md:right-auto md:mx-auto md:w-full md:max-w-6xl rounded-none md:rounded-3xl overflow-hidden ${className}`}
  >
    <div className={`px-4 py-12 md:px-16 md:py-16 ${innerClassName}`}>
      {children}
    </div>
  </section>
);

export const Home: React.FC<HomeProps> = ({ setActiveView }) => {
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  return (
    <div className="space-y-32">

      {/* HERO SECTION */}
      <FullBleedSection className="mb-20 min-h-[500px] flex items-end">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://i.postimg.cc/7PjBXjJF/1769278237608.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div className="absolute inset-0 z-0" style={{ backgroundColor: `${COLORS.ink}E6` }}></div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8 w-full max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-extrabold font-display tracking-tight leading-[1.1] mb-6" style={{ color: COLORS.paper }}>
              House of <br /> <span style={{ color: COLORS.honey }}>Learning</span>
            </h1>
            <p className="text-xl font-medium leading-relaxed" style={{ color: COLORS.muted }}>
              Unlocking potential through personalized education. We match every student with expert tutors to ignite a lifelong passion for success.
            </p>
          </div>
          <a
            href={LINKS.REGISTRATION}
            target="_blank"
            rel="noreferrer"
            className="hidden md:block px-8 py-4 rounded-xl text-base font-bold shadow-lg transition-all"
            style={{ backgroundColor: COLORS.honey, color: COLORS.inkDeep }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.honeyHover)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLORS.honey)}
          >
            Book a Session
          </a>
        </div>
      </FullBleedSection>

      {/* SERVICES GRID (contained cards — not full-bleed) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        <div className="card-service rounded-2xl p-8 flex flex-col" style={{ border: `2px solid ${COLORS.denim}33` }}>
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-8" style={{ backgroundColor: COLORS.denim }}>
            <span className="material-symbols-outlined text-white text-2xl md:text-3xl">person</span>
          </div>
          <h3 className="text-2xl font-bold font-display mb-4 text-slate-900">Private Tutoring</h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-8">Exclusive one-on-one attention tailored to your unique learning style and pace.</p>
          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-center gap-3 text-sm text-slate-600 font-medium"><span className="material-symbols-outlined text-lg" style={{ color: COLORS.denim }}>verified</span> Personalized plans</li>
            <li className="flex items-center gap-3 text-sm text-slate-600 font-medium"><span className="material-symbols-outlined text-lg" style={{ color: COLORS.denim }}>verified</span> Flexible scheduling</li>
            <li className="flex items-center gap-3 text-sm text-slate-600 font-medium"><span className="material-symbols-outlined text-lg" style={{ color: COLORS.denim }}>verified</span> Subject specific</li>
          </ul>
          <button
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full py-3.5 bg-slate-50 text-slate-700 transition-all rounded-xl font-bold text-sm hover:text-white"
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.denim)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '')}
          >
            Learn More
          </button>
        </div>

        <div className="card-service rounded-2xl p-8 flex flex-col" style={{ border: `2px solid ${COLORS.sage}33` }}>
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-8" style={{ backgroundColor: COLORS.sage }}>
            <span className="material-symbols-outlined text-white text-2xl md:text-3xl">school</span>
          </div>
          <h3 className="text-2xl font-bold font-display mb-4 text-slate-900">Structured Programs</h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-8">Curriculum-aligned learning paths designed to build solid foundations for all grades.</p>
          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-center gap-3 text-sm text-slate-600 font-medium"><span className="material-symbols-outlined text-lg" style={{ color: COLORS.sage }}>verified</span> Grade R to 12</li>
            <li className="flex items-center gap-3 text-sm text-slate-600 font-medium"><span className="material-symbols-outlined text-lg" style={{ color: COLORS.sage }}>verified</span> Foundation building</li>
            <li className="flex items-center gap-3 text-sm text-slate-600 font-medium"><span className="material-symbols-outlined text-lg" style={{ color: COLORS.sage }}>verified</span> Consistent support</li>
          </ul>
          <button
            onClick={() => { setActiveView('home'); setTimeout(() => document.getElementById('browse-all-btn')?.click(), 100); }}
            className="w-full py-3.5 bg-slate-50 text-slate-700 transition-all rounded-xl font-bold text-sm hover:text-white"
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.sage)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '')}
          >
            View Programs
          </button>
        </div>

        <div className="card-service rounded-2xl p-8 flex flex-col" style={{ border: `2px solid ${COLORS.plum}33` }}>
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-8" style={{ backgroundColor: COLORS.plum }}>
            <span className="material-symbols-outlined text-white text-2xl md:text-3xl">menu_book</span>
          </div>
          <h3 className="text-2xl font-bold font-display mb-4 text-slate-900">Exam Prep</h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-8">Intensive preparation strategies, past papers, and mock exams to maximize results.</p>
          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-center gap-3 text-sm text-slate-600 font-medium"><span className="material-symbols-outlined text-lg" style={{ color: COLORS.plum }}>verified</span> Past papers</li>
            <li className="flex items-center gap-3 text-sm text-slate-600 font-medium"><span className="material-symbols-outlined text-lg" style={{ color: COLORS.plum }}>verified</span> Mock exams</li>
            <li className="flex items-center gap-3 text-sm text-slate-600 font-medium"><span className="material-symbols-outlined text-lg" style={{ color: COLORS.plum }}>verified</span> Exam strategies</li>
          </ul>
          <a
            href={LINKS.REGISTRATION}
            target="_blank"
            rel="noreferrer"
            className="w-full py-3.5 bg-slate-50 text-slate-700 transition-all rounded-xl font-bold text-sm text-center block hover:text-white"
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.plum)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '')}
          >
            Get Ready
          </a>
        </div>
      </div>

      {/* WHY CHOOSE US (BENTO — contained cards, single consistent ink tone) */}
      <div className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold font-display mb-4 text-slate-900">Why Choose Us?</h2>
          <p className="text-slate-500 text-lg font-medium">We don't just teach subjects; we teach students how to learn.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[500px]">
          <div className="md:col-span-2 md:row-span-2 p-6 md:p-8 rounded-xl md:rounded-3xl flex flex-col justify-center shadow-xl" style={{ backgroundColor: COLORS.ink, color: COLORS.paper }}>
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8" style={{ color: COLORS.honey }}>
              <span className="material-symbols-outlined text-3xl md:text-4xl">workspace_premium</span>
            </div>
            <h4 className="text-3xl font-bold font-display mb-4">Personalized Learning</h4>
            <p className="text-lg leading-relaxed font-medium" style={{ color: COLORS.muted }}>We develop individualized learning plans for each student, ensuring that we address their specific needs, learning styles, and academic goals.</p>
          </div>
          <div className="p-6 md:p-8 rounded-xl md:rounded-3xl flex flex-col items-start shadow-xl" style={{ backgroundColor: COLORS.ink, color: COLORS.paper }}>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6" style={{ color: COLORS.honey }}>
              <span className="material-symbols-outlined text-xl md:text-2xl">groups</span>
            </div>
            <h4 className="text-xl font-bold font-display mb-2">Experienced Tutors</h4>
            <p className="text-sm leading-relaxed font-medium" style={{ color: COLORS.muted }}>Professional and vetted tutors dedicated to your success.</p>
          </div>
          <div className="p-6 md:p-8 rounded-xl md:rounded-3xl flex flex-col items-start shadow-xl" style={{ backgroundColor: COLORS.ink, color: COLORS.paper }}>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6" style={{ color: COLORS.honey }}>
              <span className="material-symbols-outlined text-xl md:text-2xl">star_rate</span>
            </div>
            <h4 className="text-xl font-bold font-display mb-2">Proven Results</h4>
            <p className="text-sm leading-relaxed font-medium" style={{ color: COLORS.muted }}>100% success rate with students moving to the next grade.</p>
          </div>
          <div className="md:col-span-2 p-6 md:p-8 rounded-xl md:rounded-3xl flex items-center gap-8 shadow-xl" style={{ backgroundColor: COLORS.ink, color: COLORS.paper }}>
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-white/10 flex-shrink-0 flex items-center justify-center" style={{ color: COLORS.honey }}>
              <span className="material-symbols-outlined text-4xl md:text-5xl">library_books</span>
            </div>
            <div>
              <h4 className="text-2xl font-bold font-display mb-2">Comprehensive Coverage</h4>
              <p className="text-sm md:text-base leading-relaxed font-medium" style={{ color: COLORS.muted }}>Maths, Sciences, Languages, and Commerce subjects for all levels.</p>
            </div>
          </div>
        </div>
      </div>

      {/* SUBJECTS SECTION */}
      <SubjectsSection />

      {/* PRICING SECTION (contained cards — not full-bleed) */}
      <div className="mb-32" id="pricing">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold font-display mb-3" style={{ color: COLORS.paper }}>Transparent Pricing</h2>
          <p className="text-sm md:text-base font-medium" style={{ color: COLORS.muted }}>Choose the plan that best fits your goals.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-stretch">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`p-6 rounded-2xl flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                plan.popular ? 'shadow-xl md:scale-105 md:z-10' : 'bg-white hover:shadow-lg'
              }`}
              style={
                plan.popular
                  ? { backgroundColor: COLORS.honey, border: `2px solid ${COLORS.honey}` }
                  : { border: `1.5px solid ${plan.accent}40` }
              }
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: plan.popular ? COLORS.inkDeep : `${plan.accent}1A`, color: plan.popular ? COLORS.honey : plan.accent }}
                >
                  <plan.icon size={18} />
                </div>
                {plan.popular && (
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide" style={{ backgroundColor: COLORS.inkDeep, color: COLORS.paper }}>
                    POPULAR
                  </span>
                )}
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-bold font-display text-slate-900">
                  {plan.name}
                </h3>
                <p className={`text-xs mt-1 ${plan.popular ? 'text-slate-800 font-medium' : 'text-slate-500'}`}>
                  {plan.description}
                </p>
              </div>
              <div className="mb-5">
                <span className="text-3xl font-bold text-slate-900">
                  {plan.price}
                </span>
                <span className={`text-xs ${plan.popular ? 'text-slate-800' : 'text-slate-500'}`}>
                  {' '}{plan.period}
                </span>
              </div>
              <ul className="space-y-2 mb-6 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className={`flex items-start gap-2 text-xs md:text-sm ${plan.popular ? 'text-slate-800 font-semibold' : 'text-slate-600'}`}>
                    <Check size={14} className="mt-0.5 shrink-0" style={{ color: plan.popular ? COLORS.inkDeep : plan.accent }} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={LINKS.WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl font-bold text-xs md:text-sm text-center transition-all"
                style={
                  plan.popular
                    ? { backgroundColor: COLORS.inkDeep, color: COLORS.paper }
                    : { backgroundColor: '#F8FAFC', color: '#334155' }
                }
                onMouseEnter={(e) => {
                  if (!plan.popular) {
                    e.currentTarget.style.backgroundColor = plan.accent;
                    e.currentTarget.style.color = '#fff';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!plan.popular) {
                    e.currentTarget.style.backgroundColor = '#F8FAFC';
                    e.currentTarget.style.color = '#334155';
                  }
                }}
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT SECTION — full-bleed background on mobile, contained on desktop */}
      <FullBleedSection id="contact" className="mb-32 shadow-xl" innerClassName="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start max-w-6xl mx-auto" >
        <div style={{ backgroundColor: COLORS.brick }} className="absolute inset-0 -z-10" />
        {/* Left Column: Info */}
        <div style={{ color: COLORS.paper }}>
          <h2 className="text-4xl font-extrabold font-display mb-6">Get in Touch</h2>
          <p className="text-lg mb-10 leading-relaxed font-medium" style={{ color: `${COLORS.paper}E6` }}>
            Have questions? We're here to help. Reach out to us via any of the channels below or fill out the form.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center shrink-0" style={{ color: COLORS.paper }}>
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Visit Us</h4>
                <p style={{ color: `${COLORS.paper}CC` }}>Green Masjid Ext 2, Eldorado Park</p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center shrink-0" style={{ color: COLORS.paper }}>
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Email Us</h4>
                <a href={`mailto:${LINKS.EMAIL}`} className="hover:opacity-100 transition-opacity break-all text-sm md:text-base" style={{ color: `${COLORS.paper}CC` }}>{LINKS.EMAIL}</a>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center shrink-0" style={{ color: COLORS.paper }}>
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Call Us</h4>
                <a href={`tel:${LINKS.PHONE.replace(/\s/g, '')}`} className="hover:opacity-100 transition-opacity" style={{ color: `${COLORS.paper}CC` }}>{LINKS.PHONE}</a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="rounded-2xl">
          {contactSubmitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-white/15 rounded-full flex items-center justify-center mx-auto mb-4" style={{ color: COLORS.paper }}>
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: COLORS.paper }}>Message Sent!</h3>
              <p className="mb-6" style={{ color: `${COLORS.paper}CC` }}>We'll be in touch shortly.</p>
              <button onClick={() => setContactSubmitted(false)} className="font-bold hover:underline" style={{ color: COLORS.paper }}>Send another</button>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: COLORS.paper }}>Name</label>
                <input type="text" className="w-full px-4 py-3.5 rounded-xl bg-transparent border focus:outline-none transition-all placeholder:opacity-60" style={{ borderColor: `${COLORS.paper}66`, color: COLORS.paper }} placeholder="John Doe" required />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: COLORS.paper }}>Phone</label>
                <input type="tel" className="w-full px-4 py-3.5 rounded-xl bg-transparent border focus:outline-none transition-all placeholder:opacity-60" style={{ borderColor: `${COLORS.paper}66`, color: COLORS.paper }} placeholder="+27..." required />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: COLORS.paper }}>Email</label>
                <input type="email" className="w-full px-4 py-3.5 rounded-xl bg-transparent border focus:outline-none transition-all break-all placeholder:opacity-60" style={{ borderColor: `${COLORS.paper}66`, color: COLORS.paper }} placeholder="john@example.com" required />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: COLORS.paper }}>Message</label>
                <textarea className="w-full px-4 py-3.5 rounded-xl bg-transparent border focus:outline-none transition-all min-h-[120px] placeholder:opacity-60" style={{ borderColor: `${COLORS.paper}66`, color: COLORS.paper }} placeholder="How can we help?" required></textarea>
              </div>
              <button
                type="submit"
                className="w-full font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 mt-2"
                style={{ backgroundColor: COLORS.honey, color: COLORS.inkDeep }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.honeyHover)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLORS.honey)}
              >
                <Send size={20} /> Send Message
              </button>
            </form>
          )}
        </div>
      </FullBleedSection>

      {/* CLOSING CTA — full-bleed background on mobile, contained on desktop */}
      <FullBleedSection className="text-center shadow-xl" innerClassName="max-w-6xl mx-auto">
        <div style={{ backgroundColor: COLORS.denim }} className="absolute inset-0 -z-10" />
        <h2 className="text-4xl font-extrabold font-display mb-6 leading-tight" style={{ color: COLORS.paper }}>Ready to Excel?</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: `${COLORS.paper}E6` }}>Join House of Learning today and take the first step towards academic success.</p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href={LINKS.MAPS}
            target="_blank"
            rel="noreferrer"
            className="px-12 py-5 rounded-2xl font-bold text-lg shadow-xl transition-all"
            style={{ backgroundColor: COLORS.paper, color: COLORS.denim }}
          >
            Visit Us
          </a>
        </div>
      </FullBleedSection>
    </div>
  );
};

