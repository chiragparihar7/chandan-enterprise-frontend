"use client";

import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  MapPin,
  Navigation,
} from "lucide-react";

const areas = [
  "Ahmedabad",
  "Bopal",
  "South Bopal",
  "Bodakdev",
  "Thaltej",
  "Satellite",
  "Prahladnagar",
  "SG Highway",
  "Vastrapur",
  "Gota",
  "Chandkheda",
  "Shilaj",
  "Shela",
  "Navrangpura",
  "Maninagar",
];

export default function ServiceAreas() {
  return (
    <section className="relative overflow-hidden bg-[#071D2D] py-10 sm:py-12 lg:py-14">
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      {/* Blue Glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-0
          h-[480px]
          w-[480px]
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

      {/* Technical Grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.07]
          [background-image:linear-gradient(#FFFFFF_1px,transparent_1px),linear-gradient(90deg,#FFFFFF_1px,transparent_1px)]
          [background-size:64px_64px]
        "
      />

      {/* Decorative Circle */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-[15%]
          h-[500px]
          w-[500px]
          rounded-full
          border
          border-white/[0.04]
        "
      />

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-14">
          {/* Left */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#46A9D8]" />

              <span className="text-[11px] font-bold uppercase tracking-[2.8px] text-[#8FD3F4]">
                Service Areas
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-[1.1] tracking-[-1.2px] text-white sm:text-4xl lg:text-[46px]">
              Waterproofing
              <span className="block text-[#46A9D8]">
                Across Ahmedabad
              </span>
            </h2>
          </div>

          {/* Right */}
          <div>
            <p className="max-w-[700px] text-[15px] leading-7 text-white/60 sm:text-base lg:ml-auto lg:text-right">
              Chandan Enterprises provides professional waterproofing and
              leakage protection solutions for properties across Ahmedabad and
              nearby areas. Our approach focuses on understanding the source
              of the problem before recommending the appropriate treatment.
            </p>
          </div>
        </div>

        {/* =====================================================
            MAIN LOCATION PANEL
        ====================================================== */}

        <div className="mt-10 overflow-hidden rounded-[26px] border border-white/10 bg-[#0B273A] shadow-[0_20px_60px_rgba(0,0,0,0.18)] lg:mt-12">
          <div className="grid lg:grid-cols-[0.7fr_1.3fr]">
            {/* =================================================
                LOCATION FEATURE
            ================================================== */}

            <div className="relative overflow-hidden border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
              {/* Background circle */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-28
                  -top-28
                  h-72
                  w-72
                  rounded-full
                  border
                  border-[#1687C5]/20
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute
                  -bottom-24
                  -left-20
                  h-60
                  w-60
                  rounded-full
                  bg-[#1687C5]/10
                  blur-[70px]
                "
              />

              <div className="relative z-10">
                {/* Location Icon */}
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#1687C5]
                    text-white
                    shadow-[0_10px_25px_rgba(22,135,197,0.25)]
                  "
                >
                  <MapPin size={27} strokeWidth={1.8} />
                </div>

                {/* Location */}
                <p className="mt-8 text-[10px] font-bold uppercase tracking-[2.2px] text-[#8FD3F4]">
                  Primary Service Location
                </p>

                <h3 className="mt-2 text-3xl font-bold tracking-[-0.5px] text-white sm:text-4xl">
                  Ahmedabad
                </h3>

                <p className="mt-1 text-sm font-medium text-white/45">
                  Gujarat, India
                </p>

                <p className="mt-6 max-w-[390px] text-sm leading-6 text-white/60">
                  Serving residential, commercial and suitable structural
                  waterproofing requirements across Ahmedabad and surrounding
                  localities.
                </p>

                {/* Coverage Count */}
                <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                  <div>
                    <p className="text-2xl font-bold text-white">15+</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[1px] text-white/40">
                      Service Locations
                    </p>
                  </div>

                  <div className="h-9 w-px bg-white/10" />

                  <div>
                    <p className="text-2xl font-bold text-[#46A9D8]">
                      Local
                    </p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[1px] text-white/40">
                      Service Focus
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href="/contact"
                  className="
                    group
                    mt-8
                    inline-flex
                    items-center
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
                    hover:bg-[#46A9D8]
                    hover:shadow-[0_12px_28px_rgba(22,135,197,0.25)]
                  "
                >
                  Request an Inspection

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>

            {/* =================================================
                AREAS GRID
            ================================================== */}

            <div className="p-6 sm:p-8 lg:p-10">
              {/* Header */}
              <div className="flex items-start justify-between gap-5">
                <div>
                  <div className="flex items-center gap-2">
                    <Navigation
                      size={15}
                      className="text-[#46A9D8]"
                    />

                    <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#8FD3F4]">
                      Coverage Network
                    </span>
                  </div>

                  <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                    Areas We Serve
                  </h3>

                  <p className="mt-1.5 text-sm text-white/45">
                    Ahmedabad and nearby localities
                  </p>
                </div>

                <div
                  className="
                    hidden
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    sm:flex
                  "
                >
                  <MapPin
                    size={19}
                    className="text-[#46A9D8]"
                  />
                </div>
              </div>

              {/* Areas */}
              <div className="mt-7 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {areas.map((area, index) => (
                  <div
                    key={area}
                    className="
                      group
                      flex
                      items-center
                      gap-2.5
                      rounded-xl
                      border
                      border-white/[0.08]
                      bg-white/[0.035]
                      px-3
                      py-3
                      transition-all
                      duration-300
                      hover:border-[#1687C5]/50
                      hover:bg-[#1687C5]/10
                    "
                  >
                    <span
                      className="
                        flex
                        h-5
                        w-5
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#1687C5]/10
                        text-[8px]
                        font-bold
                        text-[#46A9D8]
                        transition-colors
                        duration-300
                        group-hover:bg-[#1687C5]
                        group-hover:text-white
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="truncate text-xs font-semibold text-white/65 transition-colors duration-300 group-hover:text-white sm:text-[13px]">
                      {area}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Info */}
              <div className="mt-7 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-[#46A9D8]"
                  />

                  <p className="max-w-[470px] text-xs leading-5 text-white/45">
                    Looking for waterproofing service in an area not listed
                    above? Contact us to discuss your property and service
                    requirement.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="
                    group
                    inline-flex
                    shrink-0
                    items-center
                    gap-2
                    text-xs
                    font-bold
                    text-[#8FD3F4]
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  Contact Us

                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            LOCAL SERVICE NOTE
        ====================================================== */}

        <div className="mt-5 flex items-center justify-center gap-2 text-center">
          <span className="h-1.5 w-1.5 rounded-full bg-[#46A9D8]" />

          <p className="text-[10px] font-bold uppercase tracking-[1.8px] text-white/35 sm:text-[11px]">
            Professional Waterproofing Services · Ahmedabad, Gujarat
          </p>

          <span className="h-1.5 w-1.5 rounded-full bg-[#46A9D8]" />
        </div>
      </div>
    </section>
  );
}