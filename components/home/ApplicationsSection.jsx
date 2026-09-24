"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Factory,
  Home,
  Waves,
} from "lucide-react";

const applications = [
  {
    number: "01",
    icon: Home,
    title: "Residential Properties",
    description:
      "Waterproofing support for homes, apartments and residential areas affected by terrace, bathroom, wall or roof leakage.",
    image: "/Services/terrace_waterproofing.jpg",
    tag: "Residential",
  },

  {
    number: "02",
    icon: Building2,
    title: "Commercial Properties",
    description:
      "Waterproofing solutions for commercial buildings and areas where leakage, seepage or moisture can affect the property.",
    image: "/Services/roof_waterproofing.jpg",
    tag: "Commercial",
  },

  {
    number: "03",
    icon: Factory,
    title: "Industrial Areas",
    description:
      "Waterproofing requirements for suitable industrial spaces, structures and areas exposed to water ingress or moisture.",
    image: "/Services/basement_waterproofings.jpg",
    tag: "Industrial",
  },

  {
    number: "04",
    icon: Waves,
    title: "Water-Retaining Areas",
    description:
      "Waterproofing requirements for swimming pools and other suitable water-retaining structures.",
    image: "/Services/swimming_pool_waterproofing.jpg",
    tag: "Water Retaining",
  },
];

export default function ApplicationsSection() {
  return (
    <section className="relative overflow-hidden bg-[#071D2D] py-10 sm:py-12 lg:py-14">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      {/* Blue glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#1687C5]/10
          blur-[130px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#46A9D8]/10
          blur-[140px]
        "
      />

      {/* Technical grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.08]
          [background-image:linear-gradient(#FFFFFF_1px,transparent_1px),linear-gradient(90deg,#FFFFFF_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER / INTRO
        ====================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
          {/* Left */}
          <div>
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#46A9D8]" />

              <span className="text-[11px] font-bold uppercase tracking-[2.8px] text-[#8FD3F4]">
                Where We Can Help
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold leading-[1.1] tracking-[-1.3px] text-white sm:text-4xl lg:text-[48px]">
              Waterproofing for
              <span className="mt-1 block text-[#46A9D8]">
                Every Property Type
              </span>
            </h2>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-6 lg:items-end">
            <p className="max-w-[680px] text-[15px] leading-7 text-white/60 sm:text-base lg:text-right">
              Waterproofing requirements vary depending on the property,
              affected area and type of water exposure. Chandan Enterprises
              provides solutions for residential, commercial and suitable
              structural requirements in Ahmedabad.
            </p>

            <Link
              href="/services"
              className="
                group
                inline-flex
                w-fit
                items-center
                gap-3
                text-sm
                font-bold
                text-[#8FD3F4]
                transition-colors
                duration-300
                hover:text-white
              "
            >
              View Waterproofing Services

              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  transition-all
                  duration-300
                  group-hover:border-[#46A9D8]
                  group-hover:bg-[#1687C5]
                "
              >
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          </div>
        </div>

        {/* =====================================================
            DIVIDER
        ====================================================== */}

        <div className="my-10 h-px bg-white/10 lg:my-12" />

        {/* =====================================================
            APPLICATION GRID
        ====================================================== */}

        <div className="grid gap-4 sm:grid-cols-2">
          {applications.map((application) => {
            const Icon = application.icon;

            return (
              <article
                key={application.number}
                className="
                  group
                  relative
                  min-h-[330px]
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-white/10
                  bg-[#0B273A]
                  transition-all
                  duration-500
                  hover:border-[#1687C5]/60
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
                "
              >
                {/* Image */}
                <Image
                  src={application.image}
                  alt={`${application.title} waterproofing services in Ahmedabad`}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-[1.055]
                  "
                  sizes="(max-width: 640px) 100vw, 50vw"
                />

                {/* Image Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#04131F]
                    via-[#04131F]/65
                    to-[#04131F]/10
                  "
                />

                {/* Blue Hover Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-tr
                    from-[#1687C5]/20
                    via-transparent
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Top */}
                <div className="absolute left-5 right-5 top-5 flex items-start justify-between sm:left-6 sm:right-6 sm:top-6">
                  {/* Number */}
                  <span
                    className="
                      text-[11px]
                      font-bold
                      tracking-[2px]
                      text-white/55
                    "
                  >
                    {application.number}
                  </span>

                  {/* Tag */}
                  <span
                    className="
                      rounded-full
                      border
                      border-white/15
                      bg-black/20
                      px-3
                      py-1.5
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[1.3px]
                      text-white/80
                      backdrop-blur-md
                    "
                  >
                    {application.tag}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/15
                      bg-white/10
                      text-[#8FD3F4]
                      backdrop-blur-md
                      transition-all
                      duration-300
                      group-hover:border-[#1687C5]
                      group-hover:bg-[#1687C5]
                      group-hover:text-white
                    "
                  >
                    <Icon size={19} strokeWidth={1.8} />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      mt-4
                      text-xl
                      font-bold
                      tracking-[-0.3px]
                      text-white
                      sm:text-[22px]
                    "
                  >
                    {application.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-2
                      max-w-[560px]
                      text-[13px]
                      leading-[1.65]
                      text-white/60
                    "
                  >
                    {application.description}
                  </p>

                  {/* Bottom Line */}
                  <div className="mt-4 flex items-center gap-2">
                    <span className="h-px w-7 bg-[#1687C5]" />

                    <span className="text-[9px] font-bold uppercase tracking-[1.4px] text-[#8FD3F4]">
                      Waterproofing Solutions
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM SERVICE STRIP
        ====================================================== */}

        <div
          className="
            mt-5
            flex
            flex-col
            gap-5
            rounded-[20px]
            border
            border-white/10
            bg-white/[0.035]
            px-5
            py-5
            backdrop-blur-sm
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:px-6
          "
        >
          {/* Text */}
          <div className="flex items-start gap-3">
            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-lg
                bg-[#1687C5]/15
                text-[#46A9D8]
              "
            >
              <Building2 size={18} strokeWidth={1.8} />
            </div>

            <div>
              <p className="text-sm font-bold text-white">
                Waterproofing services across Ahmedabad
              </p>

              <p className="mt-1 text-xs leading-5 text-white/45">
                Discuss your property, affected area and waterproofing
                requirement with our team.
              </p>
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
              transition-all
              duration-300
              hover:bg-[#46A9D8]
              hover:shadow-[0_10px_25px_rgba(22,135,197,0.25)]
            "
          >
            Get in Touch

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}