"use client";

import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Search,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import { waterproofingProcess } from "./data";

const icons = [
  Search,
  ClipboardCheck,
  Wrench,
  ShieldCheck,
  CheckCircle2,
  FileCheck2,
];

export default function ProcessTimeline() {
  return (
    <section className="relative overflow-hidden bg-[#061b2b] py-10 sm:py-12 lg:py-14">

      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-[-100px] h-[520px] w-[520px] rounded-full bg-[#015696]/30 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-[-150px] h-[550px] w-[550px] rounded-full bg-[#016db5]/20 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#46a9d8]/5 blur-3xl"
      />

      {/* Subtle technical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-chandan relative z-10">

        {/* HEADER */}
        <div className="grid items-end gap-8 border-b border-[#23445b] pb-9 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

          {/* Left */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#46a9d8]" />

              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#46a9d8]">
                Our Process
              </span>
            </div>

            <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.07] tracking-[-0.045em] text-white sm:text-4xl lg:text-[50px]">
              A Clear Process.
              <span className="block text-[#46a9d8]">
                From Inspection to Completion.
              </span>
            </h2>
          </div>

          {/* Right */}
          <div className="max-w-xl lg:ml-auto">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#31556d] bg-[#092a43] text-[#46a9d8]">
                <ClipboardCheck size={19} strokeWidth={1.8} />
              </div>

              <div>
                <p className="text-sm font-extrabold text-white">
                  A Structured Workflow
                </p>

                <p className="mt-0.5 text-xs text-[#8fa9b8]">
                  Understand. Plan. Execute. Complete.
                </p>
              </div>
            </div>

            <p className="text-base leading-7 text-[#a9bfcc] sm:text-lg">
              We follow a structured workflow so you can understand what
              happens at each major stage of the waterproofing project,
              from the initial inspection through completion.
            </p>
          </div>
        </div>

        {/* DESKTOP TIMELINE */}
        <div className="relative mt-12 hidden lg:block">

          {/* Timeline Container */}
          <div className="relative overflow-hidden rounded-[30px] border border-[#23445b] bg-[#092a43]/80 p-8 shadow-[0_25px_70px_rgba(0,0,0,0.18)] backdrop-blur-sm xl:p-10">

            {/* Horizontal Line */}
            <div className="absolute left-[8.33%] right-[8.33%] top-[76px] h-px bg-gradient-to-r from-[#31566d] via-[#46a9d8] to-[#31566d]" />

            <div className="grid grid-cols-6 gap-4">
              {waterproofingProcess.map((step, index) => {
                const Icon = icons[index] || CheckCircle2;

                return (
                  <div
                    key={`${step.number}-${step.title}-${index}`}
                    className="group relative text-center"
                  >

                    {/* Step Number */}
                    <div className="mb-4 text-[11px] font-extrabold tracking-[0.2em] text-[#66889b]">
                      STEP {step.number}
                    </div>

                    {/* Circle */}
                    <div className="relative z-10 mx-auto flex h-[58px] w-[58px] items-center justify-center rounded-full border-[5px] border-[#092a43] bg-[#015696] text-white shadow-[0_0_0_1px_#31566d,0_10px_25px_rgba(1,86,150,0.25)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#46a9d8] group-hover:text-[#061b2b]">
                      <Icon
                        size={20}
                        strokeWidth={1.8}
                      />
                    </div>

                    {/* Content */}
                    <div className="mt-6 px-2">
                      <h3 className="text-base font-extrabold text-white transition-colors duration-300 group-hover:text-[#46a9d8]">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-xs leading-5 text-[#91aaba]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* MOBILE / TABLET TIMELINE */}
        <div className="relative mt-10 lg:hidden">

          {/* Vertical Line */}
          <div className="absolute bottom-8 left-[28px] top-8 w-px bg-gradient-to-b from-[#46a9d8] via-[#31566d] to-[#23445b]" />

          <div className="space-y-4">
            {waterproofingProcess.map((step, index) => {
              const Icon = icons[index] || CheckCircle2;

              return (
                <div
                  key={`${step.number}-${step.title}-${index}`}
                  className="group relative flex gap-5 rounded-[22px] border border-[#23445b] bg-[#092a43]/90 p-5 shadow-[0_12px_35px_rgba(0,0,0,0.14)] backdrop-blur-sm"
                >

                  {/* Icon */}
                  <div className="relative z-10 flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border-4 border-[#092a43] bg-[#015696] text-white shadow-[0_0_0_1px_#31566d] transition-all duration-300 group-hover:bg-[#46a9d8] group-hover:text-[#061b2b]">
                    <Icon size={17} />
                  </div>

                  {/* Content */}
                  <div className="min-w-0">
                    <span className="text-[10px] font-extrabold tracking-[0.18em] text-[#66889b]">
                      STEP {step.number}
                    </span>

                    <h3 className="mt-1 text-lg font-extrabold text-white transition-colors duration-300 group-hover:text-[#46a9d8]">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#91aaba]">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="relative mt-10 overflow-hidden rounded-[26px] border border-[#31556d] bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.15)] sm:p-8">

          {/* CTA Decorative Glow */}
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#eef8fd] blur-3xl"
          />

          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div className="max-w-2xl">
              <div className="mb-2 flex items-center gap-2">
                <ShieldCheck
                  size={17}
                  className="text-[#015696]"
                />

                <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#015696]">
                  Ready to Get Started?
                </span>
              </div>

              <p className="text-xl font-extrabold tracking-[-0.025em] text-[#092a43] sm:text-2xl">
                Need help understanding your waterproofing requirement?
              </p>

              <p className="mt-2 text-sm leading-6 text-[#64748b]">
                Start with an inspection and discuss the available treatment
                options for your property.
              </p>
            </div>

            <a
              href="#enquiry"
              className="group inline-flex min-h-[50px] shrink-0 items-center justify-center gap-2 rounded-xl bg-[#015696] px-6 text-sm font-extrabold text-white shadow-[0_10px_25px_rgba(1,86,150,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0b6fa8] hover:shadow-[0_15px_30px_rgba(1,86,150,0.28)]"
            >
              Request Inspection

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