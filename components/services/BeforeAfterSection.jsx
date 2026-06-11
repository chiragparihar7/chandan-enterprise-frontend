
"use client";

import Image from "next/image";
import { ArrowUpRight, ShieldCheck, Droplets, CheckCircle2 } from "lucide-react";

export default function BeforeAfterSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#f5f5f5] overflow-hidden">

      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/5 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">

        {/* Heading */}
        <div className="text-center mb-20">

          <span className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-600 px-5 py-2 rounded-full text-sm font-semibold mb-6">
            Real Project Results
          </span>

          <h2 className="text-4xl md:text-6xl xl:text-7xl font-bold text-black leading-[1.1] mb-6">
            Before & After
            <br />
            Waterproofing
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Witness how our advanced waterproofing systems transform damaged,
            leaking structures into durable, long-lasting protected spaces.
          </p>

        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* BEFORE CARD */}
          <div className="group relative overflow-hidden rounded-[40px] h-[550px] md:h-[650px]">

            <Image
              src="/Services/before.jpg"
              alt="Before Waterproofing"
              fill
              className="object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

            {/* Label */}
            <div className="absolute top-8 left-8 z-20">
              <span className="bg-red-500 text-white px-5 py-2 rounded-full font-semibold">
                BEFORE
              </span>
            </div>

            {/* Floating Stat */}
            <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-5 py-4 text-white z-20">

              <p className="text-xs uppercase tracking-widest text-gray-300">
                Problem
              </p>

              <h4 className="font-semibold mt-1">
                Water Leakage
              </h4>

            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 z-20">

              <h3 className="text-3xl md:text-5xl font-bold text-white mb-5">
                Leakage & Damage
              </h3>

              <p className="text-gray-300 leading-relaxed mb-8 max-w-lg">
                Cracks, damp walls, seepage, mold growth and structural
                deterioration caused by water penetration.
              </p>

              <div className="space-y-4 mb-8">

                <div className="flex items-center gap-3 text-white">
                  <Droplets size={18} />
                  Active Water Leakage
                </div>

                <div className="flex items-center gap-3 text-white">
                  <ShieldCheck size={18} />
                  Surface Damage
                </div>

                <div className="flex items-center gap-3 text-white">
                  <ShieldCheck size={18} />
                  Moisture Penetration
                </div>

              </div>

            </div>

          </div>

          {/* AFTER CARD */}
          <div className="group relative overflow-hidden rounded-[40px] h-[550px] md:h-[650px]">

            <Image
              src="/Services/after.jpg"
              alt="After Waterproofing"
              fill
              className="object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

            {/* Label */}
            <div className="absolute top-8 left-8 z-20">
              <span className="bg-green-500 text-white px-5 py-2 rounded-full font-semibold">
                AFTER
              </span>
            </div>

            {/* Floating Stat */}
            <div className="absolute top-8 right-8 bg-white backdrop-blur-xl rounded-2xl px-5 py-4 z-20">

              <p className="text-xs uppercase tracking-widest text-gray-500">
                Result
              </p>

              <h4 className="font-semibold text-black mt-1">
                100% Protected
              </h4>

            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 z-20">

              <h3 className="text-3xl md:text-5xl font-bold text-white mb-5">
                Protected & Durable
              </h3>

              <p className="text-gray-300 leading-relaxed mb-8 max-w-lg">
                Complete waterproofing protection with premium finish,
                enhanced durability and long-term peace of mind.
              </p>

              <div className="space-y-4 mb-8">

                <div className="flex items-center gap-3 text-white">
                  <CheckCircle2 size={18} />
                  Zero Leakage
                </div>

                <div className="flex items-center gap-3 text-white">
                  <CheckCircle2 size={18} />
                  Long-Term Protection
                </div>

                <div className="flex items-center gap-3 text-white">
                  <CheckCircle2 size={18} />
                  Premium Finish
                </div>

              </div>

              <button className="group/btn inline-flex items-center gap-3 bg-white text-black px-6 py-4 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300">

                View Project

                <ArrowUpRight
                  size={18}
                  className="group-hover/btn:rotate-45 transition duration-300"
                />

              </button>

            </div>

          </div>

        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-14">

          <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
            <h3 className="text-4xl font-bold text-black mb-2">100+</h3>
            <p className="text-gray-600">Projects Completed</p>
          </div>

          <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
            <h3 className="text-4xl font-bold text-black mb-2">10+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>

          <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
            <h3 className="text-4xl font-bold text-black mb-2">95%</h3>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>

          <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
            <h3 className="text-4xl font-bold text-black mb-2">10Y</h3>
            <p className="text-gray-600">Warranty Support</p>
          </div>

        </div>

      </div>

    </section>
  );
}

