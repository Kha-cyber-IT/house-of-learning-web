import React from "react";
import { Mail, MessageCircle } from "lucide-react";
import { LINKS } from "../constants";
import { ViewState } from "../types";

interface FooterProps {
  setActiveView: (view: ViewState) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveView }) => {
  const handleClick = (view: ViewState) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white pt-10 pb-5">
      <div className="max-w-7xl mx-auto px-6">

        {/* Brand */}
        <h2 className="text-2xl font-black tracking-tight">
          HOUSE OF LEARNING
        </h2>

        <p className="mt-2 max-w-md text-sm text-gray-400">
          Personalized education with individual attention, empowering
          students anywhere, anytime.
        </p>

        {/* Footer Links */}
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-3">

          {/* Academics */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]">
              Academics
            </h3>

            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button
                  onClick={() => handleClick("services")}
                  className="hover:text-white transition-colors"
                >
                  All Subjects
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleClick("services")}
                  className="hover:text-white transition-colors"
                >
                  Online Programs
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleClick("services")}
                  className="hover:text-white transition-colors"
                >
                  Tuition
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]">
              Company
            </h3>

            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button
                  onClick={() => handleClick("about")}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleClick("tutors")}
                  className="hover:text-white transition-colors"
                >
                  Our Tutors
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleClick("stories")}
                  className="hover:text-white transition-colors"
                >
                  Success Stories
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]">
              Contact
            </h3>

            <div className="flex gap-3">

              <a
                href={LINKS.WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 transition hover:bg-zinc-800"
              >
                <MessageCircle size={18} />
              </a>

              <a
                href={`mailto:${LINKS.EMAIL}`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 transition hover:bg-zinc-800"
              >
                <Mail size={18} />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-zinc-800 pt-4">

          <p className="text-xs text-gray-500">
            © 2026 House of Learning. All rights reserved.
          </p>

          <p className="mt-2 text-xs text-gray-500">
            📍 Eldorado Park Ext 2, Tennis Courts by the Women's Forum
          </p>

        </div>

      </div>
    </footer>
  );
};
