import React from 'react';
import { FileText, Lightbulb, Users, TrendingUp, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';
import pitchImg from '../Foto_protik/WhatsApp Image 2025-06-20 at 09.58.49 (1).jpeg';

const elements = [
  { icon: <FileText className="h-8 w-8 text-blue-600" />, title: 'Introduction', desc: 'Introduce your business and unique value proposition.' },
  { icon: <Lightbulb className="h-8 w-8 text-orange-400" />, title: 'Problem', desc: 'Explain the problem your target market faces.' },
  { icon: <Users className="h-8 w-8 text-blue-600" />, title: 'Target Market', desc: 'Describe your target market and competitive landscape.' },
  { icon: <CheckCircle className="h-8 w-8 text-orange-400" />, title: 'Solution', desc: 'Show how your business solves the problem.' },
  { icon: <TrendingUp className="h-8 w-8 text-blue-600" />, title: 'Traction', desc: 'Show growth, milestones, and early sales.' },
  { icon: <Lightbulb className="h-8 w-8 text-orange-400" />, title: 'Marketing & Sales', desc: 'Explain your go-to-market and sales strategy.' },
  { icon: <Users className="h-8 w-8 text-blue-600" />, title: 'Competition', desc: 'Highlight what sets you apart from competitors.' },
  { icon: <Users className="h-8 w-8 text-orange-400" />, title: 'Team', desc: 'Showcase your team\'s expertise and experience.' },
  { icon: <DollarSign className="h-8 w-8 text-blue-600" />, title: 'Financials', desc: 'Present financial projections and business model.' },
  { icon: <DollarSign className="h-8 w-8 text-orange-400" />, title: 'Investments & Funding', desc: 'State your funding needs and use of funds.' },
];

export const PitchDeckSection: React.FC = () => (
  <section id="pitch-deck" className="py-24 bg-gradient-to-br from-blue-200 via-fuchsia-100 to-orange-100 relative overflow-hidden animate-fade-in">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-200 via-blue-100 to-transparent rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-orange-200 via-white to-transparent rounded-full blur-2xl opacity-30" />
    </div>
    <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center gap-10 mb-14">
        <img
          src={pitchImg}
          alt="Pitch Deck"
          className="w-64 h-64 object-cover rounded-3xl shadow-xl border-4 border-white mb-6 md:mb-0 md:mr-8 animate-float glass"
          loading="lazy"
        />
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight flex items-center justify-center md:justify-start gap-3">
            <FileText className="h-10 w-10 text-blue-600 inline-block" />
            Pitch Deck Guide
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
            Create a compelling pitch deck with these essential elements and tips for startup success.
          </p>
        </div>
      </div>
      <div className="mb-14 grid grid-cols-1 md:grid-cols-2 gap-8">
        {elements.map((e, i) => (
          <div key={i} className="bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-blue-100 hover:scale-105 transition-transform duration-300 animate-fade-in-up glass">
            {e.icon}
            <h3 className="text-xl font-bold text-gray-900 mb-2 mt-4">{e.title}</h3>
            <p className="text-gray-600 mb-2">{e.desc}</p>
          </div>
        ))}
      </div>
      <div className="mb-10 bg-gradient-to-r from-blue-600 to-orange-400 rounded-2xl p-8 text-white text-center shadow-xl flex flex-col items-center gap-4 animate-fade-in-up glass">
        <h3 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">Download a Pitch Deck Template</h3>
        <a href="#" className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow">
          <ArrowRight className="h-5 w-5" /> Download Template
        </a>
      </div>
    </div>
  </section>
);