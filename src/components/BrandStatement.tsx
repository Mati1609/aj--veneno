import React from 'react';
import { 
  ChiliBottleGraphic, 
  DoodleArrow, 
  StickerBadge, 
  LightningVector, 
  ChiliPepperVector,
  ChileanStamp 
} from './Graphics';
import { ShieldAlert, Store } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const BrandStatement: React.FC<{
  onNavigateToRetailers: () => void;
}> = ({ onNavigateToRetailers }) => {
  return (
    <section 
      id="statement"
      className="relative py-20 md:py-28 bg-[#F4EBD8] text-[#111111] overflow-hidden border-b-6 border-[#111111]"
    >
      {/* Halftone texture overlay */}
      <div className="absolute inset-0 bg-halftone opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* TOP EDITORIAL BADGE */}
        <ScrollReveal className="flex items-center gap-3 mb-6">
          <span className="bg-[#111111] text-[#FFF9EE] font-anton text-sm tracking-widest px-3 py-1 uppercase border-2 border-[#111111]">
            CAPÍTULO 01
          </span>
          <span className="font-barlow font-black text-sm tracking-wider text-[#D92323] uppercase">
            DECLARACIÓN DE PRINCIPIOS PATRIOS
          </span>
        </ScrollReveal>

        {/* ASYMMETRICAL GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: HUGE EDITORIAL TITLE & MANIFESTO COPY */}
          <ScrollReveal className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="font-anton text-6xl sm:text-7xl md:text-8xl lg:text-[92px] leading-[0.88] uppercase text-[#111111] tracking-tight">
              <span className="block text-[#D92323]">NO ES</span>
              <span className="block">CUALQUIER</span>
              <span className="relative inline-block text-[#111111] bg-[#F4C430] px-3 py-1 mt-1 border-4 border-[#111111] shadow-brutal transform -rotate-1">
                AJÍ.
              </span>
            </h2>

            {/* Subtext description from user prompt */}
            <div className="mt-8 relative">
              <p className="font-barlow font-black text-xl sm:text-2xl md:text-3xl text-[#111111] leading-snug tracking-tight">
                Ají de autor con carácter chileno y perfil gourmet. Creado para elevar cortes nobles a la brasa, alta sanguchería de autor, empanadas de plateada braseada, mariscos australes y comensales exigentes.
              </p>

              <div className="mt-6 p-4 bg-[#FFF9EE] border-3 border-[#111111] shadow-brutal-sm relative">
                <div className="font-anton text-base text-[#D92323] tracking-wide mb-1 flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-[#D92323]" />
                  ADVERTENCIA DE LA CASA:
                </div>
                <p className="font-space text-sm text-[#333333] leading-relaxed">
                  Si estás buscando un ají industrial rebajado con agua y vinagre blanco de mesa, estás en la página equivocada. Este ají es un condimento premium: complejidad aromática, ahumado noble a leña viva, acidez equilibrada y un picor persistente que honra la mejor gastronomía de nuestra tierra.
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={onNavigateToRetailers}
                className="bg-[#D92323] hover:bg-[#b81818] text-[#FFF9EE] font-anton text-xl tracking-wider px-7 py-3.5 border-3 border-[#111111] shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase flex items-center gap-2.5 cursor-pointer"
              >
                <Store className="w-5 h-5 text-[#F4C430]" />
                <span>VER PUNTOS DE VENTA</span>
              </button>
            </div>

          </ScrollReveal>

          {/* RIGHT: ASYMMETRIC POSTER ARTWORK WITH ANNOTATIONS */}
          <ScrollReveal delay={0.15} className="lg:col-span-6 relative flex justify-center items-center mt-6 lg:mt-0">
            
            {/* The Main Poster Box Frame with imperfect vintage borders */}
            <div className="relative w-full max-w-lg bg-[#FFF9EE] p-6 sm:p-8 border-5 border-[#111111] shadow-brutal-lg transform rotate-1">
              
              {/* Header inside poster */}
              <div className="flex justify-between items-center border-b-3 border-[#111111] pb-3 mb-6">
                <span className="font-anton text-lg tracking-wider text-[#111111]">
                  DOC. OFICIAL N° 1810
                </span>
                <span className="bg-[#D92323] text-[#FFF9EE] font-barlow font-black text-xs px-2 py-0.5 border border-[#111111]">
                  PICA CON AUTORIDAD
                </span>
              </div>

              {/* Product illustration centered */}
              <div className="relative flex justify-center my-4 py-2">
                
                {/* Visual bottle */}
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <ChiliBottleGraphic variant="cacho" size="lg" />
                </div>

                {/* ANNOTATION 1: "PICA DE VERDAD" */}
                <div className="absolute top-8 -left-4 sm:-left-8 z-20 flex flex-col items-end transform -rotate-6">
                  <div className="bg-[#F4C430] text-[#111111] font-anton text-sm sm:text-base px-3 py-1 border-3 border-[#111111] shadow-brutal-sm">
                    ★ PICA DE VERDAD ★
                  </div>
                  <DoodleArrow direction="down-right" color="#D92323" className="w-12 h-10 mt-1" />
                </div>

                {/* ANNOTATION 2: "HECHO EN CHILE" */}
                <div className="absolute bottom-20 -right-2 sm:-right-8 z-20 flex flex-col items-start transform rotate-6">
                  <DoodleArrow direction="up-right" color="#111111" className="w-12 h-10 mb-1" />
                  <div className="bg-[#D92323] text-[#FFF9EE] font-anton text-sm sm:text-base px-3 py-1 border-3 border-[#111111] shadow-brutal-sm">
                    100% HECHO EN CHILE
                  </div>
                </div>

                {/* ANNOTATION 3: "NO APTO PARA FOMES" */}
                <div className="absolute -bottom-4 left-4 z-20 transform -rotate-3">
                  <div className="bg-[#111111] text-[#F4C430] font-anton text-xs sm:text-sm px-3 py-1 border-2 border-[#F4C430] shadow-brutal-sm flex items-center gap-1.5">
                    <LightningVector size={18} fill="#F4C430" />
                    <span>NO APTO PARA FOMES</span>
                  </div>
                </div>

              </div>

              {/* Bottom poster caption */}
              <div className="mt-6 pt-4 border-t-3 border-[#111111] flex items-center justify-between">
                <span className="font-barlow font-bold text-xs tracking-wider uppercase text-[#555]">
                  Santiago de Chile • Cacho de Cabra Auténtico
                </span>
                <span className="font-anton text-sm text-[#D92323]">
                  ORIGEN SUR
                </span>
              </div>

            </div>

          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};
