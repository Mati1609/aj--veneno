import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../data';
import { Product } from '../types';
import { ChiliBottleGraphic, ChiliPepperVector, FlameVector, LightningVector } from './Graphics';
import { Store, Flame, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ProductsProps {
  onNavigateToRetailers: () => void;
}

export const Products: React.FC<ProductsProps> = ({ onNavigateToRetailers }) => {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [expandedDesc, setExpandedDesc] = useState<Record<string, boolean>>({});

  const toggleDesc = (id: string) => {
    setExpandedDesc(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section 
      id="productos"
      className="relative py-24 bg-[#111111] text-[#FFF9EE] overflow-hidden border-b-6 border-[#111111]"
    >
      {/* Dynamic background lighting when hovering different products */}
      <div 
        className="absolute inset-0 transition-opacity duration-500 pointer-events-none opacity-20"
        style={{
          background: hoveredProduct === 'pebre' 
            ? 'radial-gradient(circle at 15% 50%, #397A3C 0%, transparent 60%)'
            : hoveredProduct === 'cacho'
            ? 'radial-gradient(circle at 38% 50%, #C25E00 0%, transparent 60%)'
            : hoveredProduct === 'chileno'
            ? 'radial-gradient(circle at 62% 50%, #1F5E2B 0%, transparent 60%)'
            : hoveredProduct === 'fuego'
            ? 'radial-gradient(circle at 88% 50%, #D92323 0%, transparent 60%)'
            : 'none'
        }}
      />

      {/* Halftone texture */}
      <div className="absolute inset-0 bg-halftone-yellow opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* HEADER */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F4C430] text-[#111111] px-4 py-1 border-3 border-[#FFF9EE] shadow-brutal-sm font-anton text-sm md:text-base tracking-widest uppercase transform -rotate-1 mb-4">
            <Flame className="w-4 h-4 text-[#D92323] fill-[#D92323]" />
            CUATRO SABORES DE FUEGO PATRIO
          </div>

          <h2 className="font-anton text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight text-[#FFF9EE] leading-[0.9]">
            ELIGE TU NIVEL DE <span className="text-[#F4C430] underline decoration-4 decoration-[#D92323]">SUFRIMIENTO</span>
          </h2>

          <p className="mt-4 font-barlow font-bold text-lg sm:text-xl text-[#F4EBD8] tracking-wide">
            Cuatro intensidades y perfiles de sabor legendarios. Cero compromisos. Cada botella está elaborada con ají cosechado en Chile, sin conservantes artificiales ni diluciones fomes.
          </p>
        </ScrollReveal>

        {/* 4 GIANT POSTER / PACKAGING CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRODUCTS.map((prod: Product, idx: number) => {
            const isHovered = hoveredProduct === prod.id;
            const rotations = ['-rotate-1', 'rotate-0', 'rotate-1', '-rotate-1'];
            const cardRotation = rotations[idx % 4];

            return (
              <motion.div
                key={prod.id}
                id={`card-product-${prod.id}`}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                onMouseEnter={() => setHoveredProduct(prod.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                className={`relative flex flex-col justify-between p-5 sm:p-6 border-5 transition-all duration-300 transform ${cardRotation} hover:rotate-0 hover:-translate-y-2 select-none`}
                style={{
                  backgroundColor: isHovered ? '#1a1a1a' : '#181818',
                  borderColor: isHovered ? prod.accentColor : '#444444',
                  boxShadow: isHovered 
                    ? `8px 8px 0px ${prod.accentColor}` 
                    : '6px 6px 0px #000000'
                }}
              >
                {/* Top Badge Sticker */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div 
                    className="px-3 py-1 font-anton text-xs sm:text-sm tracking-wider uppercase border-2 border-[#111111] shadow-brutal-sm transform -rotate-2"
                    style={{ backgroundColor: prod.accentColor, color: '#111111' }}
                  >
                    {prod.badge}
                  </div>
                  <span className="font-barlow font-black text-sm tracking-widest text-[#F4EBD8] uppercase">
                    {prod.volume}
                  </span>
                </div>

                {/* GRAPHIC BOTTLE DISPLAY WITH HOVER TILT AND SCALE */}
                <div className="relative py-6 flex items-center justify-center min-h-[300px]">
                  
                  {/* Decorative backdrop disc inside the card */}
                  <div 
                    className="absolute w-40 h-40 rounded-full border-4 border-[#111111] transition-transform duration-300"
                    style={{
                      backgroundColor: prod.bgColor,
                      transform: isHovered ? 'scale(1.15) rotate(15deg)' : 'scale(1) rotate(0deg)',
                      opacity: 0.85
                    }}
                  />

                  {/* Bottle Component with Dynamic Interactive Tilt */}
                  <div 
                    className="relative z-10 transition-transform duration-300 ease-out cursor-pointer"
                    style={{
                      transform: isHovered 
                        ? 'scale(1.08) rotate(-4deg) translateY(-6px)' 
                        : 'scale(1) rotate(0deg)'
                    }}
                    onClick={onNavigateToRetailers}
                  >
                    <ChiliBottleGraphic 
                      variant={prod.id as any} 
                      size="md" 
                    />
                  </div>

                  {/* Floating Flame or Lightning Doodle on hover */}
                  <div 
                    className={`absolute -top-1 -right-2 z-20 transition-all duration-300 ${
                      isHovered ? 'opacity-100 scale-125' : 'opacity-0 scale-75'
                    }`}
                  >
                    {prod.spiceLevel >= 4 ? (
                      <FlameVector size={42} />
                    ) : (
                      <LightningVector size={38} fill="#F4C430" />
                    )}
                  </div>
                </div>

                {/* CONTENT BLOCK */}
                <div className="mt-4 pt-4 border-t-3 border-[#333333] flex flex-col flex-1 justify-between">
                  
                  <div>
                    {/* Spice Level Chili Meter (Custom Vector Icons, NO emojis) */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((level) => (
                          <ChiliPepperVector
                            key={level}
                            size={20}
                            color={level <= prod.spiceLevel ? '#D92323' : '#444444'}
                            className={level <= prod.spiceLevel ? 'transform -rotate-6' : 'opacity-30'}
                          />
                        ))}
                      </div>
                      <span className="font-barlow font-black text-xs uppercase tracking-wider text-[#F4C430]">
                        NIVEL {prod.spiceLevel}/5
                      </span>
                    </div>

                    {/* PRODUCT NAME */}
                    <h3 className="font-anton text-2xl sm:text-3xl text-[#FFF9EE] tracking-wide uppercase mt-1">
                      {prod.name}
                    </h3>

                    {/* TAGLINE */}
                    <p className="font-barlow font-black text-sm text-[#F4C430] uppercase tracking-wider mb-2">
                      “{prod.tagline}”
                    </p>

                    {/* DESCRIPTION */}
                    <div className="mb-4">
                      <p className={`font-space text-xs sm:text-sm text-[#CCCCCC] leading-relaxed transition-all duration-300 ${
                        expandedDesc[prod.id] ? '' : 'line-clamp-2'
                      }`}>
                        {prod.description}
                      </p>
                      <button
                        type="button"
                        onClick={() => toggleDesc(prod.id)}
                        className="mt-1.5 inline-flex items-center gap-1 font-anton text-[11px] text-[#F4C430] hover:text-[#ffd752] uppercase tracking-wider underline underline-offset-2 transition-colors cursor-pointer"
                      >
                        {expandedDesc[prod.id] ? '▲ LEER MENOS' : '▼ LEER DESCRIPCIÓN COMPLETA'}
                      </button>
                    </div>

                    {/* Tasting notes pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {prod.tasteNotes.slice(0, 3).map((note) => (
                        <span 
                          key={note}
                          className="bg-[#262626] text-[#FFF9EE] text-[10px] font-barlow font-bold px-2 py-0.5 border border-[#444] uppercase tracking-wide"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* PRICE & ORDER CTA */}
                  <div className="flex items-center justify-between gap-2 pt-3 border-t border-[#333333]">
                    <div>
                      <span className="font-barlow text-[10px] text-[#888] uppercase block leading-none">
                        PRECIO
                      </span>
                      <span className="font-anton text-xl sm:text-2xl text-[#FFF9EE] tracking-tight">
                        {prod.price}
                      </span>
                    </div>

                    <button
                      id={`btn-buy-${prod.id}`}
                      onClick={onNavigateToRetailers}
                      className="inline-flex items-center gap-1.5 px-3 py-2 font-anton text-xs sm:text-sm uppercase tracking-wider border-2 border-[#111111] transition-all hover:translate-x-0.5 hover:translate-y-0.5 cursor-pointer"
                      style={{
                        backgroundColor: prod.accentColor,
                        color: '#111111',
                        boxShadow: '3px 3px 0px #000'
                      }}
                    >
                      <Store className="w-4 h-4 stroke-[2.5]" />
                      <span>DÓNDE COMPRAR</span>
                    </button>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

        {/* PROMO PACK BANNER */}
        <ScrollReveal delay={0.2} className="mt-14 p-6 sm:p-8 bg-[#F4C430] text-[#111111] border-5 border-[#111111] shadow-brutal flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#111111] text-[#F4C430] border-2 border-[#111111] shadow-brutal-sm -rotate-3">
              <Sparkles className="w-8 h-8 text-[#F4C430]" />
            </div>
            <div>
              <span className="bg-[#D92323] text-[#FFF9EE] font-anton text-xs px-2.5 py-0.5 uppercase tracking-wider">
                PACK CUARTETO FUEGO
              </span>
              <h4 className="font-anton text-3xl sm:text-4xl uppercase tracking-tight text-[#111111] mt-1">
                LLEVA LAS 4 VARIEDADES PICANTES Y SALVA EL ASADO
              </h4>
              <p className="font-barlow font-bold text-sm sm:text-base text-[#222222]">
                Incluye Pebre (Nivel 2) + Cacho (Nivel 3) + Chileno (Nivel 4) + Fuego (Nivel 5) + Pack de Stickers de regalo. Disponible en nuestros puntos oficiales.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="text-right">
              <span className="line-through font-barlow text-sm text-[#555] block">$21.760</span>
              <span className="font-anton text-3xl text-[#D92323]">$17.990 CLP</span>
            </div>
            <button
              onClick={onNavigateToRetailers}
              className="bg-[#D92323] hover:bg-[#b81818] text-[#FFF9EE] font-anton text-lg sm:text-xl tracking-wider px-6 py-3 border-3 border-[#111111] shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 transition-all uppercase cursor-pointer flex items-center gap-2"
            >
              <Store className="w-5 h-5 text-[#FFF9EE]" />
              <span>DÓNDE COMPRAR</span>
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
