import React from 'react';

export default function WhatIfSection() {
  return (
    <section className="relative w-full h-screen bg-[#1F1F1F] bg-[url('/what-if-bg.png')] bg-cover bg-center py-24 flex items-center justify-center overflow-hidden">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center">
        
        {/* FONT: font-sans (Your Tiempos Regular) 
            WEIGHT: font-normal (Stops the distortion/stretching)
            SIZE: 4xl to 6xl 
            SPACING: leading-relaxed */}
        <h2 className="font-sans font-normal text-4xl md:text-5xl lg:text-6xl text-white text-center leading-relaxed drop-shadow-md">
          What if farms could be scanned from above, with drones capturing the full picture and software turning that data into clear insight so issues are seen early and decisions made with confidence.
        </h2>
        
      </div>
      
    </section>
  );
}