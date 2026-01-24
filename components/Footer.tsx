import React from 'react';
import { ViewState } from '../types';
import { LINKS } from '../constants';
import { BookOpen } from 'lucide-react';

interface FooterProps {
  setActiveView: (view: ViewState) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveView }) => {
  return (
    <footer className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Brand Column */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="size-8 text-[#00072D]">
                            <BookOpen size={32} strokeWidth={2} />
                        </div>
                        <h2 className="text-[#00072D] text-xl font-bold font-display">House of Learning</h2>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">
                        Empowering students through personalized education and expert guidance.
                    </p>
                    <div className="flex gap-4">
                        <a href={LINKS.WHATSAPP} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#00072D] transition-colors">
                            <span className="material-symbols-outlined">chat</span>
                        </a>
                        <a href={`mailto:${LINKS.EMAIL}`} className="text-slate-400 hover:text-[#00072D] transition-colors">
                            <span className="material-symbols-outlined">mail</span>
                        </a>
                    </div>
                </div>

                {/* Left Links */}
                <div>
                    <h3 className="font-bold text-[#00072D] mb-6">Company</h3>
                    <ul className="space-y-4">
                        <li><button onClick={() => setActiveView('about')} className="text-slate-500 hover:text-[#00072D] text-sm transition-colors">About Us</button></li>
                        <li><button onClick={() => setActiveView('services')} className="text-slate-500 hover:text-[#00072D] text-sm transition-colors">Services</button></li>
                        <li><button onClick={() => { setActiveView('home'); setTimeout(() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="text-slate-500 hover:text-[#00072D] text-sm transition-colors">Pricing</button></li>
                    </ul>
                </div>

                {/* Middle Links */}
                <div>
                    <h3 className="font-bold text-[#00072D] mb-6">Resources</h3>
                    <ul className="space-y-4">
                        <li><button onClick={() => setActiveView('tutors')} className="text-slate-500 hover:text-[#00072D] text-sm transition-colors">Our Staff</button></li>
                        <li><button onClick={() => setActiveView('stories')} className="text-slate-500 hover:text-[#00072D] text-sm transition-colors">Success Stories</button></li>
                        <li><a href={LINKS.WHATSAPP} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-[#00072D] text-sm transition-colors">Get in Touch</a></li>
                    </ul>
                </div>

                {/* Right Links */}
                <div>
                    <h3 className="font-bold text-[#00072D] mb-6">Quick Links</h3>
                    <ul className="space-y-4">
                        <li><button onClick={() => { setActiveView('home'); setTimeout(() => document.getElementById('browse-all-btn')?.click(), 100); }} className="text-slate-500 hover:text-[#00072D] text-sm transition-colors">All Subjects</button></li>
                        <li><a href={LINKS.MAPS} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-[#00072D] text-sm transition-colors">Visit Us</a></li>
                        <li><a href={LINKS.REGISTRATION} target="_blank" rel="noreferrer" className="inline-block bg-[#00072D] text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg hover:bg-slate-800 transition-all">Book a Session</a></li>
                    </ul>
                </div>

            </div>

            <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-slate-400 text-sm">© {new Date().getFullYear()} House of Learning. All rights reserved.</p>
            </div>
        </div>
    </footer>
  );
};
