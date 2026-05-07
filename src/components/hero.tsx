"use client";

import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeRole, setActiveRole] = useState<string>("Farmer");

  return (
    <>
      {/* FIX 1: Changed h-screen to h-[100dvh] to track mobile address bars perfectly */}
      <section className="relative w-full h-[100dvh] overflow-hidden bg-[#2A1615]">
        
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero-bg.png" 
            alt="Sunset over an agricultural farm"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/30 to-transparent"></div>
        </div>

        <div className="absolute top-[15%] md:top-[12%] left-1/2 -translate-x-1/2 md:left-[12%] md:translate-x-0 w-64 md:w-72 z-10 pointer-events-none">
          <Image 
            src="/drones.png" 
            alt="Survey drones"
            width={400}
            height={200}
            className="w-full h-auto object-contain drop-shadow-xl"
          />
        </div>

        <div className="relative z-20 w-full h-full flex flex-col">
          
          <div className="flex-1 flex flex-col items-center justify-center px-4 text-center">
            
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-brand-cream max-w-4xl mb-6 drop-shadow-md leading-[1.05]">
              Africa's farms are still<br className="hidden md:block" />operating blind
            </h1>
            
            <p className="font-mono text-brand-white text-sm md:text-base max-w-2xl mb-8 md:mb-10 leading-snug drop-shadow-md">
              Millions of acres. Little data. Delayed decisions.<br className="hidden md:block" />
              Farmers rely on instinct where intelligence should exist.
            </p>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-brand-cream text-[#2A1615] font-mono font-semibold px-8 py-3.5 rounded-full hover:bg-white transition-all shadow-xl hover:scale-105 active:scale-95"
            >
              Get Involved
            </button>
          </div>

        </div>

      </section>

      {/* =========================================
          DORMANT MODAL OVERLAY
          ========================================= */}
      {isModalOpen && (
        /* FIX 2: Added h-[100dvh] here to force the background to cover the full dynamic screen */
        <div className="fixed inset-0 h-[100dvh] w-full z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          
          {/* MODAL CONTAINER */}
          <div className="w-full max-w-[500px] bg-[#F7E7A8] rounded-[24px] p-5 md:p-8 shadow-2xl relative max-h-[95vh] overflow-y-auto">
            
            {/* HEADER */}
            <h2 className="font-serif text-[32px] md:text-[40px] font-bold text-[#131313] leading-tight tracking-tight mb-2 md:mb-3">
              Be part of what's<br/>being built.
            </h2>
            <p className="font-mono text-xs md:text-sm text-[#131313]/80 leading-relaxed mb-4 md:mb-6">
              Tell us who you are and what brings you<br className="hidden md:block" /> here. We'll reach out direct
            </p>

            {/* ROLE SELECTORS */}
            <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-6">
              {["Farmer", "Investor", "An Organisation", "Following the mission"].map((role) => (
                <button
                  key={role}
                  onClick={() => setActiveRole(role)}
                  className={`w-full text-left px-3 py-2.5 md:px-4 md:py-3 rounded-xl border border-[#131313] font-mono text-[11px] md:text-sm transition-colors ${
                    activeRole === role 
                      ? "bg-[#131313] text-[#F7E7A8]" 
                      : "bg-transparent text-[#131313] hover:bg-[#131313]/5"
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>

            {/* INPUT FIELDS */}
            <div className="space-y-3 md:space-y-5">
              
              <div>
                <label className="block font-mono text-[12px] md:text-[13px] text-[#131313] mb-1.5 md:mb-2">
                  What brought you here?
                </label>
                <textarea 
                  rows={2}
                  placeholder="How you found us what resonated.."
                  className="w-full bg-white border border-[#131313] rounded-xl px-3 py-2.5 md:px-4 md:py-3 font-mono text-xs md:text-sm text-[#131313] placeholder-[#131313]/40 focus:outline-none focus:ring-1 focus:ring-[#131313] resize-none"
                ></textarea>
              </div>

              <div>
                <label className="block font-mono text-[12px] md:text-[13px] text-[#131313] mb-1.5 md:mb-2">
                  Your email address
                </label>
                <input 
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-white border border-[#131313] rounded-xl px-3 py-2.5 md:px-4 md:py-3 font-mono text-xs md:text-sm text-[#131313] placeholder-[#131313]/40 focus:outline-none focus:ring-1 focus:ring-[#131313]"
                />
              </div>

            </div>

            {/* ACTION BUTTONS */}
            <div className="flex items-center gap-3 mt-5 md:mt-8">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="flex-1 py-2.5 md:py-3.5 rounded-full border border-[#131313] bg-transparent text-[#131313] font-mono font-semibold text-[13px] md:text-sm hover:bg-[#131313]/5 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="flex-1 py-2.5 md:py-3.5 rounded-full bg-[#131313] text-[#F7E7A8] font-mono font-semibold text-[13px] md:text-sm hover:bg-black transition-colors"
              >
                Get Involved
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}