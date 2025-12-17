
import React from 'react';
import { BookOpen, MapPin, Mail, Phone, Facebook } from "lucide-react";
import { LINKS } from '../constants';
import { ViewState } from '../types';

// Simple WhatsApp SVG icon since it's not in Lucide by default in some versions or usually preferred as brand icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
  </svg>
);

interface FooterProps {
  setActiveView: (view: ViewState) => void;
}

const quickLinks: { id: ViewState; label: string }[] = [
  { id: 'home', label: "Home" },
  { id: 'about', label: "About" },
  { id: 'services', label: "Services" },
  { id: 'stories', label: "Stories" },
  { id: 'locations', label: "Contact" },
];

const subjects = [
  "Mathematics",
  "Physical Sciences",
  "Life Sciences",
  "English",
  "Accounting",
  "Economics",
];

export const Footer: React.FC<FooterProps> = ({ setActiveView }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (view: ViewState) => {
    setActiveView(view);
    scrollToTop();
  };

  return (
    <footer className="liquid-glass border-t border-white/10 mt-auto w-full z-10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-left">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-6 w-6 text-blue-400" />
              <span className="font-heading font-bold text-xl text-white">House of Learning</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Igniting passion for learning since 2020. We match every student with experienced and professional tutors.
            </p>
            <div className="flex gap-3">
              <a 
                href={LINKS.WHATSAPP}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all group"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="h-5 w-5 text-white/70 group-hover:text-green-400 transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all group"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-white/70 group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="text-white/60 hover:text-white transition-colors text-sm text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Subjects</h4>
            <ul className="space-y-2">
              {subjects.map((subject) => (
                <li key={subject}>
                  <span className="text-white/60 text-sm">{subject}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-white/40 mt-1 flex-shrink-0" />
                <span className="text-white/60 text-sm">Green Masjid Ext 2, Eldorado Park</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-white/40 mt-1 flex-shrink-0" />
                <a 
                  href={`mailto:${LINKS.EMAIL}`}
                  className="text-white/60 text-sm hover:text-white transition-colors break-all"
                >
                  {LINKS.EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-white/40 mt-1 flex-shrink-0" />
                <a 
                  href={`tel:${LINKS.PHONE.replace(/\s/g, '')}`} 
                  className="text-white/60 text-sm hover:text-white transition-colors"
                >
                  {LINKS.PHONE}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-xs text-center md:text-left">
              © {new Date().getFullYear()} House of Learning. All rights reserved.
            </p>
            <p className="text-white/40 text-xs text-center md:text-right">
              Tutoring Service in Eldorado Park, South Africa
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
