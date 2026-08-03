import React from 'react';
import { GraduationCap, UserCheck, FileText, Target, Users, BookOpen, ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Tutoring Program",
    subtitle: "Gain Academic Confidence",
    description: "Our curriculum and educational sessions completely revolve around the abilities and experiences of each student. We identify and target the gaps in learning to ensure complete academic confidence.",
    icon: "graduation",
    accent: "#6F8F6A",
  },
  {
    id: "02",
    title: "Private Tutoring",
    subtitle: "Overcome Learning Challenges",
    description: "We take a comprehensive and collaborative approach in creating a plan and program that is right for every student. Adjusting to different personalities and specific academic needs, we always find what works best.",
    icon: "user",
    accent: "#3E6C86",
  },
  {
    id: "03",
    title: "Test & Exam Preparation",
    subtitle: "Achieve Your Best Results",
    description: "We take a comprehensive and collaborative approach in creating a plan and program that is right for every student. Adjusting to different personalities and specific academic needs, we always find what works best.",
    icon: "file",
    accent: "#8B5D6B",
  },
];

const features = [
  { icon: Target, title: "Personalized Approach", description: "Tailored learning plans for each student" },
  { icon: Users, title: "Expert Tutors", description: "Experienced professionals in all subjects" },
  { icon: BookOpen, title: "Any Curriculum", description: "Support for all educational systems" },
];

const iconMap = {
  graduation: GraduationCap,
  user: UserCheck,
  file: FileText,
};

export const Services = () => {
  return (
    <div className="bg-[#20241F] py-12 md:py-20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .font-label { font-family: 'IBM Plex Mono', monospace; }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10 font-body">

        {/* Hero */}
        <div className="max-w-3xl mb-14 md:mb-20">
          <p className="font-label text-[#D9A441] text-xs uppercase tracking-[0.25em] mb-4">
            What We Offer
          </p>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl text-[#F7F2E7] leading-[1.1]">
            What We Offer <span className="text-[#D9A441]">Services</span>
          </h2>
          <p className="text-[#B9C2B8] text-base md:text-lg mt-4 md:mt-6 max-w-2xl">
            Comprehensive tutoring services designed to help every student reach their full potential.
          </p>
        </div>

        {/* Services — flowing list, no cards */}
        <div className="border-t border-[#3A423A]">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || GraduationCap;
            return (
              <div
                key={service.id}
                className="group grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 py-10 md:py-14 border-b border-[#3A423A] items-start"
                data-testid={`card-service-${service.id}`}
              >
                <div className="md:col-span-2 flex md:flex-col items-center md:items-start gap-4">
                  <span className="font-label text-sm text-[#6E796E]">{service.id}</span>
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: service.accent }}
                  >
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div className="md:col-span-7">
                  <h3 className="font-display font-semibold text-2xl md:text-3xl text-[#F7F2E7] mb-1">
                    {service.title}
                  </h3>
                  <p className="font-label text-[10px] uppercase tracking-widest mb-3" style={{ color: service.accent }}>
                    {service.subtitle}
                  </p>
                  <p className="text-[#B9C2B8] text-[15px] leading-7 max-w-none md:max-w-lg">
                    {service.description}
                  </p>
                </div>

                <div className="md:col-span-3 flex md:justify-end items-center">
                  <a
                    href="mailto:houseoflearning153@gmail.com"
                    className="inline-flex items-center gap-1.5 text-sm text-[#F7F2E7] border-b border-transparent group-hover:border-[#D9A441] transition-colors pb-0.5"
                  >
                    Ask about this
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why choose us — inline row, no panel/cards */}
        <div className="mt-20 md:mt-24">
          <h3 className="font-display font-semibold text-2xl md:text-3xl text-[#F7F2E7] mb-3">
            Why Choose House of Learning?
          </h3>
          <p className="text-[#B9C2B8] max-w-xl mb-10">
            We're committed to providing the best educational support for every student.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4 md:block md:border-l md:border-[#3A423A] md:pl-6">
                <feature.icon className="h-5 w-5 text-[#D9A441] shrink-0 mt-1 md:mb-4" />
                <div>
                  <h4 className="font-display font-semibold text-[#F7F2E7] mb-1 text-lg">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-[#B9C2B8] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA — plain band, not a card */}
        <div className="mt-14 md:mt-20 pt-10 md:pt-12 border-t border-[#3A423A] flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <h3 className="font-display font-semibold text-3xl md:text-4xl text-[#F7F2E7] mb-2">
              Let's Build Your Academic Success
            </h3>
            <p className="text-[#B9C2B8]">
              Contact us today to schedule your first session.
            </p>
          </div>
          <div className="flex items-center gap-6 shrink-0">
            <a
              href="mailto:houseoflearning153@gmail.com"
              className="text-[#F7F2E7] border-b border-[#6E796E] hover:border-[#D9A441] pb-0.5 transition-colors"
              data-testid="link-services-email"
            >
              Email Us
            </a>
            <a
              href="tel:+27712716011"
              className="bg-[#D9A441] hover:bg-[#c7943a] text-[#23302A] px-6 py-3 rounded-full font-semibold transition-colors"
              data-testid="link-services-phone"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

