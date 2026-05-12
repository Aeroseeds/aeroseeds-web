"use client";

import { useState } from "react";
import Image from "next/image";

export default function CtaSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeRole, setActiveRole] = useState<string>("Farmer");

  return (
    <>
      <section className="relative w-full bg-[#FFFAE6] pt-24 md:pt-32 flex flex-col items-center overflow-hidden">
        
        <div className="relative z-20 flex flex-col items-center px-4 w-full">
          <h2 className="font-sans font-normal text-5xl md:text-[80px] text-[#120F0C] text-center leading-tight md:leading-none mb-8 md:mb-12">
            Take control of<br className="hidden md:block" /> your land
          </h2>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#FBE381] text-[#120F0C] font-mono text-sm md:text-base font-bold px-8 py-3.5 rounded-full hover:bg-[#f1d460] transition-colors shadow-sm hover:scale-105 active:scale-95"
          >
            Get involved
          </button>
        </div>

        <div className="relative z-20 w-full max-w-[1600px] px-6 md:px-16 mt-16 md:mt-20 flex flex-col-reverse md:flex-row justify-between items-center gap-8">
          
          <div className="flex gap-6 md:gap-8 font-mono text-[#120F0C] text-sm font-bold">
            <a href="#" className="hover:underline opacity-80 hover:opacity-100 transition-opacity">Privacy policy</a>
            <a href="#" className="hover:underline opacity-80 hover:opacity-100 transition-opacity">Terms and Services</a>
          </div>

          <div className="flex gap-6 text-[#120F0C]">
            <a href="https://x.com/aeroseeds" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform opacity-80 hover:opacity-100">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://instagram.com/plantaeroseeds" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform opacity-80 hover:opacity-100">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://ng.linkedin.com/company/aeroseed-africa" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform opacity-80 hover:opacity-100">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://youtube.com/aeroseeds" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform opacity-80 hover:opacity-100">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
          </div>
        </div>

        {/* --- IMAGES --- */}
        <div className="relative w-full mt-10 md:mt-16 z-0">
          
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

      {/* =========================================
          DORMANT MODAL OVERLAY
          ========================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 h-[100dvh] w-full z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          
          <div className="w-full max-w-[500px] bg-[#F7E7A8] rounded-[24px] p-5 md:p-8 shadow-2xl relative max-h-[95vh] overflow-y-auto">
            
            <h2 className="font-serif text-[32px] md:text-[40px] font-bold text-[#131313] leading-tight tracking-tight mb-2 md:mb-3">
              Be part of what's<br/>being built.
            </h2>
            <p className="font-mono text-xs md:text-sm text-[#131313]/80 leading-relaxed mb-4 md:mb-6">
              Tell us who you are and what brings you<br className="hidden md:block" /> here. We'll reach out direct
            </p>

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