import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use — Aeroseeds",
  description: "Terms of Use for Aeroseeds, aerial intelligence for precision farming.",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="pt-10 pb-10 border-b border-white/10 last:border-b-0">
      <h2 className="font-serif text-2xl md:text-3xl text-[#F7E7A8] mb-4">
        {title}
      </h2>
      <div className="font-mono text-sm md:text-base text-gray-300 leading-relaxed space-y-4">
        {children}
      </div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#131313] text-[#F9F6EE] px-6 md:px-10 py-10 md:py-16">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-block font-mono text-sm border border-white/20 rounded-full px-5 py-2.5 hover:border-[#F7E7A8] hover:text-[#F7E7A8] transition-colors"
        >
          ← Back to Aeroseeds
        </Link>

        <h1 className="font-sans text-5xl md:text-7xl text-[#F7E7A8] mt-10 mb-4 leading-[1.05]">
          Terms of Use
        </h1>
        <p className="font-mono text-sm text-gray-400 mb-12">
          Effective date: January 8, 2026
        </p>

        <Section title="1. Acceptance of Terms">
          <p>
            These Terms of Use ("Terms") govern your access to and use of the
            Aeroseeds website and services, including any demo requests,
            service inquiries, and tools such as our savings calculator
            (together, the "Services"). By visiting our site or engaging our
            Services, you agree to these Terms. If you don&apos;t agree,
            please don&apos;t use the Services.
          </p>
        </Section>

        <Section title="2. Description of Services">
          <p>
            Aeroseeds provides aerial intelligence for precision farming.
            Depending on the engagement, this can include aerial scanning of
            farmland, detection of pest, disease, and nutrient issues,
            precision spraying, land survey, and planting services, carried
            out using drones and associated aerial data systems. We also
            operate an informational website that describes our work,
            including a savings calculator intended to give farmers a rough
            sense of potential cost savings.
          </p>
        </Section>

        <Section title="3. Eligibility & Contact Information">
          <p>
            You must be able to form a binding legal agreement to use our
            Services, whether on your own behalf or on behalf of a farm,
            cooperative, or organization you represent. When you contact us —
            through a demo request, our &quot;Get involved&quot; form, or by
            email — you agree to provide accurate, current contact
            information, including your role, message, and email address, so
            we can respond appropriately.
          </p>
        </Section>

        <Section title="4. Service Engagements">
          <p>
            Submitting a demo request or service inquiry through our site is
            an expression of interest, not a binding contract. A service
            engagement is only formed once we&apos;ve confirmed scope,
            pricing, and scheduling directly with you, typically in writing.
          </p>
          <p>
            Because Aeroseeds operates drones over farmland in Nigeria,
            scheduling and delivery of any aerial service are subject to
            weather conditions, applicable aviation and regulatory
            clearances, and site conditions at the time of the engagement. We
            will communicate any changes to scheduling as early as we
            reasonably can.
          </p>
        </Section>

        <Section title="5. Calculator & Estimates Disclaimer">
          <p>
            Our savings calculator and any other estimates on our site are
            provided for informational purposes only. Figures are based on
            general market averages and typical outcomes observed across
            similar farms, not on an assessment of your specific land, crop,
            or operating conditions. They are estimates, not guarantees, and
            actual results will vary.
          </p>
        </Section>

        <Section title="6. Intellectual Property">
          <p>
            The Aeroseeds name, logo, site design, imagery, and written
            content are owned by Aeroseeds or our licensors and are protected
            by applicable intellectual property laws. You may view and share
            our public content for personal, non-commercial purposes, but you
            may not reproduce, modify, or distribute it for commercial use
            without our written permission.
          </p>
        </Section>

        <Section title="7. Acceptable Use">
          <p>
            You agree not to misuse the Services — for example, by scraping
            or harvesting data from our site through automated means,
            attempting to disrupt or gain unauthorized access to our systems,
            or using the Services for any unlawful purpose. We reserve the
            right to restrict access for anyone who violates this section.
          </p>
        </Section>

        <Section title="8. Data Collected During Services">
          <p>
            Delivering aerial services necessarily involves collecting data
            about your farm — including aerial imagery, land and crop
            information, and related farm data. How we collect, use, and
            protect that data is described in our{" "}
            <Link
              href="/privacy"
              className="text-[#F7E7A8] underline hover:text-[#f1d460] transition-colors"
            >
              Privacy Policy
            </Link>
            , which forms part of these Terms.
          </p>
        </Section>

        <Section title="9. Disclaimers & Limitation of Liability">
          <p>
            To the fullest extent permitted by law, the Services are provided
            "as is" and "as available," without warranties of any kind,
            express or implied. Agricultural outcomes depend on many factors
            outside our control — weather, soil conditions, pest pressure,
            market prices, and farm management practices among them —  and we
            cannot guarantee any particular yield, cost saving, or result
            from using our Services.
          </p>
          <p>
            To the fullest extent permitted by law, Aeroseeds will not be
            liable for any indirect, incidental, or consequential damages
            arising from your use of the Services. Nothing in these Terms
            excludes liability that cannot be excluded under applicable
            Nigerian law.
          </p>
        </Section>

        <Section title="10. Indemnification">
          <p>
            You agree to indemnify and hold Aeroseeds harmless from any
            claims, losses, or expenses arising from your misuse of the
            Services or your violation of these Terms.
          </p>
        </Section>

        <Section title="11. Governing Law">
          <p>
            These Terms are governed by the laws of the Federal Republic of
            Nigeria, without regard to conflict of law principles. Any
            disputes arising from these Terms will be subject to the
            exclusive jurisdiction of the courts of Nigeria.
          </p>
        </Section>

        <Section title="12. Changes to These Terms">
          <p>
            We may update these Terms from time to time as our Services
            evolve. If we make material changes, we&apos;ll update the
            effective date at the top of this page. Continued use of the
            Services after changes take effect means you accept the updated
            Terms.
          </p>
        </Section>

        <Section title="13. Contact">
          <p>
            Questions about these Terms? Reach us at{" "}
            <a
              href="mailto:plant@aeroseeds.io"
              className="text-[#F7E7A8] underline hover:text-[#f1d460] transition-colors"
            >
              plant@aeroseeds.io
            </a>
            .
          </p>
        </Section>
      </div>
    </main>
  );
}
