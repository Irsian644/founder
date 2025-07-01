import React from 'react';
import { Rocket, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Rocket className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">How to Become a Founder</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering aspiring founders with comprehensive resources, 
              expert guidance, and strategic support for startup success.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#establishment" className="hover:text-white transition-colors">Business Establishment</a></li>
              <li><a href="#grants" className="hover:text-white transition-colors">Grant Applications</a></li>
              <li><a href="#legal-status" className="hover:text-white transition-colors">Legal Compliance</a></li>
              <li><a href="#pitch-deck" className="hover:text-white transition-colors">Pitch Deck Development</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Templates & Tools</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Webinars</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@howtobecomeafounder.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+355 4 123 4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Tirana, Albania</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 How to Become a Founder. All rights reserved. Built with ❤️ for aspiring founders.</p>
        </div>
      </div>
    </footer>
  );
};