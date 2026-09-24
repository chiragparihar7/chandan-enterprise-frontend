"use client";

import Link from "next/link";
import {
  ArrowRight,
  ClipboardCheck,
  FileSearch,
  Hammer,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { process } from "./data";

const icons = [
  ClipboardCheck,
  FileSearch,
  Hammer,
  ShieldCheck,
  CheckCircle2,
];

const descriptions = [
  "Understand the property, surface condition and visible signs of water-related issues.",
  "Assess the affected area and identify the likely source and extent of moisture.",
  "Prepare the surface and carry out the required waterproofing treatment.",
  "Apply the selected protection system according to the project requirement.",
  "Review the completed work and inspect the treated area.",
];

export default function ProcessTimeline() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-10 md:py-12 lg:py-14">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-180px] top-[-100px] h-[420px] w-[420px] rounded-full bg-[#eef8fd] blur-[120px]" />

        <div className="absolute bottom-[-180px] left-[-140px] h-[400px] w-[400px] rounded-full bg-[#f1f8fc] blur-[110px]" />
      </div>

      <div className="container-chandan relative z-10">
        {/* HEADER */}
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <div className="mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[#015696]">
            <span className="h-px w-8 bg-[#015696]" />
            Project Workflow
            <span className="h-px w-8 bg-[#015696]" />
          </div>

          <h2 className="text-3xl font-bold leading-[1.08] text-[#092a43] sm:text-4xl md:text-5xl">
            From site assessment
            <br />
            <span className="text-[#015696]">to completed protection.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#64748b] md:text-lg">
            A structured project workflow helps ensure that the property
            condition is understood before treatment is planned and executed.
          </p>
        </div>

        {/* DESKTOP PROCESS */}
        <div className="relative hidden lg:block">
          {/* Connecting Line */}
          <div className="absolute left-[10%] right-[10%] top-[39px] h-px bg-[#cbdde8]" />

          <div className="grid grid-cols-5 gap-5">
            {process.map((item, index) => {
              const Icon = icons[index] || CheckCircle2;

              return (
                <div key={index} className="group relative">
                  {/* Number / Icon */}
                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border-[7px] border-[#f7f9fc] bg-white shadow-[0_8px_25px_rgba(9,42,67,0.09)] transition-all duration-300 group-hover:bg-[#015696]">
                    <Icon
                      size={23}
                      className="text-[#015696] transition-colors duration-300 group-hover:text-white"
                    />
                  </div>

                  {/* Step */}
                  <div className="mt-7 text-center">
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#94a3b8]">
                      Step {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-2 text-lg font-bold leading-tight text-[#092a43]">
                      {item}
                    </h3>

                    <p className="mx-auto mt-3 max-w-[190px] text-sm leading-6 text-[#64748b]">
                      {descriptions[index] ||
                        "Project execution based on the site requirement."}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE / TABLET PROCESS */}
        <div className="relative lg:hidden">
          {/* Vertical Line */}
          <div className="absolute bottom-8 left-[25px] top-8 w-px bg-[#cbdde8]" />

          <div className="space-y-5">
            {process.map((item, index) => {
              const Icon = icons[index] || CheckCircle2;

              return (
                <div
                  key={index}
                  className="group relative flex gap-5 rounded-2xl border border-[#dce8f0] bg-white p-5 transition-all duration-300 hover:border-[#b9ddec] hover:shadow-[0_10px_30px_rgba(9,42,67,0.07)]"
                >
                  {/* Node */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-[#f7f9fc] bg-[#eef8fd] text-[#015696] shadow-sm transition-all duration-300 group-hover:bg-[#015696] group-hover:text-white">
                    <Icon size={18} />
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#94a3b8]">
                      Step {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-1 text-lg font-bold text-[#092a43]">
                      {item}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#64748b]">
                      {descriptions[index] ||
                        "Project execution based on the site requirement."}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* PROCESS SUMMARY */}
        <div className="mt-12 overflow-hidden rounded-[24px] bg-[#092a43] md:mt-14">
          <div className="relative flex flex-col gap-7 px-7 py-8 sm:px-9 md:flex-row md:items-center md:justify-between md:px-10">
            {/* Decorative */}
            <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-[#015696]/30 blur-[70px]" />

            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#6bbce4]">
                Our Approach
              </p>

              <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                Inspect. Understand. Treat. Protect.
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-white/55">
                Each project moves through a structured workflow designed
                around the condition and requirements of the property.
              </p>
            </div>

            <Link
              href="/contact"
              className="group relative z-10 inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#092a43] transition-all duration-300 hover:bg-[#eef8fd]"
            >
              Discuss Your Project

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}