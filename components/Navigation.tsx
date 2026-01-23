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
      <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-gray-200/50">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">

              {/* Brand */}
              <button
                onClick={() => handleNavClick('home')}
                className="flex items-center gap-3 group"
              >
                  <div className="text-primary h-8 w-8 flex items-center justify-center bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <BookOpen size={20} strokeWidth={2.5} />
                  </div>
                  <h2 className="text-slate-900 text-xl font-bold font-display tracking-tight">House of Learning</h2>
              </button>

              {/* Desktop Links */}
              <div className="hidden md:flex items-center gap-8">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`text-sm font-semibold transition-colors ${
                        activeView === item.id
                          ? 'text-primary'
                          : 'text-slate-600 hover:text-primary'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4">
                  <a
                    href={LINKS.REGISTRATION}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-slate-900 text-white hover:bg-slate-800 px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-slate-900/10"
                  >
                      Book Now
                  </a>

                  {/* Mobile Toggle */}
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-slate-600 hover:text-primary transition-colors p-1"
                  >
                    {isOpen ? <X size={30} /> : <Menu size={30} />}
                  </button>
              </div>
          </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-24 px-6 md:hidden">
            <div className="flex flex-col items-center gap-4">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full h-[44px] flex items-center justify-center text-base font-bold font-display transition-colors ${
                      activeView === item.id
                        ? 'text-primary bg-primary/5 rounded-lg'
                        : 'text-slate-900 hover:text-primary hover:bg-slate-50 rounded-lg'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <a
                    href={LINKS.REGISTRATION}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 w-full h-[44px] flex items-center justify-center bg-slate-900 text-white hover:bg-slate-800 rounded-xl text-base font-bold transition-all shadow-xl"
                >
                    Book a Session
                </a>
            </div>
        </div>
      )}
    </>
  );
};
