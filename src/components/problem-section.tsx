import Image from "next/image";

export default function ProblemSection() {
  return (
    <section className="bg-[#2A1615] w-full py-16 md:py-24 font-mono overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* --- Section Header --- */}
        <div className="text-center mb-12 md:mb-20 px-2">
          <h2 className="font-serif text-5xl md:text-6xl text-brand-cream leading-tight mb-6">
            Why this happens
          </h2>
          <p className="font-mono text-brand-cream text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Across Nigeria and africa, farms operate with limited visibility, delayed insight, and inconsistent resource use.
          </p>
        </div>

        {/* --- The Swipeable Carousel Grid --- */}
        {/* Mobile: flex-row, horizontal scroll, snap behavior, and hidden scrollbars 
            Desktop: centers items, turns off scrolling 
        */}
        <div className="flex md:justify-center gap-4 md:gap-12 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [scrollbar-width:none] pb-8 md:pb-0 px-2 md:px-0">
          
          {/* Card 1 */}
          <div className="w-[85%] shrink-0 snap-center md:w-full md:max-w-[350px]">
            <Image 
              src="/detection-stamp.png" 
              alt="Detection comes too late"
              width={500}
              height={800}
              className="w-full h-auto drop-shadow-2xl rounded-sm"
            />
          </div>

          {/* Card 2 */}
          <div className="w-[85%] shrink-0 snap-center md:w-full md:max-w-[350px]">
            <Image 
              src="/visibility-stamp.png" 
              alt="Visibility is limited"
              width={500}
              height={800}
              className="w-full h-auto drop-shadow-2xl rounded-sm"
            />
          </div>

          {/* Card 3 */}
          <div className="w-[85%] shrink-0 snap-center md:w-full md:max-w-[350px]">
            <Image 
              src="/resources-stamp.png" 
              alt="Resources are misused"
              width={500}
              height={800}
              className="w-full h-auto drop-shadow-2xl rounded-sm"
            />
          </div>

        </div>

      </div>
    </section>
  );
}