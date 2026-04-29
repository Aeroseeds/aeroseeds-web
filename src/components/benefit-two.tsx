import Image from "next/image";

export default function BenefitTwo() {
  return (
    // UPDATED: Background changed to the specific dark slate #1D262A
    <section className="relative w-full bg-[#1D262A] pt-16 md:pt-24 overflow-hidden flex flex-col items-center">
      
      {/* --- TEXT CONTENT --- */}
      <div className="text-center px-4 w-full mb-10 md:mb-16 z-10">
        
        {/* UPDATED: Eyebrow text changed to the bright cyan #51CAFF */}
        <p className="font-mono text-[#51CAFF] tracking-[0.15em] uppercase text-xs md:text-sm mb-3 md:mb-4 font-bold">
          BENEFIT 02
        </p>
        
        {/* UPDATED: Main title text changed to the bright cyan #51CAFF */}
        <h2 className="font-sans font-normal text-4xl sm:text-5xl md:text-[80px] text-[#51CAFF] mb-4 md:mb-6 drop-shadow-md leading-tight md:leading-none">
          Stronger harvests
        </h2>
        
        {/* VERIFIED: Description text remains pure white */}
        <p className="font-mono text-white text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">
          Grow healthier crops with early action and better care across the<br className="hidden md:block" /> entire field.
        </p>
      </div>

      {/* --- DESKTOP IMAGE (COMBINED LAYOUT) --- */}
      <div className="hidden md:block w-full max-w-[1600px] mx-auto z-0">
        <Image 
          src="/benefit-02-desktop.png" 
          alt="Stronger harvests desktop view" 
          width={1600} 
          height={900} 
          className="w-full h-auto"
          priority
        />
      </div>

      {/* --- MOBILE IMAGE (COMBINED LAYOUT) --- */}
      <div className="block md:hidden w-full z-0">
        <Image 
          src="/benefit-02-mobile.png" 
          alt="Stronger harvests mobile view" 
          width={800} 
          height={1200} 
          className="w-full h-auto"
          priority
        />
      </div>

    </section>
  );
}