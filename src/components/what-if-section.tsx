"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";

// The individual word component with mobile hardware acceleration fixes
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
      style={{ opacity, transform: "translateZ(0)" }}
      // CRITICAL MOBILE FIX: 'inline-block' and 'will-change-opacity' forces the phone's GPU to render the animation
      className="inline-block will-change-opacity font-sans font-normal text-4xl sm:text-5xl md:text-[80px] text-white leading-tight md:leading-[1.1]"
    >
      {children}
    </motion.span>
  );
};

export default function WhatIfSection() {
  const paragraph = "What if you could monitor your entire farm, act on early insights, and multiply your harvest with zero guesswork? Welcome to Aeroseeds.";
  const words = paragraph.split(" ");
  
  const containerRef = useRef<HTMLDivElement>(null);

  // Prevents the browser from jumping to this section automatically if the user hits refresh
  useEffect(() => {
    if (typeof window !== "undefined" && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    // 500vh ensures a massive scrolling runway so the text holds on screen for a long time
    <section ref={containerRef} className="relative h-[500vh] w-full bg-[#1D262A]">
      
      {/* 100dvh accounts for the sliding address bar on mobile devices like iPhones */}
      <div className="sticky top-0 flex h-[100dvh] w-full items-center justify-center">
        
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
          <p className="flex flex-wrap justify-center max-w-5xl gap-x-3 gap-y-2 md:gap-x-4 md:gap-y-4 text-center">
            {words.map((word, i) => {
              
              // ANIMATION MATH:
              // Waits for 10% of the scroll track before starting, then finishes over the next 40%.
              // The remaining 50% of scrolling is pure, fully-lit reading time.
              const delay = 0.1; 
              const duration = 0.4;
              
              const start = delay + (i / words.length) * duration;
              const end = start + (duration / words.length);

              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
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