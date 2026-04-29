import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#2A1615]">
      
      {/* --- LAYER 0: The Combined Background --- */}
      {/* This is your newly exported image with the blur baked right in */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-bg.png" 
          alt="Sunset over an agricultural farm"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Subtle gradient to protect navbar links */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/30 to-transparent"></div>
      </div>

      {/* --- LAYER 10: Floating Drones --- */}
      {/* Sits right on top of the combined background */}
      <div className="absolute top-[15%] md:top-[12%] left-1/2 -translate-x-1/2 md:left-[12%] md:translate-x-0 w-64 md:w-72 z-10 pointer-events-none">
        <Image 
          src="/drones.png" 
          alt="Survey drones"
          width={400}
          height={200}
          className="w-full h-auto object-contain drop-shadow-xl"
        />
      </div>

      {/* --- LAYER 20: UI Content (Navbar & Text) --- */}
      <div className="relative z-20 w-full h-full flex flex-col">
        
        {/* Navigation Bar */}
        <nav className="w-full max-w-7xl mx-auto px-6 py-6 md:py-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Aeroseeds Logo" width={32} height={32} />
            <span className="hidden md:block font-sans text-3xl text-brand-cream tracking-tight mt-1">
              aeroseeds
            </span>
          </Link>

          <div className="hidden md:flex gap-12 font-mono text-sm text-brand-cream absolute left-1/2 -translate-x-1/2">
            <Link href="#problem" className="hover:text-white transition-colors">The Problem</Link>
            <Link href="#idea" className="hover:text-white transition-colors">The Idea</Link>
            <Link href="#approach" className="hover:text-white transition-colors">Our Approach</Link>
          </div>
          
          <div className="hidden md:block w-[120px]"></div> 
        </nav>

        {/* Main Hero Text */}
        <div className="flex-1 flex flex-col items-center mt-[25vh] md:mt-16 px-4 text-center">
          
          {/* SPACING REDUCED: Changed to leading-[1.05] for ultra-tight line spacing */}
          <h1 className="font-mono text-4xl md:text-6xl lg:text-7xl text-brand-cream max-w-4xl mb-6 drop-shadow-md leading-[1.05]">
            Africa's farms are still<br className="hidden md:block" />operating blind
          </h1>
          
          {/* SPACING REDUCED: Changed to leading-snug */}
          <p className="font-serif text-brand-white text-sm md:text-base max-w-2xl mb-8 md:mb-10 leading-snug drop-shadow-md">
            Millions of acres. Little data. Delayed decisions.<br className="hidden md:block" />
            Farmers rely on instinct where intelligence should exist.
          </p>
          
          <button className="bg-brand-cream text-[#2A1615] font-mono font-semibold px-8 py-3.5 rounded-full hover:bg-white transition-all shadow-xl hover:scale-105 active:scale-95">
            Request a demo
          </button>
        </div>

      </div>

    </section>
  );
}