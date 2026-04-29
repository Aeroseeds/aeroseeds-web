import Image from "next/image";

export default function BenefitTwo() {
  return (
    // DARK BACKGROUND: Using the deep charcoal/blue from the design
    <section className="relative w-full bg-[#1A2226] pt-16 md:pt-24 overflow-hidden flex flex-col items-center">
      
      {/* --- TEXT CONTENT --- */}
      <div className="text-center px-4 w-full mb-10 md:mb-16 z-10">
        
        {/* EYEBROW: Smaller text, bright blue-cyan color */}
        <p className="font-mono text-[#4AFFFF] tracking-[0.15em] uppercase text-xs md:text-sm mb-3 md:mb-4 font-bold">
          BENEFIT 02
        </p>
        
        {/* TITLE: Large, elegant serif font in bright blue-cyan */}
        <h2 className="font-sans font-normal text-4xl sm:text-5xl md:text-[80px] text-[#4AFFFF] mb-4 md:mb-6 drop-shadow-md leading-tight md:leading-none">
          Stronger harvests
        </h2>
        
        {/* DESCRIPTION: Pure white, mono font, max-width for readability */}
        <p className="font-mono text-white text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">
          Grow healthier crops with early action and better care across the<br className="hidden md:block" /> entire field.
        </p>
      </div>

      {/* --- DESKTOP IMAGE (COMBINED LAYOUT) --- */}
      {/* hidden on mobile, block on medium screens and up */}
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
      {/* block on mobile, hidden on medium screens and up */}
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