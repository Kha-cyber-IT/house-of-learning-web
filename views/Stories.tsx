import React from 'react';
import { Quote } from 'lucide-react';

const COLORS = {
  ink: '#20241F',
  secondary: '#23302A',
  border: '#3A423A',
  paper: '#F7F2E7',
  muted: '#B9C2B8',
  honey: '#D9A441',
};

// Updated Success Stories Data (as per request, using existing images)
const stories = [
  {
    id: 1,
    name: 'Neo Nkadimeng',
    text: 'I’ve commanded incredible support academically... The new tutors understand my own pace and build confidence.',
    image: 'https://i.postimg.cc/gJ3hGsXK/Smart-Select-20251123-152747-Whats-App.jpg'
  },
  {
    id: 2,
    name: 'Trevor Nematohoni',
    text: 'Admitting my struggles this year has been a game changer. The skills taught here... my grades have improved significantly.',
    image: 'https://i.postimg.cc/T2JQ0TH4/IMG-20251124-WA0018.jpg'
  },
  {
    id: 3,
    name: 'Leyondre Walters',
    text: 'House of Learning is a massive help and a new story of teaching logic. They were there to protect me when I felt like giving up.',
    image: 'https://i.postimg.cc/R0nxJWGv/IMG-20251124-WA0019.jpg'
  },
  {
    id: 4,
    name: 'Keabetswe Usekwa',
    text: 'The last day I announced House of Learning I thought I accepted failure. But the help I received changed my project entirely.',
    image: 'https://i.postimg.cc/NMvyCXJY/IMG-20251209-WA0009.jpg'
  },
  {
    id: 5,
    name: 'Kaynica Malan',
    text: 'I really do appreciate the support and help you have given me. Thank you to House of Learning.',
    image: 'https://i.postimg.cc/9QY75fZg/IMG-20251124-WA0038.jpg'
  }
];

export const Stories: React.FC = () => {
  return (
    <section
      className="animate-fade-in py-16 md:py-24 px-4"
      style={{ backgroundColor: COLORS.ink }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <p
            className="font-label text-xs uppercase tracking-[0.25em] mb-4 font-bold"
            style={{ color: COLORS.honey }}
          >
            Success Stories
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold font-display"
            style={{ color: COLORS.paper }}
          >
            Success Stories
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <div
              key={story.id}
              className={`relative overflow-hidden rounded-3xl p-10 flex flex-col items-center text-center h-full min-h-[400px] border transition-all duration-300 hover:-translate-y-1 ${
                index === stories.length - 1 && stories.length % 2 !== 0 ? 'lg:col-span-2 lg:w-3/4 lg:mx-auto' : ''
              }`}
              style={{ backgroundColor: COLORS.secondary, borderColor: COLORS.border }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = COLORS.honey)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = COLORS.border)}
            >
              <Quote
                size={72}
                className="absolute top-6 left-6 opacity-[0.08] pointer-events-none"
                style={{ color: COLORS.honey }}
                fill={COLORS.honey}
              />

              <div
                className="relative w-36 h-36 md:w-40 md:h-40 rounded-full mb-6 flex items-center justify-center overflow-hidden flex-shrink-0 border-4"
                style={{ borderColor: `${COLORS.honey}55` }}
              >
                <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
              </div>

              <h3
                className="text-2xl font-bold mb-6 font-display relative"
                style={{ color: COLORS.paper }}
              >
                {story.name}
              </h3>
              <p
                className="text-xl leading-relaxed italic relative"
                style={{ color: COLORS.muted }}
              >
                "{story.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
