import React, { useState } from 'react';
import { FileText, CheckCircle, Download, Lightbulb, TrendingUp, Users, DollarSign, Target, Calendar } from 'lucide-react';
import { generateBusinessPlanTemplate } from '../utils/downloadUtils';

const sections = [
  {
    icon: <Lightbulb className="h-6 w-6 text-yellow-500" />,
    title: 'Executive Summary',
    desc: 'One-page overview of your entire business',
    tips: ['Write this last, even though it comes first', 'Keep it under 2 pages', 'Include your funding request']
  },
  {
    icon: <Target className="h-6 w-6 text-blue-500" />,
    title: 'Market Analysis',
    desc: 'Research your target market and competition',
    tips: ['Size your market (TAM, SAM, SOM)', 'Analyze 3-5 direct competitors', 'Include local market specifics']
  },
  {
    icon: <Users className="h-6 w-6 text-green-500" />,
    title: 'Organization & Management',
    desc: 'Your team and organizational structure',
    tips: ['Highlight relevant experience', 'Include advisory board', 'Show gaps you plan to fill']
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-purple-500" />,
    title: 'Marketing & Sales',
    desc: 'How you\'ll reach and retain customers',
    tips: ['Define your customer acquisition cost', 'Outline sales process', 'Include digital marketing strategy']
  },
  {
    icon: <DollarSign className="h-6 w-6 text-orange-500" />,
    title: 'Financial Projections',
    desc: '3-year financial forecasts and funding needs',
    tips: ['Be conservative with revenue', 'Include multiple scenarios', 'Show break-even analysis']
  }
];

const commonMistakes = [
  {
    mistake: 'Overly optimistic projections',
    solution: 'Use conservative estimates and show multiple scenarios'
  },
  {
    mistake: 'Ignoring competition',
    solution: 'Acknowledge competitors and explain your differentiation'
  },
  {
    mistake: 'Vague market size',
    solution: 'Use specific data sources and bottom-up calculations'
  },
  {
    mistake: 'No clear revenue model',
    solution: 'Explain exactly how you make money from day one'
  }
];

export const BusinessPlanSection: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);

  const handleDownloadTemplate = async () => {
    const success = await generateBusinessPlanTemplate();
    if (success) {
      // Show success notification
      const notification = document.createElement('div');
      notification.className = 'fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50';
      notification.textContent = 'Business Plan Template downloaded successfully!';
      document.body.appendChild(notification);
      
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 3000);
    }
  };

  const handleBookReview = () => {
    // In a real implementation, this would open a booking/payment system
    window.open('https://calendly.com/how-to-become-a-founder/business-plan-review', '_blank');
  };

  return (
    <section id="business-plan" className="py-24 bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100 relative overflow-hidden animate-fade-in">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-emerald-200 via-teal-100 to-transparent rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-cyan-200 via-white to-transparent rounded-full blur-2xl opacity-30" />
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight flex items-center justify-center gap-3">
            <FileText className="h-10 w-10 text-emerald-600" />
            Business Plan Guide
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            A step-by-step guide to writing a business plan that actually gets results. 
            Based on successful startup examples and investor feedback.
          </p>
        </div>

        {/* Section Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {sections.map((section, i) => (
            <button
              key={i}
              onClick={() => setActiveSection(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeSection === i 
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white scale-105' 
                  : 'bg-white/80 text-gray-800 hover:bg-emerald-50 hover:scale-105'
              }`}
            >
              {section.icon}
              <span className="hidden sm:inline">{section.title}</span>
            </button>
          ))}
        </div>

        {/* Active Section Details */}
        <div className="bg-white/90 rounded-3xl shadow-xl p-8 mb-12 glass animate-fade-in-up">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-emerald-100 rounded-2xl">
              {sections[activeSection].icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{sections[activeSection].title}</h3>
              <p className="text-gray-600">{sections[activeSection].desc}</p>
            </div>
          </div>
          
          <div className="bg-emerald-50 rounded-2xl p-6">
            <h4 className="text-lg font-semibold text-emerald-800 mb-4 flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Pro Tips for This Section
            </h4>
            <ul className="space-y-2">
              {sections[activeSection].tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-emerald-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Avoid These Common Mistakes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonMistakes.map((item, i) => (
              <div key={i} className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-2xl shadow-lg">
                <h4 className="text-lg font-semibold text-red-800 mb-2">❌ {item.mistake}</h4>
                <p className="text-red-700">✅ {item.solution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Download Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Download className="h-6 w-6" />
              Business Plan Template
            </h3>
            <p className="mb-6 opacity-90">
              Download our comprehensive business plan template, pre-filled with market examples and investor-approved formatting.
            </p>
            <ul className="space-y-2 mb-6 text-sm opacity-90">
              <li>✓ 25-page professional template</li>
              <li>✓ Financial model included</li>
              <li>✓ Market research tips</li>
              <li>✓ Investor pitch integration</li>
            </ul>
            <button 
              onClick={handleDownloadTemplate}
              className="bg-white text-emerald-700 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors shadow"
            >
              Download Free Template
            </button>
          </div>

          <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Calendar className="h-6 w-6" />
              Expert Review Service
            </h3>
            <p className="mb-6 opacity-90">
              Get your business plan reviewed by experienced founders and investors before submitting to funders.
            </p>
            <ul className="space-y-2 mb-6 text-sm opacity-90">
              <li>✓ 48-hour turnaround</li>
              <li>✓ Detailed feedback report</li>
              <li>✓ 30-minute consultation call</li>
              <li>✓ Investor readiness score</li>
            </ul>
            <button 
              onClick={handleBookReview}
              className="bg-white text-teal-700 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors shadow"
            >
              Book Review - €99
            </button>
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-white/90 rounded-2xl shadow-xl p-8 text-center glass animate-fade-in-up">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Success Stories</h3>
          <p className="text-gray-600 mb-6">
            "Using this business plan template helped us secure €150,000 in seed funding. 
            The financial model was exactly what investors wanted to see."
          </p>
          <div className="flex items-center justify-center gap-4">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" 
              alt="Founder"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="text-left">
              <div className="font-semibold text-gray-900">Robert</div>
              <div className="text-sm text-gray-600">TechFlow</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};