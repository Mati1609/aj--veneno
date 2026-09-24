import React from 'react';
import { ChiliPepperVector } from './Graphics';

export const Marquee: React.FC = () => {
  const items = [
    "PICA", "ARDE", "SE DISFRUTA", 
    "PICA", "ARDE", "SE DISFRUTA", 
    "PICA", "ARDE", "SE DISFRUTA",
    "PICA", "ARDE", "SE DISFRUTA"
  ];

  return (
    <div 
      id="marquee-ticker"
      className="relative w-full bg-[#F4C430] border-y-4 border-[#111111] overflow-hidden py-3 sm:py-4 select-none shadow-md z-30"
    >
      <div className="flex w-max animate-marquee items-center gap-6">
        {/* Sequence 1 */}
        {items.map((word, idx) => (
          <div key={`item-1-${idx}`} className="flex items-center gap-6">
            <span className="font-anton text-4xl sm:text-5xl md:text-6xl text-[#111111] uppercase tracking-wider">
              {word}
            </span>
            <div className="transform rotate-12">
              <ChiliPepperVector size={28} color="#D92323" />
            </div>
          </div>
        ))}
        {/* Sequence 2 (for seamless loop) */}
        {items.map((word, idx) => (
          <div key={`item-2-${idx}`} className="flex items-center gap-6">
            <span className="font-anton text-4xl sm:text-5xl md:text-6xl text-[#111111] uppercase tracking-wider">
              {word}
            </span>
            <div className="transform rotate-12">
              <ChiliPepperVector size={28} color="#D92323" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
