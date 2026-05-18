// =============================
// 📁 components/about/WhyChooseUs.jsx
// UPDATED PREMIUM LIGHT VERSION
// =============================

"use client";

import {
  ShieldCheck,
  BadgeCheck,
  Clock3,
  Wallet,
  Building2,
  Hammer,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Guaranteed Protection",
    desc: "Durable waterproofing systems designed to provide long-term structural safety and protection.",
  },
  {
    icon: BadgeCheck,
    title: "Premium Materials",
    desc: "We use industry-grade waterproofing materials for maximum durability and reliable performance.",
  },
  {
    icon: Clock3,
    title: "On-Time Execution",
    desc: "Efficient project completion with strict timelines and professional quality standards.",
  },
  {
    icon: Wallet,
    title: "Transparent Pricing",
    desc: "Affordable and honest pricing structure with zero hidden charges or unexpected costs.",
  },
  {
    icon: Building2,
    title: "Commercial Expertise",
    desc: "Advanced waterproofing solutions tailored for residential and commercial properties.",
  },
  {
    icon: Hammer,
    title: "Skilled Professionals",
    desc: "Experienced specialists delivering precision workmanship and trusted waterproofing expertise.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-[#fafafa] py-32 px-6 md:px-10 lg:px-16 overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-black/[0.03] blur-[160px] rounded-full" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative max-w-7xl mx-auto">

        {/* Top Heading Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-24">

          {/* Left */}
          <div>

            <p className="uppercase tracking-[5px] text-gray-400 text-sm mb-6">
              Why Choose Us
            </p>

            <h2 className="text-4xl md:text-6xl font-bold text-black leading-[1.1]">

              Trusted Expertise
              <br />

              For Reliable
              <br />

              <span className="text-gray-400">
                Waterproofing Solutions
              </span>

            </h2>

          </div>

          {/* Right */}
          <div>

            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
              Chandan Enterprise combines advanced waterproofing techniques,
              premium materials, and skilled execution to deliver durable
              protection solutions for residential, commercial, and industrial properties.
            </p>

          </div>

        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-[36px] p-10 overflow-hidden hover:bg-black transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_80px_rgba(0,0,0,0.08)]"
            >

              {/* Number */}
              <div className="absolute top-8 right-8 text-6xl font-bold text-black/[0.04] group-hover:text-white/[0.06] transition duration-500">
                0{index + 1}
              </div>

              {/* Icon Box */}
              <div className="w-20 h-20 rounded-[24px] bg-[#f5f5f5] border border-gray-200 flex items-center justify-center mb-10 group-hover:bg-white group-hover:border-white/20 transition-all duration-500">

                <item.icon className="w-9 h-9 text-black group-hover:text-black transition duration-500" />

              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-black mb-5 leading-snug group-hover:text-white transition duration-500">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-[16px] group-hover:text-gray-400 transition duration-500">
                {item.desc}
              </p>

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-white group-hover:w-full transition-all duration-700" />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}