// =============================
// 📁 components/services/ServicesGrid.jsx
// PREMIUM PROFESSIONAL SERVICES SECTION
// =============================

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Terrace Waterproofing",
    description:
      "Protect your terrace from leakage and water seepage with advanced waterproofing systems.",
    image: "/Services/terrace_waterproofing.jpg",
    featured: true,
  },
  {
    id: "02",
    title: "Bathroom Waterproofing",
    description:
      "Prevent dampness, leakage and moisture issues in bathrooms and wet areas.",
    image: "/Services/bathroom_waterproofing.jpg",
  },
  {
    id: "03",
    title: "Exterior Wall Waterproofing",
    description:
      "Protect exterior walls from rainwater penetration and weather damage.",
    image: "/Services/exterior_wall_waterproofing.jpg",
  },
  {
    id: "04",
    title: "Rising Dampness Treatment",
    description:
      "Stop moisture rising through walls and protect interior surfaces.",
    image: "/Services/rising_waterproofing.jpg",
  },
  {
    id: "05",
    title: "Basement Waterproofing",
    description:
      "Keep basements dry and secure with long-lasting waterproofing solutions.",
    image: "/Services/basement_waterproofings.jpg",
  },
  {
    id: "06",
    title: "Swimming Pool Waterproofing",
    description:
      "Complete waterproofing solutions for pools, tanks and water-retaining structures.",
    image: "/Services/swimming_pool_waterproofing.jpg",
  },
  {
    id: "07",
    title: "PU Injection Grouting",
    description:
      "Seal cracks and joints effectively using polyurethane injection technology.",
    image: "/Services/puinjection.jpg",
  },
  {
    id: "08",
    title: "Expansion Joint Sealing",
    description:
      "Flexible sealing systems for expansion joints in buildings and structures.",
    image: "/Services/expansion_joint_sealing.jpg",
  },
  {
    id: "09",
    title: "Roof Waterproofing",
    description:
      "Protect roofs from leakage, seepage and weather-related deterioration.",
    image: "/Services/roof_waterproofing.jpg",
  },
];

export default function ServicesGrid() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-10 md:py-12 lg:py-14">
      <div className="container-chandan">

        {/* =================================
            SECTION INTRO
        ================================= */}
        <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">

          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-[#015696]" />

              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#015696]">
                What We Do
              </span>
            </div>

            <h2 className="max-w-3xl text-3xl font-bold leading-[1.1] tracking-tight text-[#092a43] md:text-4xl lg:text-5xl">
              Waterproofing solutions for
              <span className="text-[#015696]"> every critical area.</span>
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-base leading-7 text-[#64748b] md:text-lg">
              From terraces and roofs to bathrooms, basements and structural
              joints, our services address different sources of leakage,
              seepage and moisture.
            </p>
          </div>
        </div>

        {/* =================================
            SERVICE GRID
        ================================= */}
        <div className="grid gap-5 lg:grid-cols-2">

          {/* =================================
              FEATURED SERVICE
          ================================= */}
          <article className="group relative min-h-[470px] overflow-hidden rounded-[24px] border border-[#dce8f0] bg-white lg:row-span-2">

            {/* Image */}
            <div className="absolute inset-0">
              <Image
                src={services[0].image}
                alt={services[0].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#061b2b]/90 via-[#061b2b]/35 to-transparent" />

            {/* Number */}
            <div className="absolute right-6 top-5 text-6xl font-bold tracking-tight text-white/15">
              {services[0].id}
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">

              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#46a9d8]" />

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  Featured Service
                </span>
              </div>

              <h3 className="max-w-xl text-2xl font-bold leading-tight text-white md:text-3xl">
                {services[0].title}
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/70 md:text-base">
                {services[0].description}
              </p>

              <Link
                href="/services"
                className="group/link mt-6 inline-flex items-center gap-3 text-sm font-semibold text-white"
              >
                Explore Service

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 transition-all duration-300 group-hover/link:bg-white group-hover/link:text-[#092a43]">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>

            </div>
          </article>

          {/* =================================
              SECONDARY SERVICES
          ================================= */}
          {services.slice(1).map((service) => (
            <article
              key={service.id}
              className="group grid overflow-hidden rounded-[24px] border border-[#dce8f0] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#b9d8e8] hover:shadow-[0_16px_45px_rgba(9,42,67,0.08)] sm:grid-cols-[190px_1fr]"
            >

              {/* Image */}
              <div className="relative min-h-[190px] overflow-hidden sm:min-h-[210px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  sizes="(max-width: 640px) 100vw, 190px"
                />

                <div className="absolute inset-0 bg-[#092a43]/10" />

                <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg bg-white/90 text-[11px] font-bold text-[#015696] backdrop-blur-sm">
                  {service.id}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between p-6">

                <div>
                  <h3 className="text-lg font-bold leading-snug text-[#092a43]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#64748b]">
                    {service.description}
                  </p>
                </div>

                <Link
                  href="/services"
                  className="group/link mt-5 inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#015696]"
                >
                  View Details

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                </Link>

              </div>
            </article>
          ))}
        </div>

        {/* =================================
            SERVICE SCOPE STRIP
        ================================= */}
        <div className="mt-8 grid overflow-hidden rounded-[20px] border border-[#dce8f0] bg-white sm:grid-cols-3">

          <div className="flex items-center gap-3 border-b border-[#e8f0f5] px-6 py-5 sm:border-b-0 sm:border-r">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-[#015696]" />

            <div>
              <p className="text-sm font-semibold text-[#092a43]">
                Residential
              </p>

              <p className="mt-0.5 text-xs text-[#64748b]">
                Homes & apartments
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 border-b border-[#e8f0f5] px-6 py-5 sm:border-b-0 sm:border-r">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-[#015696]" />

            <div>
              <p className="text-sm font-semibold text-[#092a43]">
                Commercial
              </p>

              <p className="mt-0.5 text-xs text-[#64748b]">
                Offices & buildings
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-6 py-5">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-[#015696]" />

            <div>
              <p className="text-sm font-semibold text-[#092a43]">
                Industrial
              </p>

              <p className="mt-0.5 text-xs text-[#64748b]">
                Industrial properties
              </p>
            </div>
          </div>

        </div>

        {/* =================================
            BOTTOM CTA
        ================================= */}
        <div className="mt-8 flex flex-col gap-6 rounded-[22px] bg-[#092a43] px-7 py-7 md:flex-row md:items-center md:justify-between md:px-9">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#46a9d8]">
              Need Waterproofing?
            </p>

            <h3 className="mt-2 text-xl font-bold text-white md:text-2xl">
              Discuss the right solution for your property.
            </h3>
          </div>

          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#092a43] transition-all duration-300 hover:bg-[#eef8fd]"
          >
            Get in Touch

            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>

        </div>

      </div>
    </section>
  );
}