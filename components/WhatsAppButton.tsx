import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { LINKS } from '../constants';

export const WhatsAppButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay for entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={LINKS.WHATSAPP}
      target="_blank"
      rel="noreferrer"
      className={`fixed bottom-6 right-4 md:bottom-8 md:right-8 z-50 bg-[#25D366] text-white p-3.5 md:p-4 rounded-full shadow-lg shadow-[#25D366]/30 transition-all duration-500 ease-out hover:bg-[#20bd5a] hover:scale-110 hover:shadow-2xl hover:shadow-[#25D366]/50 flex items-center justify-center group ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      aria-label="Chat on WhatsApp"
    >
      {/* Premium touch: A subtle, continuous pulse ring behind the button */}
      <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-30 group-hover:hidden"></span>
      
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7 relative z-10" />
    </a>
  );
};
