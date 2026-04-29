import Image from "next/image";

export default function CtaSection() {
  return (
    <section className="relative w-full bg-[#FFFAE6] pt-24 md:pt-32 flex flex-col items-center overflow-hidden">
      
      {/* --- TEXT CONTENT & BUTTON --- */}
      <div className="relative z-20 flex flex-col items-center px-4 w-full">
        <h2 className="font-sans font-normal text-5xl md:text-[80px] text-[#120F0C] text-center leading-tight md:leading-none mb-8 md:mb-12">
          Take control of<br className="hidden md:block" /> your land
        </h2>
        
        <button className="bg-[#FBE381] text-[#120F0C] font-mono text-sm md:text-base font-bold px-8 py-3.5 rounded-full hover:bg-[#f1d460] transition-colors shadow-sm hover:scale-105 active:scale-95">
          Get involved
        </button>
      </div>

      {/* --- LINKS & ICONS --- */}
      {/* Pushed down slightly from the button to sit in the clear cream space */}
      <div className="relative z-20 w-full max-w-[1600px] px-6 md:px-16 mt-16 md:mt-20 flex flex-col-reverse md:flex-row justify-between items-center gap-8">
        
        {/* Links */}
        <div className="flex gap-6 md:gap-8 font-mono text-[#120F0C] text-sm font-bold">
          <a href="#" className="hover:underline opacity-80 hover:opacity-100 transition-opacity">Privacy policy</a>
          <a href="#" className="hover:underline opacity-80 hover:opacity-100 transition-opacity">Terms and Services</a>
        </div>

        {/* Social Icons (Stroke weight increased for bolder look) */}
        <div className="flex gap-6 text-[#120F0C]">
          {/* X (Twitter) - Added stroke to make the fill look bolder */}
          <a href="#" className="hover:scale-110 transition-transform opacity-80 hover:opacity-100">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          {/* Instagram - Stroke width bumped from 2 to 2.5 */}
          <a href="#" className="hover:scale-110 transition-transform opacity-80 hover:opacity-100">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          {/* LinkedIn - Stroke width bumped from 2 to 2.5 */}
          <a href="#" className="hover:scale-110 transition-transform opacity-80 hover:opacity-100">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          {/* YouTube - Stroke width bumped from 2 to 2.5 */}
          <a href="#" className="hover:scale-110 transition-transform opacity-80 hover:opacity-100">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
          </a>
        </div>
      </div>

      {/* --- IMAGES --- */}
      {/* GAP ADDED: Margin top forces the illustration below the text */}
      <div className="relative w-full mt-10 md:mt-16 z-0">
        
        {/* Desktop Image */}
        <div className="hidden md:block w-full">
          <Image 
            src="/cta-desktop.png" 
            alt="Aeroseeds village illustration" 
            width={1920} 
            height={800} 
            className="w-full h-auto object-cover object-bottom"
            priority
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden w-full">
          <Image 
            src="/cta-mobile.png" 
            alt="Aeroseeds village illustration mobile" 
            width={800} 
            height={800} 
            className="w-full h-auto object-cover object-bottom"
            priority
          />
        </div>
      </div>

    </section>
  );
}