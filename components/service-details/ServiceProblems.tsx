"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowUpRight,
  CheckCircle2,
  Droplet,
  Home,
  ThermometerSun,
  Waves,
  Zap,
} from "lucide-react";

interface ServiceProblem {
  title: string;
  description: string;
  icon?: string;
}

interface ServiceProblemsProps {
  problems: ServiceProblem[];
}

const iconMap: Record<string, React.ReactNode> = {
  Droplet: <Droplet size={21} strokeWidth={1.7} />,
  Home: <Home size={21} strokeWidth={1.7} />,
  AlertTriangle: <AlertTriangle size={21} strokeWidth={1.7} />,
  Zap: <Zap size={21} strokeWidth={1.7} />,
  ThermometerSun: <ThermometerSun size={21} strokeWidth={1.7} />,
  Waves: <Waves size={21} strokeWidth={1.7} />,
};

const fallbackIcons = [
  <Droplet key="droplet" size={21} strokeWidth={1.7} />,
  <AlertTriangle key="alert" size={21} strokeWidth={1.7} />,
  <Home key="home" size={21} strokeWidth={1.7} />,
  <Waves key="waves" size={21} strokeWidth={1.7} />,
];

const ServiceProblems: React.FC<ServiceProblemsProps> = ({ problems }) => {
  if (!problems || problems.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#015696]/5 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#0b3f67]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="h-px w-8 bg-[#015696]" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#015696]">
                Common Problems
              </span>
            </div>

            <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-[#092a43] sm:text-4xl lg:text-[44px]">
              Problems that can indicate a{" "}
              <span className="text-[#015696]">waterproofing issue</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="lg:pb-1"
          >
            <p className="max-w-2xl text-base leading-7 text-[#64748b] sm:text-lg">
              Water-related problems can appear in different forms depending
              on the location, surface condition, construction details and
              source of moisture. Identifying the visible symptoms helps
              determine the appropriate treatment approach.
            </p>
          </motion.div>
        </div>

        {/* Problem Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => {
            const icon =
              problem.icon && iconMap[problem.icon]
                ? iconMap[problem.icon]
                : fallbackIcons[index % fallbackIcons.length];

            return (
              <motion.article
                key={`${problem.title}-${index}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-2xl border border-[#dce8f0] bg-white p-6 shadow-[0_8px_30px_rgba(9,42,67,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#015696]/20 hover:shadow-[0_18px_45px_rgba(9,42,67,0.09)]"
              >
                {/* Top accent */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-[#015696] transition-all duration-300 group-hover:w-full" />

                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1f8fc] text-[#015696] transition-colors duration-300 group-hover:bg-[#015696] group-hover:text-white">
                  {icon}
                </div>

                {/* Number */}
                <span className="absolute right-5 top-5 text-xs font-semibold tracking-[0.12em] text-[#cbd9e3]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-lg font-semibold leading-snug text-[#092a43]">
                  {problem.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#64748b]">
                  {problem.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#015696] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span>Identify the issue</span>
                  <ArrowUpRight size={14} strokeWidth={2} />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Diagnostic / CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mt-10 overflow-hidden rounded-3xl bg-[#092a43]"
        >
          {/* Decorative elements */}
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-28 -left-16 h-72 w-72 rounded-full border border-white/5"
          />

          <div className="relative grid gap-8 p-7 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-[#46a9d8]">
                  <CheckCircle2 size={19} strokeWidth={1.8} />
                </div>

                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#46a9d8]">
                  Proper Assessment
                </span>
              </div>

              <h3 className="max-w-2xl text-2xl font-bold leading-tight text-white sm:text-3xl">
                The visible symptom is only one part of the problem.
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65 sm:text-base">
                The source of water, affected surface, existing damage and
                site conditions should be considered before selecting a
                waterproofing treatment.
              </p>
            </div>

            <div className="flex shrink-0 items-center lg:justify-end">
              <a
                href="tel:+919558189429"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-[#092a43] transition-all duration-300 hover:bg-[#f1f8fc]"
              >
                Discuss Your Problem
                <ArrowUpRight size={17} strokeWidth={2} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceProblems;