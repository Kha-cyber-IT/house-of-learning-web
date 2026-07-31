import React, { useState } from 'react';
import { 
  GraduationCap, 
  UserCheck, 
  FileText, 
  Target, 
  Users, 
  BookOpen, 
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  Phone,
  Mail,
  MessageCircle,
  Star,
  Quote,
  TrendingUp,
  BrainCircuit
} from "lucide-react";

// --- EXISTING DATA & TYPES ---

interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  category: 'math' | 'science' | 'languages';
}

const services: Service[] = [
  {
    id: "1",
    title: "Tutoring Program",
    subtitle: "Gain Academic Confidence",
    description: "Our curriculum and educational sessions completely revolve around the abilities and experiences of each student. We identify and target the gaps in learning to ensure complete academic confidence.",
    icon: "graduation",
    category: "math",
  },
  {
    id: "2",
    title: "Private Tutoring",
    subtitle: "Overcome Learning Challenges",
    description: "We take a comprehensive and collaborative approach in creating a plan and program that is right for every student. Adjusting to different personalities and specific academic needs, we always find what works best.",
    icon: "user",
    category: "science",
  },
  {
    id: "3",
    title: "Test & Exam Preparation",
    subtitle: "Achieve Your Best Results",
    description: "We take a comprehensive and collaborative approach in creating a plan and program that is right for every student. Adjusting to different personalities and specific academic needs, we always find what works best.",
    icon: "file",
    category: "languages",
  },
];

const features = [
  { icon: Target, title: "Personalized Approach", description: "Tailored learning plans designed specifically for each student's unique needs and pace." },
  { icon: Users, title: "Expert Tutors", description: "Vetted, experienced professionals who are passionate about their subjects and teaching." },
  { icon: BookOpen, title: "Any Curriculum", description: "Comprehensive support for all major educational systems, boards, and grade levels." },
];

const iconMap: Record<string, React.ElementType> = {
  graduation: GraduationCap,
  user: UserCheck,
  file: FileText,
};

// Adapted for modern premium aesthetic (subtle backgrounds, vivid text)
const categoryStyles = {
  math: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'group-hover:border-blue-200' },
  science: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'group-hover:border-emerald-200' },
  languages: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'group-hover:border-indigo-200' },
};

// --- NEW DATA FOR REDESIGN REQUIREMENTS ---

const learningProcess = [
  { step: "01", title: "Initial Assessment", description: "We evaluate current academic standing and identify specific learning gaps.", icon: Target },
  { step: "02", title: "Perfect Match", description: "Students are paired with an expert tutor suited to their learning style.", icon: Users },
  { step: "03", title: "Custom Plan", description: "A tailored curriculum is developed to target weaknesses and build confidence.", icon: FileText },
  { step: "04", title: "Achieve Results", description: "Continuous monitoring, feedback, and adjustments lead to academic excellence.", icon: TrendingUp },
];

const faqs = [
  { question: "How do you match a student with a tutor?", answer: "We consider the student's academic needs, learning style, and personality. We then carefully select a tutor from our vetted team who best aligns with these criteria to ensure a productive and comfortable learning environment." },
  { question: "Are your tutoring sessions online or in-person?", answer: "We offer both! You can choose in-person sessions at our center or opt for our interactive, high-quality online sessions depending on what suits your schedule best." },
  { question: "How quickly can we see results?", answer: "While every student is different, most parents and students report a noticeable increase in confidence within the first few weeks, and measurable grade improvements typically follow within the first academic term." },
  { question: "Do you provide materials and resources?", answer: "Yes. Our tutors provide comprehensive study materials, past papers, and custom worksheets tailored to the specific curriculum and the student's current focus areas." },
];

const testimonials = [
  { name: "Michael T.", role: "Parent of Grade 10 Student", text: "The private tutoring completely transformed my daughter's approach to Math. She went from dreading the subject to achieving a distinction.", rating: 5 },
  { name: "Sarah K.", role: "Grade 12 Student", text: "The exam prep sessions were exactly what I needed. The strategies and past paper practice gave me so much confidence going into finals.", rating: 5 },
];

export const Services: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="w-full bg-slate-50 font-sans pb-24 flex flex-col gap-24 md:gap-32">
      
      {/* PREMIUM HERO SECTION */}
      <section className="relative mx-4 mt-4 lg:mx-8 lg:mt-8 rounded-[3rem] overflow-hidden bg-slate-900 px-6 py-24 md:py-32 lg:py-40">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-600/40 blur-[120px]" />
          <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[60%] rounded-full bg-indigo-600/30 blur-[120px]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-white/90 text-sm font-semibold tracking-wide uppercase">Premium Education</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-8">
            Tailored Learning for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              Exceptional Results
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-300 font-medium max-w-2xl mb-12 leading-relaxed">
            Comprehensive tutoring services designed to identify gaps, build confidence, and help every student reach their absolute full potential.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a 
              href="#services"
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold text-lg hover:bg-slate-100 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2"
            >
              Explore Services <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="max-w-7xl mx-auto px-6 w-full -mt-16 md:-mt-24 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-slate-100">
            {[
              { label: "Active Students", value: "500+" },
              { label: "Success Rate", value: "98%" },
              { label: "Expert Tutors", value: "50+" },
              { label: "Subjects Covered", value: "20+" },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <span className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">{stat.value}</span>
                <span className="text-slate-500 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section id="services" className="max-w-7xl mx-auto px-6 w-full scroll-mt-32">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Our Core Services</h2>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            Flexible, high-impact tutoring programs designed to adapt to different personalities and specific academic requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || GraduationCap;
            const style = categoryStyles[service.category];
            
            return (
              <div 
                key={service.id} 
                data-testid={`card-service-${service.id}`}
                className={`bg-white rounded-[2rem] p-10 shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group ${style.border}`}
              >
                <div className={`w-20 h-20 rounded-2xl ${style.bg} ${style.text} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <IconComponent className="h-10 w-10" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className={`text-sm font-bold uppercase tracking-wider mb-6 ${style.text}`}>
                  {service.subtitle}
                </p>
                
                <p className="text-slate-500 font-medium leading-relaxed flex-1 mb-8">
                  {service.description}
                </p>
                
                <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 bg-slate-50 text-slate-700 group-hover:bg-slate-900 group-hover:text-white flex items-center justify-center gap-2`}>
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* LEARNING PROCESS */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Our Proven Methodology</h2>
            <p className="text-lg text-slate-400 font-medium">
              We take the guesswork out of education with a structured, transparent approach to student success.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningProcess.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Connector Line (Desktop) */}
                {idx < learningProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-[2px] bg-white/10 group-hover:bg-blue-500/50 transition-colors duration-500" />
                )}
                
                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col relative z-10 hover:bg-white/20 transition-all duration-300 h-full hover:-translate-y-2">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center text-white shadow-lg">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-4xl font-black text-white/10">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-300 font-medium text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US / BENEFITS */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-6">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700 text-sm font-bold tracking-wide uppercase">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1]">
              Committed to <br />
              <span className="text-blue-600">Student Excellence</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium mb-10 leading-relaxed">
              We go beyond traditional teaching methods. Our holistic approach ensures that students not only improve their grades but also develop critical thinking skills and a genuine love for learning.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-5 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{feature.title}</h4>
                    <p className="text-slate-500 font-medium text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-[3rem] transform rotate-3 scale-105 opacity-20 blur-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Students learning together" 
                className="relative rounded-[3rem] shadow-2xl object-cover h-[600px] w-full"
              />
              
              {/* Floating Element */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-4 animate-bounce hover:animate-none">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-900 font-bold">Smart Learning</p>
                  <p className="text-slate-500 text-sm font-medium">Data-driven approach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Real Results. Real Stories.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group">
                <Quote className="absolute top-8 right-8 w-10 h-10 text-slate-100 group-hover:text-blue-50 transition-colors" />
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 font-medium leading-relaxed mb-8 text-lg relative z-10">"{t.text}"</p>
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-slate-500 font-medium">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-6 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Got Questions?</h2>
          <p className="text-lg text-slate-500 font-medium">Everything you need to know about our services and methodology.</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === idx ? 'border-blue-500 shadow-md' : 'border-slate-200 hover:border-slate-300 shadow-sm'}`}
            >
              <button 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-bold text-lg ${openFaq === idx ? 'text-blue-600' : 'text-slate-900'}`}>
                  {faq.question}
                </span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-500 font-medium leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-blue-100 font-medium mb-12">
              Contact us today to schedule your initial consultation and discover how we can help achieve your academic goals.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="mailto:houseoflearning153@gmail.com"
                data-testid="link-services-email"
                className="px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold text-lg hover:bg-slate-50 hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center gap-3"
              >
                <Mail className="w-5 h-5" /> Email Us
              </a>
              <a 
                href="tel:+27712716011"
                data-testid="link-services-phone"
                className="px-10 py-5 bg-blue-800 text-white border border-blue-500/30 rounded-2xl font-bold text-lg hover:bg-blue-900 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

