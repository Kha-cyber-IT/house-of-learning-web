import React, { useState, useEffect } from "react";
import { LINKS } from "../constants";

// Real WhatsApp glyph (matches the official brand mark), not a generic chat bubble
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 32 32" fill="currentColor" className={className}>
    <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.386.699 4.61 1.902 6.478L4 29l7.72-1.865A11.94 11.94 0 0 0 16.001 27C22.628 27 28 21.627 28 15S22.628 3 16.001 3zm0 21.818a9.77 9.77 0 0 1-4.982-1.367l-.357-.212-4.582 1.107 1.128-4.463-.233-.372A9.78 9.78 0 0 1 5.727 15c0-5.673 4.6-10.273 10.274-10.273 5.673 0 10.272 4.6 10.272 10.273 0 5.673-4.6 10.273-10.272 10.818zm5.634-7.693c-.31-.155-1.828-.902-2.111-1.005-.283-.103-.489-.155-.695.155-.206.31-.798 1.005-.978 1.211-.18.206-.36.232-.669.077-.31-.155-1.307-.482-2.489-1.535-.92-.82-1.541-1.833-1.722-2.143-.18-.31-.019-.478.136-.632.14-.14.31-.36.464-.541.155-.18.206-.31.31-.516.103-.206.052-.386-.026-.541-.077-.155-.695-1.675-.953-2.294-.251-.603-.507-.522-.695-.531-.18-.008-.386-.01-.592-.01-.206 0-.541.077-.824.386-.283.31-1.08 1.056-1.08 2.576s1.106 2.988 1.26 3.195c.155.206 2.176 3.322 5.27 4.658.736.318 1.31.508 1.758.65.739.235 1.412.202 1.943.123.593-.089 1.828-.747 2.086-1.469.258-.721.258-1.339.18-1.469-.077-.129-.283-.206-.593-.36z" />
  </svg>
);

export const WhatsAppButton: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [autoShow, setAutoShow] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!visible) return;
    // A couple seconds after the button appears, briefly reveal the label
    // (covers mobile, where there's no hover state to trigger it otherwise).
    const openTimer = setTimeout(() => setAutoShow(true), 1500);
    const closeTimer = setTimeout(() => setAutoShow(false), 5500);
    return () => {
      clearTimeout(openTimer);
      clearTimeout(closeTimer);
    };
  }, [visible]);

  const labelVisible = hovered || autoShow;

  return (
    <a
      href={LINKS.WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        fixed
        bottom-5
        right-5
        md:bottom-8
        md:right-8
        z-50

        flex
        items-center
        gap-3

        transition-all
        duration-500
        ease-out

        ${visible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}
      `}
    >
      {/* Hover label on desktop, auto-reveal label on all sizes */}
      <span
        className={`
          bg-[#20241F] text-[#F7F2E7] text-sm font-semibold
          px-4 py-2 rounded-full shadow-lg border border-[#3A423A]
          whitespace-nowrap
          transition-all duration-300
          ${labelVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"}
        `}
      >
        Chat with us
      </span>

      <span className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 shrink-0">
        {/* Soft sonar pulse */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping [animation-duration:2.5s]"></span>

        <span
          className="
            relative z-10
            w-full h-full
            rounded-full
            bg-[#25D366]
            text-white
            flex items-center justify-center
            shadow-xl shadow-[#25D366]/30
            transition-all duration-300
            hover:scale-110
            hover:bg-[#22c55e]
            hover:shadow-2xl hover:shadow-[#25D366]/50
            focus:outline-none
            focus:ring-4
            focus:ring-[#25D366]/40
          "
        >
          <WhatsAppIcon className="w-7 h-7 md:w-8 md:h-8" />
        </span>
      </span>
    </a>
  );
};
