"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-10 md:py-12 lg:py-14">
      {/* Background Elements */}
      <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[520px] w-[520px] rounded-full bg-[#015696]/[0.055] blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[-180px] left-[-160px] h-[420px] w-[420px] rounded-full bg-[#016db5]/[0.045] blur-[110px]" />

      {/* Subtle Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(#dce8f0 1px, transparent 1px), linear-gradient(90deg, #dce8f0 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
        }}
      />

      <div className="container-chandan relative z-10">
        {/* Hero */}
        <div className="grid min-h-[620px] items-center gap-12 py-10 md:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-16">
          {/* Left Content */}
          <div>
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#dce8f0] bg-white px-4 py-2 shadow-sm">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#eef8fd] text-[#015696]">
                <MessageCircle size={12} />
              </span>

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#475569]">
                Let's Discuss Your Requirement
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-[#092a43] md:text-5xl lg:text-6xl xl:text-[64px]">
              Let's find the right
              <span className="block text-[#015696]">
                protection for your property.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#64748b] md:text-base">
              Have a leakage, seepage, dampness or waterproofing requirement?
              Share your property type and the affected area with Chandan
              Enterprises to discuss the next step.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#enquiry"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#015696] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(1,86,150,0.18)] transition-all duration-300 hover:bg-[#0b3f67] hover:shadow-[0_14px_32px_rgba(1,86,150,0.24)]"
              >
                Send An Enquiry
                <ArrowUpRight size={17} />
              </Link>

              <a
                href="tel:+919558189429"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#cddfe9] bg-white px-6 py-3.5 text-sm font-semibold text-[#092a43] transition-all duration-300 hover:border-[#015696] hover:text-[#015696]"
              >
                <Phone size={16} />
                +91 95581 89429
              </a>
            </div>

            {/* Trust Points */}
            <div className="mt-9 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="flex items-center gap-2.5">
                <ShieldCheck
                  size={17}
                  className="shrink-0 text-[#015696]"
                  strokeWidth={1.8}
                />
                <span className="text-xs font-medium text-[#475569]">
                  Requirement Focused
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <MapPin
                  size={17}
                  className="shrink-0 text-[#015696]"
                  strokeWidth={1.8}
                />
                <span className="text-xs font-medium text-[#475569]">
                  Ahmedabad, Gujarat
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock3
                  size={17}
                  className="shrink-0 text-[#015696]"
                  strokeWidth={1.8}
                />
                <span className="text-xs font-medium text-[#475569]">
                  9 AM – 7 PM
                </span>
              </div>
            </div>
          </div>

          {/* Right Contact Panel */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative overflow-hidden rounded-[28px] border border-[#dce8f0] bg-[#092a43] p-7 shadow-[0_25px_70px_rgba(9,42,67,0.14)] md:p-9">
              {/* Decorative Circle */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/[0.06]" />

              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#015696]/30 blur-3xl" />

              <div className="relative z-10">
                {/* Card Header */}
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7fb9da]">
                      Start A Conversation
                    </p>

                    <h2 className="mt-3 max-w-sm text-2xl font-bold leading-tight text-white md:text-3xl">
                      Tell us what your property needs.
                    </h2>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#015696] text-white">
                    <MessageCircle size={20} strokeWidth={1.8} />
                  </div>
                </div>

                <p className="mt-5 max-w-md text-sm leading-6 text-[#a9bdca]">
                  A few details about your property and the affected area can
                  help us understand your requirement.
                </p>

                {/* Contact Options */}
                <div className="mt-8 space-y-3">
                  <a
                    href="tel:+919558189429"
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#8bc9e8]">
                        <Phone size={17} />
                      </div>

                      <div>
                        <p className="text-[10px] uppercase tracking-[0.15em] text-[#7f96a7]">
                          Call Us
                        </p>

                        <p className="mt-1 text-sm font-semibold text-white">
                          +91 95581 89429
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="text-[#718a9b] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                    />
                  </a>

                  <a
                    href="https://wa.me/919558189429"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#8bc9e8]">
                        <MessageCircle size={17} />
                      </div>

                      <div>
                        <p className="text-[10px] uppercase tracking-[0.15em] text-[#7f96a7]">
                          WhatsApp
                        </p>

                        <p className="mt-1 text-sm font-semibold text-white">
                          Chat With Us
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="text-[#718a9b] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                    />
                  </a>
                </div>

                {/* Bottom Info */}
                <div className="mt-7 border-t border-white/10 pt-6">
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={17}
                      className="mt-0.5 shrink-0 text-[#7fb9da]"
                      strokeWidth={1.8}
                    />

                    <div>
                      <p className="text-xs font-semibold text-white">
                        Ahmedabad, Gujarat
                      </p>

                      <p className="mt-1 text-xs leading-5 text-[#7f96a7]">
                        Serving residential, commercial and industrial
                        waterproofing requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Bottom Badge */}
            <div className="absolute -bottom-5 left-6 hidden items-center gap-3 rounded-2xl border border-[#dce8f0] bg-white px-4 py-3 shadow-[0_12px_35px_rgba(9,42,67,0.10)] sm:flex md:left-10">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eef8fd] text-[#015696]">
                <ShieldCheck size={16} />
              </div>

              <div>
                <p className="text-xs font-semibold text-[#092a43]">
                  Waterproofing & Leakage Protection
                </p>

                <p className="text-[10px] text-[#64748b]">
                  Discuss your requirement with us
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden items-center justify-center gap-3 border-t border-[#dce8f0] py-5 md:flex">
          <ArrowDown size={14} className="text-[#015696]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#94a3b8]">
            Start Your Enquiry
          </span>
        </div>
      </div>
    </section>
  );
}