import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ContactSection } from './components/ContactSection';
import { EstablishmentSection } from './components/EstablishmentSection';
import { GrantsSection } from './components/GrantsSection';
import { LegalStatusSection } from './components/LegalStatusSection';
import { PitchDeckSection } from './components/PitchDeckSection';
import { InterviewSection } from './components/InterviewSection';
import { StartupStorySection } from './components/StartupStorySection';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <EstablishmentSection />
      <GrantsSection />
      <LegalStatusSection />
      <PitchDeckSection />
      <StartupStorySection />
      <InterviewSection />
      <ContactSection />
    </div>
  );
}

export default App;