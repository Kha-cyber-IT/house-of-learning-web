
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

// --- DATA RESTORATION ---

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  icon: React.ElementType;
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
    features: [
      "4 hours weekly tutoring",
      "Priority session booking",
      "Weekly goal setting",
      "Detailed progress reports",
      "Homework & assignment help",
    ],
  },
];

const homeTestimonials = [
  {
    id: "1",
    name: "Liam Moor",
    content: "This is Liam Moor, who joined House of Learning this year for extra classes. It helped him improve his results, and he received his report card, moving to the next grade. Thank you, House of Learning, for the extra classes.",
  },
];

export const Home: React.FC<HomeProps> = ({ setActiveView }) => {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  return (
    <div className="space-y-32">
        
        {/* HERO SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
                <h1 className="text-slate-900 text-5xl font-extrabold font-display tracking-tight leading-[1.1] mb-6">
                    House of <br /> Learning
                </h1>
                <p className="text-slate-500 text-xl font-medium leading-relaxed">
                    Unlocking potential through personalized education. We match every student with expert tutors to ignite a lifelong passion for success.
                </p>
            </div>
            <a
                href={LINKS.REGISTRATION}
                target="_blank"
                rel="noreferrer"
                className="bg-white border border-gray-200 text-slate-700 px-6 py-3 rounded-xl text-sm font-bold shadow-sm hover:border-gray-300 transition-all"
            >
                Book a Session
            </a>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            <div className="card-service rounded-2xl border-accent-blue p-8 flex flex-col">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
                    <span className="material-symbols-outlined text-blue-700 text-3xl">person</span>
                </div>
                <h3 className="text-2xl font-bold font-display mb-4 text-slate-900">Private Tutoring</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">Exclusive one-on-one attention tailored to your unique learning style and pace.</p>
                <ul className="space-y-4 mb-10 flex-grow">
                    <li className="flex items-center gap-3 text-sm text-slate-600 font-medium"><span className="material-symbols-outlined text-accent-blue text-lg">verified</span> Personalized plans</li>
                    <li className="flex items-center gap-3 text-sm text-slate-600 font-medium"><span className="material-symbols-outlined text-accent-blue text-lg">verified</span> Flexible scheduling</li>
                    <li className="flex items-center gap-3 text-sm text-slate-600 font-medium"><span className="material-symbols-outlined text-accent-blue text-lg">verified</span> Subject specific</li>
                </ul>
                <button onClick={() => setActiveView('services')} className="w-full py-3.5 bg-slate-50 text-slate-700 hover:bg-blue-600 hover:text-white transition-all rounded-xl font-bold text-sm">Learn More</button>
            </div>
            <div className="card-service rounded-2xl border-accent-emerald p-8 flex flex-col">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8">
                    <span className="material-symbols-outlined text-emerald-700 text-3xl">school</span>
                </div>
                <h3 className="text-2xl font-bold font-display mb-4 text-slate-900">Structured Programs</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">Curriculum-aligned learning paths designed to build solid foundations for all grades.</p>
                <ul className="space-y-4 mb-10 flex-grow">
                    <li className="flex items-center gap-3 text-sm text-slate-600 font-medium"><span className="material-symbols-outlined text-accent-emerald text-lg">verified</span> Grade R to 12</li>
                    <li className="flex items-center gap-3 text-sm text-slate-600 font-medium"><span className="material-symbols-outlined text-accent-emerald text-lg">verified</span> Foundation building</li>
                    <li className="flex items-center gap-3 text-sm text-slate-600 font-medium"><span className="material-symbols-outlined text-accent-emerald text-lg">verified</span> Consistent support</li>
                </ul>
                <button onClick={() => setActiveView('services')} className="w-full py-3.5 bg-slate-50 text-slate-700 hover:bg-emerald-600 hover:text-white transition-all rounded-xl font-bold text-sm">View Programs</button>
            </div>
            <div className="card-service rounded-2xl border-accent-indigo p-8 flex flex-col">
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-8">
                    <span className="material-symbols-outlined text-indigo-700 text-3xl">menu_book</span>
                </div>
                <h3 className="text-2xl font-bold font-display mb-4 text-slate-900">Exam Prep</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">Intensive preparation strategies, past papers, and mock exams to maximize results.</p>
                <ul className="space-y-4 mb-10 flex-grow">
                    <li className="flex items-center gap-3 text-sm text-slate-600 font-medium"><span className="material-symbols-outlined text-accent-indigo text-lg">verified</span> Past papers</li>
                    <li className="flex items-center gap-3 text-sm text-slate-600 font-medium"><span className="material-symbols-outlined text-accent-indigo text-lg">verified</span> Mock exams</li>
                    <li className="flex items-center gap-3 text-sm text-slate-600 font-medium"><span className="material-symbols-outlined text-accent-indigo text-lg">verified</span> Exam strategies</li>
                </ul>
                <button onClick={() => setActiveView('services')} className="w-full py-3.5 bg-slate-50 text-slate-700 hover:bg-indigo-600 hover:text-white transition-all rounded-xl font-bold text-sm">Get Ready</button>
            </div>
        </div>

        {/* WHY CHOOSE US (BENTO - Updated Green Styling) */}
        <div className="mb-32">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold font-display mb-4 text-slate-900">Why Choose Us?</h2>
                <p className="text-slate-500 text-lg font-medium">We don't just teach subjects; we teach students how to learn.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[500px]">
                <div className="md:col-span-2 md:row-span-2 bg-primary p-8 rounded-3xl flex flex-col justify-center text-slate-900 shadow-xl">
                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-8">
                        <span className="material-symbols-outlined text-primary text-4xl">workspace_premium</span>
                    </div>
                    <h4 className="text-3xl font-bold font-display mb-4 text-slate-900">Personalized Learning</h4>
                    <p className="text-slate-900 text-lg leading-relaxed font-medium">We develop individualized learning plans for each student, ensuring that we address their specific needs, learning styles, and academic goals.</p>
                </div>
                <div className="bg-primary p-8 rounded-3xl flex flex-col items-start text-slate-900 shadow-xl">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6">
                        <span className="material-symbols-outlined text-primary text-2xl">groups</span>
                    </div>
                    <h4 className="text-xl font-bold font-display mb-2 text-slate-900">Experienced Tutors</h4>
                    <p className="text-slate-900 text-sm leading-relaxed font-medium">Professional and vetted tutors dedicated to your success.</p>
                </div>
                <div className="bg-primary p-8 rounded-3xl flex flex-col items-start text-slate-900 shadow-xl">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6">
                        <span className="material-symbols-outlined text-primary text-2xl">star_rate</span>
                    </div>
                    <h4 className="text-xl font-bold font-display mb-2 text-slate-900">Proven Results</h4>
                    <p className="text-slate-900 text-sm leading-relaxed font-medium">100% success rate with students moving to the next grade.</p>
                </div>
                <div className="md:col-span-2 bg-primary p-8 rounded-3xl flex items-center gap-8 text-slate-900 shadow-xl">
                    <div className="w-20 h-20 rounded-3xl bg-white flex-shrink-0 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-5xl">library_books</span>
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold font-display mb-2 text-slate-900">Comprehensive Coverage</h4>
                        <p className="text-slate-900 text-base leading-relaxed font-medium">Maths, Sciences, Languages, and Commerce subjects for all levels.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* SUBJECTS SECTION (Updated) */}
        <SubjectsSection />

        {/* PRICING SECTION (Restored) */}
        <div className="mb-32">
             <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold font-display mb-4 text-slate-900">Transparent Pricing</h2>
                <p className="text-slate-500 text-lg font-medium">Choose the plan that best fits your goals.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {pricingPlans.map((plan) => (
                    <div
                        key={plan.id}
                        className={`p-8 rounded-2xl flex flex-col transition-all duration-300 ${
                            plan.popular
                                ? 'bg-primary border-2 border-primary shadow-xl scale-105 z-10 text-slate-900'
                                : 'bg-white border-2 border-primary hover:shadow-lg'
                        }`}
                    >
                        {plan.popular && (
                            <span className="self-start bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                                MOST POPULAR
                            </span>
                        )}
                        <div className="mb-6">
                            <h3 className={`text-xl font-bold font-display ${plan.popular ? 'text-slate-900' : 'text-slate-900'}`}>
                                {plan.name}
                            </h3>
                            <p className={`text-sm mt-2 ${plan.popular ? 'text-slate-800 font-medium' : 'text-slate-500'}`}>
                                {plan.description}
                            </p>
                        </div>
                        <div className="mb-8">
                            <span className={`text-4xl font-bold ${plan.popular ? 'text-slate-900' : 'text-slate-900'}`}>
                                {plan.price}
                            </span>
                            <span className={`text-sm ${plan.popular ? 'text-slate-800' : 'text-slate-500'}`}>
                                {' '}{plan.period}
                            </span>
                        </div>
                        <ul className="space-y-3 mb-8 flex-grow">
                            {plan.features.map((feature, i) => (
                                <li key={i} className={`flex items-start gap-3 text-sm ${plan.popular ? 'text-slate-800 font-semibold' : 'text-slate-600'}`}>
                                    <Check size={16} className={`${plan.popular ? 'text-slate-900' : 'text-primary'} mt-0.5`} />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                         <a
                            href={LINKS.WHATSAPP}
                            target="_blank"
                            rel="noreferrer"
                            className={`w-full py-3.5 rounded-xl font-bold text-sm text-center transition-all ${
                                plan.popular
                                    ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20'
                                    : 'bg-slate-50 text-slate-700 hover:bg-primary hover:text-white'
                            }`}
                        >
                            Choose Plan
                        </a>
                    </div>
                ))}
            </div>
        </div>

        {/* TESTIMONIALS (Student Success - Restored & Updated) */}
        <div className="mb-32">
             <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold font-display mb-4 text-slate-900">Student Success</h2>
            </div>
            <div className="max-w-4xl mx-auto flex justify-center">
                {homeTestimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-primary rounded-xl p-10 text-center relative max-w-2xl w-full shadow-lg">
                        <span className="material-symbols-outlined text-4xl text-slate-900 absolute top-8 left-8">format_quote</span>
                        <p className="text-xl text-slate-900 leading-relaxed font-medium italic mb-6 relative z-10">"{testimonial.content}"</p>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center font-bold text-lg mb-3">
                                {testimonial.name.charAt(0)}
                            </div>
                            <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                            <div className="flex text-slate-900 gap-1 mt-1">
                                <Star size={14} fill="currentColor" />
                                <Star size={14} fill="currentColor" />
                                <Star size={14} fill="currentColor" />
                                <Star size={14} fill="currentColor" />
                                <Star size={14} fill="currentColor" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* CONTACT SECTION (Orange AIE Style) */}
        <div id="contact" className="mb-32">
             <div className="bg-[#F15A29] rounded-[40px] p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start shadow-xl">
                 {/* Left Column: Info */}
                 <div className="text-white">
                      <h2 className="text-4xl font-extrabold font-display mb-6">Get in Touch</h2>
                      <p className="text-white/90 text-lg mb-10 leading-relaxed font-medium">
                        Have questions? We're here to help. Reach out to us via any of the channels below or fill out the form.
                      </p>

                      <div className="space-y-8">
                          <div className="flex items-start gap-5">
                              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white shrink-0">
                                 <MapPin size={24} />
                              </div>
                              <div>
                                  <h4 className="font-bold text-lg mb-1">Visit Us</h4>
                                  <p className="text-white/90">Green Masjid Ext 2, Eldorado Park</p>
                              </div>
                          </div>
                          <div className="flex items-start gap-5">
                              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white shrink-0">
                                 <Mail size={24} />
                              </div>
                              <div>
                                  <h4 className="font-bold text-lg mb-1">Email Us</h4>
                                  <a href={`mailto:${LINKS.EMAIL}`} className="text-white/90 hover:text-white transition-colors">{LINKS.EMAIL}</a>
                              </div>
                          </div>
                          <div className="flex items-start gap-5">
                              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white shrink-0">
                                 <Phone size={24} />
                              </div>
                              <div>
                                  <h4 className="font-bold text-lg mb-1">Call Us</h4>
                                  <a href={`tel:${LINKS.PHONE.replace(/\s/g, '')}`} className="text-white/90 hover:text-white transition-colors">{LINKS.PHONE}</a>
                              </div>
                          </div>
                      </div>
                 </div>

                 {/* Right Column: Form */}
                 <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                     {contactSubmitted ? (
                          <div className="text-center py-12">
                              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                                  <CheckCircle size={32} />
                              </div>
                              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                              <p className="text-white/80 mb-6">We'll be in touch shortly.</p>
                              <button onClick={() => setContactSubmitted(false)} className="text-white font-bold hover:underline">Send another</button>
                          </div>
                     ) : (
                         <form onSubmit={handleContactSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-bold text-white mb-2">Name</label>
                                <input type="text" className="w-full px-4 py-3.5 rounded-xl bg-transparent border border-white/50 text-white placeholder:text-white/60 focus:border-white focus:ring-1 focus:ring-white focus:outline-none transition-all" placeholder="John Doe" required />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-white mb-2">Phone</label>
                                <input type="tel" className="w-full px-4 py-3.5 rounded-xl bg-transparent border border-white/50 text-white placeholder:text-white/60 focus:border-white focus:ring-1 focus:ring-white focus:outline-none transition-all" placeholder="+27..." required />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-white mb-2">Email</label>
                                <input type="email" className="w-full px-4 py-3.5 rounded-xl bg-transparent border border-white/50 text-white placeholder:text-white/60 focus:border-white focus:ring-1 focus:ring-white focus:outline-none transition-all" placeholder="john@example.com" required />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-white mb-2">Message</label>
                                <textarea className="w-full px-4 py-3.5 rounded-xl bg-transparent border border-white/50 text-white placeholder:text-white/60 focus:border-white focus:ring-1 focus:ring-white focus:outline-none transition-all min-h-[120px]" placeholder="How can we help?" required></textarea>
                            </div>
                            <button type="submit" className="w-full bg-[#2BB6C7] hover:brightness-110 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 mt-2">
                                <Send size={20} /> Send Message
                            </button>
                         </form>
                     )}
                 </div>
             </div>
        </div>

        {/* CLOSING CTA */}
        <div className="bg-slate-100/50 rounded-[40px] p-16 text-center border border-gray-200/60 shadow-sm">
            <h2 className="text-4xl font-extrabold font-display mb-6 text-slate-900 leading-tight">Ready to Excel?</h2>
            <p className="text-slate-500 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">Join House of Learning today and take the first step towards academic success.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                    href={LINKS.REGISTRATION}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-primary hover:bg-lime-600 text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-lime-500/20 transition-all"
                >
                    Book Now
                </a>
                <button
                    onClick={() => setActiveView('locations')}
                    className="bg-white border border-gray-200 text-slate-800 px-12 py-5 rounded-2xl font-bold text-lg shadow-sm hover:border-gray-300 transition-all"
                >
                    Contact Us
                </button>
            </div>
        </div>
    </div>
  );
};
