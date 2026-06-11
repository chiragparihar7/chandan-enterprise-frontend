"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Terrace Waterproofing",
    desc: "Protect your terrace from leakage and water seepage with advanced waterproofing systems.",
    img: "/Services/terrace_waterproofing.jpg",
  },
  {
    title: "Bathroom Waterproofing",
    desc: "Prevent dampness, leakage and moisture issues in bathrooms and wet areas.",
    img: "/Services/bathroom_waterproofing.jpg",
  },
  {
    title: "Exterior Wall Waterproofing",
    desc: "Protect exterior walls from rainwater penetration and weather damage.",
    img: "/Services/exterior_wall_waterproofing.jpg",
  },
  {
    title: "Rising Dampness Treatment",
    desc: "Stop moisture rising through walls and protect interior surfaces.",
    img: "/Services/rising_waterproofing.jpg",
  },
  {
    title: "Basement Waterproofing",
    desc: "Keep basements dry and secure with long-lasting waterproofing solutions.",
    img: "/Services/basement_waterproofings.jpg",
  },
  {
    title: "Swimming Pool Waterproofing",
    desc: "Complete waterproofing solutions for pools, tanks and water-retaining structures.",
    img: "/Services/swimming_pool_waterproofing.jpg",
  },
  {
    title: "PU Injection Grouting",
    desc: "Seal cracks and joints effectively using polyurethane injection technology.",
    img: "/Services/puinjection.jpg",
  },
  {
    title: "Expansion Joint Sealing",
    desc: "Flexible sealing systems for expansion joints in buildings and structures.",
    img: "/Services/expansion_joint_sealing.jpg",
  },
  {
    title: "Roof Waterproofing",
    desc: "Protect roofs from leakage, seepage and weather-related deterioration.",
    img: "/Services/roof_waterproofing.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-gray-50 py-16 sm:py-20">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sm uppercase tracking-[4px] text-gray-500">
            Our Services
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Professional Waterproofing Solutions
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            We provide advanced waterproofing services for residential,
            commercial and industrial properties with long-lasting protection.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-[260px] overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-5">
                  {service.desc}
                </p>

                <Link
                  href="/services"
                  className="inline-flex items-center font-semibold text-black hover:translate-x-2 transition-transform duration-300"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition"
          >
            View All Services
          </Link>
        </div>

      </div>
    </section>
  );
}