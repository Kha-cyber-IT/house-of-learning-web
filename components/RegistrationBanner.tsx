import React, { useState, useEffect } from 'react';
    import { X, GraduationCap } from 'lucide-react';
    import { LINKS } from '../constants';
    
    export const RegistrationBanner: React.FC = () => {
      const [isVisible, setIsVisible] = useState(false);
      const [isClosed, setIsClosed] = useState(false);
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 10000); // 10 seconds
        return () => clearTimeout(timer);
      }, []);
    
      if (isClosed) return null;
    
      return (
        <div 
          className={`fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 z-[80] max-w-md w-auto transform transition-all duration-700 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
          }`}
        >
          <div className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-2xl p-4 md:p-6 flex items-start space-x-4 border border-white/20">
            <a 
              href={LINKS.REGISTRATION} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center space-x-4 flex-grow cursor-pointer group"
            >
              <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors">
                <GraduationCap className="w-8 h-8 md:w-10 md:h-10 animate-bounce" />
              </div>
              
              <div>
                <p className="font-bold text-base md:text-lg leading-tight mb-1">2026 Registrations Open!</p>
                <p className="text-xs font-medium text-blue-200 uppercase tracking-wide group-hover:text-white transition-colors">Click to Sign up</p>
                <div className="mt-2 bg-white/20 inline-block px-2 py-0.5 rounded text-xs font-bold">98% Pass Rate</div>
              </div>
            </a>
    
            <button 
              onClick={() => setIsClosed(true)} 
              className="text-white/70 hover:text-white hover:bg-white/10 rounded-full p-1 transition-colors"
              aria-label="Close Banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      );
    };