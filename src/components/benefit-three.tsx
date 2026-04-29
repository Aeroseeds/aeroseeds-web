import Image from "next/image";

export default function BenefitThree() {
  return (
    // UPDATED: Background to the darker green #093314
    <section className="relative w-full bg-[#093314] pt-16 md:pt-24 overflow-hidden flex flex-col items-center">
      
      {/* --- TEXT CONTENT --- */}
      <div className="text-center px-4 w-full mb-10 md:mb-16 z-10">
        
        {/* UPDATED: Eyebrow text to the bright green #3FBE60 */}
        <p className="font-mono text-[#3FBE60] tracking-[0.15em] uppercase text-xs md:text-sm mb-3 md:mb-4 font-bold">
          BENEFIT 03
        </p>
        
        {/* UPDATED: Main title text to the bright green #3FBE60 */}
        <h2 className="font-sans font-normal text-4xl sm:text-5xl md:text-[80px] text-[#3FBE60] mb-4 md:mb-6 drop-shadow-md leading-tight md:leading-none">
          Better food outcomes
        </h2>
        
        {/* UPDATED: Description text to pure white */}
        <p className="font-mono text-white text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">
          Produce cleaner, well-grown food with fewer inputs, improving quality<br className="hidden md:block" /> and accessibility.
        </p>
      </div>

      {/* --- DESKTOP IMAGE (COMBINED LAYOUT) --- */}
      <div className="hidden md:block w-full max-w-[1600px] mx-auto z-0">
        <Image 
          src="/benefit-03-desktop.png" 
          alt="Better food outcomes desktop composite" 
          width={1600} 
          height={900} 
          className="w-full h-auto"
          priority
        />
      </div>

      {/* --- MOBILE IMAGE (COMBINED LAYOUT) --- */}
      <div className="block md:hidden w-full z-0">
        <Image 
          src="/benefit-03-mobile.png" 
          alt="Better food outcomes mobile composite" 
          width={800} 
          height={1200} 
          className="w-full h-auto"
          priority
        />
      </div>

    </section>
  );
}