import React, { useState } from 'react';
import { SPICE_LEVELS } from '../data';
import { FlameVector, ChiliPepperVector, LightningVector, ChileanStamp, ChiliBottleGraphic } from './Graphics';
import { AlertTriangle, Milk, Flame, Trophy, ShieldCheck, ArrowRight, Store } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface SpiceMeterProps {
  onNavigateToRetailers: () => void;
}

export const SpiceMeter: React.FC<SpiceMeterProps> = ({ onNavigateToRetailers }) => {
  const [levelIndex, setLevelIndex] = useState<number>(2); // Default to "BRÍGIDO" (index 2, level 3)

  const currentLevel = SPICE_LEVELS[levelIndex];
  const isMaxLevel = levelIndex === SPICE_LEVELS.length - 1;

  // Background intensity classes based on level
  const bgColors = [
    'bg-[#397A3C]',   // Piola (chili green)
    'bg-[#E59A00]',   // Se Siente (warm mustard orange)
    'bg-[#D92323]',   // Brígido (classic chili red)
    'bg-[#B51010]',   // Está Pegando (deep searing red)
    'bg-[#7A0000]',   // Llamen a los bomberos (volcanic dark red)
  ];

  return (
    <section 
      id="medidor"
      className={`relative py-24 text-[#FFF9EE] transition-colors duration-500 overflow-hidden border-b-6 border-[#111111] ${bgColors[levelIndex]}`}
    >
      {/* Texture overlays */}
      <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />

      {/* Extreme heat shake overlay on max level */}
      {isMaxLevel && (
        <div className="absolute inset-0 bg-red-600 mix-blend-multiply opacity-25 animate-pulse pointer-events-none" />
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* HEADER */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#111111] text-[#F4C430] px-4 py-1 border-3 border-[#FFF9EE] shadow-brutal-sm font-anton text-sm uppercase tracking-widest mb-3 transform -rotate-1">
            <AlertTriangle className="w-4 h-4 text-[#F4C430]" />
            TEST OFICIAL DE RESISTENCIA PATRIA
          </div>

          <h2 className="font-anton text-5xl sm:text-6xl md:text-8xl uppercase tracking-tight text-[#FFF9EE] leading-none">
            ¿CUÁNTO <span className="text-[#F4C430] underline decoration-4 decoration-[#111111]">AGUANTAI</span>?
          </h2>

          <p className="mt-3 font-barlow font-bold text-lg sm:text-xl text-[#F4EBD8]">
            Mueve el control deslizante y calibra la intensidad: desde notas cítricas para tiraditos hasta fuego vivo para cortes nobles a la brasa.
          </p>
        </ScrollReveal>

        {/* MAIN INTERACTIVE GAUGE BOX */}
        <ScrollReveal delay={0.15} className="bg-[#111111] border-6 border-[#FFF9EE] shadow-brutal-lg p-6 sm:p-10 relative">
          
          {/* Quick Level Selector Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-8">
            {SPICE_LEVELS.map((lvl, idx) => (
              <button
                key={lvl.id}
                onClick={() => setLevelIndex(idx)}
                className={`px-3 py-2.5 font-anton text-xs sm:text-sm uppercase tracking-wider border-2 transition-all ${
                  levelIndex === idx 
                    ? 'bg-[#F4C430] text-[#111111] border-[#FFF9EE] scale-105 shadow-brutal-sm z-10' 
                    : 'bg-[#222222] text-[#AAA] border-[#444] hover:bg-[#333] hover:text-[#FFF]'
                }`}
              >
                {lvl.title}
              </button>
            ))}
          </div>

          {/* RANGE SLIDER */}
          <div className="relative my-8">
            <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-2 mb-3">
              <span className="font-barlow font-black text-xs sm:text-sm text-[#F4C430] uppercase tracking-wider order-1">
                01. PIOLA (SUAVE)
              </span>
              <span className="font-anton text-base sm:text-xl md:text-2xl text-[#FFF9EE] tracking-wider order-3 sm:order-2 w-full sm:w-auto text-center">
                POTENCIA: <span className="text-[#F4C430]">{currentLevel.heatRating}</span>
              </span>
              <span className="font-barlow font-black text-xs sm:text-sm text-[#D92323] uppercase tracking-wider order-2 sm:order-3">
                05. BOMBEROS (EXTREMO)
              </span>
            </div>

            {/* Visual Slider Bar */}
            <input 
              id="spice-slider-input"
              type="range"
              min="0"
              max={SPICE_LEVELS.length - 1}
              step="1"
              value={levelIndex}
              onChange={(e) => setLevelIndex(parseInt(e.target.value))}
              className="w-full h-6 bg-[#262626] rounded-none appearance-none cursor-pointer accent-[#F4C430] border-3 border-[#FFF9EE]"
              aria-label="Medidor de picor de Ají Veneno"
            />

            {/* Slider track dots */}
            <div className="flex justify-between px-1 mt-2">
              {SPICE_LEVELS.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-3 h-3 border-2 border-[#FFF9EE] ${i <= levelIndex ? 'bg-[#F4C430]' : 'bg-[#333]'}`} 
                />
              ))}
            </div>
          </div>

          {/* DYNAMIC RESULT DISPLAY PANEL */}
          <div className="mt-8 pt-6 border-t-3 border-[#333333] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Result Details */}
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className={`px-3 py-1 font-anton text-sm uppercase tracking-wider border-2 border-[#111111] shadow-brutal-sm ${currentLevel.accentBadge}`}>
                  NIVEL 0{currentLevel.level} • {currentLevel.heatRating}
                </span>

                {/* Flame Icons matching level */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: currentLevel.flames }).map((_, fIdx) => (
                    <div key={fIdx} className="transform -rotate-6 animate-pulse">
                      <FlameVector size={28} />
                    </div>
                  ))}
                </div>
              </div>

              {/* LEVEL TITLE WITH SHAKE AT MAX */}
              <h3 className={`font-anton text-4xl sm:text-6xl md:text-7xl uppercase text-[#FFF9EE] tracking-tight leading-none my-3 ${isMaxLevel ? 'animate-shake-hot text-[#F4C430]' : ''}`}>
                {currentLevel.title}
              </h3>

              <p className="font-barlow font-black text-xl text-[#F4C430] uppercase tracking-wider mb-2">
                “{currentLevel.subtitle}”
              </p>

              <p className="font-space text-base sm:text-lg text-[#E0E0E0] leading-relaxed max-w-2xl mb-6">
                {currentLevel.description}
              </p>

              {/* Colloquial Warning & Antidote Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 bg-[#1a1a1a] border-2 border-[#444] shadow-brutal-sm">
                  <span className="font-anton text-xs text-[#F4C430] uppercase block tracking-wider mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#F4C430]" />
                    DIAGNÓSTICO POPULAR:
                  </span>
                  <p className="font-barlow font-bold text-sm text-[#FFF9EE]">
                    {currentLevel.warning}
                  </p>
                </div>

                <div className="p-3.5 bg-[#1a1a1a] border-2 border-[#D92323] shadow-brutal-sm">
                  <span className="font-anton text-xs text-[#D92323] uppercase block tracking-wider mb-1 flex items-center gap-1.5">
                    <Milk className="w-4 h-4 text-[#D92323]" />
                    ANTÍDOTO DE EMERGENCIA:
                  </span>
                  <p className="font-barlow font-bold text-sm text-[#FFF9EE]">
                    {currentLevel.antidote}
                  </p>
                </div>
              </div>

            </div>

            {/* Right Result: Recommended Sauce Product */}
            <div className="lg:col-span-4 flex flex-col items-center text-center p-6 bg-[#1f1f1f] border-3 border-[#FFF9EE] shadow-brutal">
              <span className="font-anton text-xs tracking-wider uppercase text-[#F4C430] mb-2">
                TU SALSA RECOMENDADA
              </span>

              {/* Dynamic Bottle representation */}
              <div 
                className="my-2 cursor-pointer transform hover:scale-105 transition-transform" 
                onClick={onNavigateToRetailers}
                title="Ver puntos de venta"
              >
                <ChiliBottleGraphic 
                  variant={levelIndex <= 1 ? 'pebre' : levelIndex === 2 ? 'cacho' : levelIndex === 3 ? 'chileno' : 'fuego'} 
                  size="md" 
                />
              </div>

              <span className="font-anton text-xl uppercase text-[#FFF9EE] mt-2">
                {currentLevel.suggestedSauce}
              </span>

              <button
                onClick={onNavigateToRetailers}
                className="mt-4 w-full bg-[#F4C430] hover:bg-[#ffd94f] text-[#111111] font-anton text-base uppercase py-2.5 px-4 border-2 border-[#111111] shadow-brutal-sm flex items-center justify-center gap-2 tracking-wider cursor-pointer transition-all hover:translate-x-0.5 hover:translate-y-0.5"
              >
                <Store className="w-4 h-4" />
                <span>DÓNDE COMPRAR</span>
              </button>
            </div>

          </div>

        </ScrollReveal>

      </div>
    </section>
  );
};
