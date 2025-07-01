import React from 'react';
import { FileText, ShieldCheck, Users, Building2, Gavel, Sparkles } from 'lucide-react';
import img1 from '../Foto_protik/WhatsApp Image 2025-06-20 at 09.58.48.jpeg';
import img2 from '../Foto_protik/WhatsApp Image 2025-06-20 at 09.58.49.jpeg';
import img3 from '../Foto_protik/WhatsApp Image 2025-06-20 at 09.58.49 (1).jpeg';
import img4 from '../Foto_protik/WhatsApp Image 2025-06-20 at 09.58.49 (2).jpeg';

const whyList = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-blue-600" />, 
    text: 'Required for official business registration'
  },
  {
    icon: <Building2 className="h-8 w-8 text-orange-400" />, 
    text: 'Defines your legal structure'
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />, 
    text: 'Clarifies the roles of founders'
  },
  {
    icon: <Gavel className="h-8 w-8 text-orange-400" />, 
    text: 'Protects your startup in case of internal disagreements'
  },
  {
    icon: <Sparkles className="h-8 w-8 text-blue-600" />, 
    text: 'Needed when applying for grants or investors'
  },
];

const includeList = [
  {
    icon: <FileText className="h-7 w-7 text-blue-600" />, 
    title: 'Company Information',
    details: [
      'Name of the startup',
      'Legal form (e.g., sh.p.k., SHA)',
      'Headquarters address',
    ]
  },
  {
    icon: <Sparkles className="h-7 w-7 text-orange-400" />, 
    title: 'Purpose and Activities',
    details: [
      'Describe your business purpose and key activities (e.g., "software development", "AI-powered marketing tools", etc.)'
    ]
  },
  {
    icon: <Users className="h-7 w-7 text-blue-600" />, 
    title: 'Shareholder Information',
    details: [
      'Names of founders',
      'Ownership shares',
      'Capital contribution from each',
    ]
  },
  {
    icon: <Gavel className="h-7 w-7 text-orange-400" />, 
    title: 'Governing Bodies',
    details: [
      'Administrator(s) or Board of Directors',
      'Decision-making process',
      'Profit Distribution Rules',
    ]
  },
  {
    icon: <ShieldCheck className="h-7 w-7 text-blue-600" />, 
    title: 'Duration and Dissolution',
    details: [
      'How long the company will operate',
      'How to legally close it',
    ]
  },
];

const galleryImages = [
  { src: img2, alt: 'Tirana Slush event group photo' },
  { src: img4, alt: 'Startup workshop proof of concept' },
  { src: img1, alt: 'Startup team outdoors celebrating' },
  { src: img3, alt: 'Slush winners on stage' },
];

export const LegalStatusSection: React.FC = () => {
  return (
    <section id="legal-status" className="py-24 bg-gradient-to-br from-blue-100 via-white to-blue-200 relative overflow-hidden animate-fade-in">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-200 via-blue-100 to-transparent rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-blue-200 via-white to-transparent rounded-full blur-2xl opacity-30" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight flex items-center justify-center gap-3">
            <ShieldCheck className="h-10 w-10 text-blue-600 inline-block" />
            Startup Statute
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
            The <span className="font-bold text-blue-700">Statute</span> is a legal document that defines the identity, purpose, and internal rules of your startup. It is mandatory for company registration in Albania (via QKB). Think of it as your company's constitution.
          </p>
        </div>
        {/* Image Gallery */}
        <div className="mb-16">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Startup Community in Action</h3>
            <p className="text-gray-600">Snapshots from events, workshops, and celebrations</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className={`overflow-hidden rounded-3xl shadow-xl border-4 border-white hover:border-orange-400 transition-all duration-300 group bg-gradient-to-br from-blue-100 via-white to-orange-100 animate-fade-in-up glass ${idx === 0 ? 'animate-float' : ''}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 group-hover:brightness-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Why Do You Need It? */}
        <div className="mb-14">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2"><Sparkles className="h-7 w-7 text-orange-400" /> Why Do You Need It?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {whyList.map((item, idx) => (
              <div key={idx} className="bg-white/80 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-blue-100 hover:scale-105 transition-transform duration-300 animate-fade-in-up glass">
                {item.icon}
                <span className="mt-4 text-gray-800 font-medium text-base">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        {/* What Should Be Included? */}
        <div className="mb-14">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2"><FileText className="h-7 w-7 text-blue-600" /> What Should Be Included?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {includeList.map((item, idx) => (
              <div key={idx} className="bg-white/80 rounded-2xl shadow-lg p-6 flex flex-col gap-2 border border-blue-100 hover:scale-105 transition-transform duration-300 animate-fade-in-up glass">
                <div className="flex items-center gap-3 mb-2">
                  {item.icon}
                  <span className="font-semibold text-lg text-gray-900">{item.title}</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 ml-2">
                  {item.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};