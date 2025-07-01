import React from 'react';
import { Menu, X, Rocket, Sparkles } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative p-3 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                <Sparkles className="h-2 w-2 text-yellow-800" />
              </div>
            </div>
            <div>
              <span className="text-xl font-black text-gray-900 block leading-tight">
                How to Become
              </span>
              <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-orange-500 block leading-tight">
                a Founder
              </span>
            </div>
          </div>
          
          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {[
              { label: 'Resources', id: 'resources' },
              { label: 'Business Plan', id: 'business-plan' },
              { label: 'Funding', id: 'grants' },
              { label: 'Stories', id: 'startup-insights' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-6 py-3 text-gray-700 hover:text-blue-600 transition-all duration-300 font-semibold rounded-xl hover:bg-blue-50 relative group"
              >
                {item.label}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-orange-500 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            
            <button
              onClick={() => scrollToSection('contact')}
              className="ml-4 px-8 py-3 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-2xl font-bold hover:from-blue-700 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Help
            </button>
          </nav>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-2xl bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 space-y-4 border-t border-gray-200 bg-white/95 backdrop-blur-xl">
            {[
              { label: 'Resources', id: 'resources' },
              { label: 'Business Plan', id: 'business-plan' },
              { label: 'Funding', id: 'grants' },
              { label: 'Stories', id: 'startup-insights' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-semibold rounded-xl"
              >
                {item.label}
              </button>
            ))}
            
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-3 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-xl font-bold hover:from-blue-700 hover:to-orange-600 transition-all duration-300"
            >
              Get Help
            </button>
          </div>
        )}
      </div>
    </header>
  );
};