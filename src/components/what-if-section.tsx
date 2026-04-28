import React from 'react';

export default function WhatIfSection() {
  return (
    <section className="relative w-full h-screen bg-[#1F1F1F] bg-[url('/what-if-bg.png')] bg-cover bg-center py-24 flex items-center justify-center overflow-hidden">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center">
        
        {/* SIZE REDUCED: Now scales from 2xl to 4xl. 
            SPACING REDUCED: Changed to leading-tight md:leading-snug */}
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white text-center leading-tight md:leading-snug drop-shadow-md">
          What if farms could be scanned from above, with drones capturing the full picture and software turning that data into clear insight so issues are seen early and decisions made with confidence.
        </h2>
        
      </div>
      
    </section>
  );
}