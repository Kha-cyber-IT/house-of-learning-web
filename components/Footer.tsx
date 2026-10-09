import React, { useState } from "react";
import { ChevronDown, Mail, MapPin, MessageCircle, Phone, ArrowUp } from "lucide-react";
import { LINKS } from "../constants";
import { ViewState } from "../types";

// Same palette as Home.tsx
const C = {
  mainGreen: "#4CA771",
  cardYellow: "#F9CE69",
  lightBlue: "#D9EFF7",
  lightMint: "#C0E6BA",
  navy: "#123B63",
  ink: "#14213D",
};

const BRAND_NAME = "HL Tutoring";
const LEGAL_LINE = "HL TUTORING NPC (Reg: 2026/791574/08)";
const ADDRESS = "Eldorado Park Ext 2, Tennis Courts by the Women's Forum";

interface FooterProps {
  setActiveView: (view: ViewState) => void;
}

type FooterLink = { label: string; onClick: () => void };

/** Link group. Accordion on mobile (keeps the footer short), always open on desktop. */
const FooterGroup: React.FC<{ title: string; links: FooterLink[] }> = ({ title, links }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/15 md:border-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-4 md:py-0 md:mb-4 md:cursor-default text-left"
      >
        <span
          className="text-xs font-bold uppercase tracking-[0.2em]"
          style={{ color: C.cardYellow }}
        >
          {title}
        </span>
        <ChevronDown
          size={18}
          className={`md:hidden text-white transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <ul className={`${open ? "block" : "hidden"} md:block space-y-1 pb-4 md:pb-0`}>
        {links.map((l) => (
          <li key={l.label}>
            <button
              type="button"
              onClick={l.onClick}
              className="py-1.5 text-sm text-left text-[#D9EFF7] transition-colors hover:text-[#F9CE69] active:text-[#F9CE69]"
            >
              {l.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ContactRow: React.FC<{
  icon: React.ReactNode;
  label: string;
  href?: string;
  external?: boolean;
}> = ({ icon, label, href, external }) => {
  const inner = (
    <>
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: C.cardYellow, color: C.navy }}
      >
        {icon}
      </span>
      <span className="text-sm leading-snug break-words">{label}</span>
    </>
  );

  const cls =
    "flex items-center gap-3 py-1.5 text-[#D9EFF7] transition-colors hover:text-[#F9CE69] active:text-[#F9CE69]";

  return href ? (
    <a
      href={href}
      className={cls}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
};

export const Footer: React.FC<FooterProps> = ({ setActiveView }) => {
  const go = (view: ViewState) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goPricing = () => {
    setActiveView("home");
    setTimeout(
      () => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" }),
      300
    );
  };

  const serviceLinks: FooterLink[] = [
    { label: "Private Tutoring", onClick: () => go("services") },
    { label: "Structured Programs", onClick: () => go("services") },
    { label: "Exam Prep", onClick: () => go("services") },
    { label: "Pricing", onClick: goPricing },
  ];

  const companyLinks: FooterLink[] = [
    { label: "About Us", onClick: () => go("about") },
    { label: "Our Tutors", onClick: () => go("tutors") },
    { label: "Success Stories", onClick: () => go("stories") },
    { label: "Contact", onClick: () => go("locations") },
  ];

  return (
    <footer className="w-full">
      {/* ============ CTA BAND ============ */}
      <div style={{ backgroundColor: C.cardYellow, color: C.ink }}>
        <div className="mx-auto flex w-full max-w-[1760px] flex-col gap-5 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-8 md:py-10 lg:px-12 xl:px-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight font-display">
              Ready to help your learner thrive?
            </h2>
            <p className="mt-1 text-sm md:text-base opacity-80">
              Book a session today. Grade R to 12, with expert tutors.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={LINKS.REGISTRATION}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl px-7 py-3.5 text-center text-sm font-bold text-white shadow-md transition hover:brightness-110 active:scale-[0.98]"
              style={{ backgroundColor: C.navy }}
            >
              Book a Session
            </a>
            <a
              href={LINKS.WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white px-7 py-3.5 text-center text-sm font-bold shadow-md transition hover:brightness-95 active:scale-[0.98]"
              style={{ color: C.ink }}
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ============ MAIN FOOTER ============ */}
      <div style={{ backgroundColor: C.navy }} className="text-white">
        <div className="mx-auto w-full max-w-[1760px] px-4 pt-10 pb-6 md:px-8 md:pt-14 lg:px-12 xl:px-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:gap-12">
            {/* Brand */}
            <div className="md:col-span-2 lg:col-span-1">
              <h2 className="text-2xl font-extrabold tracking-tight font-display">{BRAND_NAME}</h2>
              <p className="mt-1 text-sm font-semibold" style={{ color: C.lightMint }}>
                Non-Profit Organization
              </p>
              <div
                className="mt-4 mb-4 h-[3px] w-12 rounded-full"
                style={{ backgroundColor: C.cardYellow }}
              />
              <p className="max-w-sm text-sm leading-relaxed" style={{ color: C.lightBlue }}>
                A non-profit tutoring organisation matching each student with expert tutors, Grade R to 12.
              </p>
            </div>

            {/* Link groups (accordions on mobile) */}
            <div className="md:col-span-2 lg:col-span-2 grid gap-0 md:grid-cols-2 md:gap-8 lg:gap-12">
              <FooterGroup title="Services" links={serviceLinks} />
              <FooterGroup title="Company" links={companyLinks} />
            </div>

            {/* Contact */}
            <div className="md:col-span-2 lg:col-span-1">
              <h3
                className="mb-3 text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: C.cardYellow }}
              >
                Get in touch
              </h3>

              <div className="space-y-1">
                <ContactRow
                  icon={<Phone size={16} />}
                  label={LINKS.PHONE}
                  href={`tel:${LINKS.PHONE.replace(/\s/g, "")}`}
                />
                <ContactRow
                  icon={<MessageCircle size={16} />}
                  label="WhatsApp us"
                  href={LINKS.WHATSAPP}
                  external
                />
                <ContactRow
                  icon={<Mail size={16} />}
                  label={LINKS.EMAIL}
                  href={`mailto:${LINKS.EMAIL}`}
                />
                <ContactRow
                  icon={<MapPin size={16} />}
                  label={ADDRESS}
                  href={LINKS.MAPS}
                  external
                />
              </div>
            </div>
          </div>

          {/* ============ LEGAL STRIP ============ */}
          <div className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1 text-xs leading-relaxed" style={{ color: C.lightBlue }}>
              <p className="font-semibold text-white">{LEGAL_LINE}</p>
              <p>
                Registered non-profit company. © {new Date().getFullYear()} {BRAND_NAME}. All rights
                reserved.
              </p>
            </div>

            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-2 self-start rounded-full px-4 py-2 text-xs font-bold transition hover:brightness-105 active:scale-[0.98] md:self-auto"
              style={{ backgroundColor: C.cardYellow, color: C.ink }}
            >
              Back to top
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
