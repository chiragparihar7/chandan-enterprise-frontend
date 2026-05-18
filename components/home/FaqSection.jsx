"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "What waterproofing services do you provide?",
    answer:
      "We provide terrace, bathroom, basement waterproofing, leakage repair, and complete civil maintenance services.",
  },
  {
    question: "Do you offer free inspection?",
    answer:
      "Yes, we offer a completely free site inspection to identify the issue and suggest the best solution.",
  },
  {
    question: "How long does waterproofing last?",
    answer:
      "Our solutions come with 1 / 3 / 5 / 7 / 10 years warranty depending on the service.",
  },
  {
    question: "What materials do you use?",
    answer:
      "We use premium quality, industry-approved materials for long-lasting protection.",
  },
  {
    question: "How much does waterproofing cost?",
    answer:
      "Pricing depends on the problem and area. We provide transparent quotes with no hidden charges.",
  },
  {
    question: "How quickly can work start?",
    answer:
      "Work usually starts within 1–2 days after inspection and confirmation.",
  },
];

export default function FaqSectionNeutral() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-3">
            Everything you need to know about our waterproofing services.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border p-5 transition duration-300 ${
                activeIndex === index
                  ? "border-black shadow-lg bg-white"
                  : "border-gray-200 bg-white hover:shadow-md"
              }`}
            >
              {/* Question */}
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-gray-900 font-medium text-base md:text-lg">
                  {faq.question}
                </h3>

                {/* Neutral Button */}
                <div
                  className={`min-w-[42px] h-10 flex items-center justify-center rounded-full text-lg transition ${
                    activeIndex === index
                      ? "bg-black text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {activeIndex === index ? "−" : "+"}
                </div>
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-300 ${
                  activeIndex === index
                    ? "max-h-40 mt-4 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}