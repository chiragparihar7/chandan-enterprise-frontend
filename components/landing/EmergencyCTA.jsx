"use client";

import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  PhoneCall,
  ShieldAlert,
  TriangleAlert,
} from "lucide-react";

export default function EmergencyCTA() {
  return (
    <section className="relative overflow-hidden bg-[#061b2b] py-14 sm:py-16 lg:py-20">

      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      {/* Blue glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#015696]/25 blur-3xl"
      />

      {/* Cyan glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-[-180px] h-[420px] w-[420px] rounded-full bg-[#46a9d8]/10 blur-3xl"
      />

      {/* Alert accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[20%] top-[-100px] h-[280px] w-[280px] rounded-full bg-[#f59e0b]/5 blur-3xl"
      />

      {/* Technical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      <div className="container-chandan relative z-10">

        {/* =========================================================
            MAIN CTA
        ========================================================== */}

        <div className="relative overflow-hidden rounded-[30px] border border-[#23445b] bg-[#092a43] shadow-[0_25px_70px_rgba(0,0,0,0.18)]">

          {/* Inner glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-100px] top-[-120px] h-[350px] w-[350px] rounded-full bg-[#015696]/25 blur-3xl"
          />

          <div className="relative z-10 grid lg:grid-cols-[1fr_auto]">

            {/* =====================================================
                LEFT CONTENT
            ====================================================== */}

            <div className="p-7 sm:p-9 lg:p-11">

              {/* Label */}
              <div className="mb-5 flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#f59e0b]/20 bg-[#f59e0b]/10 text-[#f6b84b]">
                  <TriangleAlert
                    size={19}
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#f6b84b]">
                    Leakage Support
                  </p>

                  <p className="mt-0.5 text-[11px] text-[#718fa0]">
                    Don't ignore recurring water problems
                  </p>
                </div>

              </div>

              {/* Heading */}
              <h2 className="max-w-3xl text-3xl font-extrabold leading-[1.08] tracking-[-0.045em] text-white sm:text-4xl lg:text-[48px]">
                Water Leakage
                <span className="text-[#46a9d8]">
                  {" "}
                  Getting Worse?
                </span>
              </h2>

              {/* Description */}
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#a9bfcc] sm:text-lg">
                Don't let recurring leakage, seepage or dampness continue
                without understanding the affected area. Share your requirement
                with our team and discuss the next step for your property.
              </p>

              {/* =================================================
                  MINI ACTION STEPS
              ================================================== */}

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

                <div className="flex items-center gap-2.5 text-sm text-[#d2e1e8]">
                  <CheckCircle2
                    size={16}
                    className="shrink-0 text-[#46a9d8]"
                  />

                  Discuss the issue
                </div>

                <div className="hidden h-5 w-px bg-[#31556d] sm:block" />

                <div className="flex items-center gap-2.5 text-sm text-[#d2e1e8]">
                  <CheckCircle2
                    size={16}
                    className="shrink-0 text-[#46a9d8]"
                  />

                  Understand the requirement
                </div>

                <div className="hidden h-5 w-px bg-[#31556d] sm:block" />

                <div className="flex items-center gap-2.5 text-sm text-[#d2e1e8]">
                  <CheckCircle2
                    size={16}
                    className="shrink-0 text-[#46a9d8]"
                  />

                  Plan the next step
                </div>

              </div>

            </div>

            {/* =====================================================
                RIGHT ACTION PANEL
            ====================================================== */}

            <div className="relative flex items-center border-t border-[#23445b] bg-[#061b2b]/40 p-6 sm:p-8 lg:w-[350px] lg:border-l lg:border-t-0 lg:p-9">

              {/* Vertical glow */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 top-0 hidden w-px bg-gradient-to-b from-transparent via-[#46a9d8] to-transparent lg:block"
              />

              <div className="w-full">

                {/* Action heading */}
                <div className="mb-5">

                  <div className="flex items-center gap-2">
                    <ShieldAlert
                      size={17}
                      className="text-[#46a9d8]"
                    />

                    <span className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#46a9d8]">
                      Choose How to Contact
                    </span>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-[#8fa9b8]">
                    Contact our team directly or send your requirement through
                    WhatsApp.
                  </p>

                </div>

                {/* Call Button */}
                <a
                  href="tel:+919649957698"
                  className="group flex min-h-[52px] w-full items-center justify-center gap-3 rounded-xl bg-white px-5 text-sm font-extrabold text-[#092a43] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#eef8fd]"
                >
                  <PhoneCall
                    size={18}
                    className="text-[#015696]"
                  />

                  Call Our Team

                  <ArrowRight
                    size={16}
                    className="ml-auto transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/919649957698"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-3 flex min-h-[52px] w-full items-center justify-center gap-3 rounded-xl border border-[#31556d] bg-[#092a43] px-5 text-sm font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#46a9d8] hover:bg-[#0d3855]"
                >
                  <MessageCircle
                    size={18}
                    className="text-[#46a9d8]"
                  />

                  WhatsApp Us

                  <ArrowRight
                    size={16}
                    className="ml-auto text-[#718fa0] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#46a9d8]"
                  />
                </a>

                {/* Enquiry Link */}
                <a
                  href="#enquiry"
                  className="group mt-4 flex items-center justify-center gap-2 text-xs font-extrabold text-[#8fa9b8] transition-colors hover:text-white"
                >
                  Or submit a detailed enquiry

                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

              </div>
            </div>
          </div>

          {/* =====================================================
              BOTTOM INFO BAR
          ====================================================== */}

          <div className="relative z-10 flex flex-col gap-3 border-t border-[#23445b] bg-[#061b2b]/40 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">

            <div className="flex items-start gap-2.5">

              <ShieldAlert
                size={15}
                className="mt-0.5 shrink-0 text-[#66889b]"
              />

              <p className="text-[11px] leading-5 text-[#718fa0]">
                Inspection and treatment recommendations depend on site
                conditions and the affected area.
              </p>

            </div>

            <a
              href="#enquiry"
              className="group inline-flex shrink-0 items-center gap-1.5 text-xs font-extrabold text-[#46a9d8] transition-colors hover:text-white"
            >
              Request an Inspection

              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}