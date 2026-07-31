import React from 'react';
import { ViewState } from '../types';
import { LINKS } from '../constants';
import { BookOpen, MapPin, Mail, MessageCircle } from 'lucide-react'; 

interface FooterProps {
  setActiveView: (view: ViewState) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveView }) => {
  return (
    <footer className="bg-[#27445C] border-t border-white/10 relative overflow-hidden">
        
        {/* Subtle background glow for a modern online-tech feel */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 bg-blue-400/10 blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 relative z-10">
            
            {/* Fluid Grid: 1 col mobile, 2 col tablet, 4 col desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                {/* Brand & Address Column */}
                <div className="space-y-6 lg:pr-4">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center size-10 bg-gradient-to-br from-blue-400 to-teal-400 rounded-xl text-white shadow-lg shadow-teal-400/20">
                            <BookOpen size={24} strokeWidth={2.5} />
                        </div>
                        <h2 className="text-white text-2xl font-bold font-display tracking-tight">House of Learning</h2>
                    </div>
                    <p className="text-blue-100/80 text-sm leading-relaxed">
                        Pioneering online education with personalized attention, empowering students anywhere, anytime.
                    </p>
                    
                    {/* NEW ADDRESS SECTION: Styled as a sleek, modern card */}
                    <div className="flex gap-3 text-blue-100/90 text-sm mt-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors shadow-sm">
                        <MapPin size={20} className="text-teal-400 shrink-0 mt-0.5" />
                        <p className="leading-relaxed">
                            <strong className="text-white block mb-0.5">Eldorado Park Ex 2</strong>
                            Tennis Courts by the Women's Forum
                        </p>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-3 pt-2">
                        <a href={LINKS.WHATSAPP} target="_blank" rel="noreferrer" className="flex items-center justify-center size-10 rounded-full bg-white/5 text-white hover:bg-[#25D366] hover:scale-110 transition-all duration-300">
                            <MessageCircle size={18} />
                        </a>
                        <a href={`mailto:${LINKS.EMAIL}`} className="flex items-center justify-center size-10 rounded-full bg-white/5 text-white hover:bg-blue-500 hover:scale-110 transition-all duration-300">
                            <Mail size={18} />
                        </a>
                    </div>
                </div>

                {/* Academics Links */}
                <div>
                    <h3 className="font-bold text-white mb-6 text-lg tracking-wide">Academics</h3>
                    <ul className="space-y-4">
                        <li><button onClick={() => { setActiveView('home'); setTimeout(() => document.getElementById('browse-all-btn')?.click(), 100); }} className="group flex items-center text-blue-100/70 hover:text-white text-sm transition-colors py-1 md:py-0 w-full md:w-auto text-left"><span className="w-0 group-hover:w-3 h-[2px] bg-teal-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>All Subjects</button></li>
                        <li><button onClick={() => setActiveView('services')} className="group flex items-center text-blue-100/70 hover:text-white text-sm transition-colors py-1 md:py-0 w-full md:w-auto text-left"><span className="w-0 group-hover:w-3 h-[2px] bg-teal-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>Online Programs</button></li>
                        <li><button onClick={() => { setActiveView('home'); setTimeout(() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="group flex items-center text-blue-100/70 hover:text-white text-sm transition-colors py-1 md:py-0 w-full md:w-auto text-left"><span className="w-0 group-hover:w-3 h-[2px] bg-teal-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>Tuition & Pricing</button></li>
                    </ul>
                </div>

                {/* Community Links */}
                <div>
                    <h3 className="font-bold text-white mb-6 text-lg tracking-wide">Community</h3>
                    <ul className="space-y-4">
                        <li><button onClick={() => setActiveView('about')} className="group flex items-center text-blue-100/70 hover:text-white text-sm transition-colors py-1 md:py-0 w-full md:w-auto text-left"><span className="w-0 group-hover:w-3 h-[2px] bg-teal-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>About Us</button></li>
                        <li><button onClick={() => setActiveView('tutors')} className="group flex items-center text-blue-100/70 hover:text-white text-sm transition-colors py-1 md:py-0 w-full md:w-auto text-left"><span className="w-0 group-hover:w-3 h-[2px] bg-teal-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>Our Educators</button></li>
                        <li><button onClick={() => setActiveView('stories')} className="group flex items-center text-blue-100/70 hover:text-white text-sm transition-colors py-1 md:py-0 w-full md:w-auto text-left"><span className="w-0 group-hover:w-3 h-[2px] bg-teal-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>Student Success</button></li>
                    </ul>
                </div>

                {/* Prominent Action Call (CTA) */}
                <div className="flex flex-col justify-start mt-4 md:mt-0 lg:mt-0">
                    <h3 className="font-bold text-white mb-6 text-lg tracking-wide hidden lg:block">Enrollment</h3>
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm shadow-xl">
                        <p className="text-sm text-blue-100/90 mb-5 leading-relaxed">Ready to start your online learning journey with us?</p>
                        <a href={LINKS.REGISTRATION} target="_blank" rel="noreferrer" className="flex items-center justify-center w-full bg-gradient-to-r from-teal-400 to-blue-500 text-white px-5 py-3.5 rounded-xl text-sm font-bold shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5 transition-all duration-300">
                            Book a Session
                        </a>
                    </div>
                </div>

            </div>

            {/* Bottom Copyright Area */}
            <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <p className="text-blue-100/50 text-sm">© {new Date().getFullYear()} House of Learning. All rights reserved.</p>
                <div className="flex gap-6 text-sm text-blue-100/50">
                    <button className="hover:text-white transition-colors">Privacy</button>
                    <button className="hover:text-white transition-colors">Terms</button>
                </div>
            </div>
        </div>
    </footer>
  );
};

