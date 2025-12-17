

import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { RegistrationBanner } from './components/RegistrationBanner';
import { Footer } from './components/Footer';
import { Home } from './views/Home';
import { About } from './views/About';
import { Tutors } from './views/Tutors';
import { Stories } from './views/Stories';
import { Contact } from './views/Contact';
import { Services } from './views/Services';
import { ViewState } from './types';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeView, setActiveView] = useState<ViewState>('home');

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView]);

  return (
    <div className="min-h-screen font-sans bg-background text-foreground relative overflow-hidden flex flex-col">
      
      {/* Background with Overlay */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
      </div>
      
      <Navigation 
        isOpen={isMenuOpen} 
        setIsOpen={setIsMenuOpen} 
        activeView={activeView}
        setActiveView={setActiveView}
      />

      <main className="flex-grow w-full flex flex-col items-center pt-24 md:pt-32 pb-12">
        <div className="w-full max-w-7xl px-4 md:px-6 animate-fade-in">
          
          {activeView === 'home' && <Home setActiveView={setActiveView} />}
          {activeView === 'about' && <About />}
          {activeView === 'tutors' && <Tutors />}
          {activeView === 'stories' && <Stories />}
          {activeView === 'locations' && <Contact />}
          {activeView === 'services' && <Services />}

        </div>
      </main>
      
      <Footer setActiveView={setActiveView} />

      <RegistrationBanner />
      
    </div>
  );
}

export default App;
