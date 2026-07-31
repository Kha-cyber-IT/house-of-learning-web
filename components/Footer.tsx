import React from 'react';
import { ViewState } from '../types';
import { LINKS } from '../constants';
import { MapPin, Mail, MessageCircle } from 'lucide-react';

interface FooterProps {
  setActiveView: (view: ViewState) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveView }) => {
  return (
    <footer className="bg-black border-t border-neutral-900 px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">

            {/* Links Section - Scaled down for mobile */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                
                {/* Brand Text Only (No Book Icon) */}
                <div className="col-span-2 md:col-span-1">
                    <h2 className="text-white text-lg font-black tracking-tight uppercase mb-3">House of Learning</h2>
                    <p className="text-neutral-500 text-xs leading-relaxed">
                        Pioneering education with personalized attention, empowering students anywhere, anytime.
                    </p>
                </div>

                {/* Academics */}
                <div className="col-span-1">
                    <h3 className="font-bold text-white mb-4 tracking-widest uppercase text-[10px]">Academics</h3>
                    <ul className="space-y-3">
                        <li><button onClick={() => { setActiveView('home'); setTimeout(() => document.getElementById('browse-all-btn')?.click(), 100); }} className="text-neutral-400 hover:text-white text-xs transition-colors text-left block py-1">All Subjects</button></li>
                        <li><button onClick={() => setActiveView('services')} className="text-neutral-400 hover:text-white text-xs transition-colors text-left block py-1">Online Programs</button></li>
                        <li><button onClick={() => { setActiveView('home'); setTimeout(() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="text-neutral-400 hover:text-white text-xs transition-colors text-left block py-1">Tuition</button></li>
                    </ul>
                </div>

                {/* Community */}
                <div className="col-span-1">
                    <h3 className="font-bold text-white mb-4 tracking-widest uppercase text-[10px]">Community</h3>
                    <ul className="space-y-3">
                        <li><button onClick={() => setActiveView('about')} className="text-neutral-400 hover:text-white text-xs transition-colors text-left block py-1">About Us</button></li>
                        <li><button onClick={() => setActiveView('tutors')} className="text-neutral-400 hover:text-white text-xs transition-colors text-left block py-1">Our Educators</button></li>
                        <li><button onClick={() => setActiveView('stories')} className="text-neutral-400 hover:text-white text-xs transition-colors text-left block py-1">Success Stories</button></li>
                    </ul>
                </div>

                {/* Contact CTA */}
                <div className="col-span-2 md:col-span-1">
                     <h3 className="font-bold text-white mb-4 tracking-widest uppercase text-[10px]">Get in Touch</h3>
                     <div className="flex gap-3 mb-4">
                        <a href={LINKS.WHATSAPP} target="_blank" rel="noreferrer" className="flex items-center justify-center size-8 bg-neutral-900 text-white hover:bg-white hover:text-black transition-all rounded-full">
                            <MessageCircle size={14} />
                        </a>
                        <a href={`mailto:${LINKS.EMAIL}`} className="flex items-center justify-center size-8 bg-neutral-900 text-white hover:bg-white hover:text-black transition-all rounded-full">
                            <Mail size={14} />
                        </a>
                    </div>
                     <a href={LINKS.REGISTRATION} target="_blank" rel="noreferrer" className="inline-block bg-white text-black px-4 py-2 text-xs font-bold hover:bg-neutral-200 transition-colors">
                        Book a Session
                    </a>
                </div>
            </div>

            {/* Bottom Section - Ending with Address */}
            <div className="border-t border-neutral-900 pt-6 flex flex-col gap-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-neutral-500">
                    <p>© {new Date().getFullYear()} House of Learning. All rights reserved.</p>
                    
                    {/* The Address as the final element */}
                    <div className="flex items-center gap-2 text-neutral-400 bg-neutral-900/50 px-3 py-2 rounded-md border border-neutral-800">
                        <MapPin size={14} className="text-white shrink-0" />
                        <span><strong>Eldorado Park Ex 2</strong>, Tennis Courts by the Women's Forum</span>
                    </div>
                </div>
            </div>

        </div>
    </footer>
  );
};
