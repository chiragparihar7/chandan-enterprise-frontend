"use client";

import {
  ArrowUpRight,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";

export default function EmergencyCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-12 lg:py-14">
      <div className="container-chandan">
        {/* Main CTA */}
        <div className="relative overflow-hidden rounded-[28px] bg-[#092a43] px-7 py-10 md:px-10 md:py-12 lg:px-14 lg:py-14">
          {/* Background Elements */}
          <div className="pointer-events-none absolute right-[-100px] top-[-140px] h-[380px] w-[380px] rounded-full bg-[#015696]/25 blur-[100px]" />

          <div className="pointer-events-none absolute bottom-[-160px] left-[25%] h-[300px] w-[300px] rounded-full bg-[#016db5]/10 blur-[100px]" />

          {/* Subtle Grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            {/* Content */}
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-2">
                <ShieldCheck
                  size={14}
                  className="text-[#8bc9e8]"
                  strokeWidth={1.8}
                />

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b9cad6]">
                  Waterproofing & Leakage Protection
                </span>
              </div>

              <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                Have a waterproofing
                <span className="block text-[#46a9d8]">
                  requirement?
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#a9bdca] md:text-base">
                Tell us about your property and the affected area. We can
                discuss your requirement and the appropriate waterproofing
                approach for the situation.
              </p>

              {/* Quick Points */}
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                <div className="flex items-center gap-2 text-xs text-[#c2d2dc]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#46a9d8]" />
                  Residential
                </div>

                <div className="flex items-center gap-2 text-xs text-[#c2d2dc]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#46a9d8]" />
                  Commercial
                </div>

                <div className="flex items-center gap-2 text-xs text-[#c2d2dc]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#46a9d8]" />
                  Industrial
                </div>

                <div className="flex items-center gap-2 text-xs text-[#c2d2dc]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#46a9d8]" />
                  Ahmedabad
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex w-full flex-col gap-3 sm:w-auto">
              <a
                href="/contact#enquiry"
                className="group inline-flex min-w-[210px] items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#092a43] transition-all duration-300 hover:bg-[#46a9d8] hover:text-white"
              >
                Send An Enquiry

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="tel:+919558189429"
                className="group inline-flex min-w-[210px] items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08]"
              >
                <Phone
                  size={16}
                  className="text-[#8bc9e8]"
                  strokeWidth={1.8}
                />

                Call +91 95581 89429
              </a>

              <a
                href="https://wa.me/919558189429"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-w-[210px] items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 text-xs font-medium text-[#a9bdca] transition-all duration-300 hover:border-white/20 hover:text-white"
              >
                <MessageCircle size={15} />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="relative z-10 mt-9 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[11px] text-[#7f96a7]">
              Chandan Enterprises · Ahmedabad, Gujarat
            </p>

            <p className="text-[11px] text-[#7f96a7]">
              Office Hours: 9:00 AM – 7:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}