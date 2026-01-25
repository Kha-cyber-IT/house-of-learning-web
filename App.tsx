
import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { WhatsAppButton } from './components/WhatsAppButton';
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

      <main className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16 py-16">
          {activeView === 'home' && <Home setActiveView={setActiveView} />}
          {activeView === 'about' && <About />}
          {activeView === 'tutors' && <Tutors />}
          {activeView === 'stories' && <Stories />}
          {activeView === 'locations' && <Contact />}
          {activeView === 'services' && <Services />}
      </main>
      
      <Footer setActiveView={setActiveView} />

      <WhatsAppButton />
      
    </div>
  );
}

export default App;
