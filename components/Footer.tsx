import React from 'react';
import { ViewState } from '../types';
import { LINKS } from '../constants';
import { BookOpen } from 'lucide-react';

interface FooterProps {
  setActiveView: (view: ViewState) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveView }) => {
  return (
    <footer className="bg-gray-50/80 border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="flex items-center gap-3">
                    <div className="size-7 text-slate-400">
                        <BookOpen size={28} strokeWidth={2} />
                    </div>
                    <h2 className="text-slate-600 text-lg font-bold font-display">House of Learning</h2>
                </div>
                <p className="text-slate-500 text-sm font-medium">© {new Date().getFullYear()} House of Learning. All rights reserved.</p>
                <div className="flex gap-4">
                    <button
                        onClick={() => setActiveView('home')}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary transition-all shadow-sm"
                        aria-label="Home"
                    >
                        <span className="material-symbols-outlined">public</span>
                    </button>
                    <a
                        href={`mailto:${LINKS.EMAIL}`}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary transition-all shadow-sm"
                        aria-label="Email"
                    >
                        <span className="material-symbols-outlined">mail</span>
                    </a>
                    <a
                        href={`tel:${LINKS.PHONE.replace(/\s/g, '')}`}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary transition-all shadow-sm"
                        aria-label="Call Us"
                    >
                        <span className="material-symbols-outlined">call</span>
                    </a>
                    <a
                         href={LINKS.WHATSAPP}
                         target="_blank"
                         rel="noreferrer"
                         className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary transition-all shadow-sm"
                         aria-label="WhatsApp"
                    >
                        <span className="material-symbols-outlined">chat</span>
                    </a>
                </div>
            </div>
        </div>
    </footer>
  );
};
