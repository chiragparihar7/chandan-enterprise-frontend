"use client";

import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  IndianRupee,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

const reasons = [
  {
    icon: UsersRound,
    number: "01",
    title: "Experienced Execution",
    description:
      "Our team approaches waterproofing work with attention to site conditions, leakage sources, surface preparation and project requirements.",
  },
  {
    icon: SearchCheck,
    number: "02",
    title: "Inspection Before Treatment",
    description:
      "We focus on understanding the visible problem and possible water-entry points before deciding on the appropriate treatment approach.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Quality-Focused Work",
    description:
      "From surface preparation to application and final checking, the work is approached with attention to proper execution.",
  },
  {
    icon: ClipboardCheck,
    number: "04",
    title: "Clear Work Scope",
    description:
      "We discuss the required work, affected areas and treatment approach so the project scope is easier to understand before execution.",
  },
  {
    icon: IndianRupee,
    number: "05",
    title: "Transparent Pricing",
    description:
      "We aim to provide clear discussions around the required work and project scope so customers can make informed decisions.",
  },
  {
    icon: Clock3,
    number: "06",
    title: "Project Support",
    description:
      "From initial discussion through treatment and completion, our team remains focused on the requirements of the project.",
  },
];

const trustSteps = [
  {
    number: "01",
    title: "Understand",
    text: "We first understand the leakage, seepage or dampness problem.",
  },
  {
    number: "02",
    title: "Plan",
    text: "The treatment approach is discussed according to the property condition.",
  },
  {
    number: "03",
    title: "Execute",
    text: "The planned waterproofing work is carried out with attention to execution.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#f7fafc] py-10 sm:py-12 lg:py-14">

      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-20 h-[420px] w-[420px] rounded-full bg-[#e9f6fc] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-0 h-[450px] w-[450px] rounded-full bg-[#eef8fc] blur-3xl"
      />

      <div className="container-chandan relative z-10">

        {/* =========================================================
            HEADER
            LEFT TITLE + RIGHT DESCRIPTION
        ========================================================= */}

        <div className="grid items-end gap-8 border-b border-[#dce8f0] pb-8 md:grid-cols-[0.95fr_1.05fr] lg:gap-16">

          {/* =======================================================
              LEFT — TITLE
          ======================================================= */}

          <div>

            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#015696]" />

              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#015696]">
                Why Choose Us
              </span>
            </div>

            <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.07] tracking-[-0.045em] text-[#092a43] sm:text-4xl lg:text-[50px]">
              More Than Waterproofing.
              <span className="block text-[#015696]">
                A Focused Approach to Your Property.
              </span>
            </h2>

          </div>

          {/* =======================================================
              RIGHT — DESCRIPTION
          ======================================================= */}

          <div className="max-w-xl md:ml-auto">

            <div className="mb-4 flex items-center gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef8fd] text-[#015696]">
                <Sparkles size={19} strokeWidth={1.8} />
              </div>

              <div>
                <p className="text-sm font-extrabold text-[#092a43]">
                  A Practical, Customer-Focused Approach
                </p>

                <p className="mt-0.5 text-xs text-[#94a3b8]">
                  Understanding the problem before treating it
                </p>
              </div>

            </div>

            <p className="text-base leading-7 text-[#64748b] sm:text-lg">
              Good waterproofing requires more than applying a treatment. We
              focus on understanding the problem, planning the work and
              delivering the required treatment according to the condition and
              requirements of your property.
            </p>

          </div>
        </div>

        {/* =========================================================
            TRUST FRAMEWORK
        ========================================================= */}

        <div className="relative mt-9">

          {/* Connecting Line */}
          <div
            aria-hidden="true"
            className="absolute left-[16.66%] right-[16.66%] top-[42px] hidden h-px bg-gradient-to-r from-[#dce8f0] via-[#a9d0e3] to-[#dce8f0] md:block"
          />

          <div className="grid gap-4 md:grid-cols-3">

            {trustSteps.map((step, index) => (
              <div
                key={`${step.number}-${step.title}-${index}`}
                className="group relative z-10 rounded-[22px] border border-[#dce8f0] bg-white px-6 py-6 text-center shadow-[0_8px_28px_rgba(9,42,67,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b9d8e8] hover:shadow-[0_15px_35px_rgba(9,42,67,0.08)]"
              >

                {/* Number Circle */}
                <div className="mx-auto flex h-[78px] w-[78px] items-center justify-center rounded-full border-[6px] border-[#f7fafc] bg-[#015696] text-xl font-extrabold text-white shadow-[0_10px_25px_rgba(1,86,150,0.18)] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#0b6fa8]">
                  {step.number}
                </div>

                <h3 className="mt-5 text-lg font-extrabold text-[#092a43]">
                  {step.title}
                </h3>

                <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-[#64748b]">
                  {step.text}
                </p>

              </div>
            ))}

          </div>
        </div>

        {/* =========================================================
            BENEFITS HEADER
        ========================================================= */}

        <div className="mt-12 flex flex-col gap-3 border-b border-[#dce8f0] pb-5 sm:flex-row sm:items-end sm:justify-between">

          <div>

            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#015696]">
              What You Can Expect
            </p>

            <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.03em] text-[#092a43] sm:text-3xl">
              A straightforward approach from start to finish
            </h3>

          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-[#64748b]">
            <ShieldCheck size={15} className="text-[#015696]" />
            Customer-focused execution
          </div>

        </div>

        {/* =========================================================
            BENEFITS LIST
        ========================================================= */}

        <div className="mt-5 overflow-hidden rounded-[24px] border border-[#dce8f0] bg-white shadow-[0_10px_30px_rgba(9,42,67,0.045)]">

          <div className="grid md:grid-cols-2">

            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <div
                  key={`${reason.number}-${reason.title}-${index}`}
                  className={`group relative flex gap-5 p-6 transition-all duration-300 hover:bg-[#f8fbfd] sm:p-7 ${
                    index % 2 !== 0
                      ? "md:border-l md:border-[#e8f0f5]"
                      : ""
                  } ${
                    index >= 2
                      ? "border-t border-[#e8f0f5]"
                      : ""
                  }`}
                >

                  {/* Number */}
                  <div className="shrink-0 pt-1">
                    <span className="text-xs font-extrabold tracking-[0.15em] text-[#b3c5cf] transition-colors duration-300 group-hover:text-[#015696]">
                      {reason.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eef8fd] text-[#015696] transition-all duration-300 group-hover:bg-[#015696] group-hover:text-white">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">

                    <div className="flex items-center gap-2">

                      <h4 className="text-base font-extrabold text-[#092a43] transition-colors duration-300 group-hover:text-[#015696] sm:text-lg">
                        {reason.title}
                      </h4>

                      <CheckCircle2
                        size={15}
                        className="shrink-0 text-[#46a9d8]"
                      />

                    </div>

                    <p className="mt-2 text-sm leading-6 text-[#64748b]">
                      {reason.description}
                    </p>

                  </div>

                  {/* Arrow */}
                  <ArrowRight
                    size={16}
                    className="mt-1 shrink-0 text-[#c3d2da] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#015696]"
                  />

                </div>
              );
            })}

          </div>
        </div>

        {/* =========================================================
            PREMIUM CTA
        ========================================================= */}

        <div className="relative mt-6 overflow-hidden rounded-[24px] bg-[#061b2b]">

          {/* Glow */}
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#015696]/30 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-32 left-1/4 h-64 w-64 rounded-full bg-[#46a9d8]/10 blur-3xl"
          />

          <div className="relative z-10 flex flex-col gap-5 p-7 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">

            <div className="max-w-2xl">

              <div className="mb-3 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#46a9d8]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#46a9d8]" />
                Ready to Discuss Your Requirement?
              </div>

              <h3 className="text-2xl font-extrabold tracking-[-0.025em] text-white sm:text-3xl">
                Let's understand your waterproofing
                <span className="text-[#46a9d8]">
                  {" "}
                  requirement.
                </span>
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#a9bfcc]">
                Share the leakage, seepage or dampness issue with our team and
                discuss the next step for your property.
              </p>

            </div>

            <a
              href="#enquiry"
              className="group inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-extrabold text-[#092a43] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#eef8fd]"
            >
              Discuss Your Requirement

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}