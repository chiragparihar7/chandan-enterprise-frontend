"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  HelpCircle,
} from "lucide-react";

const faqs = [
  {
    question:
      "Do you provide free site inspection in Ahmedabad?",
    answer:
      "Yes. Chandan Enterprise provides free site inspection across Ahmedabad and nearby areas. Our experts assess the issue and recommend the most suitable solution.",
  },

  {
    question:
      "Which services do you provide?",
    answer:
      "We provide waterproofing, repair & maintenance, renovation, refurbishment, false ceiling, gypsum partition, painting, interior works and civil maintenance services.",
  },

  {
    question:
      "Do you provide waterproofing warranty?",
    answer:
      "Yes. Warranty depends on the waterproofing system, application area and materials used. Details are provided before project execution.",
  },

  {
    question:
      "How quickly can your team visit the site?",
    answer:
      "For most Ahmedabad locations, site inspection can usually be arranged within 24 to 48 hours depending on availability.",
  },

  {
    question:
      "Do you handle both residential and commercial projects?",
    answer:
      "Yes. We work on homes, apartments, villas, offices, commercial buildings, warehouses and industrial properties.",
  },

  {
    question:
      "Can you repair existing water leakage problems?",
    answer:
      "Yes. Our team identifies the root cause of leakage and provides permanent repair and waterproofing solutions instead of temporary fixes.",
  },

  {
    question:
      "Do you provide false ceiling and gypsum partition work?",
    answer:
      "Yes. We design and install gypsum partitions, gypsum ceilings, false ceilings and interior space solutions for homes and offices.",
  },

  {
    question:
      "Do you provide renovation services?",
    answer:
      "Yes. We offer complete home renovation, office renovation, refurbishment, painting and interior improvement services.",
  },

  {
    question:
      "What areas do you serve?",
    answer:
      "We serve Ahmedabad, Gandhinagar and surrounding locations within approximately a 50 KM service radius.",
  },

  {
    question:
      "How can I request a quotation?",
    answer:
      "You can call us, WhatsApp us or submit the enquiry form on this page to schedule a free inspection and receive a quotation.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] =
    useState<number | null>(0);

    const handleCallClick = () => {
  window.gtag?.("event", "phone_click", {
    event_category: "Contact",
    event_label: "Testimonials CTA Call",
  });
};

const handleWhatsappClick = () => {
  window.gtag?.("event", "whatsapp_click", {
    event_category: "Contact",
    event_label: "Testimonials CTA WhatsApp",
  });
};

  return (
    <section className="relative overflow-hidden bg-white py-24">

      {/* Background */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-100 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-100 blur-[120px]" />

      <div className="relative mx-auto max-w-[1000px] px-5">

        {/* Header */}

        <div className="text-center">

          <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Got Questions?
            <span className="block text-cyan-600">
              We Have Answers
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            Everything you need to know about our
            waterproofing, repair, renovation and
            maintenance services.
          </p>

        </div>

        {/* FAQ Items */}

        <div className="mt-16 space-y-5">
                      {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.05,
              }}
              className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() =>
                  setActiveIndex(
                    activeIndex === index
                      ? null
                      : index
                  )
                }
                className="flex w-full items-center justify-between p-6 text-left transition hover:bg-slate-50"
              >
                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">

                    <HelpCircle
                      size={22}
                      className="text-cyan-600"
                    />

                  </div>

                  <h3 className="text-lg font-semibold text-slate-900">
                    {faq.question}
                  </h3>

                </div>

                <ChevronDown
                  className={`transition duration-300 ${
                    activeIndex === index
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              <AnimatePresence>

                {activeIndex === index && (
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
                    }}
                  >
                    <div className="border-t border-slate-100 px-6 pb-6 pt-5">

                      <p className="pl-16 leading-relaxed text-slate-600">
                        {faq.answer}
                      </p>

                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </motion.div>
          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-20">

          <div className="overflow-hidden rounded-[36px] bg-gradient-to-r from-cyan-600 via-cyan-500 to-blue-600 p-10 text-white lg:p-14">

            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

              <div className="text-center lg:text-left">

                <h3 className="text-3xl font-bold lg:text-4xl">
                  Still Have Questions?
                </h3>

                <p className="mt-4 max-w-2xl text-lg text-cyan-50">
                  Speak directly with our experts for
                  waterproofing, repair, renovation,
                  false ceiling, gypsum partition and
                  maintenance solutions.
                </p>

              </div>

              <div className="flex flex-col gap-4 sm:flex-row">

                <a
                  href="tel:+919558189429"
                    onClick={handleCallClick}
                  className="rounded-2xl bg-white px-8 py-4 text-center font-semibold text-cyan-700 transition hover:scale-105"
                >
                  Call Now
                </a>

                <a
                  href="https://wa.me/919558189429"
                  target="_blank"
                  rel="noopener noreferrer"
                   onClick={handleWhatsappClick}
                  className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-center font-semibold text-white backdrop-blur transition hover:bg-white/20"
                >
                  WhatsApp Us
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* Trust Note */}

        <div className="mt-12 text-center">

          <p className="text-sm text-slate-500">
            ✓ Free Site Inspection &nbsp;&nbsp; • &nbsp;&nbsp;
            ✓ Transparent Pricing &nbsp;&nbsp; • &nbsp;&nbsp;
            ✓ Professional Team &nbsp;&nbsp; • &nbsp;&nbsp;
            ✓ Warranty Support
          </p>

        </div>

      </div>
    </section>
  );
}