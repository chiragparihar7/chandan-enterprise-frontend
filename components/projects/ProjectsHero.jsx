"use client";

import Link from "next/link";

export default function ProjectsHero() {
  return (
    <section className="relative w-full h-[340px] overflow-hidden mt-[90px] bg-black">

      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-black/20" />

      <div className="relative z-10 h-full flex items-center">

        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-6 w-full">

          <div className="max-w-2xl">

            <p className="uppercase tracking-[4px] text-gray-300 text-sm mb-4">
              Chandan Enterprise
            </p>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-5">
              Our Projects
            </h1>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Showcasing premium waterproofing transformations and protection systems.
            </p>

            <div className="flex items-center gap-3 text-sm">

              <Link
                href="/"
                className="text-white hover:text-gray-300 transition"
              >
                Home
              </Link>

              <span className="text-gray-500">/</span>

              <span className="text-gray-400">
                Projects
              </span>

            </div>

          </div>

        </div>

      </div>

      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent" />

    </section>
  );
}