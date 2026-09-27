"use client";

import React from "react";
import {
  CheckCircle2,
  Clock3,
  FileText,
  IndianRupee,
  ShieldCheck,
  UsersRound,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { trustPoints } from "./data";

const icons = [
  UsersRound,
  ShieldCheck,
  Clock3,
  IndianRupee,
  FileText,
  CheckCircle2,
];

export default function WhyTrustSection() {
  return (
    <section className="relative overflow-hidden bg-[#f1f8fc] py-10 sm:py-12 lg:py-14">

      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-[-120px] h-[520px] w-[520px] rounded-full bg-[#dceff8] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-[-160px] h-[500px] w-[500px] rounded-full bg-[#e2f3fa] blur-3xl"
      />

      {/* Large background typography */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-30px] top-8 select-none text-[130px] font-black leading-none tracking-[-0.08em] text-[#092a43]/[0.025] sm:text-[190px] lg:text-[240px]"
      >
        TRUST
      </div>

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#092a43 1px, transparent 1px), linear-gradient(90deg, #092a43 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-chandan relative z-10">

        {/* =========================================================
            HEADER
        ========================================================== */}

        <div className="grid items-end gap-8 border-b border-[#cfe3ed] pb-9 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

          {/* LEFT */}
          <div>

            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#015696]" />

              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#015696]">
                Why Trust Us
              </span>
            </div>

            <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.07] tracking-[-0.045em] text-[#092a43] sm:text-4xl lg:text-[50px]">
              Professional Waterproofing.
              <span className="block text-[#015696]">
                Focused on the Complete Job.
              </span>
            </h2>

          </div>

          {/* RIGHT */}
          <div className="max-w-xl lg:ml-auto">

            <div className="mb-4 flex items-center gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#015696] shadow-sm ring-1 ring-[#dce8f0]">
                <ShieldCheck
                  size={19}
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <p className="text-sm font-extrabold text-[#092a43]">
                  A Complete-Job Approach
                </p>

                <p className="mt-0.5 text-xs text-[#94a3b8]">
                  From understanding the issue to project completion
                </p>
              </div>

            </div>

            <p className="text-base leading-7 text-[#64748b] sm:text-lg">
              Good waterproofing depends on more than the material used.
              Inspection, preparation, application, communication and proper
              execution all contribute to the overall work.
            </p>

          </div>

        </div>

        {/* =========================================================
            MAIN TRUST AREA
        ========================================================== */}

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">

          {/* =======================================================
              LEFT TRUST PANEL
          ======================================================== */}

          <div className="relative overflow-hidden rounded-[28px] bg-[#092a43] p-7 sm:p-9 lg:p-10">

            {/* Decorative glow */}
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#015696]/35 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#46a9d8]/10 blur-3xl"
            />

            {/* Decorative vertical line */}
            <div
              aria-hidden="true"
              className="absolute bottom-10 left-0 top-10 w-1 bg-gradient-to-b from-transparent via-[#46a9d8] to-transparent"
            />

            <div className="relative z-10">

              {/* Label */}
              <div className="flex items-center gap-2">

                <Sparkles
                  size={15}
                  className="text-[#46a9d8]"
                />

                <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#46a9d8]">
                  Our Approach
                </span>

              </div>

              {/* Main statement */}
              <h3 className="mt-7 text-2xl font-extrabold leading-tight tracking-[-0.035em] text-white sm:text-3xl">
                Waterproofing is a process,
                <span className="text-[#46a9d8]">
                  {" "}
                  not just a product.
                </span>
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#a9bfcc] sm:text-base">
                Every property has different conditions. Understanding the
                affected area and following a structured approach helps keep
                the work focused on the actual requirement.
              </p>

              {/* Highlight */}
              <div className="mt-8 border-t border-[#23445b] pt-7">

                <div className="flex items-start gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0d3855] text-[#46a9d8]">
                    <CheckCircle2 size={17} />
                  </div>

                  <div>
                    <p className="text-sm font-extrabold text-white">
                      Clear communication throughout the work
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[#819eae]">
                      Project scope, treatment requirements and applicable
                      terms should be discussed before execution.
                    </p>
                  </div>

                </div>

              </div>

              {/* Mini process */}
              <div className="mt-8 grid grid-cols-3 gap-2">

                {[
                  ["01", "Understand"],
                  ["02", "Plan"],
                  ["03", "Execute"],
                ].map(([number, label]) => (
                  <div
                    key={number}
                    className="rounded-xl border border-[#23445b] bg-[#061b2b]/30 p-3"
                  >
                    <span className="text-[10px] font-extrabold tracking-[0.14em] text-[#46a9d8]">
                      {number}
                    </span>

                    <p className="mt-1 text-xs font-bold text-white">
                      {label}
                    </p>
                  </div>
                ))}

              </div>

              {/* CTA */}
              <a
                href="#enquiry"
                className="group mt-8 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-extrabold text-[#092a43] transition-all duration-300 hover:-translate-y-1 hover:bg-[#eef8fd]"
              >
                Get Free Inspection

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

            </div>
          </div>

          {/* =======================================================
              RIGHT TRUST MATRIX
          ======================================================== */}

          <div className="overflow-hidden rounded-[28px] border border-[#dce8f0] bg-white shadow-[0_15px_45px_rgba(9,42,67,0.06)]">

            {/* Matrix header */}
            <div className="flex flex-col gap-2 border-b border-[#e8f0f5] px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">

              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#015696]">
                  What You Can Expect
                </p>

                <h3 className="mt-1 text-xl font-extrabold tracking-[-0.025em] text-[#092a43]">
                  A practical approach to every project
                </h3>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#64748b]">
                <ShieldCheck
                  size={15}
                  className="text-[#015696]"
                />
                Customer-focused
              </div>

            </div>

            {/* Trust Points */}
            <div className="grid md:grid-cols-2">

              {trustPoints.map((point, index) => {

                const Icon = icons[index] || CheckCircle2;

                return (
                  <div
                    key={`${point.title}-${index}`}
                    className={`group relative p-6 transition-all duration-300 hover:bg-[#f8fbfd] sm:p-7 ${
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
                    <div className="flex items-center justify-between">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eef8fd] text-[#015696] transition-all duration-300 group-hover:bg-[#015696] group-hover:text-white">
                        <Icon
                          size={19}
                          strokeWidth={1.8}
                        />
                      </div>

                      <span className="text-[11px] font-extrabold tracking-[0.16em] text-[#c2d3dd] transition-colors duration-300 group-hover:text-[#015696]">
                        0{index + 1}
                      </span>

                    </div>

                    {/* Title */}
                    <h4 className="mt-5 text-base font-extrabold text-[#092a43] transition-colors duration-300 group-hover:text-[#015696] sm:text-lg">
                      {point.title}
                    </h4>

                    {/* Description */}
                    <p className="mt-2 text-sm leading-6 text-[#64748b]">
                      {point.description}
                    </p>

                    {/* Bottom accent */}
                    <div className="mt-5 h-[2px] w-0 bg-[#46a9d8] transition-all duration-300 group-hover:w-10" />

                  </div>
                );
              })}

            </div>

          </div>
        </div>

        {/* =========================================================
            BOTTOM TRUST STRIP
        ========================================================== */}

        <div className="mt-6 flex flex-col gap-5 rounded-[22px] border border-[#cfe3ed] bg-white p-5 shadow-sm sm:p-6 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex items-center gap-4">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eef8fd] text-[#015696]">
              <CheckCircle2 size={19} />
            </div>

            <div>
              <p className="text-sm font-extrabold text-[#092a43] sm:text-base">
                A focused approach from inspection to completion
              </p>

              <p className="mt-0.5 text-xs leading-5 text-[#64748b]">
                Discuss your property condition and understand the required
                waterproofing work before execution.
              </p>
            </div>

          </div>

          <a
            href="#enquiry"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-[#015696] px-5 py-3 text-sm font-extrabold text-[#015696] transition-all duration-300 hover:bg-[#015696] hover:text-white"
          >
            Discuss Your Requirement

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

        </div>

      </div>
    </section>
  );
}