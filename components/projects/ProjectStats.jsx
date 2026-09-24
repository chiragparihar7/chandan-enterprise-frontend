"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  MapPin,
  ShieldCheck,
  Layers3,
} from "lucide-react";

export default function ProjectStats() {
  const projectHighlights = [
    {
      number: "03",
      label: "Property Types",
      description:
        "Waterproofing requirements across residential, commercial and industrial properties.",
      icon: Building2,
    },
    {
      number: "09",
      label: "Core Solutions",
      description:
        "Different waterproofing and leakage-protection solutions for varied site conditions.",
      icon: ShieldCheck,
    },
    {
      number: "01",
      label: "Primary City",
      description:
        "Serving property owners and businesses across Ahmedabad, Gujarat.",
      icon: MapPin,
    },
    {
      number: "MS",
      label: "Project Focus",
      description:
        "Treatment approaches selected according to the surface and moisture condition.",
      icon: Layers3,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-12 lg:py-14">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-160px] top-[-100px] h-[420px] w-[420px] rounded-full bg-[#eef8fd] blur-[120px]" />

        <div className="absolute bottom-[-160px] left-[-140px] h-[380px] w-[380px] rounded-full bg-[#f1f8fc] blur-[110px]" />
      </div>

      <div className="container-chandan relative z-10">
        {/* HEADER */}
        <div className="grid gap-8 border-b border-[#dce8f0] pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[#015696]">
              <span className="h-px w-8 bg-[#015696]" />
              Project Overview
            </div>

            <h2 className="max-w-xl text-3xl font-bold leading-[1.08] text-[#092a43] sm:text-4xl md:text-5xl">
              The scope behind
              <span className="text-[#015696]"> our project work.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-[#64748b] lg:justify-self-end lg:text-lg">
            Every waterproofing project is different. Property type, surface
            condition, moisture source and treatment requirements all
            influence the approach taken on site.
          </p>
        </div>

        {/* MAIN FEATURE PANEL */}
        <div className="mt-8 overflow-hidden rounded-[28px] bg-[#092a43]">
          <div className="relative grid lg:grid-cols-[0.7fr_1.3fr]">
            {/* LEFT */}
            <div className="relative overflow-hidden p-7 sm:p-9 lg:p-10">
              {/* Decorative Grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                  backgroundSize: "36px 36px",
                }}
              />

              <div className="relative z-10">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#6bbce4]">
                  Project Perspective
                </p>

                <h3 className="mt-4 max-w-md text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Different properties.
                  <br />
                  Different protection needs.
                </h3>

                <p className="mt-5 max-w-md text-sm leading-6 text-white/60">
                  Our project work covers a range of property environments,
                  with treatment decisions based on the actual condition of
                  the site.
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#015696] text-white">
                    <ShieldCheck size={21} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Condition-focused approach
                    </p>

                    <p className="mt-0.5 text-xs text-white/50">
                      Inspect · Understand · Treat
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full border border-white/10" />
              <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full border border-white/10" />
            </div>

            {/* RIGHT STATS */}
            <div className="grid border-t border-white/10 sm:grid-cols-2 lg:border-l lg:border-t-0">
              {projectHighlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className={`group relative p-7 sm:p-8 lg:p-9 ${
                      index < 2
                        ? "border-b border-white/10"
                        : "border-b border-white/10 sm:border-b-0"
                    } ${
                      index % 2 === 0
                        ? "sm:border-r sm:border-white/10"
                        : ""
                    }`}
                  >
                    {/* Number */}
                    <div className="flex items-start justify-between">
                      <span className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        {item.number}
                      </span>

                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#6bbce4] transition-colors duration-300 group-hover:bg-[#015696] group-hover:text-white">
                        <Icon size={19} />
                      </span>
                    </div>

                    <h4 className="mt-7 text-lg font-bold text-white">
                      {item.label}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-white/50">
                      {item.description}
                    </p>

                    <div className="mt-6 h-px w-10 bg-[#015696] transition-all duration-300 group-hover:w-20" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* BOTTOM INFO */}
        <div className="mt-8 grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
          {/* Location */}
          <div className="flex items-start gap-4 rounded-2xl border border-[#dce8f0] bg-[#f7f9fc] p-5 sm:items-center">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#015696] shadow-sm">
              <MapPin size={19} />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#94a3b8]">
                Project Coverage
              </p>

              <h4 className="mt-1 font-bold text-[#092a43]">
                Ahmedabad, Gujarat
              </h4>

              <p className="mt-1 text-sm text-[#64748b]">
                Residential, commercial and industrial properties.
              </p>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#015696] px-6 py-5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#0b3f67] md:px-7"
          >
            Discuss Your Project

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}