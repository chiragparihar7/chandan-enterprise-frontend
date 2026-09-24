"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  HelpCircle,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

interface ServiceFAQProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

const ServiceFAQ: React.FC<ServiceFAQProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-12 lg:py-14">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute -right-48 top-20 h-[480px] w-[480px] rounded-full bg-[#015696]/[0.035] blur-[120px]" />

      <div className="pointer-events-none absolute -left-48 bottom-0 h-[420px] w-[420px] rounded-full bg-[#016db5]/[0.035] blur-[110px]" />

      <div className="container-chandan relative z-10">
        {/* =======================================================
            MAIN LAYOUT
        ======================================================= */}

        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          {/* =====================================================
              LEFT — INTRO
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef8fd] text-[#015696]">
                <HelpCircle size={18} strokeWidth={1.8} />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#015696]">
                  Service FAQ
                </p>

                <p className="mt-1 text-xs text-[#64748b]">
                  Common questions answered
                </p>
              </div>
            </div>

            {/* Heading */}
            <h2 className="mt-7 max-w-md text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-[#092a43] md:text-4xl lg:text-[46px]">
              Questions about this{" "}
              <span className="text-[#015696]">service?</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#64748b] md:text-base">
              Find answers to common questions about the service, execution,
              site requirements and the waterproofing process.
            </p>

            {/* Service Note */}
            <div className="mt-8 rounded-[22px] border border-[#dce8f0] bg-[#f7f9fc] p-6">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eef8fd] text-[#015696]">
                  <ShieldCheck size={17} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-[#092a43]">
                    Site conditions matter
                  </p>

                  <p className="mt-1.5 text-[11px] leading-5 text-[#64748b]">
                    Actual treatment, scope and execution can vary depending
                    on the property and affected area.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Prompt */}
            <div className="mt-5">
              <p className="text-xs text-[#64748b]">
                Can't find your answer?
              </p>

              <a
                href="/contact#enquiry"
                className="group mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#015696]"
              >
                Discuss your requirement

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT — FAQ ACCORDION
          ===================================================== */}

          <div>
            <div className="overflow-hidden rounded-[26px] border border-[#dce8f0] bg-[#f7f9fc]">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <motion.div
                    key={`${faq.question}-${index}`}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                    }}
                    className={`border-b border-[#dce8f0] last:border-b-0 ${
                      isOpen ? "bg-white" : "bg-[#f7f9fc]"
                    }`}
                  >
                    {/* Question */}
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      className="group flex w-full items-center gap-5 px-5 py-5 text-left transition-colors duration-200 md:px-7 md:py-6"
                    >
                      {/* Number */}
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[10px] font-bold transition-all duration-300 ${
                          isOpen
                            ? "bg-[#015696] text-white"
                            : "bg-[#eef8fd] text-[#015696] group-hover:bg-[#dff2fb]"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Question */}
                      <span
                        className={`flex-1 pr-2 text-sm font-semibold leading-6 transition-colors duration-200 md:text-base ${
                          isOpen
                            ? "text-[#015696]"
                            : "text-[#092a43] group-hover:text-[#015696]"
                        }`}
                      >
                        {faq.question}
                      </span>

                      {/* Arrow */}
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 border-[#015696] bg-[#015696] text-white"
                            : "border-[#dce8f0] bg-white text-[#64748b] group-hover:border-[#015696] group-hover:text-[#015696]"
                        }`}
                      >
                        <ChevronDown size={16} strokeWidth={1.8} />
                      </span>
                    </button>

                    {/* Answer */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-6 pl-[76px] pr-5 md:px-7 md:pb-7 md:pl-[88px]">
                            <div className="max-w-2xl border-l-2 border-[#dceff7] pl-4">
                              <p className="text-sm leading-7 text-[#64748b]">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* ===================================================
                BOTTOM CONTACT CARD
            =================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-5 overflow-hidden rounded-[24px] bg-[#092a43]"
            >
              <div className="flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between md:p-7">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#015696] text-white">
                    <MessageCircle size={18} strokeWidth={1.7} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Still have a question?
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[#9fb3c0]">
                      Share your property details and discuss the requirement
                      with our team.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row">
                  <a
                    href="tel:+919558189429"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-5 py-3 text-xs font-semibold text-white transition-all duration-300 hover:border-[#46a9d8]/40 hover:bg-white/[0.08]"
                  >
                    Call Us
                  </a>

                  <a
                    href="/contact#enquiry"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#015696] px-5 py-3 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#016db5]"
                  >
                    Send An Enquiry
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* =======================================================
            BOTTOM SERVICE NOTE
        ======================================================= */}

        <div className="mt-10 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-[#dce8f0] md:w-14" />

          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-[#94a3b8]">
            Need more information? We are here to discuss your requirement.
          </p>

          <span className="h-px w-8 bg-[#dce8f0] md:w-14" />
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;  