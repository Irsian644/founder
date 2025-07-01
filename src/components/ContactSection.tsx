import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import contactImg from '../Foto_protik/WhatsApp Image 2025-06-20 at 09.58.49.jpeg';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-pink-200 via-blue-100 to-orange-100 relative overflow-hidden animate-fade-in">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-200 via-blue-100 to-transparent rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-orange-200 via-white to-transparent rounded-full blur-2xl opacity-30" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-xl mx-auto">Have questions or want a demo? Reach out and our team will get back to you fast.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            src={contactImg}
            alt="Contact"
            className="w-64 h-64 object-cover rounded-3xl shadow-xl border-4 border-white mx-auto mb-8 md:mb-0 animate-float glass"
            loading="lazy"
          />
          <form className="space-y-8 bg-white/80 rounded-2xl shadow-lg p-8 border border-blue-100 animate-fade-in-up glass">
            <div className="relative">
              <input type="text" id="name" name="name" required className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-transparent" placeholder="Name" />
              <label htmlFor="name" className="absolute left-4 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:text-blue-600 bg-white px-1 pointer-events-none">Name</label>
            </div>
            <div className="relative">
              <input type="email" id="email" name="email" required className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-transparent" placeholder="Email" />
              <label htmlFor="email" className="absolute left-4 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:text-blue-600 bg-white px-1 pointer-events-none">Email</label>
            </div>
            <div className="relative">
              <textarea id="message" name="message" rows={5} required className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-transparent" placeholder="Message"></textarea>
              <label htmlFor="message" className="absolute left-4 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:text-blue-600 bg-white px-1 pointer-events-none">Message</label>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-orange-400 text-white py-4 rounded-full font-bold text-lg shadow hover:from-blue-700 hover:to-orange-500 transition-all flex items-center justify-center gap-2">
              Send Message <Send className="h-5 w-5" />
            </button>
          </form>
          <div className="space-y-8 animate-fade-in-up">
            <div className="flex items-center gap-4 bg-white/80 rounded-2xl shadow-lg p-6 border border-blue-100 hover:scale-105 transition-transform duration-300">
              <Mail className="h-7 w-7 text-blue-600" />
              <div>
                <h4 className="font-semibold text-gray-900">Email</h4>
                <p className="text-gray-600">tea.aleksi@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/80 rounded-2xl shadow-lg p-6 border border-blue-100 hover:scale-105 transition-transform duration-300">
              <Phone className="h-7 w-7 text-orange-400" />
              <div>
                <h4 className="font-semibold text-gray-900">Phone</h4>
                <p className="text-gray-600">+355 0697029000</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/80 rounded-2xl shadow-lg p-6 border border-blue-100 hover:scale-105 transition-transform duration-300">
              <MapPin className="h-7 w-7 text-blue-600" />
              <div>
                <h4 className="font-semibold text-gray-900">Address</h4>
                <p className="text-gray-600">Pyramid of Tirana</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}