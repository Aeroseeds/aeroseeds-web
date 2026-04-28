import Hero from "@/components/hero";
import Divider from "@/components/divider";
import ProblemSection from "@/components/problem-section";
import WhatIfSection from "@/components/what-if-section"; // <-- Add this new import

export default function Home() {
  return (
    // The main wrapper is clean, relying on section-specific background colors and images
    <main className="min-h-screen w-full flex flex-col">
      <Hero />
      <Divider />
      <ProblemSection />
      <WhatIfSection /> {/* <-- Add this new section at the end */}
    </main>
  );
}