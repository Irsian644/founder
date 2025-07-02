import React from 'react';
import { Banknote, Globe, Users, Zap, ArrowRight, CheckCircle, AlertTriangle, Building2, Calendar, DollarSign, Target, Award, TrendingUp } from 'lucide-react';
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
    verified: true,
    category: 'Government',
    difficulty: 'Medium'
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: 'EBRD "Go Digital" Program',
    desc: 'Regional grants for digitalization and green tech startups in Western Balkans.',
    eligibility: 'SMEs and startups in digital/green sectors',
    amount: '€25,000 - €100,000',
    deadline: 'Q2 2025',
    link: 'https://www.ebrd.com/go-digital',
    verified: true,
    category: 'International',
    difficulty: 'High'
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: 'EU4Innovation Challenge',
    desc: 'Innovation grants for startups addressing social challenges.',
    eligibility: 'Startups with social impact focus, EU association countries',
    amount: '€15,000 - €75,000',
    deadline: 'March 2025',
    link: 'https://eu4innovation.eu',
    verified: true,
    category: 'EU Program',
    difficulty: 'High'
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: 'Startup Accelerator',
    desc: 'Local accelerator program with funding and mentorship.',
    eligibility: 'Early-stage startups, all sectors',
    amount: '€5,000 - €25,000 + equity',
    deadline: 'Bi-annual cohorts',
    link: 'https://startupalb.com',
    verified: true,
    category: 'Accelerator',
    difficulty: 'Medium'
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
    forNGOs: true,
    category: 'NGO Only',
    difficulty: 'Medium'
  },
  {
    icon: <Users className="h-8 w-8 text-purple-600" />,
    title: 'Visegrad Fund',
    desc: 'Grants for cultural and educational NGO projects.',
    eligibility: 'NGOs, cultural organizations, educational institutions',
    amount: '€5,000 - €40,000',
    deadline: 'Multiple deadlines yearly',
    link: 'https://www.visegradfund.org',
    forNGOs: true,
    category: 'NGO Only',
    difficulty: 'High'
  }
];

const applicationSteps = [
  {
    step: 1,
    title: 'Research & Eligibility Check',
    desc: 'Verify you meet all requirements before applying',
    icon: <CheckCircle className="h-6 w-6 text-green-500" />,
    details: ['Check eligibility criteria', 'Review application guidelines', 'Gather required documents']
  },
  {
    step: 2,
    title: 'Prepare Documentation',
    desc: 'Business plan, financial projections, team CVs',
    icon: <CheckCircle className="h-6 w-6 text-blue-500" />,
    details: ['Write project description', 'Prepare budget breakdown', 'Include team information']
  },
  {
    step: 3,
    title: 'Submit Application',
    desc: 'Follow guidelines exactly, submit before deadline',
    icon: <CheckCircle className="h-6 w-6 text-orange-500" />,
    details: ['Submit complete application', 'Get confirmation receipt', 'Track application status']
  },
  {
    step: 4,
    title: 'Follow Up',
    desc: 'Track application status and respond to requests',
    icon: <CheckCircle className="h-6 w-6 text-purple-500" />,
    details: ['Answer evaluator questions', 'Prepare for presentations', 'Provide additional documents']
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Medium': return 'bg-yellow-100 text-yellow-800';
    case 'High': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Government': return 'bg-blue-100 text-blue-800';
    case 'International': return 'bg-purple-100 text-purple-800';
    case 'EU Program': return 'bg-indigo-100 text-indigo-800';
    case 'Accelerator': return 'bg-orange-100 text-orange-800';
    case 'NGO Only': return 'bg-purple-100 text-purple-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export const GrantsSection: React.FC = () => (
  <section id="grants" className="py-32 bg-gradient-to-br from-blue-50 via-white to-gray-50 relative overflow-hidden animate-fade-in">
    {/* Enhanced Background */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-100/60 via-blue-50/40 to-transparent rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-gray-100/50 via-white to-transparent rounded-full blur-2xl animate-float" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full blur-3xl animate-float-delayed" />
    </div>
    
    <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      {/* Enhanced Header */}
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
        <div className="lg:w-1/2">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6 animate-fade-in-up">
            <CheckCircle className="h-4 w-4" />
            Verified Funding Sources
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            <span className="flex items-center gap-4 mb-2">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl">
                <Banknote className="h-12 w-12 text-white" />
              </div>
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
              Funding Opportunities
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
            Verified funding sources for new startups. We've researched eligibility requirements and application deadlines to save you time.
          </p>
        </div>
        
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-gray-200/20 rounded-3xl blur-xl transform rotate-6" />
            <img
              src={grantsImg}
              alt="Funding Opportunities"
              className="relative w-80 h-80 object-cover rounded-3xl shadow-2xl border-4 border-white/50 animate-float"
              loading="lazy"
            />
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
              <DollarSign className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Startup-Specific Grants */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-12">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">For Startups & Businesses</h3>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {startupGrants.map((grant, i) => (
            <div key={i} className="group relative hover-lift">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg p-8 border border-gray-100 hover:border-blue-200 transition-all duration-300">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-blue-50 rounded-2xl group-hover:bg-blue-100 transition-colors">
                    {grant.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                        {grant.title}
                      </h4>
                      {grant.verified && (
                        <CheckCircle className="h-5 w-5 text-green-500" title="Verified information" />
                      )}
                    </div>
                    <div className="flex gap-2 mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(grant.category)}`}>
                        {grant.category}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(grant.difficulty)}`}>
                        {grant.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <p className="text-gray-600 mb-6 leading-relaxed">{grant.desc}</p>
                
                {/* Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <span className="text-sm font-medium text-gray-700">Amount:</span>
                    <span className="text-sm text-blue-600 font-semibold">{grant.amount}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <span className="text-sm font-medium text-gray-700">Deadline:</span>
                    <span className="text-sm text-orange-600 font-semibold">{grant.deadline}</span>
                  </div>
                </div>
                
                {/* Eligibility */}
                <div className="p-4 bg-blue-50 rounded-xl mb-6">
                  <h5 className="text-sm font-semibold text-blue-800 mb-2">Eligibility:</h5>
                  <p className="text-sm text-blue-700">{grant.eligibility}</p>
                </div>
                
                {/* CTA */}
                <a
                  href={grant.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-2xl font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-3 group-hover:scale-105"
                >
                  Apply Now
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NGO Grants (Clearly Separated) */}
      <div className="mb-20">
        <div className="bg-purple-50 border-l-4 border-purple-400 p-6 mb-8 rounded-r-2xl">
          <div className="flex items-center gap-3 mb-3">
            <AlertTriangle className="h-6 w-6 text-purple-600" />
            <h3 className="text-2xl font-bold text-purple-800">For NGOs & Non-Profits Only</h3>
          </div>
          <p className="text-purple-700 text-lg">
            These grants are specifically for registered NGOs and civil society organizations, 
            <strong> not for commercial startups or businesses</strong>.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ngoGrants.map((grant, i) => (
            <div key={i} className="group relative hover-lift">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-purple-50/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 border border-purple-200 hover:border-purple-300 transition-all duration-300">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-purple-100 rounded-2xl group-hover:bg-purple-200 transition-colors">
                    {grant.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-purple-900 mb-2">{grant.title}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(grant.category)}`}>
                      {grant.category}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <p className="text-purple-700 mb-6 leading-relaxed">{grant.desc}</p>
                
                {/* Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-3 bg-purple-100 rounded-xl">
                    <span className="text-sm font-medium text-purple-700">Amount:</span>
                    <span className="text-sm text-purple-600 font-semibold">{grant.amount}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-100 rounded-xl">
                    <span className="text-sm font-medium text-purple-700">Deadline:</span>
                    <span className="text-sm text-orange-600 font-semibold">{grant.deadline}</span>
                  </div>
                </div>
                
                {/* Eligibility */}
                <div className="p-4 bg-purple-100 rounded-xl mb-6">
                  <h5 className="text-sm font-semibold text-purple-800 mb-2">Eligibility:</h5>
                  <p className="text-sm text-purple-700">{grant.eligibility}</p>
                </div>
                
                {/* CTA */}
                <a
                  href={grant.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 rounded-2xl font-bold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 flex items-center justify-center gap-3 group-hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Application Process */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-12">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">How to Apply Successfully</h3>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {applicationSteps.map((step, i) => (
            <div key={i} className="relative group">
              {/* Connection Line */}
              {i < applicationSteps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-8 h-0.5 bg-gradient-to-r from-blue-300 to-gray-300 z-0" />
              )}
              
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg p-8 text-center border border-gray-100 hover:border-blue-200 transition-all duration-300 hover-lift">
                {/* Step Number */}
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {step.step}
                    </div>
                    <div className="absolute -bottom-2 -right-2 p-1 bg-white rounded-full shadow-md">
                      {step.icon}
                    </div>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600 mb-4">{step.desc}</p>
                
                {/* Details */}
                <div className="space-y-2">
                  {step.details.map((detail, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Success Tips */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white text-center shadow-xl animate-fade-in-up">
        <h3 className="text-3xl font-bold mb-6">💡 Pro Tips for Grant Success</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div>
            <h4 className="font-semibold mb-3 text-xl">Start Early</h4>
            <p className="opacity-90">Begin applications 2-3 months before deadlines</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-xl">Follow Guidelines</h4>
            <p className="opacity-90">Read requirements carefully and follow formatting rules</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-xl">Show Impact</h4>
            <p className="opacity-90">Clearly demonstrate how funding will create value</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);