import React, { useEffect, useRef, useState } from 'react';
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

// --- REFINED "WARM FOREST" TOKENS ---
// Same warm, human character as before, but deeper greens, a brighter
// (more modern) gold, and a calmer contact/CTA palette instead of brick red.
//   ink / inkDeep : deep forest charcoal (hero, bento, pricing)
//   paper         : soft cream
//   honey         : primary accent (use sparingly)
//   pine / lake   : contact + closing CTA backgrounds
//   sage / denim / plum : category accents
const COLORS = {
  ink: '#17211C',
  inkDeep: '#101813',
  paper: '#FAF6EC',
  muted: '#AEBBB1',
  honey: '#E8B04B',
  honeyHover: '#D79D35',
  pine: '#1E4A3F',
  lake: '#2B5876',
  clay: '#C2623F',
  terra: '#A84F31',
  terraDeep: '#8A3F26',
  sage: '#4F8F67',
  denim: '#3F78A0',
  plum: '#8E5A7A',
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
    id: 'hourly',
    name: 'Hourly Sessions',
    description: 'Flexible help when you need it most.',
    price: 'R150',
    period: 'per hour',
    icon: Clock,
    accent: COLORS.sage,
    features: [
      '1-on-1 personalized tutoring',
      'Subject specific assistance',
      'Flexible scheduling',
      'Pay as you go',
    ],
  },
  {
    id: 'monthly',
    name: 'Monthly Package',
    description: 'Consistent support for sustained improvement.',
    // NOTE: please double-check this price. 16 hours/month at R260 is far
    // below the R150/hour rate above.
    price: 'R260',
    period: 'per month',
    icon: Star,
    accent: COLORS.honey,
    popular: true,
    features: [
      '16 hours monthly tutoring',
      'Dedicated mentor assignment',
      'Personalized development plan',
      'Monthly progress assessments',
      'Exam readiness preparation',
      'Unlimited resource access',
    ],
  },
  {
    id: 'weekly',
    name: 'Weekly Plan',
    description: 'Intensive support for rapid progress.',
    price: 'R600',
    period: 'per month',
    icon: Calendar,
    accent: COLORS.plum,
    features: [
      '4 hours weekly tutoring',
      'Priority session booking',
      'Weekly goal setting',
      'Detailed progress reports',
      'Homework & assignment help',
    ],
  },
];

// Hover styles live in CSS (not JS handlers) and only apply on devices that
// really hover, so buttons don't get "stuck" coloured after a tap on mobile.
const HOME_CSS = `
  .hl-honey-btn { background-color: ${COLORS.honey}; color: ${COLORS.inkDeep}; }
  .hl-card-btn { background-color: #F3F4F1; color: #2B3530; }
  .hl-plan-btn { background-color: #F3F4F1; color: #2B3530; }
  .hl-field { border: 1px solid ${COLORS.paper}55; color: ${COLORS.paper}; background: ${COLORS.paper}0D; }
  .hl-field::placeholder { color: ${COLORS.paper}99; }
  .hl-field:focus { outline: none; border-color: ${COLORS.honey}; box-shadow: 0 0 0 3px ${COLORS.honey}40; }
  .hl-btn:focus-visible, .hl-field:focus-visible { outline: 2px solid ${COLORS.honey}; outline-offset: 2px; }

  /* scroll reveal + card tilt */
  .hl-reveal { opacity: 0; transform: translateY(24px); transition: opacity .7s ease, transform .7s ease; }
  .hl-reveal.is-in { opacity: 1; transform: none; }
  .hl-tilt { transition: transform .2s ease-out; will-change: transform; }

  /* 3D book stack (pure CSS, no libraries) */
  .hl-scene { position: relative; width: 240px; height: 240px; perspective: 900px; }
  .hl-float { animation: hl-float 6s ease-in-out infinite; }
  .hl-stack { position: relative; width: 100%; height: 100%; transform-style: preserve-3d; animation: hl-spin 22s linear infinite; }
  .hl-book { position: absolute; left: 50%; top: 50%; width: var(--w); height: var(--t);
    margin-left: calc(var(--w) / -2); margin-top: calc(var(--t) / -2);
    transform-style: preserve-3d; transform: translateY(var(--y)) rotateY(var(--r)); }
  .hl-face { position: absolute; }
  .hl-pages { background: repeating-linear-gradient(180deg, ${COLORS.paper} 0 3px, #E4DAC3 3px 4px); }
  .hl-cover { background: var(--c); }
  .hl-spine { background: var(--c); filter: brightness(.78); }
  .hl-f-front, .hl-f-back { width: var(--w); height: var(--t); }
  .hl-f-front { transform: translateZ(calc(var(--d) / 2)); }
  .hl-f-back { transform: rotateY(180deg) translateZ(calc(var(--d) / 2)); }
  .hl-f-left, .hl-f-right { width: var(--d); height: var(--t); left: calc((var(--w) - var(--d)) / 2); }
  .hl-f-right { transform: rotateY(90deg) translateZ(calc(var(--w) / 2)); }
  .hl-f-left { transform: rotateY(-90deg) translateZ(calc(var(--w) / 2)); }
  .hl-f-top, .hl-f-bottom { width: var(--w); height: var(--d); top: calc((var(--t) - var(--d)) / 2); }
  .hl-f-top { transform: rotateX(90deg) translateZ(calc(var(--t) / 2)); }
  .hl-f-bottom { transform: rotateX(-90deg) translateZ(calc(var(--t) / 2)); }
  @keyframes hl-spin { from { transform: rotateX(-20deg) rotateY(0deg); } to { transform: rotateX(-20deg) rotateY(360deg); } }
  @keyframes hl-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
  @media (prefers-reduced-motion: reduce) {
    .hl-stack { animation: none; transform: rotateX(-20deg) rotateY(-30deg); }
    .hl-float { animation: none; }
    .hl-reveal { opacity: 1; transform: none; transition: none; }
    .hl-tilt { transition: none; }
  }
  @media (hover: hover) {
    .hl-honey-btn:hover { background-color: ${COLORS.honeyHover}; }
    .hl-card-btn:hover, .hl-plan-btn:hover { background-color: var(--accent); color: #fff; }
  }
`;

// A section whose BACKGROUND bleeds edge-to-edge on mobile but is a normal
// rounded, centred max-w-6xl block from md upward.
// IMPORTANT: the 100vw trick can cause a horizontal scrollbar on desktop
// browsers with classic scrollbars. Make sure your app shell (or <body>) has
// `overflow-x: clip` / `overflow-x-hidden`.
// The background colour is now applied on the section itself (previously a
// -z-10 child, which could slip behind the page and disappear).
const FullBleedSection: React.FC<{
  className?: string;
  innerClassName?: string;
  background?: string;
  children: React.ReactNode;
  id?: string;
}> = ({ className = '', innerClassName = '', background, children, id }) => (
  <section
    id={id}
    style={background ? { background } : undefined}
    className={`relative left-1/2 right-1/2 -mx-[50vw] w-screen md:static md:left-auto md:right-auto md:mx-auto md:w-full md:max-w-6xl rounded-none md:rounded-3xl overflow-hidden ${className}`}
  >
    <div className={`px-5 py-14 md:px-16 md:py-20 ${innerClassName}`}>{children}</div>
  </section>
);

// Fades/slides content in once as it scrolls into view.
const Reveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({
  children,
  className = '',
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`hl-reveal ${visible ? 'is-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Subtle 3D tilt that follows a mouse. Ignored for touch/pen and reduced motion.
const Tilt: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || !ref.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `perspective(900px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translateY(-4px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = '';
  };

  return (
    <div ref={ref} onPointerMove={onMove} onPointerLeave={onLeave} className={`hl-tilt ${className}`}>
      {children}
    </div>
  );
};

// Rotating stack of three books — decorative only.
const BOOKS = [
  { c: COLORS.clay, w: 212, y: 40, r: 0 },
  { c: COLORS.sage, w: 190, y: 2, r: 16 },
  { c: COLORS.honey, w: 168, y: -36, r: -12 },
];

const HeroBooks: React.FC = () => (
  <div className="hl-scene hl-float" aria-hidden="true">
    <div
      className="absolute inset-6 rounded-full blur-3xl opacity-30"
      style={{ background: COLORS.honey }}
    />
    <div className="hl-stack">
      {BOOKS.map((b, i) => (
        <div
          key={i}
          className="hl-book"
          style={
            {
              '--w': `${b.w}px`,
              '--t': '34px',
              '--d': '150px',
              '--y': `${b.y}px`,
              '--r': `${b.r}deg`,
              '--c': b.c,
            } as React.CSSProperties
          }
        >
          <div className="hl-face hl-f-front hl-pages" />
          <div className="hl-face hl-f-back hl-pages" />
          <div className="hl-face hl-f-right hl-pages" />
          <div className="hl-face hl-f-left hl-spine" />
          <div className="hl-face hl-f-top hl-cover" />
          <div className="hl-face hl-f-bottom hl-cover" />
        </div>
      ))}
    </div>
  </div>
);

export const Home: React.FC<HomeProps> = ({ setActiveView }) => {
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: send the form to your backend / email service. Right now this only
    // shows the success message and does not deliver the enquiry anywhere.
    setContactSubmitted(true);
  };

  const serviceCards = [
    {
      color: COLORS.denim,
      icon: 'person',
      title: 'Private Tutoring',
      text: 'Exclusive one-on-one attention tailored to your unique learning style and pace.',
      items: ['Personalized plans', 'Flexible scheduling', 'Subject specific'],
      cta: 'Learn More',
      onClick: () => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      color: COLORS.sage,
      icon: 'school',
      title: 'Structured Programs',
      text: 'Curriculum-aligned learning paths designed to build solid foundations for all grades.',
      items: ['Grade R to 12', 'Foundation building', 'Consistent support'],
      cta: 'View Programs',
      onClick: () => {
        setActiveView('home');
        setTimeout(() => document.getElementById('browse-all-btn')?.click(), 100);
      },
    },
    {
      color: COLORS.plum,
      icon: 'menu_book',
      title: 'Exam Prep',
      text: 'Intensive preparation strategies, past papers, and mock exams to maximize results.',
      items: ['Past papers', 'Mock exams', 'Exam strategies'],
      cta: 'Get Ready',
      href: LINKS.REGISTRATION,
    },
  ];

  return (
    <div className="space-y-20 md:space-y-32">
      <style>{HOME_CSS}</style>

      {/* HERO */}
      <FullBleedSection
        className="min-h-[520px] md:min-h-[600px] flex items-end"
        innerClassName="w-full"
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://i.postimg.cc/7PjBXjJF/1769278237608.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        {/* Gradient overlay: lets the photo breathe at the top, dark where text sits */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `linear-gradient(180deg, ${COLORS.ink}99 0%, ${COLORS.ink}D9 55%, ${COLORS.inkDeep}F2 100%)`,
          }}
        />

        {/* 3D books: centred above the text on phones, right side on desktop */}
        <div className="absolute z-10 pointer-events-none left-1/2 -translate-x-1/2 top-6 scale-[0.7] origin-top md:left-auto md:translate-x-0 md:right-16 md:top-1/2 md:-translate-y-1/2 md:scale-100 md:origin-center">
          <HeroBooks />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8 w-full max-w-6xl mx-auto">
          <div className="h-40 md:hidden" aria-hidden="true" />
          <div className="max-w-2xl">
            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tight leading-[1.05] mb-5"
              style={{ color: COLORS.paper }}
            >
              House of <br />
              <span style={{ color: COLORS.honey }}>Learning</span>
            </h1>
            <p className="text-lg md:text-xl font-medium leading-relaxed" style={{ color: COLORS.muted }}>
              Unlocking potential through personalized education. We match every student with expert
              tutors to ignite a lifelong passion for success.
            </p>
          </div>
          {/* Visible on ALL screen sizes now (was hidden on mobile) */}
          <a
            href={LINKS.REGISTRATION}
            target="_blank"
            rel="noreferrer"
            className="hl-btn hl-honey-btn w-full md:w-auto text-center px-8 py-4 rounded-xl text-base font-bold shadow-lg transition-colors"
          >
            Book a Session
          </a>
        </div>
      </FullBleedSection>

      {/* SERVICES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {serviceCards.map((card, idx) => {
          const btnClass =
            'hl-btn hl-card-btn w-full py-3.5 rounded-xl font-bold text-sm text-center block transition-colors';
          const accentVar = { ['--accent' as string]: card.color } as React.CSSProperties;
          return (
            <Reveal key={card.title} delay={idx * 120} className="h-full">
            <Tilt className="h-full">
            <div
              className="card-service rounded-2xl p-6 md:p-8 flex flex-col h-full"
              style={{ border: `2px solid ${card.color}33` }}
            >
              <div
                className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-6 md:mb-8"
                style={{ backgroundColor: card.color }}
              >
                <span className="material-symbols-outlined text-white text-2xl md:text-3xl">{card.icon}</span>
              </div>
              <h3 className="text-2xl font-bold font-display mb-3 text-slate-900">{card.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">{card.text}</p>
              <ul className="space-y-3 mb-8 flex-grow">
                {card.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                    <span className="material-symbols-outlined text-lg" style={{ color: card.color }}>
                      verified
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              {card.href ? (
                <a href={card.href} target="_blank" rel="noreferrer" className={btnClass} style={accentVar}>
                  {card.cta}
                </a>
              ) : (
                <button type="button" onClick={card.onClick} className={btnClass} style={accentVar}>
                  {card.cta}
                </button>
              )}
            </div>
            </Tilt>
            </Reveal>
          );
        })}
      </div>

      {/* WHY CHOOSE US (bento) */}
      <div>
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold font-display mb-3 text-slate-900">Why Choose Us?</h2>
          <p className="text-slate-600 text-base md:text-lg font-medium">
            We don't just teach subjects; we teach students how to learn.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:auto-rows-fr">
          <div
            className="md:col-span-2 lg:row-span-2 p-6 md:p-10 rounded-2xl md:rounded-3xl flex flex-col justify-center shadow-xl"
            style={{ backgroundColor: COLORS.ink, color: COLORS.paper }}
          >
            <div
              className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 md:mb-8"
              style={{ color: COLORS.honey }}
            >
              <span className="material-symbols-outlined text-3xl md:text-4xl">workspace_premium</span>
            </div>
            <h4 className="text-2xl md:text-3xl font-bold font-display mb-3 md:mb-4">Personalized Learning</h4>
            <p className="text-base md:text-lg leading-relaxed font-medium" style={{ color: COLORS.muted }}>
              We develop individualized learning plans for each student, ensuring that we address their
              specific needs, learning styles, and academic goals.
            </p>
          </div>

          <div
            className="p-6 md:p-8 rounded-2xl md:rounded-3xl flex flex-col items-start shadow-xl"
            style={{ backgroundColor: COLORS.pine, color: COLORS.paper }}
          >
            <div
              className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5"
              style={{ color: COLORS.honey }}
            >
              <span className="material-symbols-outlined text-xl md:text-2xl">groups</span>
            </div>
            <h4 className="text-xl font-bold font-display mb-2">Experienced Tutors</h4>
            <p className="text-sm leading-relaxed font-medium" style={{ color: `${COLORS.paper}CC` }}>
              Professional and vetted tutors dedicated to your success.
            </p>
          </div>

          <div
            className="p-6 md:p-8 rounded-2xl md:rounded-3xl flex flex-col items-start shadow-xl"
            style={{ backgroundColor: COLORS.lake, color: COLORS.paper }}
          >
            <div
              className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5"
              style={{ color: COLORS.honey }}
            >
              <span className="material-symbols-outlined text-xl md:text-2xl">star_rate</span>
            </div>
            <h4 className="text-xl font-bold font-display mb-2">Proven Results</h4>
            <p className="text-sm leading-relaxed font-medium" style={{ color: `${COLORS.paper}CC` }}>
              100% success rate with students moving to the next grade.
            </p>
          </div>

          <div
            className="md:col-span-2 p-6 md:p-8 rounded-2xl md:rounded-3xl flex items-center gap-5 md:gap-8 shadow-xl min-w-0"
            style={{ backgroundColor: COLORS.inkDeep, color: COLORS.paper }}
          >
            <div
              className="w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-white/10 flex-shrink-0 flex items-center justify-center"
              style={{ color: COLORS.honey }}
            >
              <span className="material-symbols-outlined text-3xl md:text-5xl">library_books</span>
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-bold font-display mb-2">Comprehensive Coverage</h4>
              <p className="text-sm md:text-base leading-relaxed font-medium" style={{ color: COLORS.muted }}>
                Maths, Sciences, Languages, and Commerce subjects for all levels.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SUBJECTS */}
      <SubjectsSection />

      {/* PRICING — now an explicit dark band so the paper-coloured heading is always readable */}
      <FullBleedSection id="pricing" background={COLORS.ink} innerClassName="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold font-display mb-3" style={{ color: COLORS.paper }}>
            Transparent Pricing
          </h2>
          <p className="text-sm md:text-base font-medium" style={{ color: COLORS.muted }}>
            Choose the plan that best fits your goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-stretch">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`p-6 rounded-2xl flex flex-col transition-transform duration-300 md:hover:-translate-y-1 ${
                plan.popular ? 'shadow-xl md:scale-105 md:z-10 order-first md:order-none' : 'bg-white'
              }`}
              style={
                plan.popular
                  ? { backgroundColor: COLORS.honey, border: `2px solid ${COLORS.honey}` }
                  : { border: `1.5px solid ${plan.accent}66` }
              }
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{
                    backgroundColor: plan.popular ? COLORS.inkDeep : `${plan.accent}1F`,
                    color: plan.popular ? COLORS.honey : plan.accent,
                  }}
                >
                  <plan.icon size={18} />
                </div>
                {plan.popular && (
                  <span
                    className="text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide"
                    style={{ backgroundColor: COLORS.inkDeep, color: COLORS.paper }}
                  >
                    POPULAR
                  </span>
                )}
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-bold font-display text-slate-900">{plan.name}</h3>
                <p className={`text-xs mt-1 ${plan.popular ? 'text-slate-800 font-medium' : 'text-slate-600'}`}>
                  {plan.description}
                </p>
              </div>
              <div className="mb-5">
                <span className="text-3xl font-bold text-slate-900">{plan.price}</span>
                <span className={`text-xs ${plan.popular ? 'text-slate-800' : 'text-slate-600'}`}> {plan.period}</span>
              </div>
              <ul className="space-y-2 mb-6 flex-grow">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-2 text-sm ${
                      plan.popular ? 'text-slate-800 font-semibold' : 'text-slate-700'
                    }`}
                  >
                    <Check
                      size={14}
                      className="mt-1 shrink-0"
                      style={{ color: plan.popular ? COLORS.inkDeep : plan.accent }}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={LINKS.WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className={`hl-btn w-full py-3 rounded-xl font-bold text-sm text-center transition-colors ${
                  plan.popular ? '' : 'hl-plan-btn'
                }`}
                style={
                  plan.popular
                    ? { backgroundColor: COLORS.inkDeep, color: COLORS.paper }
                    : ({ ['--accent' as string]: plan.accent } as React.CSSProperties)
                }
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </FullBleedSection>

      {/* CONTACT */}
      <FullBleedSection
        id="contact"
        background={`linear-gradient(135deg, ${COLORS.pine} 0%, ${COLORS.inkDeep} 100%)`}
        className="shadow-xl"
        innerClassName="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start max-w-6xl mx-auto"
      >
        <div style={{ color: COLORS.paper }}>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display mb-5">Get in Touch</h2>
          <p className="text-base md:text-lg mb-10 leading-relaxed font-medium" style={{ color: `${COLORS.paper}E6` }}>
            Have questions? We're here to help. Reach out to us via any of the channels below or fill out the form.
          </p>

          <div className="space-y-7">
            <div className="flex items-start gap-4 md:gap-5">
              <div
                className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0"
                style={{ color: COLORS.honey }}
              >
                <MapPin size={22} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Visit Us</h4>
                <p style={{ color: `${COLORS.paper}CC` }}>Green Masjid Ext 2, Eldorado Park</p>
              </div>
            </div>
            <div className="flex items-start gap-4 md:gap-5">
              <div
                className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0"
                style={{ color: COLORS.honey }}
              >
                <Mail size={22} />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-lg mb-1">Email Us</h4>
                <a
                  href={`mailto:${LINKS.EMAIL}`}
                  className="hover:underline break-all text-sm md:text-base"
                  style={{ color: `${COLORS.paper}CC` }}
                >
                  {LINKS.EMAIL}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 md:gap-5">
              <div
                className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0"
                style={{ color: COLORS.honey }}
              >
                <Phone size={22} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Call Us</h4>
                <a
                  href={`tel:${LINKS.PHONE.replace(/\s/g, '')}`}
                  className="hover:underline"
                  style={{ color: `${COLORS.paper}CC` }}
                >
                  {LINKS.PHONE}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl">
          {contactSubmitted ? (
            <div className="text-center py-12" role="status">
              <div
                className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ color: COLORS.honey }}
              >
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: COLORS.paper }}>
                Message Sent!
              </h3>
              <p className="mb-6" style={{ color: `${COLORS.paper}CC` }}>
                We'll be in touch shortly.
              </p>
              <button
                type="button"
                onClick={() => setContactSubmitted(false)}
                className="hl-btn font-bold hover:underline"
                style={{ color: COLORS.honey }}
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-5">
              <div>
                <label htmlFor="hl-name" className="block text-sm font-bold mb-2" style={{ color: COLORS.paper }}>
                  Name
                </label>
                <input
                  id="hl-name"
                  type="text"
                  autoComplete="name"
                  className="hl-field w-full px-4 py-3.5 rounded-xl transition-all text-base"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="hl-phone" className="block text-sm font-bold mb-2" style={{ color: COLORS.paper }}>
                  Phone
                </label>
                <input
                  id="hl-phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  className="hl-field w-full px-4 py-3.5 rounded-xl transition-all text-base"
                  placeholder="+27..."
                  required
                />
              </div>
              <div>
                <label htmlFor="hl-email" className="block text-sm font-bold mb-2" style={{ color: COLORS.paper }}>
                  Email
                </label>
                <input
                  id="hl-email"
                  type="email"
                  autoComplete="email"
                  className="hl-field w-full px-4 py-3.5 rounded-xl transition-all text-base break-all"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="hl-message" className="block text-sm font-bold mb-2" style={{ color: COLORS.paper }}>
                  Message
                </label>
                <textarea
                  id="hl-message"
                  className="hl-field w-full px-4 py-3.5 rounded-xl transition-all min-h-[120px] text-base"
                  placeholder="How can we help?"
                  required
                />
              </div>
              <button
                type="submit"
                className="hl-btn hl-honey-btn w-full font-bold py-4 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 mt-2"
              >
                <Send size={20} /> Send Message
              </button>
            </form>
          )}
        </div>
      </FullBleedSection>

      {/* CLOSING CTA */}
      <FullBleedSection
        background={`linear-gradient(135deg, ${COLORS.terra} 0%, ${COLORS.terraDeep} 100%)`}
        className="text-center shadow-xl"
        innerClassName="max-w-6xl mx-auto"
      >
        <h2
          className="text-3xl md:text-5xl font-extrabold font-display mb-5 leading-tight"
          style={{ color: COLORS.paper }}
        >
          Ready to Excel?
        </h2>
        <p
          className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ color: `${COLORS.paper}E6` }}
        >
          Join House of Learning today and take the first step towards academic success.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={LINKS.MAPS}
            target="_blank"
            rel="noreferrer"
            className="hl-btn px-10 md:px-12 py-4 md:py-5 rounded-2xl font-bold text-lg shadow-xl transition-opacity hover:opacity-90"
            style={{ backgroundColor: COLORS.paper, color: COLORS.terraDeep }}
          >
            Visit Us
          </a>
        </div>
      </FullBleedSection>
    </div>
  );
};
          
