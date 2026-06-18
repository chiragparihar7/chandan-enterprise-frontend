"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Droplets,
  Wrench,
  Building2,
  Paintbrush,
} from "lucide-react";

import { motion } from "framer-motion";

const services = [
  {
    icon: Droplets,
    title: "Waterproofing Solutions",
    image: "/repair-maintenance/services/waterproofing.jpg",
    services: [
      "Terrace Waterproofing",
      "Roof Waterproofing",
      "Basement Waterproofing",
      "Bathroom Waterproofing",
    ],
  },
  {
    icon: Wrench,
    title: "Repair & Maintenance",
    image: "/repair-maintenance/services/repair.jpg",
    services: [
      "Water Leakage Repair",
      "Wall Crack Repair",
      "Damp Proofing",
      "Structural Repair",
    ],
  },
  {
    icon: Building2,
    title: "Renovation & Refurbishment",
    image: "/repair-maintenance/services/renovation.jpg",
    services: [
      "Home Renovation",
      "Office Renovation",
      "Property Refurbishment",
      "Building Restoration",
    ],
  },
  {
    icon: Paintbrush,
    title: "Interior & Civil Works",
    image: "/repair-maintenance/services/interior.jpg",
    services: [
      "False Ceiling",
      "Gypsum Partition",
      "Painting Services",
      "Civil Finishing Works",
    ],
  },
];

export default function ServicesGrid() {
  return (
    <section className="relative overflow-hidden bg-[#08111F] py-24 text-white">

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1280px] px-5 lg:px-8">

        {/* Header */}

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Complete Property Solutions
          </span>

          <h2 className="mt-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Services We Provide
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-400">
            From waterproofing and repair work to renovation,
            interiors and civil maintenance, we provide complete
            property improvement solutions under one roof.
          </p>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
                      {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group overflow-hidden rounded-[32px] border border-slate-800 bg-slate-900/70 backdrop-blur-xl"
              >

                {/* Image */}

                <div className="relative h-[260px] overflow-hidden">

                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#08111F] via-[#08111F]/20 to-transparent" />

                  {/* Icon */}

                  <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 backdrop-blur">

                    <Icon
                      size={28}
                      className="text-cyan-400"
                    />

                  </div>

                </div>

                {/* Content */}

                <div className="p-8">

                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-slate-400">
                    Professional inspection, planning and
                    execution using premium quality materials
                    and proven techniques.
                  </p>

                  {/* Sub Services */}

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">

                    {service.services.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2"
                      >
                        <div className="h-2 w-2 rounded-full bg-cyan-400" />

                        <span className="text-sm text-slate-300">
                          {item}
                        </span>

                      </div>
                    ))}

                  </div>

                  {/* CTA */}

                  <button className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-400 transition-all duration-300 hover:gap-4">

                    Get Free Inspection

                    <ArrowUpRight size={18} />

                  </button>

                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Additional Services */}

        <div className="mt-16 rounded-[32px] border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl">

          <div className="text-center">

            <h3 className="text-2xl font-bold text-white">
              Additional Specialized Services
            </h3>

            <p className="mt-3 text-slate-400">
              Complete end-to-end building improvement and
              maintenance solutions.
            </p>

          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            {[
              "False Ceiling",
              "Gypsum Partition",
              "Interior Painting",
              "Exterior Painting",
              "Tile Installation",
              "Plumbing Work",
              "Electrical Work",
              "POP Work",
              "Texture Finishes",
              "Civil Repair",
              "RCC Repair",
              "Building Maintenance",
            ].map((service) => (
              <div
                key={service}
                className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-300"
              >
                {service}
              </div>
            ))}

          </div>

        </div>


      </div>
    </section>
  );
}