
import React from 'react';
import { GlassCard } from '../components/GlassCard';

export const About: React.FC = () => {
  return (
    <div className="space-y-16 animate-fade-in max-w-4xl mx-auto">
      
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-heading font-bold text-foreground">About Us</h2>
        <div className="h-1.5 w-20 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="space-y-12">
        
        {/* Intro */}
        <section className="prose prose-lg prose-invert mx-auto">
          <p className="text-lg leading-relaxed text-muted-foreground text-center">
              House of Learning is dedicated to helping learners improve in their schoolwork and grow academically. We guide learners to discover their vision for the future, what they want to study, and who they want to become. We believe that everything is possible, and there is always room for improvement. Our goal is to help every learner build confidence, develop strong study habits, and realize their true potential.
          </p>
        </section>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
            <GlassCard className="p-8 flex flex-col justify-center text-center" variant="blue">
                <h3 className="text-2xl font-bold font-heading mb-4 text-white">Our Mission</h3>
                <p className="text-blue-100">
                To educate every learner to achieve their academic best and empower them to reach their full potential.
                </p>
            </GlassCard>

            <GlassCard className="p-8 flex flex-col justify-center text-center" variant="blue">
                <h3 className="text-2xl font-bold font-heading mb-4 text-white">Our Vision</h3>
                <p className="text-blue-100">
                To ensure that learners excel academically in all subjects and build a bright future.
                </p>
            </GlassCard>
        </div>

        {/* Why We Exist */}
        <section>
          <div className="p-8 md:p-10 bg-card border border-border rounded-3xl shadow-sm">
            <h3 className="text-2xl font-bold text-primary mb-8 font-heading uppercase tracking-wide border-b border-border pb-4">Why We Exist</h3>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                We exist because there is a real need in Eldorado Park. As an organization rooted in the community, we understand the challenges learners face every day.
              </p>
              <p>
                During the COVID-19 lockdown, many learners fell behind in their academic progress. We saw the effects, and we decided to take action.
              </p>
              <p>
                We aim to bring real change to the learning journey of every child who enters our doors.
              </p>
              <p>
                We offer face-to-face learning because personal connection is powerful. It helps learners understand better, ask questions freely, and build confidence.
              </p>
              <p>
                We support learners who may not always receive enough academic help, especially in schools where teachers don’t have extra support with content.
              </p>
              <p>
                We serve as a bridge between learners and teachers, helping them catch up with their schoolwork and stay on track.
              </p>
              <p>
                We assist learners with exam preparation, revision, and understanding key concepts across different subjects.
              </p>
            </div>
          </div>
        </section>

        {/* Closing Image */}
        <section className="flex justify-center pb-8">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 max-w-3xl w-full">
                <img 
                    src="https://i.postimg.cc/Rh2P46X4/Smart-Select-20251213-105934-Whats-App.jpg" 
                    alt="House of Learning Group Photo" 
                    className="w-full h-auto object-cover"
                />
            </div>
        </section>

      </div>
    </div>
  );
};
