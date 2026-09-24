"use client";

import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F7FBFD] py-10 sm:py-12 lg:py-14">
      {/* Background details */}
      <div className="pointer-events-none absolute right-[-160px] top-[-160px] h-[420px] w-[420px] rounded-full bg-[#1687C5]/7 blur-3xl" />

      <div className="pointer-events-none absolute bottom-[-180px] left-[-140px] h-[380px] w-[380px] rounded-full bg-[#46A9D8]/8 blur-3xl" />

      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        {/* Main Hero */}
        <div className="grid min-h-[520px] items-center gap-12 py-14 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
          {/* LEFT CONTENT */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1687C5]" />

              <span className="text-xs font-bold uppercase tracking-[3px] text-[#1687C5]">
                About Chandan Enterprises
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-[#12324A] sm:text-5xl lg:text-[58px]">
              Waterproofing built around
              <span className="block text-[#1687C5]">
                the right solution.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-8 text-[#64748B] sm:text-lg">
              Chandan Enterprises provides waterproofing and leakage protection
              solutions for residential, commercial and other property
              requirements in Ahmedabad and nearby areas.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#64748B]">
              Our approach focuses on understanding the condition of the
              affected area, identifying the likely source of the problem and
              selecting a suitable treatment for the project.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#1687C5] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0B6FA8]"
              >
                Discuss Your Requirement
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#CFE3EC] bg-white px-6 py-3.5 text-sm font-bold text-[#12324A] transition hover:border-[#1687C5] hover:text-[#1687C5]"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* RIGHT VISUAL PANEL */}
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -right-3 -top-3 h-full w-full rounded-[28px] border border-[#B9DDEB] sm:-right-4 sm:-top-4" />

            <div className="relative overflow-hidden rounded-[28px] bg-[#12324A] p-5 shadow-[0_25px_60px_rgba(18,50,74,0.12)] sm:p-6">
              {/* Top accent */}
              <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-[#1687C5]/20" />

              {/* Main visual */}
              <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[#0B273A]">
                {/* Architectural lines */}
                <div className="absolute inset-0 opacity-[0.12]">
                  <div className="absolute left-1/4 top-0 h-full w-px bg-white" />
                  <div className="absolute left-1/2 top-0 h-full w-px bg-white" />
                  <div className="absolute left-3/4 top-0 h-full w-px bg-white" />

                  <div className="absolute left-0 top-1/3 h-px w-full bg-white" />
                  <div className="absolute left-0 top-2/3 h-px w-full bg-white" />
                </div>

                <div className="relative flex min-h-[330px] flex-col justify-between p-6 sm:min-h-[360px] sm:p-8">
                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#8FD0EF]">
                        Our Approach
                      </p>

                      <p className="mt-2 max-w-[190px] text-xl font-bold leading-tight text-white">
                        Understand the problem before treating it.
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#8FD0EF]">
                      <Building2 size={21} />
                    </div>
                  </div>

                  {/* Center visual */}
                  <div className="relative mx-auto my-7 flex h-36 w-36 items-center justify-center">
                    <div className="absolute inset-0 rounded-full border border-[#46A9D8]/30" />

                    <div className="absolute inset-5 rounded-full border border-[#46A9D8]/20" />

                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#1687C5] shadow-[0_0_50px_rgba(22,135,197,0.25)]">
                      <ShieldCheck
                        size={34}
                        strokeWidth={1.7}
                        className="text-white"
                      />
                    </div>
                  </div>

                  {/* Bottom process */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      "Inspect",
                      "Understand",
                      "Treat",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="rounded-xl border border-white/10 bg-white/[0.06] px-3 py-3"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold text-[#46A9D8]">
                            0{index + 1}
                          </span>

                          <CheckCircle2
                            size={13}
                            className="text-[#46A9D8]"
                          />
                        </div>

                        <p className="mt-1.5 text-xs font-semibold text-white/75">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom label */}
              <div className="flex items-center justify-between px-1 pt-3">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[2px] text-white/40">
                    Service Focus
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    Waterproofing & Leakage Protection
                  </p>
                </div>

                <span className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-semibold text-white/55 sm:block">
                  Ahmedabad
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom information strip */}
        <div className="border-t border-[#DCEAF0]">
          <div className="grid divide-y divide-[#DCEAF0] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <div className="py-5 sm:pr-8">
              <p className="text-xs font-bold uppercase tracking-[1.5px] text-[#1687C5]">
                Inspection
              </p>

              <p className="mt-1 text-sm font-semibold text-[#12324A]">
                Understand the affected area
              </p>
            </div>

            <div className="py-5 sm:px-8">
              <p className="text-xs font-bold uppercase tracking-[1.5px] text-[#1687C5]">
                Treatment
              </p>

              <p className="mt-1 text-sm font-semibold text-[#12324A]">
                Select a suitable approach
              </p>
            </div>

            <div className="py-5 sm:pl-8">
              <p className="text-xs font-bold uppercase tracking-[1.5px] text-[#1687C5]">
                Service
              </p>

              <p className="mt-1 text-sm font-semibold text-[#12324A]">
                Focused on the project requirement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}