"use client";

import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Droplets,
  ShieldCheck,
  PhoneCall,
  MessageCircle,
  MapPin,
  Waves,
  Clock3,
  BadgeCheck,
} from "lucide-react";

export default function HeroSection() {
  const trustPoints = [
    "Professional Site Inspection",
    "Quality Waterproofing Materials",
    "Experienced Execution",
    "Residential & Commercial",
  ];

  return (
    <section className="relative overflow-hidden bg-[#061b2b] ">
      {/* =========================================================
          PREMIUM BACKGROUND
      ========================================================= */}

      {/* Main gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(1,109,181,0.28),transparent_32%),radial-gradient(circle_at_10%_80%,rgba(1,86,150,0.22),transparent_30%),linear-gradient(135deg,#061b2b_0%,#092a43_48%,#0b3f67_100%)]"
      />

      {/* Soft blue glow */}
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#1687c5]/15 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-60 -left-40 h-[550px] w-[550px] rounded-full bg-[#016db5]/15 blur-[110px]"
      />

      {/* Decorative circles */}
      <div
        aria-hidden="true"
        className="absolute right-[8%] top-[12%] hidden h-40 w-40 rounded-full border border-white/10 lg:block"
      />

      <div
        aria-hidden="true"
        className="absolute right-[11%] top-[17%] hidden h-24 w-24 rounded-full border border-white/10 lg:block"
      />

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="container-chandan relative z-10">
        <div className="grid min-h-[720px] items-center gap-12 py-14 sm:py-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:py-20">
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <div className="max-w-2xl">
            {/* Location Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-xs font-bold tracking-wide text-white/90 shadow-lg backdrop-blur-md sm:text-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1687c5]/20">
                <MapPin
                  size={14}
                  className="text-[#46a9d8]"
                  strokeWidth={2.5}
                />
              </span>

              Waterproofing Services in Ahmedabad
            </div>

            {/* Main Heading */}
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.06] tracking-[-0.04em] text-white sm:text-5xl lg:text-[60px] xl:text-[64px]">
              Stop Water Leakage.
              <br />

              <span className="bg-gradient-to-r from-[#46a9d8] via-[#7bc8ea] to-white bg-clip-text text-transparent">
                Protect Your Property.
              </span>
            </h1>

            {/* Supporting text */}
            <p className="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Professional waterproofing solutions for terraces, bathrooms,
              walls, balconies, basements and commercial properties. We focus
              on proper inspection, surface preparation and systematic
              waterproofing treatment.
            </p>

            {/* =================================================
                CTA BUTTONS
            ================================================= */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#enquiry"
                className="group inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-[#1687c5] px-7 text-[15px] font-bold text-white shadow-[0_12px_35px_rgba(1,109,181,0.30)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#016db5] hover:shadow-[0_18px_45px_rgba(1,109,181,0.38)]"
              >
                Get Free Inspection

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="https://wa.me/919649957698"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.07] px-7 text-[15px] font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/12"
              >
                <MessageCircle size={18} />

                WhatsApp Us
              </a>
            </div>

            {/* =================================================
                TRUST POINTS
            ================================================= */}

            <div className="mt-9 grid max-w-xl grid-cols-1 gap-x-7 gap-y-3 sm:grid-cols-2">
              {trustPoints.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 text-sm font-medium text-white/75"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1687c5]/20">
                    <CheckCircle2
                      size={14}
                      className="text-[#46a9d8]"
                    />
                  </span>

                  {item}
                </div>
              ))}
            </div>

            {/* =================================================
                CONTACT STRIP
            ================================================= */}

            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-white/10 pt-6">
              {/* Phone */}
              <a
                href="tel:+919649957698"
                className="group flex items-center gap-3"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.07] text-[#46a9d8] transition-all duration-300 group-hover:bg-[#1687c5] group-hover:text-white">
                  <PhoneCall size={17} />
                </span>

                <span>
                  <span className="block text-[11px] font-medium text-white/40">
                    Talk to our team
                  </span>

                  <span className="text-sm font-bold text-white transition-colors group-hover:text-[#46a9d8]">
                    Call for Inspection
                  </span>
                </span>
              </a>

              {/* Availability */}
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.07] text-[#46a9d8]">
                  <Clock3 size={17} />
                </span>

                <span>
                  <span className="block text-[11px] font-medium text-white/40">
                    Service Support
                  </span>

                  <span className="text-sm font-bold text-white">
                    Discuss Your Requirement
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT VISUAL
          ===================================================== */}

          <div className="relative mx-auto w-full max-w-[600px] lg:ml-auto">
            {/* Glow behind image */}
            <div
              aria-hidden="true"
              className="absolute -inset-5 rounded-[40px] bg-[#1687c5]/15 blur-3xl"
            />

            {/* Image frame */}
            <div className="relative">
              <div className="overflow-hidden rounded-[30px] border border-white/15 bg-[#092a43] p-2 shadow-[0_35px_100px_rgba(0,0,0,0.30)]">
                <div className="relative min-h-[530px] overflow-hidden rounded-[24px] bg-[#092a43]">
                  {/* Actual Image */}
                  <img
                    src="/About/terrace_waterproofing.jpg"
                    alt="Professional waterproofing service in Ahmedabad"
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  {/* Dark image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061b2b] via-[#061b2b]/20 to-[#061b2b]/5" />

                  {/* Blue tint */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#015696]/15 via-transparent to-[#061b2b]/30" />

                  {/* ===========================================
                      TOP IMAGE BADGE
                  =========================================== */}

                  <div className="absolute left-5 top-5">
                    <div className="flex items-center gap-2 rounded-full border border-white/15 bg-[#061b2b]/65 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur-xl">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1687c5]">
                        <Droplets size={13} />
                      </span>

                      Complete Waterproofing Solutions
                    </div>
                  </div>

                  {/* ===========================================
                      IMAGE BOTTOM CONTENT
                  =========================================== */}

                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <div className="max-w-md">
                      <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#7bc8ea]">
                        <span className="h-px w-7 bg-[#46a9d8]" />

                        Property Protection
                      </div>

                      <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                        Keep Water Out.
                        <br />
                        Keep Your Property Protected.
                      </h2>

                      <p className="mt-3 text-sm leading-6 text-white/65">
                        Inspection, preparation, waterproofing treatment and
                        project support from one professional team.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

        
        

              {/* Decorative water drops */}
              <div
                aria-hidden="true"
                className="absolute -bottom-10 -left-8 hidden h-20 w-20 rounded-full border border-white/10 lg:block"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-5 -left-3 hidden h-8 w-8 rounded-full bg-[#1687c5]/20 lg:block"
              />
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM WAVE / TRANSITION
      ========================================================= */}

      <div className="relative h-20">
        <div className="absolute inset-x-0 bottom-0 h-20 bg-[#f7f9fc] [clip-path:ellipse(75%_100%_at_50%_100%)]" />
      </div>
    </section>
  );
}