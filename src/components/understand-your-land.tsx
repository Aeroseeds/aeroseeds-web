"use client";

import { useState } from "react";
import Image from "next/image";

type ServiceKey = "scan" | "spray";

export default function UnderstandYourLand() {
  const [size, setSize] = useState<string>("");
  const [service, setService] = useState<ServiceKey>("scan");
  const [mobileView, setMobileView] = useState<"old" | "new">("old");

  // Constants — 2025/26 Nigerian market averages (maize benchmark)
  const SHARED = {
    cropValuePerHa: 1_100_000, // ₦ — maize ≈ ₦550k/tonne (late 2025) × ~2 t/ha avg smallholder yield
    laborDayRate: 4_000,       // ₦/day hired farm labour, Nigeria 2025
  };

  const SERVICES = {
    scan: {
      name: "Scan and Detect",
      old: {
        scoutingCostPerHa: 8_000,   // scout covers ~3 ha/day @ ₦4,000/day, ~6 visits/season
        operationTimePerHa: 2,      // days/ha cumulative scouting time (0.33 days/ha/visit × 6 visits)
        cropLossPct: 25,           // late/missed detection — NAERLS & peer-reviewed studies: 18–75% loss range, 25% conservative
      },
      aero: {
        serviceCostPerHa: 20_000,
        operationTimePerHa: 0.01,   // drone survey ~20 ha/hr
        cropLossPct: 5,             // early detection
      },
    },
    spray: {
      name: "Spray",
      old: {
        chemicalCostPerHa: 15_000,  // 4–6 L/ha at ₦2,200–₦4,500/L, midpoint
        labourDaysPerHa: 1,         // knapsack covers ~0.14 ha/hr ≈ 7–8 hrs/ha
        operationTimePerHa: 1,
        cropLossPct: 15,            // uneven coverage + treatment delays
      },
      aero: {
        serviceCostPerHa: 25_000,
        chemicalCostPerHa: 10_500,  // precision spraying uses ~30% less chemical
        operationTimePerHa: 0.05,   // DJI Agras-class drones cover 17–21 ha/hr, padded for setup
        cropLossPct: 5,
      },
    },
  } as const;

  // Calculations
  const numSize = parseFloat(size) || 0;
  const currentService = SERVICES[service];
  const hasInput = size !== "" && !isNaN(numSize) && numSize > 0;

  const oldCropLoss = (currentService.old.cropLossPct / 100) * SHARED.cropValuePerHa * numSize;
  const aeroCropLoss = (currentService.aero.cropLossPct / 100) * SHARED.cropValuePerHa * numSize;

  const oldOperationTime = currentService.old.operationTimePerHa * numSize;
  const aeroOperationTime = currentService.aero.operationTimePerHa * numSize;

  let oldPrimaryCost = 0;
  let aeroPrimaryCost = 0;
  let oldSecondaryCost = 0;
  let aeroSecondaryCost = 0;

  if (service === "scan") {
    oldPrimaryCost = SERVICES.scan.old.scoutingCostPerHa * numSize;
    aeroPrimaryCost = SERVICES.scan.aero.serviceCostPerHa * numSize;
  } else {
    oldPrimaryCost = SERVICES.spray.old.chemicalCostPerHa * numSize;
    oldSecondaryCost = SERVICES.spray.old.labourDaysPerHa * SHARED.laborDayRate * numSize;
    aeroPrimaryCost = SERVICES.spray.aero.chemicalCostPerHa * numSize;
    aeroSecondaryCost = SERVICES.spray.aero.serviceCostPerHa * numSize;
  }

  const oldTotal = oldPrimaryCost + oldSecondaryCost + oldCropLoss;
  const aeroTotal = aeroPrimaryCost + aeroSecondaryCost + aeroCropLoss;

  const savings = oldTotal - aeroTotal;

  // Formatters
  const formatCurrency = (val: number) => {
    if (!hasInput) return "₦-";
    return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(val);
  };

  const formatNumber = (val: number, suffix: string) => {
    if (!hasInput) return `- ${suffix}`;
    return `${val.toLocaleString('en-US', { maximumFractionDigits: 2 })} ${suffix}`;
  };

  const formatCropLoss = (pct: number, val: number) => {
    if (!hasInput) return "-%";
    return `${pct}% (${formatCurrency(val)})`;
  };

  // Row definitions — kept identical in count/order between old & aero columns
  const oldRows = service === "scan"
    ? [
        { label: "Area covered", value: formatNumber(numSize, "ha") },
        { label: "Scouting labour", value: formatCurrency(oldPrimaryCost) },
        { label: "Operation time", value: formatNumber(oldOperationTime, "days") },
        { label: "Est. crop loss", value: formatCropLoss(currentService.old.cropLossPct, oldCropLoss) },
      ]
    : [
        { label: "Area covered", value: formatNumber(numSize, "ha") },
        { label: "Chemicals", value: formatCurrency(oldPrimaryCost) },
        { label: "Labour", value: formatCurrency(oldSecondaryCost) },
        { label: "Operation time", value: formatNumber(oldOperationTime, "days") },
        { label: "Est. crop loss", value: formatCropLoss(currentService.old.cropLossPct, oldCropLoss) },
      ];

  const aeroRows = service === "scan"
    ? [
        { label: "Area covered", value: formatNumber(numSize, "ha") },
        { label: "Aeroseeds service", value: formatCurrency(aeroPrimaryCost) },
        { label: "Operation time", value: formatNumber(aeroOperationTime, "days") },
        { label: "Est. crop loss", value: formatCropLoss(currentService.aero.cropLossPct, aeroCropLoss) },
      ]
    : [
        { label: "Area covered", value: formatNumber(numSize, "ha") },
        { label: "Chemicals", value: formatCurrency(aeroPrimaryCost) },
        { label: "Aeroseeds service", value: formatCurrency(aeroSecondaryCost) },
        { label: "Operation time", value: formatNumber(aeroOperationTime, "days") },
        { label: "Est. crop loss", value: formatCropLoss(currentService.aero.cropLossPct, aeroCropLoss) },
      ];

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
          Understand<br className="block md:hidden" /> your farm
        </h2>
        <p className="font-mono text-sm md:text-base text-gray-300 text-center max-w-lg mb-10 md:mb-12">
          See what late detection and blanket spraying really cost you<br/> — and what changes with Aeroseeds.
        </p>

        {/* INPUTS */}
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
              value={service}
              onChange={(e) => setService(e.target.value as ServiceKey)}
              className="w-full bg-[#1A1A1A] border border-white/20 rounded-xl px-4 py-4 md:py-3 text-white font-mono appearance-none focus:outline-none focus:border-[#F7E7A8] transition-colors cursor-pointer"
            >
              <option value="scan">Scan and Detect</option>
              <option value="spray">Spray</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* MAIN SAVINGS BOX - FIX APPLIED HERE */}
        <div className="w-full max-w-2xl border border-white/20 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center bg-[#1A1A1A]/50 backdrop-blur-sm mb-8 shadow-xl overflow-hidden">
          <p className="font-mono text-xs tracking-widest text-gray-400 mb-2 uppercase text-center">Estimated Saving Per Season</p>
          <h3 className="w-full font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none text-center break-words">
            {hasInput ? formatCurrency(savings) : "₦0.00"}
          </h3>
        </div>

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
              {(mobileView === "old" ? oldRows : aeroRows).map((row) => (
                <div key={row.label} className="flex justify-between">
                  <span className="text-white">{row.label}</span>
                  <span className="text-white">{row.value}</span>
                </div>
              ))}
              <div className="flex justify-between pt-4 border-t border-white/10 mt-4">
                <span className="text-white">Total cost</span>
                <span className="text-white font-bold">{mobileView === "old" ? formatCurrency(oldTotal) : formatCurrency(aeroTotal)}</span>
              </div>
            </div>
          </div>

        </div>

        {/* DESKTOP VIEW: SIDE-BY-SIDE TABLE */}
        <div className="hidden md:flex w-full max-w-2xl border border-white/20 rounded-2xl bg-[#1A1A1A]/50 backdrop-blur-sm overflow-hidden shadow-xl">

          {/* THE OLD WAY */}
          <div className="flex-1 p-8 border-r border-white/10">
            <h4 className="font-mono text-red-600 tracking-wider text-sm mb-8 uppercase">The Old Way</h4>
            <div className="space-y-6 font-mono text-sm">
              {oldRows.map((row) => (
                <div key={row.label} className="flex justify-between"><span className="text-gray-300">{row.label}</span><span className="text-white">{row.value}</span></div>
              ))}
              <div className="flex justify-between pt-4 border-t border-white/10 mt-4"><span className="text-gray-300">Total cost</span><span className="text-white font-bold">{formatCurrency(oldTotal)}</span></div>
            </div>
          </div>

          {/* WITH AEROSEEDS */}
          <div className="flex-1 p-8">
            <h4 className="font-mono text-[#00E599] tracking-wider text-sm mb-8 uppercase">With Aeroseeds</h4>
            <div className="space-y-6 font-mono text-sm">
              {aeroRows.map((row) => (
                <div key={row.label} className="flex justify-between"><span className="text-gray-300">{row.label}</span><span className="text-white">{row.value}</span></div>
              ))}
              <div className="flex justify-between pt-4 border-t border-white/10 mt-4"><span className="text-gray-300">Total cost</span><span className="text-white font-bold">{formatCurrency(aeroTotal)}</span></div>
            </div>
          </div>

        </div>

        <p className="font-mono text-xs text-gray-500 mt-4 text-center max-w-lg">
          Estimates based on 2025/26 Nigerian market averages (maize benchmark). Actual results vary by crop, region and season.
        </p>

      </div>
    </section>
  );
}
