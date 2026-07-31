import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { LINKS } from "../constants";

export const WhatsAppButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={LINKS.WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`
        fixed
        bottom-5
        right-5
        md:bottom-8
        md:right-8
        z-50

        w-14
        h-14
        md:w-16
        md:h-16

        rounded-full
        bg-[#25D366]
        text-white

        flex
        items-center
        justify-center

        shadow-xl
        shadow-[#25D366]/30

        transition-all
        duration-500
        ease-out

        hover:scale-110
        hover:bg-[#22c55e]
        hover:shadow-2xl
        hover:shadow-[#25D366]/50

        focus:outline-none
        focus:ring-4
        focus:ring-[#25D366]/40

        ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-16 opacity-0"
        }
      `}
    >
      {/* Soft pulse */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-ping"></span>

      {/* Icon */}
      <MessageCircle
        className="relative z-10 w-6 h-6 md:w-7 md:h-7"
        strokeWidth={2.2}
      />
    </a>
  );
};
