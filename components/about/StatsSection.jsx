// =============================
// 📁 components/about/StatsSection.jsx
// PREMIUM LIGHT — AT A GLANCE
// CHANDAN ENTERPRISES
// =============================

"use client";

import {
  ArrowUpRight,
  Building2,
  MapPin,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const stats = [
  {
    number: "09",
    label: "Core Solutions",
    description: "Waterproofing & leakage protection solutions",
    icon: ShieldCheck,
  },
  {
    number: "03",
    label: "Property Types",
    description: "Residential, commercial & industrial",
    icon: Building2,
  },
  {
    number: "01",
    label: "Primary City",
    description: "Ahmedabad, Gujarat",
    icon: MapPin,
  },
  {
    number: "SITE",
    label: "First Step",
    description: "Condition-based assessment before treatment",
    icon: Wrench,
  },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-[#F1F8FC] blur-[110px]" />

        <div className="absolute bottom-[-200px] right-[-150px] h-[420px] w-[420px] rounded-full bg-[#F7F9FC] blur-[110px]" />
      </div>

      <div className="container-chandan relative z-10">
        {/* =====================================================
            MAIN PANEL
        ===================================================== */}

        <div className="overflow-hidden rounded-[24px] border border-[#DCE8F0] bg-[#F1F8FC]">
          {/* ===================================================
              HEADER
          =================================================== */}

          <div className="grid gap-6 border-b border-[#DCE8F0] px-6 py-7 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:px-10 lg:py-8">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#015696]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#015696]">
                  Chandan At A Glance
                </span>
              </div>

              <h2 className="text-2xl font-bold tracking-[-0.03em] text-[#092A43] sm:text-3xl">
                The scope of what we do.
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-6 text-[#64748B] lg:justify-self-end">
              Our work is focused on waterproofing and leakage protection
              requirements across different property types, with Ahmedabad as
              our primary service location.
            </p>
          </div>

          {/* ===================================================
              STATS
          =================================================== */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className={`group relative px-6 py-7 transition-colors duration-300 hover:bg-white sm:px-7 lg:px-8 lg:py-8 ${
                    index !== 0
                      ? "border-t border-[#DCE8F0] sm:border-l sm:border-t-0"
                      : ""
                  }`}
                >
                  {/* Top line */}
                  <div className="mb-7 flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#015696] shadow-sm transition-all duration-300 group-hover:bg-[#015696] group-hover:text-white">
                      <Icon size={17} strokeWidth={1.8} />
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="text-[#A5B6C2] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#015696]"
                    />
                  </div>

                  {/* Large value */}
                  <div className="text-[42px] font-extrabold leading-none tracking-[-0.055em] text-[#092A43] sm:text-[46px]">
                    {item.number}
                  </div>

                  {/* Label */}
                  <h3 className="mt-3 text-sm font-bold text-[#092A43]">
                    {item.label}
                  </h3>

                  {/* Description */}
                  <p className="mt-1.5 max-w-[210px] text-xs leading-5 text-[#64748B]">
                    {item.description}
                  </p>

                  {/* Accent */}
                  <div className="absolute bottom-0 left-6 h-[2px] w-0 bg-[#015696] transition-all duration-500 group-hover:w-12 lg:left-8" />
                </div>
              );
            })}
          </div>

          {/* ===================================================
              BOTTOM NOTE
          =================================================== */}

          <div className="flex flex-col gap-3 border-t border-[#DCE8F0] bg-white px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EEF8FD] text-[#015696]">
                <ShieldCheck size={14} />
              </div>

              <p className="text-[11px] font-medium text-[#64748B]">
                Practical solutions based on property condition and
                waterproofing requirements.
              </p>
            </div>

            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#015696]">
              Ahmedabad · Gujarat
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}