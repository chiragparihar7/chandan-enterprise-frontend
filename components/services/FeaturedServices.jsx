"use client";

import {
  Droplets,
  Paintbrush,
  Building2,
  Waves,
  ShieldCheck,
  Hammer,
  PaintRoller,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    id: "01",
    title: "Terrace Waterproofing",
    description:
      "Advanced membrane coating systems for complete terrace protection.",
    icon: Waves,
  },
  {
    id: "02",
    title: "Bathroom Waterproofing",
    description:
      "Leak-proof waterproofing for bathrooms, wash areas, and wet zones.",
    icon: Droplets,
  },
  {
    id: "03",
    title: "Wall Waterproofing",
    description:
      "Protect exterior and interior walls from seepage and moisture damage.",
    icon: Building2,
  },
  {
    id: "04",
    title: "Crack Filling Work",
    description:
      "Professional crack sealing solutions for long-term structural safety.",
    icon: ShieldCheck,
  },
  {
    id: "05",
    title: "PU Grouting",
    description:
      "High-pressure PU injection grouting for leakage control solutions.",
    icon: Wrench,
  },
  {
    id: "06",
    title: "RCC Repairing",
    description:
      "Restore damaged RCC structures with advanced repair techniques.",
    icon: Hammer,
  },
  {
    id: "07",
    title: "Exterior Painting",
    description:
      "Weather-resistant exterior coatings with premium finishing quality.",
    icon: PaintRoller,
  },
  {
    id: "08",
    title: "Texture & Tiling",
    description:
      "Decorative texture coatings and premium tile finishing services.",
    icon: Paintbrush,
  },
];

export default function PremiumServicesSection() {
  return (
    <section className="relative bg-[#f7f7f7] py-24 px-6 md:px-10 overflow-hidden">

      {/* Background Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-black/5 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="text-black/60 uppercase tracking-[4px] text-sm mb-4">
            Our Expertise
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-black leading-tight mb-6">
            Premium Waterproofing
            <br />
            Services
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Delivering modern waterproofing and civil protection solutions
            with long-lasting durability and premium workmanship.
          </p>

        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-[28px] border border-black/5 p-8 hover:bg-black transition-all duration-500 overflow-hidden"
              >

                {/* Hover Glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-sky-400/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Number */}
                <span className="absolute top-6 right-6 text-6xl font-bold text-black/5 group-hover:text-white/5 transition duration-500">
                  {service.id}
                </span>

                {/* Icon */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-black transition duration-500">

                  <Icon size={30} />

                </div>

                {/* Content */}
                <div className="relative z-10">

                  <h3 className="text-2xl font-semibold text-black group-hover:text-white transition duration-500 mb-4 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed text-sm mb-8 transition duration-500">
                    {service.description}
                  </p>

                  {/* Button */}
                  <button className="flex items-center gap-3 text-black group-hover:text-white font-medium transition duration-500">

                    <span className="text-sm uppercase tracking-[2px]">
                      Learn More
                    </span>

                    <div className="w-10 h-10 rounded-full border border-black/10 group-hover:border-white/20 flex items-center justify-center transition duration-500">

                      <ArrowUpRight size={18} />

                    </div>

                  </button>

                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <div className="mt-24 bg-black rounded-[40px] p-10 md:p-16 overflow-hidden relative">

          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 blur-[120px]" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

            <div className="max-w-2xl">

              <p className="uppercase tracking-[4px] text-gray-400 text-sm mb-4">
                Why Choose Us
              </p>

              <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
                Trusted Waterproofing
                <br />
                Experts
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Combining advanced materials, skilled workmanship, and
                long-term protection systems for residential and commercial
                properties.
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