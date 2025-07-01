import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ContactSection } from './components/ContactSection';
import { EstablishmentSection } from './components/EstablishmentSection';
import { GrantsSection } from './components/GrantsSection';
import { LegalStatusSection } from './components/LegalStatusSection';
import { PitchDeckSection } from './components/PitchDeckSection';
import { StartupStorySection } from './components/StartupStorySection';
import { ResourcesSection } from './components/ResourcesSection';
import { StartupInsightsSection } from './components/StartupInsightsSection';
import { BusinessPlanSection } from './components/BusinessPlanSection';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <ResourcesSection />
      <BusinessPlanSection />
      <EstablishmentSection />
      <GrantsSection />
      <LegalStatusSection />
      <PitchDeckSection />
      <StartupInsightsSection />
      <StartupStorySection />
      <ContactSection />
    </div>
  );
}

export default App;