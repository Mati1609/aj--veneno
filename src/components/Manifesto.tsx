import React from 'react';
import { LightningVector } from './Graphics';
import { ScrollReveal } from './ScrollReveal';

export const Manifesto: React.FC = () => {
  return (
    <section 
      id="manifiesto"
      className="relative py-28 bg-[#111111] text-[#F4EBD8] overflow-hidden border-b-6 border-[#111111]"
    >
      {/* Halftone texture overlay in warm cream */}
      <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none" />

      {/* Gigantic background watermark */}
      <div className="absolute -left-10 bottom-0 pointer-events-none opacity-5 select-none">
        <span className="font-anton text-[220px] md:text-[340px] text-[#FFF9EE] leading-none">
          CHILE
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* TOP EDITORIAL HEADER */}
        <ScrollReveal className="flex flex-wrap items-center justify-between border-b-4 border-[#333333] pb-6 mb-12">
          <div className="flex items-center gap-3">
            <span className="bg-[#D92323] text-[#FFF9EE] font-anton text-sm tracking-widest px-3 py-1 uppercase border border-[#FFF9EE]">
              MANIFIESTO PATRIO
            </span>
            <span className="font-barlow font-bold text-sm tracking-wider text-[#F4C430] uppercase">
              SIN PEDIR PERMISO DESDE EL DÍA UNO
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <LightningVector size={24} fill="#F4C430" />
            <span className="font-barlow font-bold text-xs uppercase tracking-widest text-[#888]">
              EDICIÓN LIMITADA ARTESANAL
            </span>
          </div>
        </ScrollReveal>

        {/* COLOSSAL HEADLINE */}
        <ScrollReveal delay={0.1} className="my-8">
          <h2 className="font-anton text-6xl sm:text-8xl md:text-9xl lg:text-[130px] uppercase tracking-tight leading-[0.84] text-[#F4EBD8]">
            <span className="block text-[#F4C430]">NO VINIMOS</span>
            <span className="block text-[#D92323] my-1">A SER</span>
            <span className="relative inline-block text-[#F4EBD8] underline decoration-8 decoration-[#F4C430]">
              SUAVES.
            </span>
          </h2>
        </ScrollReveal>

        {/* MANIFESTO EDITORIAL BODY */}
        <div className="mt-12 pt-8 border-t-3 border-[#262626]">
          
          {/* Main Manifesto Copy */}
          <ScrollReveal delay={0.15} className="max-w-4xl mx-auto text-center sm:text-left">
            <p className="font-barlow font-black text-2xl sm:text-3xl md:text-4xl text-[#F4EBD8] leading-snug tracking-tight mb-8">
              Nos gusta el ají, la comida con personalidad y las cosas que no necesitan pedir permiso para hacerse notar.
            </p>

            <p className="font-space text-lg sm:text-xl text-[#B0B0B0] leading-relaxed max-w-3xl">
              Por eso creamos un ají chileno de autor, aromático y con la jerarquía necesaria para acompañar cortes nobles a las brasas, empanadas de plateada braseada o alta sanguchería. Nacimos junto al fuego de leña nativa y la convicción de que el buen picor artesanal realza la alta gastronomía de nuestro país.
            </p>

            {/* Credo pillars */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="p-5 bg-[#1a1a1a] border-2 border-[#D92323] shadow-brutal-sm text-left">
                <span className="font-anton text-xl text-[#F4C430] block mb-1">01. MATERIA PRIMA NOBLE</span>
                <p className="font-barlow text-sm text-[#CCCCCC]">
                  Ají cosechado en valles seleccionados. Cero químicos industriales ni aditivos artificiales.
                </p>
              </div>

              <div className="p-5 bg-[#1a1a1a] border-2 border-[#F4C430] shadow-brutal-sm text-left">
                <span className="font-anton text-xl text-[#D92323] block mb-1">02. TIERRA Y HUMO</span>
                <p className="font-barlow text-sm text-[#CCCCCC]">
                  Cacho de cabra del sur, roble nativo sustentable y ajos chilotes asados al rescoldo.
                </p>
              </div>

              <div className="p-5 bg-[#1a1a1a] border-2 border-[#FFF9EE] shadow-brutal-sm text-left">
                <span className="font-anton text-xl text-[#FFF9EE] block mb-1">03. CHILE PICA DE AUTOR</span>
                <p className="font-barlow text-sm text-[#CCCCCC]">
                  Equilibrio y acidez calibrada para respetar y ensalzar la identidad de cada plato.
                </p>
              </div>
            </div>

          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};
