

import React from 'react';
import { Quote } from 'lucide-react';
import { STORIES } from '../constants';
import { GlassCard } from '../components/GlassCard';

export const Stories: React.FC = () => {
  return (
    <div className="animate-fade-in max-w-6xl mx-auto space-y-16">
      
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
          Success Stories
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Hear from our students about their journey to academic excellence.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {STORIES.map((story) => (
          <GlassCard key={story.id} variant="story" className="p-8 rounded-3xl relative overflow-hidden flex flex-col h-full">
            <div className="absolute top-4 right-4 opacity-20 text-white">
                <Quote size={48} />
            </div>

            <div className="flex flex-col items-center flex-grow">
              <div className="mb-8 relative">
                 <img 
                    src={story.image} 
                    alt={story.name} 
                    className="w-40 h-40 rounded-full border-4 border-white/20 object-cover object-top shadow-xl"
                />
              </div>

              <h4 className="text-2xl font-bold text-white mb-6 text-center">
                {story.name}
              </h4>
              
              <div className="space-y-4 text-white/90 leading-relaxed text-center flex-grow text-lg">
                {story.text.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};