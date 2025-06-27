import React from 'react';
import { Hero } from './components/Hero';
import { ContactSection } from './components/ContactSection';
import { EstablishmentSection } from './components/EstablishmentSection';
import { GrantsSection } from './components/GrantsSection';
import { LegalStatusSection } from './components/LegalStatusSection';
import { PitchDeckSection } from './components/PitchDeckSection';
import { InterviewSection } from './components/InterviewSection';
import { StartupStorySection } from './components/StartupStorySection';

function App() {
  return (
    <div className="min-h-screen bg-white">
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