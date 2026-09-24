"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { faqs } from "./data";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-10 md:py-12 lg:py-14">
      {/* Background Accent */}
      <div className="pointer-events-none absolute -right-40 top-[-180px] h-[480px] w-[480px] rounded-full bg-[#015696]/5 blur-[120px]" />

      <div className="container-chandan relative z-10">
        {/* Header */}
        <div className="grid gap-8 border-b border-[#dce8f0] pb-10 md:pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-[#015696]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#015696]">
                Frequently Asked Questions
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight text-[#092a43] md:text-4xl lg:text-5xl">
              Questions before
              <span className="block text-[#015696]">
                getting started?
              </span>
            </h2>
          </div>

          <div className="flex gap-4 lg:pl-16">
            <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eef8fd] text-[#015696] sm:flex">
              <HelpCircle size={21} strokeWidth={1.8} />
            </div>

            <p className="max-w-xl text-sm leading-7 text-[#64748b] md:text-base">
              Here are some common questions about waterproofing services,
              property requirements and the process of discussing your
              requirement with Chandan Enterprises.
            </p>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          {/* Left Information */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-[24px] bg-[#092a43] p-7 md:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#015696] text-white">
                <MessageCircle size={20} strokeWidth={1.8} />
              </div>

              <h3 className="mt-7 text-xl font-bold text-white md:text-2xl">
                Still have a question?
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#a9bdca]">
                If your property's waterproofing requirement is not covered
                here, you can share the details with us directly.
              </p>

              <a
                href="/contact#enquiry"
                className="mt-7 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#092a43] transition-all duration-300 hover:bg-[#46a9d8] hover:text-white"
              >
                Send An Enquiry
              </a>
            </div>

            <div className="mt-4 rounded-[20px] border border-[#dce8f0] bg-white p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#94a3b8]">
                Service Area
              </p>

              <p className="mt-2 text-sm font-semibold text-[#092a43]">
                Ahmedabad, Gujarat
              </p>

              <p className="mt-1 text-xs leading-5 text-[#64748b]">
                Residential, commercial and industrial requirements.
              </p>
            </div>
          </div>

          {/* Questions */}
          <div className="divide-y divide-[#dce8f0] border-y border-[#dce8f0]">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div key={index} className="group">
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left md:py-7"
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`mt-0.5 text-xs font-bold transition-colors duration-300 ${
                          isOpen ? "text-[#015696]" : "text-[#aab8c2]"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`text-base font-semibold transition-colors duration-300 md:text-lg ${
                          isOpen
                            ? "text-[#015696]"
                            : "text-[#092a43] group-hover:text-[#015696]"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "border-[#015696] bg-[#015696] text-white"
                          : "border-[#dce8f0] bg-white text-[#64748b] group-hover:border-[#015696] group-hover:text-[#015696]"
                      }`}
                    >
                      <ChevronDown
                        size={17}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] pb-6 opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="ml-8 max-w-2xl border-l-2 border-[#dceff7] pl-5 md:ml-9">
                        <p className="text-sm leading-7 text-[#64748b]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col gap-5 rounded-[20px] border border-[#dce8f0] bg-white px-6 py-6 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <p className="text-sm font-semibold text-[#092a43]">
              Have a property-specific question?
            </p>

            <p className="mt-1 text-xs leading-5 text-[#64748b]">
              Share your requirement and affected area with us.
            </p>
          </div>

          <a
            href="/contact#enquiry"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#015696] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0b3f67]"
          >
            Discuss Your Requirement
          </a>
        </div>
      </div>
    </section>
  );
}