import Image from "next/image";

export default function BenefitOne() {
  return (
    // UPDATED: Background changed to the specific dark brown #331F09
    <section className="relative w-full bg-[#331F09] pt-16 md:pt-24 overflow-hidden flex flex-col items-center">
      
      {/* --- TEXT CONTENT --- */}
      <div className="text-center px-4 w-full mb-10 md:mb-16 z-10">
        
        {/* UPDATED: Eyebrow text changed to the bright orange #FFAB4F */}
        <p className="font-mono text-[#FFAB4F] tracking-[0.15em] uppercase text-xs md:text-sm mb-3 md:mb-4 font-bold">
          BENEFIT 01
        </p>
        
        {/* UPDATED: Main title text changed to the bright orange #FFAB4F */}
        <h2 className="font-sans font-normal text-4xl sm:text-5xl md:text-[80px] text-[#FFAB4F] mb-4 md:mb-6 drop-shadow-md leading-tight md:leading-none">
          Constant awareness
        </h2>
        
        {/* VERIFIED: Description text remains pure white */}
        <p className="font-mono text-white text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">
          Monitor your farm continuously, with a clear view of what's happening<br className="hidden md:block" /> at every moment.
        </p>
      </div>

      {/* --- DESKTOP IMAGE --- */}
      <div className="hidden md:block w-full max-w-[1600px] mx-auto z-0">
        <Image 
          src="/benefit-desktop.png" 
          alt="Constant awareness desktop view" 
          width={1600} 
          height={900} 
          className="w-full h-auto"
          priority
        />
      </div>

      {/* --- MOBILE IMAGE --- */}
      <div className="block md:hidden w-full z-0">
        <Image 
          src="/benefit-mobile.png" 
          alt="Constant awareness mobile view" 
          width={800} 
          height={1200} 
          className="w-full h-auto"
          priority
        />
      </div>

    </section>
  );
}