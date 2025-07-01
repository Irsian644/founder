import React from 'react';
import { Download, FileText, Users, TrendingUp, DollarSign, CheckCircle, ExternalLink, Lightbulb, Star, Zap } from 'lucide-react';
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
    preview: 'Includes: Problem, Solution, Market, Traction, Team, Financials',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'from-blue-50 to-blue-100'
  },
  {
    icon: <Users className="h-8 w-8 text-orange-500" />,
    title: 'Business Plan Template',
    desc: 'Comprehensive business plan template with a focus on your target market',
    format: 'Markdown Template',
    downloadAction: generateBusinessPlanTemplate,
    preview: 'Executive Summary, Market Analysis, Financial Projections',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'from-orange-50 to-orange-100'
  },
  {
    icon: <DollarSign className="h-8 w-8 text-emerald-600" />,
    title: 'Financial Model Template',
    desc: '3-year financial projection spreadsheet for startups',
    format: 'CSV Template',
    downloadAction: generateFinancialModel,
    preview: 'Revenue forecasts, Cost structure, Cash flow analysis',
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'from-emerald-50 to-emerald-100'
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-purple-600" />,
    title: 'Legal Checklist',
    desc: 'Step-by-step legal requirements for new startups',
    format: 'Markdown Checklist',
    downloadAction: generateLegalChecklist,
    preview: 'Registration, Permits, Tax obligations, Employment law',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'from-purple-50 to-purple-100'
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-pink-600" />,
    title: 'Market Research Template',
    desc: 'Framework for analyzing your target market in Albania',
    format: 'CSV Templates',
    downloadAction: generateMarketResearchTemplate,
    preview: 'Customer interviews, Competitor analysis, Market sizing',
    color: 'from-pink-500 to-pink-600',
    bgColor: 'from-pink-50 to-pink-100'
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-amber-600" />,
    title: 'MVP Planning Kit',
    desc: 'Tools to plan and validate your minimum viable product',
    format: 'Markdown Guide',
    downloadAction: generateMVPPlanningKit,
    preview: 'Feature prioritization, User stories, Testing framework',
    color: 'from-amber-500 to-amber-600',
    bgColor: 'from-amber-50 to-amber-100'
  }
];

const guides = [
  {
    title: 'How to Register Your Startup in Albania',
    desc: 'Complete walkthrough of the QKB registration process',
    readTime: '8 min read',
    url: 'https://qkr.gov.al/en/guide-for-business-registration',
    icon: <FileText className="h-5 w-5 text-blue-600" />
  },
  {
    title: 'Startup Tax Guide',
    desc: 'Understanding tax obligations and optimization strategies',
    readTime: '12 min read',
    url: 'https://www.tatime.gov.al/eng/',
    icon: <DollarSign className="h-5 w-5 text-emerald-600" />
  },
  {
    title: 'Building Your First Team in Albania',
    desc: 'Hiring strategies and employment law for early-stage startups',
    readTime: '10 min read',
    url: 'https://www.ilo.org/dyn/natlex/country_profiles.seam?country=AL',
    icon: <Users className="h-5 w-5 text-orange-500" />
  },
  {
    title: 'EU Market Entry from Albania',
    desc: 'Expanding your startup to European markets',
    readTime: '15 min read',
    url: 'https://ec.europa.eu/growth/single-market/goods/free-movement-sectors/mutual-recognition_en',
    icon: <TrendingUp className="h-5 w-5 text-purple-600" />
  }
];

export const ResourcesSection: React.FC = () => {
  const handleDownload = async (downloadAction: () => Promise<boolean> | void, templateTitle: string) => {
    try {
      const result = await downloadAction();
      if (result !== false) {
        // Show success message
        const notification = document.createElement('div');
        notification.className = 'fixed top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 rounded-2xl shadow-2xl z-50 flex items-center gap-3';
        notification.innerHTML = `
          <div class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
          </div>
          ${templateTitle} downloaded successfully!
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 4000);
      }
    } catch (error) {
      console.error('Download failed:', error);
      alert(`Failed to download ${templateTitle}. Please try again.`);
    }
  };

  const handleConsultationBooking = () => {
    window.open('https://calendly.com/how-to-become-a-founder', '_blank');
  };

  return (
    <section id="resources" className="py-32 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/50 relative overflow-hidden animate-fade-in">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-200/40 via-purple-100/30 to-transparent rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-orange-200/30 via-pink-100/20 to-transparent rounded-full blur-2xl animate-float" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-200/20 to-transparent rounded-full blur-3xl animate-float-delayed" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold mb-6 animate-fade-in-up">
            <Star className="h-4 w-4 text-yellow-500" />
            500+ Downloads This Month
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight text-shadow">
            Practical Startup
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 animate-gradient-x">
              Resources
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-medium leading-relaxed">
            Download professional templates, guides, and tools used by successful founders. 
            <br className="hidden md:block" />
            <span className="text-gray-800 font-semibold">Everything you need to turn your idea into a thriving business.</span>
          </p>
        </div>

        {/* Enhanced Templates Grid */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl">
                <Download className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Free Templates & Tools</h3>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {templates.map((template, i) => (
              <div key={i} className="group relative hover-lift">
                <div className={`absolute inset-0 bg-gradient-to-br ${template.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative glass-strong p-8 h-full border border-white/40 hover:border-white/60 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 bg-gradient-to-r ${template.color} rounded-2xl shadow-lg`}>
                      {template.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                        {template.title}
                      </h4>
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                        {template.format}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{template.desc}</p>
                  <p className="text-sm text-gray-500 mb-6 italic border-l-2 border-gray-200 pl-3">
                    {template.preview}
                  </p>
                  
                  <button
                    onClick={() => handleDownload(template.downloadAction, template.title)}
                    className={`w-full bg-gradient-to-r ${template.color} text-white py-4 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group-hover:scale-105`}
                  >
                    <Download className="h-5 w-5 group-hover:animate-bounce" />
                    Download Free
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Guides Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Step-by-Step Guides</h3>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guides.map((guide, i) => (
              <a
                key={i}
                href={guide.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-strong p-8 border border-white/40 hover:border-white/60 transition-all duration-300 hover-lift"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-gray-100 rounded-xl group-hover:bg-gray-200 transition-colors">
                    {guide.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {guide.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{guide.desc}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-sm font-medium text-purple-600">{guide.readTime}</span>
                  <ExternalLink className="h-5 w-5 text-purple-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Enhanced CTA */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 rounded-3xl blur-xl opacity-20" />
          <div className="relative glass-strong p-12 text-center border border-white/40">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-4">
                <Star className="h-4 w-4 text-yellow-400" />
                Free 30-Minute Session
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Need Personalized Help?
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Book a free consultation with our startup experts to discuss your specific needs and get tailored advice.
              </p>
            </div>
            
            <button 
              onClick={handleConsultationBooking}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
            >
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                <Star className="h-4 w-4" />
              </div>
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};