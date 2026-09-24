"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  MessageSquareText,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Expert & Skilled Team",
    description:
      "Experienced professionals focused on proper inspection, preparation and waterproofing execution.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Premium Quality Materials",
    description:
      "We focus on suitable, quality-focused materials for dependable waterproofing and leakage protection.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "On-Time Project Delivery",
    description:
      "A structured work approach helps keep projects organized and completed efficiently.",
  },
  {
    number: "04",
    icon: FileCheck2,
    title: "Transparent Pricing",
    description:
      "Clear communication about the required work and service scope before execution begins.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Warranty Assurance",
    description:
      "Warranty options can be discussed according to the waterproofing service and project requirements.",
  },
  {
    number: "06",
    icon: MessageSquareText,
    title: "Proven Work Approach",
    description:
      "From inspection to completion, every project follows a structured and customer-focused process.",
  },
];

export default function WhyTrustSection() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#1687C5]/[0.045] blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#46A9D8]/[0.05] blur-[110px]"
      />

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.28]
          [background-image:linear-gradient(#DCEFF7_1px,transparent_1px),linear-gradient(90deg,#DCEFF7_1px,transparent_1px)]
          [background-size:64px_64px]
          [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-10 flex flex-col gap-6 border-b border-[#DCEFF7] pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[820px]">
            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#1687C5]" />

              <span className="text-[11px] font-bold uppercase tracking-[2.8px] text-[#1687C5]">
                Why Chandan Enterprise
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold leading-[1.12] tracking-[-1.2px] text-[#12324A] sm:text-4xl lg:text-[46px]">
              Reliable Waterproofing.
              <span className="block text-[#1687C5]">
                Built Around Proper Execution.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-[720px] text-[15px] leading-7 text-[#64748B] sm:text-base">
              We approach waterproofing as a structured service — from
              understanding the problem and preparing the affected area to
              selecting a suitable treatment and completing the work carefully.
            </p>
          </div>

          {/* About Link */}
          <Link
            href="/about"
            className="
              group
              inline-flex
              w-fit
              shrink-0
              items-center
              gap-3
              text-sm
              font-bold
              text-[#1687C5]
              transition-colors
              duration-300
              hover:text-[#0B6FA8]
            "
          >
            <span>Learn About Us</span>

            <span
              className="
                flex h-9 w-9
                items-center justify-center
                rounded-full
                border border-[#BFDCEB]
                bg-white
                transition-all duration-300
                group-hover:border-[#1687C5]
                group-hover:bg-[#1687C5]
                group-hover:text-white
              "
            >
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </span>
          </Link>
        </div>

        {/* =====================================================
            TRUST GRID
        ====================================================== */}

        <div className="grid overflow-hidden rounded-[24px] border border-[#DCEFF7] bg-white shadow-[0_12px_45px_rgba(18,50,74,0.06)] sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.number}
                className={`
                  group
                  relative
                  p-6
                  transition-all
                  duration-300
                  hover:bg-[#F8FCFE]
                  sm:p-7
                  lg:p-8

                  ${
                    index % 3 !== 2
                      ? "lg:border-r lg:border-[#DCEFF7]"
                      : ""
                  }

                  ${
                    index < 3
                      ? "lg:border-b lg:border-[#DCEFF7]"
                      : ""
                  }

                  ${
                    index === 0 || index === 2 || index === 4
                      ? "sm:border-r sm:border-[#DCEFF7] lg:border-r"
                      : ""
                  }

                  ${
                    index < 4
                      ? "sm:border-b sm:border-[#DCEFF7] lg:border-b-0"
                      : ""
                  }
                `}
              >
                {/* Hover Accent */}
                <span
                  className="
                    absolute left-0 top-0
                    h-full w-[3px]
                    origin-top
                    scale-y-0
                    bg-[#1687C5]
                    transition-transform duration-300
                    group-hover:scale-y-100
                  "
                />

                {/* Top */}
                <div className="flex items-start justify-between">
                  {/* Icon */}
                  <div
                    className="
                      flex h-11 w-11
                      items-center justify-center
                      rounded-xl
                      border border-[#D5ECF6]
                      bg-[#EFF9FE]
                      transition-all duration-300
                      group-hover:border-[#1687C5]
                      group-hover:bg-[#1687C5]
                    "
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.9}
                      className="
                        text-[#1687C5]
                        transition-colors duration-300
                        group-hover:text-white
                      "
                    />
                  </div>

                  {/* Number */}
                  <span
                    className="
                      text-[11px]
                      font-bold
                      tracking-[1.8px]
                      text-[#B4C8D4]
                      transition-colors duration-300
                      group-hover:text-[#1687C5]
                    "
                  >
                    {reason.number}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-6">
                  <h3
                    className="
                      text-[18px]
                      font-bold
                      leading-[1.3]
                      tracking-[-0.25px]
                      text-[#12324A]
                      transition-colors duration-300
                      group-hover:text-[#1687C5]
                    "
                  >
                    {reason.title}
                  </h3>

                  <p className="mt-2.5 max-w-[360px] text-[13px] leading-[1.7] text-[#64748B]">
                    {reason.description}
                  </p>
                </div>

                {/* Bottom Indicator */}
                <div className="mt-6 flex items-center gap-2">
                  <span
                    className="
                      flex h-6 w-6
                      items-center justify-center
                      rounded-full
                      bg-[#EFF9FE]
                    "
                  >
                    <CheckCircle2
                      size={14}
                      strokeWidth={2.2}
                      className="text-[#1687C5]"
                    />
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[1px] text-[#8AA0AE]">
                    Customer-focused service
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            TRUST FOOTER
        ====================================================== */}

        <div
          className="
            mt-5
            flex
            flex-col
            gap-5
            rounded-[20px]
            border
            border-[#DCEFF7]
            bg-[#F8FCFE]
            p-5
            sm:p-6
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          {/* Trust Points */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
            {/* Item */}
            <div className="flex items-center gap-3">
              <span
                className="
                  flex h-9 w-9 shrink-0
                  items-center justify-center
                  rounded-lg
                  bg-white
                  shadow-[0_4px_12px_rgba(18,50,74,0.06)]
                "
              >
                <CheckCircle2
                  size={17}
                  className="text-[#1687C5]"
                />
              </span>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-[1px] text-[#8AA0AE]">
                  Focus
                </p>
                <p className="mt-0.5 text-sm font-bold text-[#12324A]">
                  Waterproofing
                </p>
              </div>
            </div>

            {/* Item */}
            <div className="flex items-center gap-3">
              <span
                className="
                  flex h-9 w-9 shrink-0
                  items-center justify-center
                  rounded-lg
                  bg-white
                  shadow-[0_4px_12px_rgba(18,50,74,0.06)]
                "
              >
                <ShieldCheck
                  size={17}
                  className="text-[#1687C5]"
                />
              </span>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-[1px] text-[#8AA0AE]">
                  Approach
                </p>
                <p className="mt-0.5 text-sm font-bold text-[#12324A]">
                  Quality Focused
                </p>
              </div>
            </div>

            {/* Item */}
            <div className="flex items-center gap-3">
              <span
                className="
                  flex h-9 w-9 shrink-0
                  items-center justify-center
                  rounded-lg
                  bg-white
                  shadow-[0_4px_12px_rgba(18,50,74,0.06)]
                "
              >
                <MessageSquareText
                  size={17}
                  className="text-[#1687C5]"
                />
              </span>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-[1px] text-[#8AA0AE]">
                  Service
                </p>
                <p className="mt-0.5 text-sm font-bold text-[#12324A]">
                  Clear Communication
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="
              group
              inline-flex
              shrink-0
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-[#1687C5]
              px-5
              py-3
              text-sm
              font-bold
              text-white
              shadow-[0_8px_22px_rgba(22,135,197,0.18)]
              transition-all
              duration-300
              hover:bg-[#0B6FA8]
              hover:shadow-[0_12px_28px_rgba(22,135,197,0.25)]
            "
          >
            Get Free Inspection

            <ArrowRight
              size={17}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}