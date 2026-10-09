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
    // overflow-x-clip (not hidden): stops sideways scroll without breaking the sticky navbar
    <div className="min-h-screen w-full overflow-x-clip font-sans text-brand-navy bg-surface-gray">

      <Navigation
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
        activeView={activeView}
        setActiveView={setActiveView}
      />

      {/* Every view is full width and handles its own padding and background */}
      <main className="w-full">
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
