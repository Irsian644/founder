import React, { useState } from 'react';
import { FileText, CheckCircle, Download, Lightbulb, TrendingUp, Users, DollarSign, Target, Calendar, Star, Zap } from 'lucide-react';
import { generateBusinessPlanTemplate } from '../utils/downloadUtils';

const sections = [
  {
    icon: <Lightbulb className="h-7 w-7 text-amber-500" />,
    title: 'Executive Summary',
    desc: 'One-page overview of your entire business',
    tips: ['Write this last, even though it comes first', 'Keep it under 2 pages', 'Include your funding request'],
    color: 'from-amber-400 to-amber-500'
  },
  {
    icon: <Target className="h-7 w-7 text-blue-500" />,
    title: 'Market Analysis',
    desc: 'Research your target market and competition',
    tips: ['Size your market (TAM, SAM, SOM)', 'Analyze 3-5 direct competitors', 'Include local market specifics'],
    color: 'from-blue-400 to-blue-500'
  },
  {
    icon: <Users className="h-7 w-7 text-emerald-500" />,
    title: 'Organization & Management',
    desc: 'Your team and organizational structure',
    tips: ['Highlight relevant experience', 'Include advisory board', 'Show gaps you plan to fill'],
    color: 'from-emerald-400 to-emerald-500'
  },
  {
    icon: <TrendingUp className="h-7 w-7 text-purple-500" />,
    title: 'Marketing & Sales',
    desc: 'How you\'ll reach and retain customers',
    tips: ['Define your customer acquisition cost', 'Outline sales process', 'Include digital marketing strategy'],
    color: 'from-purple-400 to-purple-500'
  },
  {
    icon: <DollarSign className="h-7 w-7 text-orange-500" />,
    title: 'Financial Projections',
    desc: '3-year financial forecasts and funding needs',
    tips: ['Be conservative with revenue', 'Include multiple scenarios', 'Show break-even analysis'],
    color: 'from-orange-400 to-orange-500'
  }
];

const commonMistakes = [
  {
    mistake: 'Overly optimistic projections',
    solution: 'Use conservative estimates and show multiple scenarios',
    icon: <TrendingUp className="h-5 w-5 text-red-500" />
  },
  {
    mistake: 'Ignoring competition',
    solution: 'Acknowledge competitors and explain your differentiation',
    icon: <Users className="h-5 w-5 text-red-500" />
  },
  {
    mistake: 'Vague market size',
    solution: 'Use specific data sources and bottom-up calculations',
    icon: <Target className="h-5 w-5 text-red-500" />
  },
  {
    mistake: 'No clear revenue model',
    solution: 'Explain exactly how you make money from day one',
    icon: <DollarSign className="h-5 w-5 text-red-500" />
  }
];

export const BusinessPlanSection: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);

  const handleDownloadTemplate = async () => {
    const success = await generateBusinessPlanTemplate();
    if (success) {
      const notification = document.createElement('div');
      notification.className = 'fixed top-4 right-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-4 rounded-2xl shadow-2xl z-50 flex items-center gap-3';
      notification.innerHTML = `
        <div class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
        </div>
        Business Plan Template downloaded successfully!
      `;
      document.body.appendChild(notification);
      
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 4000);
    }
  };

  const handleBookReview = () => {
    window.open('https://calendly.com/how-to-become-a-founder/business-plan-review', '_blank');
  };

  return (
    <section id="business-plan" className="py-32 bg-gradient-to-br from-emerald-50 via-teal-50/50 to-cyan-50/50 relative overflow-hidden animate-fade-in">
      {/* Enhanced Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-emerald-200/40 via-teal-100/30 to-transparent rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-cyan-200/30 via-white to-transparent rounded-full blur-2xl animate-float" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-emerald-300/20 to-transparent rounded-full blur-3xl animate-float-delayed" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 text-sm font-semibold mb-6 animate-fade-in-up">
            <Star className="h-4 w-4 text-yellow-500" />
            Investor-Approved Format
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight text-shadow flex items-center justify-center gap-4">
            <div className="p-4 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-3xl">
              <FileText className="h-12 w-12 text-white" />
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
              Business Plan Guide
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-medium leading-relaxed">
            A step-by-step guide to writing a business plan that actually gets results.
            <br className="hidden md:block" />
            <span className="text-gray-800 font-semibold">Based on successful startup examples and investor feedback.</span>
          </p>
        </div>

        {/* Enhanced Section Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {sections.map((section, i) => (
            <button
              key={i}
              onClick={() => setActiveSection(i)}
              className={`group flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all duration-300 ${
                activeSection === i 
                  ? `bg-gradient-to-r ${section.color} text-white scale-105 shadow-2xl` 
                  : 'glass text-gray-800 hover:scale-105 border border-white/40'
              }`}
            >
              <div className={`p-2 rounded-xl ${activeSection === i ? 'bg-white/20' : 'bg-gray-100'}`}>
                {section.icon}
              </div>
              <span className="hidden sm:inline text-lg">{section.title}</span>
            </button>
          ))}
        </div>

        {/* Enhanced Active Section Details */}
        <div className="glass-strong p-10 mb-16 border border-white/40 animate-fade-in-up">
          <div className="flex items-start gap-6 mb-8">
            <div className={`p-4 bg-gradient-to-r ${sections[activeSection].color} rounded-3xl shadow-lg`}>
              {sections[activeSection].icon}
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-3">{sections[activeSection].title}</h3>
              <p className="text-xl text-gray-600 leading-relaxed">{sections[activeSection].desc}</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200">
            <h4 className="text-xl font-bold text-emerald-800 mb-6 flex items-center gap-3">
              <div className="p-2 bg-emerald-200 rounded-xl">
                <CheckCircle className="h-6 w-6 text-emerald-700" />
              </div>
              Pro Tips for This Section
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sections[activeSection].tips.map((tip, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white/60 rounded-xl border border-emerald-200">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 flex-shrink-0" />
                  <span className="text-emerald-800 font-medium">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Common Mistakes */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-12">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Avoid These Common Mistakes</h3>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commonMistakes.map((item, i) => (
              <div key={i} className="glass-strong p-8 border-l-4 border-red-400 hover-lift">
                <div className="flex items-start gap-4 mb-4">
                  {item.icon}
                  <h4 className="text-xl font-bold text-red-800">❌ {item.mistake}</h4>
                </div>
                <p className="text-green-700 font-medium pl-9">✅ {item.solution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Download Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative glass-strong p-10 text-center border border-white/40">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 text-sm font-medium mb-4">
                  <Download className="h-4 w-4" />
                  Free Template
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Plan Template</h3>
                <p className="text-gray-600 mb-6">
                  Download our comprehensive business plan template, pre-filled with market examples and investor-approved formatting.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
                <div className="flex items-center gap-2 text-emerald-700">
                  <CheckCircle className="h-4 w-4" />
                  25-page template
                </div>
                <div className="flex items-center gap-2 text-emerald-700">
                  <CheckCircle className="h-4 w-4" />
                  Financial model
                </div>
                <div className="flex items-center gap-2 text-emerald-700">
                  <CheckCircle className="h-4 w-4" />
                  Market research tips
                </div>
                <div className="flex items-center gap-2 text-emerald-700">
                  <CheckCircle className="h-4 w-4" />
                  Investor integration
                </div>
              </div>
              
              <button 
                onClick={handleDownloadTemplate}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-2xl font-bold text-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3"
              >
                <Download className="h-5 w-5" />
                Download Free Template
              </button>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative glass-strong p-10 text-center border border-white/40">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full text-teal-700 text-sm font-medium mb-4">
                  <Calendar className="h-4 w-4" />
                  Expert Review
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Review Service</h3>
                <p className="text-gray-600 mb-6">
                  Get your business plan reviewed by experienced founders and investors before submitting to funders.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
                <div className="flex items-center gap-2 text-teal-700">
                  <CheckCircle className="h-4 w-4" />
                  48-hour turnaround
                </div>
                <div className="flex items-center gap-2 text-teal-700">
                  <CheckCircle className="h-4 w-4" />
                  Detailed feedback
                </div>
                <div className="flex items-center gap-2 text-teal-700">
                  <CheckCircle className="h-4 w-4" />
                  30-min consultation
                </div>
                <div className="flex items-center gap-2 text-teal-700">
                  <CheckCircle className="h-4 w-4" />
                  Readiness score
                </div>
              </div>
              
              <button 
                onClick={handleBookReview}
                className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-4 rounded-2xl font-bold text-lg hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3"
              >
                <Calendar className="h-5 w-5" />
                Book Review - €99
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Success Story */}
        <div className="glass-strong p-10 text-center border border-white/40 animate-fade-in-up">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full text-yellow-700 text-sm font-medium mb-4">
              <Star className="h-4 w-4" />
              Success Story
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Real Results</h3>
          </div>
          
          <blockquote className="text-xl text-gray-600 mb-8 italic max-w-3xl mx-auto leading-relaxed">
            "Using this business plan template helped us secure €150,000 in seed funding. 
            The financial model was exactly what investors wanted to see, and the structure made our pitch so much clearer."
          </blockquote>
          
          <div className="flex items-center justify-center gap-6">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" 
              alt="Founder"
              className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div className="text-left">
              <div className="font-bold text-gray-900 text-lg">Robert</div>
              <div className="text-gray-600">Founder, TechFlow</div>
              <div className="text-sm text-emerald-600 font-medium">€150K Raised</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};