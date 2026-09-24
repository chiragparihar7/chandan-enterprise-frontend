"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  CheckCircle2,
  CircleCheck,
  Eye,
  Hammer,
  Paintbrush,
  Search,
  ShieldCheck,
  Syringe,
  TestTube,
  Wrench,
} from "lucide-react";

interface ServiceProcessStep {
  title: string;
  description: string;
  step?: number | string;
  icon?: string;
}

interface ServiceProcessProps {
  process: ServiceProcessStep[];
}

const iconMap: Record<string, React.ReactNode> = {
  Eye: <Eye size={21} strokeWidth={1.8} />,
  Hammer: <Hammer size={21} strokeWidth={1.8} />,
  Paintbrush: <Paintbrush size={21} strokeWidth={1.8} />,
  ShieldCheck: <ShieldCheck size={21} strokeWidth={1.8} />,
  TestTube: <TestTube size={21} strokeWidth={1.8} />,
  Award: <Award size={21} strokeWidth={1.8} />,
  CheckCircle2: <CheckCircle2 size={21} strokeWidth={1.8} />,
  CircleCheck: <CircleCheck size={21} strokeWidth={1.8} />,
  Search: <Search size={21} strokeWidth={1.8} />,
  Syringe: <Syringe size={21} strokeWidth={1.8} />,
  Wrench: <Wrench size={21} strokeWidth={1.8} />,
};

const fallbackIcons = [
  <Search key="search" size={21} strokeWidth={1.8} />,
  <Wrench key="wrench" size={21} strokeWidth={1.8} />,
  <ShieldCheck key="shield" size={21} strokeWidth={1.8} />,
  <CheckCircle2 key="check" size={21} strokeWidth={1.8} />,
];

export default function ServiceProcess({
  process,
}: ServiceProcessProps) {
  if (!process || process.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-20 sm:py-24 lg:py-28">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#015696]/5 blur-3xl" />
        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#016db5]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#015696]" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#015696]">
                Our Process
              </span>

              <span className="h-px w-8 bg-[#015696]" />
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#092a43] sm:text-4xl lg:text-[44px]">
              A structured approach to{" "}
              <span className="text-[#015696]">
                waterproofing work
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#64748b] sm:text-lg">
              Each project can require a different treatment approach.
              The process below provides a clear sequence from initial
              assessment through the final stage of the work.
            </p>
          </motion.div>
        </div>

        {/* Process */}
        <div className="relative mt-16">
          {/* Desktop connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-[#dce8f0] lg:block"
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((item, index) => {
              const icon =
                item.icon && iconMap[item.icon]
                  ? iconMap[item.icon]
                  : fallbackIcons[index % fallbackIcons.length];

              const stepNumber =
                item.step !== undefined
                  ? String(item.step).padStart(2, "0")
                  : String(index + 1).padStart(2, "0");

              return (
                <motion.div
                  key={`${item.title}-${index}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="relative"
                >
                  {/* Mobile/tablet connector */}
                  {index < process.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="absolute bottom-[-32px] left-8 top-[72px] w-px bg-[#dce8f0] sm:hidden"
                    />
                  )}

                  <div className="relative">
                    {/* Icon */}
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#dce8f0] bg-white text-[#015696] shadow-[0_8px_25px_rgba(9,42,67,0.07)] transition-all duration-300 hover:border-[#015696]/30 hover:shadow-[0_12px_32px_rgba(9,42,67,0.1)]">
                      {icon}

                      <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-[#015696] px-1 text-[10px] font-bold text-white">
                        {stepNumber}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="mt-6 pr-2">
                      <h3 className="text-lg font-semibold leading-snug text-[#092a43]">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-[#64748b]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom information card */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-16 overflow-hidden rounded-3xl bg-[#092a43]"
        >
          <div className="grid gap-8 p-7 sm:p-9 lg:grid-cols-[auto_1fr] lg:items-center lg:p-10">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#46a9d8]">
              <ShieldCheck size={26} strokeWidth={1.7} />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                Treatment starts with understanding the site condition
              </h3>

              <p className="mt-2 max-w-4xl text-sm leading-6 text-white/65 sm:text-base">
                The visible water damage does not always indicate the
                complete source of the problem. Site condition, moisture
                entry points, surface condition and the affected area
                should be considered before deciding on the appropriate
                waterproofing method.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}