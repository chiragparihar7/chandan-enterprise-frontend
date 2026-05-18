// =============================
// 📁 components/about/Testimonials.jsx
// MINIMAL PREMIUM LIGHT VERSION
// =============================

"use client";

import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Ahmedabad",
    review:
      "Excellent waterproofing service with professional execution and durable long-term results.",
  },
  {
    name: "Amit Patel",
    location: "Surat",
    review:
      "Very satisfied with the work quality, timely completion, and professional support.",
  },
  {
    name: "Neha Verma",
    location: "Vadodara",
    review:
      "Highly recommended for terrace leakage and waterproofing solutions.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-white py-20 px-6 md:px-10 lg:px-16 overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-black/[0.03] blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">

        {/* Top Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">

          <div>

            <p className="uppercase tracking-[5px] text-gray-400 text-sm mb-4">
              Testimonials
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">

              Trusted By
              <br />

              Our Clients

            </h2>

          </div>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
            Real feedback from clients who trusted our waterproofing
            and structural protection solutions.
          </p>

        </div>

        {/* Layout */}
        <div className="space-y-6">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group bg-[#fafafa] border border-gray-200 rounded-[32px] p-8 hover:bg-black transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            >

              <div className="grid lg:grid-cols-[80px_1fr_auto] gap-8 items-start">

                {/* Quote Icon */}
                <div className="w-16 h-16 rounded-[22px] bg-white border border-gray-200 flex items-center justify-center group-hover:bg-white transition-all duration-500">

                  <Quote className="w-8 h-8 text-black" />

                </div>

                {/* Review */}
                <div>

                  {/* Stars */}
                  <div className="flex gap-1 text-black mb-5 group-hover:text-white transition duration-500">

                    ★★★★★

                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-400 transition duration-500">

                    "{item.review}"

                  </p>

                </div>

                {/* Client Info */}
                <div className="lg:text-right">

                  <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-white transition duration-500">

                    {item.name}

                  </h3>

                  <p className="text-gray-500 group-hover:text-gray-400 transition duration-500">

                    {item.location}

                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}