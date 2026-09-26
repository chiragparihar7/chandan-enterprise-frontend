"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Droplets,
  ShieldCheck,
} from "lucide-react";

interface ServiceOverviewProps {
  overview: string;
  benefits: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
}

const ServiceOverview: React.FC<ServiceOverviewProps> = ({
  overview,
  benefits,
}) => {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-10 md:py-12 lg:py-14">
      {/* =========================================================
          BACKGROUND DETAILS
      ========================================================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#015696]/[0.045] blur-[100px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#016db5]/[0.05] blur-[100px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#092a43 1px, transparent 1px), linear-gradient(90deg, #092a43 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="container-chandan relative z-10">
        {/* =======================================================
            SECTION HEADER
        ======================================================= */}

        <div className="mb-12 max-w-3xl md:mb-14">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-[#015696]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#015696]">
              Service Overview
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-[#092a43] md:text-4xl lg:text-[46px]">
            Understanding the{" "}
            <span className="text-[#015696]">right protection approach.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#64748b] md:text-base">
            Every waterproofing requirement starts with understanding the
            surface, affected area and condition of the property.
          </p>
        </div>

        {/* =======================================================
            MAIN EDITORIAL GRID
        ======================================================= */}

        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
          {/* =====================================================
              LEFT — OVERVIEW
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[28px] bg-[#092a43] p-7 shadow-[0_20px_60px_rgba(9,42,67,0.12)] md:p-10"
          >
            {/* Decorative Circle */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/[0.06]" />

            <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border border-white/[0.05]" />

            {/* Top Label */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#015696] text-white">
                  <Droplets size={19} strokeWidth={1.7} />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7fb9da]">
                    About This Service
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    Protection by condition
                  </p>
                </div>
              </div>

              <ShieldCheck
                size={24}
                className="text-[#46a9d8]"
                strokeWidth={1.5}
              />
            </div>

            {/* Overview */}
            <div className="relative z-10 mt-9">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6f8b9c]">
                Service Overview
              </p>

              <p className="mt-5 text-base leading-8 text-[#d1dce3] md:text-[17px]">
                {overview}
              </p>
            </div>

            {/* Bottom Statement */}
            <div className="relative z-10 mt-9 border-t border-white/10 pt-6">
              <div className="flex items-start gap-3">
                <CheckCircle2
                  size={17}
                  className="mt-0.5 shrink-0 text-[#46a9d8]"
                  strokeWidth={1.8}
                />

                <p className="text-xs leading-5 text-[#9fb3c0]">
                  The suitable treatment approach depends on the property,
                  surface and water-related condition.
                </p>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT — IMAGE
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative min-h-[380px] overflow-hidden rounded-[28px] bg-[#092a43] shadow-[0_20px_60px_rgba(9,42,67,0.12)] md:min-h-[460px]"
          >
            <Image
              src="/About/terrace_waterproofing.jpg"
              alt="Waterproofing service by Chandan Enterprises"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.025]"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#061b2b]/90 via-[#061b2b]/20 to-transparent" />

            {/* Top Badge */}
            <div className="absolute left-5 top-5 md:left-6 md:top-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#092a43]/65 px-4 py-2 text-[11px] font-semibold text-white backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#46a9d8]" />
                Waterproofing Expertise
              </div>
            </div>

            {/* Bottom Content */}
            <div className="absolute inset-x-5 bottom-5 md:inset-x-6 md:bottom-6">
              <div className="max-w-md">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8bc9e8]">
                  Built Around The Requirement
                </p>

                <h3 className="mt-2 text-xl font-bold text-white md:text-2xl">
                  Protection starts with understanding the affected area.
                </h3>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =======================================================
            BENEFITS HEADER
        ======================================================= */}

        <div className="mt-16 mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#015696]">
              Key Benefits
            </p>

            <h3 className="mt-2 text-2xl font-bold tracking-[-0.02em] text-[#092a43] md:text-3xl">
              What this service is designed to address.
            </h3>
          </div>

          <p className="max-w-md text-xs leading-5 text-[#64748b] md:text-right">
            Benefits can vary depending on the existing surface condition,
            treatment system and project scope.
          </p>
        </div>

        {/* =======================================================
            BENEFITS GRID
        ======================================================= */}

        <div className="grid gap-4 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <motion.div
              key={`${benefit.title}-${index}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group relative overflow-hidden rounded-[22px] border border-[#dce8f0] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#b9dced] hover:shadow-[0_15px_40px_rgba(9,42,67,0.08)] md:p-7"
            >
              {/* Number */}
              <div className="absolute right-5 top-4 text-5xl font-bold tracking-[-0.06em] text-[#092a43]/[0.035] transition-colors duration-300 group-hover:text-[#015696]/[0.06]">
                0{index + 1}
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eef8fd] text-[#015696] transition-all duration-300 group-hover:bg-[#015696] group-hover:text-white">
                  <CheckCircle2 size={19} strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h4 className="mt-5 max-w-sm text-lg font-bold text-[#092a43]">
                  {benefit.title}
                </h4>

                {/* Description */}
                <p className="mt-2 max-w-lg text-sm leading-6 text-[#64748b]">
                  {benefit.description}
                </p>

                {/* Bottom Accent */}
                <div className="mt-5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#94a3b8] transition-colors duration-300 group-hover:text-[#015696]">
                  <span className="h-px w-6 bg-[#dce8f0] transition-all duration-300 group-hover:w-10 group-hover:bg-[#015696]" />

                  Service Benefit

                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* =======================================================
            BOTTOM INFO BAR
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex flex-col gap-5 rounded-[22px] border border-[#dce8f0] bg-white px-6 py-5 shadow-[0_8px_25px_rgba(9,42,67,0.035)] md:flex-row md:items-center md:justify-between md:px-7"
        >
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#eef8fd] text-[#015696]">
              <ShieldCheck size={16} strokeWidth={1.8} />
            </div>

            <div>
              <p className="text-xs font-semibold text-[#092a43]">
                Need help choosing the right treatment?
              </p>

              <p className="mt-1 text-[11px] text-[#64748b]">
                Share your property condition and discuss the requirement with
                Chandan Enterprises.
              </p>
            </div>
          </div>

          <a
            href="tel:+919558189429"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#015696] px-5 py-3 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#0b3f67]"
          >
            Discuss Your Requirement
            <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceOverview;