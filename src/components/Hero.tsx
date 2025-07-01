import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import heroImg from '../Foto_protik/WhatsApp Image 2025-06-20 at 09.58.48.jpeg';

export const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-700 via-blue-400 to-blue-200 animate-fade-in">
      {/* Animated SVG background shapes */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-30 animate-pulse" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#2563eb" fillOpacity="0.3" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
        <circle cx="1200" cy="80" r="80" fill="#2563eb" fillOpacity="0.2" />
        <circle cx="300" cy="220" r="120" fill="#2563eb" fillOpacity="0.15" />
      </svg>
      
      {/* Hero Image */}
      <img
        src={heroImg}
        alt="Albanian Startup Community"
        className="absolute right-8 bottom-8 w-64 h-64 object-cover rounded-3xl shadow-2xl border-4 border-white opacity-90 hidden md:block animate-float"
        loading="eager"
      />
      
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center justify-center py-32 glass animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight animate-fade-in-up">
          <span className="block">How to Become a Founder</span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-300 to-blue-700 animate-gradient-x">Your Startup Journey Starts Here</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto animate-fade-in-up delay-200">
          Practical tools, real founder insights, and step-by-step guides to help you build your startup from idea to launch.
          <br className="hidden md:block" />
          From inspiration to funding – everything you need in one place.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button
            onClick={() => scrollToSection('resources')}
            className="px-8 py-4 rounded-full bg-blue-600 text-white text-lg font-bold shadow-lg hover:bg-blue-700 transition-all duration-300 animate-bounce flex items-center justify-center gap-2"
          >
            <Download className="h-5 w-5" />
            Get Free Templates
          </button>
          <button
            onClick={() => scrollToSection('startup-insights')}
            className="px-8 py-4 rounded-full bg-white/20 backdrop-blur-sm text-white text-lg font-bold border-2 border-white/30 hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Read Founder Stories <ArrowRight className="h-5 w-5" />
          </button>
        </div>
        
        <div className="mt-8 text-white/80 text-sm">
          ✓ Free templates ✓ Real founder interviews ✓ Verified funding sources ✓ Legal guidance
        </div>
      </div>
    </section>
  );
};