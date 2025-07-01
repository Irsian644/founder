import React from 'react';
import { Rocket, Users, Lightbulb, Code, TrendingUp, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <Lightbulb className="h-8 w-8 text-yellow-400" />, 
    title: 'The Spark',
    desc: 'It started with a simple question: "Why isn\'t there an easier way for founders to get real, actionable help?" That curiosity became our mission.'
  },
  {
    icon: <Users className="h-8 w-8 text-blue-500" />, 
    title: 'Building the Team',
    desc: 'A couple of friends with big dreams and different skills teamed up, united by a passion for helping other beginners like us.'
  },
  {
    icon: <Code className="h-8 w-8 text-fuchsia-500" />, 
    title: 'First Lines of Code',
    desc: 'We built our first prototype in evenings and weekends, learning as we went and focusing on what real founders struggle with most.'
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-orange-400" />, 
    title: 'First Users & Feedback',
    desc: 'We shared Code Master with a handful of early users. Their feedback — both the praise and the tough love — shaped every update.'
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-green-500" />, 
    title: 'Today & What\'s Next',
    desc: 'We\'re still at the beginning, but every day brings new lessons and a growing community. We\'re excited to keep building, learning, and helping others on the same journey!'
  },
];

export const StartupStorySection: React.FC = () => (
  <section id="startup-story" className="py-20 px-4 bg-gradient-to-br from-blue-100 via-white to-blue-200 animate-fade-in relative overflow-hidden">
    <div className="absolute -top-24 -right-24 w-72 h-72 bg-gradient-to-br from-blue-200 via-blue-100 to-white rounded-full blur-3xl opacity-20 pointer-events-none animate-float" />
    <div className="max-w-2xl mx-auto rounded-3xl shadow-xl glass p-8 md:p-12 flex flex-col gap-8 relative z-10">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center animate-fade-in-up flex items-center justify-center gap-3">
        <Rocket className="h-9 w-9 text-orange-400 animate-float" />
        How This Startup Was Created
      </h2>
      <p className="text-lg text-blue-700 text-center max-w-xl mx-auto animate-fade-in-up">
        Every startup has a story. Here\'s how <a href="https://delightful-gelato-6f6f1a.netlify.app/" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-orange-500 transition-colors">Code Master</a> began — and where we hope to go next.
      </p>
      <ol className="relative border-l-4 border-orange-200 pl-6 flex flex-col gap-8 mt-6 animate-fade-in-up">
        {steps.map((step, i) => (
          <li key={i} className="flex items-start gap-4 group">
            <div className="flex-shrink-0 mt-1 animate-float">{step.icon}</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-orange-500 transition-colors">{step.title}</h3>
              <p className="text-gray-700 text-base md:text-lg">{step.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
); 