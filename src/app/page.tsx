import NavBar from "@/components/navbar";
import Hero from "@/components/hero";
import Divider from "@/components/divider";
import ProblemSection from "@/components/problem-section";
import WhatIfSection from "@/components/what-if-section";
import OurApproach from "@/components/our-approach"; 
import BenefitOne from "@/components/benefit-one";
import BenefitTwo from "@/components/benefit-two";
import BenefitThree from "@/components/benefit-three";
import UnderstandYourLand from "@/components/understand-your-land";
import CtaSection from "@/components/cta-section";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col">
      <NavBar /> 
      <Hero />
      <Divider />
      
      <div id="problem">
        <ProblemSection />
      </div>

      <div id="context">
        <WhatIfSection />
      </div>

      <div id="system">
        <OurApproach /> 
      </div>

      <div id="impact">
        <BenefitOne />
        <BenefitTwo />
        <BenefitThree />
      </div>

      <div id="understand-your-land">
        <UnderstandYourLand />
      </div>

      <CtaSection />
    </main>
  );
}