// app/components/service-details/ServiceCTA.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Phone,
  ShieldCheck,
} from 'lucide-react';

const ServiceCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#061b2b] py-10 md:py-14">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        {/* Soft blue glow */}
        <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#015696]/20 blur-[100px]" />
        <div className="absolute -bottom-40 -right-20 h-[420px] w-[420px] rounded-full bg-[#016db5]/15 blur-[110px]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />

        {/* Top border glow */}
        <div className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#46a9d8]/50 to-transparent" />
      </div>

      <div className="container-chandan relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_420px]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
          >
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4 text-[#46a9d8]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#a9d8ee]">
                Discuss Your Requirement
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
              Need waterproofing
              <span className="block text-[#46a9d8]">
                for your property?
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 md:text-lg">
              Share your property's waterproofing or leakage requirement with
              Chandan Enterprises. We can discuss the affected area, property
              type and the suitable next step for your requirement.
            </p>

            {/* Trust Points */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {[
                'Residential',
                'Commercial',
                'Industrial',
                'Ahmedabad, Gujarat',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-white/65"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#46a9d8]" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right CTA Panel */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-[24px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md md:p-7"
          >
            {/* Panel Header */}
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#46a9d8]">
                Start The Conversation
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-white">
                Tell us what needs protection.
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/55">
                Contact us and share the details of your waterproofing
                requirement.
              </p>
            </div>

            {/* Primary CTA */}
            <Link
              href="/contact#enquiry"
              className="group flex w-full items-center justify-between rounded-xl bg-[#015696] px-5 py-4 font-semibold text-white shadow-[0_10px_30px_rgba(1,86,150,0.25)] transition-all duration-300 hover:bg-[#016db5]"
            >
              <span>Send An Enquiry</span>

              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>

            {/* Secondary Actions */}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <a
                href="tel:+919558189429"
                className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm font-semibold text-white/85 transition-all duration-300 hover:border-[#46a9d8]/40 hover:bg-white/[0.08] hover:text-white"
              >
                <Phone className="h-4 w-4 text-[#46a9d8]" />
                Call Us
              </a>

              <a
                href="https://wa.me/919558189429"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm font-semibold text-white/85 transition-all duration-300 hover:border-[#46a9d8]/40 hover:bg-white/[0.08] hover:text-white"
              >
                <MessageCircle className="h-4 w-4 text-[#46a9d8]" />
                WhatsApp
              </a>
            </div>

            {/* Contact Note */}
            <div className="mt-6 border-t border-white/10 pt-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-white/40">Service Area</p>
                  <p className="mt-1 text-sm font-medium text-white/80">
                    Ahmedabad, Gujarat
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs text-white/40">Office Hours</p>
                  <p className="mt-1 text-sm font-medium text-white/80">
                    9:00 AM – 7:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Brand Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-xs text-white/40">
            Chandan Enterprises · Waterproofing & Leakage Protection
          </p>

          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-xs font-semibold text-[#8bc9e8] transition-colors hover:text-white"
          >
            Explore Other Services
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCTA;