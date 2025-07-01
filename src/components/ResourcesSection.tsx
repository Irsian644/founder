import React from 'react';
import { Download, FileText, Users, TrendingUp, DollarSign, CheckCircle, ExternalLink, Lightbulb } from 'lucide-react';
import { 
  generateBusinessPlanTemplate, 
  generatePitchDeckTemplate, 
  generateFinancialModel, 
  generateLegalChecklist, 
  generateMarketResearchTemplate, 
  generateMVPPlanningKit 
} from '../utils/downloadUtils';

const templates = [
  {
    icon: <FileText className="h-8 w-8 text-blue-600" />,
    title: 'Pitch Deck Template',
    desc: 'Professional 12-slide template used by successful founders',
    format: 'JSON Template',
    downloadAction: generatePitchDeckTemplate,
    preview: 'Includes: Problem, Solution, Market, Traction, Team, Financials'
  },
  {
    icon: <Users className="h-8 w-8 text-orange-400" />,
    title: 'Business Plan Template',
    desc: 'Comprehensive business plan template with a focus on your target market',
    format: 'Markdown Template',
    downloadAction: generateBusinessPlanTemplate,
    preview: 'Executive Summary, Market Analysis, Financial Projections'
  },
  {
    icon: <DollarSign className="h-8 w-8 text-blue-600" />,
    title: 'Financial Model Template',
    desc: '3-year financial projection spreadsheet for startups',
    format: 'CSV Template',
    downloadAction: generateFinancialModel,
    preview: 'Revenue forecasts, Cost structure, Cash flow analysis'
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-orange-400" />,
    title: 'Legal Checklist',
    desc: 'Step-by-step legal requirements for new startups',
    format: 'Markdown Checklist',
    downloadAction: generateLegalChecklist,
    preview: 'Registration, Permits, Tax obligations, Employment law'
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
    title: 'Market Research Template',
    desc: 'Framework for analyzing your target market in Albania',
    format: 'CSV Templates',
    downloadAction: generateMarketResearchTemplate,
    preview: 'Customer interviews, Competitor analysis, Market sizing'
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-orange-400" />,
    title: 'MVP Planning Kit',
    desc: 'Tools to plan and validate your minimum viable product',
    format: 'Markdown Guide',
    downloadAction: generateMVPPlanningKit,
    preview: 'Feature prioritization, User stories, Testing framework'
  }
];

const guides = [
  {
    title: 'How to Register Your Startup in Albania',
    desc: 'Complete walkthrough of the QKB registration process',
    readTime: '8 min read',
    url: 'https://qkr.gov.al/en/guide-for-business-registration'
  },
  {
    title: 'Startup Tax Guide',
    desc: 'Understanding tax obligations and optimization strategies',
    readTime: '12 min read',
    url: 'https://www.tatime.gov.al/eng/'
  },
  {
    title: 'Building Your First Team in Albania',
    desc: 'Hiring strategies and employment law for early-stage startups',
    readTime: '10 min read',
    url: 'https://www.ilo.org/dyn/natlex/country_profiles.seam?country=AL'
  },
  {
    title: 'EU Market Entry from Albania',
    desc: 'Expanding your startup to European markets',
    readTime: '15 min read',
    url: 'https://ec.europa.eu/growth/single-market/goods/free-movement-sectors/mutual-recognition_en'
  }
];

export const ResourcesSection: React.FC = () => {
  const handleDownload = async (downloadAction: () => Promise<boolean> | void, templateTitle: string) => {
    try {
      const result = await downloadAction();
      if (result !== false) {
        // Show success message
        const notification = document.createElement('div');
        notification.className = 'fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50';
        notification.textContent = `${templateTitle} downloaded successfully!`;
        document.body.appendChild(notification);
        
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 3000);
      }
    } catch (error) {
      console.error('Download failed:', error);
      alert(`Failed to download ${templateTitle}. Please try again.`);
    }
  };

  const handleConsultationBooking = () => {
    // In a real implementation, this would open a booking system
    window.open('https://calendly.com/how-to-become-a-founder', '_blank');
  };

  return (
    <section id="resources" className="py-24 bg-gradient-to-br from-green-100 via-blue-50 to-purple-100 relative overflow-hidden animate-fade-in">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-green-200 via-blue-100 to-transparent rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-purple-200 via-white to-transparent rounded-full blur-2xl opacity-30" />
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Practical Startup Resources
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Download professional templates, guides, and tools used by successful founders. Everything you need to turn your idea into a thriving business.
          </p>
        </div>

        {/* Downloadable Templates */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <Download className="h-8 w-8 text-green-600" />
            Free Templates & Tools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template, i) => (
              <div key={i} className="bg-white/90 rounded-2xl shadow-lg p-6 border border-green-100 hover:scale-105 transition-all duration-300 animate-fade-in-up glass">
                <div className="flex items-center gap-3 mb-4">
                  {template.icon}
                  <h4 className="text-xl font-bold text-gray-900">{template.title}</h4>
                </div>
                <p className="text-gray-600 mb-3">{template.desc}</p>
                <p className="text-sm text-blue-600 mb-3 font-medium">{template.format}</p>
                <p className="text-sm text-gray-500 mb-4 italic">{template.preview}</p>
                <button
                  onClick={() => handleDownload(template.downloadAction, template.title)}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all flex items-center justify-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download Free
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Practical Guides */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <FileText className="h-8 w-8 text-purple-600" />
            Step-by-Step Guides
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide, i) => (
              <a
                key={i}
                href={guide.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/90 rounded-2xl shadow-lg p-6 border border-purple-100 hover:scale-105 transition-all duration-300 animate-fade-in-up glass group"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {guide.title}
                </h4>
                <p className="text-gray-600 mb-3">{guide.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-purple-600 font-medium">{guide.readTime}</span>
                  <ExternalLink className="h-4 w-4 text-purple-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center shadow-xl animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-4">Need Personalized Help?</h3>
          <p className="text-lg mb-6 opacity-90">
            Book a free 30-minute consultation with our startup experts to discuss your specific needs.
          </p>
          <button 
            onClick={handleConsultationBooking}
            className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow"
          >
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};