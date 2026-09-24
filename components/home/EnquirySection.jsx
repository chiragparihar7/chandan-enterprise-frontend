"use client";

import Link from "next/link";
import { ArrowRight, Check, Phone, ShieldCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const PHONE = "919558189429";

const whatsappMessage =
  "Hi, I need waterproofing or leakage protection service in Ahmedabad. Please share the details.";

const whatsappUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  whatsappMessage
)}`;

const benefits = [
  "Discuss your requirement",
  "Understand the suitable solution",
  "Plan the next step",
];

export default function EnquirySection() {
  return (
    <section className="w-full bg-[#F7FAFC] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        {/* CTA BOX */}
        <div className="relative overflow-hidden rounded-2xl bg-[#12324A]">
          {/* Subtle background accent */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#1687C5]/20" />
          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[#46A9D8]/10" />

          <div className="relative grid items-center gap-8 px-6 py-8 sm:px-8 sm:py-9 lg:grid-cols-[1fr_420px] lg:gap-12 lg:px-12 lg:py-10">
            {/* LEFT CONTENT */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#46A9D8]" />

                <span className="text-xs font-bold uppercase tracking-[2px] text-[#8FD0EF]">
                  Request an Inspection
                </span>
              </div>

              <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Have a leakage or waterproofing problem?
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65 sm:text-base">
                Tell us about your property and discuss the appropriate next
                step for your waterproofing requirement.
              </p>

              {/* Benefits */}
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-2"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1687C5] text-white">
                      <Check size={12} strokeWidth={3} />
                    </span>

                    <span className="text-xs font-medium text-white/75 sm:text-sm">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT CONTACT BOX */}
            <div className="rounded-xl border border-white/10 bg-white/[0.07] p-4 sm:p-5">
              <div className="flex flex-col gap-3">
                {/* Phone */}
                <a
                  href="tel:+919558189429"
                  className="group flex items-center justify-between rounded-lg bg-white px-4 py-3.5 transition hover:bg-[#EFF9FE]"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EFF9FE] text-[#1687C5]">
                      <Phone size={17} />
                    </span>

                    <div>
                      <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#94A3B8]">
                        Call Us
                      </span>

                      <span className="mt-0.5 block text-sm font-bold text-[#12324A]">
                        +91 95581 89429
                      </span>
                    </div>
                  </div>

                  <ArrowRight
                    size={17}
                    className="text-[#1687C5] transition-transform group-hover:translate-x-1"
                  />
                </a>

                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3.5 transition hover:bg-white/10"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1687C5]/20 text-[#8FD0EF]">
                      <FaWhatsapp size={18} />
                    </span>

                    <div>
                      <span className="block text-[10px] font-semibold uppercase tracking-wider text-white/45">
                        WhatsApp
                      </span>

                      <span className="mt-0.5 block text-sm font-semibold text-white">
                        Start a Conversation
                      </span>
                    </div>
                  </div>

                  <ArrowRight
                    size={17}
                    className="text-[#8FD0EF] transition-transform group-hover:translate-x-1"
                  />
                </a>

                {/* Enquiry */}
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#1687C5] px-4 py-3.5 text-sm font-bold text-white transition hover:bg-[#0B6FA8]"
                >
                  Send an Enquiry
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom trust line */}
          <div className="relative flex items-center gap-2 border-t border-white/10 px-6 py-3.5 sm:px-8 lg:px-12">
            <ShieldCheck size={15} className="text-[#46A9D8]" />

            <p className="text-[11px] text-white/45 sm:text-xs">
              Discuss your property condition and waterproofing requirement
              with Chandan Enterprises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}