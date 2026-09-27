"use client";

import React from "react";
import {
  AlertTriangle,
  ArrowRight,
  Bath,
  CloudRain,
  Droplets,
  Home,
  MoveDown,
  ShieldAlert,
} from "lucide-react";

import { waterproofingProblems } from "./data";

const iconMap = [
  CloudRain,
  Droplets,
  Bath,
  Home,
  ShieldAlert,
  MoveDown,
];

export default function ProblemSection() {
  return (
    <section className="section relative overflow-hidden bg-[#f7fafc]">
      {/* =========================================================
          DECORATIVE BACKGROUND
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-20 h-96 w-96 rounded-full bg-[#e8f5fb] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-0 h-[420px] w-[420px] rounded-full bg-[#eef7fb] blur-3xl"
      />

      <div className="container-chandan relative z-10">

        {/* =========================================================
            MAIN LAYOUT
        ========================================================= */}

        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

          {/* =======================================================
              LEFT CONTENT
          ======================================================= */}

          <div className="lg:sticky lg:top-28">

            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#015696]" />

              <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#015696]">
                Common Problems
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-xl text-3xl font-extrabold leading-[1.08] tracking-[-0.04em] text-[#092a43] sm:text-4xl lg:text-[48px]">
              Small Leakage Today Can Become a
              <span className="block text-[#015696]">
                Bigger Property Problem Tomorrow
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-[#64748b] sm:text-lg">
              Water damage often starts with a small crack, open joint,
              surface defect or drainage issue. When moisture keeps entering
              the structure, the visible problem can become harder to manage.
            </p>

            {/* =====================================================
                WARNING / HIGHLIGHT CARD
            ===================================================== */}

            <div className="relative mt-8 overflow-hidden rounded-[22px] border border-[#cfe5f1] bg-white p-6 shadow-[0_12px_35px_rgba(9,42,67,0.07)] sm:p-7">

              {/* Accent */}
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#015696] to-[#46a9d8]" />

              <div className="flex gap-4">

                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eef8fd] text-[#015696]">
                  <Droplets size={22} strokeWidth={1.8} />
                </div>

                <div>
                  <div className="mb-1 flex items-center gap-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#015696]">
                      Why It Matters
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold tracking-[-0.02em] text-[#092a43]">
                    Don't treat only the visible patch
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#64748b]">
                    A proper waterproofing approach begins by understanding
                    where water is entering and what condition the affected
                    surface is in.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#solution"
              className="group mt-7 inline-flex items-center gap-3 text-sm font-bold text-[#015696]"
            >
              <span>See Our Waterproofing Approach</span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eef8fd] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#015696] group-hover:text-white">
                <ArrowRight size={15} />
              </span>
            </a>
          </div>

          {/* =======================================================
              RIGHT — PROBLEM GRID
          ======================================================= */}

          <div>

            {/* Small intro */}
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-[#092a43]">
                  Common Signs of Water Problems
                </p>

                <p className="mt-1 text-xs text-[#7b93a3]">
                  Problems that may indicate the need for inspection
                </p>
              </div>

              <div className="hidden items-center gap-2 rounded-full border border-[#dce8f0] bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#64748b] sm:flex">
                <AlertTriangle size={13} className="text-[#015696]" />
                Warning Signs
              </div>
            </div>

            {/* Problem Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {waterproofingProblems.map((problem, index) => {
                const Icon = iconMap[index] || AlertTriangle;

                return (
                  <div
                    key={problem.number}
                    className="group relative min-h-[220px] overflow-hidden rounded-[22px] border border-[#dce8f0] bg-white p-6 shadow-[0_7px_25px_rgba(9,42,67,0.045)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#b9d8e8] hover:shadow-[0_18px_40px_rgba(9,42,67,0.10)]"
                  >
                    {/* Hover Background */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#eef8fd]/0 via-white to-[#eef8fd]/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />

                    {/* Top Accent */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#015696] to-[#46a9d8] transition-transform duration-500 group-hover:scale-x-100"
                    />

                    {/* Number */}
                    <span
                      aria-hidden="true"
                      className="absolute right-5 top-4 select-none text-[52px] font-black leading-none tracking-[-0.06em] text-[#f2f7fa] transition-all duration-500 group-hover:text-[#e8f5fb]"
                    >
                      {problem.number}
                    </span>

                    {/* Icon */}
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#dceff7] bg-[#eef8fd] text-[#015696] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#015696] group-hover:bg-[#015696] group-hover:text-white group-hover:shadow-[0_10px_25px_rgba(1,86,150,0.18)]">
                      <Icon size={21} strokeWidth={1.8} />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 mt-6">
                      <h3 className="text-lg font-extrabold tracking-[-0.02em] text-[#092a43] transition-colors duration-300 group-hover:text-[#015696]">
                        {problem.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#64748b]">
                        {problem.description}
                      </p>
                    </div>

                    {/* Bottom Indicator */}
                    <div className="absolute bottom-5 right-5 flex h-7 w-7 items-center justify-center rounded-full bg-[#f7fafc] text-[#94a3b8] transition-all duration-300 group-hover:bg-[#eef8fd] group-hover:text-[#015696]">
                      <ArrowRight size={13} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =========================================================
            BOTTOM MESSAGE
        ========================================================= */}

        <div className="mt-16">
          <div className="h-px bg-gradient-to-r from-transparent via-[#cfe5f1] to-transparent" />

          <div className="flex flex-col items-center justify-center gap-3 pt-7 text-center sm:flex-row">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eef8fd] text-[#015696]">
              <ShieldAlert size={17} />
            </div>

            <p className="text-sm font-medium text-[#64748b]">
              Early inspection can help identify the source of leakage before
              the visible problem becomes more extensive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}