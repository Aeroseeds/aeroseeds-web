import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Aeroseeds",
  description: "Privacy Policy for Aeroseeds, aerial intelligence for precision farming.",
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

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="font-mono text-sm text-gray-400 mb-12">
          Effective date: January 8, 2026
        </p>

        <Section title="1. Introduction & Scope">
          <p>
            Aeroseeds ("we," "us," "our") provides aerial intelligence for
            precision farming. This Privacy Policy explains what personal
            information we collect when you visit our website or engage our
            services, how we use it, and the rights you have over it. It
            applies to our website, our demo and service inquiries, and the
            aerial services we deliver on the ground.
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <p>We collect information in a few different ways:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="text-[#F9F6EE]">Contact form data.</span>{" "}
              When you submit our &quot;Get involved&quot; form, we collect
              your role, your message, and your email address.
            </li>
            <li>
              <span className="text-[#F9F6EE]">Demo requests.</span>{" "}
              When you request a demo, we receive whatever information you
              include in your email or request, such as your name and
              contact details.
            </li>
            <li>
              <span className="text-[#F9F6EE]">Farm data.</span>{" "}
              To scope and deliver services, we may collect farm-specific
              details you provide, such as location, farm size, and crop
              type.
            </li>
            <li>
              <span className="text-[#F9F6EE]">Aerial and drone imagery.</span>{" "}
              During service engagements, our drones capture aerial imagery
              and related sensor data over the land we&apos;re scanning,
              surveying, or spraying.
            </li>
            <li>
              <span className="text-[#F9F6EE]">Technical data.</span>{" "}
              Like most websites, we collect basic technical information
              such as browser type and general usage patterns to keep our
              site working well.
            </li>
          </ul>
        </Section>

        <Section title="3. How We Use It">
          <p>We use the information above to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Respond to your inquiries and demo requests;</li>
            <li>Provide, schedule, and improve our aerial services;</li>
            <li>
              Carry out agronomic analysis — for example, using aerial
              imagery to identify pest, disease, or nutrient issues on your
              land;
            </li>
            <li>
              Send you service-related communications, such as scheduling
              updates or reports.
            </li>
          </ul>
          <p>
            We do not use your farm data or imagery for any purpose beyond
            delivering and improving the services you&apos;ve engaged us for,
            without your consent.
          </p>
        </Section>

        <Section title="4. Legal Basis & the NDPA">
          <p>
            We process personal data in compliance with the Nigeria Data
            Protection Act 2023 (NDPA) and the guidance of the Nigeria Data
            Protection Commission (NDPC), Nigeria&apos;s data protection
            regulator. Depending on the context, we rely on your consent, the
            necessity of processing to perform a service you&apos;ve
            requested, or our legitimate interest in operating and improving
            Aeroseeds, as the legal basis for processing your information.
          </p>
        </Section>

        <Section title="5. Sharing">
          <p>
            We do not sell your personal data. We may share information with
            trusted service providers who help us operate — for example,
            form and email processing tools that route inquiries to our
            team — under obligations to keep it confidential and use it only
            to provide services to us. We may also disclose information where
            required by law or to protect our legal rights.
          </p>
        </Section>

        <Section title="6. Data Retention">
          <p>
            We retain personal data for as long as needed to respond to your
            inquiry, deliver the service you&apos;ve engaged us for, and meet
            our legal and record-keeping obligations. Aerial imagery and farm
            data collected during an engagement are generally retained for
            the duration of our working relationship with you, plus a
            reasonable period afterward, unless you ask us to delete it
            sooner.
          </p>
        </Section>

        <Section title="7. Your Rights Under the NDPA">
          <p>
            As a data subject under the NDPA, you have the right to:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Access the personal data we hold about you;</li>
            <li>Correct inaccurate or incomplete data;</li>
            <li>Request deletion of your data, subject to legal exceptions;</li>
            <li>Object to certain kinds of processing; and</li>
            <li>Withdraw consent at any time, where processing is based on consent.</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{" "}
            <a
              href="mailto:plant@aeroseeds.io"
              className="text-[#F7E7A8] underline hover:text-[#f1d460] transition-colors"
            >
              plant@aeroseeds.io
            </a>{" "}
            and we&apos;ll respond promptly.
          </p>
        </Section>

        <Section title="8. Security">
          <p>
            We take reasonable technical and organizational measures to
            protect the personal and farm data we hold from unauthorized
            access, loss, or misuse. No system is perfectly secure, but we
            work to keep your information safe and to limit access to those
            who need it to do their jobs.
          </p>
        </Section>

        <Section title="9. Children">
          <p>
            Our Services are directed at farmers, businesses, and
            organizations, not children. We do not knowingly collect personal
            data from children, and our Services are not intended for use by
            individuals under 18.
          </p>
        </Section>

        <Section title="10. International Transfers">
          <p>
            We&apos;re a Nigerian company and primarily process data within
            Nigeria. Where we use service providers based outside Nigeria —
            for example, for email or form processing — we take steps to
            ensure your data continues to receive an appropriate level of
            protection, consistent with the NDPA.
          </p>
        </Section>

        <Section title="11. Changes to This Policy">
          <p>
            We may update this Privacy Policy as our services and legal
            obligations evolve. If we make material changes, we&apos;ll
            update the effective date at the top of this page. Please check
            back periodically. This policy works alongside our{" "}
            <Link
              href="/terms"
              className="text-[#F7E7A8] underline hover:text-[#f1d460] transition-colors"
            >
              Terms of Use
            </Link>
            .
          </p>
        </Section>

        <Section title="12. Contact">
          <p>
            Questions about this Privacy Policy or how we handle your data?
            Reach us at{" "}
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
