"use client";

import { stats } from "./data";

export default function ProjectStats() {
  return (
    <section className="relative bg-black py-28 px-6 md:px-10 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/5 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-[4px] text-gray-400 text-sm mb-4">
            Company Achievements
          </p>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Proven Results
            <br />
            Trusted Expertise
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg">
            Delivering premium waterproofing solutions with long-term
            protection, professional execution, and client satisfaction.
          </p>

        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <div
              key={index}
              className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] p-10 hover:bg-white hover:border-white transition-all duration-500"
            >

              {/* Background Number */}
              <span className="absolute top-4 right-6 text-[90px] font-bold text-white/5 group-hover:text-black/5 leading-none transition duration-500">
                0{index + 1}
              </span>

              {/* Top Line */}
              <div className="w-14 h-[2px] bg-white mb-10 group-hover:bg-black transition duration-500" />

              {/* Number */}
              <h3 className="text-5xl md:text-6xl font-bold text-white mb-5 group-hover:text-black transition duration-500">

                {item.number}

              </h3>

              {/* Label */}
              <p className="text-gray-400 uppercase tracking-[2px] text-sm leading-relaxed group-hover:text-gray-700 transition duration-500">

                {item.label}

              </p>

              {/* Hover Glow */}
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

            </div>

          ))}

        </div>

        {/* Bottom Strip */}
        <div className="mt-20 border border-white/10 rounded-[32px] bg-white/[0.03] px-8 py-8 flex flex-col lg:flex-row items-center justify-between gap-6">

          <div>

            <p className="text-gray-400 uppercase tracking-[3px] text-sm mb-3">
              Premium Waterproofing Solutions
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              Protecting Residential & Commercial Properties
            </h3>

          </div>

          <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition duration-300 whitespace-nowrap">
            Get Free Inspection
          </button>

        </div>

      </div>

    </section>
  );
}