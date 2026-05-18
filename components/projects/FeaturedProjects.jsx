"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "./data";

export default function FeaturedProjects() {
  return (
    <section className="relative bg-[#f7f7f7] py-28 px-6 md:px-10 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-black/5 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">

          <div className="max-w-3xl">

            <p className="uppercase tracking-[4px] text-black/60 text-sm mb-4">
              Featured Projects
            </p>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
              Waterproofing
              <br />
              Transformations
            </h2>

          </div>

          <p className="text-gray-600 max-w-md leading-relaxed text-lg">
            Showcasing premium residential and commercial waterproofing
            projects with long-lasting protection and modern execution.
          </p>

        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">

          {projects.map((project, index) => (

            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-[36px] bg-black ${
                index === 0
                  ? "lg:col-span-2 h-[650px]"
                  : "h-[520px]"
              }`}
            >

              {/* Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/45" />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Top Info */}
              <div className="absolute top-8 left-8 right-8 flex items-start justify-between">

                {/* Category */}
                <span className="bg-white/10 backdrop-blur-xl border border-white/10 text-white px-5 py-2 rounded-full text-xs tracking-[3px] uppercase">
                  {project.category}
                </span>

                {/* Number */}
                <span className="text-white/20 text-6xl md:text-7xl font-bold">
                  {project.id}
                </span>

              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-10">

                <div className="flex items-end justify-between gap-6">

                  <div className="max-w-xl">

                    <h3 className="text-3xl md:text-5xl font-semibold text-white mb-5 leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                      Premium waterproofing execution designed for durability,
                      structural protection, and long-term performance.
                    </p>

                  </div>

                  {/* Button */}
                  <button className="group/button shrink-0 w-16 h-16 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition duration-300">

                    <ArrowUpRight
                      size={24}
                      className="group-hover/button:rotate-45 transition duration-300"
                    />

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-24 bg-black rounded-[40px] overflow-hidden relative">

          {/* Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 blur-[120px]" />

          <div className="relative z-10 p-10 md:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

            <div className="max-w-2xl">

              <p className="uppercase tracking-[4px] text-gray-400 text-sm mb-4">
                Need Waterproofing?
              </p>

              <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
                Let’s Protect Your
                <br />
                Property Professionally
              </h3>

              <p className="text-gray-400 leading-relaxed">
                High-performance waterproofing systems for residential,
                commercial, and industrial projects.
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