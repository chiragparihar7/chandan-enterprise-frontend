// =============================
// 📁 components/about/CTASection.jsx
// COMPACT PREMIUM VERSION
// =============================

"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-[#fafafa] py-20 px-6 md:px-10 lg:px-16 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* CTA Container */}
        <div className="relative bg-black rounded-[40px] overflow-hidden">

          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 blur-[140px] rounded-full" />

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

          <div className="relative z-10 px-8 md:px-14 lg:px-16 py-14 md:py-16">

            <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">

              {/* Left Content */}
              <div>

                <p className="uppercase tracking-[5px] text-gray-500 text-sm mb-5">
                  Free Inspection
                </p>

                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">

                  Protect Your Property
                  <br />

                  With Expert Waterproofing

                </h2>

                <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">

                  Get reliable waterproofing solutions designed
                  for long-term structural protection and durability.

                </p>

              </div>

              {/* Right Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-4">

                {/* Primary Button */}
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 bg-white text-black hover:bg-gray-200 transition-all duration-300 px-8 py-4 rounded-full font-semibold whitespace-nowrap"
                >

                  Get Free Quote

                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300" />

                </Link>

                {/* Secondary Button */}
                <a
                  href="tel:+919876543210"
                  className="border border-white/15 bg-white/5 backdrop-blur-xl hover:bg-white hover:text-black transition-all duration-300 text-white px-8 py-4 rounded-full font-semibold text-center whitespace-nowrap"
                >

                  Call Now

                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}