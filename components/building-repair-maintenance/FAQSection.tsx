"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "What building repair services does Chandan Enterprises provide?",
    answer:
      "We provide terrace and roof waterproofing, bathroom leakage repair, dampness treatment, wall crack and plaster repair, painting, surface restoration, and general building maintenance.",
  },
  {
    question: "Do you provide terrace and roof waterproofing?",
    answer:
      "Yes. We provide terrace and roof waterproofing solutions based on the condition of the affected area and the nature of the leakage problem.",
  },
  {
    question: "Can you help with damp walls and seepage?",
    answer:
      "Yes. We address damp walls and seepage issues by assessing the affected area and determining the appropriate repair approach.",
  },
  {
    question: "Do you repair wall cracks and damaged plaster?",
    answer:
      "Yes. We handle wall crack repairs and damaged plaster work. The repair method depends on the condition and type of damage.",
  },
  {
    question: "Do you provide building repair services in Ahmedabad?",
    answer:
      "Chandan Enterprises provides building repair, waterproofing, and maintenance services in Ahmedabad, Gujarat. Contact us to discuss your location and requirements.",
  },
  {
    question: "How can I request a site inspection or quotation?",
    answer:
      "Contact us through the contact section on this page and share details about your building issue. We can discuss your requirements and the next steps.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-10 sm:py-12 lg:py-14">
      <div className="container-chandan">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-chandan-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-chandan-primary">
                Frequently Asked Questions
              </span>
            </div>

            <h2 className="text-4xl font-bold leading-tight tracking-tight text-chandan-navy sm:text-5xl">
              Have questions about building repairs?
            </h2>

            <p className="mt-5 text-base leading-8 text-text-secondary">
              Find answers to common questions about waterproofing, seepage,
              wall repairs, and building maintenance.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-chandan-primary px-6 py-4 text-sm font-semibold text-white transition hover:bg-chandan-primary-dark"
            >
              <MessageCircle size={18} />
              Ask Us a Question
            </a>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={faq.question} className="py-1">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 py-5 text-left sm:py-6"
                  >
                    <span className="text-base font-semibold leading-7 text-chandan-navy sm:text-lg">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
                        isOpen
                          ? "bg-chandan-primary text-white"
                          : "bg-surface-blue text-chandan-primary"
                      }`}
                    >
                      <ChevronDown
                        size={19}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-6 pr-8 text-sm leading-7 text-text-secondary sm:text-base">
                        {faq.answer}
                      </p>
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