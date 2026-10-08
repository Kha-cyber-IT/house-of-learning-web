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
  mainGreen: '#4CA771', // New global background
  cardYellow: '#F9CE69', // Services & Subjects cards
  lightBlue: '#D9EFF7', // Accent text color
  navy: '#123B63',
  blue: '#2A6592',
  gold: '#C9A04A',
  goldHover: '#B58B38',
  ink: '#14213D',
};

const LOGO = '/hl-logo.png'; // Ensure this points to your crest file locally
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

  html, body {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    margin: 0;
    background-color: ${C.mainGreen};
    color: #ffffff;
  }

  img { max-width: 100%; }

  button, a, input, textarea {
    -webkit-tap-highlight-color: transparent;
  }

  .hl-page-content {
    background-color: ${C.mainGreen};
    min-height: 100vh;
  }

  .hl-gold-btn {
    background: ${C.cardYellow};
    color: ${C.ink};
  }

  .hl-blue-btn {
    background: ${C.navy};
    color: #fff;
  }

  .hl-row {
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  }

  /* ---------------------------------------------------------------------- */
  /* HERO                                                                   */
  /* ---------------------------------------------------------------------- */

  .hl-hero-container {
    position: relative;
    width: 100%;
    overflow: hidden;
    /* Removes the gap between navbar and hero */
    margin-top: 0 !important; 
    padding-top: 0 !important;
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

  /* Fade hero image directly into the main green background */
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
  /* SNAP SCROLL (Mobile Horizontal Swipe)                                  */
  /* ---------------------------------------------------------------------- */

  .hl-snap {
    display: flex;
    gap: 16px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    padding: 4px 16px 16px;
    margin: 0 -16px;
    overscroll-behavior-x: contain;
  }

  .hl-snap::-webkit-scrollbar {
    display: none;
  }

  .hl-snap > * {
    flex: 0 0 calc(100% - 40px);
    width: calc(100% - 40px);
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

  .hl-field::placeholder { color: rgba(255, 255, 255, 0.7); }
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

    .hl-hero-copy img.hl-logo-img {
      width: 90px;
      height: 90px;
      object-fit: contain;
      border-radius: 16px;
      background: #fff;
      padding: 4px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.15);
      margin-bottom: 16px;
    }

    .hl-page-content { padding-bottom: 80px; }
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

    .hl-hero-copy img.hl-logo-img {
      width: 120px;
      height: 120px;
      object-fit: contain;
      border-radius: 20px;
      background: #fff;
      padding: 6px;
      box-shadow: 0 12px 24px rgba(0,0,0,0.2);
    }

    .hl-snap {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      overflow: visible;
      padding: 0;
      margin: 0;
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
/* BAND WRAPPER                                                               */
/* -------------------------------------------------------------------------- */

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
    className={`relative w-full max-w-full md:mx-auto md:max-w-6xl md:rounded-3xl overflow-hidden ${className}`}
  >
    <div className={`w-full px-4 py-8 md:px-16 md:py-16 ${innerClassName}`}>
      {children}
    </div>
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
  const [openPlan, setOpenPlan] = useState<string | null>(null); // Only open one pricing plan at a time

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
        setTimeout(() => document.getElementById('browse-all-btn')?.click(), 100);
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

  const onSnapScroll = (e: React.UIEvent<HTMLDivElement>, setter: typeof setSlide) => {
    const el = e.currentTarget;
    const first = el.firstElementChild as HTMLElement | null;
    if (first) {
      const gap = parseFloat(getComputedStyle(el).gap) || 16;
      setter(Math.round(el.scrollLeft / (first.offsetWidth + gap)));
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
    <div className="hl-page-content w-full max-w-full overflow-x-hidden space-y-10 md:space-y-20 pb-20 md:pb-10">
      <style>{CSS}</style>

      {/* ---------------------------------------------------------------- */}
      {/* HERO                                                             */}
      {/* ---------------------------------------------------------------- */}

      <section className="hl-hero-container w-full max-w-full relative md:mx-auto md:max-w-6xl md:rounded-b-3xl md:mt-4">
        <div className="hl-photo" style={{ backgroundImage: `url('${HERO_PHOTO}')` }} />
        <div className="hl-hero-copy w-full px-5 md:px-16 pt-24 pb-8 md:py-20 text-center md:text-left">
          
          <img src={LOGO} alt="HL Tutoring Logo" className="hl-logo-img mx-auto md:mx-0" />

          <h1 className="mt-4 md:mt-6 text-3xl md:text-5xl font-extrabold font-display tracking-tight leading-tight text-white">
            Tutoring that helps every <span style={{ color: C.cardYellow }}>learner thrive</span>
          </h1>

          <p className="mt-3 text-[15px] md:text-lg leading-relaxed max-w-md mx-auto md:mx-0" style={{ color: C.lightBlue }}>
            A non-profit tutoring organisation matching each student with expert tutors, Grade R to 12.
          </p>

          <a
            href={LINKS.REGISTRATION}
            target="_blank"
            rel="noreferrer"
            className="hl-btn hl-gold-btn mt-6 md:mt-8 inline-block w-full md:w-auto px-8 py-3.5 rounded-xl text-base font-bold shadow-lg"
          >
            Book a Session
          </a>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* SERVICES (Yellow Cards)                                          */}
      {/* ---------------------------------------------------------------- */}

      <div className="w-full min-w-0 md:max-w-6xl md:mx-auto px-0 md:px-4">
        <div className="hl-snap px-4 md:px-0" onScroll={(e) => onSnapScroll(e, setSlide)}>
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl p-6 flex flex-col shadow-lg"
              style={{ background: C.cardYellow, color: C.ink }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-white/40">
                <span className="material-symbols-outlined text-2xl" style={{ color: C.navy }}>{s.icon}</span>
              </div>

              <h3 className="text-xl font-bold font-display mb-2">{s.title}</h3>
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
                <a href={s.href} target="_blank" rel="noreferrer" className="hl-btn hl-blue-btn w-full py-3 rounded-xl font-bold text-sm text-center">
                  {s.cta}
                </a>
              ) : (
                <button type="button" onClick={s.onClick} className="hl-btn hl-blue-btn w-full py-3 rounded-xl font-bold text-sm text-center">
                  {s.cta}
                </button>
              )}
            </div>
          ))}
        </div>
        
        {/* Slide indicators for mobile */}
        <div className="flex justify-center gap-2 mt-4 md:hidden">
          {services.map((_, i) => (
            <span
              key={i}
              className="h-2 rounded-full transition-all"
              style={{ width: slide === i ? 24 : 8, background: slide === i ? C.cardYellow : 'rgba(255,255,255,0.3)' }}
            />
          ))}
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* WHY CHOOSE US                                                    */}
      {/* ---------------------------------------------------------------- */}

      <div className="w-full px-4 md:max-w-6xl md:mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-extrabold font-display mb-2 text-white">Why choose us</h2>
          <p className="text-sm md:text-base" style={{ color: C.lightBlue }}>Teaching students how to learn, not just subjects.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {why.map((w) => (
            <div key={w.title} className="rounded-2xl p-4 md:p-6 bg-white/10 border border-white/20 text-white text-center">
              <span className="material-symbols-outlined text-3xl mb-2" style={{ color: C.cardYellow }}>{w.icon}</span>
              <h4 className="text-base font-bold font-display mb-1">{w.title}</h4>
              <p className="text-xs md:text-sm opacity-80 leading-relaxed">{w.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* SUBJECTS                                                         */}
      {/* ---------------------------------------------------------------- */}

      {/* Wrapping Subjects in the Yellow accent to match instructions */}
      <div className="w-full min-w-0" style={{ background: C.cardYellow, color: C.ink, padding: '2rem 0' }}>
        <div className="md:max-w-6xl md:mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-extrabold font-display text-center mb-6">Our Subjects</h2>
          {/* Ensure SubjectsSection inherits current dark text safely */}
          <div className="text-[#14213D]">
             <SubjectsSection />
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* PRICING (Now Horizontal Scroll on Mobile & Shorter)              */}
      {/* ---------------------------------------------------------------- */}

      <Band id="pricing" className="text-white">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-extrabold font-display mb-2">Transparent Pricing</h2>
          <p className="text-sm md:text-base" style={{ color: C.lightBlue }}>Choose the plan that fits your goals.</p>
        </div>

        {/* Both Mobile & Desktop use the snap grid layout now */}
        <div className="w-full min-w-0 px-0">
          <div className="hl-snap md:px-0" onScroll={(e) => onSnapScroll(e, setPricingSlide)}>
            {plans.map((p) => {
              const isOpen = openPlan === p.id;
              return (
                <div
                  key={p.id}
                  className="p-5 rounded-2xl flex flex-col relative"
                  style={{
                    background: p.popular ? '#fff' : 'rgba(255,255,255,0.1)',
                    color: p.popular ? C.ink : '#fff',
                    border: p.popular ? 'none' : '1px solid rgba(255,255,255,0.2)'
                  }}
                >
                  {p.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-[#123B63] text-white shadow-md">
                      Most Chosen
                    </span>
                  )}
                  
                  <div className="flex items-center gap-3 mb-3">
                    <p.icon size={20} style={{ color: p.popular ? C.navy : C.cardYellow }} />
                    <h3 className="text-lg font-bold font-display">{p.name}</h3>
                  </div>

                  <div className="mb-4">
                    <span className="text-3xl font-bold">{p.price}</span>
                    <span className="text-xs opacity-75">{p.period}</span>
                  </div>
                  
                  <p className="text-xs mb-4 opacity-80 min-h-[32px]">{p.description}</p>

                  <button
                    onClick={() => setOpenPlan(isOpen ? null : p.id)}
                    className="text-xs font-bold underline underline-offset-4 mb-4 text-left"
                    style={{ color: p.popular ? C.navy : C.cardYellow }}
                  >
                    {isOpen ? 'Hide Features' : 'View Features'}
                  </button>

                  {isOpen && (
                    <ul className="space-y-2 mb-5 flex-grow">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-xs">
                          <Check size={14} className="mt-0.5 shrink-0" style={{ color: p.popular ? C.navy : C.cardYellow }} />
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
                        color: p.popular ? C.ink : '#fff'
                      }}
                    >
                      Select Plan
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center gap-2 mt-4 md:hidden">
            {plans.map((_, i) => (
              <span
                key={i}
                className="h-2 rounded-full transition-all"
                style={{ width: pricingSlide === i ? 24 : 8, background: pricingSlide === i ? C.cardYellow : 'rgba(255,255,255,0.3)' }}
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
          <h2 className="text-2xl md:text-4xl font-extrabold font-display mb-3">Get in touch</h2>
          <p className="mb-6 text-sm md:text-base leading-relaxed" style={{ color: C.lightBlue }}>
            Questions? Call, message us on WhatsApp or send an email.
          </p>

          <div className="space-y-4">
            <a href={`tel:${LINKS.PHONE.replace(/\s/g, '')}`} className="flex items-center gap-4 p-3 rounded-xl bg-white/10 border border-white/20">
              <Phone size={20} style={{ color: C.cardYellow }} />
              <span className="font-semibold text-sm">{LINKS.PHONE}</span>
            </a>
            <a href={LINKS.WHATSAPP} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-3 rounded-xl bg-white/10 border border-white/20">
              <MessageCircle size={20} style={{ color: C.cardYellow }} />
              <span className="font-semibold text-sm">Chat on WhatsApp</span>
            </a>
            <a href={`mailto:${LINKS.EMAIL}`} className="flex items-center gap-4 p-3 rounded-xl bg-white/10 border border-white/20">
              <Mail size={20} style={{ color: C.cardYellow }} />
              <span className="font-semibold text-sm break-all">{LINKS.EMAIL}</span>
            </a>
          </div>

          {!showForm && (
            <button onClick={() => setShowForm(true)} className="hl-btn hl-gold-btn md:hidden mt-6 w-full py-3.5 rounded-xl font-bold">
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
              <button onClick={() => setStatus('idle')} className="text-sm font-bold underline" style={{ color: C.cardYellow }}>
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-3">
              <input name="name" className="hl-field" placeholder="Your name" required />
              <input name="phone" type="tel" className="hl-field" placeholder="Phone (+27...)" required />
              <input name="email" type="email" className="hl-field" placeholder="Email" required />
              <textarea name="message" className="hl-field min-h-[100px]" placeholder="How can we help?" required />
              <button type="submit" disabled={status === 'sending'} className="hl-btn hl-gold-btn w-full font-bold py-3.5 rounded-xl flex items-center justify-center gap-2">
                <Send size={18} />
                {status === 'sending' ? 'Sending...' : 'Send message'}
              </button>
            </form>
          )}
        </div>
      </Band>

      {/* ---------------------------------------------------------------- */}
      {/* MOBILE BOTTOM BAR (WHATSAPP ONLY)                                */}
      {/* ---------------------------------------------------------------- */}

      <div
        className="md:hidden fixed bottom-0 inset-x-0 z-40 px-4 py-3 border-t bg-[#FAF7F0] shadow-[0_-4px_20px_rgba(0,0,0,0.15)]"
        style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 12px)' }}
      >
        <a
          href={LINKS.WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="hl-btn flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm"
          style={{ background: '#25D366', color: '#fff' }}
        >
          <MessageCircle size={20} />
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
