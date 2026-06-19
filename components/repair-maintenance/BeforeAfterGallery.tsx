"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  CheckCircle2,
} from "lucide-react";

const projects = [
  {
    before:
      "/repair-maintenance/before4.jpg",
    after:
      "/repair-maintenance/after4.png",

    title: "Terrace Waterproofing & Leakage Repair",

    location: "Satellite, Ahmedabad",

    problem:
      "Severe terrace leakage causing ceiling damage and water seepage.",

    solution:
      "Complete waterproofing treatment with crack filling and protective coating.",

    result:
      "100% leakage-free terrace with long-term waterproof protection.",
  },

  {
    before:
      "/repair-maintenance/before2.jpg",

    after:
      "/repair-maintenance/after2.jpg",

    title: "Interior Renovation & Wall Restoration",

    location: "Bopal, Ahmedabad",

    problem:
      "Wall cracks, peeling paint and dampness issues.",

    solution:
      "Wall repair, damp treatment and premium repainting work.",

    result:
      "Fresh modern appearance with moisture-free walls.",
  },

  {
    before:
      "/repair-maintenance/before3.jpg",

    after:
      "/repair-maintenance/after3.jpg",

    title: "False Ceiling & Gypsum Partition Work",

    location: "Prahlad Nagar, Ahmedabad",

    problem:
      "Outdated office interiors and poor space utilization.",

    solution:
      "Custom gypsum partitions and modern false ceiling installation.",

    result:
      "Professional workspace with improved aesthetics and functionality.",
  },
];

export default function BeforeAfterGallery() {
  return (
    <section className="relative overflow-hidden bg-white py-24">

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-100 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-100 blur-[120px]" />

      <div className="relative mx-auto max-w-[1280px] px-5 lg:px-8">

        {/* Header */}

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            Real Project Transformations
          </span>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Before & After
            <span className="block text-cyan-600">
              Project Showcase
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            Explore how we transform damaged, outdated and
            leaking properties into durable, functional and
            visually appealing spaces.
          </p>

        </div>

        <div className="mt-16 space-y-16">
                      {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
            >
              <div className="grid lg:grid-cols-[1.2fr_0.8fr]">

                {/* Images */}

                <div className="grid md:grid-cols-2">

                  {/* Before */}

                  <div className="group relative h-[280px] overflow-hidden lg:h-[420px]">

                    <Image
                      src={project.before}
                      alt={`${project.title} Before`}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute left-5 top-5 rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white">
                      BEFORE
                    </div>

                  </div>

                  {/* After */}

                  <div className="group relative h-[280px] overflow-hidden lg:h-[420px]">

                    <Image
                      src={project.after}
                      alt={`${project.title} After`}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute left-5 top-5 rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white">
                      AFTER
                    </div>

                  </div>

                </div>

                {/* Content */}

                <div className="p-8 lg:p-10">

                  <div className="flex items-center gap-2 text-cyan-600">

                    <MapPin size={18} />

                    <span className="text-sm font-medium">
                      {project.location}
                    </span>

                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-slate-900 lg:text-3xl">
                    {project.title}
                  </h3>

                  <div className="mt-8 space-y-6">

                    <div>

                      <h4 className="font-semibold text-red-500">
                        Problem
                      </h4>

                      <p className="mt-2 text-slate-600">
                        {project.problem}
                      </p>

                    </div>

                    <div>

                      <h4 className="font-semibold text-cyan-600">
                        Solution
                      </h4>

                      <p className="mt-2 text-slate-600">
                        {project.solution}
                      </p>

                    </div>

                    <div>

                      <h4 className="font-semibold text-green-600">
                        Result
                      </h4>

                      <p className="mt-2 text-slate-600">
                        {project.result}
                      </p>

                    </div>

                  </div>

                  <div className="mt-8 flex items-center gap-3 rounded-2xl bg-slate-50 p-4">

                    <CheckCircle2
                      size={22}
                      className="text-green-500"
                    />

                    <span className="font-medium text-slate-700">
                      Successfully Completed Project
                    </span>

                  </div>

                </div>

              </div>
            </motion.div>
          ))}

        </div>


     

      </div>
    </section>
  );
}