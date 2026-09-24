"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Search,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export default function CaseStudySection() {
  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-12 lg:py-14">
      {/* Background Accent */}
      <div className="pointer-events-none absolute -right-40 top-[-150px] h-[500px] w-[500px] rounded-full bg-[#eef8fd] blur-[120px]" />

      <div className="container-chandan relative z-10">
        {/* Section Header */}
        <div className="mb-12 max-w-3xl md:mb-14">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#015696]" />

            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#015696]">
              Requirement Spotlight
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight text-[#092a43] md:text-4xl lg:text-5xl">
            Every waterproofing requirement
            <span className="block text-[#015696]">
              starts with the right assessment.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#64748b] md:text-base">
            Water-related issues can appear differently across roofs,
            terraces, walls, bathrooms and other areas. Understanding the
            affected surface is an important first step before selecting a
            suitable treatment approach.
          </p>
        </div>

        {/* Main Feature */}
        <div className="grid overflow-hidden rounded-[28px] border border-[#dce8f0] bg-[#f7f9fc] lg:grid-cols-[0.95fr_1.05fr]">
          {/* Image */}
          <div className="relative min-h-[400px] overflow-hidden lg:min-h-[620px]">
            <Image
              src="/Services/roof_waterproofing.jpg"
              alt="Roof waterproofing requirement"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#092a43]/70 via-transparent to-transparent" />

            {/* Image Label */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="inline-flex rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  Commercial & Industrial
                </span>

                <p className="mt-3 text-lg font-semibold text-white">
                  Roof Waterproofing
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#092a43]">
                <ShieldCheck size={18} />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-7 md:p-10 lg:p-14">
            <div className="mb-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#94a3b8]">
                Example Requirement
              </p>

              <h3 className="mt-3 text-2xl font-bold leading-tight text-[#092a43] md:text-3xl">
                Commercial Roof Waterproofing
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#64748b]">
                Roofs exposed to weather conditions can require careful
                attention when leakage, moisture or surface deterioration is
                noticed. The suitable treatment depends on the actual site
                condition.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-0">
              {/* Step 01 */}
              <div className="flex gap-5 border-b border-[#dce8f0] py-5 first:pt-0">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef8fd] text-[#015696]">
                  <Search size={18} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#94a3b8]">
                    Step 01
                  </p>

                  <h4 className="mt-1 text-base font-bold text-[#092a43]">
                    Understand the Condition
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-[#64748b]">
                    Inspect the affected roof area and understand visible
                    leakage or moisture-related signs.
                  </p>
                </div>
              </div>

              {/* Step 02 */}
              <div className="flex gap-5 border-b border-[#dce8f0] py-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef8fd] text-[#015696]">
                  <Wrench size={18} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#94a3b8]">
                    Step 02
                  </p>

                  <h4 className="mt-1 text-base font-bold text-[#092a43]">
                    Select the Treatment
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-[#64748b]">
                    Discuss a waterproofing approach appropriate for the
                    surface and identified requirement.
                  </p>
                </div>
              </div>

              {/* Step 03 */}
              <div className="flex gap-5 py-5 last:pb-0">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef8fd] text-[#015696]">
                  <CheckCircle2 size={18} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#94a3b8]">
                    Step 03
                  </p>

                  <h4 className="mt-1 text-base font-bold text-[#092a43]">
                    Execute & Review
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-[#64748b]">
                    Carry out the selected treatment with suitable preparation
                    and review the completed area.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-9 border-t border-[#dce8f0] pt-7">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#015696] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0b3f67]"
              >
                Discuss Your Requirement
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-6 flex items-center gap-3 rounded-[16px] border border-[#dce8f0] bg-[#f1f8fc] px-5 py-4">
          <ShieldCheck
            size={18}
            className="shrink-0 text-[#015696]"
            strokeWidth={1.8}
          />

          <p className="text-xs leading-5 text-[#475569] md:text-sm">
            Waterproofing solutions should be discussed according to the
            property's surface, affected area and actual site condition.
          </p>
        </div>
      </div>
    </section>
  );
}