"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Droplets,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Terrace Waterproofing",
    shortTitle: "Terrace Protection",
    desc: "Protecting exposed terrace surfaces against water penetration, leakage and moisture-related damage.",
    image: "/about/terrace_waterproofing.jpg",
  },
  {
    number: "02",
    title: "Bathroom Leakage",
    shortTitle: "Wet Area Protection",
    desc: "Waterproofing solutions for bathrooms and wet areas where leakage and seepage can become recurring problems.",
    image: "/about/bathroom_waterproofing.jpg",
  },
  {
    number: "03",
    title: "PU Coating",
    shortTitle: "Surface Protection",
    desc: "Polyurethane-based coating solutions for applications requiring an additional protective waterproofing layer.",
    image: "/about/pu_grouting.jpg",
  },
  {
    number: "04",
    title: "Basement Protection",
    shortTitle: "Seepage Control",
    desc: "Waterproofing approaches designed to help protect basement areas from seepage and moisture penetration.",
    image: "/about/basement_waterproofing.jpg",
  },
];

export default function ServiceExpertise() {
  return (
    <section className="relative overflow-hidden bg-[#F7F9FC] py-10 sm:py-12 lg:py-14">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-[-120px] h-[420px] w-[420px] rounded-full bg-[#EAF5FB] blur-[110px]" />

        <div className="absolute -right-40 bottom-[-150px] h-[420px] w-[420px] rounded-full bg-white blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#092A43 1px, transparent 1px), linear-gradient(90deg, #092A43 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
      </div>

      <div className="container-chandan relative z-10">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-10 grid gap-7 lg:mb-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-[#015696]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#015696]">
                Service Expertise
              </span>
            </div>

            <h2 className="max-w-3xl text-3xl font-bold leading-[1.08] tracking-[-0.04em] text-[#092A43] sm:text-4xl lg:text-[50px]">
              Solutions for the areas
              <span className="text-[#015696]"> that need protection.</span>
            </h2>
          </div>

          <div className="max-w-md lg:pb-1">
            <p className="text-sm leading-7 text-[#64748B]">
              From exposed terraces to wet areas and below-ground spaces, we
              provide waterproofing solutions for different property
              conditions and requirements.
            </p>
          </div>
        </div>

        {/* =====================================================
            FEATURED SERVICE
        ===================================================== */}

        <div className="group relative mb-4 overflow-hidden rounded-[24px] border border-[#DCE8F0] bg-white shadow-[0_10px_35px_rgba(9,42,67,0.06)]">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
            {/* Image */}
            <div className="relative min-h-[300px] overflow-hidden sm:min-h-[390px] lg:min-h-[420px]">
              <Image
                src={services[0].image}
                alt={services[0].title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#061B2B]/65 via-transparent to-transparent" />

              {/* Image label */}
              <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#061B2B]/65 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md">
                  <Droplets size={12} />
                  Featured Solution
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="relative flex flex-col justify-center p-7 sm:p-9 lg:p-10">
              <span className="absolute right-7 top-5 text-[80px] font-extrabold leading-none tracking-[-0.08em] text-[#092A43]/[0.045] sm:right-9 sm:text-[100px]">
                01
              </span>

              <div className="relative">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF8FD] text-[#015696]">
                  <ShieldCheck size={20} strokeWidth={1.8} />
                </div>

                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#015696]">
                  {services[0].shortTitle}
                </p>

                <h3 className="max-w-md text-2xl font-bold leading-tight tracking-[-0.03em] text-[#092A43] sm:text-3xl">
                  {services[0].title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-[#64748B]">
                  {services[0].desc}
                </p>

                <Link
                  href="/services"
                  className="group/link mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#015696]"
                >
                  Explore Service

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#DCE8F0] transition-all duration-300 group-hover/link:border-[#015696] group-hover/link:bg-[#015696] group-hover/link:text-white">
                    <ArrowUpRight size={14} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            3 SERVICE CARDS
        ===================================================== */}

        <div className="grid gap-4 md:grid-cols-3">
          {services.slice(1).map((service) => (
            <Link
              href="/services"
              key={service.number}
              className="group overflow-hidden rounded-[20px] border border-[#DCE8F0] bg-white shadow-[0_6px_22px_rgba(9,42,67,0.045)] transition-all duration-500 hover:-translate-y-1 hover:border-[#BFD8E6] hover:shadow-[0_18px_40px_rgba(9,42,67,0.09)]"
            >
              {/* Image */}
              <div className="relative h-[210px] overflow-hidden sm:h-[230px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.045]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061B2B]/55 via-transparent to-transparent" />

                {/* Number */}
                <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#061B2B]/55 text-[10px] font-bold text-white backdrop-blur-md">
                  {service.number}
                </span>

                {/* Arrow */}
                <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/15 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-[#092A43]">
                  <ArrowUpRight size={15} />
                </span>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#015696]">
                  {service.shortTitle}
                </p>

                <h3 className="text-lg font-bold tracking-[-0.02em] text-[#092A43] sm:text-xl">
                  {service.title}
                </h3>

                <p className="mt-2.5 text-xs leading-6 text-[#64748B]">
                  {service.desc}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-[#E8F0F5] pt-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#94A3B8]">
                    Waterproofing
                  </span>

                  <span className="text-xs font-bold text-[#015696]">
                    View →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* =====================================================
            BOTTOM SERVICE NOTE
        ===================================================== */}

        <div className="mt-5 flex flex-col gap-3 rounded-[18px] border border-[#DCE8F0] bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EEF8FD] text-[#015696]">
              <ShieldCheck size={15} />
            </div>

            <p className="text-xs leading-5 text-[#64748B]">
              Solutions are selected according to the surface, exposure and
              waterproofing requirement.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex shrink-0 items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#015696]"
          >
            View All Services
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}