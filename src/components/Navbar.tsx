import React, { useState, useEffect } from 'react';
import { Menu, X, Store } from 'lucide-react';
import { BRAND_NAME } from '../data';

interface NavbarProps {
  onNavigateToRetailers: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateToRetailers }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'PRODUCTOS', href: '#productos' },
    { label: 'SIN PICANTE', href: '#sin-picante' },
    { label: 'QUÉ TAN PICANTE', href: '#medidor' },
    { label: 'LE QUEDA A TODO', href: '#comidas' },
    { label: 'NOSOTROS', href: '#manifiesto' },
    { label: 'DÓNDE COMPRAR', href: '#donde-comprar' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled 
          ? 'bg-[#111111] border-b-4 border-[#F4C430] py-2.5 shadow-brutal' 
          : 'bg-[#D92323] border-b-4 border-[#111111] py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* BRAND IDENTITY */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 group text-decoration-none"
          title={BRAND_NAME}
        >
          <img 
            src="/logo.png" 
            alt="Ají Veneno Logo" 
            className="w-9 h-9 sm:w-11 sm:h-11 object-contain rounded-full border-2 border-[#111111] shadow-brutal-sm group-hover:scale-105 transition-transform shrink-0 bg-black"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col leading-none">
            <span className="font-anton text-xl sm:text-2xl md:text-3xl tracking-tight text-[#FFF9EE] group-hover:text-[#F4C430] transition-colors uppercase">
              {BRAND_NAME}
            </span>
            <span className="font-barlow font-black text-[8px] sm:text-[10px] tracking-[0.18em] sm:tracking-[0.25em] text-[#F4C430] uppercase">
              AJÍ CHILENO • HECHO PA' PICAR
            </span>
          </div>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.href)}
              className="font-bebas text-xl text-[#FFF9EE] hover:text-[#F4C430] tracking-wider transition-colors relative py-1 group cursor-pointer"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F4C430] transition-all group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* ACTION BUTTONS */}
        <div className="flex items-center gap-3">
          {/* MAIN CTA BUTTON - DÓNDE COMPRAR */}
          <button
            id="nav-cta-btn"
            onClick={onNavigateToRetailers}
            className="hidden sm:inline-flex items-center gap-2 bg-[#F4C430] hover:bg-[#ffe359] text-[#111111] font-anton text-base sm:text-lg tracking-wider px-5 py-2 border-3 border-[#111111] shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase cursor-pointer"
          >
            <Store className="w-5 h-5 text-[#111111]" />
            DÓNDE COMPRAR
          </button>

          {/* MOBILE TOGGLE */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 bg-[#F4C430] text-[#111111] border-2 border-[#111111] shadow-brutal-sm cursor-pointer"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 stroke-[3]" /> : <Menu className="w-6 h-6 stroke-[3]" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-panel"
          className="lg:hidden bg-[#111111] border-b-4 border-[#F4C430] px-6 py-6 mt-2 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="text-left font-anton text-2xl text-[#FFF9EE] hover:text-[#F4C430] tracking-wider py-2 border-b border-[#222222] flex items-center justify-between cursor-pointer"
              >
                <span>{link.label}</span>
                <span className="text-[#F4C430] text-sm font-barlow">VER →</span>
              </button>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToRetailers();
              }}
              className="mt-3 w-full bg-[#F4C430] hover:bg-[#ffe359] text-[#111111] font-anton text-xl py-3.5 border-3 border-[#111111] shadow-brutal flex items-center justify-center gap-2 uppercase tracking-wide cursor-pointer"
            >
              <Store className="w-6 h-6 text-[#111111]" />
              VER PUNTOS DE VENTA
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
