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
      className={`fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-500 ease-out hover:scale-110 hover:shadow-xl flex items-center justify-center ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
    </a>
  );
};
