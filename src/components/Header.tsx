import React from 'react';
import { Menu, X, Rocket } from 'lucide-react';

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
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">How to Become a Founder</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('resources')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Resources
            </button>
            <button
              onClick={() => scrollToSection('business-plan')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Business Plan
            </button>
            <button
              onClick={() => scrollToSection('grants')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Funding
            </button>
            <button
              onClick={() => scrollToSection('startup-insights')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Founder Stories
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Help
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button
              onClick={() => scrollToSection('resources')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Resources
            </button>
            <button
              onClick={() => scrollToSection('business-plan')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Business Plan
            </button>
            <button
              onClick={() => scrollToSection('grants')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Funding
            </button>
            <button
              onClick={() => scrollToSection('startup-insights')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Founder Stories
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Help
            </button>
          </div>
        )}
      </div>
    </header>
  );
};