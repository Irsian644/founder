import React from 'react';
import { Banknote, Globe, Users, Zap, ArrowRight, CheckCircle, AlertTriangle, Building2 } from 'lucide-react';
import grantsImg from '../Foto_protik/WhatsApp Image 2025-06-20 at 09.58.48.jpeg';

const startupGrants = [
  {
    icon: <Banknote className="h-8 w-8 text-blue-600" />,
    title: 'Innovation Fund',
    desc: 'Government grants for tech startups, up to €50,000 for early-stage companies.',
    eligibility: 'Registered startups, tech focus, under 3 years old',
    amount: '€10,000 - €50,000',
    deadline: 'Rolling applications',
    link: 'https://innovation.gov.al',
    verified: true
  },
  {
    icon: <Globe className="h-8 w-8 text-orange-400" />,
    title: 'EBRD "Go Digital" Program',
    desc: 'Regional grants for digitalization and green tech startups in Western Balkans.',
    eligibility: 'SMEs and startups in digital/green sectors',
    amount: '€25,000 - €100,000',
    deadline: 'Q2 2025',
    link: 'https://www.ebrd.com/go-digital',
    verified: true
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: 'EU4Innovation Challenge',
    desc: 'Innovation grants for startups addressing social challenges.',
    eligibility: 'Startups with social impact focus, EU association countries',
    amount: '€15,000 - €75,000',
    deadline: 'March 2025',
    link: 'https://eu4innovation.eu',
    verified: true
  },
  {
    icon: <Zap className="h-8 w-8 text-orange-400" />,
    title: 'Startup Accelerator',
    desc: 'Local accelerator program with funding and mentorship.',
    eligibility: 'Early-stage startups, all sectors',
    amount: '€5,000 - €25,000 + equity',
    deadline: 'Bi-annual cohorts',
    link: 'https://startupalb.com',
    verified: true
  }
];

const ngoGrants = [
  {
    icon: <Building2 className="h-8 w-8 text-purple-600" />,
    title: 'Slovak Republic Small Grants',
    desc: 'Funding for NGOs and civil society organizations (NOT for commercial startups).',
    eligibility: 'Registered NGOs, civil society projects',
    amount: '€2,000 - €15,000',
    deadline: 'Annual call',
    link: 'https://www.mzv.sk/en/web/tirana-en/slovakaid/small-grants',
    forNGOs: true
  },
  {
    icon: <Users className="h-8 w-8 text-purple-600" />,
    title: 'Visegrad Fund',
    desc: 'Grants for cultural and educational NGO projects.',
    eligibility: 'NGOs, cultural organizations, educational institutions',
    amount: '€5,000 - €40,000',
    deadline: 'Multiple deadlines yearly',
    link: 'https://www.visegradfund.org',
    forNGOs: true
  }
];

const applicationSteps = [
  {
    step: 1,
    title: 'Research & Eligibility Check',
    desc: 'Verify you meet all requirements before applying',
    icon: <CheckCircle className="h-6 w-6 text-green-500" />
  },
  {
    step: 2,
    title: 'Prepare Documentation',
    desc: 'Business plan, financial projections, team CVs',
    icon: <CheckCircle className="h-6 w-6 text-blue-500" />
  },
  {
    step: 3,
    title: 'Submit Application',
    desc: 'Follow guidelines exactly, submit before deadline',
    icon: <CheckCircle className="h-6 w-6 text-orange-500" />
  },
  {
    step: 4,
    title: 'Follow Up',
    desc: 'Track application status and respond to requests',
    icon: <CheckCircle className="h-6 w-6 text-purple-500" />
  }
];

export const GrantsSection: React.FC = () => (
  <section id="grants" className="py-24 bg-gradient-to-br from-blue-100 via-white to-blue-200 relative overflow-hidden animate-fade-in">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-200 via-blue-100 to-transparent rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-blue-200 via-white to-transparent rounded-full blur-2xl opacity-30" />
    </div>
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Funding Opportunities
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
            Verified funding sources for new startups. We've researched eligibility requirements and application deadlines to save you time.
          </p>
        </div>
      </div>

      {/* Startup-Specific Grants */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Zap className="h-7 w-7 text-blue-500" /> 
          For Startups & Businesses
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {startupGrants.map((grant, i) => (
            <div key={i} className="bg-white/80 rounded-2xl shadow-lg p-6 border border-blue-100 hover:scale-105 transition-transform duration-300 animate-fade-in-up glass">
              <div className="flex items-center gap-3 mb-4">
                {grant.icon}
                <h4 className="text-xl font-bold text-gray-900">{grant.title}</h4>
                {grant.verified && (
                  <CheckCircle className="h-5 w-5 text-green-500" title="Verified information" />
                )}
              </div>
              <p className="text-gray-600 mb-4">{grant.desc}</p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-700">Amount:</span>
                  <span className="text-sm text-blue-600 font-semibold">{grant.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-700">Deadline:</span>
                  <span className="text-sm text-orange-600 font-semibold">{grant.deadline}</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-4 italic">
                <strong>Eligibility:</strong> {grant.eligibility}
              </p>
              <a
                href={grant.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-orange-400 transition-colors"
              >
                Apply Now <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* NGO Grants (Clearly Separated) */}
      <div className="mb-16">
        <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-6 rounded-r-lg">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="h-5 w-5 text-purple-600" />
            <h3 className="text-xl font-bold text-purple-800">For NGOs & Non-Profits Only</h3>
          </div>
          <p className="text-purple-700">
            These grants are specifically for registered NGOs and civil society organizations, 
            <strong> not for commercial startups or businesses</strong>.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ngoGrants.map((grant, i) => (
            <div key={i} className="bg-purple-50/80 rounded-2xl shadow-lg p-6 border border-purple-200 hover:scale-105 transition-transform duration-300 animate-fade-in-up">
              <div className="flex items-center gap-3 mb-4">
                {grant.icon}
                <h4 className="text-xl font-bold text-purple-900">{grant.title}</h4>
              </div>
              <p className="text-purple-700 mb-4">{grant.desc}</p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-purple-700">Amount:</span>
                  <span className="text-sm text-purple-600 font-semibold">{grant.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-purple-700">Deadline:</span>
                  <span className="text-sm text-orange-600 font-semibold">{grant.deadline}</span>
                </div>
              </div>
              <p className="text-sm text-purple-600 mb-4 italic">
                <strong>Eligibility:</strong> {grant.eligibility}
              </p>
              <a
                href={grant.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-800 transition-colors"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Application Process */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <CheckCircle className="h-7 w-7 text-green-500" /> 
          How to Apply Successfully
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {applicationSteps.map((step, i) => (
            <div key={i} className="bg-white/80 rounded-2xl shadow-lg p-6 text-center border border-gray-100 hover:scale-105 transition-transform duration-300 animate-fade-in-up glass">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {step.step}
                </div>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Success Tips */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center shadow-xl animate-fade-in-up">
        <h3 className="text-2xl font-bold mb-4">💡 Pro Tips for Grant Success</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div>
            <h4 className="font-semibold mb-2">Start Early</h4>
            <p className="text-sm opacity-90">Begin applications 2-3 months before deadlines</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Follow Guidelines</h4>
            <p className="text-sm opacity-90">Read requirements carefully and follow formatting rules</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Show Impact</h4>
            <p className="text-sm opacity-90">Clearly demonstrate how funding will create value</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);