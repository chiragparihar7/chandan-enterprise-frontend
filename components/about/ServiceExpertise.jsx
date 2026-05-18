// =============================
// 📁 components/about/ServiceExpertise.jsx
// LUXURY ALTERNATE LAYOUT VERSION
// =============================

"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Terrace Waterproofing",
    desc: "Advanced terrace protection solutions against leakage and water damage.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Bathroom Leakage",
    desc: "Reliable waterproofing systems for bathrooms and wet areas.",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "PU Coating",
    desc: "High-performance polyurethane coating for durable surface protection.",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Basement Protection",
    desc: "Long-lasting basement waterproofing and seepage prevention systems.",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function ServiceExpertise() {
  return (
    <section className="relative bg-[#fafafa] py-28 px-6 md:px-10 lg:px-16 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-black/[0.03] blur-[160px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10 mb-20">

          <div>

            <p className="uppercase tracking-[5px] text-gray-400 text-sm mb-5">
              Service Expertise
            </p>

            <h2 className="text-4xl md:text-6xl font-bold text-black leading-tight">

              Waterproofing
              <br />

              Solutions Built
              <br />

              <span className="text-gray-400">
                For Durability
              </span>

            </h2>

          </div>

          <div className="max-w-xl">

            <p className="text-gray-600 text-lg leading-relaxed">
              We provide advanced waterproofing and civil protection
              services designed to ensure structural durability,
              long-term performance, and complete peace of mind.
            </p>

          </div>

        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Large Featured Card */}
          <div className="group relative overflow-hidden rounded-[40px] h-[650px]">

            <Image
              src={services[0].image}
              alt={services[0].title}
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-10">

              <div className="w-16 h-[3px] bg-white mb-7" />

              <h3 className="text-white text-4xl font-bold mb-5">

                {services[0].title}

              </h3>

              <p className="text-gray-300 text-lg leading-relaxed max-w-md mb-8">

                {services[0].desc}

              </p>

              <div className="flex items-center justify-between">

                <span className="text-white text-sm tracking-[3px] uppercase">
                  Professional Protection
                </span>

                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center group-hover:bg-white transition-all duration-500">

                  <ArrowUpRight className="w-6 h-6 text-white group-hover:text-black transition duration-500" />

                </div>

              </div>

            </div>

          </div>

          {/* Right Side Grid */}
          <div className="grid gap-8">

            {services.slice(1).map((service, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-[36px] p-6 hover:bg-black transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
              >

                <div className="grid md:grid-cols-[220px_1fr] gap-6 items-center">

                  {/* Image */}
                  <div className="relative h-[220px] overflow-hidden rounded-[28px]">

                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-700"
                    />

                  </div>

                  {/* Content */}
                  <div>

                    <div className="text-5xl font-bold text-black/[0.05] group-hover:text-white/[0.08] transition duration-500 mb-4">
                      0{index + 2}
                    </div>

                    <h3 className="text-3xl font-bold text-black mb-4 group-hover:text-white transition duration-500">

                      {service.title}

                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-8 group-hover:text-gray-400 transition duration-500">

                      {service.desc}

                    </p>

                    <div className="flex items-center gap-3">

                      <span className="text-sm uppercase tracking-[3px] text-gray-500 group-hover:text-gray-300 transition duration-500">
                        Explore Service
                      </span>

                      <ArrowUpRight className="w-5 h-5 text-black group-hover:text-white transition duration-500" />

                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}