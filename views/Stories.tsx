
import React from 'react';

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
    <div className="animate-fade-in max-w-[1200px] mx-auto py-12">
      <h2 className="text-center text-[36px] font-bold text-[#C6F038] mb-10 font-heading">
        Success Stories
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-5 md:p-10">
        {stories.map((story) => (
          <div
            key={story.id}
            className="bg-[#518E99] shadow-xl rounded-3xl p-10 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300 h-full min-h-[400px]"
          >
            <div className="w-32 h-32 bg-white/20 rounded-full mb-6 flex items-center justify-center overflow-hidden flex-shrink-0 border-4 border-white/30">
                <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
            </div>

            <h3 className="text-[26px] font-bold text-white mb-6 font-heading">{story.name}</h3>
            <p className="text-xl leading-relaxed text-white/90 text-center italic">"{story.text}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};
