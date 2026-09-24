"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Building2,
  Droplets,
  Home,
  ShieldCheck,
} from "lucide-react";

export default function ProjectHero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-10 md:py-12 lg:py-14">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-0 h-[520px] w-[520px] rounded-full bg-[#eaf6fc] blur-[120px]" />
        <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#eef8fd] blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#092a43 1px, transparent 1px), linear-gradient(90deg, #092a43 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="container-chandan relative z-10">
        {/* Hero */}
        <div className="grid min-h-[620px] items-center gap-12 py-12 md:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-14">
          {/* LEFT CONTENT */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#dce8f0] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#015696] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#015696]" />
              Our Projects
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-[#092a43] sm:text-5xl md:text-6xl lg:text-[64px]">
              Waterproofing
              <br />
              <span className="text-[#015696]">work that speaks</span>
              <br />
              through results.
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-[#64748b] md:text-lg">
              Explore our waterproofing work across residential, commercial
              and industrial properties. Each project begins with
              understanding the site condition and selecting the right
              treatment approach.
            </p>

            {/* Project Scope */}
            <div className="mt-8 grid max-w-xl grid-cols-3 overflow-hidden rounded-2xl border border-[#dce8f0] bg-white shadow-[0_8px_25px_rgba(9,42,67,0.05)]">
              <div className="border-r border-[#e8f0f5] px-4 py-5 sm:px-5">
                <p className="text-2xl font-bold text-[#092a43]">03</p>
                <p className="mt-1 text-xs font-medium leading-4 text-[#64748b]">
                  Property
                  <br />
                  Types
                </p>
              </div>

              <div className="border-r border-[#e8f0f5] px-4 py-5 sm:px-5">
                <p className="text-2xl font-bold text-[#092a43]">09</p>
                <p className="mt-1 text-xs font-medium leading-4 text-[#64748b]">
                  Core
                  <br />
                  Solutions
                </p>
              </div>

              <div className="px-4 py-5 sm:px-5">
                <p className="text-2xl font-bold text-[#092a43]">01</p>
                <p className="mt-1 text-xs font-medium leading-4 text-[#64748b]">
                  Primary
                  <br />
                  City
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#015696] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_25px_rgba(1,86,150,0.18)] transition-all duration-300 hover:bg-[#0b3f67]"
              >
                Explore Projects

                <ArrowDown
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-[#cbdde8] bg-white px-6 py-3.5 text-sm font-semibold text-[#092a43] transition-all duration-300 hover:border-[#015696] hover:text-[#015696]"
              >
                Start Your Project

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative">
            <div className="relative ml-auto max-w-[620px]">
              {/* Main Image */}
              <div className="relative h-[420px] overflow-hidden rounded-[28px] border-[6px] border-white bg-[#092a43] shadow-[0_25px_70px_rgba(9,42,67,0.16)] sm:h-[500px] lg:h-[540px]">
                <Image
                  src="/Services/after.jpg"
                  alt="Waterproofing project by Chandan Enterprises"
                  fill
                  priority
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061b2b]/80 via-transparent to-[#061b2b]/10" />

                {/* Image Label */}
                <div className="absolute left-6 top-6">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#092a43] shadow-lg">
                    <span className="h-2 w-2 rounded-full bg-[#015696]" />
                    Project Portfolio
                  </span>
                </div>

                {/* Bottom Image Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="max-w-md">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-white/60">
                      Waterproofing Solutions
                    </p>

                    <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                      Practical solutions for challenging water-related
                      conditions.
                    </h2>
                  </div>
                </div>
              </div>

          

              {/* Decorative Accent */}
              <div className="absolute -right-4 -top-4 -z-10 h-28 w-28 rounded-[24px] border border-[#b9ddec] bg-[#eef8fd] lg:-right-7 lg:-top-7" />
            </div>
          </div>
        </div>

        {/* PROPERTY TYPES */}
        <div className="border-t border-[#dce8f0] py-8 md:py-10">
          <div className="grid gap-4 md:grid-cols-3">
            {/* Residential */}
            <div className="group flex items-center gap-4 rounded-2xl border border-[#dce8f0] bg-white px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#b9ddec] hover:shadow-[0_12px_30px_rgba(9,42,67,0.07)]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eef8fd] text-[#015696]">
                <Home size={21} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#94a3b8]">
                  01
                </p>

                <h3 className="font-bold text-[#092a43]">
                  Residential Projects
                </h3>

                <p className="mt-1 text-xs text-[#64748b]">
                  Homes, apartments & residential spaces
                </p>
              </div>
            </div>

            {/* Commercial */}
            <div className="group flex items-center gap-4 rounded-2xl border border-[#dce8f0] bg-white px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#b9ddec] hover:shadow-[0_12px_30px_rgba(9,42,67,0.07)]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eef8fd] text-[#015696]">
                <Building2 size={21} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#94a3b8]">
                  02
                </p>

                <h3 className="font-bold text-[#092a43]">
                  Commercial Projects
                </h3>

                <p className="mt-1 text-xs text-[#64748b]">
                  Offices, buildings & commercial spaces
                </p>
              </div>
            </div>

            {/* Industrial */}
            <div className="group flex items-center gap-4 rounded-2xl border border-[#dce8f0] bg-white px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#b9ddec] hover:shadow-[0_12px_30px_rgba(9,42,67,0.07)]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eef8fd] text-[#015696]">
                <Building2 size={21} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#94a3b8]">
                  03
                </p>

                <h3 className="font-bold text-[#092a43]">
                  Industrial Projects
                </h3>

                <p className="mt-1 text-xs text-[#64748b]">
                  Industrial structures & facilities
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden items-center justify-center gap-3 pb-3 pt-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#94a3b8] md:flex">
          <span className="h-px w-10 bg-[#dce8f0]" />
          Explore Project Work
          <span className="h-px w-10 bg-[#dce8f0]" />
        </div>
      </div>
    </section>
  );
}