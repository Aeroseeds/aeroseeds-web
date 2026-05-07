"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";

const Word = ({ 
  children, 
  progress, 
  range 
}: { 
  children: string; 
  progress: MotionValue<number>; 
  range: [number, number] 
}) => {
  const opacity = useTransform(progress, range, [0.15, 1], { clamp: true });
  return (
    <motion.span
      style={{ opacity }}
      className="inline-block will-change-opacity font-sans font-normal text-[28px] sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight md:leading-[1.1]"
    >
      {children}
    </motion.span>
  );
};

export default function WhatIfSection() {
  const paragraph = "What if farms could be scanned from above, with drones capturing the full picture and software turning that data into clear insight so issues are seen early and decisions made with confidence.";
  const words = paragraph.split(" ");
  
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // THE FIX: We remap the raw scroll data.
  // 0% to 15%: Do nothing (absorbs the mobile address bar jump).
  // 15% to 85%: Play the text highlight smoothly from 0 to 1.
  // 85% to 100%: Hold the fully lit text before unpinning.
  const safeProgress = useTransform(scrollYProgress, [0.15, 0.85], [0, 1]);

  return (
    <section ref={containerRef} className="relative h-[500vh] w-full bg-[#1D262A]">
      
      <div className="sticky top-0 flex h-[100dvh] w-full items-center justify-center overflow-hidden">
        
        <div className="absolute inset-0 z-0">
          <Image 
            src="/what-if-bg.png" 
            alt="What if background" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 md:bg-black/20" />
        </div>

        <div className="relative z-10 flex h-full w-full items-center justify-center px-4 md:px-16">
          <p className="flex flex-wrap justify-center max-w-6xl gap-x-3 gap-y-2 md:gap-x-4 md:gap-y-4 text-center">
            {words.map((word, i) => {
              
              // Now that we have a safe progress track, the math here becomes perfectly clean.
              // Each word gets an equal slice of the 0 to 1 animation track.
              const start = i / words.length;
              const end = start + (1 / words.length);

              return (
                <Word key={i} progress={safeProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </p>
        </div>

      </div>
    </section>
  );
}