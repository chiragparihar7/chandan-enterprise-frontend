// =============================
// 📁 components/services/ProcessTimeline.jsx
// PREMIUM WATERPROOFING PROCESS
// =============================

"use client";

import {
  Search,
  ScanSearch,
  Hammer,
  ShieldCheck,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

const process = [
  {
    number: "01",
    title: "Site Inspection",
    description:
      "Detailed on-site analysis to identify leakage sources and structural issues.",
    icon: Search,
  },
  {
    number: "02",
    title: "Leak Detection",
    description:
      "Professional inspection techniques to understand moisture and leakage conditions.",
    icon: ScanSearch,
  },
  {
    number: "03",
    title: "Surface Preparation",
    description:
      "Proper cleaning and surface treatment to prepare the area for waterproofing.",
    icon: Hammer,
  },
  {
    number: "04",
    title: "Chemical Application",
    description:
      "Waterproofing materials are applied according to the surface and treatment requirements.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Quality Testing",
    description:
      "Final inspection and testing to check the completed waterproofing work.",
    icon: BadgeCheck,
  },
];

export default function ProcessTimeline() {
  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-12 lg:py-14">

      {/* =========================
          BACKGROUND
      ========================= */}
      <div className="pointer-events-none absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-[#015696]/[0.035] blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-[#46a9d8]/[0.04] blur-[110px]" />

      <div className="container-chandan relative">

        {/* =========================
            HEADER
        ========================= */}
        <div className="mb-14 grid gap-7 lg:grid-cols-[1fr_0.7fr] lg:items-end">

          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-[#015696]" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#015696]">
                Our Process
              </span>
            </div>

            <h2 className="max-w-3xl text-3xl font-bold leading-[1.08] tracking-tight text-[#092a43] md:text-4xl lg:text-5xl">
              A structured approach to
              <span className="text-[#015696]">
                {" "}waterproofing.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-[#64748b] md:text-lg">
            Every project follows a clear sequence, from understanding the
            condition of the property to preparing, treating and checking the
            affected area.
          </p>

        </div>

        {/* =========================
            PROCESS
        ========================= */}
        <div className="relative">

          {/* Desktop Connecting Line */}
          <div className="absolute left-[10%] right-[10%] top-[42px] hidden h-px bg-[#dce8f0] lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">

            {process.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="group relative lg:px-3 xl:px-4"
                >

                  {/* =========================
                      NUMBER / ICON
                  ========================= */}
                  <div className="relative z-10 mb-6 flex items-center justify-between lg:block">

                    <div className="flex h-[84px] w-[84px] items-center justify-center rounded-full border border-[#dce8f0] bg-white shadow-[0_8px_25px_rgba(9,42,67,0.06)] transition-all duration-300 group-hover:border-[#015696] group-hover:shadow-[0_10px_30px_rgba(1,86,150,0.14)]">

                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#eef8fd] transition-all duration-300 group-hover:bg-[#015696]">
                        <Icon className="h-5 w-5 text-[#015696] transition-colors duration-300 group-hover:text-white" />
                      </div>

                    </div>

                    <span className="text-4xl font-bold tracking-tight text-[#092a43]/[0.07] lg:absolute lg:left-1/2 lg:top-[18px] lg:-translate-x-1/2">
                      {item.number}
                    </span>

                  </div>

                  {/* =========================
                      CONTENT
                  ========================= */}
                  <div className="border-l border-[#dce8f0] pl-5 lg:border-l-0 lg:pl-0 lg:pr-4">

                    <h3 className="text-lg font-bold leading-snug text-[#092a43] md:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#64748b]">
                      {item.description}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#015696]">
                      Step {item.number}

                      {index !== process.length - 1 && (
                        <ArrowRight className="h-3.5 w-3.5 lg:hidden" />
                      )}
                    </div>

                  </div>

                </div>
              );
            })}

          </div>
        </div>

        {/* =========================
            BOTTOM PROCESS BAR
        ========================= */}
        <div className="mt-12 grid overflow-hidden rounded-[20px] border border-[#dce8f0] bg-[#f7f9fc] md:grid-cols-[auto_1fr_auto] md:items-center">

          {/* Icon */}
          <div className="flex h-full items-center justify-center border-b border-[#dce8f0] bg-[#eef8fd] px-6 py-5 md:border-b-0 md:border-r">
            <ShieldCheck className="h-6 w-6 text-[#015696]" />
          </div>

          {/* Text */}
          <div className="px-6 py-5">
            <p className="text-sm font-semibold text-[#092a43]">
              Process-led execution
            </p>

            <p className="mt-1 text-xs leading-5 text-[#64748b] md:text-sm">
              The treatment approach is selected according to the observed
              condition and affected area.
            </p>
          </div>

          {/* Final Label */}
          <div className="border-t border-[#dce8f0] px-6 py-5 md:border-l md:border-t-0">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#015696]">
              Inspect → Treat → Check
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}