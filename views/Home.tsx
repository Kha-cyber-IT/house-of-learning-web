
import React, { useState } from 'react';
import { 
  ArrowRight, 
  GraduationCap, 
  CheckCircle, 
  Calendar, 
  Users, 
  Award,
  Calculator, 
  FlaskConical, 
  Leaf, 
  Landmark, 
  Languages, 
  TrendingUp, 
  Briefcase, 
  Receipt,
  Globe,
  Microscope,
  BookOpen, 
  BarChart,
  UserCheck,
  FileText,
  Clock,
  CalendarRange,
  Check,
  Quote,
  Star,
  MapPin, 
  Mail, 
  Phone, 
  Send, 
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { ViewState } from '../types';
import { LINKS } from '../constants';

interface HomeProps {
  setActiveView: (view: ViewState) => void;
}

const features = [
  "Personalized learning plans for each student",
  "Experienced and professional tutors",
  "Stress-free and individualized approach",
  "Proven methods that yield serious results",
];

const stats = [
  { icon: Calendar, value: "Since 2020", label: "Years of Excellence" },
  { icon: Users, value: "500+", label: "Students Empowered" },
  { icon: Award, value: "100%", label: "Success Rate" },
];

// --- SUBJECTS DATA ---

interface Subject {
  id: string;
  name: string;
  category: 'mathematics' | 'sciences' | 'languages' | 'commerce';
  level: string;
}

const subjects: Subject[] = [
  { id: "1", name: "Mathematics", category: "mathematics", level: "All Levels" },
  { id: "2", name: "Mathematical Literacy", category: "mathematics", level: "All Levels" },
  { id: "3", name: "Physical Sciences", category: "sciences", level: "Every Topic" },
  { id: "4", name: "Life Sciences", category: "sciences", level: "Every Topic" },
  { id: "5", name: "Natural Science", category: "sciences", level: "All Levels" },
  { id: "6", name: "History", category: "languages", level: "Any Curriculum" },
  { id: "7", name: "English", category: "languages", level: "Every Topic" },
  { id: "8", name: "Geography", category: "languages", level: "All Levels" },
  { id: "9", name: "Economics", category: "commerce", level: "Any Curriculum" },
  { id: "10", name: "Business Studies", category: "commerce", level: "All Levels" },
  { id: "11", name: "Accounting", category: "commerce", level: "All Levels" },
  { id: "12", name: "Economic Management Science", category: "commerce", level: "Every Topic" },
];

const categoryLabels: Record<Subject['category'], string> = {
  sciences: "Sciences",
  mathematics: "Mathematics",
  languages: "Languages & Humanities",
  commerce: "Commerce",
};

// Updated Colors for School Card Style (Solid backgrounds)
const categoryColors: Record<Subject['category'], { bg: string; text: string; darkText: string }> = {
  sciences: { bg: "bg-emerald-600", text: "text-emerald-600", darkText: "text-emerald-800" },
  mathematics: { bg: "bg-blue-600", text: "text-blue-600", darkText: "text-blue-800" },
  languages: { bg: "bg-amber-500", text: "text-amber-500", darkText: "text-amber-800" },
  commerce: { bg: "bg-purple-600", text: "text-purple-600", darkText: "text-purple-800" },
};

const subjectIcons: Record<string, React.ElementType> = {
  "Mathematics": Calculator,
  "Mathematical Literacy": BarChart,
  "Physical Sciences": FlaskConical,
  "Life Sciences": Leaf,
  "Natural Science": Microscope,
  "History": Landmark,
  "English": Languages,
  "Geography": Globe,
  "Economics": TrendingUp,
  "Business Studies": Briefcase,
  "Accounting": Receipt,
  "Economic Management Science": BookOpen,
};

// --- PRICING DATA ---

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

// --- TESTIMONIALS DATA ---
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

  const groupedSubjects = subjects.reduce((acc, subject) => {
    if (!acc[subject.category]) {
      acc[subject.category] = [];
    }
    acc[subject.category].push(subject);
    return acc;
  }, {} as Record<Subject['category'], Subject[]>);

  return (
    <div className="space-y-32 pb-0 w-full overflow-x-hidden">
      
      {/* 1. Hero Section - Light Mode Compatible */}
      <div className="relative w-full -mt-32 min-h-[95vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden rounded-b-[3rem] shadow-xl">
        
        {/* Background Image with Light Overlay */}
        <div className="absolute inset-0 z-0 select-none">
            <img 
                src="https://i.postimg.cc/rFPyLy1v/IMG-20251211-WA0090.jpg" 
                alt="Classroom Background" 
                className="w-full h-full object-cover scale-105"
            />
            {/* Light Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/90"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-50 max-w-5xl mx-auto flex flex-col items-center pt-24">
            
            {/* Badge */}
            <div className="mb-8 relative z-50">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-lime-500/30 px-4 py-2 rounded-full shadow-md">
                  <Sparkles size={16} className="text-lime-600" />
                  <span className="text-sm font-bold text-lime-800 tracking-wide uppercase">Premier Tutoring in Eldorado Park</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="mb-8 text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-slate-900 tracking-tight leading-[1.1] relative z-50">
                House of <span className="text-lime-600">Learning</span>
            </h1>

            {/* Description */}
            <p className="mb-10 text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl font-medium mx-auto relative z-50">
                Unlocking potential through personalized education. We aim to match every student with expert tutors to ignite a lifelong passion for success.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
                <button 
                    onClick={() => setActiveView('locations')}
                    className="w-full sm:w-auto bg-lime-600 hover:bg-lime-500 text-white text-lg font-bold py-4 px-12 rounded-xl shadow-lg shadow-lime-600/25 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group border border-transparent"
                >
                    Get Started
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <a 
                    href={LINKS.REGISTRATION}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto bg-white/80 hover:bg-white text-slate-800 border border-slate-200 hover:border-lime-500 text-lg font-semibold py-4 px-12 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                >
                    Book a Session
                </a>
            </div>
        </div>
      </div>

      {/* 2. About / Stats Section - Clean & Structured Light Theme */}
      <section id="about" className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
             
             {/* Text Content */}
             <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-[2px] bg-lime-600"></span>
                  <p className="text-lime-600 font-bold text-sm uppercase tracking-widest font-heading">Who We Are</p>
                </div>
                <h2 className="font-heading font-bold text-3xl md:text-5xl text-slate-900 mb-6 leading-tight">
                  Empowering Students to <span className="text-lime-600">Excel</span>
                </h2>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                  Since 2020, House of Learning has been a beacon of academic excellence. Our elite team of tutors specializes in unlocking student potential through personalized, stress-free learning environments.
                </p>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  We don't just teach subjects; we teach students how to learn, think critically, and build confidence that lasts a lifetime.
                </p>

                <ul className="space-y-4 mb-10">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <div className="mt-1 w-6 h-6 rounded-full bg-lime-100 flex items-center justify-center border border-lime-200 group-hover:bg-lime-200 transition-colors">
                        <Check className="h-3.5 w-3.5 text-lime-700" />
                      </div>
                      <span className="text-slate-700 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
             </div>

             {/* Stats & Visual */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className={`${index === 2 ? 'sm:col-span-2' : ''} bg-white shadow-md p-8 rounded-2xl text-center group hover:shadow-xl transition-all duration-300 border border-slate-100`}>
                        <div className="w-14 h-14 rounded-xl bg-lime-50 flex items-center justify-center mx-auto mb-4 border border-lime-100 group-hover:scale-110 transition-transform duration-300">
                            <stat.icon className="h-7 w-7 text-lime-600" />
                        </div>
                        <p className="font-heading font-bold text-4xl text-slate-900 mb-1 group-hover:text-lime-600 transition-colors">{stat.value}</p>
                        <p className="text-slate-500 text-sm font-medium uppercase tracking-wide">{stat.label}</p>
                    </div>
                ))}
             </div>
        </div>
      </section>

      {/* 3. Subjects Section - Light School Cards */}
      <section id="subjects" className="py-20 relative w-screen left-[calc(-50vw+50%)] bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-lime-600 font-bold text-sm uppercase tracking-widest mb-3">Curriculum</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-900 mb-6">
              Comprehensive Subject Coverage
            </h2>
            <p className="text-slate-600 text-lg">
              Expert tutoring across all major disciplines. From sciences to humanities, we have you covered.
            </p>
          </div>

          <div className="space-y-16">
            {(Object.keys(groupedSubjects) as Subject['category'][]).map((category) => (
              <div key={category} className="relative">
                <div className="flex items-center gap-4 mb-8">
                   <div className={`p-2 rounded-lg ${categoryColors[category].bg} shadow-md`}>
                      <BookOpen className="h-6 w-6 text-white" />
                   </div>
                   <h3 className="font-heading font-bold text-2xl text-slate-800">
                      {categoryLabels[category]}
                   </h3>
                   <div className="h-[1px] flex-1 bg-slate-200"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {groupedSubjects[category].map((subject) => {
                    const IconComponent = subjectIcons[subject.name] || BookOpen;
                    const colors = categoryColors[subject.category];
                    return (
                      <div 
                        key={subject.id} 
                        className="bg-white shadow-md rounded-xl overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        data-testid={`card-subject-${subject.id}`}
                      >
                        {/* Colored Header (30% height approx) */}
                        <div className={`${colors.bg} h-32 flex items-center justify-center relative overflow-hidden`}>
                           <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                           <IconComponent className="h-12 w-12 text-white drop-shadow-md group-hover:scale-110 transition-transform duration-300" />
                        </div>

                        {/* White Body */}
                        <div className="p-6">
                          <h4 className="font-heading font-bold text-lg text-slate-900 mb-2">
                            {subject.name}
                          </h4>
                          <div className="pt-2 border-t border-slate-100 mt-2">
                             <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                              {subject.level}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Services Section - Light Cards with Solid Buttons */}
      <section className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 relative overflow-hidden group hover:shadow-xl transition-all">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-lime-100 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-lime-200"></div>
                  <UserCheck className="text-lime-600 w-12 h-12 mb-6" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Private Tutoring</h3>
                  <p className="text-slate-600 leading-relaxed mb-8">
                      Exclusive one-on-one attention tailored to your unique learning style and pace.
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 bg-lime-600 hover:bg-lime-700 text-white px-5 py-2.5 rounded-lg font-bold transition-all shadow-md hover:shadow-lg">
                    Learn more <ArrowRight size={16} />
                  </a>
              </div>

              {/* Service 2 */}
              <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 relative overflow-hidden group hover:shadow-xl transition-all">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-purple-200"></div>
                  <GraduationCap className="text-purple-600 w-12 h-12 mb-6" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Structured Programs</h3>
                  <p className="text-slate-600 leading-relaxed mb-8">
                     Curriculum-aligned learning paths designed to build solid foundations for all grades.
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-lg font-bold transition-all shadow-md hover:shadow-lg">
                    View Programs <ArrowRight size={16} />
                  </a>
              </div>

              {/* Service 3 */}
              <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 relative overflow-hidden group hover:shadow-xl transition-all">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-emerald-200"></div>
                  <FileText className="text-emerald-600 w-12 h-12 mb-6" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Exam Prep</h3>
                  <p className="text-slate-600 leading-relaxed mb-8">
                      Intensive preparation strategies, past papers, and mock exams to maximize results.
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg font-bold transition-all shadow-md hover:shadow-lg">
                    Get Ready <ArrowRight size={16} />
                  </a>
              </div>
          </div>
      </section>

      {/* 5. Pricing Section - Light Theme */}
      <section id="pricing" className="py-24 relative w-screen left-[calc(-50vw+50%)] bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-lime-600 font-bold text-sm uppercase tracking-widest mb-3">Investment</p>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-slate-900 mb-6">
              Transparent Pricing
            </h2>
            <p className="text-slate-600 text-lg">
              Choose the plan that best fits your goals. No hidden fees, just quality education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.id}
                className={`relative rounded-2xl p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular 
                    ? "bg-white border-2 border-lime-500 shadow-xl shadow-lime-100 z-10 scale-105"
                    : "bg-white border border-slate-200 shadow-md"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-lime-600 px-4 py-1.5 text-xs font-bold text-white shadow-lg uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-8 text-center">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 mx-auto ${
                    plan.popular ? "bg-lime-600 text-white" : "bg-slate-100 text-slate-600"
                  }`}>
                    <plan.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1 my-4">
                    <span className="font-heading font-bold text-5xl text-slate-900">
                      {plan.price}
                    </span>
                    <span className="text-slate-500 text-sm">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed px-4">
                    {plan.description}
                  </p>
                </div>

                <div className="h-[1px] bg-slate-100 mb-8"></div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-slate-600">
                      <Check className={`h-5 w-5 flex-shrink-0 ${plan.popular ? 'text-lime-600' : 'text-slate-400'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href={LINKS.WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full py-4 px-6 rounded-xl font-bold transition-all block text-center ${
                    plan.popular 
                      ? "bg-lime-600 hover:bg-lime-700 text-white shadow-lg hover:shadow-lime-600/30"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200"
                  }`}
                >
                  Choose Plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section - Light Theme */}
      <section className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Quote className="w-12 h-12 text-lime-600/20 mx-auto mb-6" />
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-slate-900 mb-6">
              Student Success Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {homeTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white shadow-md rounded-2xl p-8 relative border border-slate-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-inner">
                     {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-lg">
                      {testimonial.name}
                    </h4>
                    <div className="flex gap-1 mt-1 text-amber-400">
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-600 leading-relaxed relative z-10 italic">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
      </section>

      {/* 7. Contact Section - Light Theme */}
      <section id="contact" className="py-24 relative w-screen left-[calc(-50vw+50%)] bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Contact Info */}
            <div className="space-y-8">
               <div>
                  <h2 className="font-heading font-bold text-4xl text-slate-900 mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    Have questions? We're here to help. Reach out to us via any of the channels below or fill out the form.
                  </p>
               </div>

               <div className="space-y-6">
                  <div className="flex items-start gap-5 p-4 rounded-xl hover:bg-white transition-colors border border-transparent hover:border-slate-200 hover:shadow-sm">
                      <div className="w-12 h-12 rounded-full bg-lime-100 flex items-center justify-center flex-shrink-0 border border-lime-200">
                        <MapPin className="h-5 w-5 text-lime-600" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 mb-1 font-semibold uppercase">Visit Us</p>
                        <p className="text-slate-800 text-lg">Green Masjid Ext 2, Eldorado Park</p>
                      </div>
                  </div>

                  <div className="flex items-start gap-5 p-4 rounded-xl hover:bg-white transition-colors border border-transparent hover:border-slate-200 hover:shadow-sm">
                      <div className="w-12 h-12 rounded-full bg-lime-100 flex items-center justify-center flex-shrink-0 border border-lime-200">
                        <Mail className="h-5 w-5 text-lime-600" />
                      </div>
                      <div>
                         <p className="text-sm text-slate-500 mb-1 font-semibold uppercase">Email Us</p>
                        <a href={`mailto:${LINKS.EMAIL}`} className="text-slate-800 text-lg hover:text-lime-600 transition-colors">
                          {LINKS.EMAIL}
                        </a>
                      </div>
                  </div>

                  <div className="flex items-start gap-5 p-4 rounded-xl hover:bg-white transition-colors border border-transparent hover:border-slate-200 hover:shadow-sm">
                      <div className="w-12 h-12 rounded-full bg-lime-100 flex items-center justify-center flex-shrink-0 border border-lime-200">
                        <Phone className="h-5 w-5 text-lime-600" />
                      </div>
                      <div>
                         <p className="text-sm text-slate-500 mb-1 font-semibold uppercase">Call Us</p>
                        <a href={`tel:${LINKS.PHONE.replace(/\s/g, '')}`} className="text-slate-800 text-lg hover:text-lime-600 transition-colors">
                          {LINKS.PHONE}
                        </a>
                      </div>
                  </div>
               </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl">
              {contactSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center h-full min-h-[400px]">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                      <CheckCircle className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-slate-900 mb-3">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-slate-500 mb-8 max-w-xs">
                      We'll be in touch with you shortly to discuss your educational needs.
                    </p>
                    <button 
                      onClick={() => setContactSubmitted(false)}
                      className="text-slate-600 border border-slate-300 hover:bg-slate-50 px-6 py-3 rounded-xl transition-colors font-medium"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Send a Message</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-slate-600 text-sm font-medium ml-1">Name</label>
                        <input
                          type="text"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-500/50 focus:border-lime-500 transition-all"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-slate-600 text-sm font-medium ml-1">Phone</label>
                        <input
                          type="tel"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-500/50 focus:border-lime-500 transition-all"
                          placeholder="+27..."
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-slate-600 text-sm font-medium ml-1">Email</label>
                      <input 
                        type="email" 
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-500/50 focus:border-lime-500 transition-all"
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-slate-600 text-sm font-medium ml-1">Message</label>
                      <textarea 
                        className="w-full min-h-[140px] rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-500/50 focus:border-lime-500 resize-none transition-all"
                        placeholder="How can we help you?"
                        required
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="w-full bg-lime-600 hover:bg-lime-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-lime-600/20 transition-all active:scale-95 flex items-center justify-center gap-2"
                    >
                      <Send className="h-5 w-5" />
                      Send Message
                    </button>
                  </form>
                )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
