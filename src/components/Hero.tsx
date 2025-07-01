import React from 'react';
import { ArrowRight, Download, Sparkles, Star } from 'lucide-react';
import heroImg from '../Foto_protik/WhatsApp Image 2025-06-20 at 09.58.48.jpeg';

export const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-600 to-blue-400 animate-fade-in">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-400/30 to-transparent rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full blur-2xl animate-float-delayed" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-32 right-1/4 w-8 h-8 bg-white/20 rounded-lg rotate-45 animate-float" />
        <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-orange-400/30 rounded-full animate-float-delayed" />
        <div className="absolute top-2/3 right-1/3 w-4 h-4 bg-purple-400/40 rounded-full animate-pulse-slow" />
      </div>
      
      {/* Enhanced Hero Image */}
      <div className="absolute right-8 bottom-8 hidden lg:block">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-orange-400/20 rounded-3xl blur-xl transform rotate-6" />
          <img
            src={heroImg}
            alt="Albanian Startup Community"
            className="relative w-80 h-80 object-cover rounded-3xl shadow-2xl border-4 border-white/30 backdrop-blur-sm animate-float glass"
            loading="eager"
          />
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center animate-pulse">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
        </div>
      </div>
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center flex flex-col items-center justify-center py-32">
        {/* Enhanced Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white/90 text-sm font-medium animate-fade-in-up">
          <Star className="h-4 w-4 text-yellow-400" />
          Trusted by 500+ Albanian Founders
          <Star className="h-4 w-4 text-yellow-400" />
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tight animate-fade-in-up text-shadow-lg">
          <span className="block leading-none">How to Become</span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-300 via-yellow-300 to-orange-400 animate-gradient-x leading-none">
            a Founder
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200 font-medium">
          Transform your startup idea into reality with our comprehensive toolkit.
          <br className="hidden md:block" />
          <span className="text-white font-semibold">Professional templates • Expert insights • Proven strategies</span>
        </p>
        
        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mt-8 animate-fade-in-up delay-300">
          <button
            onClick={() => scrollToSection('resources')}
            className="group px-10 py-5 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-white text-lg font-bold shadow-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-orange-500/25 flex items-center justify-center gap-3"
          >
            <Download className="h-6 w-6 group-hover:animate-bounce" />
            Get Free Templates
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>
          
          <button
            onClick={() => scrollToSection('startup-insights')}
            className="group px-10 py-5 rounded-2xl bg-white/20 backdrop-blur-md text-white text-lg font-bold border-2 border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
          >
            Read Success Stories 
            <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
        
        {/* Enhanced Features List */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-blue-100 text-sm animate-fade-in-up delay-500">
          <div className="flex items-center gap-2 justify-center">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Free Templates
          </div>
          <div className="flex items-center gap-2 justify-center">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            Real Founder Stories
          </div>
          <div className="flex items-center gap-2 justify-center">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
            Verified Funding Sources
          </div>
          <div className="flex items-center gap-2 justify-center">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            Legal Guidance
          </div>
        </div>
      </div>
    </section>
  );
};