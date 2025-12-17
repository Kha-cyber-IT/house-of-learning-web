

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
  MessageCircle
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
  { icon: Calendar, value: "Since 2020", label: "Helping Students" },
  { icon: Users, value: "500+", label: "Students Taught" },
  { icon: Award, value: "100%", label: "Commitment" },
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
  sciences: { bg: "bg-emerald-600/20", border: "border-emerald-500/40", text: "text-emerald-400" },
  mathematics: { bg: "bg-blue-600/20", border: "border-blue-500/40", text: "text-blue-400" },
  languages: { bg: "bg-amber-600/20", border: "border-amber-500/40", text: "text-amber-400" },
  commerce: { bg: "bg-purple-600/20", border: "border-purple-500/40", text: "text-purple-400" },
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
    description: "Perfect for occasional help with specific topics or homework assistance",
    price: "R150",
    period: "per hour",
    icon: Clock,
    features: [
      "One-on-one tutoring",
      "Any subject available",
      "Flexible scheduling",
      "Progress tracking",
      "Study materials included",
    ],
  },
  {
    id: "monthly",
    name: "Monthly Package",
    description: "Comprehensive support for students who need regular academic guidance",
    price: "R250",
    period: "per month",
    icon: CalendarRange,
    popular: true,
    features: [
      "16 hours of tutoring per month",
      "Dedicated tutor assignment",
      "Customized learning path",
      "Monthly assessments",
      "Parent progress updates",
      "Unlimited study materials",
      "Exam and test preparation",
    ],
  },
  {
    id: "weekly",
    name: "Weekly Plan",
    description: "Ideal for consistent weekly support and steady academic improvement",
    price: "R600",
    period: "per month",
    icon: Calendar,
    features: [
      "4 hours of tutoring per week",
      "Priority scheduling",
      "Personalized study plan",
      "Weekly progress reports",
      "Homework assistance",
      "Exam preparation tips",
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
    <div className="space-y-24 animate-fade-in pb-0 w-full">
      
      {/* 1. Hero Section - Full Width Breakout */}
      <div className="relative w-screen left-[calc(-50vw+50%)] -mt-24 md:-mt-32 min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 select-none">
            <img 
                src="https://i.postimg.cc/rFPyLy1v/IMG-20251211-WA0090.jpg" 
                alt="Classroom Background" 
                className="w-full h-full object-cover"
            />
            {/* Dark Overlay for Text Contrast */}
            <div className="absolute inset-0 bg-gray-950/80 backdrop-blur-[2px]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center pt-20">
            
            {/* Badge */}
            <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full shadow-2xl hover:bg-white/15 transition-colors">
                  <GraduationCap size={20} className="text-blue-400" />
                  <span className="text-sm md:text-base font-medium text-white tracking-wide">Tutoring Service in Eldorado Park</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="mb-6 text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-white tracking-tight drop-shadow-2xl leading-[1.1] animate-fade-in" style={{ animationDelay: '0.2s' }}>
                House of <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Learning</span>
            </h1>

            {/* Description */}
            <p className="mb-8 text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl font-light drop-shadow-lg mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
                We aim to match every student with experienced and professional tutors that will ignite their passion for learning.
            </p>

            {/* Quote */}
            <div className="mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <p className="text-gray-400 italic font-serif text-lg md:text-xl max-w-lg mx-auto">
                    "Education is not about being the best. It’s about becoming better than you were yesterday."
                </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <button 
                    onClick={() => setActiveView('locations')}
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold py-4 px-10 rounded-xl shadow-lg shadow-blue-900/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
                >
                    Get in Touch 
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <a 
                    href={LINKS.REGISTRATION}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:border-white/50 text-lg font-semibold py-4 px-10 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                    Book Now
                </a>
            </div>
        </div>
      </div>

      {/* 2. About / Stats Section */}
      <section id="academic-excellence" className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
             
             {/* Text Column - Image Column Removed */}
             <div>
                <p className="text-blue-400 font-medium mb-2 text-sm uppercase tracking-wide font-heading">About Us</p>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6 text-shadow-sm">
                  Your Partner in Academic Excellence
                </h2>
                <p className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed">
                  Since 2020, our elite team of tutors has been helping students maximize their academic potential and excel in any subject they choose. Through our individualized and stress-free approach, we have perfected a method of teaching that yields serious results.
                </p>
                <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
                  With our personalized touch, we're able to channel the most effective learning techniques to challenge, motivate and support our students.
                </p>

                <ul className="space-y-4 mb-10 text-left max-w-2xl mx-auto">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/90 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => setActiveView('locations')}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all active:scale-95"
                >
                  Contact Us
                </button>
             </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 lg:mt-24">
            {stats.map((stat, index) => (
                <div key={index} className="glass-card-blue p-8 rounded-2xl text-center hover:-translate-y-1 transition-transform duration-300 bg-blue-900/20 border border-blue-500/20">
                    <div className="w-16 h-16 rounded-full bg-blue-600/20 flex items-center justify-center mx-auto mb-6 border border-blue-500/20">
                        <stat.icon className="h-8 w-8 text-blue-400" />
                    </div>
                    <p className="font-heading font-bold text-4xl text-white mb-2">{stat.value}</p>
                    <p className="text-blue-200 uppercase tracking-wider text-sm font-medium">{stat.label}</p>
                </div>
            ))}
        </div>
      </section>

      {/* 3. Subjects Section */}
      <section id="subjects" className="py-16 md:py-20 lg:py-24 relative w-screen left-[calc(-50vw+50%)]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-blue-400 font-medium mb-2 text-sm uppercase tracking-wide">What We Teach</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4 text-shadow-strong">
              Academic Subjects
            </h2>
            <p className="text-white/70 text-base md:text-lg">
              We offer comprehensive tutoring across a wide range of subjects, ensuring every student finds the support they need.
            </p>
          </div>

          <div className="space-y-10">
            {(Object.keys(groupedSubjects) as Subject['category'][]).map((category) => (
              <div key={category}>
                <h3 className="font-heading font-semibold text-xl md:text-2xl text-white mb-4 flex items-center gap-2">
                  <span className={`inline-block w-3 h-3 rounded-full ${categoryColors[category].bg}`} />
                  {categoryLabels[category]}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {groupedSubjects[category].map((subject) => {
                    const IconComponent = subjectIcons[subject.name] || BookOpen;
                    const colors = categoryColors[subject.category];
                    return (
                      <div 
                        key={subject.id} 
                        className={`glass-card-blue p-5 rounded-md transition-transform duration-200 hover:-translate-y-1 ${colors.border} border`}
                        data-testid={`card-subject-${subject.id}`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-md flex items-center justify-center flex-shrink-0 ${colors.bg}`}>
                            <IconComponent className={`h-6 w-6 ${colors.text}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-heading font-semibold text-white mb-1 truncate">
                              {subject.name}
                            </h4>
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-white/10 text-white/80 border-white/20">
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

      {/* 4. Services Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-blue-400 font-medium mb-2 text-sm uppercase tracking-wide font-heading">Our Services</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Monday – Friday | 15:00 – 17:30</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Service 1 */}
              <div className="glass-card-blue p-8 rounded-2xl hover:bg-blue-900/30 transition-colors text-center">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-6 mx-auto border border-blue-500/20">
                      <UserCheck className="text-blue-400" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Private Tutoring</h3>
                  <p className="text-blue-100/70 text-sm leading-relaxed">
                      One-on-one personalized attention to focus on individual needs.
                  </p>
              </div>

              {/* Service 2 */}
              <div className="glass-card-blue p-8 rounded-2xl hover:bg-blue-900/30 transition-colors text-center">
                   <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-6 mx-auto border border-blue-500/20">
                      <GraduationCap className="text-blue-400" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Tutoring Programs</h3>
                  <p className="text-blue-100/70 text-sm leading-relaxed">
                     Structured learning paths designed for all grade levels.
                  </p>
              </div>

              {/* Service 3 */}
              <div className="glass-card-blue p-8 rounded-2xl hover:bg-blue-900/30 transition-colors text-center">
                   <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-6 mx-auto border border-blue-500/20">
                      <FileText className="text-blue-400" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Test & Exam Prep</h3>
                  <p className="text-blue-100/70 text-sm leading-relaxed">
                      Focused preparation strategies to maximize exam results.
                  </p>
              </div>
          </div>
      </section>

      {/* 5. Pricing Section */}
      <section id="pricing" className="py-16 md:py-20 lg:py-24 relative w-screen left-[calc(-50vw+50%)]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-blue-400 font-medium mb-2 text-sm uppercase tracking-wide">Pricing</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4 text-shadow-strong">
              Simple, Transparent Pricing
            </h2>
            <p className="text-white/70 text-base md:text-lg">
              Choose the plan that works best for you. All plans include personalized attention and quality tutoring.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.id}
                className={`relative rounded-md p-6 md:p-8 flex flex-col h-full transition-transform duration-200 hover:-translate-y-1 ${
                  plan.popular 
                    ? "glass-card-story border border-white/20" 
                    : "glass-card-blue border border-blue-500/30"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full border border-green-500 bg-green-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-md flex items-center justify-center mb-4 ${
                    plan.popular ? "bg-white/20" : "bg-blue-600/30"
                  }`}>
                    <plan.icon className={`h-6 w-6 ${plan.popular ? "text-white" : "text-blue-400"}`} />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading font-bold text-4xl text-white">
                      {plan.price}
                    </span>
                    <span className="text-white/60 text-sm">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href={LINKS.WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors block text-center ${
                    plan.popular 
                      ? "bg-white text-gray-900 hover:bg-white/90" 
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>

          {/* Custom Plan Callout */}
          <div className="mt-12 text-center glass-card-blue rounded-md p-6 md:p-8 border border-blue-500/30">
            <h3 className="font-heading font-semibold text-xl text-white mb-3">
              Need a Custom Plan?
            </h3>
            <p className="text-white/70 mb-4 max-w-2xl mx-auto">
              We offer customized tutoring packages for families with multiple students, schools, or special requirements. Contact us to discuss your needs.
            </p>
            <a 
              href={LINKS.WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-block border border-white/30 text-white hover:bg-white/10 py-2 px-6 rounded-lg transition-colors font-medium"
            >
              Contact for Custom Pricing
            </a>
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-20 lg:py-24 relative w-screen left-[calc(-50vw+50%)]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-blue-400 font-medium mb-2 text-sm uppercase tracking-wide">Success Stories</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4 text-shadow-strong">
              Student Stories
            </h2>
            <p className="text-white/70 text-base md:text-lg">
              Many students have benefitted from House of Learning and have proudly shared their success stories below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {homeTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="glass-card-story rounded-md p-6 md:p-8 relative"
                data-testid={`card-testimonial-${testimonial.id}`}
              >
                <div className="absolute top-6 right-6 opacity-20">
                  <Quote className="h-12 w-12 text-white" />
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-14 w-14 border-2 border-white/30 rounded-full overflow-hidden flex items-center justify-center bg-blue-600/50">
                     <span className="text-white font-semibold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                     </span>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-white text-lg">
                      {testimonial.name}
                    </h4>
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-white/90 leading-relaxed relative z-10">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Quote Section */}
      <section className="py-16 md:py-20 relative overflow-hidden w-screen left-[calc(-50vw+50%)]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/85" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full liquid-glass flex items-center justify-center border border-white/10">
              <Quote className="h-8 w-8 text-blue-400" />
            </div>
          </div>
          
          <blockquote className="mb-6">
            <p className="font-heading text-xl md:text-2xl lg:text-3xl text-white leading-relaxed italic text-shadow-lg">
              "The direction in which education starts a man will determine his future in life"
            </p>
          </blockquote>
          
          <cite className="text-white/70 font-medium text-lg not-italic">
            — Plato
          </cite>
        </div>
      </section>

      {/* 8. Contact Section */}
      <section id="contact" className="py-16 md:py-20 lg:py-24 liquid-glass w-screen left-[calc(-50vw+50%)] relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-blue-400 font-medium mb-2 text-sm uppercase tracking-wide">Contact Us</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4 text-shadow-strong">
              Get in Touch
            </h2>
            <p className="text-white/70 text-base md:text-lg">
              Ready to start your learning journey? Reach out to us and let's discuss how we can help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div>
              <div className="glass-card-blue p-6 md:p-8 h-full rounded-md border border-blue-500/30">
                <h3 className="font-heading font-semibold text-xl text-white mb-6">
                  Send us a message
                </h3>

                {contactSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-600/30 flex items-center justify-center mb-4">
                      <CheckCircle className="h-8 w-8 text-green-400" />
                    </div>
                    <h4 className="font-heading font-semibold text-xl text-white mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-white/60 mb-6">
                      Thank you for reaching out. We'll get back to you soon.
                    </p>
                    <button 
                      onClick={() => setContactSubmitted(false)}
                      className="text-white border border-white/30 hover:bg-white/10 px-4 py-2 rounded-lg transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <label className="text-white/80 text-sm font-medium">Name</label>
                      <input 
                        type="text"
                        placeholder="Your full name" 
                        className="flex h-10 w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-white/80 text-sm font-medium">Email</label>
                      <input 
                        type="email" 
                        placeholder="your@email.com" 
                        className="flex h-10 w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-white/80 text-sm font-medium">Subject</label>
                      <input 
                        type="text"
                        placeholder="What is this about?" 
                        className="flex h-10 w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-white/80 text-sm font-medium">Message</label>
                      <textarea 
                        placeholder="Tell us how we can help you..." 
                        className="flex min-h-[120px] w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all"
                        required
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white border border-blue-500 h-10 px-4 py-2 rounded-md flex items-center justify-center gap-2 font-medium transition-colors shadow-lg shadow-blue-900/20"
                    >
                      <Send className="h-4 w-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass-card-blue p-6 md:p-8 rounded-md border border-blue-500/30">
                <h3 className="font-heading font-semibold text-xl text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  
                  {/* Address */}
                  <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-md bg-blue-600/30 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm text-white/50 mb-0.5">Address</p>
                        <p className="text-white font-medium">Green Masjid Ext 2, Eldorado Park</p>
                      </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-md bg-blue-600/30 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-blue-400" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm text-white/50 mb-0.5">Email</p>
                        <a href={`mailto:${LINKS.EMAIL}`} className="text-white font-medium hover:text-blue-400 transition-colors break-all text-sm block">
                          {LINKS.EMAIL}
                        </a>
                      </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-md bg-blue-600/30 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm text-white/50 mb-0.5">Phone</p>
                        <a href={`tel:${LINKS.PHONE.replace(/\s/g, '')}`} className="text-white font-medium hover:text-blue-400 transition-colors">
                          {LINKS.PHONE}
                        </a>
                      </div>
                  </div>

                   {/* WhatsApp */}
                   <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-md bg-blue-600/30 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm text-white/50 mb-0.5">WhatsApp</p>
                        <a href={LINKS.WHATSAPP} target="_blank" rel="noreferrer" className="text-white font-medium hover:text-blue-400 transition-colors">
                          Chat on WhatsApp
                        </a>
                      </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-md bg-blue-600/30 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm text-white/50 mb-0.5">Hours</p>
                        <p className="text-white font-medium">Mon - Friday: 8:00 AM - 17:30 PM</p>
                      </div>
                  </div>

                </div>
              </div>

              <div className="glass-card-story p-6 md:p-8 rounded-md border border-white/10">
                <h3 className="font-heading font-semibold text-xl text-white mb-3">
                  Ready to get started?
                </h3>
                <p className="text-white/80 mb-4">
                  Join hundreds of students who have improved their grades with House of Learning.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a 
                    href={`tel:${LINKS.PHONE.replace(/\s/g, '')}`}
                    className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-4 py-2 rounded-md flex items-center gap-2 transition-colors text-sm font-medium"
                  >
                      <Phone className="h-4 w-4" />
                      Call Now
                  </a>
                  <a 
                     href={`mailto:${LINKS.EMAIL}`}
                     className="text-white border border-white/30 hover:bg-white/10 px-4 py-2 rounded-md flex items-center gap-2 transition-colors text-sm font-medium"
                  >
                      <Mail className="h-4 w-4" />
                      Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
