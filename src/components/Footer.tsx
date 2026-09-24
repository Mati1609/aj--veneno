import React, { useState } from 'react';
import { BRAND_NAME, BRAND_TAGLINE, FAQS } from '../data';
import { ChileanStamp, ChiliPepperVector, FlameVector } from './Graphics';
import { ChevronDown, ChevronUp, Instagram, Music2, Mail, Phone, MapPin, ArrowUp, Store, ShoppingBag } from 'lucide-react';

export const Footer: React.FC<{
  onNavigateToRetailers: () => void;
}> = ({ onNavigateToRetailers }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="footer"
      className="relative bg-[#111111] text-[#FFF9EE] pt-20 pb-12 overflow-hidden border-t-6 border-[#F4C430]"
    >
      {/* Halftone texture */}
      <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* TOP ROW: FAQS ACCORDION & BRAND INFO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b-4 border-[#333333]">
          
          {/* LEFT: FAQS ACCORDION */}
          <div className="lg:col-span-7">
            <div className="inline-flex max-w-full items-center gap-2 bg-[#F4C430] text-[#111111] px-3.5 py-1 font-anton text-xs sm:text-sm uppercase tracking-widest border-2 border-[#FFF9EE] shadow-brutal-sm mb-6">
              PREGUNTAS FRECUENTES (PAL QUE TIENE DUDAS)
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div 
                    key={idx}
                    className="border-3 border-[#333] bg-[#1a1a1a] transition-colors hover:border-[#F4C430]"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-4 font-anton text-lg sm:text-xl uppercase tracking-wide text-[#FFF9EE] hover:text-[#F4C430]"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#F4C430] shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#888] shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 font-space text-sm sm:text-base text-[#D0D0D0] leading-relaxed border-t border-[#333]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: CONTACT, SOCIAL & LINKS */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#D92323] text-[#FFF9EE] px-3.5 py-1 font-anton text-sm uppercase tracking-widest border-2 border-[#FFF9EE] shadow-brutal-sm mb-6">
                CANALES Y CONTACTO
              </div>

              <div className="space-y-3 font-space text-sm">
                <div className="flex items-center gap-3 p-3 bg-[#1a1a1a] border-2 border-[#333]">
                  <Instagram className="w-5 h-5 text-[#F4C430]" />
                  <div>
                    <span className="font-anton text-sm block">INSTAGRAM</span>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-xs text-[#AAA] hover:text-[#F4C430]">
                      @ajiveneno.cl
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-[#1a1a1a] border-2 border-[#333]">
                  <Music2 className="w-5 h-5 text-[#D92323]" />
                  <div>
                    <span className="font-anton text-sm block">TIKTOK</span>
                    <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="text-xs text-[#AAA] hover:text-[#F4C430]">
                      @ajiveneno_oficial
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-[#1a1a1a] border-2 border-[#333]">
                  <Store className="w-5 h-5 text-[#F4C430]" />
                  <div>
                    <span className="font-anton text-sm block">LOCAL PRESENCIAL</span>
                    <span className="text-xs text-[#AAA]">Factoría Franklin • Franklin 741, Santiago</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-[#1a1a1a] border-2 border-[#333]">
                  <ShoppingBag className="w-5 h-5 text-[#FFE600]" />
                  <div>
                    <span className="font-anton text-sm block">VENTA ONLINE</span>
                    <span className="text-xs text-[#AAA]">Tienda Oficial en Mercado Libre • Envíos a todo Chile</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-[#1a1a1a] border-2 border-[#333]">
                  <Mail className="w-5 h-5 text-[#FFF9EE]" />
                  <div>
                    <span className="font-anton text-sm block">CONTACTO / CONSULTAS</span>
                    <span className="text-xs text-[#AAA]">contacto@ajiveneno.cl</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Order CTA in footer */}
            <div className="mt-8 pt-6 border-t border-[#333]">
              <button
                onClick={onNavigateToRetailers}
                className="w-full bg-[#F4C430] hover:bg-[#ffdc43] text-[#111111] font-anton text-xl py-3.5 border-3 border-[#111111] shadow-brutal-red uppercase tracking-wider transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Store className="w-5 h-5 text-[#111111]" />
                <span>VER PUNTOS DE VENTA</span>
              </button>
            </div>

          </div>

        </div>

        {/* COLOSSAL FOOTER BRAND NAME TYPOGRAPHY */}
        <div className="py-12 select-none overflow-hidden text-center flex flex-col items-center">
          <img 
            src="/logo.png" 
            alt="Ají Veneno" 
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-3 border-[#F4C430] shadow-brutal mb-6 bg-black object-contain hover:scale-105 transition-transform cursor-pointer"
            onClick={scrollToTop}
            referrerPolicy="no-referrer"
          />
          <h2 className="font-anton text-[52px] sm:text-[100px] md:text-[150px] lg:text-[210px] leading-[0.8] uppercase tracking-tighter text-[#FFF9EE] opacity-90 transition-all hover:text-[#D92323] cursor-pointer" onClick={scrollToTop}>
            {BRAND_NAME}
          </h2>
        </div>

        {/* BOTTOM FINAL PHRASE WITH STAMPS */}
        <div className="pt-8 border-t-4 border-[#333333] flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#222] border-2 border-[#F4C430] flex items-center justify-center shrink-0">
              <FlameVector size={24} />
            </div>
            <div>
              <p className="font-anton text-xl sm:text-2xl text-[#F4C430] uppercase tracking-wide leading-none">
                “HECHO EN CHILE. HECHO PA’ PICAR.”
              </p>
              <span className="font-barlow font-bold text-xs text-[#888] uppercase tracking-widest mt-1 block">
                © {new Date().getFullYear()} {BRAND_NAME}. Marca Registrada ®. Todos los derechos reservados.
              </span>
            </div>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 bg-[#222] hover:bg-[#F4C430] hover:text-[#111111] text-[#FFF9EE] font-anton text-sm px-4 py-2 border-2 border-[#444] transition-colors"
          >
            <span>SUBIR AL COMIENZO</span>
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

      </div>
    </footer>
  );
};
