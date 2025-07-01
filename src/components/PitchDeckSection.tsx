import React from 'react';
import { FileText, Lightbulb, Users, TrendingUp, DollarSign, CheckCircle, ArrowRight, Download } from 'lucide-react';
import pitchImg from '../Foto_protik/WhatsApp Image 2025-06-20 at 09.58.49 (1).jpeg';
import { generatePitchDeckTemplate } from '../utils/downloadUtils';

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

export const PitchDeckSection: React.FC = () => {
  const handleDownloadTemplate = async () => {
    const success = await generatePitchDeckTemplate();
    if (success) {
      // Show success notification
      const notification = document.createElement('div');
      notification.className = 'fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50';
      notification.textContent = 'Pitch Deck Template downloaded successfully!';
      document.body.appendChild(notification);
      
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 3000);
    }
  };

  const handleViewExamples = () => {
    // Open a page with real pitch deck examples
    window.open('https://www.slideshare.net/PitchDeckCoach/pitch-deck-examples', '_blank');
  };

  return (
    <section id="pitch-deck" className="py-24 bg-gradient-to-br from-blue-100 via-white to-blue-200 relative overflow-hidden animate-fade-in">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-200 via-blue-100 to-transparent rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-blue-200 via-white to-transparent rounded-full blur-2xl opacity-30" />
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
            <div key={i} className="bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-blue-100 hover:scale-105 transition-transform duration-300 animate-fade-in-up glass z-10">
              {e.icon}
              <h3 className="text-xl font-bold text-gray-900 mb-2 mt-4">{e.title}</h3>
              <p className="text-gray-600 mb-2">{e.desc}</p>
            </div>
          ))}
        </div>
        
        {/* Download and Examples Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-gradient-to-r from-blue-600 to-orange-400 rounded-2xl p-8 text-white shadow-xl flex flex-col items-center gap-4 animate-fade-in-up glass">
            <h3 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
              <Download className="h-6 w-6" />
              Download Pitch Deck Template
            </h3>
            <p className="text-center opacity-90 mb-4 text-gray-900">
              Get our professional pitch deck template with detailed slide-by-slide guidance and real startup examples.
            </p>
            <ul className="text-sm opacity-90 mb-4 text-center text-gray-900">
              <li>✓ 12 essential slides</li>
              <li>✓ Investor-approved format</li>
              <li>✓ Market examples</li>
              <li>✓ Presentation tips included</li>
            </ul>
            <button 
              onClick={handleDownloadTemplate}
              className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow"
            >
              <Download className="h-5 w-5 inline mr-2" />
              Download Free Template
            </button>
          </div>

          <div className="bg-gradient-to-r from-orange-400 to-purple-600 rounded-2xl p-8 text-white shadow-xl flex flex-col items-center gap-4 animate-fade-in-up glass">
            <h3 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
              <ArrowRight className="h-6 w-6" />
              View Successful Examples
            </h3>
            <p className="text-center opacity-90 mb-4 text-gray-900">
              Study pitch decks from successful startups that raised millions in funding.
            </p>
            <ul className="text-sm opacity-90 mb-4 text-center text-gray-900">
              <li>✓ Real funded startups</li>
              <li>✓ Different industries</li>
              <li>✓ Various funding stages</li>
              <li>✓ Learn from the best</li>
            </ul>
            <button 
              onClick={handleViewExamples}
              className="bg-white text-orange-700 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors shadow"
            >
              <ArrowRight className="h-5 w-5 inline mr-2" />
              View Examples
            </button>
          </div>
        </div>

        {/* Pro Tips Section */}
        <div className="bg-white/90 rounded-2xl shadow-xl p-8 glass animate-fade-in-up">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center gap-2">
            <CheckCircle className="h-7 w-7 text-green-500" />
            Pro Tips for Pitch Success
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">10</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">10-Minute Rule</h4>
              <p className="text-gray-600 text-sm">Keep your pitch to 10 minutes max, leaving time for Q&A</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Tell a Story</h4>
              <p className="text-gray-600 text-sm">Structure as: Problem → Solution → Opportunity</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">∞</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Practice</h4>
              <p className="text-gray-600 text-sm">Rehearse until you can pitch without slides</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};