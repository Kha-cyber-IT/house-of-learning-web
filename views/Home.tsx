import React, { useState } from 'react';
import {
  Clock,
  Star,
  Calendar,
  Check,
  Mail,
  Phone,
  Send,
  CheckCircle,
  MessageCircle,
} from 'lucide-react';
import { ViewState } from '../types';
import { LINKS } from '../constants';
import { SubjectsSection } from './SubjectsSection';

interface HomeProps {
  setActiveView: (view: ViewState) => void;
}

// ---- HL Tutoring brand ----
const C = {
  mainGreen: '#4CA771', // Global background
  cardYellow: '#F9CE69', // Services & Subjects cards
  lightBlue: '#D9EFF7', // Accent text color (Subheadings/Paragraphs)
  lightMint: '#C0E6BA', // Soft accent (Used for 'Why choose us' cards)
  navy: '#123B63',
  blue: '#2A6592',
  gold: '#C9A04A',
  goldHover: '#B58B38',
  ink: '#14213D',
};

const HERO_PHOTO = 'https://i.postimg.cc/nzXtG4RT/IMG-20261006-WA0027.png';
const FORM_ENDPOINT = '';

interface Plan {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  icon: React.ElementType;
  features: string[];
  popular?: boolean;
}

const plans: Plan[] = [
  {
    id: 'hourly',
    name: 'Hourly',
    description: 'Flexible help when needed.',
    price: 'R150',
    period: '/ hr',
    icon: Clock,
    features: [
      '1-on-1 personalised tutoring',
      'Subject specific assistance',
      'Flexible scheduling',
    ],
  },
  {
    id: 'monthly',
    name: 'Monthly',
    description: 'Sustained improvement.',
    price: 'R260',
    period: '/ mo',
    icon: Star,
    popular: true,
    features: [
      '16 hours monthly tutoring',
      'Dedicated mentor assignment',
      'Monthly progress assessments',
      'Exam readiness preparation',
    ],
  },
  {
    id: 'weekly',
    name: 'Weekly',
    description: 'Intensive support.',
    price: 'R600',
    period: '/ mo',
    icon: Calendar,
    features: [
      '4 hours weekly tutoring',
      'Priority session booking',
      'Weekly goal setting',
      'Homework & assignment help',
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* STYLES                                                                     */
/* -------------------------------------------------------------------------- */

const CSS = `
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* FULL-WIDTH FIX: undo the default Vite/CRA "#root { max-width; margin: 0 auto; padding }" */
  html, body, #root, #__next {
    width: 100% !important;
    max-width: none !important;
    margin: 0 !important;
    padding: 0 !important;
    text-align: left;
  }

  html, body {
    background-color: ${C.mainGreen};
    color: #ffffff;
  }

  img { max-width: 100%; }

  button, a, input, textarea {
    -webkit-tap-highlight-color: transparent;
  }

  /* Gill Sans, scoped to this page. Icon fonts are excluded so Material Symbols still render as icons. */
  .hl-page-content,
  .hl-page-content button,
  .hl-page-content input,
  .hl-page-content textarea,
  .hl-page-content a,
  .hl-page-content :where(p, h1, h2, h3, h4, h5, h6, li, div, span):not(.material-symbols-outlined) {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  .hl-page-content .material-symbols-outlined {
    font-family: 'Material Symbols Outlined' !important;
  }

  .hl-page-content {
    background-color: ${C.mainGreen};
    min-height: 100vh;
    width: 100%;
    max-width: 100%;
    overflow-x: clip; /* clip instead of hidden: no sticky/scroll side effects */
  }

  .hl-gold-btn {
    background: ${C.cardYellow};
    color: ${C.ink};
  }

  .hl-blue-btn {
    background: ${C.navy};
    color: #fff;
  }

  .hl-btn {
    cursor: pointer;
    transition: transform 0.15s ease, filter 0.15s ease;
  }
  .hl-btn:hover { filter: brightness(0.95); }
  .hl-btn:active { transform: scale(0.98); }
  .hl-btn:focus-visible { outline: 2px solid #fff; outline-offset: 2px; }

  /* ---------------------------------------------------------------------- */
  /* HERO                                                                   */
  /* ---------------------------------------------------------------------- */

  .hl-hero-container {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .hl-photo {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    z-index: 0;
  }

  .hl-photo::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(76, 167, 113, 0.3) 0%,
      rgba(76, 167, 113, 0.8) 60%,
      ${C.mainGreen} 100%
    );
  }

  .hl-hero-copy {
    position: relative;
    z-index: 10;
    color: #fff;
  }

  /* ---------------------------------------------------------------------- */
  /* SNAP SCROLL                                                            */
  /* ---------------------------------------------------------------------- */

  .hl-snap {
    display: flex;
    gap: 16px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    /* top padding stops the "Most Chosen" badge being clipped by the scroller */
    padding: 16px 20px 16px;
    scroll-padding: 0 20px;
    overscroll-behavior-x: contain;
    -webkit-overflow-scrolling: touch;
  }

  .hl-snap::-webkit-scrollbar {
    display: none;
  }

  .hl-snap > * {
    flex: 0 0 calc(100% - 56px);
    width: calc(100% - 56px);
    max-width: 340px;
    scroll-snap-align: center;
  }

  /* ---------------------------------------------------------------------- */
  /* INPUTS                                                                 */
  /* ---------------------------------------------------------------------- */

  .hl-field {
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    border-radius: 12px;
    padding: 12px 14px;
    font-size: 16px;
  }

  .hl-field::placeholder { color: rgba(255, 255, 255, 0.75); }
  .hl-field:focus-visible { outline: 2px solid ${C.cardYellow}; }

  /* ---------------------------------------------------------------------- */
  /* RESPONSIVE Adjustments                                                 */
  /* ---------------------------------------------------------------------- */

  @media (max-width: 767px) {
    .hl-hero-container {
      min-height: 480px;
      display: flex;
      align-items: flex-end;
      padding-bottom: 24px;
    }
  }

  @media (min-width: 768px) {
    .hl-hero-container {
      min-height: 550px;
      display: flex;
      align-items: center;
    }

    .hl-photo::after {
      background: linear-gradient(
        95deg,
        rgba(76, 167, 113, 0.95) 0%,
        rgba(76, 167, 113, 0.8) 45%,
        rgba(76, 167, 113, 0.2) 100%
      );
    }

    .hl-snap {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      overflow: visible;
      padding: 16px 0 0;
      scroll-padding: 0;
      gap: 24px;
    }

    .hl-snap > * {
      flex: initial;
      width: auto;
      max-width: none;
    }
  }
`;

/* -------------------------------------------------------------------------- */
/* LAYOUT HELPERS                                                             */
/* -------------------------------------------------------------------------- */

/** Content container: centred and capped, but sections themselves are full-bleed. */
const Container: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className = '',
  children,
}) => (
  <div className={`w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 ${className}`}>{children}</div>
);

/** Full-width band (edge to edge) with a centred inner container. */
const Band: React.FC<{
  id?: string;
  className?: string;
  innerClassName?: string;
  background?: string;
  children: React.ReactNode;
}> = ({ id, className = '', innerClassName = '', background, children }) => (
  <section
    id={id}
    style={background ? { background } : undefined}
    className={`relative w-full ${className}`}
  >
    <Container className={`py-8 md:py-16 ${innerClassName}`}>{children}</Container>
  </section>
);

/* -------------------------------------------------------------------------- */
/* HOME COMPONENT                                                             */
/* -------------------------------------------------------------------------- */

export const Home: React.FC<HomeProps> = ({ setActiveView }) => {
  const [slide, setSlide] = useState(0);
  const [pricingSlide, setPricingSlide] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [openPlan, setOpenPlan] = useState<string | null>(null);

  const services = [
    {
      icon: 'person',
      title: 'Private Tutoring',
      text: 'One-on-one attention tailored to your learning style and pace.',
      items: ['Personalised plans', 'Flexible scheduling'],
      cta: 'See pricing',
      onClick: () => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      icon: 'school',
      title: 'Structured Programs',
      text: 'Curriculum-aligned learning paths that build solid foundations.',
      items: ['Grade R to 12', 'Consistent support'],
      cta: 'View programs',
      onClick: () => {
        setActiveView('home');
        setTimeout(() => {
          const btn = document.getElementById('browse-all-btn');
          if (btn) btn.click();
          else document.getElementById('subjects')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      },
    },
    {
      icon: 'menu_book',
      title: 'Exam Prep',
      text: 'Past papers, mock exams and strategies to maximise results.',
      items: ['Past papers', 'Exam strategies'],
      cta: 'Get ready',
      href: LINKS.REGISTRATION,
    },
  ];

  const why = [
    { icon: 'workspace_premium', title: 'Personalised', text: 'Individual plans for every student.' },
    { icon: 'groups', title: 'Expert Tutors', text: 'Vetted tutors dedicated to your success.' },
    { icon: 'trending_up', title: 'Real Progress', text: 'Moving up grades with confidence.' },
    { icon: 'library_books', title: 'Wide Coverage', text: 'Maths, Sciences, and Languages.' },
  ];

  const onSnapScroll = (
    e: React.UIEvent<HTMLDivElement>,
    setter: React.Dispatch<React.SetStateAction<number>>
  ) => {
    const el = e.currentTarget;
    const first = el.firstElementChild as HTMLElement | null;
    if (first) {
      const gap = parseFloat(getComputedStyle(el).columnGap || getComputedStyle(el).gap) || 16;
      const idx = Math.round(el.scrollLeft / (first.offsetWidth + gap));
      setter(Math.max(0, idx));
    }
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;

    if (!FORM_ENDPOINT) {
      const body = `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\n\n${data.message}`;
      window.location.href = `mailto:${LINKS.EMAIL}?subject=${encodeURIComponent('Enquiry from website')}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="hl-page-content space-y-10 md:space-y-20 pb-10">
      <style>{CSS}</style>

      {/* ---------------------------------------------------------------- */}
      {/* HERO                                                             */}
      {/* ---------------------------------------------------------------- */}

      <section className="hl-hero-container">
        <div className="hl-photo" style={{ backgroundImage: `url('${HERO_PHOTO}')` }} />

        <Container className="relative z-10">
          <div className="hl-hero-copy w-full pt-20 pb-8 md:py-20 text-center md:text-left">
            <h1 className="mt-4 md:mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-white max-w-2xl mx-auto md:mx-0">
              Tutoring that helps every <span style={{ color: C.cardYellow }}>learner thrive</span>
            </h1>

            <p
              className="mt-3 text-[16px] md:text-xl leading-relaxed max-w-md md:max-w-xl mx-auto md:mx-0"
              style={{ color: C.lightBlue }}
            >
              A non-profit tutoring organisation matching each student with expert tutors, Grade R to 12.
            </p>

            <a
              href={LINKS.REGISTRATION}
              target="_blank"
              rel="noreferrer"
              className="hl-btn hl-gold-btn mt-6 md:mt-8 inline-block w-full md:w-auto px-8 py-3.5 rounded-xl text-base font-bold shadow-lg text-center"
            >
              Book a Session
            </a>
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* SERVICES (Yellow Cards)                                          */}
      {/* ---------------------------------------------------------------- */}

      <section className="w-full min-w-0">
        <div className="w-full max-w-7xl mx-auto md:px-8 lg:px-12">
          <div className="hl-snap" onScroll={(e) => onSnapScroll(e, setSlide)}>
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl p-6 flex flex-col shadow-lg"
                style={{ background: C.cardYellow, color: C.ink }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-white/40">
                  <span className="material-symbols-outlined text-2xl" style={{ color: C.navy }}>
                    {s.icon}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed mb-4 opacity-90">{s.text}</p>

                <ul className="space-y-2 mb-6 flex-grow">
                  {s.items.map((i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-medium">
                      <Check size={16} style={{ color: C.navy }} />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>

                {s.href ? (
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hl-btn hl-blue-btn block w-full py-3 rounded-xl font-bold text-sm text-center"
                  >
                    {s.cta}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={s.onClick}
                    className="hl-btn hl-blue-btn w-full py-3 rounded-xl font-bold text-sm text-center"
                  >
                    {s.cta}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Slide indicators for mobile */}
          <div className="flex justify-center gap-2 mt-2 md:hidden">
            {services.map((_, i) => (
              <span
                key={i}
                className="h-2 rounded-full transition-all"
                style={{
                  width: slide === i ? 24 : 8,
                  background: slide === i ? C.cardYellow : 'rgba(255,255,255,0.3)',
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* WHY CHOOSE US (Using Light Mint accent)                          */}
      {/* ---------------------------------------------------------------- */}

      <section className="w-full">
        <Container>
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-white">Why choose us</h2>
            <p className="text-sm md:text-base" style={{ color: C.lightBlue }}>
              Teaching students how to learn, not just subjects.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {why.map((w) => (
              <div
                key={w.title}
                className="rounded-2xl p-4 md:p-6 text-center shadow-md"
                style={{ background: C.lightMint, color: C.ink }}
              >
                <span className="material-symbols-outlined text-3xl mb-2" style={{ color: C.navy }}>
                  {w.icon}
                </span>
                <h4 className="text-base font-bold mb-1">{w.title}</h4>
                <p className="text-xs md:text-sm opacity-80 leading-relaxed">{w.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* SUBJECTS (full-bleed yellow band)                                */}
      {/* ---------------------------------------------------------------- */}

      <section id="subjects" className="w-full min-w-0" style={{ background: C.cardYellow, color: C.ink }}>
        <Container className="py-8 md:py-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6">Our Subjects</h2>
          <div style={{ color: C.ink }}>
            <SubjectsSection />
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* PRICING (Horizontal Scroll on Mobile)                            */}
      {/* ---------------------------------------------------------------- */}

      <Band id="pricing" className="text-white" innerClassName="!px-0 md:!px-8 lg:!px-12">
        <div className="text-center mb-6 md:mb-10 px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Transparent Pricing</h2>
          <p className="text-sm md:text-base" style={{ color: C.lightBlue }}>
            Choose the plan that fits your goals.
          </p>
        </div>

        <div className="w-full min-w-0">
          <div className="hl-snap" onScroll={(e) => onSnapScroll(e, setPricingSlide)}>
            {plans.map((p) => {
              const isOpen = openPlan === p.id;
              return (
                <div
                  key={p.id}
                  className="p-5 rounded-2xl flex flex-col relative"
                  style={{
                    background: p.popular ? '#fff' : 'rgba(255,255,255,0.1)',
                    color: p.popular ? C.ink : '#fff',
                    border: p.popular ? '1px solid #fff' : '1px solid rgba(255,255,255,0.2)',
                  }}
                >
                  {p.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-[#123B63] text-white shadow-md whitespace-nowrap">
                      Most Chosen
                    </span>
                  )}

                  <div className="flex items-center gap-3 mb-3">
                    <p.icon size={20} style={{ color: p.popular ? C.navy : C.cardYellow }} />
                    <h3 className="text-lg font-bold">{p.name}</h3>
                  </div>

                  <div className="mb-4">
                    <span className="text-3xl font-bold">{p.price}</span>
                    <span className="text-xs opacity-75"> {p.period}</span>
                  </div>

                  <p className="text-xs mb-4 opacity-80 min-h-[32px]">{p.description}</p>

                  <button
                    type="button"
                    onClick={() => setOpenPlan(isOpen ? null : p.id)}
                    aria-expanded={isOpen}
                    className="text-xs font-bold underline underline-offset-4 mb-4 text-left"
                    style={{ color: p.popular ? C.navy : C.cardYellow }}
                  >
                    {isOpen ? 'Hide Features' : 'View Features'}
                  </button>

                  {isOpen && (
                    <ul className="space-y-2 mb-5 flex-grow">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-xs">
                          <Check
                            size={14}
                            className="mt-0.5 shrink-0"
                            style={{ color: p.popular ? C.navy : C.cardYellow }}
                          />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-auto">
                    <a
                      href={LINKS.WHATSAPP}
                      target="_blank"
                      rel="noreferrer"
                      className="hl-btn w-full py-2.5 rounded-xl font-bold text-sm text-center block"
                      style={{
                        background: p.popular ? C.cardYellow : C.navy,
                        color: p.popular ? C.ink : '#fff',
                      }}
                    >
                      Select Plan
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center gap-2 mt-2 md:hidden">
            {plans.map((_, i) => (
              <span
                key={i}
                className="h-2 rounded-full transition-all"
                style={{
                  width: pricingSlide === i ? 24 : 8,
                  background: pricingSlide === i ? C.cardYellow : 'rgba(255,255,255,0.3)',
                }}
              />
            ))}
          </div>
        </div>
      </Band>

      {/* ---------------------------------------------------------------- */}
      {/* CONTACT                                                          */}
      {/* ---------------------------------------------------------------- */}

      <Band id="contact" className="text-white" innerClassName="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="min-w-0">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Get in touch</h2>
          <p className="mb-6 text-sm md:text-base leading-relaxed" style={{ color: C.lightBlue }}>
            Questions? Call, message us on WhatsApp or send an email.
          </p>

          <div className="space-y-4">
            <a
              href={`tel:${LINKS.PHONE.replace(/\s/g, '')}`}
              className="flex items-center gap-4 p-3 rounded-xl bg-white/10 border border-white/20"
            >
              <Phone size={20} style={{ color: C.cardYellow }} />
              <span className="font-semibold text-sm">{LINKS.PHONE}</span>
            </a>
            <a
              href={LINKS.WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-3 rounded-xl bg-white/10 border border-white/20"
            >
              <MessageCircle size={20} style={{ color: C.cardYellow }} />
              <span className="font-semibold text-sm">Chat on WhatsApp</span>
            </a>
            <a
              href={`mailto:${LINKS.EMAIL}`}
              className="flex items-center gap-4 p-3 rounded-xl bg-white/10 border border-white/20"
            >
              <Mail size={20} style={{ color: C.cardYellow }} />
              <span className="font-semibold text-sm break-all">{LINKS.EMAIL}</span>
            </a>
          </div>

          {!showForm && (
            <button
              type="button"
              onClick={() => setShowForm(true)}
              className="hl-btn hl-gold-btn md:hidden mt-6 w-full py-3.5 rounded-xl font-bold"
            >
              Send an email instead
            </button>
          )}
        </div>

        <div className={`${showForm ? 'block' : 'hidden'} md:block min-w-0`}>
          {status === 'sent' ? (
            <div className="text-center py-10 bg-white/10 rounded-2xl border border-white/20">
              <CheckCircle size={40} className="mx-auto mb-3" style={{ color: C.cardYellow }} />
              <h3 className="text-xl font-bold mb-1">Message Sent</h3>
              <p className="text-sm opacity-80 mb-4">We'll be in touch shortly.</p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="text-sm font-bold underline"
                style={{ color: C.cardYellow }}
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-3">
              <input name="name" className="hl-field" placeholder="Your name" autoComplete="name" required />
              <input
                name="phone"
                type="tel"
                className="hl-field"
                placeholder="Phone (+27...)"
                autoComplete="tel"
                required
              />
              <input
                name="email"
                type="email"
                className="hl-field"
                placeholder="Email"
                autoComplete="email"
                required
              />
              <textarea name="message" className="hl-field min-h-[100px]" placeholder="How can we help?" required />

              {status === 'error' && (
                <p className="text-sm font-semibold" style={{ color: C.cardYellow }} role="alert">
                  Something went wrong sending your message. Please try again or use WhatsApp.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="hl-btn hl-gold-btn w-full font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 disabled:opacity-70"
              >
                <Send size={18} />
                {status === 'sending' ? 'Sending...' : 'Send message'}
              </button>
            </form>
          )}
        </div>
      </Band>
    </div>
  );
};
