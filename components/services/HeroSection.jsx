"use client";

import Link from "next/link";

export default function ServicesHero() {
  return (
    <section className="relative w-full h-[340px] overflow-hidden mt-[90px] bg-black">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: "url('/services/hero.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-black/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">

        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-6 w-full">

          <div className="max-w-2xl">

            {/* Small Label */}
            <p className="uppercase tracking-[4px] text-gray-300 text-sm mb-4">
              Chandan Enterprise
            </p>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-5">
              Services
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Premium waterproofing solutions for residential and commercial spaces.
            </p>

            {/* Breadcrumb */}
            <div className="flex items-center gap-3 text-sm">

              <Link
                href="/"
                className="text-white hover:text-gray-300 transition"
              >
                Home
              </Link>

              <span className="text-gray-500">/</span>

              <span className="text-gray-400">
                Services
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent" />

    </section>
  );
}