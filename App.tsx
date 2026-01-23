
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
    <div className="min-h-screen font-sans text-slate-900 bg-surface-gray">
      
      <Navigation 
        isOpen={isMenuOpen} 
        setIsOpen={setIsMenuOpen} 
        activeView={activeView}
        setActiveView={setActiveView}
      />

      <main className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16">
          {activeView === 'home' && <Home setActiveView={setActiveView} />}
          {activeView === 'about' && <About />}
          {activeView === 'tutors' && <Tutors />}
          {activeView === 'stories' && <Stories />}
          {activeView === 'locations' && <Contact />}
          {activeView === 'services' && <Services />}
      </main>
      
      <Footer setActiveView={setActiveView} />

      <RegistrationBanner />
      
    </div>
  );
}

export default App;
