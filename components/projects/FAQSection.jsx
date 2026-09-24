"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronDown, HelpCircle } from "lucide-react";
import { faqs } from "./data";

export default function FAQSection() {
  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-12 lg:py-14">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-[#eef8fd] blur-[120px]" />

        <div className="absolute -left-40 bottom-0 h-[360px] w-[360px] rounded-full bg-[#f7f9fc] blur-[100px]" />
      </div>

      <div className="container-chandan relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          {/* LEFT CONTENT */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            {/* Eyebrow */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#dce8f0] bg-[#f7f9fc] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#015696]">
              <HelpCircle size={15} />
              FAQs
            </div>

            <h2 className="max-w-md text-3xl font-bold leading-[1.08] text-[#092a43] sm:text-4xl md:text-5xl">
              Questions about
              <br />
              <span className="text-[#015696]">our projects?</span>
            </h2>

            <p className="mt-5 max-w-md text-base leading-7 text-[#64748b]">
              Find answers to common questions about waterproofing projects,
              site assessment, treatment approaches and project execution.
            </p>

            {/* Info Card */}
            <div className="mt-8 rounded-[22px] border border-[#dce8f0] bg-[#f7f9fc] p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eef8fd] text-[#015696]">
                <HelpCircle size={20} />
              </div>

              <h3 className="mt-5 font-bold text-[#092a43]">
                Have a specific question?
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#64748b]">
                Share your property details with us and we can discuss the
                requirement with you.
              </p>

              <Link
                href="/contact"
                className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#015696]"
              >
                Discuss Your Requirement

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>

          {/* FAQ LIST */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group overflow-hidden rounded-[20px] border border-[#dce8f0] bg-white transition-all duration-300 open:border-[#b9ddec] open:shadow-[0_12px_35px_rgba(9,42,67,0.07)]"
              >
                <summary className="flex cursor-pointer list-none items-center gap-5 px-5 py-5 sm:px-7 sm:py-6 [&::-webkit-details-marker]:hidden">
                  {/* Number */}
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f1f8fc] text-xs font-bold text-[#015696] transition-colors duration-300 group-open:bg-[#015696] group-open:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Question */}
                  <span className="flex-1 pr-2 text-base font-bold leading-6 text-[#092a43] sm:text-lg">
                    {faq.question}
                  </span>

                  {/* Icon */}
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#dce8f0] text-[#64748b] transition-all duration-300 group-open:border-[#015696] group-open:bg-[#015696] group-open:text-white">
                    <ChevronDown
                      size={17}
                      className="transition-transform duration-300 group-open:rotate-180"
                    />
                  </span>
                </summary>

                {/* Answer */}
                <div className="px-5 pb-6 sm:pl-[84px] sm:pr-7">
                  <div className="border-t border-[#e8f0f5] pt-5">
                    <p className="text-sm leading-7 text-[#64748b] sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-12 overflow-hidden rounded-[24px] bg-[#092a43]">
          <div className="relative flex flex-col gap-6 px-7 py-7 sm:px-9 md:flex-row md:items-center md:justify-between md:px-10">
            {/* Glow */}
            <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-[#015696]/30 blur-[70px]" />

            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#6bbce4]">
                Still Have Questions?
              </p>

              <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                Let’s discuss your waterproofing requirement.
              </h3>
            </div>

            <Link
              href="/contact"
              className="group relative z-10 inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#092a43] transition-all duration-300 hover:bg-[#eef8fd]"
            >
              Contact Us

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}