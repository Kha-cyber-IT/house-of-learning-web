import React from 'react';
import { GraduationCap, UserCheck, FileText, Target, Users, BookOpen } from "lucide-react";

interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    id: "1",
    title: "Tutoring Program",
    subtitle: "Gain Academic Confidence",
    description: "Our curriculum and educational sessions completely revolve around the abilities and experiences of each student. We identify and target the gaps in learning to ensure complete academic confidence.",
    icon: "graduation",
  },
  {
    id: "2",
    title: "Private Tutoring",
    subtitle: "Overcome Learning Challenges",
    description: "We take a comprehensive and collaborative approach in creating a plan and program that is right for every student. Adjusting to different personalities and specific academic needs, we always find what works best.",
    icon: "user",
  },
  {
    id: "3",
    title: "Test & Exam Preparation",
    subtitle: "Achieve Your Best Results",
    description: "We take a comprehensive and collaborative approach in creating a plan and program that is right for every student. Adjusting to different personalities and specific academic needs, we always find what works best.",
    icon: "file",
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

export const Services: React.FC = () => {
  return (
    <div className="animate-fade-in max-w-7xl mx-auto space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-blue-400 font-medium mb-2 text-sm uppercase tracking-wide">What We Offer</p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4 text-shadow-strong">
          Our Services
        </h2>
        <p className="text-muted-foreground text-base md:text-lg">
          Comprehensive tutoring services designed to help every student reach their full potential.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => {
          const IconComponent = iconMap[service.icon] || GraduationCap;
          return (
            <div 
              key={service.id} 
              className="glass-card-blue p-6 rounded-md h-full flex flex-col transition-transform duration-200 hover:-translate-y-1"
              data-testid={`card-service-${service.id}`}
            >
              <div className="w-14 h-14 rounded-md bg-blue-600/30 flex items-center justify-center mb-5">
                <IconComponent className="h-7 w-7 text-blue-400" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white mb-2">
                {service.title}
              </h3>
              <p className="text-blue-400 font-medium text-sm mb-3">
                {service.subtitle}
              </p>
              <p className="text-white/60 text-sm leading-relaxed flex-1">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="glass-card-blue rounded-md p-8 md:p-10 border border-blue-500/30">
        <div className="text-center mb-8">
          <h3 className="font-heading font-semibold text-2xl text-white mb-2">
            Why Choose House of Learning?
          </h3>
          <p className="text-white/60">
            We're committed to providing the best educational support for every student.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 rounded-full bg-blue-600/30 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-6 w-6 text-blue-400" />
              </div>
              <h4 className="font-heading font-semibold text-white mb-1">{feature.title}</h4>
              <p className="text-sm text-white/60">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center glass-card-story rounded-md p-6 md:p-8">
        <p className="text-white text-base md:text-lg">
          Learn more about our services. Contact us today at{" "}
          <a 
            href="mailto:houseoflearning153@gmail.com" 
            className="text-blue-300 font-medium hover:underline"
            data-testid="link-services-email"
          >
            houseoflearning153@gmail.com
          </a>{" "}
          or call{" "}
          <a 
            href="tel:+27712716011" 
            className="text-blue-300 font-medium hover:underline"
            data-testid="link-services-phone"
          >
            +27 71 271 6011
          </a>
        </p>
      </div>
    </div>
  );
};