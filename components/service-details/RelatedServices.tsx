"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface RelatedService {
  slug: string;
  title: string;
  shortDescription: string;
  heroImage: string;
}

interface RelatedServicesProps {
  relatedServices: RelatedService[];
  currentSlug: string;
}

const RelatedServices: React.FC<RelatedServicesProps> = ({
  relatedServices,
  currentSlug,
}) => {
  const filteredServices = relatedServices
    .filter((service) => service.slug !== currentSlug)
    .filter((service) => service.heroImage)
    .slice(0, 4);

  if (!filteredServices.length) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-20 md:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#eef8fd] blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#eef8fd] blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#092a43 1px, transparent 1px), linear-gradient(90deg, #092a43 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      <div className="container-chandan relative z-10">
        {/* Header */}
        <div className="grid items-end gap-8 border-b border-[#dce8f0] pb-10 md:gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT — Section Identity + Title */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#015696]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#015696]">
                Explore More
              </span>
            </div>

            {/* Title */}
            <h2 className="max-w-2xl text-3xl font-bold leading-[1.08] tracking-[-0.035em] text-[#092a43] sm:text-4xl md:text-5xl lg:text-[50px]">
              More solutions for
              <span className="block text-[#015696]">
                different waterproofing needs.
              </span>
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
              <span className="absolute bottom-0 left-0 top-0 w-px bg-[#015696]" />

              <p className="max-w-xl text-[15px] leading-7 text-[#64748b] md:text-base">
                Explore other waterproofing and leakage-protection services that
                may be relevant to different surfaces, property types and site
                conditions.
              </p>

              {/* Service Meta */}
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-[0_6px_18px_rgba(9,42,67,0.06)]">
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.8}
                    className="text-[#015696]"
                  />

                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#64748b]">
                    Related Services
                  </span>
                </div>

                <div className="text-xs font-medium text-[#64748b]">
                  Explore · Compare · Choose
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Services */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {filteredServices.map((service, index) => (
            <motion.article
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group overflow-hidden rounded-2xl border border-[#dce8f0] bg-white shadow-[0_8px_30px_rgba(9,42,67,0.05)] transition-all duration-500 hover:-translate-y-1 hover:border-[#b9dced] hover:shadow-[0_18px_45px_rgba(9,42,67,0.10)]"
            >
              {/* Image */}
              <Link
                href={`/services/${service.slug}`}
                className="relative block h-52 overflow-hidden"
              >
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061b2b]/70 via-[#061b2b]/10 to-transparent" />

                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full border border-white/20 bg-[#061b2b]/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                    Service {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </Link>

              {/* Content */}
              <div className="p-6">
                <h3 className="line-clamp-2 text-xl font-semibold leading-tight tracking-[-0.02em] text-[#092a43] transition-colors duration-300 group-hover:text-[#015696]">
                  {service.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#64748b]">
                  {service.shortDescription}
                </p>

                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#015696]"
                >
                  View Service
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-[#dce8f0] bg-white px-6 py-5 shadow-[0_8px_25px_rgba(9,42,67,0.04)] sm:flex-row md:px-8"
        >
          <div>
            <p className="text-sm font-semibold text-[#092a43]">
              Looking for another waterproofing solution?
            </p>

            <p className="mt-1 text-xs text-[#64748b]">
              Explore the complete range of Chandan Enterprises services.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#015696] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0b3f67]"
          >
            View All Services
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default RelatedServices;
