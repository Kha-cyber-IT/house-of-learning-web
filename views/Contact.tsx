

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
    <div id="contact" className="py-8 md:py-12 animate-fade-in max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-blue-400 font-medium mb-2 text-sm uppercase tracking-wide">Contact Us</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4 text-shadow-strong">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Ready to start your learning journey? Reach out to us and let's discuss how we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          
          {/* Left Column: Form */}
          <div>
            <div className="glass-card-blue p-6 md:p-8 h-full rounded-2xl">
              <h3 className="font-heading font-semibold text-xl text-white mb-6">
                Send us a message
              </h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-600/30 flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-green-400" />
                  </div>
                  <h4 className="font-heading font-semibold text-xl text-white mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-white/60 mb-6">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-white border border-white/30 hover:bg-white/10 px-4 py-2 rounded-lg transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-white/80 text-sm font-medium">Name</label>
                    <input 
                      type="text"
                      placeholder="Your full name" 
                      className="flex h-10 w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-white/80 text-sm font-medium">Email</label>
                    <input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="flex h-10 w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-white/80 text-sm font-medium">Subject</label>
                    <input 
                      type="text"
                      placeholder="What is this about?" 
                      className="flex h-10 w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-white/80 text-sm font-medium">Message</label>
                    <textarea 
                      placeholder="Tell us how we can help you..." 
                      className="flex min-h-[120px] w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      required
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white border border-blue-500 h-10 px-4 py-2 rounded-md flex items-center justify-center gap-2 font-medium transition-colors"
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
            <div className="glass-card-blue p-6 md:p-8 rounded-2xl">
              <h3 className="font-heading font-semibold text-xl text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-5">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-blue-600/30 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50 mb-0.5">Address</p>
                      <p className="text-white font-medium">Green Masjid Ext 2, Eldorado Park</p>
                    </div>
                </div>

                {/* Email - Fixed Overflow */}
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-blue-600/30 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-blue-400" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-white/50 mb-0.5">Email</p>
                      <a href={`mailto:${LINKS.EMAIL}`} className="text-white font-medium hover:text-blue-400 transition-colors break-all text-sm block">
                        {LINKS.EMAIL}
                      </a>
                    </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-blue-600/30 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50 mb-0.5">Phone</p>
                      <a href={`tel:${LINKS.PHONE.replace(/\s/g, '')}`} className="text-white font-medium hover:text-blue-400 transition-colors">
                        {LINKS.PHONE}
                      </a>
                    </div>
                </div>

                 {/* WhatsApp - Added */}
                 <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-blue-600/30 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50 mb-0.5">WhatsApp</p>
                      <a href={LINKS.WHATSAPP} target="_blank" rel="noreferrer" className="text-white font-medium hover:text-blue-400 transition-colors">
                        Chat on WhatsApp
                      </a>
                    </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-blue-600/30 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50 mb-0.5">Hours</p>
                      <p className="text-white font-medium">Mon - Friday: 8:00 AM - 17:30 PM</p>
                    </div>
                </div>

              </div>
            </div>

            <div className="glass-card-story p-6 md:p-8 rounded-2xl">
              <h3 className="font-heading font-semibold text-xl text-white mb-3">
                Ready to get started?
              </h3>
              <p className="text-white/80 mb-4">
                Join hundreds of students who have improved their grades with House of Learning.
              </p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href={`tel:${LINKS.PHONE.replace(/\s/g, '')}`}
                  className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-4 py-2 rounded-md flex items-center gap-2 transition-colors text-sm font-medium"
                >
                    <Phone className="h-4 w-4" />
                    Call Now
                </a>
                <a 
                   href={`mailto:${LINKS.EMAIL}`}
                   className="text-white border border-white/30 hover:bg-white/10 px-4 py-2 rounded-md flex items-center gap-2 transition-colors text-sm font-medium"
                >
                    <Mail className="h-4 w-4" />
                    Email Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="glass-card-blue p-2 rounded-2xl border border-blue-500/30 overflow-hidden shadow-2xl">
            <div className="bg-blue-900/40 p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                    <div className="bg-blue-600 p-2 rounded-full">
                        <MapPin className="text-white h-5 w-5" />
                    </div>
                    <div className="text-left">
                        <h4 className="font-heading font-bold text-white">Green Masjid Ext 2, Eldorado Park</h4>
                        <p className="text-blue-200 text-sm">Visit us for face-to-face tutoring</p>
                    </div>
                </div>
                <a 
                    href={LINKS.MAPS} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                    <ExternalLink className="h-4 w-4" />
                    Open in Maps
                </a>
            </div>
            <div className="w-full h-[400px] relative bg-gray-900">
                 <iframe 
                    src="https://maps.google.com/maps?q=Green%20Masjid%20Ext%202%2C%20Eldorado%20Park&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    title="Google Maps Location"
                    className="grayscale-[0.5] hover:grayscale-0 transition-all duration-500 opacity-90 hover:opacity-100"
                ></iframe>
            </div>
        </div>
    </div>
  );
};
