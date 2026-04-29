import Image from "next/image";

export default function OurApproach() {
  return (
    <section className="w-full bg-[#FFFAE6] py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        <h2 className="font-sans font-normal text-4xl md:text-5xl text-brand-dark mb-8">
          Our Approach
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 min-h-[350px] md:min-h-[400px] shadow-2xl">
          
          <div className="relative flex flex-col p-6 md:p-8 bg-[#DEAB00] overflow-hidden min-h-[280px] md:min-h-full">
            <div className="absolute inset-0 z-0">
              <Image 
                src="/approach-scan.png" 
                alt="Drone scanning" 
                fill 
                className="object-cover object-bottom" 
              />
            </div>
            <div className="relative z-10">
              <h3 className="font-sans font-normal text-4xl text-white mb-4">Scan</h3>
              <p className="font-mono text-white text-sm leading-relaxed pr-2">
                Across Nigeria and africa, farms operate with limited visibility, delayed insight
              </p>
            </div>
          </div>

          <div className="relative flex flex-col p-6 md:p-8 bg-[#3F1910] overflow-hidden min-h-[280px] md:min-h-full">
            <div className="absolute inset-0 z-0">
              <Image 
                src="/approach-analyze.png" 
                alt="Data analysis charts" 
                fill 
                className="object-cover object-bottom" 
              />
            </div>
            <div className="relative z-10">
              <h3 className="font-sans font-normal text-4xl text-brand-cream mb-4">Analyze</h3>
              <p className="font-mono text-white text-sm leading-relaxed pr-2">
                Reveal patterns across crops, soil, and water conditions.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col p-6 md:p-8 bg-[#DFACFE] overflow-hidden min-h-[280px] md:min-h-full">
            <div className="absolute inset-0 z-0">
              <Image 
                src="/approach-decide.png" 
                alt="Crop decision making" 
                fill 
                className="object-cover object-bottom" 
              />
            </div>
            <div className="relative z-10">
              <h3 className="font-sans font-normal text-4xl text-[#3F1910] mb-4">Decide</h3>
              <p className="font-mono text-white text-sm leading-relaxed pr-2">
                Know exactly where to act, and respond early with confidence.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}