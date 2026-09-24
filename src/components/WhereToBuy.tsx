import React, { useState } from 'react';
import { motion } from 'motion/react';
import { RETAILERS } from '../data';
import { Store, ShoppingBag, MapPin, Truck, ExternalLink, Clock, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const WhereToBuy: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'TODOS' | 'Presencial' | 'Online'>('TODOS');

  const filteredRetailers = RETAILERS.filter(retailer => {
    return activeCategory === 'TODOS' || retailer.category === activeCategory;
  });

  return (
    <section 
      id="donde-comprar"
      className="relative py-24 bg-[#FFF9EE] text-[#111111] overflow-hidden border-b-6 border-[#111111]"
    >
      {/* Halftone texture */}
      <div className="absolute inset-0 bg-halftone opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* HEADER */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#D92323] text-[#FFF9EE] px-4 py-1.5 font-anton text-sm uppercase tracking-widest border-2 border-[#111111] shadow-brutal-sm mb-4 transform -rotate-1">
            <MapPin className="w-4 h-4 text-[#F4C430]" />
            CANALES OFICIALES Y EXCLUSIVOS
          </div>

          <h2 className="font-anton text-6xl sm:text-7xl md:text-9xl uppercase tracking-tight text-[#111111] leading-[0.86]">
            YA. <br />
            <span className="text-[#D92323] underline decoration-6 decoration-[#F4C430]">¿DÓNDE LO COMPRO?</span>
          </h2>

          <p className="mt-5 font-barlow font-bold text-lg sm:text-xl text-[#333] max-w-2xl mx-auto leading-relaxed">
            Sin intermediarios. No vendemos en supermercados ni en tiendas de otros negocios: encuéntranos de manera <span className="text-[#D92323] font-black">presencial en Factoría Franklin</span> o pídelo online a través de <span className="text-[#D92323] font-black">Mercado Libre</span> con despacho a todo Chile.
          </p>

          {/* EXCLUSIVITY BANNER */}
          <div className="mt-6 inline-flex flex-col sm:flex-row items-center gap-3 bg-[#111111] text-[#FFF9EE] p-3 sm:px-6 sm:py-2.5 border-3 border-[#111111] shadow-brutal-sm">
            <span className="bg-[#F4C430] text-[#111111] font-anton text-xs px-2.5 py-0.5 tracking-wider">
              100% DIRECTO
            </span>
            <span className="font-space text-xs sm:text-sm text-[#F4EBD8]">
              Cero intermediarios • Máxima frescura garantizada • Lotes artesanales
            </span>
          </div>
        </ScrollReveal>

        {/* 3 GIANT FILTER BUTTONS */}
        <ScrollReveal delay={0.1} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
          {[
            { id: 'TODOS', label: 'TODOS LOS CANALES', sub: 'Presencial & Online', icon: Sparkles },
            { id: 'Presencial', label: 'FACTORÍA FRANKLIN', sub: 'Local Presencial Santiago', icon: Store },
            { id: 'Online', label: 'MERCADO LIBRE', sub: 'Envíos a todo Chile', icon: ShoppingBag },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`p-5 border-4 border-[#111111] transition-all text-left flex flex-col justify-between shadow-brutal hover:translate-x-1 hover:translate-y-1 ${
                activeCategory === tab.id
                  ? 'bg-[#111111] text-[#F4C430] shadow-none translate-x-1 translate-y-1'
                  : 'bg-[#F4C430] hover:bg-[#ffe359] text-[#111111]'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <tab.icon className="w-6 h-6 stroke-[2.5]" />
                {activeCategory === tab.id && (
                  <span className="bg-[#D92323] text-[#FFF] font-anton text-[10px] px-2 py-0.5 border border-white">
                    ACTIVO
                  </span>
                )}
              </div>
              <div>
                <span className="font-anton text-xl sm:text-2xl uppercase tracking-tight block leading-none">
                  {tab.label}
                </span>
                <span className="font-barlow font-bold text-xs uppercase tracking-wider block mt-1.5 opacity-85">
                  {tab.sub}
                </span>
              </div>
            </button>
          ))}
        </ScrollReveal>

        {/* RETAILERS LIST: 2 OFFICIAL DESTINATIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredRetailers.map((r, idx) => {
            const isPresencial = r.category === 'Presencial';

            return (
              <motion.div 
                key={r.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className={`p-6 sm:p-8 bg-[#FFF] border-5 border-[#111111] shadow-brutal-lg flex flex-col justify-between relative ${
                  isPresencial ? 'border-t-[10px] border-t-[#D92323]' : 'border-t-[10px] border-t-[#F4C430]'
                }`}
              >
                <div>
                  {/* Category Pill + Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b-3 border-[#111111] pb-3 mb-4">
                    <span className="bg-[#111111] text-[#FFF9EE] font-anton text-xs tracking-wider px-3 py-1 uppercase flex items-center gap-1.5">
                      {isPresencial ? <Store className="w-3.5 h-3.5 text-[#F4C430]" /> : <Truck className="w-3.5 h-3.5 text-[#F4C430]" />}
                      CANAL {r.category}
                    </span>
                    <span className={`font-barlow font-black text-xs px-2.5 py-1 uppercase border-2 border-[#111111] ${
                      isPresencial ? 'bg-[#F4C430] text-[#111111]' : 'bg-[#FFE600] text-[#111111]'
                    }`}>
                      ★ {r.badge}
                    </span>
                  </div>

                  {/* Channel Title */}
                  <h3 className="font-anton text-3xl sm:text-4xl text-[#111111] uppercase tracking-tight mb-3 leading-tight">
                    {r.name}
                  </h3>

                  {/* Main Description */}
                  <p className="font-space text-sm sm:text-base text-[#333] leading-relaxed mb-5">
                    {r.locations}
                  </p>

                  {/* Details box: Address / Schedule */}
                  <div className="bg-[#F8F4EC] border-3 border-[#111111] p-4 mb-5 space-y-2.5">
                    {r.address && (
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm font-space text-[#222]">
                        <MapPin className="w-4 h-4 text-[#D92323] shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-anton uppercase block text-[#111]">Ubicación:</strong>
                          <span>{r.address}</span>
                        </div>
                      </div>
                    )}
                    {r.schedule && (
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm font-space text-[#222]">
                        <Clock className="w-4 h-4 text-[#C25E00] shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-anton uppercase block text-[#111]">Horario de atención:</strong>
                          <span>{r.schedule}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Stock Availability */}
                  <div className="p-3 bg-[#111111] text-[#FFF9EE] border-2 border-[#111111] mb-6">
                    <p className="font-barlow font-bold text-xs text-[#F4C430] uppercase">
                      ★ DISPONIBILIDAD:
                    </p>
                    <p className="font-space text-xs text-[#E5E5E5] mt-1 leading-snug">
                      {r.availability}
                    </p>
                  </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="pt-4 border-t-3 border-[#111111] flex flex-col sm:flex-row gap-3">
                  <a
                    href={r.actionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 inline-flex items-center justify-center gap-2 font-anton text-sm uppercase py-3.5 px-4 border-3 border-[#111111] shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-transform text-center ${
                      isPresencial 
                        ? 'bg-[#D92323] hover:bg-[#b81818] text-[#FFF9EE]' 
                        : 'bg-[#FFE600] hover:bg-[#ebd300] text-[#111111]'
                    }`}
                  >
                    <span>{r.actionText}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href={`https://wa.me/56945886615?text=${encodeURIComponent(`¡Hola Ají Veneno! Quisiera consultar sobre la disponibilidad de salsas en ${r.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 font-anton text-sm uppercase py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-[#111111] border-3 border-[#111111] shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-transform text-center"
                  >
                    <span>CONSULTAR POR WHATSAPP</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM BANNER: FACTORÍA FRANKLIN HIGHLIGHT */}
        <ScrollReveal delay={0.2} className="mt-14 max-w-4xl mx-auto">
          <div className="bg-[#111111] text-[#FFF9EE] p-6 sm:p-8 border-5 border-[#111111] shadow-brutal relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
              <div className="space-y-2 text-center sm:text-left">
                <span className="bg-[#D92323] text-[#FFF9EE] font-anton text-xs px-2.5 py-1 uppercase tracking-wider inline-block">
                  EXPERIENCIA GASTRONÓMICA
                </span>
                <h4 className="font-anton text-2xl sm:text-3xl uppercase tracking-tight text-[#F4C430]">
                  ¿VIENES A FRANKLIN ESTE FIN DE SEMANA?
                </h4>
                <p className="font-space text-xs sm:text-sm text-[#DDD] max-w-xl">
                  Pásate por nuestro mesón en Factoría Franklin, prueba las 8 variedades con picoteo criollo y llévate tu pack directo con los maestros que crearon las recetas.
                </p>
              </div>

              <a
                href="https://maps.google.com/?q=Factoria+Franklin+Franklin+741+Santiago"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 bg-[#F4C430] hover:bg-[#ffe359] text-[#111111] font-anton text-base uppercase py-3.5 px-6 border-3 border-[#FFF9EE] shadow-brutal-sm transition-transform hover:scale-105"
              >
                <MapPin className="w-5 h-5 text-[#D92323]" />
                <span>IR A FACTORÍA FRANKLIN</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
