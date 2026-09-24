"use client";

import {
  ArrowUpRight,
  ChevronDown,
  HelpCircle,
  Phone,
} from "lucide-react";

const faqs = [
  {
    question: "What waterproofing services does Chandan Enterprises provide?",
    answer:
      "Chandan Enterprises provides waterproofing and leakage protection solutions including terrace waterproofing, bathroom waterproofing, exterior wall waterproofing, rising dampness treatment, basement waterproofing, swimming pool waterproofing, PU injection grouting, expansion joint sealing and roof waterproofing.",
  },
  {
    question: "How do you identify the cause of water leakage?",
    answer:
      "The process begins with site inspection and leak detection. The affected area, surface condition and visible signs of moisture are considered before determining the appropriate waterproofing or leakage treatment.",
  },
  {
    question: "Do you provide terrace and roof waterproofing?",
    answer:
      "Yes. Terrace waterproofing and roof waterproofing are part of our waterproofing services. The treatment approach depends on the condition of the roof or terrace and the nature of the leakage or seepage problem.",
  },
  {
    question: "Do you provide bathroom waterproofing?",
    answer:
      "Yes. Bathroom waterproofing is available for wet areas where moisture penetration, leakage or dampness can affect surrounding surfaces and spaces.",
  },
  {
    question: "Can you treat damp walls and seepage?",
    answer:
      "Yes. Chandan Enterprises provides exterior wall waterproofing and rising dampness treatment for moisture-related problems. The appropriate treatment depends on the source and condition of the affected area.",
  },
  {
    question: "Do you provide basement waterproofing?",
    answer:
      "Yes. Basement waterproofing is one of our services for properties experiencing moisture, seepage or water penetration in basement areas.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "Our primary service location is Ahmedabad, Gujarat, with service coverage across Ahmedabad and nearby areas depending on the project requirement.",
  },
  {
    question: "How can I request a waterproofing inspection?",
    answer:
      "You can contact Chandan Enterprises through the enquiry form, phone or WhatsApp to discuss your waterproofing or leakage problem and request an inspection.",
  },
];

export default function FaqSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FCFBF8] py-10 sm:py-12 lg:py-14">
      {/* Background details */}
      <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-[#1687C5]/5 blur-3xl" />

      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="grid gap-6 border-b border-[#DCE5E9] pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1687C5]" />

              <span className="text-xs font-bold uppercase tracking-[3px] text-[#1687C5]">
                FAQ / Support
              </span>
            </div>

            <h2 className="max-w-3xl text-3xl font-bold leading-[1.1] tracking-tight text-[#12324A] sm:text-4xl lg:text-5xl">
              Everything you need to know
              <span className="text-[#1687C5]"> before waterproofing.</span>
            </h2>
          </div>

          <div className="max-w-sm lg:text-right">
            <p className="text-sm leading-7 text-[#64748B]">
              Clear answers about leakage, seepage, waterproofing treatments,
              inspections and service coverage.
            </p>
          </div>
        </div>

        {/* FAQ CONTENT */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[190px_1fr] lg:gap-14">
          {/* LEFT INDEX */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#12324A] text-white">
                <HelpCircle size={25} strokeWidth={1.8} />
              </div>

              <p className="mt-5 text-xs font-bold uppercase tracking-[2px] text-[#1687C5]">
                Questions
              </p>

              <p className="mt-2 text-4xl font-bold tracking-tight text-[#12324A]">
                08
              </p>

              <p className="mt-1 text-xs leading-5 text-[#64748B]">
                Frequently asked questions
              </p>

              <div className="mt-7 h-px w-12 bg-[#1687C5]" />
            </div>
          </div>

          {/* QUESTIONS */}
          <div className="grid gap-x-8 gap-y-4 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                open={index === 0}
                className="group border-b border-[#DCE5E9] pb-1"
              >
                <summary className="flex cursor-pointer list-none items-start gap-4 py-5">
                  {/* NUMBER */}
                  <span className="mt-0.5 shrink-0 font-mono text-xs font-bold text-[#1687C5]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* QUESTION */}
                  <span className="flex-1 pr-2 text-sm font-bold leading-6 text-[#12324A] sm:text-base">
                    {faq.question}
                  </span>

                  {/* ICON */}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D6E4EA] text-[#12324A] transition-all duration-300 group-open:border-[#1687C5] group-open:bg-[#1687C5] group-open:text-white group-open:rotate-180">
                    <ChevronDown size={16} />
                  </span>
                </summary>

                <div className="pb-5 pl-8 pr-2 sm:pl-9">
                  <p className="text-sm leading-7 text-[#64748B]">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* CONTACT BAR */}
        <div className="mt-12 overflow-hidden rounded-[24px] bg-[#12324A]">
          <div className="flex flex-col gap-6 px-6 py-7 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1687C5] text-white">
                <Phone size={19} />
              </div>

              <div>
                <p className="text-sm font-bold text-white sm:text-base">
                  Still have a waterproofing question?
                </p>

                <p className="mt-1 text-xs leading-5 text-white/60 sm:text-sm">
                  Talk to Chandan Enterprises about your leakage or seepage
                  problem.
                </p>
              </div>
            </div>

            <a
              href="tel:+919558189429"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#12324A] transition hover:bg-[#EFF9FE]"
            >
              Speak With Us
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}