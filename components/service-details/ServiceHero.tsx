"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  shortDescription: string;
  heroImage: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({
  title,
  subtitle,
  shortDescription,
  heroImage,
}) => {
  return (
    <section className="relative overflow-hidden bg-[#061b2b] text-white py-10 md:py-14 lg:py-16">
      {/* =========================================================
          BACKGROUND DETAILS
      ========================================================= */}

      <div className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#015696]/20 blur-[130px]" />

      <div className="pointer-events-none absolute -bottom-40 right-[-100px] h-[500px] w-[500px] rounded-full bg-[#016db5]/15 blur-[130px]" />

      {/* Subtle Grid */}
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
            MAIN HERO
        ======================================================= */}

        <div className="grid min-h-[620px] items-center gap-10 py-10 md:py-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 lg:py-16">
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="h-px w-9 bg-[#46a9d8]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8bc9e8]">
                Waterproofing Service
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-white md:text-5xl lg:text-[58px]">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="mt-5 max-w-xl text-lg font-medium leading-7 text-[#8bc9e8] md:text-xl">
              {subtitle}
            </p>

            {/* Description */}
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#b5c6d1] md:text-base">
              {shortDescription}
            </p>

            {/* Trust Points */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Requirement-focused approach",
                "Site condition based treatment",
                "Residential & commercial applications",
                "Ahmedabad, Gujarat",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 text-xs text-[#c2d0d9]"
                >
                  <CheckCircle2
                    size={15}
                    className="shrink-0 text-[#46a9d8]"
                    strokeWidth={1.8}
                  />

                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact#enquiry"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#015696] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(1,86,150,0.25)] transition-all duration-300 hover:bg-[#016db5]"
              >
                Discuss Your Requirement

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <a
                href="tel:+919558189429"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#46a9d8]/50 hover:bg-white/[0.07]"
              >
                <Phone size={16} strokeWidth={1.8} />
                +91 95581 89429
              </a>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919558189429"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-[#8fa8b7] transition-colors hover:text-[#8bc9e8]"
            >
              <MessageCircle size={15} />
              Prefer WhatsApp? Start a conversation
            </a>
          </motion.div>

          {/* =====================================================
              RIGHT IMAGE
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            {/* Image Frame */}
            <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[#092a43] p-2 shadow-[0_25px_80px_rgba(0,0,0,0.28)]">
              <div className="relative aspect-[1.08/1] overflow-hidden rounded-[20px] md:aspect-[1.15/1]">
                <Image
                  src={heroImage}
                  alt={`${title} - Chandan Enterprises`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.025]"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#061b2b]/80 via-transparent to-transparent" />

                <div className="absolute inset-x-5 bottom-5 md:inset-x-6 md:bottom-6">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8bc9e8]">
                        Service Focus
                      </p>

                      <p className="mt-1.5 text-lg font-semibold text-white">
                        {title}
                      </p>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#092a43]/80 text-[#8bc9e8] backdrop-blur-md">
                      <ShieldCheck size={19} strokeWidth={1.7} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Information Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-5 left-5 max-w-[245px] rounded-2xl border border-[#dce8f0] bg-white p-4 shadow-[0_18px_45px_rgba(6,27,43,0.22)] sm:left-8"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eef8fd] text-[#015696]">
                  <ShieldCheck size={17} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xs font-bold text-[#092a43]">
                    Protection by Requirement
                  </p>

                  <p className="mt-1 text-[11px] leading-4 text-[#64748b]">
                    Treatment is considered according to the affected area and
                    site condition.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* =======================================================
            SERVICE INFORMATION RAIL
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative border-t border-white/10"
        >
          <div className="grid divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {/* Item 1 */}
            <div className="flex items-center gap-4 py-5 sm:px-6 sm:py-6 first:sm:pl-0">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-[#46a9d8]">
                <ShieldCheck size={18} strokeWidth={1.7} />
              </div>

              <div>
                <p className="text-xs font-semibold text-white">
                  Site-Focused
                </p>

                <p className="mt-1 text-[11px] text-[#8299a8]">
                  Treatment based on property condition
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-4 py-5 sm:px-6 sm:py-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-[#46a9d8]">
                <CheckCircle2 size={18} strokeWidth={1.7} />
              </div>

              <div>
                <p className="text-xs font-semibold text-white">
                  Practical Approach
                </p>

                <p className="mt-1 text-[11px] text-[#8299a8]">
                  Understand → Treat → Review
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-4 py-5 sm:px-6 sm:py-6 last:sm:pr-0">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-[#46a9d8]">
                <Phone size={18} strokeWidth={1.7} />
              </div>

              <div>
                <p className="text-xs font-semibold text-white">
                  Ahmedabad Service
                </p>

                <p className="mt-1 text-[11px] text-[#8299a8]">
                  Discuss your requirement with us
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#015696] to-transparent" />
    </section>
  );
};

export default ServiceHero;