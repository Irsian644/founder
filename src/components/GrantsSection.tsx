import React from 'react';
import { Banknote, Globe, Users, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import grantsImg from '../Foto_protik/WhatsApp Image 2025-06-20 at 09.58.48.jpeg';

const grants = [
  {
    icon: <Banknote className="h-8 w-8 text-blue-600" />,
    title: 'Startup Support Program 2025',
    desc: 'Government grants for startups in Albania, up to 100% funding in early phases.',
    link: 'https://albaniatech.org/accelerating-startup-success-how-fastercapital-empowers-albania-based-startups-to-secure-funding/?utm_source=chatgpt.com',
  },
  {
    icon: <Globe className="h-8 w-8 text-orange-400" />,
    title: 'Western Balkans & EBRD "Go Digital"',
    desc: 'Regional grants for digitalization, automation, and green tech.',
    link: 'https://www.reuters.com/markets/europe/ebrd-launches-417-million-programme-help-western-balkans-go-digital-2025-04-10/?utm_source=chatgpt.com',
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: 'Challenge Fund',
    desc: 'Innovation grants for startups, NGOs, and SMEs in Albania.',
    link: 'https://transition-pathways.europa.eu/funding-calls/funding-opportunity-albanian-start-ups-focused-innovation?utm_source=chatgpt.com',
  },
  {
    icon: <Zap className="h-8 w-8 text-orange-400" />,
    title: 'Private & International Donor Grants',
    desc: 'Funding from Slovak Republic, Visegrad Fund, AAEF, and more.',
    link: 'https://www.mzv.sk/en/web/tirana-en/slovakaid/small-grants?utm_source=chatgpt.com',
  },
];

const steps = [
  'Register on the Startup Albania portal',
  'Track deadlines for open calls',
  'Apply to grants and accelerators',
  'Engage with angel networks',
  'Use available tools and attend events',
];

export const GrantsSection: React.FC = () => (
  <section id="grants" className="py-24 bg-gradient-to-br from-blue-100 via-white to-blue-200 relative overflow-hidden animate-fade-in">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-200 via-blue-100 to-transparent rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-blue-200 via-white to-transparent rounded-full blur-2xl opacity-30" />
    </div>
    <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center gap-10 mb-14">
        <img
          src={grantsImg}
          alt="Grants"
          className="w-64 h-64 object-cover rounded-3xl shadow-xl border-4 border-white mb-6 md:mb-0 md:mr-8 animate-float glass"
          loading="lazy"
        />
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight flex items-center justify-center md:justify-start gap-3">
            <Banknote className="h-10 w-10 text-blue-600 inline-block" />
            Grant Opportunities
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
            Access government, EU, and private grants to fuel your startup's growth. Explore the main opportunities and how to apply.
          </p>
        </div>
      </div>
      <div className="mb-14 grid grid-cols-1 md:grid-cols-2 gap-8">
        {grants.map((g, i) => (
          <a key={i} href={g.link} target="_blank" rel="noopener noreferrer" className="group bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-blue-100 hover:scale-105 transition-transform duration-300 animate-fade-in-up cursor-pointer hover:border-orange-400 glass">
            {g.icon}
            <h3 className="text-xl font-bold text-gray-900 mb-2 mt-4">{g.title}</h3>
            <p className="text-gray-600 mb-4">{g.desc}</p>
            <span className="inline-flex items-center gap-1 text-blue-600 font-semibold group-hover:text-orange-400 transition-colors">Learn More <ArrowRight className="h-4 w-4" /></span>
          </a>
        ))}
      </div>
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2"><CheckCircle className="h-7 w-7 text-blue-500" /> How to Apply</h3>
        <div className="flex flex-col md:flex-row items-center gap-6">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-2 animate-fade-in-up glass">
              <span className={`w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg ${i === 0 ? 'bg-blue-600 text-white' : 'bg-orange-400 text-white'}`}>{i + 1}</span>
              <span className="text-gray-800 font-medium">{step}</span>
              {i < steps.length - 1 && <span className="w-8 h-1 bg-gradient-to-r from-blue-600 to-orange-400 rounded-full mx-2" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);