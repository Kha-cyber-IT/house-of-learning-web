import React from 'react';
import { TUTORS } from '../constants';
import { GlassCard } from '../components/GlassCard';

export const Tutors: React.FC = () => {
  return (
    <div className="animate-fade-in max-w-5xl mx-auto space-y-12">

      <div className="text-center">
        <h2 className="text-4xl font-heading font-bold text-foreground mb-4">Meet Our Team</h2>
        <p className="text-muted-foreground">Dedicated educators committed to your success.</p>
      </div>
      
      <div className="grid grid-cols-1 gap-8">
        {TUTORS.map((tutor) => (
          <GlassCard key={tutor.id} className="p-8 rounded-3xl flex flex-col md:flex-row gap-8 items-start" variant="default">
             <div className="flex-shrink-0 mx-auto md:mx-0">
                <img 
                  src={tutor.image} 
                  alt={tutor.name} 
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-xl border-4 border-background" 
                />
             </div>
             
             <div className="flex-grow text-center md:text-left">
                <h4 className="text-2xl font-bold text-foreground mb-1">{tutor.name}</h4>
                <p className="text-primary font-semibold mb-4 uppercase tracking-wider text-sm">{tutor.role}</p>
                <div className="text-muted-foreground space-y-3 leading-relaxed">
                  {tutor.description.map((para, index) => (
                    <p key={index}>{para}</p>
                  ))}
                </div>
             </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};