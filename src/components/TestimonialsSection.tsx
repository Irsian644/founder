import React, { useState } from 'react';

const testimonials = [
  {
    name: 'Elira K.',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'This platform made launching our startup effortless. The design and support are world-class!'
  },
  {
    name: 'Ardit S.',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'The features and analytics helped us scale faster than we imagined. Highly recommended!'
  },
  {
    name: 'Sara B.',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    quote: 'Beautiful UI, easy to use, and the team is always there to help. Love it!'
  },
];

export const TestimonialsSection: React.FC = () => {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((idx + 1) % testimonials.length);
  const prev = () => setIdx((idx - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-orange-100 via-blue-100 to-fuchsia-100 animate-fade-in">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600 max-w-xl mx-auto">Real feedback from founders and teams using our platform.</p>
        </div>
        <div className="relative flex flex-col items-center">
          <div className="w-full">
            <div className="transition-all duration-500 ease-in-out">
              <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center text-center border border-blue-100 animate-fade-in-up glass">
                <img src={testimonials[idx].photo} alt={testimonials[idx].name} className="w-20 h-20 rounded-full mb-4 border-4 border-orange-400 shadow animate-float" />
                <p className="text-lg text-gray-700 mb-4">“{testimonials[idx].quote}”</p>
                <span className="font-bold text-blue-700 text-lg">{testimonials[idx].name}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow hover:bg-blue-700 transition-all animate-wiggle">&#8592;</button>
            <button onClick={next} className="w-10 h-10 rounded-full bg-orange-400 text-white flex items-center justify-center shadow hover:bg-orange-500 transition-all animate-wiggle">&#8594;</button>
          </div>
        </div>
      </div>
    </section>
  );
} 