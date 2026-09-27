import { ChevronDown } from "lucide-react";
import { faqs } from "./data";

export default function FAQSection() {
  return (
    <section className="border-t border-[#dce8f0] bg-[#f7f9fb] py-120 sm:py-12 lg:py-14">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#015696]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#015696]">
                FAQs
              </span>
            </div>

            <h2 className="mt-4 max-w-lg text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#061b2b] sm:text-4xl lg:text-[46px]">
              Questions about
              <span className="block text-[#015696]">
                false ceilings.
              </span>
            </h2>
          </div>

          <div className="lg:pl-16 lg:pb-1">
            <p className="max-w-2xl text-[15px] leading-7 text-[#64748b]">
              Find answers to common questions about false ceiling
              styles, applications, planning and project requirements.
              Final recommendations depend on the actual space and
              site conditions.
            </p>
          </div>
        </div>

        {/* FAQ list */}
        <div className="mt-12 border-t border-[#dce8f0]">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group border-b border-[#dce8f0]"
            >
              <summary className="flex cursor-pointer list-none items-center gap-5 py-6 text-left outline-none sm:py-7 [&::-webkit-details-marker]:hidden">

                {/* Number */}
                <span className="w-8 shrink-0 text-[11px] font-bold tracking-[0.08em] text-[#94a3b8] sm:w-10">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Question */}
                <span className="flex-1 pr-4 text-[15px] font-semibold leading-6 text-[#092a43] transition-colors duration-300 group-hover:text-[#015696] sm:text-base">
                  {faq.question}
                </span>

                {/* Icon */}
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#dce8f0] bg-white text-[#015696] transition-all duration-300 group-hover:border-[#b9d8e7] group-open:border-[#015696] group-open:bg-[#015696] group-open:text-white">
                  <ChevronDown
                    className="h-4 w-4 transition-transform duration-300 group-open:rotate-180"
                    strokeWidth={1.8}
                  />
                </span>
              </summary>

              {/* Answer */}
              <div className="grid grid-cols-[32px_1fr] gap-5 pb-7 sm:grid-cols-[40px_1fr]">
                <span />

                <p className="max-w-3xl border-l-2 border-[#dcecf4] pl-5 text-sm leading-7 text-[#64748b] sm:pl-6">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-8 flex items-center gap-3">
          <span className="h-px w-8 bg-[#015696]" />

          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#94a3b8]">
            Need a project-specific answer? Start a consultation.
          </p>
        </div>
      </div>
    </section>
  );
}