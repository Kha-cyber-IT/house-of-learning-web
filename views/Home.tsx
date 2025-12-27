
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

const categoryColors: Record<Subject['category'], { bg: string; border: string; text: string }> = {
  sciences: { bg: "bg-emerald-500/10", border: "border-emerald-500/20", text: "text-emerald-400" },
  mathematics: { bg: "bg-lime-500/10", border: "border-lime-500/20", text: "text-lime-400" },
  languages: { bg: "bg-amber-500/10", border: "border-amber-500/20", text: "text-amber-400" },
  commerce: { bg: "bg-purple-500/10", border: "border-purple-500/20", text: "text-purple-400" },
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
    price: "R250",
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
  {
    id: "2",
    name: "Refilwe",
    content: "House of Learning helped me a lot. Paper 2 maths has always been a struggle for me but after the classes I was confident about what I wrote. Thank you House of Learning.",
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
      
      {/* 1. Hero Section - Modern & Bold */}
      <div className="relative w-full -mt-32 min-h-[95vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        
        {/* Background Image with Modern Overlay */}
        <div className="absolute inset-0 z-0 select-none">
            <img 
                src="https://i.postimg.cc/rFPyLy1v/IMG-20251211-WA0090.jpg" 
                alt="Classroom Background" 
                className="w-full h-full object-cover scale-105 opacity-60"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-background"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-50 max-w-5xl mx-auto flex flex-col items-center pt-24">
            
            {/* Badge */}
            <div className="mb-8 relative z-50">
              <div className="inline-flex items-center gap-2 bg-lime-500/20 backdrop-blur-md border border-lime-500/30 px-4 py-2 rounded-full shadow-lg">
                  <Sparkles size={16} className="text-lime-400" />
                  <span className="text-sm font-bold text-white tracking-wide uppercase shadow-black drop-shadow-md">Premier Tutoring in Eldorado Park</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="mb-8 text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-white tracking-tight leading-[1.1] drop-shadow-2xl relative z-50">
                House of <span className="text-lime-500">Learning</span>
            </h1>

            {/* Description */}
            <p className="mb-10 text-lg md:text-xl text-white leading-relaxed max-w-2xl font-medium mx-auto drop-shadow-lg relative z-50">
                Unlocking potential through personalized education. We match every student with expert tutors to ignite a lifelong passion for success.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
                <button 
                    onClick={() => setActiveView('locations')}
                    className="w-full sm:w-auto bg-lime-600 hover:bg-lime-500 text-white text-lg font-bold py-4 px-12 rounded-xl shadow-lg shadow-lime-500/25 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group border border-transparent"
                >
                    Get Started
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <a 
                    href={LINKS.REGISTRATION}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-white/40 text-lg font-semibold py-4 px-12 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2 backdrop-blur-sm"
                >
                    Book a Session
                </a>
            </div>
        </div>
      </div>

      {/* 2. About / Stats Section - Clean & Structured */}
      <section id="about" className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
             
             {/* Text Content */}
             <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-[2px] bg-lime-500"></span>
                  <p className="text-lime-400 font-bold text-sm uppercase tracking-widest font-heading">Who We Are</p>
                </div>
                <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-6 leading-tight">
                  Empowering Students to <span className="text-lime-500">Excel</span>
                </h2>
                <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                  Since 2020, House of Learning has been a beacon of academic excellence. Our elite team of tutors specializes in unlocking student potential through personalized, stress-free learning environments.
                </p>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  We don't just teach subjects; we teach students how to learn, think critically, and build confidence that lasts a lifetime.
                </p>

                <ul className="space-y-4 mb-10">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <div className="mt-1 w-6 h-6 rounded-full bg-lime-500/20 flex items-center justify-center border border-lime-500/30 group-hover:bg-lime-500/30 transition-colors">
                        <Check className="h-3.5 w-3.5 text-lime-400" />
                      </div>
                      <span className="text-slate-200 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
             </div>

             {/* Stats & Visual */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className={`${index === 2 ? 'sm:col-span-2' : ''} glass-card-lime p-8 rounded-2xl text-center group hover:border-lime-500/40`}>
                        <div className="w-14 h-14 rounded-xl bg-lime-500/10 flex items-center justify-center mx-auto mb-4 border border-lime-500/20 group-hover:scale-110 transition-transform duration-300">
                            <stat.icon className="h-7 w-7 text-lime-400" />
                        </div>
                        <p className="font-heading font-bold text-4xl text-white mb-1 group-hover:text-lime-400 transition-colors">{stat.value}</p>
                        <p className="text-slate-400 text-sm font-medium uppercase tracking-wide">{stat.label}</p>
                    </div>
                ))}
             </div>
        </div>
      </section>

      {/* 3. Subjects Section - Bento Grid Style */}
      <section id="subjects" className="py-20 relative w-screen left-[calc(-50vw+50%)] bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-lime-400 font-bold text-sm uppercase tracking-widest mb-3">Curriculum</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
              Comprehensive Subject Coverage
            </h2>
            <p className="text-slate-400 text-lg">
              Expert tutoring across all major disciplines. From sciences to humanities, we have you covered.
            </p>
          </div>

          <div className="space-y-16">
            {(Object.keys(groupedSubjects) as Subject['category'][]).map((category) => (
              <div key={category} className="relative">
                <div className="flex items-center gap-4 mb-8">
                   <div className={`p-2 rounded-lg ${categoryColors[category].bg} ${categoryColors[category].border} border`}>
                      <BookOpen className={`h-6 w-6 ${categoryColors[category].text}`} />
                   </div>
                   <h3 className="font-heading font-bold text-2xl text-white">
                      {categoryLabels[category]}
                   </h3>
                   <div className="h-[1px] flex-1 bg-gradient-to-r from-slate-800 to-transparent"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {groupedSubjects[category].map((subject) => {
                    const IconComponent = subjectIcons[subject.name] || BookOpen;
                    const colors = categoryColors[subject.category];
                    return (
                      <div 
                        key={subject.id} 
                        className="glass-card-lime p-6 rounded-xl group hover:border-opacity-50 transition-all duration-300"
                        data-testid={`card-subject-${subject.id}`}
                      >
                        <div className="flex flex-col h-full">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${colors.bg} group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className={`h-6 w-6 ${colors.text}`} />
                          </div>
                          <h4 className="font-heading font-semibold text-lg text-white mb-2 group-hover:text-lime-300 transition-colors">
                            {subject.name}
                          </h4>
                          <div className="mt-auto pt-4 border-t border-white/5">
                             <span className="text-xs font-medium text-slate-400 uppercase tracking-wide">
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

      {/* 4. Services Section - Cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="glass-card-lime p-10 rounded-3xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-lime-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-lime-500/20"></div>
                  <UserCheck className="text-lime-400 w-12 h-12 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Private Tutoring</h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                      Exclusive one-on-one attention tailored to your unique learning style and pace.
                  </p>
                  <a href="#" className="text-lime-400 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn more <ArrowRight size={16} />
                  </a>
              </div>

              {/* Service 2 */}
              <div className="glass-card-lime p-10 rounded-3xl relative overflow-hidden group border-lime-500/30">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-purple-500/20"></div>
                  <GraduationCap className="text-purple-400 w-12 h-12 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Structured Programs</h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                     Curriculum-aligned learning paths designed to build solid foundations for all grades.
                  </p>
                  <a href="#" className="text-purple-400 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    View Programs <ArrowRight size={16} />
                  </a>
              </div>

              {/* Service 3 */}
              <div className="glass-card-lime p-10 rounded-3xl relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-emerald-500/20"></div>
                  <FileText className="text-emerald-400 w-12 h-12 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Exam Prep</h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                      Intensive preparation strategies, past papers, and mock exams to maximize results.
                  </p>
                  <a href="#" className="text-emerald-400 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    Get Ready <ArrowRight size={16} />
                  </a>
              </div>
          </div>
      </section>

      {/* 5. Pricing Section - Highlighted */}
      <section id="pricing" className="py-24 relative w-screen left-[calc(-50vw+50%)] bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-lime-400 font-bold text-sm uppercase tracking-widest mb-3">Investment</p>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-slate-400 text-lg">
              Choose the plan that best fits your goals. No hidden fees, just quality education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.id}
                className={`relative rounded-2xl p-8 flex flex-col h-full transition-transform duration-300 hover:-translate-y-2 ${
                  plan.popular 
                    ? "glass-card-story border-2 border-lime-500/50 shadow-2xl shadow-lime-900/20 z-10 scale-105"
                    : "glass-card-lime border border-white/5"
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
                    plan.popular ? "bg-lime-600 text-white" : "bg-slate-800 text-slate-300"
                  }`}>
                    <plan.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1 my-4">
                    <span className="font-heading font-bold text-5xl text-white">
                      {plan.price}
                    </span>
                    <span className="text-slate-400 text-sm">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed px-4">
                    {plan.description}
                  </p>
                </div>

                <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-slate-300">
                      <Check className={`h-5 w-5 flex-shrink-0 ${plan.popular ? 'text-lime-400' : 'text-slate-500'}`} />
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
                      ? "bg-lime-600 hover:bg-lime-500 text-white shadow-lg hover:shadow-lime-600/30"
                      : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                  }`}
                >
                  Choose Plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Quote className="w-12 h-12 text-lime-500/20 mx-auto mb-6" />
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-6">
              Student Success Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {homeTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="glass-card-lime rounded-2xl p-8 relative hover:bg-slate-800/50 transition-colors"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-inner">
                     {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white text-lg">
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
                
                <p className="text-slate-300 leading-relaxed relative z-10 italic">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
      </section>

      {/* 7. Contact Section */}
      <section id="contact" className="py-24 relative w-screen left-[calc(-50vw+50%)] bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Contact Info */}
            <div className="space-y-8">
               <div>
                  <h2 className="font-heading font-bold text-4xl text-white mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    Have questions? We're here to help. Reach out to us via any of the channels below or fill out the form.
                  </p>
               </div>

               <div className="space-y-6">
                  <div className="flex items-start gap-5 p-4 rounded-xl hover:bg-white/5 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-lime-500/10 flex items-center justify-center flex-shrink-0 border border-lime-500/20">
                        <MapPin className="h-5 w-5 text-lime-400" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 mb-1 font-semibold uppercase">Visit Us</p>
                        <p className="text-white text-lg">Green Masjid Ext 2, Eldorado Park</p>
                      </div>
                  </div>

                  <div className="flex items-start gap-5 p-4 rounded-xl hover:bg-white/5 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-lime-500/10 flex items-center justify-center flex-shrink-0 border border-lime-500/20">
                        <Mail className="h-5 w-5 text-lime-400" />
                      </div>
                      <div>
                         <p className="text-sm text-slate-500 mb-1 font-semibold uppercase">Email Us</p>
                        <a href={`mailto:${LINKS.EMAIL}`} className="text-white text-lg hover:text-lime-400 transition-colors">
                          {LINKS.EMAIL}
                        </a>
                      </div>
                  </div>

                  <div className="flex items-start gap-5 p-4 rounded-xl hover:bg-white/5 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-lime-500/10 flex items-center justify-center flex-shrink-0 border border-lime-500/20">
                        <Phone className="h-5 w-5 text-lime-400" />
                      </div>
                      <div>
                         <p className="text-sm text-slate-500 mb-1 font-semibold uppercase">Call Us</p>
                        <a href={`tel:${LINKS.PHONE.replace(/\s/g, '')}`} className="text-white text-lg hover:text-lime-400 transition-colors">
                          {LINKS.PHONE}
                        </a>
                      </div>
                  </div>
               </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card-lime p-8 md:p-10 rounded-3xl border border-white/5 bg-slate-800/20">
              {contactSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center h-full min-h-[400px]">
                    <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                      <CheckCircle className="h-10 w-10 text-green-400" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-white mb-3">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-slate-400 mb-8 max-w-xs">
                      We'll be in touch with you shortly to discuss your educational needs.
                    </p>
                    <button 
                      onClick={() => setContactSubmitted(false)}
                      className="text-white border border-white/20 hover:bg-white/10 px-6 py-3 rounded-xl transition-colors font-medium"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-slate-400 text-sm font-medium ml-1">Name</label>
                        <input
                          type="text"
                          className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-lime-500/50 transition-all"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-slate-400 text-sm font-medium ml-1">Phone</label>
                        <input
                          type="tel"
                          className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-lime-500/50 transition-all"
                          placeholder="+27..."
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-slate-400 text-sm font-medium ml-1">Email</label>
                      <input 
                        type="email" 
                        className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-lime-500/50 transition-all"
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-slate-400 text-sm font-medium ml-1">Message</label>
                      <textarea 
                        className="w-full min-h-[140px] rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-lime-500/50 resize-none transition-all"
                        placeholder="How can we help you?"
                        required
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="w-full bg-lime-600 hover:bg-lime-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-lime-600/20 transition-all active:scale-95 flex items-center justify-center gap-2"
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
