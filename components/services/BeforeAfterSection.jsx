"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function BeforeAfterSection() {
  return (
    <section className="relative py-24 px-6 md:px-10 bg-[#f7f7f7] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-black/5 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-[4px] text-black/60 text-sm mb-4">
            Real Results
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-black leading-tight mb-6">
            Before & After
            <br />
            Transformation
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            See how our premium waterproofing solutions transform damaged
            surfaces into long-lasting protected structures.
          </p>

        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* BEFORE */}
          <div className="group relative h-[600px] rounded-[36px] overflow-hidden bg-black">

            {/* Image */}
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
              alt="Before Waterproofing"
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
            />

            {/* Overlays */}
            <div className="absolute inset-0 bg-black/55" />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            {/* Top Tag */}
            <div className="absolute top-8 left-8">

              <span className="bg-white/10 backdrop-blur-xl border border-white/10 text-white px-5 py-2 rounded-full text-sm tracking-[2px] uppercase">
                Before
              </span>

            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-10">

              <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                Leakage & Damage
              </h3>

              <p className="text-gray-300 leading-relaxed mb-8 max-w-md">
                Cracks, moisture penetration, and structural damage caused
                by poor waterproof protection systems.
              </p>

              <button className="flex items-center gap-3 text-white">

                <span className="uppercase tracking-[2px] text-sm">
                  View Details
                </span>

                <div className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center">

                  <ArrowUpRight size={18} />

                </div>

              </button>

            </div>

          </div>

          {/* AFTER */}
          <div className="group relative h-[600px] rounded-[36px] overflow-hidden bg-black">

            {/* Image */}
            <Image
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
              alt="After Waterproofing"
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
            />

            {/* Overlays */}
            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

            {/* Top Tag */}
            <div className="absolute top-8 left-8">

              <span className="bg-white text-black px-5 py-2 rounded-full text-sm tracking-[2px] uppercase font-medium">
                After
              </span>

            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-10">

              <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                Protected & Durable
              </h3>

              <p className="text-gray-300 leading-relaxed mb-8 max-w-md">
                Long-lasting waterproofing protection with premium finish,
                durability, and zero leakage performance.
              </p>

              <button className="flex items-center gap-3 text-white">

                <span className="uppercase tracking-[2px] text-sm">
                  View Details
                </span>

                <div className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition duration-300">

                  <ArrowUpRight size={18} />

                </div>

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}