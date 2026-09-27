"use client";

import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Droplets,
  Search,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

const solutions = [
  {
    icon: Search,
    title: "Identify the Problem",
    description:
      "We inspect the affected area to understand visible leakage, seepage, cracks, joints and possible water-entry points.",
  },
  {
    icon: Wrench,
    title: "Prepare the Surface",
    description:
      "Proper cleaning, crack treatment, joint preparation and surface repair are carried out wherever required.",
  },
  {
    icon: Droplets,
    title: "Apply Waterproofing",
    description:
      "The appropriate waterproofing treatment is applied according to the surface condition and project requirements.",
  },
  {
    icon: ClipboardCheck,
    title: "Inspect the Work",
    description:
      "The completed treatment is checked before project handover to ensure the planned work has been properly executed.",
  },
];

export default function SolutionSection() {
  return (
    <section
      id="solution"
      className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14"
    >
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-[380px] w-[380px] rounded-full bg-[#eef8fd] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-[320px] w-[320px] rounded-full bg-[#f5fafc] blur-3xl"
      />

      <div className="container-chandan relative">

        {/* =========================================================
            HEADER
        ========================================================= */}

        <div className="grid items-end gap-7 border-b border-[#e8f0f5] pb-8 md:grid-cols-[0.95fr_1.05fr] lg:gap-14">

          {/* LEFT */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#015696]" />

              <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#015696]">
                Our Approach
              </span>
            </div>

            <h2 className="max-w-xl text-3xl font-extrabold leading-[1.08] tracking-[-0.04em] text-[#092a43] sm:text-4xl lg:text-[46px]">
              We Don't Just Treat
              <span className="block text-[#015696]">
                the Visible Leak
              </span>
            </h2>
          </div>

          {/* RIGHT */}
          <div className="max-w-xl md:ml-auto">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#eef8fd] text-[#015696]">
                <ShieldCheck size={18} strokeWidth={1.8} />
              </div>

              <span className="text-sm font-bold text-[#092a43]">
                A Structured Waterproofing Process
              </span>
            </div>

            <p className="text-base leading-7 text-[#64748b] sm:text-[17px]">
              Effective waterproofing starts with understanding the condition
              of the affected area. Our process focuses on inspection,
              preparation, treatment and quality checking.
            </p>
          </div>
        </div>

        {/* =========================================================
            MAIN CONTENT
        ========================================================= */}

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">

          {/* =======================================================
              LEFT — VISUAL
          ======================================================= */}

          <div className="relative">

            <div className="relative overflow-hidden rounded-[24px] border border-[#dce8f0] bg-[#092a43] shadow-[0_20px_55px_rgba(9,42,67,0.13)]">

              {/* Project Image */}
              <div
                className="min-h-[430px] bg-cover bg-center sm:min-h-[460px]"
                style={{
                  backgroundImage:
                    "url('/Home/terrace_waterproofing1.jpg')",
                }}
              >

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#061b2b]/95 via-[#061b2b]/25 to-transparent" />

                <div className="relative flex min-h-[430px] items-end p-6 sm:min-h-[460px] sm:p-8">

                  <div className="max-w-md">

                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur-md">
                      <Sparkles size={20} />
                    </div>

                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#46a9d8]">
                      Professional Execution
                    </p>

                    <h3 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                      A Structured Approach to Waterproofing
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/70">
                      Every property has different surface conditions,
                      exposure and leakage patterns. The treatment should be
                      planned accordingly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* =====================================================
                FLOATING BADGE
            ===================================================== */}

            <div className="absolute -bottom-5 -right-3 hidden rounded-2xl border border-[#dce8f0] bg-white p-3.5 shadow-[0_15px_40px_rgba(9,42,67,0.12)] sm:block">
              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef8fd] text-[#015696]">
                  <CheckCircle2 size={19} />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#092a43]">
                    Quality-Focused
                  </p>

                  <p className="text-[11px] text-[#64748b]">
                    Inspection to completion
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =======================================================
              RIGHT — PROCESS STEPS
          ======================================================= */}

          <div>

            <div className="space-y-3.5">
              {solutions.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group relative flex gap-4 rounded-[18px] border border-[#dce8f0] bg-white p-4 shadow-[0_5px_20px_rgba(9,42,67,0.035)] transition-all duration-400 hover:-translate-y-1 hover:border-[#b9d8e8] hover:shadow-[0_14px_32px_rgba(9,42,67,0.08)] sm:gap-5 sm:p-5"
                  >
                    {/* Connector */}
                    {index !== solutions.length - 1 && (
                      <div className="absolute left-[39px] top-[68px] hidden h-[calc(100%+14px)] w-px bg-[#dce8f0] sm:block" />
                    )}

                    {/* Icon */}
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef8fd] text-[#015696] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-[#015696] group-hover:text-white">
                      <Icon size={19} strokeWidth={1.8} />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 min-w-0 flex-1">

                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="text-[10px] font-extrabold tracking-[0.15em] text-[#94a3b8]">
                          STEP {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="h-1 w-1 rounded-full bg-[#cbd9e1]" />

                        <h3 className="text-base font-extrabold tracking-[-0.01em] text-[#092a43] transition-colors duration-300 group-hover:text-[#015696] sm:text-lg">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-1.5 text-sm leading-6 text-[#64748b]">
                        {item.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="hidden h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f7fafc] text-[#94a3b8] transition-all duration-300 group-hover:bg-[#eef8fd] group-hover:text-[#015696] sm:flex">
                      <ArrowRight size={13} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* =====================================================
                CTA
            ===================================================== */}

            <div className="mt-5 rounded-[18px] bg-[#092a43] p-5 shadow-[0_12px_30px_rgba(9,42,67,0.10)] sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <p className="text-base font-bold text-white sm:text-lg">
                    Have an active leakage problem?
                  </p>

                  <p className="mt-1 text-sm leading-5 text-white/60">
                    Share the details with our team and discuss your property
                    requirement.
                  </p>
                </div>

                <a
                  href="#enquiry"
                  className="inline-flex min-h-[44px] shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-bold text-[#092a43] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#eef8fd]"
                >
                  Discuss Your Requirement
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            SMALL BOTTOM SPACING
        ========================================================= */}

        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-[#dce8f0] to-transparent" />
      </div>
    </section>
  );
}