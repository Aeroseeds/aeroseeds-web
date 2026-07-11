"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const DEMO_MAILTO_SUBJECT = "Demo Request — Aeroseeds Services";
const DEMO_MAILTO_BODY = `Hello Aeroseeds team,

I'd like to request a demo of your services. I'm interested in:
[ ] Scan
[ ] Detect
[ ] Spray
[ ] Survey
[ ] Plant
[ ] General enquiries

Name:
Farm location:
Farm size (hectares):
Phone number:

Additional details:

Thank you.`;
const DEMO_MAILTO_HREF = `mailto:plant@aeroseeds.io?subject=${encodeURIComponent(
  DEMO_MAILTO_SUBJECT
)}&body=${encodeURIComponent(DEMO_MAILTO_BODY.replace(/\n/g, "\r\n"))}`;

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* SVG displacement map that gives the glass its refraction ("lensing") */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox">
            <feTurbulence type="fractalNoise" baseFrequency="0.008 0.008" numOctaves="2" seed="92" result="noise" />
            <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
            <feDisplacementMap in="SourceGraphic" in2="blurred" scale="70" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      <section className="liquid-glass fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-[1600px] rounded-full">
        <div className="liquid-glass-effect" />
        <div className="liquid-glass-tint" />
        <div className="liquid-glass-shine" />
        <nav className="relative z-10 flex h-16 md:h-20 items-center justify-between px-6 md:px-10 font-mono">
          
          {/* LOGO & BRAND */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Aeroseeds Logo" width={32} height={32} />
            <span className="hidden md:block font-sans text-3xl text-[#F7E7A8] tracking-tight mt-1">
              aeroseeds
            </span>
          </Link>

          {/* NAVIGATION LINKS (Desktop only) */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12 text-sm text-white font-mono">
            <Link href="#problem" className="hover:text-[#F7E7A8] transition-colors">The Problem</Link>
            <Link href="#context" className="hover:text-[#F7E7A8] transition-colors">The Context</Link>
            <Link href="#system" className="hover:text-[#F7E7A8] transition-colors">The System</Link>
            <Link href="#impact" className="hover:text-[#F7E7A8] transition-colors">Impact</Link>
            <Link href="#understand-your-land" className="hover:text-[#F7E7A8] transition-colors">Understand your farm</Link>
          </div>

          {/* REQUEST A DEMO BUTTON (Hidden on mobile) */}
          <a href={DEMO_MAILTO_HREF} className="hidden md:block bg-[#212121] text-[#F7E7A8] font-mono text-sm md:text-base font-semibold px-6 py-2.5 rounded-full hover:bg-black transition-colors shadow-sm hover:scale-105 active:scale-95">
            Request a demo
          </a>

          {/* HAMBURGER MENU BUTTON (Mobile only) */}
          <button 
            onClick={() => setIsOpen(true)}
            className="flex md:hidden flex-col justify-center gap-1.5 p-1"
          >
            <span className="w-7 h-[3px] bg-[#F7E7A8] rounded-full"></span>
            <span className="w-7 h-[3px] bg-[#F7E7A8] rounded-full"></span>
          </button>

        </nav>
      </section>

      {/* FULL SCREEN MOBILE MENU OVERLAY */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#131313] flex flex-col px-6 py-8 animate-in fade-in duration-200">
        <div className="flex flex-col flex-1 justify-between w-full max-w-md mx-auto">

          <div>
            {/* TOP BAR INSIDE MENU */}
            <div className="flex items-center justify-between w-full mb-12">
              <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                <Image src="/logo.svg" alt="Aeroseeds Logo" width={32} height={32} />
                <span className="font-sans text-3xl text-white tracking-tight mt-1">
                  aeroseeds
                </span>
              </Link>

              {/* CLOSE BUTTON (X) */}
              <button
                onClick={() => setIsOpen(false)}
                className="text-white p-2"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* MENU LINKS */}
            <div className="flex flex-col gap-6 text-[28px] font-serif tracking-wide">
              {/* Highlighted Home Link */}
              <Link href="/" onClick={() => setIsOpen(false)} className="text-[#F7E7A8]">
                Home
              </Link>
              <Link href="#problem" onClick={() => setIsOpen(false)} className="text-white hover:text-[#F7E7A8] transition-colors">
                The Problem
              </Link>
              <Link href="#context" onClick={() => setIsOpen(false)} className="text-white hover:text-[#F7E7A8] transition-colors">
                The Context
              </Link>
              <Link href="#system" onClick={() => setIsOpen(false)} className="text-white hover:text-[#F7E7A8] transition-colors">
                The System
              </Link>
              <Link href="#impact" onClick={() => setIsOpen(false)} className="text-white hover:text-[#F7E7A8] transition-colors">
                Impact
              </Link>
              <Link href="#understand-your-land" onClick={() => setIsOpen(false)} className="text-white hover:text-[#F7E7A8] transition-colors">
                Your Farm
              </Link>
            </div>
          </div>

          <div>
            {/* REQUEST A DEMO BUTTON */}
            <a
              href={DEMO_MAILTO_HREF}
              onClick={() => setIsOpen(false)}
              className="w-full text-center bg-[#F7E7A8] text-[#212121] font-mono text-base font-semibold px-6 py-3.5 rounded-full hover:bg-[#FBE381] transition-colors shadow-sm active:scale-95"
            >
              Request a demo
            </a>

            {/* SOCIAL ICONS */}
            <div className="mt-8 flex gap-6 text-white pb-2">
            <a href="#" className="hover:text-[#F7E7A8] transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-[#F7E7A8] transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="hover:text-[#F7E7A8] transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" className="hover:text-[#F7E7A8] transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
          </div>
          </div>

        </div>
        </div>
      )}
    </>
  );
}