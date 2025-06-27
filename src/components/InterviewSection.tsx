import React, { useState } from 'react';
import { MessageSquareText, UserCircle2, FileText, Video, Linkedin, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const founders = [
  {
    name: 'Bret Taylor (Sierra)',
    icon: <UserCircle2 className="h-7 w-7 text-blue-600" />,
    color: 'from-blue-200 to-blue-50',
    link: 'https://www.youtube.com/watch?v=En5cSXgGvZM&ab_channel=Lenny%27sPodcast',
    questions: [
      {
        q: "What's the biggest challenge you've faced scaling your startup?",
        a: "Balancing the need for robust infrastructure while staying agile enough to respond quickly to user feedback.",
      },
      {
        q: "How do you prioritize product features in an early-stage startup?",
        a: "We focus on impact versus effort, and continuously validate priorities with real users.",
      },
      {
        q: "What advice do you have for startups entering the AI space?",
        a: "Know your AI's limitations and design to augment humans, not replace them.",
      },
      {
        q: "How do you maintain innovation while managing technical risks?",
        a: "Encourage experimentation but have strong testing and monitoring in place.",
      },
      {
        q: "What role does customer feedback play in your startup's growth?",
        a: "It's central — without user input, you risk building something no one wants.",
      },
    ],
  },
  {
    name: 'Michael Truell (Video Interview)',
    icon: <Video className="h-7 w-7 text-orange-500" />,
    color: 'from-orange-100 to-fuchsia-100',
    link: 'https://www.youtube.com/watch?v=4n5u_xq_czc&ab_channel=Notion',
    questions: [
      {
        q: "What inspired the creation of Cursor as a startup?",
        a: "Frustration with traditional coding complexity sparked the idea to build AI-assisted programming tools.",
      },
      {
        q: "How do you balance AI automation and human control in your product?",
        a: "AI handles repetitive tasks, but humans decide intent and review output carefully.",
      },
      {
        q: "Why did you choose to fork VS Code for your startup product?",
        a: "To gain full control and deeply integrate AI beyond what extensions allow.",
      },
      {
        q: "How do you see the startup ecosystem evolving with AI?",
        a: "Developers are moving from typing code to instructing AI agents — a big shift in workflows.",
      },
      {
        q: "What's the biggest startup challenge you face today?",
        a: "Ensuring AI-generated code quality and gaining user trust in an emerging technology.",
      },
    ],
  },
  {
    name: 'Michael Truell (LinkedIn Article)',
    icon: <Linkedin className="h-7 w-7 text-fuchsia-600" />,
    color: 'from-fuchsia-100 to-blue-100',
    link: 'https://www.linkedin.com/pulse/building-future-beyond-code-michael-truell-software-cursor-gonz%C3%A1lez--fxkff',
    questions: [
      {
        q: "How do startups redefine workflows with AI-native tools?",
        a: "Start fresh—build tools assuming AI assistance from the start, not as an add-on.",
      },
      {
        q: "What's the role of human creativity in AI-driven startups?",
        a: "Humans provide context and judgment; AI accelerates routine tasks.",
      },
      {
        q: "What are the risks startups must manage with AI products?",
        a: "Over-reliance on AI can lead to hidden errors; transparency and validation are key.",
      },
      {
        q: "How should founders approach dropping traditional coding?",
        a: "It's a gradual process; blend AI with code while tools mature.",
      },
      {
        q: "What advice do you have for early-stage AI startups?",
        a: "Focus on solving real user problems and validate ideas with prototypes and feedback.",
      },
    ],
  },
];

export const InterviewSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const togglePanel = (idx: number) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section id="interview" className="py-20 px-4 bg-gradient-to-br from-blue-100 via-orange-50 to-fuchsia-100 animate-fade-in relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-fuchsia-300 via-orange-200 to-blue-200 rounded-full blur-3xl opacity-30 pointer-events-none animate-float" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-gradient-to-tr from-blue-300 via-fuchsia-200 to-orange-200 rounded-full blur-2xl opacity-20 pointer-events-none animate-float" />
      <div className="max-w-3xl mx-auto rounded-3xl shadow-xl glass p-8 md:p-12 flex flex-col gap-8 relative z-10">
        <div className="flex flex-col items-center gap-2 mb-4">
          <span className="relative inline-block">
            <MessageSquareText className="h-10 w-10 text-fuchsia-500 animate-wiggle absolute -top-10 left-1/2 -translate-x-1/2" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center animate-fade-in-up pb-2 border-b-4 border-orange-300 inline-block px-4 bg-white/60 rounded-xl shadow">
              Startup Founder Insights: 15 Questions You Should Ask
            </h2>
          </span>
          <span className="block text-lg font-medium text-blue-700 mt-2 text-center max-w-xl">
            Explore real, valuable perspectives from top founders. Tap a tab to see their answers to the toughest startup questions — and get inspired for your own journey!
          </span>
        </div>
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {founders.map((f, i) => (
            <button
              key={f.name}
              onClick={() => { setActiveTab(i); setOpenIndexes([]); }}
              className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold shadow transition-all duration-300 border-2 ${activeTab === i ? 'bg-gradient-to-r from-orange-400 to-fuchsia-400 text-white border-orange-400 scale-105' : 'bg-white/80 text-gray-800 border-gray-200 hover:bg-orange-100 hover:scale-105'}`}
            >
              {f.icon} <span>{f.name}</span>
            </button>
          ))}
        </div>
        {/* Collapsible Panels */}
        <div className={`flex flex-col gap-4 bg-gradient-to-br ${founders[activeTab].color} rounded-2xl p-6 md:p-8 shadow-inner animate-fade-in-up`}>
          {founders[activeTab].questions.map((qa, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden shadow group">
              <button
                className="w-full flex justify-between items-center px-4 py-4 bg-white/80 hover:bg-orange-50 transition-all duration-300 text-left font-bold text-lg md:text-xl text-blue-700 group-hover:text-orange-500 focus:outline-none"
                onClick={() => togglePanel(idx)}
                aria-expanded={openIndexes.includes(idx)}
              >
                <span>{qa.q}</span>
                {openIndexes.includes(idx) ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
              </button>
              <div
                className={`transition-all duration-500 bg-white/90 px-4 pb-4 text-gray-800 text-base md:text-lg leading-relaxed ${openIndexes.includes(idx) ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
              >
                {qa.a}
              </div>
            </div>
          ))}
        </div>
        {/* Call to Action */}
        <div className="mt-8 text-center animate-fade-in-up flex flex-col items-center gap-3">
          <span className="block text-lg md:text-xl font-bold text-fuchsia-700 mb-2">Want to dive deeper?</span>
          <div className="flex flex-wrap justify-center gap-4">
            {founders.map((f, i) => f.link && (
              <a
                key={f.name}
                href={f.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-orange-400 text-white px-6 py-3 rounded-full font-semibold shadow hover:from-blue-700 hover:to-orange-500 transition-all animate-bounce"
              >
                {f.icon} {f.name.split('(')[0].trim()} Full Interview <ExternalLink className="h-4 w-4" />
              </a>
            ))}
          </div>
          <span className="block mt-1 text-gray-600">Your next breakthrough might be a question away.</span>
        </div>
      </div>
    </section>
  );
}; 