import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FOOD_PAIRINGS } from '../data';
import { FoodPairing } from '../types';
import { ChiliPepperVector, StickerBadge } from './Graphics';
import { Sparkles, ThumbsUp, AlertOctagon, Plus } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const FoodPairings: React.FC<{
  onNavigateToRetailers: () => void;
}> = ({ onNavigateToRetailers }) => {
  const [activeFood, setActiveFood] = useState<string | null>(null);

  // High-contrast graphic color palettes for each food item's poster card
  const foodStyles: Record<string, { bg: string; text: string; accent: string }> = {
    tiradito: { bg: '#F4C430', text: '#111111', accent: '#D92323' },
    churrasco: { bg: '#FFF9EE', text: '#111111', accent: '#397A3C' },
    empanada: { bg: '#F4EBD8', text: '#111111', accent: '#D92323' },
    sopaipillas: { bg: '#D92323', text: '#FFF9EE', accent: '#F4C430' },
    asado: { bg: '#111111', text: '#FFF9EE', accent: '#D92323' },
    cereal: { bg: '#222222', text: '#888888', accent: '#555555' },
  };

  return (
    <section 
      id="comidas"
      className="relative py-24 bg-[#FFF9EE] text-[#111111] overflow-hidden border-b-6 border-[#111111]"
    >
      {/* Halftone texture overlay */}
      <div className="absolute inset-0 bg-halftone opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* EDITORIAL TITLE HEADER */}
        <ScrollReveal className="mb-14 text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#D92323] text-[#FFF9EE] px-3.5 py-1 font-anton text-sm uppercase tracking-widest border-2 border-[#111111] shadow-brutal-sm mb-3 transform -rotate-1">
            <Sparkles className="w-4 h-4 text-[#F4C430]" />
            MARIDAJE GOURMET & COCINA DE AUTOR
          </div>

          <h2 className="font-anton text-5xl sm:text-7xl md:text-8xl uppercase tracking-tight text-[#111111] leading-[0.88]">
            ELEVA CADA <br />
            <span className="text-[#D92323] bg-[#F4C430] px-3 py-1 inline-block border-4 border-[#111111] shadow-brutal transform rotate-1 mt-1">
              PLATO NOBLE.
            </span>
          </h2>

          <p className="mt-4 font-barlow font-black text-xl sm:text-2xl text-[#666666] tracking-wide">
            Cortes a la leña, alta sanguchería y recetas criollas de categoría superior.
          </p>
        </ScrollReveal>

        {/* COLLAGE EDITORIAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FOOD_PAIRINGS.map((item: FoodPairing, idx: number) => {
            const isHovered = activeFood === item.id;
            const style = foodStyles[item.id] || { bg: '#FFF', text: '#111', accent: '#D92323' };

            return (
              <motion.div
                key={item.id}
                id={`food-card-${item.id}`}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.08,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                onMouseEnter={() => setActiveFood(item.id)}
                onMouseLeave={() => setActiveFood(null)}
                className="relative p-6 sm:p-7 border-5 border-[#111111] shadow-brutal transition-all duration-200 transform hover:-translate-y-1 select-none flex flex-col justify-between min-h-[360px] overflow-hidden"
                style={{
                  backgroundColor: style.bg,
                  color: style.text,
                }}
              >
                {/* SAUCE DRIP ANIMATION OVERLAY WHEN HOVERED */}
                {isHovered && item.chiliApproved && (
                  <div className="absolute inset-0 pointer-events-none z-30 flex flex-col items-center justify-start overflow-hidden">
                    {/* Visual chili sauce drips dripping down */}
                    <div className="w-full flex justify-around">
                      <div className="w-6 h-28 bg-[#D92323] border-x-2 border-b-2 border-[#111111] rounded-b-full shadow-md animate-drip" style={{ animationDelay: '0ms' }} />
                      <div className="w-8 h-40 bg-[#D92323] border-x-2 border-b-2 border-[#111111] rounded-b-full shadow-md animate-drip" style={{ animationDelay: '100ms' }} />
                      <div className="w-5 h-20 bg-[#D92323] border-x-2 border-b-2 border-[#111111] rounded-b-full shadow-md animate-drip" style={{ animationDelay: '60ms' }} />
                      <div className="w-7 h-36 bg-[#D92323] border-x-2 border-b-2 border-[#111111] rounded-b-full shadow-md animate-drip" style={{ animationDelay: '140ms' }} />
                    </div>

                    {/* Giant "+ AJÍ" badge popping in the center */}
                    <div className="absolute top-1/3 transform -rotate-6 bg-[#111111] text-[#F4C430] border-4 border-[#FFF9EE] px-5 py-2 font-anton text-3xl shadow-brutal-lg animate-in zoom-in-75 duration-150">
                      + AJÍ VENENO 🔥
                    </div>
                  </div>
                )}

                {/* Card Top: Number & Verdict Badge */}
                <div className="flex items-center justify-between border-b-3 border-[#111111] pb-3 mb-4">
                  <span className="font-anton text-lg tracking-wider opacity-60">
                    N° 0{idx + 1}
                  </span>
                  
                  {item.chiliApproved ? (
                    <span className="font-barlow font-black text-xs uppercase px-2.5 py-1 bg-[#111111] text-[#F4C430] border border-[#111111] shadow-brutal-sm flex items-center gap-1">
                      <ThumbsUp className="w-3.5 h-3.5" />
                      {item.verdict}
                    </span>
                  ) : (
                    <span className="font-barlow font-black text-xs uppercase px-2.5 py-1 bg-[#D92323] text-[#FFF9EE] border border-[#111111] shadow-brutal-sm flex items-center gap-1">
                      <AlertOctagon className="w-3.5 h-3.5" />
                      {item.verdict}
                    </span>
                  )}
                </div>

                {/* Food Graphic Representation & Title */}
                <div className="my-2">
                  <span className="font-barlow font-bold text-xs uppercase tracking-widest block opacity-75">
                    {item.subtitle}
                  </span>
                  <h3 className="font-anton text-3xl sm:text-4xl uppercase tracking-tight mt-0.5 leading-none">
                    {item.name}
                  </h3>

                  {/* Street quote */}
                  <p className="mt-4 font-space text-sm sm:text-base leading-snug italic opacity-90 border-l-3 border-[#111111] pl-3">
                    “{item.quote}”
                  </p>
                </div>

                {/* Food Ingredients / Tags */}
                <div className="my-4 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-[11px] font-barlow font-bold px-2 py-0.5 border border-[#111111] bg-white/70 uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Card Footer: Sauce Recommendation */}
                <div className="pt-3 border-t-3 border-[#111111] flex items-center justify-between">
                  <div className="text-left">
                    <span className="font-barlow text-[10px] uppercase font-bold tracking-wider block opacity-70">
                      RECOMENDACIÓN:
                    </span>
                    <span className="font-anton text-base uppercase text-[#D92323]">
                      {item.sauceRecommendation}
                    </span>
                  </div>

                  {item.chiliApproved && (
                    <button
                      onClick={onNavigateToRetailers}
                      className="p-2 bg-[#111111] hover:bg-[#D92323] text-[#FFF9EE] border-2 border-[#111111] shadow-brutal-sm transition-colors cursor-pointer"
                      title="Ver puntos de venta"
                    >
                      <Plus className="w-4 h-4 stroke-[3]" />
                    </button>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM ACCREDITATION BANNER */}
        <ScrollReveal delay={0.2} className="mt-12 text-center">
          <div className="inline-block max-w-full bg-[#111111] text-[#F4C430] p-3 sm:p-4 border-4 border-[#111111] shadow-brutal transform -rotate-1">
            <span className="font-anton text-sm sm:text-lg md:text-xl uppercase tracking-wider block">
              ★ REGLA DE LA ALTA COCINA: UN AJÍ DE CATEGORÍA NO ENMASCARA EL PLATO, LO ELEVA AL SIGUIENTE NIVEL ★
            </span>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
