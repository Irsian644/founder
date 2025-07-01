import React, { useState } from 'react';
import { MessageSquare, Users, Lightbulb, TrendingUp, AlertCircle, Quote, Star } from 'lucide-react';

const realFounders = [
  {
    name: 'Robert',
    company: 'TechFlow',
    sector: 'FinTech',
    founded: '2022',
    photo: 'https://www.techflow.com/wp-content/uploads/elementor/thumbs/Robert-Baum_website-pwcyci71eivzxjx4m2nns6w5wpth5mhjmdqv8onrmo.png',
    insights: [
      {
        question: "What's the biggest challenge you faced starting up in Albania?",
        answer: "Access to early-stage funding was the hardest part. We had to bootstrap for 18 months before finding our first investor. My advice: start lean and focus on revenue from day one."
      },
      {
        question: "How did you validate your business idea?",
        answer: "We built an MVP in 3 weeks and got 50 potential customers to test it. 30% said they'd pay for it immediately - that's when we knew we had something."
      },
      {
        question: "What would you do differently if starting again?",
        answer: "I'd spend more time on legal setup from the beginning. We had to restructure after 6 months because we didn't plan for international expansion properly."
      }
    ]
  },
  {
    name: 'Geri Muho',
    company: 'GreenTech Solutions',
    sector: 'CleanTech',
    founded: '2021',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ZyWzE6Te-dOz4bwqctxoGQ9rRcl1YZtMJw&s',
    insights: [
      {
        question: "How did you build your first team?",
        answer: "I started with freelancers and interns from University of Tirana. Once we got our first client, I hired them full-time. Building trust early is everything."
      },
      {
        question: "What's your advice for female founders in Albania?",
        answer: "Join the Women in Tech network. The support system is incredible. Also, don't let anyone tell you tech isn't for women - we're changing that narrative."
      },
      {
        question: "How do you balance growth with sustainability?",
        answer: "We measure impact alongside revenue. Every decision goes through our 'triple bottom line' filter: people, planet, profit. It's actually helped us attract better investors."
      }
    ]
  },
  {
    name: 'Dean Celaj',
    company: 'Akademi.al',
    sector: 'EdTech',
    founded: '~2020',
    photo: 'https://via.placeholder.com/150',
    insights: [
      {
        question: 'How did COVID-19 affect your startup?',
        answer: 'The pandemic created an urgent need for remote learning, and we stepped up. Within months, we were supporting hundreds of thousands of students in Albania and Kosovo. Demand for high-quality, local-language content exploded, and our team grew rapidly to meet it.'
      },
      {
        question: 'What\'s the key to scaling in your local market?',
        answer: 'Localization. Our platform is entirely in Albanian, with content tailored to national curricula. International platforms can\'t compete with that level of cultural and educational specificity. We also partner directly with schools and ministries—building trust matters here.'
      },
      {
        question: 'How do you handle competition from international companies?',
        answer: 'We don\'t try to beat them at their own game—we build a better one for our audience. Khan Academy or Coursera don\'t teach in Albanian or follow our national standards. We focus on what our communities truly need.'
      },
      {
        question: 'What has been your proudest milestone so far?',
        answer: 'Reaching over 500,000 students across Albania and Kosovo. It\'s more than numbers—it\'s knowing we made education accessible to kids even in rural areas with no formal classrooms during the lockdowns.'
      },
      {
        question: 'What advice would you give new EdTech founders in emerging markets?',
        answer: 'Don\'t wait for Silicon Valley\'s permission to build. Understand your environment deeply—its schools, parents, teachers—and innovate from the ground up. Big global platforms rarely solve local problems.'
      }
    ]
  }
];

const keyLessons = [
  {
    icon: <Lightbulb className="h-6 w-6 text-yellow-500" />,
    lesson: "Start with a problem you personally experience",
    detail: "All three founders built solutions to problems they faced themselves"
  },
  {
    icon: <Users className="h-6 w-6 text-blue-500" />,
    lesson: "Network early and often",
    detail: "Relationships in Albania's startup ecosystem are crucial for success"
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-green-500" />,
    lesson: "Focus on revenue, not just funding",
    detail: "Sustainable businesses attract better investors and partnerships"
  },
  {
    icon: <AlertCircle className="h-6 w-6 text-orange-500" />,
    lesson: "Plan for legal complexity early",
    detail: "Proper legal structure saves time and money as you scale"
  }
];

export const StartupInsightsSection: React.FC = () => {
  const [activeFounder, setActiveFounder] = useState(0);
  const [activeInsight, setActiveInsight] = useState(0);

  return (
    <section id="startup-insights" className="py-24 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 relative overflow-hidden animate-fade-in">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-indigo-200 via-purple-100 to-transparent rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-200 via-white to-transparent rounded-full blur-2xl opacity-30" />
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight flex items-center justify-center gap-3">
            <MessageSquare className="h-10 w-10 text-indigo-600" />
            Real Founder Insights
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Learn from founders who've built successful startups. These are real interviews with founders who've navigated the challenges you're facing.
          </p>
        </div>

        {/* Founder Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {realFounders.map((founder, i) => (
            <button
              key={i}
              onClick={() => { setActiveFounder(i); setActiveInsight(0); }}
              className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold shadow-lg transition-all duration-300 ${
                activeFounder === i 
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white scale-105' 
                  : 'bg-white/80 text-gray-800 hover:bg-indigo-50 hover:scale-105'
              }`}
            >
              <img 
                src={founder.photo} 
                alt={founder.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-white"
              />
              <div className="text-left">
                <div className="font-bold">{founder.name}</div>
                <div className="text-sm opacity-75">{founder.company}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Founder Profile */}
        <div className="bg-white/90 rounded-3xl shadow-xl p-8 mb-12 glass animate-fade-in-up">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
            <img 
              src={realFounders[activeFounder].photo} 
              alt={realFounders[activeFounder].name}
              className="w-24 h-24 rounded-full object-cover border-4 border-indigo-200 shadow-lg"
            />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900">{realFounders[activeFounder].name}</h3>
              <p className="text-lg text-indigo-600 font-semibold">{realFounders[activeFounder].company}</p>
              <div className="flex items-center gap-4 mt-2 justify-center md:justify-start">
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                  {realFounders[activeFounder].sector}
                </span>
                <span className="text-gray-600 text-sm">Founded {realFounders[activeFounder].founded}</span>
              </div>
            </div>
          </div>

          {/* Insights */}
          <div className="space-y-6">
            {realFounders[activeFounder].insights.map((insight, i) => (
              <div key={i} className="border-l-4 border-indigo-300 pl-6 py-4 bg-indigo-50/50 rounded-r-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-start gap-2">
                  <Quote className="h-5 w-5 text-indigo-500 mt-1 flex-shrink-0" />
                  {insight.question}
                </h4>
                <p className="text-gray-700 leading-relaxed italic">"{insight.answer}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Lessons */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-2">
            <Star className="h-7 w-7 text-yellow-500" />
            Key Lessons from Founders
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyLessons.map((lesson, i) => (
              <div key={i} className="bg-white/90 rounded-2xl shadow-lg p-6 border border-indigo-100 hover:scale-105 transition-transform duration-300 animate-fade-in-up glass">
                <div className="flex items-start gap-4">
                  {lesson.icon}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{lesson.lesson}</h4>
                    <p className="text-gray-600">{lesson.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center shadow-xl animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-4">Are you a founder with insights to share?</h3>
          <p className="text-lg mb-6 opacity-90">
            We'd love to feature your journey and help other entrepreneurs learn from your experience.
          </p>
          <button
            className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors shadow"
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Submit Your Story
          </button>
        </div>
      </div>
    </section>
  );
};