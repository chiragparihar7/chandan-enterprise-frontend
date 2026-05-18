// =============================
// 📁 components/about/MissionVision.jsx
// DARK PREMIUM COMPACT VERSION
// =============================

"use client";

import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="relative bg-black py-20 px-6 md:px-10 lg:px-16 overflow-hidden text-white">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/5 blur-[140px] rounded-full" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative max-w-7xl mx-auto">

        {/* Top Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">

          <div>

            <p className="uppercase tracking-[5px] text-gray-500 text-sm mb-4">
              Mission & Vision
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">

              Purpose Driven
              <br />

              Waterproofing Solutions

            </h2>

          </div>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            Focused on delivering trusted workmanship,
            durable waterproofing systems,
            and long-term customer satisfaction.
          </p>

        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Mission Card */}
          <div className="group relative bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-[36px] p-10 overflow-hidden hover:bg-white transition-all duration-500 hover:-translate-y-1">

            {/* Background Number */}
            <div className="absolute top-5 right-6 text-7xl font-bold text-white/[0.05] group-hover:text-black/[0.05] transition duration-500">

              01

            </div>

            {/* Top Row */}
            <div className="flex items-center gap-5 mb-8">

              {/* Icon */}
              <div className="w-16 h-16 rounded-[22px] bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-black transition-all duration-500">

                <Target className="w-8 h-8 text-white group-hover:text-white" />

              </div>

              {/* Title */}
              <div>

                <p className="uppercase tracking-[3px] text-gray-500 text-xs mb-2 group-hover:text-gray-600 transition duration-500">
                  Our Mission
                </p>

                <h3 className="text-3xl font-bold text-white group-hover:text-black transition duration-500">

                  Reliable Protection

                </h3>

              </div>

            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-600 transition duration-500">

              Our mission is to deliver high-quality waterproofing
              solutions that protect structures, prevent damage,
              and ensure long-term durability.

            </p>

            {/* Bottom Hover Line */}
            <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-black group-hover:w-full transition-all duration-700" />

          </div>

          {/* Vision Card */}
          <div className="group relative bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-[36px] p-10 overflow-hidden hover:bg-white transition-all duration-500 hover:-translate-y-1">

            {/* Background Number */}
            <div className="absolute top-5 right-6 text-7xl font-bold text-white/[0.05] group-hover:text-black/[0.05] transition duration-500">

              02

            </div>

            {/* Top Row */}
            <div className="flex items-center gap-5 mb-8">

              {/* Icon */}
              <div className="w-16 h-16 rounded-[22px] bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-black transition-all duration-500">

                <Eye className="w-8 h-8 text-white group-hover:text-white" />

              </div>

              {/* Title */}
              <div>

                <p className="uppercase tracking-[3px] text-gray-500 text-xs mb-2 group-hover:text-gray-600 transition duration-500">
                  Our Vision
                </p>

                <h3 className="text-3xl font-bold text-white group-hover:text-black transition duration-500">

                  Industry Leadership

                </h3>

              </div>

            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-600 transition duration-500">

              We aim to become a trusted leader in waterproofing
              through innovation, premium workmanship,
              and exceptional customer service.

            </p>

            {/* Bottom Hover Line */}
            <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-black group-hover:w-full transition-all duration-700" />

          </div>

        </div>

      </div>
    </section>
  );
}