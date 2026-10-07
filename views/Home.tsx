import React, { useState } from 'react';
import { Clock, Star, Calendar, Check, MapPin, Mail, Phone, Send, CheckCircle, MessageCircle } from 'lucide-react';
import { ViewState } from '../types';
import { LINKS } from '../constants';
import { SubjectsSection } from './SubjectsSection';

interface HomeProps {
  setActiveView: (view: ViewState) => void;
}

// ---- HL Tutoring brand (sampled from the logo) ----
const C = {
  navy: '#123B63',
  blue: '#2A6592',
  green: '#2F6B3F',
  gold: '#C9A04A',
  goldHover: '#B58B38',
  cream: '#FAF7F0',
  ink: '#14213D',
};

// Put hl-logo.png in your /public folder.
const LOGO = '/hl-logo.png';
const HERO_PHOTO = 'https://i.postimg.cc/7PjBXjJF/1769278237608.png';
// Paste a Formspree / EmailJS / your own endpoint here so the form really delivers.
// While empty, the form opens the visitor's email app instead of pretending to send.
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
    name: 'Hourly Sessions',
    description: 'Flexible help when you need it most.',
    price: 'R150',
    period: 'per hour',
    icon: Clock,
    features: ['1-on-1 personalised tutoring', 'Subject specific assistance', 'Flexible scheduling', 'Pay as you go'],
  },
  {
    id: 'monthly',
    name: 'Monthly Package',
    description: 'Consistent support for sustained improvement.',
    // TODO: confirm this price. 16 hours at R260 is far below the R150/hour rate.
    price: 'R260',
    period: 'per month',
    icon: Star,
    popular: true,
    features: [
      '16 hours monthly tutoring',
      'Dedicated mentor assignment',
      'Personalised development plan',
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
    features: ['4 hours weekly tutoring', 'Priority session booking', 'Weekly goal setting', 'Detailed progress reports', 'Homework & assignment help'],
  },
];

const CSS = `
  :root { --hl-cream: ${C.cream}; }
  .hl-gold-btn { background:${C.gold}; color:${C.ink}; }
  .hl-blue-btn { background:${C.navy}; color:#fff; }
  .hl-btn:focus-visible, .hl-field:focus-visible { outline:2px solid ${C.gold}; outline-offset:2px; }
  .hl-row { border-bottom:1px solid rgba(128,128,128,.25); }

  /* hero: photo block with fade on phones, full-bleed photo with blue wash on desktop */
  .hl-photo { position:relative; height:38vh; min-height:220px; background-size:cover; background-position:center 30%; }
  .hl-photo::after { content:''; position:absolute; inset:0; background:linear-gradient(180deg, transparent 35%, var(--hl-cream) 100%); }
  .hl-hero-copy { color:${C.ink}; }

  /* swipe row */
  .hl-snap { display:flex; gap:14px; overflow-x:auto; scroll-snap-type:x mandatory; scrollbar-width:none; padding:2px 20px 4px; margin:0 -20px; }
  .hl-snap::-webkit-scrollbar { display:none; }
  .hl-snap > * { flex:0 0 82%; scroll-snap-align:center; }

  /* contact: plain on phones, deep blue band on desktop */
  .hl-contact { background:#fff; color:${C.ink}; }
  .hl-field { width:100%; border:1px solid rgba(20,33,61,.25); background:#fff; color:${C.ink}; border-radius:12px; padding:14px 16px; font-size:16px; }
  .hl-field::placeholder { color:rgba(20,33,61,.5); }

  @media (min-width:768px) {
    .hl-photo { position:absolute; inset:0; height:auto; background-position:center; }
    .hl-photo::after { background:linear-gradient(100deg, ${C.navy}F2 0%, ${C.navy}D9 45%, ${C.navy}66 100%); }
    .hl-hero-copy { color:#fff; }
    .hl-snap { display:grid; grid-template-columns:repeat(3,1fr); overflow:visible; padding:0; margin:0; gap:24px; }
    .hl-snap > * { flex:initial; }
    .hl-contact { background:linear-gradient(135deg, ${C.navy} 0%, ${C.blue} 100%); color:#fff; }
    .hl-field { border-color:rgba(255,255,255,.35); background:rgba(255,255,255,.08); color:#fff; }
    .hl-field::placeholder { color:rgba(255,255,255,.65); }
  }
  @media (hover:hover) { .hl-gold-btn:hover { background:${C.goldHover}; } }
`;

// Background bleeds edge-to-edge on phones, rounded centred block from md up.
// Needs overflow-x: clip on the app shell because of the 100vw trick.
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
    className={`relative left-1/2 right-1/2 -mx-[50vw] w-screen md:static md:left-auto md:right-auto md:mx-auto md:w-full md:max-w-6xl rounded-none md:rounded-3xl overflow-hidden ${className}`}
  >
    <div className={`px-5 py-12 md:px-16 md:py-20 ${innerClassName}`}>{children}</div>
  </section>
);

const PlanRow: React.FC<{ p: Plan }> = ({ p }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-5 hl-row" style={{ borderColor: 'rgba(255,255,255,.18)' }}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold">
            {p.name}
            {p.popular && (
              <span className="ml-2 align-middle text-[11px] font-bold px-2 py-0.5 rounded-full hl-gold-btn">Most chosen</span>
            )}
          </h3>
          <p className="text-sm opacity-75 mt-0.5">{p.description}</p>
        </div>
        <div className="text-right shrink-0">
          <div className="text-2xl font-bold">{p.price}</div>
          <div className="text-xs opacity-70">{p.period}</div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} className="hl-btn text-sm underline underline-offset-4 py-2">
          {open ? 'Hide details' : "See what's included"}
        </button>
        <a href={LINKS.WHATSAPP} target="_blank" rel="noreferrer" className="hl-btn hl-gold-btn px-6 py-2.5 rounded-xl text-sm font-bold">
          Choose
        </a>
      </div>
      {open && (
        <ul className="mt-3 space-y-2 text-sm">
          {p.features.map((f) => (
            <li key={f} className="flex gap-2">
              <Check size={15} className="mt-0.5 shrink-0" style={{ color: C.gold }} />
              {f}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const ContactRow: React.FC<{ icon: React.ReactNode; label: string; value: string; href: string; external?: boolean }> = ({
  icon,
  label,
  value,
  href,
  external,
}) => (
  <a href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})} className="hl-btn hl-row flex items-center gap-4 py-4 md:border-0">
    <span className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${C.gold}2E`, color: C.gold }}>
      {icon}
    </span>
    <span className="min-w-0">
      <span className="block text-sm opacity-70">{label}</span>
      <span className="block font-semibold break-words">{value}</span>
    </span>
  </a>
);

export const Home: React.FC<HomeProps> = ({ setActiveView }) => {
  const [slide, setSlide] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const services = [
    {
      color: C.blue,
      icon: 'person',
      title: 'Private Tutoring',
      text: 'One-on-one attention tailored to your learning style and pace.',
      items: ['Personalised plans', 'Flexible scheduling', 'Subject specific'],
      cta: 'See pricing',
      onClick: () => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      color: C.green,
      icon: 'school',
      title: 'Structured Programs',
      text: 'Curriculum-aligned learning paths that build solid foundations.',
      items: ['Grade R to 12', 'Foundation building', 'Consistent support'],
      cta: 'View programs',
      onClick: () => {
        setActiveView('home');
        setTimeout(() => document.getElementById('browse-all-btn')?.click(), 100);
      },
    },
    {
      color: C.gold,
      icon: 'menu_book',
      title: 'Exam Prep',
      text: 'Past papers, mock exams and strategies to maximise results.',
      items: ['Past papers', 'Mock exams', 'Exam strategies'],
      cta: 'Get ready',
      href: LINKS.REGISTRATION,
    },
  ];

  const why = [
    { icon: 'workspace_premium', title: 'Personalised learning', text: 'An individual plan for every student: their needs, learning style and goals.' },
    { icon: 'groups', title: 'Experienced tutors', text: 'Vetted tutors dedicated to your success.' },
    { icon: 'trending_up', title: 'Real progress', text: 'Students moving up to the next grade with confidence.' },
    { icon: 'library_books', title: 'Wide coverage', text: 'Maths, Sciences, Languages and Commerce at every level.' },
  ];

  const onSnapScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const first = el.firstElementChild as HTMLElement | null;
    if (first) setSlide(Math.round(el.scrollLeft / (first.offsetWidth + 14)));
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
    <div className="space-y-14 md:space-y-28 pb-24 md:pb-0">
      <style>{CSS}</style>

      {/* HERO: logo first */}
      <Band background={C.cream} innerClassName="!p-0 md:min-h-[600px] md:flex md:items-center">
        <div className="hl-photo" style={{ backgroundImage: `url('${HERO_PHOTO}')` }} role="img" aria-label="Students learning with a tutor" />
        <div className="hl-hero-copy relative z-10 px-5 pb-12 -mt-10 text-center md:text-left md:mt-0 md:px-16 md:py-20 md:max-w-2xl">
          <img
            src={LOGO}
            alt="HL Tutoring Non-Profit Organization"
            className="mx-auto md:mx-0 w-56 md:w-64 h-auto md:bg-[#FAF7F0] md:p-5 md:rounded-3xl md:shadow-xl"
          />
          <h1 className="mt-6 text-3xl md:text-5xl font-extrabold font-display tracking-tight leading-tight">
            Tutoring that helps every learner thrive
          </h1>
          <p className="mt-3 text-base md:text-lg leading-relaxed opacity-85 max-w-md mx-auto md:mx-0">
            A non-profit tutoring organisation matching each student with expert tutors, Grade R to 12.
          </p>
          <a
            href={LINKS.REGISTRATION}
            target="_blank"
            rel="noreferrer"
            className="hl-btn hl-gold-btn mt-7 inline-block w-full md:w-auto px-10 py-4 rounded-xl text-base font-bold shadow-lg"
          >
            Book a Session
          </a>
        </div>
      </Band>

      {/* SERVICES: swipe on phones, grid on desktop */}
      <div>
        <div className="hl-snap" onScroll={onSnapScroll}>
          {services.map((s) => {
            const btn = 'hl-btn hl-blue-btn w-full py-3.5 rounded-xl font-bold text-sm text-center block';
            return (
              <div key={s.title} className="rounded-2xl p-6 md:p-8 flex flex-col bg-white" style={{ border: `2px solid ${s.color}40` }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: s.color }}>
                  <span className="material-symbols-outlined text-white text-2xl">{s.icon}</span>
                </div>
                <h3 className="text-2xl font-bold font-display mb-2 text-slate-900">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">{s.text}</p>
                <ul className="space-y-2.5 mb-7 flex-grow">
                  {s.items.map((i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                      <span className="material-symbols-outlined text-lg" style={{ color: s.color }}>verified</span>
                      {i}
                    </li>
                  ))}
                </ul>
                {s.href ? (
                  <a href={s.href} target="_blank" rel="noreferrer" className={btn}>{s.cta}</a>
                ) : (
                  <button type="button" onClick={s.onClick} className={btn}>{s.cta}</button>
                )}
              </div>
            );
          })}
        </div>
        <div className="flex justify-center gap-2 mt-4 md:hidden" aria-hidden="true">
          {services.map((s, i) => (
            <span key={s.title} className="h-2 rounded-full transition-all" style={{ width: slide === i ? 22 : 8, background: slide === i ? C.navy : '#C9D3DC' }} />
          ))}
        </div>
      </div>

      {/* WHY CHOOSE US: 2x2 on phones */}
      <div>
        <div className="text-center mb-8 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold font-display mb-2" style={{ color: C.ink }}>Why choose us</h2>
          <p className="text-slate-600 md:text-lg">We don't just teach subjects; we teach students how to learn.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {why.map((w, i) => (
            <div
              key={w.title}
              className="rounded-2xl p-4 md:p-7 text-white"
              style={{ background: [C.navy, C.green, C.blue, C.ink][i] }}
            >
              <span className="material-symbols-outlined text-3xl md:text-4xl mb-3 block" style={{ color: C.gold }}>{w.icon}</span>
              <h4 className="text-base md:text-xl font-bold font-display mb-1">{w.title}</h4>
              <p className="text-xs md:text-sm leading-relaxed opacity-80">{w.text}</p>
            </div>
          ))}
        </div>
      </div>

      <SubjectsSection />

      {/* PRICING: plain rows on phones, cards on desktop */}
      <Band id="pricing" background={C.navy} className="text-white" innerClassName="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold font-display mb-2">Transparent pricing</h2>
          <p className="text-sm md:text-base opacity-75">Choose the plan that fits your goals.</p>
        </div>

        <div className="md:hidden">
          {plans.map((p) => <PlanRow key={p.id} p={p} />)}
        </div>

        <div className="hidden md:grid grid-cols-3 gap-6 items-stretch">
          {plans.map((p) => (
            <div
              key={p.id}
              className="p-6 rounded-2xl flex flex-col"
              style={p.popular ? { background: C.gold, color: C.ink } : { background: '#fff', color: C.ink }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: p.popular ? C.navy : `${C.blue}1F`, color: p.popular ? C.gold : C.blue }}>
                  <p.icon size={18} />
                </div>
                {p.popular && <span className="text-[11px] font-bold px-2.5 py-1 rounded-full text-white" style={{ background: C.navy }}>Most chosen</span>}
              </div>
              <h3 className="text-lg font-bold font-display">{p.name}</h3>
              <p className="text-xs mt-1 mb-4 opacity-80">{p.description}</p>
              <div className="mb-5"><span className="text-3xl font-bold">{p.price}</span><span className="text-xs opacity-75"> {p.period}</span></div>
              <ul className="space-y-2 mb-6 flex-grow">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check size={14} className="mt-1 shrink-0" style={{ color: p.popular ? C.navy : C.green }} />
                    {f}
                  </li>
                ))}
              </ul>
              <a href={LINKS.WHATSAPP} target="_blank" rel="noreferrer" className="hl-btn hl-blue-btn w-full py-3 rounded-xl font-bold text-sm text-center">
                Choose plan
              </a>
            </div>
          ))}
        </div>
      </Band>

      {/* CONTACT */}
      <Band id="contact" className="hl-contact" innerClassName="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start max-w-6xl mx-auto">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display mb-3">Get in touch</h2>
          <p className="mb-4 leading-relaxed opacity-80">Questions? Call, message us on WhatsApp or send an email.</p>
          <ContactRow icon={<Phone size={20} />} label="Call us" value={LINKS.PHONE} href={`tel:${LINKS.PHONE.replace(/\s/g, '')}`} />
          <ContactRow icon={<MessageCircle size={20} />} label="WhatsApp" value="Chat with us" href={LINKS.WHATSAPP} external />
          <ContactRow icon={<Mail size={20} />} label="Email us" value={LINKS.EMAIL} href={`mailto:${LINKS.EMAIL}`} />
          <ContactRow icon={<MapPin size={20} />} label="Visit us" value="Green Masjid Ext 2, Eldorado Park" href={LINKS.MAPS} external />
          {!showForm && (
            <button type="button" onClick={() => setShowForm(true)} className="hl-btn hl-blue-btn md:hidden mt-6 w-full py-3.5 rounded-xl font-bold">
              Send us a message
            </button>
          )}
        </div>

        <div className={`${showForm ? 'block' : 'hidden'} md:block`}>
          {status === 'sent' ? (
            <div className="text-center py-10" role="status">
              <CheckCircle size={40} className="mx-auto mb-3" style={{ color: C.gold }} />
              <h3 className="text-2xl font-bold mb-1">Message sent</h3>
              <p className="opacity-80 mb-4">We'll be in touch shortly.</p>
              <button type="button" className="hl-btn font-bold underline" onClick={() => setStatus('idle')}>Send another</button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <input name="name" className="hl-field" placeholder="Your name" autoComplete="name" aria-label="Name" required />
              <input name="phone" type="tel" inputMode="tel" className="hl-field" placeholder="Phone (+27...)" autoComplete="tel" aria-label="Phone" required />
              <input name="email" type="email" className="hl-field" placeholder="Email" autoComplete="email" aria-label="Email" required />
              <textarea name="message" className="hl-field min-h-[120px]" placeholder="How can we help?" aria-label="Message" required />
              {status === 'error' && (
                <p role="alert" className="text-sm font-semibold">Message not sent. Please try again or call {LINKS.PHONE}.</p>
              )}
              <button type="submit" disabled={status === 'sending'} className="hl-btn hl-gold-btn w-full font-bold py-4 rounded-xl flex items-center justify-center gap-2 disabled:opacity-60">
                <Send size={18} /> {status === 'sending' ? 'Sending...' : 'Send message'}
              </button>
            </form>
          )}
        </div>
      </Band>

      {/* CLOSING + NPC details */}
      <Band background={`linear-gradient(135deg, ${C.green} 0%, ${C.navy} 100%)`} className="text-center text-white" innerClassName="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold font-display mb-3">Ready to excel?</h2>
        <p className="text-lg mb-8 max-w-xl mx-auto opacity-90">Join HL Tutoring and take the first step towards academic success.</p>
        <a href={LINKS.MAPS} target="_blank" rel="noreferrer" className="hl-btn inline-block px-10 py-4 rounded-2xl font-bold text-lg shadow-xl" style={{ background: C.cream, color: C.navy }}>
          Visit us
        </a>
        <p className="mt-10 text-xs opacity-70">HL Tutoring Non-Profit Organization · HL TUTORING NPC (Reg: 2026/791574/08)</p>
      </Band>

      {/* Phone-only bottom bar */}
      <div
        className="md:hidden fixed bottom-0 inset-x-0 z-40 flex gap-3 px-4 pt-3 border-t bg-white/95 backdrop-blur"
        style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 12px)' }}
      >
        <a href={LINKS.REGISTRATION} target="_blank" rel="noreferrer" className="hl-btn hl-gold-btn flex-1 text-center py-3 rounded-xl font-bold">Book</a>
        <a href={LINKS.WHATSAPP} target="_blank" rel="noreferrer" className="hl-btn hl-blue-btn flex-1 text-center py-3 rounded-xl font-bold">WhatsApp</a>
      </div>
    </div>
  );
};
