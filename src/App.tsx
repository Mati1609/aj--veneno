/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { BrandStatement } from './components/BrandStatement';
import { Products } from './components/Products';
import { MildSauces } from './components/MildSauces';
import { SpiceMeter } from './components/SpiceMeter';
import { FoodPairings } from './components/FoodPairings';
import { Manifesto } from './components/Manifesto';
import { SocialGallery } from './components/SocialGallery';
import { WhereToBuy } from './components/WhereToBuy';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export default function App() {
  const scrollToWhereToBuy = () => {
    const el = document.getElementById('donde-comprar');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#111111] text-[#FFF9EE] font-space selection:bg-[#F4C430] selection:text-[#111111]">
      {/* Custom Chili Cursor for interactive desktop experience */}
      <CustomCursor />

      {/* Sticky Top Header */}
      <Navbar onNavigateToRetailers={scrollToWhereToBuy} />

      {/* Main Landing Page Content */}
      <main>
        {/* 1. Impactful Hero Section */}
        <Hero onNavigateToRetailers={scrollToWhereToBuy} />

        {/* 2. Scrolling Marquee Ribbon */}
        <Marquee />

        {/* 3. Editorial Statement: "NO ES CUALQUIER AJÍ." */}
        <BrandStatement onNavigateToRetailers={scrollToWhereToBuy} />

        {/* 4. Products: "ELIGE TU NIVEL DE SUFRIMIENTO" */}
        <Products onNavigateToRetailers={scrollToWhereToBuy} />

        {/* 4.1 Mild Sauces: "SALSAS SIN PICANTE (ZONA BLANCA)" */}
        <MildSauces onNavigateToRetailers={scrollToWhereToBuy} />

        {/* 5. Interactive Spice Resistance Gauge: "¿CUÁNTO AGUANTAI?" */}
        <SpiceMeter onNavigateToRetailers={scrollToWhereToBuy} />

        {/* 6. Food Pairings Collage: "LE QUEDA BIEN A CASI TODO." */}
        <FoodPairings onNavigateToRetailers={scrollToWhereToBuy} />

        {/* 7. Manifesto Section: "NO VINIMOS A SER SUAVES." */}
        <Manifesto />

        {/* 8. Social UGC Gallery: "GENTE QUE LE PONE" */}
        <SocialGallery />

        {/* 9. Retailers & Map: "YA. ¿DÓNDE LO COMPRO?" */}
        <WhereToBuy />
      </main>

      {/* 10. Colossal Graphic Footer */}
      <Footer onNavigateToRetailers={scrollToWhereToBuy} />

      {/* Floating WhatsApp Contact Button */}
      <WhatsAppFloatingButton phoneNumber="56945886615" />
    </div>
  );
}
