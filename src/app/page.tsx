import Hero from "@/components/hero";
import Divider from "@/components/divider";
import ProblemSection from "@/components/problem-section";
import WhatIfSection from "@/components/what-if-section";
import OurApproach from "@/components/our-approach";
import BenefitOne from "@/components/benefit-one";
import BenefitTwo from "@/components/benefit-two"; // <-- Import it

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col">
      <Hero />
      <Divider />
      <ProblemSection />
      <WhatIfSection />
      <OurApproach />
      <BenefitOne />
      <BenefitTwo /> {/* <-- Add it here */}
    </main>
  );
}