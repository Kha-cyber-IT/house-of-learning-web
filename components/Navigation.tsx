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

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || isOpen ? 'glass-nav py-3 shadow-lg' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="group flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
            <div className="bg-blue-600 p-2 rounded-lg text-white shadow-lg shadow-blue-900/20">
                <BookOpen size={22} strokeWidth={2.5} />
            </div>
            <span className="text-xl md:text-2xl font-heading font-bold text-white tracking-tight drop-shadow-md">
                House of Learning
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeView === item.id && !scrolled
                    ? 'bg-white/10 text-white font-semibold backdrop-blur-sm'
                    : 'text-gray-200 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a 
              href={LINKS.REGISTRATION}
              target="_blank"
              rel="noreferrer"
              className="ml-4 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold py-2.5 px-6 rounded-full transition-all shadow-lg shadow-blue-900/30 hover:-translate-y-0.5"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-gray-950/98 backdrop-blur-xl md:hidden transition-all duration-300 flex flex-col items-center justify-center ${
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
                  ? 'text-blue-500' 
                  : 'text-white hover:text-blue-300'
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
                className="w-full max-w-xs bg-blue-600 text-white text-lg font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2"
            >
                Book a Session
            </a>
          </div>
        </div>
      </div>
    </>
  );
};