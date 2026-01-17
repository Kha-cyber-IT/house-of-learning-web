import React, { useState, useEffect } from 'react';
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (viewId: string) => {
    setIsOpen(false);
    setActiveView(viewId as ViewState);
  };

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'stories', label: 'Stories' },
    { id: 'tutors', label: 'Our Tutors' },
    { id: 'locations', label: 'Contact' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
  ];

  // Logic to determine text color based on light/dark mode view
  const isLightMode = activeView === 'home';
  const textColorClass = isLightMode && !scrolled ? 'text-slate-800' : 'text-white';
  const logoColorClass = isLightMode && !scrolled ? 'text-slate-900' : 'text-white';
  const glassClass = scrolled || isOpen
    ? isLightMode ? 'bg-white/90 backdrop-blur-xl border-slate-200 shadow-sm' : 'glass-nav py-3 border-white/5 shadow-lg'
    : 'bg-transparent py-5 border-transparent';

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${glassClass}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="group flex items-center gap-3 transition-opacity hover:opacity-90"
          >
            <div className={`p-2 rounded-xl text-white shadow-lg transition-colors ${scrolled ? 'bg-lime-600' : 'bg-lime-600/90'}`}>
                <BookOpen size={24} strokeWidth={2.5} />
            </div>
            <span className={`text-xl md:text-2xl font-heading font-bold tracking-tight ${logoColorClass}`}>
                House of Learning
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeView === item.id
                    ? isLightMode && !scrolled ? 'text-white bg-lime-600 shadow-md' : 'text-white bg-white/10'
                    : isLightMode && !scrolled ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100' : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a 
              href={LINKS.REGISTRATION}
              target="_blank"
              rel="noreferrer"
              className="ml-4 bg-lime-600 hover:bg-lime-500 text-white text-sm font-bold py-2.5 px-6 rounded-lg transition-all shadow-lg shadow-lime-600/20 hover:scale-105 active:scale-95"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className={`md:hidden p-2 rounded-lg transition-colors ${isLightMode && !scrolled && !isOpen ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-slate-950/98 backdrop-blur-xl md:hidden transition-all duration-300 flex flex-col items-center justify-center ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="space-y-6 text-center w-full px-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-2xl font-heading font-bold transition-colors py-2 ${
                activeView === item.id 
                  ? 'text-lime-500'
                  : 'text-white hover:text-lime-400'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-8 w-full flex justify-center">
            <a 
                href={LINKS.REGISTRATION}
                target="_blank"
                rel="noreferrer"
                className="w-full max-w-xs bg-lime-600 text-white text-lg font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 hover:bg-lime-500 transition-colors"
            >
                Book a Session
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
