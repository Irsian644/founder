import React from 'react';
import { FileText, Users, Banknote, Gavel, MapPin, UserCheck, Layers, ShieldCheck } from 'lucide-react';
import estImg from '../Foto_protik/WhatsApp Image 2025-06-20 at 09.58.49 (2).jpeg';

const sections = [
  {
    icon: <FileText className="h-7 w-7 text-blue-600" />,
    title: 'Company Name',
    desc: 'The official name of the startup.'
  },
  {
    icon: <MapPin className="h-7 w-7 text-orange-400" />,
    title: 'Registered Address',
    desc: 'Physical location or headquarters.'
  },
  {
    icon: <Gavel className="h-7 w-7 text-blue-600" />,
    title: 'Business Purpose',
    desc: 'Description of the startup\'s activities.'
  },
  {
    icon: <Users className="h-7 w-7 text-orange-400" />,
    title: 'Founders\' Information',
    desc: 'Full names, identification numbers, and addresses.'
  },
  {
    icon: <Banknote className="h-7 w-7 text-blue-600" />,
    title: 'Capital Contributions',
    desc: 'Initial investments or shares contributed by each founder.'
  },
  {
    icon: <Layers className="h-7 w-7 text-orange-400" />,
    title: 'Legal Form',
    desc: 'Type of entity (e.g., LLC, Corporation, SH.P.K., etc.).'
  },
  {
    icon: <UserCheck className="h-7 w-7 text-blue-600" />,
    title: 'Administrator / Director',
    desc: 'Person authorized to legally represent the company.'
  },
  {
    icon: <ShieldCheck className="h-7 w-7 text-orange-400" />,
    title: 'Ownership Structure',
    desc: 'Percentage of ownership or shares held by each founder.'
  },
];

export const EstablishmentSection: React.FC = () => (
  <section id="establishment" className="py-24 bg-gradient-to-br from-blue-100 via-white to-blue-200 relative overflow-hidden animate-fade-in">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-200 via-blue-100 to-transparent rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-blue-200 via-white to-transparent rounded-full blur-2xl opacity-30" />
    </div>
    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center gap-10 mb-14">
        <img
          src={estImg}
          alt="Founding Act"
          className="w-64 h-64 object-cover rounded-3xl shadow-xl border-4 border-white mb-6 md:mb-0 md:mr-8 animate-float glass"
          loading="lazy"
        />
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight flex items-center justify-center md:justify-start gap-3">
            <FileText className="h-10 w-10 text-blue-600 inline-block" />
            Founding Act for Startups
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
            The <span className="font-bold text-blue-700">Founding Act</span> is a legal document that officially establishes a startup as a registered business entity. It outlines the structure, ownership, and initial rules of operation for the company. This is the first formal step in turning a business idea into a legal organization.
          </p>
        </div>
      </div>
      <div className="mb-14 grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((s, i) => (
          <div key={i} className="bg-white/80 rounded-2xl shadow-lg p-6 flex items-start gap-4 border border-blue-100 hover:scale-105 transition-transform duration-300 animate-fade-in-up glass">
            <div>{s.icon}</div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);