import React from "react";
import { GraduationCap, UserCheck, FileText, Target, Users, BookOpen, ArrowUpRight, Mail, Phone } from "lucide-react";
import { LINKS } from "../constants";

// Same palette as Home.tsx
const C = {
  mainGreen: "#4CA771",
  cardYellow: "#F9CE69",
  lightBlue: "#D9EFF7",
  lightMint: "#C0E6BA",
  navy: "#123B63",
  blue: "#2A6592",
  ink: "#14213D",
  goldTouch: "#F2B84B",
};

const BRAND_NAME = "HL Tutoring";

// A card colour set: background, text, accent, plus what it turns into on touch / hover (gold).
const mk = (bg: string, fg: string, accent: string, hover = C.cardYellow) => ({
  bg,
  fg,
  accent,
  hover,
  hoverFg: C.ink,
  hoverAccent: C.navy,
});

type CardColor = ReturnType<typeof mk>;

const cardVars = (c: CardColor) =>
  ({
    "--card-bg": c.bg,
    "--card-hover": c.hover,
    "--card-fg": c.fg,
    "--card-fg-hover": c.hoverFg,
    "--card-accent": c.accent,
    "--card-accent-hover": c.hoverAccent,
  }) as React.CSSProperties;

const services: {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  color: CardColor;
}[] = [
  {
    id: "01",
    title: "Tutoring Program",
    subtitle: "Gain Academic Confidence",
    description:
      "Our curriculum and educational sessions completely revolve around the abilities and experiences of each student. We identify and target the gaps in learning to ensure complete academic confidence.",
    icon: GraduationCap,
    color: mk(C.cardYellow, C.ink, C.navy, C.goldTouch),
  },
  {
    id: "02",
    title: "Private Tutoring",
    subtitle: "Overcome Learning Challenges",
    description:
      "We take a comprehensive and collaborative approach in creating a plan and program that is right for every student. Adjusting to different personalities and specific academic needs, we always find what works best.",
    icon: UserCheck,
    color: mk(C.navy, "#FFFFFF", C.cardYellow),
  },
  {
    id: "03",
    title: "Test & Exam Preparation",
    subtitle: "Achieve Your Best Results",
    description:
      "Past papers, mock exams and exam strategies that help every learner walk into tests prepared and confident, and get the best results they can.",
    icon: FileText,
    color: mk(C.lightMint, C.ink, C.navy),
  },
];

const features: { icon: React.ElementType; title: string; description: string; color: CardColor }[] = [
  {
    icon: Target,
    title: "Personalized Approach",
    description: "Tailored learning plans for each student",
    color: mk(C.lightBlue, C.ink, C.blue),
  },
  {
    icon: Users,
    title: "Expert Tutors",
    description: "Experienced professionals in all subjects",
    color: mk("#FFFFFF", C.ink, C.mainGreen),
  },
  {
    icon: BookOpen,
    title: "Any Curriculum",
    description: "Support for all educational systems",
    color: mk(C.cardYellow, C.ink, C.navy, C.goldTouch),
  },
];

const CSS = `
  .hl-card {
    background: var(--card-bg);
    color: var(--card-fg);
    transition: background-color .2s ease, color .2s ease, transform .2s ease;
  }
  .hl-card .hl-accent { color: var(--card-accent); transition: color .2s ease; }
  .hl-card .hl-chip { background: var(--card-accent); transition: background-color .2s ease; }
  .hl-card .hl-chip svg { color: var(--card-bg); transition: color .2s ease; }
  .hl-card:hover, .hl-card:active {
    background: var(--card-hover);
    color: var(--card-fg-hover);
  }
  .hl-card:hover .hl-accent, .hl-card:active .hl-accent { color: var(--card-accent-hover); }
  .hl-card:hover .hl-chip, .hl-card:active .hl-chip { background: var(--card-accent-hover); }
  .hl-card:hover .hl-chip svg, .hl-card:active .hl-chip svg { color: var(--card-hover); }
  @media (hover: hover) { .hl-card:hover { transform: translateY(-4px); } }
`;

export const Services = () => {
  return (
    <section
      className="animate-fade-in w-full px-4 md:px-8 lg:px-12 xl:px-16 py-10 md:py-20"
      style={{ backgroundColor: C.mainGreen }}
    >
      <style>{CSS}</style>

      <div className="max-w-[1760px] mx-auto">
        {/* Hero */}
        <div className="max-w-3xl mb-8 md:mb-14">
          <p
            className="text-xs font-bold uppercase tracking-[0.25em] mb-3 md:mb-4"
            style={{ color: C.cardYellow }}
          >
            Our Services
          </p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-6xl text-white leading-[1.1]">
            What We <span style={{ color: C.cardYellow }}>Offer</span>
          </h2>
          <p className="text-base md:text-lg mt-3 md:mt-6 max-w-2xl" style={{ color: C.lightBlue }}>
            Comprehensive tutoring services designed to help every student reach their full potential.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 gap-3 md:gap-6 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.id}
                className="hl-card flex flex-col rounded-2xl p-5 md:p-8 shadow-md"
                style={cardVars(service.color)}
                data-testid={`card-service-${service.id}`}
              >
                <div className="flex items-center gap-4">
                  <span className="hl-chip flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-2xl">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div className="min-w-0">
                    <p className="hl-accent text-xs font-bold tracking-widest">{service.id}</p>
                    <h3 className="font-display font-semibold text-xl md:text-2xl leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p className="hl-accent mt-4 text-[11px] md:text-xs font-bold uppercase tracking-widest">
                  {service.subtitle}
                </p>
                <p className="mt-2 text-sm md:text-[15px] leading-7 opacity-90 flex-grow">
                  {service.description}
                </p>

                <a
                  href={`mailto:${LINKS.EMAIL}`}
                  className="hl-accent mt-5 inline-flex items-center gap-1.5 self-start text-sm font-bold underline underline-offset-4"
                >
                  Ask about this
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            );
          })}
        </div>

        {/* Why choose us */}
        <div className="mt-10 md:mt-20">
          <h3 className="font-display font-semibold text-2xl md:text-3xl text-white mb-2 md:mb-3">
            Why Choose <span style={{ color: C.cardYellow }}>{BRAND_NAME}?</span>
          </h3>
          <p className="max-w-xl mb-5 md:mb-8 text-sm md:text-base" style={{ color: C.lightBlue }}>
            We're committed to providing the best educational support for every student.
          </p>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="hl-card flex items-center gap-4 rounded-2xl p-4 md:p-6 shadow-md"
                  style={cardVars(feature.color)}
                >
                  <span className="hl-chip flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="font-display font-semibold text-base md:text-lg leading-tight">
                      {feature.title}
                    </h4>
                    <p className="mt-0.5 text-sm opacity-85">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div
          className="mt-10 md:mt-16 flex flex-col gap-6 rounded-2xl p-6 md:flex-row md:items-center md:justify-between md:p-10 shadow-lg"
          style={{ backgroundColor: C.navy }}
        >
          <div>
            <h3 className="font-display font-semibold text-2xl md:text-4xl text-white mb-2">
              Let's Build Your <span style={{ color: C.cardYellow }}>Academic Success</span>
            </h3>
            <p className="text-sm md:text-base" style={{ color: C.lightBlue }}>
              Contact us today to schedule your first session.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row shrink-0">
            <a
              href={`mailto:${LINKS.EMAIL}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 px-6 py-3.5 font-bold text-white transition hover:bg-white/10 active:scale-[0.98]"
              data-testid="link-services-email"
            >
              <Mail size={18} />
              Email Us
            </a>
            <a
              href={`tel:${LINKS.PHONE.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-bold shadow-md transition hover:brightness-105 active:scale-[0.98]"
              style={{ backgroundColor: C.cardYellow, color: C.ink }}
              data-testid="link-services-phone"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
