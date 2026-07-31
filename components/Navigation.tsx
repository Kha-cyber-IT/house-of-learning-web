import React from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import { LINKS } from '../constants';
import { ViewState } from '../types';

interface NavigationProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  activeView: ViewState;
  setActiveView: (view: ViewState) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  isOpen, 
  setIsOpen, 
  activeView, 
  setActiveView 
}) => {

  const handleNavClick = (viewId: string) => {
    setIsOpen(false);
    setActiveView(viewId as ViewState);
  };

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'stories', label: 'Stories' },
    { id: 'tutors', label: 'Our Tutors' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'locations', label: 'Contact' },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-white border-b border-neutral-100 shadow-sm">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">

              {/* Brand - Book icon hidden on mobile for maximum minimal clarity */}
              <button
                onClick={() => handleNavClick('home')}
                className="flex items-center gap-2 group"
              >
                  <div className="hidden md:flex text-black group-hover:text-[#b48c36] transition-colors">
                      <BookOpen size={24} strokeWidth={2.5} />
                  </div>
                  <h2 className="text-black text-xl font-black uppercase tracking-tighter">
                      House of Learning
                  </h2>
              </button>

              {/* Desktop Links - Minimalist text only */}
              <div className="hidden md:flex items-center gap-8">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`text-sm font-bold transition-all ${
                        activeView === item.id
                          ? 'text-[#b48c36]' // Highlight active in Gold
                          : 'text-neutral-500 hover:text-black'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4">
                  {/* Desktop CTA - Strict Black & White style */}
                  <a
                    href={LINKS.REGISTRATION}
                    target="_blank"
                    rel="noreferrer"
                    className="hidden lg:block bg-black text-white hover:bg-neutral-800 px-6 py-2.5 text-sm font-bold transition-colors"
                  >
                      Book Now
                  </a>

                  {/* Mobile Toggle Button */}
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-black hover:text-[#b48c36] transition-colors z-50 relative"
                  >
                    {isOpen ? <X size={28} /> : <Menu size={28} strokeWidth={2.5} />}
                  </button>
              </div>
          </div>
      </nav>

      {/* Modern Mobile Menu Overlay - Full screen, text-based, no cards */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-28 px-8 md:hidden flex flex-col animate-fade-in overflow-y-auto">
            <div className="flex flex-col gap-6">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left text-3xl font-black tracking-tight transition-colors ${
                      activeView === item.id
                        ? 'text-[#b48c36]' // Gold
                        : 'text-black hover:text-[#b48c36]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                
                {/* Mobile CTA - Styled as a sleek text link rather than a blocky card */}
                <div className="border-t border-neutral-100 mt-4 pt-8">
                    <a
                        href={LINKS.REGISTRATION}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between w-full text-2xl font-black tracking-tight text-black hover:text-[#b48c36] transition-colors"
                    >
                        Book a Session 
                        <span className="text-xl">↗</span>
                    </a>
                </div>
            </div>
        </div>
      )}
    </>
  );
};
