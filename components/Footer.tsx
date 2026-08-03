import React from "react";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { LINKS } from "../constants";
import { ViewState } from "../types";

const COLORS = {
  ink: "#20241F",
  secondary: "#23302A",
  border: "#3A423A",
  paper: "#F7F2E7",
  muted: "#B9C2B8",
  honey: "#D9A441",
};

interface FooterProps {
  setActiveView: (view: ViewState) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveView }) => {
  const handleClick = (view: ViewState) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer style={{ backgroundColor: COLORS.ink, color: COLORS.paper }} className="pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6">

        {/* Brand */}
        <h2 className="text-2xl font-bold tracking-tight font-display" style={{ color: COLORS.paper }}>
          House of Learning
        </h2>

        <div className="w-12 h-[3px] rounded-full mt-4 mb-4" style={{ backgroundColor: COLORS.honey }}></div>

        <p className="max-w-md text-sm leading-relaxed" style={{ color: COLORS.muted }}>
          Personalized education with individual attention, empowering
          students anywhere, anytime.
        </p>

        {/* Footer Links */}
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3">

          {/* Academics */}
          <div>
            <h3
              className="mb-4 text-xs font-bold uppercase tracking-[0.2em] font-label"
              style={{ color: COLORS.honey }}
            >
              Academics
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => handleClick("services")}
                  className="transition-colors"
                  style={{ color: COLORS.muted }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.honey)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.muted)}
                >
                  All Subjects
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleClick("services")}
                  className="transition-colors"
                  style={{ color: COLORS.muted }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.honey)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.muted)}
                >
                  Online Programs
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleClick("services")}
                  className="transition-colors"
                  style={{ color: COLORS.muted }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.honey)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.muted)}
                >
                  Tuition
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3
              className="mb-4 text-xs font-bold uppercase tracking-[0.2em] font-label"
              style={{ color: COLORS.honey }}
            >
              Company
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => handleClick("about")}
                  className="transition-colors"
                  style={{ color: COLORS.muted }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.honey)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.muted)}
                >
                  About Us
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleClick("tutors")}
                  className="transition-colors"
                  style={{ color: COLORS.muted }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.honey)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.muted)}
                >
                  Our Tutors
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleClick("stories")}
                  className="transition-colors"
                  style={{ color: COLORS.muted }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.honey)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.muted)}
                >
                  Success Stories
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h3
              className="mb-4 text-xs font-bold uppercase tracking-[0.2em] font-label"
              style={{ color: COLORS.honey }}
            >
              Contact
            </h3>

            <div className="flex gap-3">

              <a
                href={LINKS.WHATSAPP}
                target="_blank"
                rel="noreferrer"
                aria-label="Chat on WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-0.5"
                style={{ backgroundColor: COLORS.secondary, borderColor: COLORS.border, color: COLORS.muted }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = COLORS.honey;
                  e.currentTarget.style.color = COLORS.honey;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = COLORS.border;
                  e.currentTarget.style.color = COLORS.muted;
                }}
              >
                <MessageCircle size={18} />
              </a>

              <a
                href={`mailto:${LINKS.EMAIL}`}
                aria-label="Email us"
                className="flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-0.5"
                style={{ backgroundColor: COLORS.secondary, borderColor: COLORS.border, color: COLORS.muted }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = COLORS.honey;
                  e.currentTarget.style.color = COLORS.honey;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = COLORS.border;
                  e.currentTarget.style.color = COLORS.muted;
                }}
              >
                <Mail size={18} />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3" style={{ borderTop: `1px solid ${COLORS.border}` }}>

          <p className="text-xs" style={{ color: COLORS.muted }}>
            © 2026 House of Learning. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs" style={{ color: COLORS.muted }}>
            <MapPin size={14} style={{ color: COLORS.honey }} />
            Eldorado Park Ext 2, Tennis Courts by the Women's Forum
          </p>

        </div>

      </div>
    </footer>
  );
};

