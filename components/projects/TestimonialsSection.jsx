"use client";

import { Star, Quote } from "lucide-react";
import { testimonials } from "./data";

export default function TestimonialsSection() {
  return (
    <section className="relative bg-[#f7f7f7] py-28 px-6 md:px-10 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-black/5 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">

          <div className="max-w-3xl">

            <p className="uppercase tracking-[4px] text-black/60 text-sm mb-4">
              Client Testimonials
            </p>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
              Trusted By
              <br />
              Property Owners
            </h2>

          </div>

          <p className="text-gray-600 max-w-md leading-relaxed text-lg">
            Delivering premium waterproofing solutions with quality
            workmanship, professional execution, and long-term reliability.
          </p>

        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="group relative overflow-hidden rounded-[36px] bg-white border border-black/5 p-10 hover:bg-black transition-all duration-500"
            >

              {/* Background Number */}
              <span className="absolute top-5 right-6 text-[90px] font-bold text-black/[0.03] group-hover:text-white/[0.03] leading-none transition duration-500">
                0{index + 1}
              </span>

              {/* Quote Icon */}
              <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center mb-10 group-hover:bg-white group-hover:text-black transition duration-500">

                <Quote size={30} />

              </div>

              {/* Review */}
              <p className="relative z-10 text-gray-600 group-hover:text-gray-300 leading-relaxed text-lg mb-10 transition duration-500">
                “{item.review}”
              </p>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-8">

                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-black text-black group-hover:fill-white group-hover:text-white transition duration-500"
                  />
                ))}

              </div>

              {/* Client */}
              <div className="relative z-10 flex items-center justify-between">

                <div>

                  <h4 className="text-2xl font-semibold text-black group-hover:text-white transition duration-500">
                    {item.name}
                  </h4>

                  <p className="text-gray-500 group-hover:text-gray-400 mt-2 transition duration-500">
                    {item.role}
                  </p>

                </div>

                {/* Badge */}
                <div className="w-14 h-14 rounded-full border border-black/10 group-hover:border-white/10 flex items-center justify-center transition duration-500">

                  <span className="text-sm font-medium text-black group-hover:text-white transition duration-500">
                    5.0
                  </span>

                </div>

              </div>

              {/* Hover Glow */}
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

            </div>

          ))}

        </div>

        {/* Bottom Highlight Strip */}
        <div className="mt-24 bg-black rounded-[40px] overflow-hidden relative">

          {/* Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 blur-[120px]" />

          <div className="relative z-10 p-10 md:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

            <div className="max-w-2xl">

              <p className="uppercase tracking-[4px] text-gray-400 text-sm mb-4">
                Customer Satisfaction
              </p>

              <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
                Trusted Waterproofing
                <br />
                Professionals
              </h3>

              <p className="text-gray-400 leading-relaxed">
                We focus on quality workmanship, premium materials,
                and long-lasting waterproofing protection systems.
              </p>

            </div>

            <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition duration-300 whitespace-nowrap">
              Get Free Inspection
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}