"use client";

import React from "react";
import {
  ArrowRight,
  Bath,
  Building2,
  Factory,
  Home,
  Layers3,
  ShieldCheck,
  Warehouse,
  Waves,
} from "lucide-react";

import { waterproofingTypes } from "./data";

const iconMap = {
  residential: Home,
  terrace: Waves,
  bathroom: Bath,
  basement: Layers3,
  commercial: Building2,
  industrial: Factory,
};

export default function WaterproofingTypes() {
  return (
    <section className="relative overflow-hidden bg-[#f7fafc] py-10 sm:py-12 lg:py-14">
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-20 h-[420px] w-[420px] rounded-full bg-[#e9f6fc] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-0 h-[460px] w-[460px] rounded-full bg-[#eef8fc] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60 blur-3xl"
      />

      <div className="container-chandan relative z-10">

        {/* =========================================================
            HEADER
        ========================================================= */}

        <div className="grid items-end gap-8 border-b border-[#dce8f0] pb-9 md:grid-cols-[0.95fr_1.05fr] lg:gap-16">

          {/* LEFT */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#015696]" />

              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#015696]">
                Where We Work
              </span>
            </div>

            <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.06] tracking-[-0.045em] text-[#092a43] sm:text-4xl lg:text-[50px]">
              Waterproofing Solutions
              <span className="block text-[#015696]">
                for Every Application
              </span>
            </h2>
          </div>

          {/* RIGHT */}
          <div className="max-w-xl md:ml-auto">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef8fd] text-[#015696]">
                <ShieldCheck size={19} strokeWidth={1.8} />
              </div>

              <span className="text-sm font-bold text-[#092a43]">
                Residential, Commercial & Industrial
              </span>
            </div>

            <p className="text-base leading-7 text-[#64748b] sm:text-lg">
              Different areas of a property require different waterproofing
              considerations. Explore the applications we support and discuss
              the requirements of your property with our team.
            </p>
          </div>
        </div>

        {/* =========================================================
            PREMIUM APPLICATION SHOWCASE
        ========================================================= */}

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">

          {/* =======================================================
              LEFT FEATURE PANEL
          ======================================================= */}

          <div className="relative min-h-[560px] overflow-hidden rounded-[28px] bg-[#061b2b] shadow-[0_25px_60px_rgba(6,27,43,0.14)]">

            {/* Glow */}
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#015696]/30 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#46a9d8]/10 blur-3xl"
            />

            {/* Grid Pattern */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.045]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                backgroundSize: "42px 42px",
              }}
            />

            {/* Content */}
            <div className="relative z-10 flex h-full min-h-[560px] flex-col justify-between p-7 sm:p-9 lg:p-10">

              {/* Top Content */}
              <div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-[#46a9d8] backdrop-blur-md">
                  <ShieldCheck size={23} strokeWidth={1.7} />
                </div>

                <p className="mt-7 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#46a9d8]">
                  Application-Based Solutions
                </p>

                <h3 className="mt-3 max-w-md text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] text-white sm:text-4xl">
                  Protection designed around
                  <span className="text-[#46a9d8]">
                    {" "}
                    the property
                  </span>
                </h3>

                <p className="mt-5 max-w-md text-sm leading-6 text-[#a9bfcc]">
                  From homes and terraces to commercial and industrial
                  structures, waterproofing requirements can vary by surface,
                  exposure and water-entry conditions.
                </p>
              </div>

              {/* Bottom Feature */}
              <div className="mt-12">

                <div className="mb-4 h-px w-full bg-white/10" />

                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                    <Layers3 size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-white">
                      Multiple Property Applications
                    </p>

                    <p className="mt-1 text-xs text-[#8ea8b7]">
                      Select an application to explore your requirements.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* =======================================================
              RIGHT APPLICATION GRID
          ======================================================= */}

          <div className="grid gap-4 sm:grid-cols-2">

            {waterproofingTypes.map((type, index) => {
              const Icon =
                iconMap[type?.id] ||
                [
                  Home,
                  Waves,
                  Bath,
                  Layers3,
                  Building2,
                  Warehouse,
                ][index] ||
                ShieldCheck;

              return (
                <a
                  key={`${type?.id || type?.title || "waterproofing-type"}-${index}`}
                  href="/services"
                  aria-label={`View waterproofing services - ${
                    type?.title || "Waterproofing"
                  }`}
                  className="group relative flex min-h-[270px] flex-col overflow-hidden rounded-[22px] border border-[#dce8f0] bg-white p-6 shadow-[0_7px_25px_rgba(9,42,67,0.04)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#b9d8e8] hover:shadow-[0_20px_45px_rgba(9,42,67,0.10)] focus:outline-none focus:ring-2 focus:ring-[#015696] focus:ring-offset-2"
                >
                  {/* =================================================
                      HOVER BACKGROUND
                  ================================================= */}

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-white to-[#eef8fd] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />

                  {/* =================================================
                      TOP ACCENT
                  ================================================= */}

                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#015696] to-[#46a9d8] transition-transform duration-500 group-hover:scale-x-100"
                  />

                  {/* =================================================
                      NUMBER
                  ================================================= */}

                  <span
                    aria-hidden="true"
                    className="absolute right-5 top-4 text-[54px] font-black leading-none tracking-[-0.07em] text-[#f2f7fa] transition-colors duration-500 group-hover:text-[#e8f5fb]"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* =================================================
                      ICON
                  ================================================= */}

                  <div className="relative z-10 flex items-center justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#dceff7] bg-[#eef8fd] text-[#015696] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#015696] group-hover:bg-[#015696] group-hover:text-white group-hover:shadow-[0_10px_25px_rgba(1,86,150,0.18)]">
                      <Icon size={21} strokeWidth={1.8} />
                    </div>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e8f0f5] text-[#94a3b8] transition-all duration-300 group-hover:border-[#b9d8e8] group-hover:text-[#015696]">
                      <ArrowRight size={14} />
                    </span>

                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <div className="relative z-10 mt-7">

                    <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#94a3b8]">
                      Application {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-2 text-xl font-extrabold tracking-[-0.025em] text-[#092a43] transition-colors duration-300 group-hover:text-[#015696]">
                      {type?.title || "Waterproofing Solution"}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#64748b]">
                      {type?.description ||
                        "Professional waterproofing solutions based on the property and application requirements."}
                    </p>

                  </div>

                  {/* =================================================
                      BOTTOM CTA
                  ================================================= */}

                  <div className="relative z-10 mt-auto flex items-center gap-2 pt-6 text-xs font-bold text-[#015696]">

                    <span>
                      Explore Services
                    </span>

                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />

                  </div>
                </a>
              );
            })}

          </div>
        </div>

        {/* =========================================================
            BOTTOM CTA
        ========================================================= */}

        <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-[20px] border border-[#dce8f0] bg-white px-6 py-5 shadow-[0_7px_25px_rgba(9,42,67,0.035)] sm:flex-row sm:px-7">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef8fd] text-[#015696]">
              <ShieldCheck size={18} />
            </div>

            <div>
              <p className="text-sm font-bold text-[#092a43]">
                Not sure which application applies to your property?
              </p>

              <p className="mt-0.5 text-xs text-[#64748b]">
                Discuss the condition and requirements with our team.
              </p>
            </div>

          </div>

          <a
            href="#enquiry"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#015696] px-5 py-3 text-sm font-bold text-white shadow-[0_8px_20px_rgba(1,86,150,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b6fa8]"
          >
            Discuss Your Requirement
            <ArrowRight size={16} />
          </a>

        </div>
      </div>
    </section>
  );
}