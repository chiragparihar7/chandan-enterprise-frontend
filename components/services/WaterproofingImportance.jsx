// =============================
// 📁 components/services/WaterproofingImportance.jsx
// PREMIUM LIGHT + DARK SPLIT DESIGN
// =============================

"use client";

import {
  ArrowUpRight,
  Droplets,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";

const importancePoints = [
  {
    number: "01",
    icon: Droplets,
    title: "Hidden Moisture",
    description:
      "Water seepage can gradually affect walls, slabs, ceilings and other surfaces when moisture remains untreated.",
  },
  {
    number: "02",
    icon: TriangleAlert,
    title: "Progressive Damage",
    description:
      "Persistent leakage and dampness may create additional repair and surface-maintenance requirements over time.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Early Protection",
    description:
      "Identifying the source and treating the affected area helps protect the property from continuing moisture-related problems.",
  },
];

export default function WaterproofingImportance() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc]">

      <div className="container-chandan">

        {/* =================================
            MAIN SPLIT PANEL
        ================================= */}
        <div className="grid lg:grid-cols-[0.85fr_1.15fr]">

          {/* =================================
              LIGHT SIDE
          ================================= */}
          <div className="relative flex flex-col justify-center py-16 pr-0 md:py-20 lg:min-h-[560px] lg:pr-14 xl:pr-20">

            {/* Small Decorative Line */}
            <div className="absolute left-0 top-0 h-full w-px bg-[#dce8f0]" />

            <div className="relative pl-5 md:pl-8 lg:pl-0">

              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-9 bg-[#015696]" />

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#015696]">
                  Why Waterproofing Matters
                </span>
              </div>

              <h2 className="max-w-xl text-3xl font-bold leading-[1.08] tracking-tight text-[#092a43] md:text-4xl lg:text-5xl">
                Water damage can
                <span className="block text-[#015696]">
                  develop quietly.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-base leading-7 text-[#64748b]">
                Leakage and dampness are not always visible at the beginning.
                Understanding the source and condition of the affected area
                is an important part of choosing the right waterproofing
                treatment.
              </p>

              {/* Key Statement */}
              <div className="mt-8 border-l-2 border-[#015696] pl-5">
                <p className="text-lg font-semibold leading-7 text-[#092a43]">
                  Protection starts with identifying the problem correctly.
                </p>

                <p className="mt-2 text-sm leading-6 text-[#64748b]">
                  Different surfaces and moisture conditions require different
                  treatment approaches.
                </p>
              </div>

            </div>
          </div>

          {/* =================================
              DARK SIDE
          ================================= */}
          <div className="relative overflow-hidden bg-[#092a43] px-6 py-12 md:px-10 md:py-14 lg:px-12 lg:py-16">

            {/* Background Accent */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#015696]/25 blur-[100px]" />

            <div className="relative">

              {/* Header */}
              <div className="mb-8 flex items-end justify-between gap-6 border-b border-white/10 pb-6">

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#46a9d8]">
                    Areas Of Concern
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                    Why early attention matters
                  </h3>
                </div>

                <div className="hidden h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 sm:flex">
                  <Droplets className="h-5 w-5 text-[#46a9d8]" />
                </div>

              </div>

              {/* Points */}
              <div className="divide-y divide-white/10">

                {importancePoints.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.number}
                      className="group grid gap-5 py-7 sm:grid-cols-[45px_48px_1fr]"
                    >

                      {/* Number */}
                      <div className="pt-1">
                        <span className="text-xs font-bold tracking-wider text-[#46a9d8]">
                          {item.number}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-all duration-300 group-hover:border-[#46a9d8]/40 group-hover:bg-[#015696]">
                        <Icon className="h-5 w-5 text-[#46a9d8] transition-colors duration-300 group-hover:text-white" />
                      </div>

                      {/* Content */}
                      <div>
                        <h4 className="text-lg font-semibold text-white md:text-xl">
                          {item.title}
                        </h4>

                        <p className="mt-2 max-w-xl text-sm leading-6 text-white/55 md:text-[15px]">
                          {item.description}
                        </p>

                        <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#46a9d8]">
                          Protection Focus

                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </div>
                      </div>

                    </div>
                  );
                })}

              </div>

            </div>
          </div>

        </div>

        {/* =================================
            BOTTOM STRIP
        ================================= */}
        <div className="grid border-x border-b border-[#dce8f0] bg-white md:grid-cols-3">

          <div className="border-b border-[#e8f0f5] px-6 py-5 md:border-b-0 md:border-r">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#015696]">
              Step 01
            </p>

            <p className="mt-1 text-sm font-semibold text-[#092a43]">
              Identify the source
            </p>
          </div>

          <div className="border-b border-[#e8f0f5] px-6 py-5 md:border-b-0 md:border-r">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#015696]">
              Step 02
            </p>

            <p className="mt-1 text-sm font-semibold text-[#092a43]">
              Understand the condition
            </p>
          </div>

          <div className="px-6 py-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#015696]">
              Step 03
            </p>

            <p className="mt-1 text-sm font-semibold text-[#092a43]">
              Select the right treatment
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}