"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  FileText,
  Gavel,
  Mail,
  ShieldCheck,
} from "lucide-react";

const sections = [
  {
    id: "acceptance",
    number: "01",
    title: "Acceptance of Terms",
    content: (
      <p>
        By accessing or using the Chandan Enterprises website, you agree to
        use the website in accordance with these Terms & Conditions. If you do
        not agree with any part of these terms, please discontinue use of the
        website.
      </p>
    ),
  },
  {
    id: "website-use",
    number: "02",
    title: "Use of the Website",
    content: (
      <>
        <p>
          This website is provided to share information about Chandan
          Enterprises, its waterproofing services and ways to contact the
          business regarding a service requirement.
        </p>

        <p className="mt-4">
          You agree not to misuse the website, interfere with its operation,
          attempt unauthorized access or use the website for unlawful
          purposes.
        </p>
      </>
    ),
  },
  {
    id: "service-information",
    number: "03",
    title: "Service Information",
    content: (
      <>
        <p>
          Information published on this website is intended to provide general
          information about waterproofing and leakage-protection services
          offered by Chandan Enterprises.
        </p>

        <p className="mt-4">
          Actual service requirements, treatment methods, materials, scope of
          work and execution details may vary depending on the property,
          surface, affected area and site conditions.
        </p>
      </>
    ),
  },
  {
    id: "enquiries",
    number: "04",
    title: "Enquiries & Contact Requests",
    content: (
      <p>
        Submitting an enquiry through the website does not by itself create a
        service contract, quotation, purchase order or obligation to undertake
        work. Information submitted through an enquiry may be reviewed so that
        the requirement can be discussed with you.
      </p>
    ),
  },
  {
    id: "inspection",
    number: "05",
    title: "Site Assessment & Inspection",
    content: (
      <>
        <p>
          Waterproofing requirements can depend on conditions that may not be
          fully visible through an online enquiry. Where applicable, the
          requirement may need to be understood through discussion, photographs
          or assessment of the affected area.
        </p>

        <p className="mt-4">
          Any proposed treatment should be considered in relation to the actual
          site condition and the scope agreed for the particular work.
        </p>
      </>
    ),
  },
  {
    id: "quotation",
    number: "06",
    title: "Quotations & Scope of Work",
    content: (
      <>
        <p>
          Where a quotation or proposal is provided, the applicable scope,
          specifications, pricing, materials, exclusions and other commercial
          terms will be determined according to the particular requirement.
        </p>

        <p className="mt-4">
          A website description of a service should not be interpreted as a
          fixed quotation or guaranteed scope of work.
        </p>
      </>
    ),
  },
  {
    id: "materials",
    number: "07",
    title: "Materials & Treatment Methods",
    content: (
      <p>
        The materials, products and treatment methods used for a particular
        waterproofing requirement may depend on the surface, location,
        condition and agreed scope of work. Specific material or treatment
        specifications should be confirmed as part of the relevant quotation
        or project discussion.
      </p>
    ),
  },
  {
    id: "project-execution",
    number: "08",
    title: "Project Execution",
    content: (
      <p>
        Project execution may depend on site accessibility, surface
        preparation, weather conditions, existing construction conditions,
        availability of materials and other factors relevant to the work.
        Actual execution details may therefore vary between properties and
        projects.
      </p>
    ),
  },
  {
    id: "payments",
    number: "09",
    title: "Pricing & Payments",
    content: (
      <p>
        Pricing and payment terms for a service are determined according to
        the agreed scope of work and applicable quotation or commercial
        agreement. Website content does not constitute a fixed price for any
        particular waterproofing service.
      </p>
    ),
  },
  {
    id: "warranty",
    number: "10",
    title: "Warranty & Service Commitments",
    content: (
      <p>
        Where a warranty or specific service commitment applies, the relevant
        terms will be determined by the applicable quotation, agreement,
        warranty document or project terms. Website content should not be
        interpreted as creating a warranty unless expressly confirmed in
        writing.
      </p>
    ),
  },
  {
    id: "results",
    number: "11",
    title: "Treatment Results",
    content: (
      <p>
        Waterproofing outcomes can depend on existing construction, source of
        water ingress, surface condition, drainage, weather exposure,
        workmanship conditions and other factors. Information on this website
        should not be interpreted as a guarantee of a particular result unless
        such result is expressly agreed in writing.
      </p>
    ),
  },
  {
    id: "third-party",
    number: "12",
    title: "Third-Party Services & Links",
    content: (
      <p>
        The website may contain links to third-party websites, communication
        platforms or other external services. Chandan Enterprises does not
        control those third-party websites or services and is not responsible
        for their content, availability, terms or privacy practices.
      </p>
    ),
  },
  {
    id: "intellectual-property",
    number: "13",
    title: "Intellectual Property",
    content: (
      <p>
        Unless otherwise stated, website content including text, graphics,
        branding, design elements, images and other materials belongs to or is
        used by Chandan Enterprises with appropriate rights. Website content
        should not be copied, reproduced, modified or commercially reused
        without appropriate permission.
      </p>
    ),
  },
  {
    id: "accuracy",
    number: "14",
    title: "Website Information",
    content: (
      <p>
        Chandan Enterprises aims to keep website information useful and
        accurate. However, service information, descriptions, availability,
        contact details and other website content may be updated or changed
        without prior notice.
      </p>
    ),
  },
  {
    id: "liability",
    number: "15",
    title: "Limitation of Liability",
    content: (
      <p>
        To the extent permitted by applicable law, Chandan Enterprises shall
        not be responsible for losses arising solely from reliance on general
        website information, interruptions to website availability, third-party
        websites or information that has not been confirmed as part of a
        specific service agreement.
      </p>
    ),
  },
  {
    id: "privacy",
    number: "16",
    title: "Privacy",
    content: (
      <p>
        Information submitted through the website is handled according to our
        Privacy Policy. Please review the{" "}
        <Link
          href="/privacy-policy"
          className="font-semibold text-[#015696] hover:underline"
        >
          Privacy Policy
        </Link>{" "}
        for information about how website enquiries and related information
        may be handled.
      </p>
    ),
  },
  {
    id: "changes",
    number: "17",
    title: "Changes to These Terms",
    content: (
      <p>
        Chandan Enterprises may update these Terms & Conditions from time to
        time to reflect changes to the website, services, business practices or
        applicable requirements. Updated terms will be published on this page
        with the applicable update date.
      </p>
    ),
  },
];

export default function TermsAndConditionsPage() {
  const lastUpdated = "September 2026";

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-[#111827]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#092a43]">
        {/* Glow */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#015696]/30 blur-[120px]" />

        <div className="pointer-events-none absolute -bottom-40 left-[-180px] h-[450px] w-[450px] rounded-full bg-[#016db5]/15 blur-[120px]" />

        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="container-chandan relative z-10">
          <div className="max-w-4xl py-16 md:py-20 lg:py-24">
            {/* Back */}
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-xs font-medium text-[#9db4c3] transition-colors hover:text-white"
            >
              <ArrowLeft size={14} />
              Back to Home
            </Link>

            {/* Label */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#46a9d8]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8bc9e8]">
                Legal Information
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-white md:text-5xl lg:text-6xl">
              Terms &
              <span className="text-[#46a9d8]"> Conditions</span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#b9cad6] md:text-base">
              These Terms & Conditions explain the general terms that apply
              when you access and use the Chandan Enterprises website and
              submit enquiries regarding our waterproofing services.
            </p>

            {/* Date */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2.5">
              <FileText
                size={15}
                className="text-[#8bc9e8]"
                strokeWidth={1.8}
              />

              <span className="text-xs text-[#b9cad6]">
                Last Updated:{" "}
                <span className="font-semibold text-white">
                  {lastUpdated}
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTENT
      ========================================================= */}
      <section className="relative py-12 md:py-16 lg:py-20">
        <div className="container-chandan">
          <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:items-start lg:gap-14">
            {/* =====================================================
                SIDEBAR
            ===================================================== */}
            <aside className="lg:sticky lg:top-24">
              <div className="rounded-[22px] border border-[#dce8f0] bg-white p-5 shadow-[0_10px_30px_rgba(9,42,67,0.05)]">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#94a3b8]">
                  On This Page
                </p>

                <nav className="space-y-1">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs text-[#64748b] transition-all duration-200 hover:bg-[#eef8fd] hover:text-[#015696]"
                    >
                      <span className="w-5 text-[9px] font-bold text-[#b5c4cd] group-hover:text-[#015696]">
                        {section.number}
                      </span>

                      <span>{section.title}</span>
                    </a>
                  ))}
                </nav>
              </div>

              {/* Legal Card */}
              <div className="mt-4 rounded-[22px] bg-[#092a43] p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#015696] text-white">
                  <Gavel size={18} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-base font-bold text-white">
                  Need Assistance?
                </h3>

                <p className="mt-2 text-xs leading-5 text-[#9fb3c0]">
                  For questions regarding a service requirement, contact
                  Chandan Enterprises directly.
                </p>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#8bc9e8] transition-colors hover:text-white"
                >
                  Contact Us
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </aside>

            {/* =====================================================
                MAIN CONTENT
            ===================================================== */}
            <article className="min-w-0">
              {/* Introduction */}
              <div className="mb-8 rounded-[24px] border border-[#dce8f0] bg-white p-7 shadow-[0_10px_30px_rgba(9,42,67,0.04)] md:p-9">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eef8fd] text-[#015696]">
                    <ShieldCheck size={20} strokeWidth={1.8} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#015696]">
                      Chandan Enterprises
                    </p>

                    <h2 className="mt-2 text-xl font-bold text-[#092a43] md:text-2xl">
                      Terms for using our website
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-[#64748b]">
                      These terms are intended to clarify how the website
                      should be used and how online service information and
                      enquiries should be understood. Specific project terms
                      are determined separately where a service is agreed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Terms Sections */}
              <div className="space-y-5">
                {sections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-24 rounded-[24px] border border-[#dce8f0] bg-white p-7 shadow-[0_8px_25px_rgba(9,42,67,0.035)] md:p-9"
                  >
                    <div className="flex gap-5">
                      {/* Number */}
                      <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef8fd] text-xs font-bold text-[#015696] sm:flex">
                        {section.number}
                      </div>

                      <div className="min-w-0">
                        {/* Mobile Number */}
                        <div className="flex items-center gap-3 sm:hidden">
                          <span className="text-[10px] font-bold tracking-[0.18em] text-[#015696]">
                            {section.number}
                          </span>
                        </div>

                        <h2 className="mt-1 text-xl font-bold text-[#092a43] md:text-2xl">
                          {section.title}
                        </h2>

                        <div className="mt-4 text-sm leading-7 text-[#64748b]">
                          {section.content}
                        </div>
                      </div>
                    </div>
                  </section>
                ))}
              </div>

              {/* =================================================
                  CONTACT / FINAL LEGAL BLOCK
              ================================================= */}
              <section
                id="contact"
                className="mt-5 overflow-hidden rounded-[24px] bg-[#092a43] p-7 md:p-9"
              >
                <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7fb9da]">
                      Chandan Enterprises
                    </p>

                    <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
                      Have a question about our terms?
                    </h2>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-[#a9bdca]">
                      For service-related questions or enquiries, you can
                      contact Chandan Enterprises directly.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                    <a
                      href="tel:+919558189429"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#092a43] transition-all duration-300 hover:bg-[#46a9d8] hover:text-white"
                    >
                      Call Us
                      <ArrowUpRight size={16} />
                    </a>

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/[0.06]"
                    >
                      Contact Page
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-5">
                  <div className="flex items-center gap-2 text-xs text-[#9fb3c0]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#46a9d8]" />
                    Ahmedabad, Gujarat
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[#9fb3c0]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#46a9d8]" />
                    Waterproofing & Leakage Protection
                  </div>
                </div>
              </section>

              {/* Legal Note */}
              <div className="mt-6 border-t border-[#dce8f0] pt-6">
                <p className="text-[11px] leading-5 text-[#94a3b8]">
                  These Terms & Conditions are general website terms and should
                  be reviewed and adapted to the actual business agreements,
                  project terms and legal requirements applicable to Chandan
                  Enterprises.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="border-t border-[#dce8f0] bg-white py-10 md:py-12">
        <div className="container-chandan">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-[#092a43]">
                Looking for waterproofing services?
              </p>

              <p className="mt-1 text-xs text-[#64748b]">
                Share your property requirement with Chandan Enterprises.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#015696] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0b3f67]"
            >
              Discuss Your Requirement
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}