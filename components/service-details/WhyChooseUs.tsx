"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  FileCheck2,
  Hammer,
  ShieldCheck,
  Users,
} from "lucide-react";

interface WhyChooseUsProps {}

const reasons = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Requirement Focused",
    description:
      "We start by understanding the affected area, visible condition and property requirement before discussing the treatment approach.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Protection Oriented",
    description:
      "The objective is to address water-related conditions with a suitable waterproofing approach for the specific surface.",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Surface Preparation",
    description:
      "Proper preparation of the affected surface is considered an important part of the waterproofing process.",
  },
  {
    number: "04",
    icon: FileCheck2,
    title: "Clear Scope",
    description:
      "The work, treatment approach and relevant project requirements can be discussed before execution begins.",
  },
  {
    number: "05",
    icon: Clock3,
    title: "Structured Execution",
    description:
      "Work follows a planned sequence from inspection and preparation through treatment and final review.",
  },
  {
    number: "06",
    icon: Users,
    title: "Property-Aware Approach",
    description:
      "Residential, commercial and industrial properties can have different conditions and waterproofing requirements.",
  },
];

const WhyChooseUs: React.FC<WhyChooseUsProps> = () => {
  return (
    <section className="relative overflow-hidden bg-[#061b2b] py-10 text-white md:py-12 lg:py-14">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute -left-48 -top-48 h-[600px] w-[600px] rounded-full bg-[#015696]/20 blur-[130px]" />

      <div className="pointer-events-none absolute -bottom-48 -right-48 h-[600px] w-[600px] rounded-full bg-[#016db5]/15 blur-[130px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="container-chandan relative z-10">
        {/* =======================================================
            HEADER
        ======================================================= */}
        <div className="grid items-end gap-8 border-b border-white/10 pb-10 md:gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT — Section Identity + Title */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#46a9d8]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#7fb9da]">
                Why Chandan Enterprises
              </span>
            </div>

            {/* Title */}
            <h2 className="max-w-2xl text-3xl font-bold leading-[1.08] tracking-[-0.035em] text-white sm:text-4xl md:text-5xl lg:text-[50px]">
              A focused approach to
              <span className="block text-[#46a9d8]">property protection.</span>
            </h2>
          </motion.div>

          {/* RIGHT — Description */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="lg:pb-1"
          >
            <div className="relative pl-5">
              {/* Accent Line */}
              <span className="absolute bottom-0 left-0 top-0 w-px bg-[#46a9d8]" />

              <p className="max-w-xl text-[15px] leading-7 text-[#a9bdca] md:text-base">
                The approach begins with understanding the property and its
                waterproofing requirement, followed by selecting a suitable
                treatment and carrying out the work through a clear execution
                process.
              </p>

              {/* Approach Points */}
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#46a9d8]" />
                  <span className="text-xs font-medium text-[#a9bdca]">
                    Understand
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#46a9d8]" />
                  <span className="text-xs font-medium text-[#a9bdca]">
                    Select
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#46a9d8]" />
                  <span className="text-xs font-medium text-[#a9bdca]">
                    Execute
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#46a9d8]" />
                  <span className="text-xs font-medium text-[#a9bdca]">
                    Review
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =======================================================
            REASONS GRID
        ======================================================= */}

        <div className="mt-14 grid gap-px overflow-hidden rounded-[26px] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.article
                key={reason.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                className="group relative overflow-hidden bg-[#092a43] p-7 transition-colors duration-300 hover:bg-[#0b344f] md:p-8"
              >
                {/* Background Number */}
                <div className="pointer-events-none absolute -right-1 -top-4 text-[88px] font-bold leading-none tracking-[-0.08em] text-white/[0.025] transition-colors duration-300 group-hover:text-[#46a9d8]/[0.06]">
                  {reason.number}
                </div>

                {/* Top Row */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#015696]/20 text-[#46a9d8] transition-all duration-300 group-hover:bg-[#015696] group-hover:text-white">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#5f7c8e]">
                    {reason.number}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 mt-8">
                  <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-[#8bc9e8]">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#9fb3c0]">
                    {reason.description}
                  </p>
                </div>

                {/* Bottom */}
                <div className="relative z-10 mt-7 flex items-center gap-2 border-t border-white/10 pt-5">
                  <CheckCircle2
                    size={14}
                    className="text-[#46a9d8]"
                    strokeWidth={1.8}
                  />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#6f8b9c]">
                    Our Approach
                  </span>

                  <ArrowUpRight
                    size={13}
                    className="ml-auto text-[#5f7c8e] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#46a9d8]"
                  />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =======================================================
            APPROACH STRIP
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04]"
        >
          <div className="grid md:grid-cols-3">
            {/* 01 */}
            <div className="border-b border-white/10 p-6 md:border-b-0 md:border-r md:p-7">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#6f8b9c]">
                First
              </p>

              <h4 className="mt-2 text-sm font-bold text-white">
                Understand the property
              </h4>

              <p className="mt-2 text-xs leading-5 text-[#8299a8]">
                Identify the affected area and understand the requirement.
              </p>
            </div>

            {/* 02 */}
            <div className="border-b border-white/10 p-6 md:border-b-0 md:border-r md:p-7">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#6f8b9c]">
                Then
              </p>

              <h4 className="mt-2 text-sm font-bold text-white">
                Select the approach
              </h4>

              <p className="mt-2 text-xs leading-5 text-[#8299a8]">
                Consider the surface and water-related condition before
                treatment.
              </p>
            </div>

            {/* 03 */}
            <div className="p-6 md:p-7">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#6f8b9c]">
                Finally
              </p>

              <h4 className="mt-2 text-sm font-bold text-white">
                Execute & review
              </h4>

              <p className="mt-2 text-xs leading-5 text-[#8299a8]">
                Carry out the work and review the treated area after execution.
              </p>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            BOTTOM CTA
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-sm font-semibold text-white">
              Have a waterproofing requirement?
            </p>

            <p className="mt-1 text-xs text-[#718b9c]">
              Share the property type and affected area with our team.
            </p>
          </div>

          <a
            href="/contact#enquiry"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#015696] px-5 py-3 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#016db5]"
          >
            Discuss Your Requirement
            <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
