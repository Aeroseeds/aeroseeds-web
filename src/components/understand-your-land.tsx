"use client";

import { useState } from "react";
import Image from "next/image";

export default function UnderstandYourLand() {
  const [size, setSize] = useState<string>("");
  const [problem, setProblem] = useState<string>("pest");
  const [mobileView, setMobileView] = useState<"old" | "new">("old");

  // Base parameters per hectare (ha)
  const baseRates = {
    pest: { factor: 1, name: "Pest Outbreak" },
    nutrient: { factor: 0.8, name: "Nutrient Deficiency" },
    irrigation: { factor: 0.5, name: "Irrigation Check" }
  };

  const oldBase = { chem: 2500, time: 2, rate: 1000, lossValue: 1000, lossPct: 15 };
  const aeroBase = { chem: 1800, time: 0.25, rate: 1000, lossValue: 200, lossPct: 2 };

  // Calculations
  const numSize = parseFloat(size) || 0;
  const factor = baseRates[problem as keyof typeof baseRates].factor;

  const oldChem = oldBase.chem * numSize * factor;
  const oldTime = oldBase.time * numSize * factor;
  const oldLoss = oldBase.lossValue * numSize * factor;
  const oldTotal = oldChem + (oldTime * oldBase.rate) + oldLoss;

  const aeroChem = aeroBase.chem * numSize * factor;
  const aeroTime = aeroBase.time * numSize * factor;
  const aeroLoss = aeroBase.lossValue * numSize * factor;
  const aeroTotal = aeroChem + (aeroTime * aeroBase.rate) + aeroLoss;

  const savings = oldTotal - aeroTotal;

  // Formatters
  const formatCurrency = (val: number) => {
    if (!size || isNaN(numSize)) return "₦-";
    return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(val);
  };

  const formatNumber = (val: number, suffix: string) => {
    if (!size || isNaN(numSize)) return `- ${suffix}`;
    return `${val.toLocaleString('en-US', { maximumFractionDigits: 1 })} ${suffix}`;
  };

  const hasInput = size && !isNaN(numSize) && numSize > 0;

  return (
    <section className="relative w-full min-h-screen py-24 flex flex-col items-center justify-center bg-[#181818] text-white">
      
      {/* Background Setup */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image 
          src="/what-if-bg.png" 
          alt="Background pattern" 
          fill 
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl px-4 flex flex-col items-center">
        
        {/* HEADER */}
        <h2 className="font-serif text-5xl md:text-7xl text-[#F7E7A8] mb-4 text-center tracking-tight leading-tight">
          Understand<br className="block md:hidden" /> your land
        </h2>
        <p className="font-mono text-sm md:text-base text-gray-300 text-center max-w-lg mb-10 md:mb-12">
          Farm sizes are measured differently across regions.<br/>
          Convert instantly to better understand scale.
        </p>

        {/* INPUTS (Stacked on mobile, side-by-side on tablet+) */}
        <div className="flex flex-col sm:flex-row w-full max-w-2xl gap-4 mb-8">
          <div className="relative w-full">
            <input 
              type="number" 
              placeholder="e.g. 50" 
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full bg-[#1A1A1A] border border-white/20 rounded-xl px-4 py-4 md:py-3 text-white font-mono focus:outline-none focus:border-[#F7E7A8] transition-colors"
            />
          </div>
          <div className="relative w-full">
            <select 
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              className="w-full bg-[#1A1A1A] border border-white/20 rounded-xl px-4 py-4 md:py-3 text-white font-mono appearance-none focus:outline-none focus:border-[#F7E7A8] transition-colors cursor-pointer"
            >
              <option value="pest">Pest Outbreak</option>
              <option value="nutrient">Nutrient Deficiency</option>
              <option value="irrigation">Irrigation Check</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* MAIN SAVINGS BOX */}
        <div className="w-full max-w-2xl border border-white/20 rounded-2xl p-8 flex flex-col items-center justify-center bg-[#1A1A1A]/50 backdrop-blur-sm mb-8 shadow-xl">
          <p className="font-mono text-xs tracking-widest text-gray-400 mb-2 uppercase">Estimated Saving Per Season</p>
          <h3 className="font-serif text-[56px] md:text-7xl font-bold tracking-tight text-white leading-none">
            {hasInput ? formatCurrency(savings) : "₦0.00"}
          </h3>
        </div>

        {/* INSTRUCTION TEXT (Hidden on mobile) */}
        <p className="hidden md:block font-mono text-sm text-gray-400 mb-6">
          Enter your farm size above to see your comparison
        </p>

        {/* MOBILE VIEW: TOGGLE & SINGLE CARD */}
        <div className="flex md:hidden flex-col w-full max-w-2xl">
          
          {/* TOGGLE PILL */}
          <div className="flex mx-auto bg-[#1A1A1A] border border-white/10 rounded-full p-1.5 mb-6 w-fit">
            <button
              onClick={() => setMobileView("old")}
              className={`px-5 py-2.5 rounded-full font-mono text-xs font-bold tracking-wider transition-colors ${
                mobileView === "old" ? "bg-[#111111] text-red-600 shadow-sm" : "text-red-800/50 hover:text-red-600/70"
              }`}
            >
              THE OLD WAY
            </button>
            <button
              onClick={() => setMobileView("new")}
              className={`px-5 py-2.5 rounded-full font-mono text-xs font-bold tracking-wider transition-colors ${
                mobileView === "new" ? "bg-[#111111] text-[#00E599] shadow-sm" : "text-[#00E599]/40 hover:text-[#00E599]/70"
              }`}
            >
              THE NEW WAY
            </button>
          </div>

          {/* MOBILE DATA CARD */}
          <div className="w-full border border-white/20 rounded-2xl p-6 bg-[#1A1A1A]/50 backdrop-blur-sm shadow-xl font-mono text-sm">
            <div className="space-y-6">
              <div className="flex justify-between">
                <span className="text-white">Area treated</span>
                <span className="text-white">{formatNumber(numSize, "ha")}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white">Chemical cost</span>
                <span className="text-gray-400 line-through mr-2 hidden"></span>
                <span className="text-white">{mobileView === "old" ? formatCurrency(oldChem) : formatCurrency(aeroChem)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white">Operation time</span>
                <span className="text-white">{mobileView === "old" ? formatNumber(oldTime, "days") : formatNumber(aeroTime, "days")}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white">Crop loss</span>
                <span className="text-white">{hasInput ? `${mobileView === "old" ? oldBase.lossPct : aeroBase.lossPct}%` : '-%'}</span>
              </div>
              <div className="flex justify-between pt-4 border-t border-white/10 mt-4">
                <span className="text-white">Total cost</span>
                <span className="text-white line-through mr-2 hidden"></span>
                <span className="text-white">{mobileView === "old" ? formatCurrency(oldTotal) : formatCurrency(aeroTotal)}</span>
              </div>
            </div>
          </div>

        </div>

        {/* DESKTOP VIEW: SIDE-BY-SIDE TABLE */}
        <div className="hidden md:flex w-full max-w-2xl border border-white/20 rounded-2xl bg-[#1A1A1A]/50 backdrop-blur-sm overflow-hidden shadow-xl">
          
          <div className="flex-1 p-8 border-r border-white/10">
            <h4 className="font-mono text-red-600 tracking-wider text-sm mb-8 uppercase">The Old Way</h4>
            <div className="space-y-6 font-mono text-sm">
              <div className="flex justify-between"><span className="text-gray-300">Area treated</span><span className="text-white">{formatNumber(numSize, "ha")}</span></div>
              <div className="flex justify-between"><span className="text-gray-300">Chemical cost</span><span className="text-white">{formatCurrency(oldChem)}</span></div>
              <div className="flex justify-between"><span className="text-gray-300">Operation time</span><span className="text-white">{formatNumber(oldTime, "days")}</span></div>
              <div className="flex justify-between"><span className="text-gray-300">Crop loss</span><span className="text-white">{hasInput ? `${oldBase.lossPct}%` : '-%'}</span></div>
              <div className="flex justify-between pt-4 border-t border-white/10 mt-4"><span className="text-gray-300">Total cost</span><span className="text-white font-bold">{formatCurrency(oldTotal)}</span></div>
            </div>
          </div>

          <div className="flex-1 p-8">
            <h4 className="font-mono text-[#00E599] tracking-wider text-sm mb-8 uppercase">With Aeroseeds</h4>
            <div className="space-y-6 font-mono text-sm">
              <div className="flex justify-between"><span className="text-gray-300">Area treated</span><span className="text-white">{formatNumber(numSize, "ha")}</span></div>
              <div className="flex justify-between"><span className="text-gray-300">Chemical cost</span><span className="text-white">{formatCurrency(aeroChem)}</span></div>
              <div className="flex justify-between"><span className="text-gray-300">Operation time</span><span className="text-white">{formatNumber(aeroTime, "days")}</span></div>
              <div className="flex justify-between"><span className="text-gray-300">Crop loss</span><span className="text-white">{hasInput ? `${aeroBase.lossPct}%` : '-%'}</span></div>
              <div className="flex justify-between pt-4 border-t border-white/10 mt-4"><span className="text-gray-300">Total cost</span><span className="text-white font-bold">{formatCurrency(aeroTotal)}</span></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}