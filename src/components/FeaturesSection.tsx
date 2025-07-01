import React from 'react';
import { Code, Cloud, ShieldCheck, Zap, Users, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: <Code className="h-10 w-10 text-blue-600 group-hover:text-orange-400 transition-colors duration-300" />, 
    title: 'Modern Tech Stack',
    desc: 'Built with React, TypeScript, and Tailwind for speed and scalability.'
  },
  {
    icon: <Cloud className="h-10 w-10 text-orange-400 group-hover:text-blue-600 transition-colors duration-300" />, 
    title: 'Cloud Ready',
    desc: 'Deploy anywhere, scale instantly, and enjoy 99.99% uptime.'
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-blue-600 group-hover:text-orange-400 transition-colors duration-300" />, 
    title: 'Secure by Design',
    desc: 'Best-in-class security and privacy for your data and users.'
  },
  {
    icon: <Zap className="h-10 w-10 text-orange-400 group-hover:text-blue-600 transition-colors duration-300" />, 
    title: 'Lightning Fast',
    desc: 'Optimized for performance with instant load times and smooth UX.'
  },
  {
    icon: <Users className="h-10 w-10 text-blue-600 group-hover:text-orange-400 transition-colors duration-300" />, 
    title: 'Team Collaboration',
    desc: 'Real-time tools for teams to work together from anywhere.'
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-orange-400 group-hover:text-blue-600 transition-colors duration-300" />, 
    title: 'Growth Analytics',
    desc: 'Track your growth and make data-driven decisions with ease.'
  },
];

export const FeaturesSection: React.FC = () => (
  <section id="features" className="py-24 bg-gradient-to-br from-cyan-400 via-blue-100 to-lime-200 animate-fade-in">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Features</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to launch, grow, and scale your tech startup.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="group bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 cursor-pointer border border-transparent hover:border-orange-400 glass animate-fade-in-up">
            <div className="mb-4 animate-float">{f.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
); 