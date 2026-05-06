"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function ProblemSection() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 0.8], ["0vw", "-200vw"], { clamp: true });

  return (
    <>
      {/* =========================================
          MOBILE VIEW: STICKY HORIZONTAL SCROLL
          ========================================= */}
      <section ref={targetRef} className="block md:hidden relative h-[300vh] w-full bg-[#2A1615]">
        
        {/* CRITICAL FIX 1: Removed overflow-x-hidden from the sticky container */}
        <div className="sticky top-0 h-[100dvh] w-full flex flex-col justify-center py-8">
          
          <div className="text-center mb-6 px-4 w-full shrink-0">
            <h2 className="font-serif text-[40px] text-brand-cream leading-tight mb-4">
              Why this happens
            </h2>
            <p className="font-mono text-brand-cream text-sm max-w-md mx-auto leading-relaxed">
              Across Nigeria and africa, farms operate with limited visibility, delayed insight, and inconsistent resource use.
            </p>
          </div>

          {/* CRITICAL FIX 2: Added overflow-hidden HERE to the wrapper holding the track, not the sticky div */}
          <div className="w-full flex-1 flex items-center overflow-hidden">
            <motion.div 
              style={{ x }} 
              className="flex w-[300vw] items-center will-change-transform"
            >
              
              <div className="w-[100vw] px-6 flex justify-center shrink-0">
                <div className="w-full max-w-[320px] max-h-[50vh] flex items-center justify-center">
                  <Image 
                    src="/detection-stamp.png" 
                    alt="Detection comes too late"
                    width={500} height={800}
                    className="w-full h-auto object-contain drop-shadow-2xl rounded-sm"
                  />
                </div>
              </div>

              <div className="w-[100vw] px-6 flex justify-center shrink-0">
                <div className="w-full max-w-[320px] max-h-[50vh] flex items-center justify-center">
                  <Image 
                    src="/visibility-stamp.png" 
                    alt="Visibility is limited"
                    width={500} height={800}
                    className="w-full h-auto object-contain drop-shadow-2xl rounded-sm"
                  />
                </div>
              </div>

              <div className="w-[100vw] px-6 flex justify-center shrink-0">
                <div className="w-full max-w-[320px] max-h-[50vh] flex items-center justify-center">
                  <Image 
                    src="/resources-stamp.png" 
                    alt="Resources are misused"
                    width={500} height={800}
                    className="w-full h-auto object-contain drop-shadow-2xl rounded-sm"
                  />
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </section>

      {/* =========================================
          DESKTOP VIEW: STATIC CENTERED GRID
          ========================================= */}
      <section className="hidden md:block bg-[#2A1615] w-full py-24 font-mono overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
      
          <div className="text-center mb-20 px-2">
            <h2 className="font-serif text-6xl text-brand-cream leading-tight mb-6">
              Why this happens
            </h2>
            <p className="font-mono text-brand-cream text-lg max-w-2xl mx-auto leading-relaxed">
              Across Nigeria and africa, farms operate with limited visibility, delayed insight, and inconsistent resource use.
            </p>
          </div>

          <div className="flex justify-center gap-12">
            
            <div className="w-full max-w-[350px]">
              <Image 
                src="/detection-stamp.png" 
                alt="Detection comes too late"
                width={500} height={800}
                className="w-full h-auto drop-shadow-2xl rounded-sm hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="w-full max-w-[350px]">
              <Image 
                src="/visibility-stamp.png" 
                alt="Visibility is limited"
                width={500} height={800}
                className="w-full h-auto drop-shadow-2xl rounded-sm hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="w-full max-w-[350px]">
              <Image 
                src="/resources-stamp.png" 
                alt="Resources are misused"
                width={500} height={800}
                className="w-full h-auto drop-shadow-2xl rounded-sm hover:scale-105 transition-transform duration-500"
              />
            </div>

          </div>

        </div>
      </section>
    </>
  );
}