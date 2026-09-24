"use client";

import {
  ArrowUpRight,
  Eye,
  Target,
  Check,
} from "lucide-react";

const items = [
  {
    number: "01",
    label: "Our Mission",
    title: "Reliable Protection",
    icon: Target,
    accent: true,
    description:
      "Our mission is to deliver practical waterproofing solutions that help protect structures, address leakage and moisture-related concerns, and support the long-term condition of a property.",
    points: [
      "Understand the actual site condition",
      "Select an appropriate waterproofing approach",
      "Focus on professional execution",
    ],
  },
  {
    number: "02",
    label: "Our Vision",
    title: "Trusted Expertise",
    icon: Eye,
    accent: false,
    description:
      "Our vision is to build a trusted waterproofing service through consistent workmanship, appropriate solutions, clear communication, and a professional approach to every property requirement.",
    points: [
      "Build long-term customer trust",
      "Maintain professional work standards",
      "Grow through reliable service",
    ],
  },
];

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-[#F1F8FC] py-10 sm:py-12 lg:py-14">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-160px] top-[-160px] h-[420px] w-[420px] rounded-full bg-white blur-[100px]" />

        <div className="absolute bottom-[-160px] left-[-120px] h-[380px] w-[380px] rounded-full bg-[#E0F1F8] blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#092A43 1px, transparent 1px), linear-gradient(90deg, #092A43 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
      </div>

      <div className="container-chandan relative z-10">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-10 grid gap-6 lg:mb-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-[#015696]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#015696]">
                Mission & Vision
              </span>
            </div>

            <h2 className="max-w-3xl text-3xl font-bold leading-[1.08] tracking-[-0.04em] text-[#092A43] sm:text-4xl lg:text-[50px]">
              What guides the way
              <span className="text-[#015696]"> we work.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#64748B] lg:justify-self-end">
            Our direction is built around practical waterproofing solutions,
            professional workmanship and a clear understanding of every
            property's requirements.
          </p>
        </div>

        {/* =====================================================
            MAIN MISSION / VISION LAYOUT
        ===================================================== */}

        <div className="relative grid gap-4 lg:grid-cols-2 lg:gap-0">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className={`group relative overflow-hidden border transition-all duration-500 ${
                  item.accent
                    ? "rounded-[24px] border-[#015696] bg-[#092A43] text-white shadow-[0_18px_45px_rgba(9,42,67,0.14)] lg:rounded-r-none"
                    : "rounded-[24px] border-[#DCE8F0] bg-white text-[#092A43] shadow-[0_8px_28px_rgba(9,42,67,0.05)] lg:rounded-l-none"
                }`}
              >
                {/* Decorative number */}
                <div
                  className={`pointer-events-none absolute right-5 top-[-8px] text-[100px] font-extrabold leading-none tracking-[-0.09em] transition-transform duration-700 group-hover:scale-105 ${
                    item.accent
                      ? "text-white/[0.055]"
                      : "text-[#092A43]/[0.035]"
                  }`}
                >
                  {item.number}
                </div>

                {/* Decorative circle */}
                <div
                  className={`pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full blur-3xl ${
                    item.accent
                      ? "bg-[#015696]/20"
                      : "bg-[#F1F8FC]"
                  }`}
                />

                <div className="relative z-10 p-7 sm:p-9 lg:p-10">
                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl border ${
                        item.accent
                          ? "border-white/10 bg-white/10 text-[#46A9D8]"
                          : "border-[#DCE8F0] bg-[#F1F8FC] text-[#015696]"
                      }`}
                    >
                      <Icon size={21} strokeWidth={1.8} />
                    </div>

                    <span
                      className={`text-[10px] font-bold uppercase tracking-[0.16em] ${
                        item.accent
                          ? "text-white/40"
                          : "text-[#94A3B8]"
                      }`}
                    >
                      {item.number}
                    </span>
                  </div>

                  {/* Heading */}
                  <div className="mt-9 max-w-lg">
                    <p
                      className={`text-[10px] font-bold uppercase tracking-[0.18em] ${
                        item.accent
                          ? "text-[#8CC8E7]"
                          : "text-[#015696]"
                      }`}
                    >
                      {item.label}
                    </p>

                    <h3
                      className={`mt-2 text-2xl font-bold leading-tight tracking-[-0.025em] sm:text-3xl ${
                        item.accent
                          ? "text-white"
                          : "text-[#092A43]"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`mt-4 text-sm leading-7 ${
                        item.accent
                          ? "text-white/65"
                          : "text-[#64748B]"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Principles */}
                  <div
                    className={`mt-7 border-t pt-6 ${
                      item.accent
                        ? "border-white/10"
                        : "border-[#E8F0F5]"
                    }`}
                  >
                    <p
                      className={`mb-4 text-[10px] font-bold uppercase tracking-[0.15em] ${
                        item.accent
                          ? "text-white/40"
                          : "text-[#94A3B8]"
                      }`}
                    >
                      Key principles
                    </p>

                    <div className="grid gap-2.5">
                      {item.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-start gap-2.5"
                        >
                          <Check
                            size={14}
                            className={`mt-0.5 shrink-0 ${
                              item.accent
                                ? "text-[#46A9D8]"
                                : "text-[#015696]"
                            }`}
                          />

                          <span
                            className={`text-xs leading-5 ${
                              item.accent
                                ? "text-white/65"
                                : "text-[#64748B]"
                            }`}
                          >
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom */}
                  <div className="mt-8 flex items-center justify-between">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-[0.14em] ${
                        item.accent
                          ? "text-white/35"
                          : "text-[#A0AFBA]"
                      }`}
                    >
                      Chandan Enterprises
                    </span>

                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ${
                        item.accent
                          ? "border-white/10 text-[#8CC8E7] group-hover:bg-white group-hover:text-[#092A43]"
                          : "border-[#DCE8F0] text-[#94A3B8] group-hover:border-[#015696] group-hover:bg-[#015696] group-hover:text-white"
                      }`}
                    >
                      <ArrowUpRight size={15} />
                    </div>
                  </div>
                </div>

                {/* Bottom accent */}
                <div
                  className={`absolute bottom-0 left-0 h-[3px] transition-all duration-500 ${
                    item.accent
                      ? "w-16 bg-[#46A9D8] group-hover:w-full"
                      : "w-0 bg-[#015696] group-hover:w-full"
                  }`}
                />
              </article>
            );
          })}

          {/* =================================================
              CENTER CONNECTOR — DESKTOP ONLY
          ================================================= */}

          <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:flex">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#F1F8FC] bg-white shadow-[0_8px_25px_rgba(9,42,67,0.12)]">
              <div className="h-2 w-2 rounded-full bg-[#015696]" />
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}

        <div className="mt-5 flex flex-col gap-3 rounded-[18px] border border-[#DCE8F0] bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="max-w-2xl text-xs leading-5 text-[#64748B]">
            Our mission defines how we approach the work today, while our
            vision keeps the focus on building lasting trust through
            professional service.
          </p>

          <div className="flex shrink-0 items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#015696]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#015696]" />
            Purpose · Process · Protection
          </div>
        </div>
      </div>
    </section>
  );
}