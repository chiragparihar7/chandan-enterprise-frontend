// =============================
// 📁 components/about/ServiceExpertise.jsx
// FULLY RESPONSIVE PREMIUM VERSION
// =============================

"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Terrace Waterproofing",
    desc: "Advanced terrace protection solutions against leakage and water damage.",
    image: "/about/terrace_waterproofing.jpg",
  },
  {
    title: "Bathroom Leakage",
    desc: "Reliable waterproofing systems for bathrooms and wet areas.",
    image: "/about/bathroom_waterproofing.jpg",
  },
  {
    title: "PU Coating",
    desc: "High-performance polyurethane coating for durable surface protection.",
    image: "/about/pu_grouting.jpg",
  },
  {
    title: "Basement Protection",
    desc: "Long-lasting basement waterproofing and seepage prevention systems.",
    image: "/about/basement_waterproofing.jpg",
  },
];

export default function ServiceExpertise() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-16 sm:py-20 lg:py-28">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] bg-black/[0.03] blur-[120px] sm:blur-[160px] rounded-full" />

      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">

        {/* ================= HEADING ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12 mb-12 lg:mb-20">

          <div>

            <p className="uppercase tracking-[4px] sm:tracking-[5px] text-gray-400 text-xs sm:text-sm mb-4 sm:mb-5">
              Service Expertise
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-black leading-tight">

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

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              We provide advanced waterproofing and civil protection
              services designed to ensure structural durability,
              long-term performance, and complete peace of mind.
            </p>

          </div>

        </div>

        {/* ================= MAIN LAYOUT ================= */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">

          {/* ================= FEATURED CARD ================= */}
          <div className="group relative overflow-hidden rounded-[24px] sm:rounded-[30px] lg:rounded-[40px] h-[420px] sm:h-[520px] lg:h-[650px]">

            <Image
              src={services[0].image}
              alt={services[0].title}
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-5 sm:p-7 lg:p-10">

              <div className="w-12 sm:w-16 h-[3px] bg-white mb-5 sm:mb-7" />

              <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5">
                {services[0].title}
              </h3>

              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md mb-6 sm:mb-8">
                {services[0].desc}
              </p>

              <div className="flex items-center justify-between">

                <span className="text-white text-[10px] sm:text-sm tracking-[2px] sm:tracking-[3px] uppercase">
                  Professional Protection
                </span>

                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center group-hover:bg-white transition-all duration-500">

                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-black transition duration-500" />

                </div>

              </div>

            </div>

          </div>

          {/* ================= RIGHT SIDE CARDS ================= */}
          <div className="grid gap-6 lg:gap-8">

            {services.slice(1).map((service, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-[24px] sm:rounded-[30px] lg:rounded-[36px] p-4 sm:p-6 hover:bg-black transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
              >

                <div className="grid md:grid-cols-[180px_1fr] lg:grid-cols-[220px_1fr] gap-5 sm:gap-6 items-center">

                  {/* Image */}
                  <div className="relative h-[220px] md:h-[180px] lg:h-[220px] overflow-hidden rounded-[20px] sm:rounded-[24px] lg:rounded-[28px]">

                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width:768px) 100vw, 220px"
                      className="object-cover group-hover:scale-105 transition duration-700"
                    />

                  </div>

                  {/* Content */}
                  <div>

                    <div className="text-4xl sm:text-5xl font-bold text-black/[0.05] group-hover:text-white/[0.08] transition duration-500 mb-3 sm:mb-4">
                      0{index + 2}
                    </div>

                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-3 sm:mb-4 group-hover:text-white transition duration-500">
                      {service.title}
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5 sm:mb-8 group-hover:text-gray-400 transition duration-500">
                      {service.desc}
                    </p>

                    <div className="flex items-center gap-3">

                      <span className="text-xs sm:text-sm uppercase tracking-[2px] sm:tracking-[3px] text-gray-500 group-hover:text-gray-300 transition duration-500">
                        Explore Service
                      </span>

                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-black group-hover:text-white transition duration-500" />

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