"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Droplets,
  ShieldCheck,
  CheckCircle2,
  ScanSearch,
} from "lucide-react";

export default function BeforeAfterSection() {
  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-12 lg:py-14">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#eef8fd] blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#f1f8fc] blur-3xl" />

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
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#dce8f0] bg-[#f7f9fc] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#015696]">
            <ScanSearch size={15} />
            Project Transformation
          </div>

          <h2 className="text-3xl font-bold leading-tight text-[#092a43] sm:text-4xl md:text-5xl">
            See the difference proper
            <span className="text-[#015696]"> waterproofing can make.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#64748b] md:text-lg">
            A well-planned waterproofing treatment starts with understanding
            the source of leakage, preparing the affected surface and applying
            the appropriate protection system.
          </p>
        </div>

        {/* Before / After */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* BEFORE */}
          <div className="overflow-hidden rounded-[24px] border border-[#dce8f0] bg-[#f7f9fc] shadow-[0_10px_30px_rgba(9,42,67,0.06)]">
            {/* Image */}
            <div className="relative h-[280px] overflow-hidden sm:h-[340px]">
              <Image
                src="/Services/before.jpg"
                alt="Water leakage and surface damage before waterproofing"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#061b2b]/80 via-[#061b2b]/10 to-transparent" />

              {/* Label */}
              <div className="absolute left-5 top-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#092a43] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  Before Treatment
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                  Existing Condition
                </p>

                <h3 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                  Leakage & Surface Damage
                </h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-7">
              <p className="text-sm leading-6 text-[#64748b]">
                Water ingress can appear through visible leakage, damp patches,
                cracks, staining or moisture-related surface deterioration.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                <div className="flex items-center gap-3 rounded-xl border border-[#e8f0f5] bg-white px-4 py-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eef8fd] text-[#015696]">
                    <Droplets size={17} />
                  </span>

                  <span className="text-sm font-medium text-[#334155]">
                    Water Leakage
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-[#e8f0f5] bg-white px-4 py-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eef8fd] text-[#015696]">
                    <ShieldCheck size={17} />
                  </span>

                  <span className="text-sm font-medium text-[#334155]">
                    Surface Damage
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-[#e8f0f5] bg-white px-4 py-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eef8fd] text-[#015696]">
                    <Droplets size={17} />
                  </span>

                  <span className="text-sm font-medium text-[#334155]">
                    Moisture Issues
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* AFTER */}
          <div className="overflow-hidden rounded-[24px] border border-[#b9ddec] bg-[#092a43] shadow-[0_16px_45px_rgba(9,42,67,0.14)]">
            {/* Image */}
            <div className="relative h-[280px] overflow-hidden sm:h-[340px]">
              <Image
                src="/Services/after.jpg"
                alt="Waterproofed surface after treatment"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#061b2b]/90 via-[#061b2b]/20 to-transparent" />

              {/* Label */}
              <div className="absolute left-5 top-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#015696] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white">
                  <span className="h-2 w-2 rounded-full bg-white" />
                  After Treatment
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                  Protected Condition
                </p>

                <h3 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                  Treated & Protected
                </h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-7">
              <p className="text-sm leading-6 text-white/70">
                The appropriate waterproofing system helps address moisture
                entry and creates a more protected surface based on the
                property's condition and treatment requirements.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#015696] text-white">
                    <CheckCircle2 size={17} />
                  </span>

                  <span className="text-sm font-medium text-white">
                    Treated Surface
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#015696] text-white">
                    <ShieldCheck size={17} />
                  </span>

                  <span className="text-sm font-medium text-white">
                    Water Protection
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#015696] text-white">
                    <CheckCircle2 size={17} />
                  </span>

                  <span className="text-sm font-medium text-white">
                    Improved Durability
                  </span>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-7 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
                    Need Waterproofing?
                  </p>

                  <p className="mt-1 text-sm text-white/80">
                    Discuss your property requirement.
                  </p>
                </div>

                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#092a43] transition-all duration-300 hover:bg-[#eef8fd]"
                >
                  Discuss Requirement

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Information Strip */}
        <div className="mt-8 grid overflow-hidden rounded-[20px] border border-[#dce8f0] bg-[#f7f9fc] md:grid-cols-3">
          <div className="border-b border-[#dce8f0] px-6 py-6 md:border-b-0 md:border-r">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#015696]">
              Step 01
            </p>

            <h4 className="mt-2 font-semibold text-[#092a43]">
              Identify the Issue
            </h4>

            <p className="mt-1 text-sm leading-6 text-[#64748b]">
              Understand where and how water is entering the property.
            </p>
          </div>

          <div className="border-b border-[#dce8f0] px-6 py-6 md:border-b-0 md:border-r">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#015696]">
              Step 02
            </p>

            <h4 className="mt-2 font-semibold text-[#092a43]">
              Select the Treatment
            </h4>

            <p className="mt-1 text-sm leading-6 text-[#64748b]">
              Choose the waterproofing approach according to the site
              condition.
            </p>
          </div>

          <div className="px-6 py-6">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#015696]">
              Step 03
            </p>

            <h4 className="mt-2 font-semibold text-[#092a43]">
              Execute & Inspect
            </h4>

            <p className="mt-1 text-sm leading-6 text-[#64748b]">
              Complete the treatment and review the finished surface.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}