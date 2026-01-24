import React from 'react';
import { GraduationCap, UserCheck, FileText, Target, Users, BookOpen, ArrowRight } from "lucide-react";

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
  { icon: Target, title: "Personalized Approach", description: "Tailored learning plans for each student" },
  { icon: Users, title: "Expert Tutors", description: "Experienced professionals in all subjects" },
  { icon: BookOpen, title: "Any Curriculum", description: "Support for all educational systems" },
];

const iconMap: Record<string, React.ElementType> = {
  graduation: GraduationCap,
  user: UserCheck,
  file: FileText,
};

const categoryColors = {
  math: 'bg-blue-600',
  science: 'bg-emerald-600',
  languages: 'bg-indigo-600',
};

const categoryTextColors = {
  math: 'text-blue-600',
  science: 'text-emerald-600',
  languages: 'text-indigo-600',
};

export const Services: React.FC = () => {
  return (
    <div className="animate-fade-in max-w-7xl mx-auto space-y-16 pb-12">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-lime-400 font-bold text-sm uppercase tracking-widest mb-3">What We Offer</p>
        <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6">
          <span className="text-lime-400">What We Offer</span> <span className="text-[#2A6EBB]">Services</span>
        </h2>
        <p className="text-slate-400 text-lg">
          Comprehensive tutoring services designed to help every student reach their full potential.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => {
          const IconComponent = iconMap[service.icon] || GraduationCap;
          return (
            <div 
              key={service.id} 
              className="bg-white shadow-md rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg"
              data-testid={`card-service-${service.id}`}
            >
              {/* Header Image */}
              <div className={`${categoryColors[service.category]} h-48 flex items-center justify-center`}>
                <IconComponent className="h-16 w-16 text-white" />
              </div>

              {/* Content Body */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-heading font-bold text-xl text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-500 font-medium text-sm mb-4 uppercase tracking-wide">
                  {service.subtitle}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-[#2A6EBB] text-white shadow-lg rounded-3xl border border-transparent p-10 md:p-12 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">
            <div className="text-center mb-12">
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-3">
                Why Choose House of Learning?
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto">
                We're committed to providing the best educational support for every student.
            </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition-colors">
                <div className="w-14 h-14 rounded-full bg-white text-[#2A6EBB] flex items-center justify-center mx-auto mb-5 shadow-lg">
                    <feature.icon className="h-6 w-6" />
                </div>
                <h4 className="font-heading font-bold text-white mb-2 text-lg">{feature.title}</h4>
                <p className="text-sm text-white/80">{feature.description}</p>
                </div>
            ))}
            </div>
        </div>
      </div>

      <div className="text-center bg-[#2A6EBB] text-white shadow-lg rounded-3xl border border-transparent p-8 md:p-10">
        <h3 className="text-white text-xl md:text-2xl font-bold mb-4">Ready to start?</h3>
        <p className="text-white/90 text-base mb-6">
          Contact us today to schedule your first session.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
                href="mailto:houseoflearning153@gmail.com"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-xl font-medium transition-colors flex items-center gap-2"
                data-testid="link-services-email"
            >
                Email Us
            </a>
            <a
                href="tel:+27712716011"
                className="bg-lime-600 hover:bg-lime-500 text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center gap-2 shadow-lg shadow-lime-600/20"
                data-testid="link-services-phone"
            >
                Call Now
            </a>
        </div>
      </div>
    </div>
  );
};
