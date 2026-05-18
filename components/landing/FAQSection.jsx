"use client";

import { faqs } from "./data";

export default function FAQSection() {
  return (
    <section className="bg-black py-28 px-6 md:px-10 text-white">

      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[4px] text-gray-400 text-sm mb-4">
            FAQs
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Common Questions
          </h2>

        </div>

        <div className="space-y-6">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-white/[0.03] border border-white/10 rounded-[32px] p-8"
            >

              <h3 className="text-2xl font-semibold mb-4">
                {faq.question}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {faq.answer}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}