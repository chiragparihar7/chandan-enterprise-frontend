"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

import { waterproofingFAQs } from "./data";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section bg-white">
      <div className="container-chandan">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          {/* Header */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#dce8f0] bg-[#f8fbfd] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#015696]">
              <HelpCircle size={14} />
              Frequently Asked Questions
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-[#092a43] sm:text-4xl">
              Questions About Waterproofing?
            </h2>

            <p className="mt-5 max-w-md text-base leading-7 text-[#64748b]">
              Here are some common questions about waterproofing services,
              inspections and project requirements.
            </p>

            <div className="mt-8 rounded-2xl border border-[#cfe5f1] bg-[#eef8fd] p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#015696] shadow-sm">
                <MessageCircle size={20} />
              </div>

              <h3 className="mt-5 font-bold text-[#092a43]">
                Still have a question?
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#64748b]">
                Contact our team and discuss your property's specific
                waterproofing requirement.
              </p>

              <a
                href="#enquiry"
                className="mt-5 inline-flex text-sm font-bold text-[#015696]"
              >
                Send an Enquiry →
              </a>
            </div>
          </div>

          {/* FAQ */}
          <div className="space-y-3">
            {waterproofingFAQs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-[#b9d8e8] bg-[#f8fbfd]"
                      : "border-[#dce8f0] bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(isOpen ? -1 : index)
                    }
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="text-sm font-bold leading-6 text-[#092a43] sm:text-base">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-[#015696] text-white"
                          : "bg-[#eef8fd] text-[#015696]"
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

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-[#dce8f0] px-5 pb-5 pt-4 sm:px-6">
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
      </div>
    </section>
  );
}