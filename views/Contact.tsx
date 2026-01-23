import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle, MessageCircle, ExternalLink } from 'lucide-react';
import { LINKS } from '../constants';

export const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, send data here
  };

  return (
    <div id="contact" className="py-8 md:py-12 animate-fade-in max-w-7xl mx-auto px-4 md:px-8 bg-white">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-primary font-bold mb-2 text-sm uppercase tracking-wide">Contact Us</p>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-slate-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-slate-500 text-base md:text-lg font-medium">
            Ready to start your learning journey? Reach out to us and let's discuss how we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          
          {/* Left Column: Form */}
          <div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 h-full shadow-sm">
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-6">
                Send us a message
              </h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-slate-900 mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-slate-500 mb-6">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-primary font-bold hover:underline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-slate-700 text-sm font-bold">Name</label>
                    <input 
                      type="text"
                      placeholder="Your full name" 
                      className="flex h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-slate-700 text-sm font-bold">Email</label>
                    <input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="flex h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-slate-700 text-sm font-bold">Subject</label>
                    <input 
                      type="text"
                      placeholder="What is this about?" 
                      className="flex h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-slate-700 text-sm font-bold">Message</label>
                    <textarea 
                      placeholder="Tell us how we can help you..." 
                      className="flex min-h-[120px] w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all"
                      required
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-lime-600 text-white h-12 px-6 py-3 rounded-xl flex items-center justify-center gap-2 font-bold shadow-lg shadow-lime-500/20 transition-all"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Info & CTA */}
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase mb-1">Address</p>
                      <p className="text-slate-600 font-medium">Green Masjid Ext 2, Eldorado Park</p>
                    </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-slate-400 uppercase mb-1">Email</p>
                      <a href={`mailto:${LINKS.EMAIL}`} className="text-slate-600 font-medium hover:text-primary transition-colors break-all block">
                        {LINKS.EMAIL}
                      </a>
                    </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase mb-1">Phone</p>
                      <a href={`tel:${LINKS.PHONE.replace(/\s/g, '')}`} className="text-slate-600 font-medium hover:text-primary transition-colors">
                        {LINKS.PHONE}
                      </a>
                    </div>
                </div>

                 {/* WhatsApp */}
                 <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase mb-1">WhatsApp</p>
                      <a href={LINKS.WHATSAPP} target="_blank" rel="noreferrer" className="text-slate-600 font-medium hover:text-primary transition-colors">
                        Chat on WhatsApp
                      </a>
                    </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase mb-1">Hours</p>
                      <p className="text-slate-600 font-medium">Mon - Friday: 8:00 AM - 17:30 PM</p>
                    </div>
                </div>

              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 md:p-8 shadow-xl text-white">
              <h3 className="font-heading font-bold text-xl mb-3">
                Ready to get started?
              </h3>
              <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                Join hundreds of students who have improved their grades with House of Learning.
              </p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href={`tel:${LINKS.PHONE.replace(/\s/g, '')}`}
                  className="bg-white text-slate-900 hover:bg-gray-100 px-4 py-2.5 rounded-lg flex items-center gap-2 transition-colors text-sm font-bold"
                >
                    <Phone className="h-4 w-4" />
                    Call Now
                </a>
                <a 
                   href={`mailto:${LINKS.EMAIL}`}
                   className="text-white border border-white/20 hover:bg-white/10 px-4 py-2.5 rounded-lg flex items-center gap-2 transition-colors text-sm font-bold"
                >
                    <Mail className="h-4 w-4" />
                    Email Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white border border-gray-200 rounded-2xl p-2 shadow-sm overflow-hidden">
            <div className="bg-slate-50 p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-100 rounded-t-xl">
                <div className="flex items-center gap-3">
                    <div className="bg-primary p-2 rounded-full text-white">
                        <MapPin className="h-5 w-5" />
                    </div>
                    <div className="text-left">
                        <h4 className="font-heading font-bold text-slate-900">Green Masjid Ext 2, Eldorado Park</h4>
                        <p className="text-slate-500 text-sm">Visit us for face-to-face tutoring</p>
                    </div>
                </div>
                <a 
                    href={LINKS.MAPS} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-slate-700 px-4 py-2 rounded-lg text-sm font-bold transition-colors shadow-sm"
                >
                    <ExternalLink className="h-4 w-4" />
                    Open in Maps
                </a>
            </div>
            <div className="w-full h-[400px] relative bg-gray-100 rounded-b-xl overflow-hidden">
                 <iframe 
                    src="https://maps.google.com/maps?q=Green%20Masjid%20Ext%202%2C%20Eldorado%20Park&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    title="Google Maps Location"
                    className="grayscale-0"
                ></iframe>
            </div>
        </div>
    </div>
  );
};
