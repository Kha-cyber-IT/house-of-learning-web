
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
            className="bg-white border-[3px] border-[#C6F038] shadow-[0_10px_30px_rgba(198,240,56,0.2)] rounded-3xl p-10 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(198,240,56,0.3)] transition-transform duration-300 h-full"
          >
            <div className="w-20 h-20 bg-[#F0FBD0] rounded-full mb-5 flex items-center justify-center overflow-hidden flex-shrink-0">
                <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
            </div>

            <h3 className="text-[22px] font-bold text-[#1A1A1A] mb-4 font-heading">{story.name}</h3>
            <p className="text-lg leading-relaxed text-[#4A4A4A] text-left">{story.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
