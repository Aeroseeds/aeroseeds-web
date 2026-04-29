import Image from "next/image";

export default function BenefitOne() {
  return (
    // Reduced top padding on mobile (pt-16) while keeping desktop (pt-24)
    <section className="relative w-full bg-[#2A1615] pt-16 md:pt-24 overflow-hidden flex flex-col items-center">
      
      {/* --- TEXT CONTENT --- */}
      <div className="text-center px-4 w-full mb-10 md:mb-16">
        
        {/* MOBILE FIX: Dropped to text-xs */}
        <p className="font-mono text-[#F29646] tracking-[0.15em] uppercase text-xs md:text-sm mb-3 md:mb-4 font-bold">
          BENEFIT 01
        </p>
        
        {/* MOBILE FIX: Dropped to text-4xl (scales to 5xl on tablets, and 80px on desktop) */}
        <h2 className="font-sans font-normal text-4xl sm:text-5xl md:text-[80px] text-[#F29646] mb-4 md:mb-6 drop-shadow-md leading-tight md:leading-none">
          Constant awareness
        </h2>
        
        {/* MOBILE FIX: Dropped to text-sm */}
        <p className="font-mono text-white text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">
          Monitor your farm continuously, with a clear view of what's happening<br className="hidden md:block" /> at every moment.
        </p>
      </div>

      {/* --- DESKTOP IMAGE --- */}
      <div className="hidden md:block w-full max-w-[1600px] mx-auto">
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
      <div className="block md:hidden w-full">
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