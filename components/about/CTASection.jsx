// =============================
// 📁 components/about/CTASection.jsx
// MINIMAL PREMIUM LIGHT VERSION
// =============================

"use client";

import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-12 lg:py-14">
      <div className="container-chandan">

        {/* CTA */}
        <div className="relative overflow-hidden rounded-[24px] border border-[#dce8f0] bg-[#f1f8fc]">

          {/* Subtle Accent */}
          <div className="absolute right-0 top-0 h-full w-[35%] bg-gradient-to-l from-[#015696]/[0.05] to-transparent" />

          <div className="relative grid items-center gap-8 px-7 py-9 md:px-10 md:py-11 lg:grid-cols-[1fr_auto] lg:px-12">

            {/* =========================
                CONTENT
            ========================= */}
            <div className="max-w-2xl">

              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#015696]" />

                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#015696]">
                  Start With Your Requirement
                </span>
              </div>

              <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-[#092a43] md:text-4xl">
                Protect your property
                <span className="text-[#015696]">
                  {" "}from leakage and seepage.
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-[#64748b]">
                Share your waterproofing requirement with our team and discuss
                the right approach for your property.
              </p>
            </div>

            {/* =========================
                ACTIONS
            ========================= */}
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#015696] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0b3f67]"
              >
                Discuss Your Requirement

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <a
                href="tel:+919558189429"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#c9dce7] bg-white px-6 py-3.5 text-sm font-semibold text-[#092a43] transition-all duration-300 hover:border-[#015696] hover:text-[#015696]"
              >
                <Phone className="h-4 w-4" />

                Call Chandan Enterprises
              </a>

            </div>
          </div>
        </div>

        {/* Small Supporting Line */}
        <div className="mt-5 flex flex-col gap-2 text-sm text-[#64748b] sm:flex-row sm:items-center sm:justify-between">
          <span>
            Waterproofing solutions for residential, commercial and industrial properties.
          </span>

          <span className="font-medium text-[#015696]">
            Ahmedabad, Gujarat
          </span>
        </div>

      </div>
    </section>
  );
}