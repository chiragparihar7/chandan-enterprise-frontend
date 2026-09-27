"use client";

import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Bath,
  Building2,
  Check,
  Home,
  Layers3,
  Shield,
  Warehouse,
  Waves,
  Wrench,
} from "lucide-react";

import { waterproofingServices } from "./data";

const iconMap = {
  "terrace-waterproofing": Home,
  "bathroom-waterproofing": Bath,
  "basement-waterproofing": Layers3,
  "wall-waterproofing": Building2,
  "balcony-waterproofing": Waves,
  "commercial-waterproofing": Building2,
  "industrial-waterproofing": Warehouse,
  "repair-waterproofing": Wrench,
};

export default function ServicesSection() {
  return (
    <section className="section relative overflow-hidden bg-[#f7fafc]">
      {/* =========================================================
          DECORATIVE BACKGROUND
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-[#e8f5fb] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#eef7fb] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 blur-3xl"
      />

      <div className="container-chandan relative z-10">

        {/* =========================================================
            SECTION HEADER
        ========================================================= */}

        <div className="grid items-end gap-8 border-b border-[#dce8f0] pb-10 md:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* LEFT — TITLE */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#015696]" />

              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#015696]">
                Waterproofing Services
              </span>
            </div>

            <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.08] tracking-[-0.045em] text-[#092a43] sm:text-4xl lg:text-[52px]">
              Complete Waterproofing
              <span className="block text-[#015696]">
                Solutions for Every Property
              </span>
            </h2>
          </div>

          {/* RIGHT — DESCRIPTION */}
          <div className="max-w-xl md:ml-auto">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef8fd] text-[#015696]">
                <Shield size={19} strokeWidth={1.8} />
              </div>

              <span className="text-sm font-bold text-[#092a43]">
                Professional Waterproofing Solutions
              </span>
            </div>

            <p className="text-base leading-7 text-[#64748b] sm:text-lg">
              From terrace leakage and bathroom seepage to commercial and
              industrial waterproofing, we provide practical treatment
              solutions based on the condition, leakage source and requirements
              of your property.
            </p>

            <a
              href="#enquiry"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#015696]"
            >
              Discuss Your Requirement

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>

        {/* =========================================================
            SERVICES GRID
        ========================================================= */}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {waterproofingServices.map((service, index) => {
            const Icon = iconMap[service.id] || Shield;

            return (
              <a
                key={service.id}
                href="/services"
                aria-label={`View all waterproofing services - ${service.title}`}
                className="group relative flex h-full min-h-[390px] flex-col overflow-hidden rounded-[22px] border border-[#dce8f0] bg-white p-6 shadow-[0_8px_30px_rgba(9,42,67,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-[#b9d8e8] hover:shadow-[0_24px_55px_rgba(9,42,67,0.12)] focus:outline-none focus:ring-2 focus:ring-[#015696] focus:ring-offset-2"
              >
                {/* =====================================================
                    HOVER BACKGROUND
                ===================================================== */}

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#eef8fd]/0 via-white to-[#eef8fd]/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                {/* =====================================================
                    TOP BLUE ACCENT
                ===================================================== */}

                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#015696] to-[#46a9d8] transition-transform duration-500 group-hover:scale-x-100"
                />

                {/* =====================================================
                    LARGE BACKGROUND NUMBER
                ===================================================== */}

                <span
                  aria-hidden="true"
                  className="absolute right-5 top-3 select-none text-[64px] font-black leading-none tracking-[-0.06em] text-[#f2f7fa] transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#e9f5fb]"
                >
                  {service.number || String(index + 1).padStart(2, "0")}
                </span>

                {/* =====================================================
                    ICON ROW
                ===================================================== */}

                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#dceff7] bg-[#eef8fd] text-[#015696] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#015696] group-hover:bg-[#015696] group-hover:text-white group-hover:shadow-[0_12px_25px_rgba(1,86,150,0.20)]">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e8f0f5] text-[#94a3b8] transition-all duration-300 group-hover:border-[#b9d8e8] group-hover:text-[#015696]">
                    <ArrowUpRight size={15} />
                  </span>
                </div>

                {/* =====================================================
                    CONTENT
                ===================================================== */}

                <div className="relative z-10 mt-7">
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#7b93a3]">
                    Waterproofing Solution
                  </p>

                  <h3 className="text-xl font-extrabold tracking-[-0.02em] text-[#092a43] transition-colors duration-300 group-hover:text-[#015696]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#64748b]">
                    {service.description}
                  </p>
                </div>

                {/* =====================================================
                    FEATURES
                ===================================================== */}

                <div className="relative z-10 mt-6 border-t border-[#e8f0f5] pt-5">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#092a43]">
                    What We Cover
                  </p>

                  <ul className="space-y-2.5">
                    {service.features.slice(0, 3).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-xs font-medium leading-5 text-[#475569]"
                      >
                        <span className="mt-[2px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#eef8fd] text-[#015696] transition-colors duration-300 group-hover:bg-[#015696] group-hover:text-white">
                          <Check size={10} strokeWidth={3} />
                        </span>

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* =====================================================
                    CARD CTA
                ===================================================== */}

                <div className="relative z-10 mt-auto flex items-center justify-between border-t border-[#e8f0f5] pt-5">
                  <span className="text-sm font-bold text-[#015696]">
                    Explore Services
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eef8fd] text-[#015696] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#015696] group-hover:text-white">
                    <ArrowRight size={16} />
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* =========================================================
            BOTTOM CTA
        ========================================================= */}

        <div className="relative mt-12 overflow-hidden rounded-[24px] bg-[#061b2b] shadow-[0_20px_50px_rgba(6,27,43,0.14)]">

          {/* Decorative Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#015696]/30 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 left-1/4 h-64 w-64 rounded-full bg-[#46a9d8]/10 blur-3xl"
          />

          {/* Grid Pattern */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />

          <div className="relative z-10 flex flex-col gap-7 p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-9">

            {/* LEFT */}
            <div className="max-w-2xl">
              <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#46a9d8]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#46a9d8]" />
                Need Help Choosing?
              </div>

              <h3 className="text-2xl font-extrabold tracking-[-0.025em] text-white sm:text-3xl">
                Not sure which waterproofing treatment
                <span className="text-[#46a9d8]">
                  {" "}
                  your property needs?
                </span>
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-[#b7c9d5] sm:text-base">
                Tell us about your leakage, seepage or dampness problem. Our
                team can understand the requirement and discuss the appropriate
                waterproofing approach for your property.
              </p>
            </div>

            {/* RIGHT CTA */}
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href="#enquiry"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#092a43] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#f8fbfd]"
              >
                Get a Free Inspection
                <ArrowUpRight size={17} />
              </a>

              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
              >
                View All Services
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================
            SUPPORTING NOTE
        ========================================================= */}

        <div className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-[#94a3b8]">
          <Shield size={14} className="shrink-0 text-[#015696]" />

          <span>
            Waterproofing solutions are selected according to site condition,
            leakage source and project requirements.
          </span>
        </div>
      </div>
    </section>
  );
}