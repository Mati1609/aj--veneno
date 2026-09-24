import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SOCIAL_POSTS } from '../data';
import { SocialPost } from '../types';
import { Camera, Heart, MessageSquare, MapPin, Flame, Sparkles } from 'lucide-react';
import { StickerBadge, ChiliPepperVector } from './Graphics';
import { ScrollReveal } from './ScrollReveal';

export const SocialGallery: React.FC = () => {
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string) => {
    setLikedPosts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Curated visual palettes & icons for the authentic UGC photo cards
  const cardAccents = ['#F4C430', '#D92323', '#FFF9EE', '#397A3C'];

  return (
    <section 
      id="comunidad"
      className="relative py-24 bg-[#F4C430] text-[#111111] overflow-hidden border-b-6 border-[#111111]"
    >
      {/* Halftone texture */}
      <div className="absolute inset-0 bg-halftone opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* HEADER */}
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#111111] text-[#F4C430] px-3.5 py-1 font-anton text-sm uppercase tracking-widest border-2 border-[#111111] shadow-brutal-sm mb-3 transform -rotate-1">
              <Camera className="w-4 h-4 text-[#D92323]" />
              EN LAS MEJORES MESAS & QUINCHOS
            </div>
            
            <h2 className="font-anton text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#111111] leading-none">
              GENTE QUE <span className="bg-[#D92323] text-[#FFF9EE] px-3 py-0.5 border-3 border-[#111111] shadow-brutal inline-block transform rotate-1">LE PONE</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-barlow font-bold text-base sm:text-lg text-[#222222]">
              Fotos reales de chefs de fuego, parrilleros de autor y comensales en bistrós, quinchos y mesas de cata en todo Chile. Etiquétanos con <strong className="text-[#D92323]">#AjíVeneno</strong>.
            </p>
          </div>
        </ScrollReveal>

        {/* UGC CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOCIAL_POSTS.map((post: SocialPost, idx: number) => {
            const isLiked = likedPosts[post.id];
            const borderCol = cardAccents[idx % cardAccents.length];

            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className={`bg-[#FFF9EE] p-5 border-4 border-[#111111] shadow-brutal transition-all duration-300 transform sm:${post.rotation} hover:rotate-0 hover:-translate-y-2 select-none flex flex-col justify-between`}
              >
                {/* Visual Snapshot Card Header */}
                <div className="flex items-center justify-between border-b-2 border-[#111111] pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#D92323] text-[#FFF9EE] font-anton flex items-center justify-center border-2 border-[#111111] text-xs">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <span className="font-anton text-sm text-[#111111] block leading-none">
                        {post.author}
                      </span>
                      <span className="font-barlow text-xs text-[#666] block">
                        {post.handle}
                      </span>
                    </div>
                  </div>

                  <span className="bg-[#111111] text-[#F4C430] font-barlow font-black text-[10px] px-2 py-0.5 border border-[#111111]">
                    {post.spiceLevel}
                  </span>
                </div>

                {/* UGC Visual Placeholder Frame with realistic street context */}
                <div className="relative w-full aspect-square bg-[#111111] border-3 border-[#111111] overflow-hidden my-2 flex flex-col justify-between p-3 text-[#FFF9EE]">
                  <div className="flex justify-between items-start">
                    <span className="bg-[#D92323] text-[#FFF9EE] font-barlow font-bold text-[10px] px-2 py-0.5 border border-[#111111] uppercase tracking-wider">
                      {post.context}
                    </span>
                    <span className="font-barlow text-[10px] text-[#F4C430]">
                      ★ VERIFICADO
                    </span>
                  </div>

                  {/* Graphic Visual Representation of UGC scene */}
                  <div className="flex flex-col items-center justify-center text-center my-auto">
                    <div className="p-3 bg-[#222222] rounded-full border-2 border-[#F4C430] mb-2 transform -rotate-6">
                      <ChiliPepperVector size={36} color="#F4C430" />
                    </div>
                    <span className="font-anton text-base uppercase text-[#FFF9EE] tracking-wide">
                      {post.tag}
                    </span>
                  </div>

                  {/* Location badge on bottom of photo */}
                  <div className="flex items-center gap-1 text-[11px] font-barlow font-bold text-[#CCC]">
                    <MapPin className="w-3 h-3 text-[#D92323]" />
                    <span>{post.location}</span>
                  </div>
                </div>

                {/* QUOTE / COMMENT */}
                <div className="my-3">
                  <p className="font-space text-xs sm:text-sm text-[#111111] leading-relaxed font-medium">
                    “{post.quote}”
                  </p>
                </div>

                {/* Card footer with like button */}
                <div className="pt-2 border-t-2 border-[#111111] flex items-center justify-between">
                  <button
                    onClick={() => toggleLike(post.id)}
                    className="flex items-center gap-1.5 font-barlow font-bold text-xs text-[#111111] hover:text-[#D92323] transition-colors"
                  >
                    <Heart className={`w-4 h-4 ${isLiked ? 'fill-[#D92323] text-[#D92323]' : 'text-[#111111]'}`} />
                    <span>{isLiked ? '¡Le pusiste!' : 'Ponerle weno'}</span>
                  </button>

                  <span className="font-barlow font-bold text-xs text-[#666]">
                    {post.tag}
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* INSTAGRAM BANNER */}
        <ScrollReveal delay={0.2} className="mt-12 p-5 bg-[#111111] text-[#FFF9EE] border-4 border-[#111111] shadow-brutal flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Camera className="w-6 h-6 text-[#F4C430]" />
            <span className="font-anton text-lg sm:text-xl uppercase tracking-wider">
              ¿TIENES FOTO DE TU COMPLETO O ASADO CON AJÍ VENENO?
            </span>
          </div>
          <a
            href="#donde-comprar"
            className="bg-[#D92323] hover:bg-[#ff2626] text-[#FFF9EE] font-anton text-sm sm:text-base px-5 py-2.5 border-2 border-[#FFF9EE] shadow-brutal-sm uppercase tracking-wider"
          >
            @AJIVENENO EN INSTAGRAM
          </a>
        </ScrollReveal>

      </div>
    </section>
  );
};
