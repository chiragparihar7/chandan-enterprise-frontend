"use client";

import React from "react";
import {
  BriefcaseBusiness,
  CalendarCheck2,
  ShieldCheck,
  UsersRound,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const stats = [
  {
    value: "10+",
    label: "Years Experience",
    description: "Waterproofing & civil solutions",
    icon: CalendarCheck2,
  },
  {
    value: "100+",
    label: "Projects Completed",
    description: "Residential & commercial",
    icon: BriefcaseBusiness,
  },
  {
    value: "95%",
    label: "Client Satisfaction",
    description: "Based on business records",
    icon: UsersRound,
  },
  {
    value: "1–10",
    label: "Warranty Options",
    description: "Subject to project terms",
    icon: ShieldCheck,
  },
];

export default function TrustStats() {
  return (
    <section className="relative z-30 -mt-10 px-4 pb-6 sm:-mt-12 sm:px-0">
      <div className="container-chandan">
        {/* =====================================================
            MAIN TRUST CARD
        ===================================================== */}

        <div className="relative overflow-hidden rounded-[24px] border border-white/15 bg-white shadow-[0_25px_70px_rgba(6,27,43,0.16)]">
          {/* Top accent */}
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#015696] via-[#46a9d8] to-[#015696]" />

          {/* Decorative background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#eef8fd] blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-[#f1f8fc] blur-3xl"
          />

          {/* ===================================================
              TRUST HEADER
          =================================================== */}

          <div className="relative flex flex-col gap-4 border-b border-[#e8f0f5] px-6 py-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#eef8fd] text-[#015696]">
                <Sparkles size={17} />
              </div>

              <div>
                <p className="text-sm font-bold text-[#092a43]">
                  Built Around Professional Waterproofing
                </p>

                <p className="mt-0.5 text-xs text-[#64748b]">
                  Experience, execution and customer-focused service
                </p>
              </div>
            </div>

            <a
              href="#enquiry"
              className="group inline-flex items-center gap-1.5 text-xs font-bold text-[#015696]"
            >
              Request an Inspection

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* ===================================================
              STATS
          =================================================== */}

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className={`group relative flex items-center gap-4 px-6 py-7 transition-all duration-300 hover:bg-[#f8fbfd] sm:px-7 lg:px-8 lg:py-8 ${
                    index !== 0
                      ? "border-t border-[#e8f0f5] sm:border-t-0"
                      : ""
                  } ${
                    index === 2
                      ? "sm:border-t sm:border-[#e8f0f5] lg:border-t-0"
                      : ""
                  } ${
                    index !== 0
                      ? "lg:border-l lg:border-[#e8f0f5]"
                      : ""
                  }`}
                >
                  {/* Hover background glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#eef8fd]/0 via-[#eef8fd]/0 to-[#eef8fd]/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />

                  {/* Icon */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eef8fd] text-[#015696] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#015696] group-hover:text-white group-hover:shadow-[0_10px_25px_rgba(1,86,150,0.20)]">
                    <Icon
                      size={21}
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Text */}
                  <div className="relative z-10 min-w-0">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold tracking-[-0.035em] text-[#092a43] transition-colors duration-300 group-hover:text-[#015696]">
                        {stat.value}
                      </span>

                      {index === 0 && (
                        <span className="text-xs font-bold text-[#94a3b8]">
                          +
                        </span>
                      )}
                    </div>

                    <p className="mt-0.5 text-sm font-bold text-[#334155]">
                      {stat.label}
                    </p>

                    <p className="mt-1 text-[11px] leading-4 text-[#64748b]">
                      {stat.description}
                    </p>
                  </div>

                  {/* Desktop index */}
                  <span className="absolute right-5 top-4 hidden text-[10px] font-bold tracking-[0.18em] text-[#cbd9e1] lg:block">
                    0{index + 1}
                  </span>
                </div>
              );
            })}
          </div>

          {/* ===================================================
              BOTTOM TRUST STRIP
          =================================================== */}

          <div className="relative border-t border-[#e8f0f5] bg-[#f8fbfd] px-6 py-4 sm:px-8 lg:px-10">
            <div className="flex flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
              <p className="text-xs leading-5 text-[#64748b]">
                <span className="font-semibold text-[#092a43]">
                  Professional waterproofing support
                </span>{" "}
                from inspection and preparation to treatment and completion.
              </p>

              <div className="flex shrink-0 items-center justify-center gap-2 text-xs font-semibold text-[#015696]">
                <ShieldCheck size={15} />

                Project-focused approach
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            SMALL SUPPORTING NOTE
        ===================================================== */}

        <p className="mx-auto mt-4 max-w-3xl text-center text-[10px] leading-5 text-[#94a3b8]">
          Business figures, experience claims, satisfaction percentages and
          warranty terms should reflect verified Chandan Enterprises records
          and the applicable terms of each project.
        </p>
      </div>
    </section>
  );
}