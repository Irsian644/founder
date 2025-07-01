import React from 'react';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    features: ['Basic analytics', 'Community support', '1 project'],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$29/mo',
    features: ['All Starter features', 'Advanced analytics', 'Priority support', 'Unlimited projects'],
    cta: 'Start Pro',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Contact Us',
    features: ['Custom integrations', 'Dedicated manager', 'SLAs', 'Custom onboarding'],
    cta: 'Contact Sales',
    highlight: false,
  },
];

export const PricingSection: React.FC = () => (
  <section id="pricing" className="py-24 bg-gradient-to-br from-yellow-200 via-pink-100 to-orange-200 animate-fade-in">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Pricing</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Simple, transparent pricing for every stage of your startup journey.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <div
            key={plan.name}
            className={`rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border-2 transition-transform duration-300 hover:scale-105 ${plan.highlight ? 'border-orange-400 bg-gradient-to-br from-orange-50 to-blue-50 shadow-2xl animate-float' : 'border-gray-100 bg-white'} glass animate-fade-in-up`}
          >
            <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
            <div className="text-4xl font-extrabold mb-4 text-blue-600">{plan.price}</div>
            <ul className="mb-6 text-gray-700 space-y-2">
              {plan.features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
            <button className={`mt-auto px-8 py-3 rounded-full font-bold shadow transition-all duration-300 ${plan.highlight ? 'bg-orange-400 text-white hover:bg-orange-500' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>{plan.cta}</button>
          </div>
        ))}
      </div>
    </div>
  </section>
); 