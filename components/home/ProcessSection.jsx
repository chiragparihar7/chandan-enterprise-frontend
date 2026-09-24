"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Droplets,
  Layers,
  Search,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Site Inspection",
    shortTitle: "Inspect",
    description:
      "We begin by understanding the property condition, affected areas and visible signs of leakage or moisture.",
    icon: Search,
  },
  {
    number: "02",
    title: "Leak Detection",
    shortTitle: "Detect",
    description:
      "The affected area is assessed to understand the possible source and extent of water penetration or seepage.",
    icon: Droplets,
  },
  {
    number: "03",
    title: "Surface Preparation",
    shortTitle: "Prepare",
    description:
      "The surface is prepared according to the requirements of the waterproofing treatment and existing condition.",
    icon: Layers,
  },
  {
    number: "04",
    title: "Waterproofing Application",
    shortTitle: "Apply",
    description:
      "The appropriate waterproofing system or leakage treatment is applied based on the property and service requirement.",
    icon: CheckCircle2,
  },
  {
    number: "05",
    title: "Quality Check",
    shortTitle: "Check",
    description:
      "The completed work is checked to ensure the treated area has been properly addressed before the project is concluded.",
    icon: BadgeCheck,
  },
];

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8FCFE] py-10 sm:py-12 lg:py-14">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-80
          w-80
          rounded-full
          bg-[#1687C5]/[0.045]
          blur-[100px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-10
          h-96
          w-96
          rounded-full
          bg-[#46A9D8]/[0.05]
          blur-[110px]
        "
      />

      {/* Subtle technical grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.25]
          [background-image:linear-gradient(#DCEFF7_1px,transparent_1px),linear-gradient(90deg,#DCEFF7_1px,transparent_1px)]
          [background-size:64px_64px]
          [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
        "
      />

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-12 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[760px]">
            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#1687C5]" />

              <span className="text-[11px] font-bold uppercase tracking-[2.8px] text-[#1687C5]">
                Our Process
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold leading-[1.12] tracking-[-1.2px] text-[#12324A] sm:text-4xl lg:text-[46px]">
              A Structured Approach to
              <span className="block text-[#1687C5]">
                Waterproofing
              </span>
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-[700px] text-[15px] leading-7 text-[#64748B] sm:text-base">
              Effective waterproofing starts with understanding the problem.
              Our process focuses on inspection, preparation, application and
              quality checking to address the specific requirements of your
              property.
            </p>
          </div>

          {/* Process Indicator */}
          <div
            className="
              hidden
              shrink-0
              items-center
              gap-3
              rounded-full
              border
              border-[#DCEFF7]
              bg-white
              px-4
              py-2.5
              shadow-[0_6px_20px_rgba(18,50,74,0.05)]
              sm:flex
            "
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EFF9FE]">
              <CheckCircle2
                size={15}
                className="text-[#1687C5]"
              />
            </span>

            <span className="text-xs font-bold uppercase tracking-[1px] text-[#587082]">
              5-Step Process
            </span>
          </div>
        </div>

        {/* =====================================================
            PROCESS TIMELINE
        ====================================================== */}

        <div className="relative">
          {/* Desktop Connecting Line */}
          <div
            aria-hidden="true"
            className="
              absolute
              left-[10%]
              right-[10%]
              top-[35px]
              hidden
              h-px
              bg-[#CFE5F0]
              lg:block
            "
          />

          {/* Progress Line */}
          <div
            aria-hidden="true"
            className="
              absolute
              left-[10%]
              right-[10%]
              top-[35px]
              hidden
              h-px
              bg-gradient-to-r
              from-[#1687C5]
              via-[#46A9D8]
              to-[#1687C5]
              lg:block
            "
          />

          <div className="grid gap-4 lg:grid-cols-5 lg:gap-3">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="
                    group
                    relative
                    rounded-[20px]
                    border
                    border-[#DCEFF7]
                    bg-white
                    p-5
                    shadow-[0_8px_28px_rgba(18,50,74,0.045)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#B9DCEA]
                    hover:shadow-[0_16px_38px_rgba(18,50,74,0.09)]
                    sm:p-6
                    lg:rounded-none
                    lg:border-0
                    lg:bg-transparent
                    lg:p-0
                    lg:shadow-none
                    lg:hover:translate-y-0
                    lg:hover:border-0
                    lg:hover:shadow-none
                  "
                >
                  {/* =================================================
                      MOBILE / TABLET TOP
                  ================================================== */}

                  <div className="flex items-start justify-between lg:hidden">
                    <span
                      className="
                        text-[11px]
                        font-bold
                        tracking-[1.8px]
                        text-[#1687C5]
                      "
                    >
                      STEP {step.number}
                    </span>

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#EFF9FE]
                        text-[#1687C5]
                      "
                    >
                      <Icon size={19} strokeWidth={1.9} />
                    </div>
                  </div>

                  {/* =================================================
                      DESKTOP STEP NODE
                  ================================================== */}

                  <div className="relative hidden lg:flex lg:justify-center">
                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-[70px]
                        w-[70px]
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#CFE5F0]
                        bg-white
                        shadow-[0_6px_20px_rgba(18,50,74,0.06)]
                        transition-all
                        duration-300
                        group-hover:border-[#1687C5]
                        group-hover:shadow-[0_8px_25px_rgba(22,135,197,0.15)]
                      "
                    >
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-full
                          bg-[#EFF9FE]
                          text-[#1687C5]
                          transition-all
                          duration-300
                          group-hover:bg-[#1687C5]
                          group-hover:text-white
                        "
                      >
                        <Icon
                          size={21}
                          strokeWidth={1.8}
                        />
                      </div>
                    </div>
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================== */}

                  <div className="mt-5 lg:mt-7 lg:text-center">
                    {/* Desktop Number */}
                    <div className="hidden lg:block">
                      <span
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[2px]
                          text-[#1687C5]
                        "
                      >
                        Step {step.number}
                      </span>
                    </div>

                    <h3
                      className="
                        mt-1
                        text-[17px]
                        font-bold
                        leading-[1.35]
                        tracking-[-0.2px]
                        text-[#12324A]
                        transition-colors
                        duration-300
                        group-hover:text-[#1687C5]
                        sm:text-lg
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        mt-2.5
                        text-[13px]
                        leading-[1.7]
                        text-[#64748B]
                        lg:mx-auto
                        lg:max-w-[205px]
                      "
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* =================================================
                      MOBILE CONNECTOR
                  ================================================== */}

                  {index < processSteps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="
                        absolute
                        -bottom-4
                        left-1/2
                        hidden
                        h-4
                        w-px
                        -translate-x-1/2
                        bg-[#CFE5F0]
                        sm:block
                        lg:hidden
                      "
                    />
                  )}
                </article>
              );
            })}
          </div>
        </div>

   
      </div>
    </section>
  );
}