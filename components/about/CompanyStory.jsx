"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  MapPin,
  ShieldCheck,
  Target,
  Wrench,
} from "lucide-react";

const focusPoints = [
  "Leakage & seepage protection",
  "Condition-based treatment approach",
  "Residential & commercial requirements",
  "Professional waterproofing execution",
];

const companyFacts = [
  {
    value: "09",
    label: "Core Solutions",
    description: "Waterproofing & leakage protection",
  },
  {
    value: "03",
    label: "Property Types",
    description: "Residential, commercial & industrial",
  },
  {
    value: "01",
    label: "Primary City",
    description: "Ahmedabad, Gujarat",
  },
];

export default function CompanyStory() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      {/* Background details */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#F1F8FC] blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#F7F9FC] blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#092A43 1px, transparent 1px), linear-gradient(90deg, #092A43 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="container-chandan relative z-10">
        {/* Section heading */}
        <div className="mb-10 flex flex-col gap-5 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#DCE8F0] bg-white px-3 py-1.5 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#015696]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#015696]">
                About Chandan Enterprises
              </span>
            </div>

            <h2 className="max-w-3xl text-3xl font-bold tracking-[-0.035em] text-[#111827] sm:text-4xl lg:text-[48px] lg:leading-[1.08]">
              Protection starts with
              <span className="text-[#015696]"> understanding the property.</span>
            </h2>
          </div>

          <div className="max-w-sm lg:pb-1">
            <p className="text-sm leading-7 text-[#64748B]">
              We focus on identifying the actual source and condition of
              leakage, seepage and dampness before deciding the appropriate
              waterproofing approach.
            </p>
          </div>
        </div>

        {/* Main layout */}
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          {/* Image side */}
          <div className="relative min-h-[420px] overflow-hidden rounded-[24px] border border-[#DCE8F0] bg-[#F7F9FC] shadow-[0_20px_60px_rgba(9,42,67,0.10)] sm:min-h-[500px] lg:min-h-[560px]">
            <Image
              src="/About/company_overivew.jpg"
              alt="Chandan Enterprise waterproofing team"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#061B2B]/80 via-[#061B2B]/10 to-transparent" />

            {/* Top location badge */}
            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-white/95 px-3.5 py-2 shadow-lg backdrop-blur-md">
              <MapPin size={14} className="text-[#015696]" />

              <span className="text-xs font-bold text-[#092A43]">
                Ahmedabad, Gujarat
              </span>
            </div>

            {/* Bottom image content */}
            <div className="absolute bottom-5 left-5 right-5">
              <div className="max-w-md rounded-2xl border border-white/15 bg-[#061B2B]/85 p-5 backdrop-blur-md">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#015696] text-white">
                    <ShieldCheck size={17} />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-white/70">
                    Waterproofing Focus
                  </span>
                </div>

                <p className="text-sm leading-6 text-white/85">
                  Practical waterproofing solutions designed around the
                  property condition, exposure and leakage requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="flex flex-col rounded-[24px] border border-[#DCE8F0] bg-[#F7F9FC] p-6 shadow-[0_10px_30px_rgba(9,42,67,0.06)] sm:p-8 lg:p-10">
            {/* Intro */}
            <div className="max-w-2xl">
              <div className="mb-5 flex items-center gap-2">
                <div className="h-px w-8 bg-[#015696]" />

                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#015696]">
                  Our Company
                </span>
              </div>

              <h3 className="text-2xl font-bold leading-tight tracking-[-0.025em] text-[#092A43] sm:text-3xl">
                Building stronger protection for every property.
              </h3>

              <div className="mt-5 space-y-4 text-sm leading-7 text-[#64748B]">
                <p>
                  Chandan Enterprises provides professional waterproofing and
                  structural protection services for residential, commercial
                  and industrial properties.
                </p>

                <p>
                  Our approach combines appropriate waterproofing techniques,
                  quality materials and skilled workmanship to address common
                  problems such as leakage, seepage, dampness and moisture
                  penetration.
                </p>
              </div>
            </div>

            {/* Focus points */}
            <div className="my-8 border-y border-[#DCE8F0] py-7">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-[#092A43]">
                    What we focus on
                  </p>

                  <p className="mt-1 text-xs text-[#94A3B8]">
                    A practical approach to waterproofing work
                  </p>
                </div>

                <div className="hidden h-9 w-9 items-center justify-center rounded-full bg-[#EEF8FD] text-[#015696] sm:flex">
                  <Target size={17} />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {focusPoints.map((item) => (
                  <div
                    key={item}
                    className="group flex items-start gap-3 rounded-xl border border-transparent bg-white px-3.5 py-3 transition-all duration-300 hover:border-[#DCE8F0] hover:shadow-sm"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EAF5FB] text-[#015696]">
                      <Check size={12} strokeWidth={3} />
                    </span>

                    <span className="text-xs font-semibold leading-5 text-[#334155]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Facts */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {companyFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-xl border border-[#DCE8F0] bg-white p-3.5 sm:p-4"
                >
                  <div className="text-xl font-extrabold tracking-tight text-[#015696] sm:text-2xl">
                    {fact.value}
                  </div>

                  <div className="mt-1 text-[11px] font-bold leading-4 text-[#092A43] sm:text-xs">
                    {fact.label}
                  </div>

                  <p className="mt-1.5 hidden text-[10px] leading-4 text-[#94A3B8] sm:block">
                    {fact.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-7 flex flex-col gap-3 border-t border-[#DCE8F0] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <Wrench size={16} className="text-[#015696]" />

                <span className="text-xs font-medium text-[#64748B]">
                  Site condition first. Appropriate solution next.
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                <Link
                  href="/enquiry"
                  className="btn-primary group"
                >
                  Discuss Your Requirement
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/services"
                  className="btn-secondary"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-6 rounded-2xl border border-[#DCE8F0] bg-white px-5 py-4 shadow-sm sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-3xl text-xs leading-6 text-[#64748B] sm:text-sm">
              From inspection to treatment, our focus is on understanding the
              actual property condition before deciding the appropriate
              waterproofing approach.
            </p>

            <div className="flex shrink-0 items-center gap-2 text-xs font-bold text-[#015696]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#015696]" />
              Ahmedabad Service Focus
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}