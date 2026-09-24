import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Store, ChevronRight, ArrowDown } from 'lucide-react';
import { 
  ChiliBottleGraphic 
} from './Graphics';

interface HeroProps {
  onNavigateToRetailers: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateToRetailers }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Normalized between -1 and 1
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero"
      className="relative min-h-[92vh] pt-24 pb-14 bg-[#D92323] text-[#FFF9EE] overflow-hidden flex items-center border-b-6 border-[#111111]"
    >
      {/* Halftone / Screenprint background texture overlay */}
      <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />

      {/* Decorative large background watermark letters */}
      <div className="absolute -left-10 top-1/3 -translate-y-1/2 select-none pointer-events-none opacity-10">
        <span className="font-anton text-[220px] md:text-[340px] text-[#111111] leading-none block">
          VENENO
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center">
          
          {/* LEFT CONTENT: COLOSSAL POSTER TYPOGRAPHY */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            
            {/* Tagline pill */}
            <div className="inline-flex items-center gap-2 self-start bg-[#111111] text-[#F4C430] px-3.5 py-1.5 border-2 border-[#F4C430] shadow-brutal-sm mb-4 transform -rotate-1">
              <span className="font-barlow font-black text-xs md:text-sm tracking-widest uppercase">
                RECETA CRIOLLA GOURMET • CORTES NOBLES & ALTA COCINA
              </span>
            </div>

            {/* GIANT POSTER H1 */}
            <h1 className="font-anton tracking-tight uppercase leading-[0.84] text-[#FFF9EE] select-none text-left">
              <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[135px] text-[#FFF9EE] drop-shadow-md">
                CHILE
              </span>
              
              {/* THE WORD "PICA" IS ESPECIALLY COLOSSAL AND HIGHLIGHTED */}
              <span className="relative inline-block my-1 text-6xl sm:text-8xl md:text-[120px] lg:text-[150px] xl:text-[185px] text-[#F4C430] drop-shadow-[4px_4px_0px_#111111] sm:drop-shadow-[6px_6px_0px_#111111] transform -rotate-2 origin-left transition-transform hover:rotate-0">
                PICA
              </span>

              <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[135px] text-[#FFF9EE] drop-shadow-md">
                MÁS.
              </span>
            </h1>

            {/* SUBTITLE */}
            <p className="mt-5 sm:mt-6 text-base sm:text-xl md:text-2xl font-barlow font-bold text-[#F4EBD8] max-w-xl leading-snug tracking-wide">
              Ají chileno de categoría superior, ahumado a leña nativa y elaborado para elevar <span className="underline decoration-4 decoration-[#F4C430] text-[#FFF9EE]">cortes nobles</span> y cocina de autor.
            </p>

            {/* ACTION BUTTONS */}
            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                id="hero-primary-cta"
                onClick={onNavigateToRetailers}
                className="group inline-flex items-center justify-center gap-3 bg-[#F4C430] hover:bg-[#ffdc43] text-[#111111] font-anton text-lg sm:text-xl md:text-2xl tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 border-4 border-[#111111] shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase cursor-pointer"
              >
                <span>DÓNDE COMPRAR</span>
                <Store className="w-5 h-5 sm:w-6 sm:h-6 text-[#111111]" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={() => scrollToSection('productos')}
                className="inline-flex items-center justify-center gap-2 bg-[#FFF9EE] hover:bg-[#111111] hover:text-[#FFF9EE] text-[#111111] font-anton text-lg sm:text-xl md:text-2xl tracking-wider px-6 sm:px-7 py-3.5 sm:py-4 border-4 border-[#111111] shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase cursor-pointer"
              >
                <span>CONOCE EL AJÍ</span>
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
              </button>
            </div>

            {/* MICRO BADGES UNDER HERO */}
            <div className="mt-8 pt-6 border-t-2 border-[#111111]/30 flex flex-wrap items-center gap-4 text-xs font-barlow font-bold uppercase tracking-wider text-[#F4EBD8]">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-[#F4C430] rounded-full inline-block border border-[#111111]" />
                Ají Cacho de Cabra de Origen
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-[#F4C430] rounded-full inline-block border border-[#111111]" />
                Ahumado a Leña de Roble Nativo
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-[#F4C430] rounded-full inline-block border border-[#111111]" />
                Perfil Culinario Gourmet
              </span>
            </div>

          </motion.div>

          {/* RIGHT CONTENT: PRODUCT BOTTLE BREAKING THE TYPOGRAPHY + ROTATING STAMP */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0"
          >
            
            {/* Background radiant aura / badge plate */}
            <div className="absolute w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-[#F4C430] border-4 sm:border-6 border-[#111111] shadow-brutal -z-0 transform rotate-6" />

            {/* The Main Hero Bottle Graphic - Breaking the composition */}
            <div 
              className="relative z-10 transition-transform duration-200 cursor-pointer"
              style={{
                transform: `translate(${mousePos.x * 12}px, ${mousePos.y * 12}px) rotate(${mousePos.x * 3}deg)`,
              }}
              onClick={() => scrollToSection('productos')}
              title="Ver salsas"
            >
              <ChiliBottleGraphic variant="cacho" size="xl" />

              {/* Official Brand Logo Floating Badge */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-6 z-30 transform rotate-6 hover:rotate-0 transition-transform">
                <img 
                  src="/logo.png" 
                  alt="Ají Veneno" 
                  className="w-18 h-18 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-3 sm:border-4 border-[#111111] shadow-brutal bg-black object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </motion.div>

        </div>
      </div>

      {/* Bottom scroll down hint */}
      <button 
        onClick={() => scrollToSection('marquee-ticker')}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center text-[#FFF9EE] hover:text-[#F4C430] transition-colors z-20 group"
        aria-label="Desplazarse hacia abajo"
      >
        <span className="font-barlow font-bold text-[11px] tracking-widest uppercase">BAJAR AL SABOR</span>
        <ArrowDown className="w-4 h-4 animate-bounce mt-0.5 group-hover:text-[#F4C430]" />
      </button>
    </section>
  );
};
