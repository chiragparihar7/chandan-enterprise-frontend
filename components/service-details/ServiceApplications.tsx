"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Droplet,
  Factory,
  Home,
  Hospital,
  Hotel,
  School,
  Warehouse,
} from "lucide-react";

import type { ServiceApplication } from "@/types/service";

interface ServiceApplicationsProps {
  applications: ServiceApplication[];
}

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home size={22} strokeWidth={1.7} />,
  Building2: <Building2 size={22} strokeWidth={1.7} />,
  Factory: <Factory size={22} strokeWidth={1.7} />,
  Hotel: <Hotel size={22} strokeWidth={1.7} />,
  Hospital: <Hospital size={22} strokeWidth={1.7} />,
  School: <School size={22} strokeWidth={1.7} />,
  Warehouse: <Warehouse size={22} strokeWidth={1.7} />,
  Droplet: <Droplet size={22} strokeWidth={1.7} />,
};

const fallbackIcons = [
  <Droplet key="droplet" size={22} strokeWidth={1.7} />,
  <Building2 key="building" size={22} strokeWidth={1.7} />,
  <Home key="home" size={22} strokeWidth={1.7} />,
  <Factory key="factory" size={22} strokeWidth={1.7} />,
];

const ServiceApplications: React.FC<ServiceApplicationsProps> = ({
  applications,
}) => {
  if (!applications || applications.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-[#f1f8fc] py-10 md:py-12 lg:py-14">
      {/* Background */}
      <div className="pointer-events-none absolute -left-48 top-10 h-[500px] w-[500px] rounded-full bg-[#015696]/[0.045] blur-[120px]" />

      <div className="pointer-events-none absolute -right-48 bottom-0 h-[500px] w-[500px] rounded-full bg-[#016db5]/[0.045] blur-[120px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#092a43 1px, transparent 1px), linear-gradient(90deg, #092a43 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="container-chandan relative z-10">
        {/* Header */}
        <div className="grid items-end gap-8 border-b border-[#dce8f0] pb-10 md:gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#015696]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#015696]">
                Applications
              </span>
            </div>

            <h2 className="max-w-2xl text-3xl font-bold leading-[1.08] tracking-[-0.035em] text-[#092a43] sm:text-4xl md:text-5xl lg:text-[50px]">
              Where this service
              <span className="block text-[#015696]">
                can make a difference.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="lg:pb-1"
          >
            <div className="relative pl-5">
              <span className="absolute bottom-0 left-0 top-0 w-px bg-[#015696]" />

              <p className="max-w-xl text-[15px] leading-7 text-[#64748b] md:text-base">
                Waterproofing requirements can vary by property type, surface
                and exposure. Explore the application areas where this service
                may be considered based on the property and site condition.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-[0_6px_18px_rgba(9,42,67,0.06)]">
                  <Building2
                    size={15}
                    strokeWidth={1.8}
                    className="text-[#015696]"
                  />

                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#64748b]">
                    Multiple Property Types
                  </span>
                </div>

                <div className="text-xs font-medium text-[#64748b]">
                  Residential · Commercial · Industrial
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Application Grid */}
        <div
          className={`mt-12 grid gap-4 ${
            applications.length <= 3
              ? "md:grid-cols-2 lg:grid-cols-3"
              : "md:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {applications.map((app, index) => {
            const category = app.category || "Application";
            const description = app.description || "...";
            const icon =
              app.icon && iconMap[app.icon]
                ? iconMap[app.icon]
                : fallbackIcons[index % fallbackIcons.length];

            return (
              <motion.article
                key={`${category}-${index}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group relative min-h-[270px] overflow-hidden rounded-[24px] border border-[#dce8f0] bg-white p-6 shadow-[0_8px_25px_rgba(9,42,67,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b9dced] hover:shadow-[0_18px_45px_rgba(9,42,67,0.09)] md:p-7"
              >
                {/* Background Number */}
                <div className="pointer-events-none absolute -right-3 -top-5 text-[90px] font-bold leading-none tracking-[-0.08em] text-[#092a43]/[0.035] transition-colors duration-300 group-hover:text-[#015696]/[0.055]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef8fd] text-[#015696] transition-all duration-300 group-hover:bg-[#015696] group-hover:text-white">
                  {icon}
                </div>

                {/* Content */}
                <div className="relative z-10 mt-7">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#015696]">
                    Application {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-2 text-lg font-bold leading-6 text-[#092a43] transition-colors duration-300 group-hover:text-[#015696]">
                    {category}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#64748b]">
                    {description}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#015696] transition-all duration-300 group-hover:w-full" />

                {/* Arrow */}
                <div className="absolute bottom-5 right-5 flex h-8 w-8 items-center justify-center rounded-full border border-[#dce8f0] text-[#94a3b8] transition-all duration-300 group-hover:border-[#015696] group-hover:bg-[#015696] group-hover:text-white">
                  <ArrowUpRight size={14} />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Application Summary */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 overflow-hidden rounded-[24px] bg-[#092a43]"
        >
          <div className="grid md:grid-cols-[1fr_auto] md:items-center">
            <div className="p-7 md:p-9">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#015696] text-white">
                  <CheckCircle2 size={20} strokeWidth={1.7} />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7fb9da]">
                    Application Scope
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-white md:text-2xl">
                    The same service can require a different approach on every
                    property.
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-[#a9bdca]">
                    Surface condition, water exposure, existing construction and
                    the affected area can all influence the treatment approach.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 px-7 py-6 md:border-l md:border-t-0 md:px-9">
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#6f8b9c]">
                Listed Applications
              </p>

              <p className="mt-1 text-4xl font-bold tracking-[-0.04em] text-white">
                {String(applications.length).padStart(2, "0")}
              </p>

              <p className="mt-1 text-xs text-[#8299a8]">Application areas</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-7 flex flex-col gap-4 border-t border-[#cbdde7] pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-sm font-semibold text-[#092a43]">
              Not sure whether this service suits your property?
            </p>

            <p className="mt-1 text-xs text-[#64748b]">
              Share the property type and affected area with us.
            </p>
          </div>

          <a
            href="/contact#enquiry"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#015696] px-5 py-3 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#0b3f67]"
          >
            Discuss Your Requirement
            <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceApplications;
