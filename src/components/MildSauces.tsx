import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MILD_PRODUCTS } from '../data';
import { Product } from '../types';
import { ChiliBottleGraphic, ChileanStamp, StickerBadge, DoodleArrow } from './Graphics';
import { Heart, Sparkles, Store, ShieldCheck, Check, Info } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface MildSaucesProps {
  onNavigateToRetailers: () => void;
}

export const MildSauces: React.FC<MildSaucesProps> = ({ onNavigateToRetailers }) => {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [expandedDesc, setExpandedDesc] = useState<Record<string, boolean>>({});

  const toggleDesc = (id: string) => {
    setExpandedDesc(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section 
      id="sin-picante"
      className="relative py-24 bg-[#F4EBD8] text-[#111111] overflow-hidden border-b-6 border-[#111111]"
    >
      {/* Halftone texture overlay */}
      <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />

      {/* Gigantic background watermark */}
      <div className="absolute -right-8 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-5">
        <span className="font-anton text-[200px] md:text-[300px] text-[#111111] leading-none block">
          SUAVE
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* EDITORIAL HEADER */}
        <ScrollReveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-[#2E5B36] text-[#FFF9EE] px-4 py-1 font-anton text-sm uppercase tracking-widest border-2 border-[#111111] shadow-brutal-sm mb-4 transform -rotate-1">
              <ShieldCheck className="w-4 h-4 text-[#F4C430]" />
              ZONA BLANCA • PAL COMPADRE QUE NO COME PICANTE
            </div>

            <h2 className="font-anton text-5xl sm:text-7xl md:text-8xl uppercase tracking-tight text-[#111111] leading-[0.88]">
              SALSAS SIN PICANTE, <br />
              <span className="text-[#C84B31] underline decoration-6 decoration-[#F4C430]">
                PERO CON CALETA DE SABOR.
              </span>
            </h2>
          </div>

          <div className="lg:max-w-md bg-[#FFF9EE] p-5 border-3 border-[#111111] shadow-brutal">
            <div className="flex items-center gap-2 text-[#C84B31] font-anton text-xs uppercase mb-1">
              <Info className="w-4 h-4" />
              NO LOS ÍBAMOS A DEJAR COMIENDO SECO
            </div>
            <p className="font-barlow font-bold text-sm sm:text-base text-[#333] leading-relaxed">
              En toda mesa o quincho hay comensales que prefieren no arriesgarse al ardor. Para ellos creamos emulsiones y salsas criollas nobles con <strong>0% picor</strong>: hierbas frescas de altura, tomates limachinos seleccionados y ajos chilotes asados al rescoldo.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 MILD PRODUCTS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {MILD_PRODUCTS.map((prod: Product, idx: number) => {
            const isHovered = hoveredProduct === prod.id;

            return (
              <motion.div
                key={prod.id}
                id={`mild-card-${prod.id}`}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.12,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                onMouseEnter={() => setHoveredProduct(prod.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                className="relative bg-[#FFF9EE] border-5 border-[#111111] shadow-brutal-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-2 select-none"
              >
                {/* Header colored banner */}
                <div 
                  className="p-4 border-b-4 border-[#111111] flex items-center justify-between"
                  style={{ backgroundColor: prod.bgColor, color: prod.textColor }}
                >
                  <div>
                    <span className="font-barlow font-black text-xs uppercase tracking-wider block opacity-90">
                      VARIEDAD N° 0{idx + 1} • {prod.badge}
                    </span>
                    <h3 className="font-anton text-2xl sm:text-3xl uppercase tracking-tight leading-none mt-0.5">
                      {prod.name}
                    </h3>
                  </div>

                  {/* 0 Picor Pill */}
                  <div className="bg-[#111111] text-[#F4C430] border-2 border-[#FFF9EE] px-2.5 py-1 font-anton text-xs uppercase tracking-wider shrink-0">
                    0/5 PICOR
                  </div>
                </div>

                {/* Center Visual: Sauce Bottle Graphic with soft pedestal aura */}
                <div className="relative py-8 px-4 flex items-center justify-center bg-radial from-[#F4EBD8] to-[#FFF9EE] min-h-[300px] overflow-hidden">
                  
                  {/* Subtle aura plate */}
                  <div 
                    className="absolute w-44 h-44 rounded-full border-3 border-[#111111] opacity-25 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: prod.bgColor }}
                  />

                  {/* Bottle Graphic */}
                  <div className="relative z-10 transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-300">
                    <ChiliBottleGraphic 
                      variant={prod.id as any} 
                      size="md" 
                      interactive={false} 
                    />
                  </div>

                  {/* Flavor badge floating */}
                  <div className="absolute bottom-3 left-4 bg-[#111111] text-[#FFF9EE] font-anton text-xs px-2.5 py-1 border border-[#FFF9EE] shadow-brutal-sm -rotate-2">
                    ★ {prod.volume}
                  </div>

                  <div className="absolute top-4 right-4 bg-[#F4C430] text-[#111111] font-barlow font-bold text-[11px] px-2 py-0.5 border border-[#111111] shadow-brutal-sm rotate-2">
                    CERO ARDOR
                  </div>
                </div>

                {/* Card Body: Description & Notes */}
                <div className="p-6 border-t-4 border-[#111111] flex-1 flex flex-col justify-between bg-[#FFF9EE]">
                  <div>
                    <p 
                      className="font-anton text-lg uppercase tracking-wide mb-2"
                      style={{ color: prod.bgColor }}
                    >
                      “{prod.tagline}”
                    </p>

                    <div className="mb-4">
                      <p className={`font-space text-sm text-[#444] leading-relaxed transition-all duration-300 ${
                        expandedDesc[prod.id] ? '' : 'line-clamp-2'
                      }`}>
                        {prod.description}
                      </p>
                      <button
                        type="button"
                        onClick={() => toggleDesc(prod.id)}
                        className="mt-1.5 inline-flex items-center gap-1 font-anton text-[11px] text-[#111111] hover:text-[#D92323] uppercase tracking-wider underline underline-offset-2 transition-colors cursor-pointer"
                      >
                        {expandedDesc[prod.id] ? '▲ LEER MENOS' : '▼ LEER DESCRIPCIÓN COMPLETA'}
                      </button>
                    </div>

                    {/* Taste Notes Chips */}
                    <div className="mb-4">
                      <span className="font-barlow font-black text-[11px] uppercase tracking-wider text-[#777] block mb-1.5">
                        INGREDIENTES Y NOTAS:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {prod.tasteNotes.map((note, nIdx) => (
                          <span 
                            key={nIdx}
                            className="bg-[#F4EBD8] text-[#111111] border border-[#111111] px-2 py-0.5 font-space text-xs font-semibold"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Pairing hint */}
                    <div className="p-3 bg-[#F4EBD8] border-2 border-[#111111] mb-5">
                      <span className="font-barlow font-black text-[10px] text-[#2E5B36] uppercase tracking-wider block">
                        MARIDAJE CHILENO:
                      </span>
                      <p className="font-space text-xs text-[#222] mt-0.5">
                        {prod.pairing}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-3 border-t-2 border-[#111111] flex items-center justify-between">
                    <div>
                      <span className="font-barlow font-bold text-xs text-[#666] block">PRECIO UNITARIO</span>
                      <span className="font-anton text-2xl text-[#111111]">{prod.price}</span>
                    </div>

                    <button
                      onClick={onNavigateToRetailers}
                      className="inline-flex items-center gap-2 bg-[#2E5B36] hover:bg-[#234529] text-[#FFF9EE] font-anton text-xs sm:text-sm px-4 py-2.5 border-2 border-[#111111] shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all uppercase cursor-pointer"
                    >
                      <Store className="w-4 h-4" />
                      <span>DÓNDE COMPRAR</span>
                    </button>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

        {/* PROMO PACK BANNER: "EL PACK FAMILIAR" */}
        <ScrollReveal delay={0.2} className="mt-14 p-6 sm:p-8 bg-[#111111] text-[#FFF9EE] border-5 border-[#111111] shadow-brutal-lg flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex items-center gap-5">
            <div className="hidden sm:flex w-16 h-16 bg-[#F4C430] text-[#111111] border-3 border-[#FFF9EE] items-center justify-center font-anton text-2xl transform -rotate-6 shrink-0 shadow-brutal-sm">
              MIX
            </div>
            <div>
              <div className="flex items-center gap-2 text-[#F4C430] font-anton text-xs uppercase tracking-widest mb-1">
                <Sparkles className="w-4 h-4" />
                CONVIVENCIA PACÍFICA EN LA MESA
              </div>
              <h3 className="font-anton text-2xl sm:text-4xl uppercase tracking-tight text-[#FFF9EE]">
                ¿QUIERES UN PACK CON PICANTES Y SIN PICANTE?
              </h3>
              <p className="font-barlow font-bold text-sm sm:text-base text-[#BBB] max-w-xl mt-1">
                Lleva botellas de fuego patrio para los valientes y suaves para los que piden tregua. Disponibles en nuestros puntos oficiales de venta.
              </p>
            </div>
          </div>

          <button
            onClick={onNavigateToRetailers}
            className="w-full md:w-auto bg-[#F4C430] hover:bg-[#ffdc43] text-[#111111] font-anton text-lg sm:text-xl px-8 py-4 border-3 border-[#FFF9EE] shadow-brutal-red uppercase tracking-wider shrink-0 transition-all hover:translate-x-1 hover:translate-y-1 cursor-pointer flex items-center justify-center gap-2"
          >
            <Store className="w-5 h-5 text-[#111111]" />
            <span>VER PUNTOS DE VENTA</span>
          </button>
        </ScrollReveal>

      </div>
    </section>
  );
};
