// =============================
// 📁 components/about/CompanyStory.jsx
// PREMIUM MODERN VERSION
// =============================

"use client";

import Image from "next/image";
import Link from "next/link";

export default function CompanyStory() {
  return (
    <section className="relative bg-white py-24 px-4 md:px-8 lg:px-12 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-black/[0.03] blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT IMAGE SIDE */}
        <div className="relative">

          {/* Main Image */}
          <div className="relative overflow-hidden rounded-[32px] group">

            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1974&auto=format&fit=crop"
              alt="Company Story"
              width={800}
              height={800}
              className="object-cover w-full h-[580px] group-hover:scale-105 transition duration-700"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/10" />

          </div>

          {/* Floating Experience Card */}
          <div className="absolute -bottom-8 -right-8 bg-black text-white p-8 rounded-[28px] shadow-2xl border border-gray-800 backdrop-blur-xl">

            <h3 className="text-5xl font-bold mb-2">
              10+
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Years Of Trusted
              <br />
              Experience
            </p>

          </div>

        </div>

        {/* RIGHT CONTENT SIDE */}
        <div>

          {/* Small Heading */}
          <p className="uppercase tracking-[5px] text-gray-400 text-sm mb-5">
            About Company
          </p>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-black leading-tight mb-8">

            Building Strong
            <br />

            <span className="text-gray-400">
              Protection For
            </span>

            <br />

            Every Property

          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Chandan Enterprise provides professional waterproofing and
            structural protection services for residential, commercial,
            and industrial properties.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            With advanced techniques, premium materials, and skilled
            workmanship, we deliver durable solutions designed to
            prevent leakage, seepage, and long-term structural damage.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-5 mb-10">

            <div className="bg-black text-white rounded-[28px] p-7">

              <h3 className="text-4xl font-bold mb-2">
                500+
              </h3>

              <p className="text-gray-400 text-sm">
                Successful Projects
              </p>

            </div>

            <div className="bg-gray-100 rounded-[28px] p-7 border border-gray-200">

              <h3 className="text-4xl font-bold text-black mb-2">
                95%
              </h3>

              <p className="text-gray-500 text-sm">
                Client Satisfaction
              </p>

            </div>

          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-5">

            <Link
              href="/contact"
              className="bg-black text-white hover:bg-gray-900 transition-all duration-300 px-8 py-4 rounded-full font-semibold"
            >
              Get Free Inspection
            </Link>

            <Link
              href="/projects"
              className="border border-gray-300 hover:bg-black hover:text-white transition-all duration-300 px-8 py-4 rounded-full font-semibold text-black"
            >
              View Projects
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}