// =============================
// 📁 components/services/HeroService.jsx
// CLEAN PROFESSIONAL LIGHT HERO
// =============================

"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Droplets,
  ShieldCheck,
} from "lucide-react";

const serviceHighlights = [
  "Terrace Waterproofing",
  "Bathroom Leakage",
  "Exterior Wall Protection",
  "Basement Waterproofing",
];

export default function HeroService() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-10 md:py-12 lg:py-14">
      {/* Subtle Background Detail */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[35%] bg-[#eef8fd]" />

      <div className="container-chandan relative">

        {/* =========================
            MAIN HERO
        ========================= */}
        <div className="grid items-center gap-12 py-16 md:py-20 lg:min-h-[610px] lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:py-24">

          {/* =========================
              LEFT CONTENT
          ========================= */}
          <div className="relative z-10 max-w-2xl">

            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#015696]" />

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#015696]">
                Our Services
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-[#092a43] sm:text-5xl md:text-[54px] lg:text-[60px]">
              Waterproofing solutions
              <span className="block text-[#015696]">
                built around your property.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-[#64748b] md:text-lg">
              From terrace leakage to basement dampness, Chandan Enterprises
              provides practical waterproofing and leakage-protection
              solutions based on the condition of each property.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#015696] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0b3f67]"
              >
                Discuss Your Requirement

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#service-list"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#cfdfe8] bg-white px-6 py-3.5 text-sm font-semibold text-[#092a43] transition-all duration-300 hover:border-[#015696] hover:text-[#015696]"
              >
                View Services
              </Link>
            </div>

            {/* Small Trust Points */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              <div className="flex items-center gap-2 text-sm text-[#475569]">
                <CheckCircle2 className="h-4 w-4 text-[#015696]" />
                Property-focused solutions
              </div>

              <div className="flex items-center gap-2 text-sm text-[#475569]">
                <CheckCircle2 className="h-4 w-4 text-[#015696]" />
                Residential & commercial
              </div>
            </div>
          </div>

          {/* =========================
              RIGHT IMAGE
          ========================= */}
          <div className="relative z-10">

            <div className="overflow-hidden rounded-2xl border border-[#dce8f0] bg-white p-2 shadow-[0_15px_45px_rgba(9,42,67,0.08)]">
              <div className="relative aspect-[1.08/1] overflow-hidden rounded-xl">

                <Image
                  src="/about/terrace_waterproofing.jpg"
                  alt="Terrace waterproofing service by Chandan Enterprises"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#061b2b]/70 to-transparent p-6 pt-20">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                      <Droplets className="h-5 w-5 text-[#015696]" />
                    </div>

                    <div>
                      <p className="text-xs font-medium text-white/70">
                        Service Focus
                      </p>

                      <p className="text-sm font-semibold text-white">
                        Waterproofing & Leakage Protection
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* =========================
            SERVICE HIGHLIGHTS
        ========================= */}
        <div
          id="service-list"
          className="border-t border-[#dce8f0] py-8"
        >
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#015696]">
                Core Services
              </p>

              <h2 className="mt-1 text-xl font-bold text-[#092a43]">
                Protection for key problem areas
              </h2>
            </div>

            <ShieldCheck className="hidden h-6 w-6 text-[#015696] sm:block" />
          </div>

          <div className="grid border-y border-[#dce8f0] sm:grid-cols-2 lg:grid-cols-4">
            {serviceHighlights.map((service, index) => (
              <div
                key={service}
                className={`
                  flex items-center gap-3 px-4 py-5
                  ${index !== 0 ? "border-t border-[#dce8f0] sm:border-l sm:border-t-0" : ""}
                  ${index === 2 ? "lg:border-l" : ""}
                  ${index === 3 ? "lg:border-l" : ""}
                `}
              >
                <span className="text-xs font-semibold text-[#015696]">
                  0{index + 1}
                </span>

                <span className="text-sm font-medium text-[#475569]">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}