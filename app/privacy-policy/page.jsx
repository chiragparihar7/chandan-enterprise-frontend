"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  FileText,
  LockKeyhole,
  Mail,
  ShieldCheck,
} from "lucide-react";

const sections = [
  {
    id: "information",
    number: "01",
    title: "Information We Collect",
    content: (
      <>
        <p>
          When you contact Chandan Enterprises through this website, we may
          receive information that you voluntarily provide through our contact
          or enquiry forms.
        </p>

        <p className="mt-4">
          Depending on the form and information you choose to provide, this
          may include your name, phone number, email address, property type,
          required service and details about your waterproofing or leakage
          requirement.
        </p>
      </>
    ),
  },
  {
    id: "usage",
    number: "02",
    title: "How We Use Your Information",
    content: (
      <>
        <p>
          Information submitted through the website may be used to understand
          and respond to your enquiry or service requirement.
        </p>

        <ul className="mt-5 space-y-3">
          {[
            "Respond to enquiries and contact requests.",
            "Understand the property and waterproofing requirement you describe.",
            "Discuss suitable services or treatment approaches.",
            "Communicate with you regarding your enquiry.",
            "Improve the way we provide information through our website.",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <CheckCircle2
                size={17}
                className="mt-1 shrink-0 text-[#015696]"
                strokeWidth={1.8}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "forms",
    number: "03",
    title: "Contact & Enquiry Forms",
    content: (
      <p>
        If you submit an enquiry through our website, the information you
        provide may be used to contact you regarding the requirement you have
        submitted. Please avoid submitting sensitive personal information that
        is not necessary for your enquiry.
      </p>
    ),
  },
  {
    id: "cookies",
    number: "04",
    title: "Cookies & Website Technologies",
    content: (
      <p>
        Our website may use cookies or similar technologies where required for
        website functionality, analytics, measurement or other website
        operations. The specific technologies used may change as the website
        and its services are updated.
      </p>
    ),
  },
  {
    id: "third-party",
    number: "05",
    title: "Third-Party Services",
    content: (
      <>
        <p>
          Certain website functions may rely on third-party services or
          platforms. These services may process information according to their
          own privacy policies and terms.
        </p>

        <p className="mt-4">
          Examples may include website analytics, advertising measurement,
          communication services or form-processing services where such
          services are enabled on the website.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    number: "06",
    title: "Sharing of Information",
    content: (
      <p>
        Chandan Enterprises does not use information submitted through this
        website for purposes unrelated to the enquiry or website operation
        unless otherwise communicated or required by applicable law.
        Information may be processed through service providers used to operate
        website functionality.
      </p>
    ),
  },
  {
    id: "security",
    number: "07",
    title: "Data Security",
    content: (
      <p>
        We take reasonable steps to protect information submitted through the
        website. However, no method of transmitting or storing information
        electronically can be guaranteed to be completely secure.
      </p>
    ),
  },
  {
    id: "retention",
    number: "08",
    title: "Data Retention",
    content: (
      <p>
        Information may be retained for as long as reasonably necessary to
        respond to enquiries, provide requested services, maintain business
        records, comply with applicable legal requirements or support legitimate
        business purposes.
      </p>
    ),
  },
  {
    id: "links",
    number: "09",
    title: "External Links",
    content: (
      <p>
        Our website may contain links to external websites or services,
        including communication or social media platforms. Chandan Enterprises
        is not responsible for the privacy practices or content of external
        websites. We recommend reviewing their respective privacy policies
        before providing personal information.
      </p>
    ),
  },
  {
    id: "rights",
    number: "10",
    title: "Your Choices",
    content: (
      <p>
        If you have submitted personal information to us and would like to
        discuss the information associated with your enquiry, you can contact
        Chandan Enterprises using the contact details provided on this website.
      </p>
    ),
  },
  {
    id: "children",
    number: "11",
    title: "Children's Privacy",
    content: (
      <p>
        This website is intended for general business and service-related
        enquiries. We do not knowingly request personal information from
        children for the purpose of submitting service enquiries.
      </p>
    ),
  },
  {
    id: "updates",
    number: "12",
    title: "Changes to This Privacy Policy",
    content: (
      <p>
        This Privacy Policy may be updated from time to time to reflect
        changes to our website, services, technology or applicable
        requirements. Any updated version will be published on this page with
        the applicable update date.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  const lastUpdated = "September 2026";

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-[#111827]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#092a43]">
        {/* Background Glow */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#015696]/30 blur-[120px]" />

        <div className="pointer-events-none absolute -bottom-40 left-[-180px] h-[450px] w-[450px] rounded-full bg-[#016db5]/15 blur-[120px]" />

        {/* Subtle Grid */}
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
            {/* Breadcrumb */}
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
                Legal & Privacy
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-white md:text-5xl lg:text-6xl">
              Privacy
              <span className="text-[#46a9d8]"> Policy</span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#b9cad6] md:text-base">
              This Privacy Policy explains how information may be collected,
              used and handled when you visit the Chandan Enterprises website
              or submit an enquiry through our website.
            </p>

            {/* Updated Badge */}
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
          CONTENT AREA
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

              {/* Privacy Contact Card */}
              <div className="mt-4 rounded-[22px] bg-[#092a43] p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#015696] text-white">
                  <LockKeyhole size={18} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-base font-bold text-white">
                  Privacy Questions?
                </h3>

                <p className="mt-2 text-xs leading-5 text-[#9fb3c0]">
                  If you have a question about information submitted through
                  the website, contact us directly.
                </p>

                <a
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#8bc9e8] transition-colors hover:text-white"
                >
                  Contact Us
                  <ArrowUpRight size={14} />
                </a>
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
                      Your Privacy Matters
                    </p>

                    <h2 className="mt-2 text-xl font-bold text-[#092a43] md:text-2xl">
                      Privacy at Chandan Enterprises
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-[#64748b]">
                      Chandan Enterprises respects the privacy of visitors and
                      people who contact us through our website. This policy
                      describes the general way information submitted through
                      the website may be handled.
                    </p>
                  </div>
                </div>
              </div>

              {/* Policy Sections */}
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

                      {/* Content */}
                      <div className="min-w-0">
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
                  CONTACT
              ================================================= */}
              <section
                id="contact"
                className="mt-5 scroll-mt-24 overflow-hidden rounded-[24px] bg-[#092a43] p-7 md:p-9"
              >
                <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7fb9da]">
                      Contact Chandan Enterprises
                    </p>

                    <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
                      Questions about this policy?
                    </h2>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-[#a9bdca]">
                      If you have questions about information submitted through
                      our website, please contact Chandan Enterprises.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                    <a
                      href="tel:+919558189429"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#092a43] transition-all duration-300 hover:bg-[#46a9d8] hover:text-white"
                    >
                      <PhoneIcon />
                      Call Us
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
                    9:00 AM – 7:00 PM
                  </div>
                </div>
              </section>

              {/* Disclaimer */}
              <div className="mt-6 border-t border-[#dce8f0] pt-6">
                <p className="text-[11px] leading-5 text-[#94a3b8]">
                  This Privacy Policy is provided for website privacy
                  information and should be reviewed and updated according to
                  the actual data-processing practices, technologies and legal
                  requirements applicable to Chandan Enterprises.
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
                Need waterproofing assistance?
              </p>

              <p className="mt-1 text-xs text-[#64748b]">
                Return to our website to discuss your requirement.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#015696] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0b3f67]"
            >
              Contact Chandan Enterprises
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* Small reusable phone icon */
function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}