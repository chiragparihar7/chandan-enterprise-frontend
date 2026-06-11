"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const services = [
{
id: "01",
title: "Terrace Waterproofing",
description:
"Protect your terrace from leakage and water seepage with advanced waterproofing systems.",
image: "/Services/terrace_waterproofing.jpg",
},
{
id: "02",
title: "Bathroom Waterproofing",
description:
"Prevent dampness, leakage and moisture issues in bathrooms and wet areas.",
image: "/Services/bathroom_waterproofing.jpg",
},
{
id: "03",
title: "Exterior Wall Waterproofing",
description:
"Protect exterior walls from rainwater penetration and weather damage.",
image: "/Services/exterior_wall_waterproofing.jpg",
},
{
id: "04",
title: "Rising Dampness Treatment",
description:
"Stop moisture rising through walls and protect interior surfaces.",
image: "/Services/rising_waterproofing.jpg",
},
{
id: "05",
title: "Basement Waterproofing",
description:
"Keep basements dry and secure with long-lasting waterproofing solutions.",
image: "/Services/basement_waterproofings.jpg",
},
{
id: "06",
title: "Swimming Pool Waterproofing",
description:
"Complete waterproofing solutions for pools, tanks and water-retaining structures.",
image: "/Services/swimming_pool_waterproofing.jpg",
},
{
id: "07",
title: "PU Injection Grouting",
description:
"Seal cracks and joints effectively using polyurethane injection technology.",
image: "/Services/puinjection.jpg",
},
{
id: "08",
title: "Expansion Joint Sealing",
description:
"Flexible sealing systems for expansion joints in buildings and structures.",
image: "/Services/expansion_joint_sealing.jpg",
},
{
id: "09",
title: "Roof Waterproofing",
description:
"Protect roofs from leakage, seepage and weather-related deterioration.",
image: "/Services/roof_waterproofing.jpg",
},
];

export default function PremiumServicesSection() {
return ( <section className="relative bg-[#f5f5f5] py-14 md:py-12 overflow-hidden">


  {/* Background Effects */}
  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[140px] rounded-full" />
  <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/5 blur-[140px] rounded-full" />

  <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">

    {/* Heading */}
    <div className="text-center mb-20">

      <p className="text-orange-500 uppercase tracking-[5px] text-sm font-semibold mb-5">
        Our Services
      </p>

      <h2 className="text-4xl md:text-6xl xl:text-7xl font-bold text-black leading-[1.1] mb-6">
        Waterproofing
        <br />
        Solutions
      </h2>

      <p className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed">
        Professional waterproofing services designed to protect
        residential, commercial and industrial structures from
        leakage, seepage and moisture damage.
      </p>

    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {services.map((service) => (
        <div
          key={service.id}
          className="group relative h-[480px] md:h-[520px] overflow-hidden rounded-[32px] bg-black"
        >

          {/* Image */}
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />

          {/* Number */}
          <span className="absolute top-6 right-6 text-7xl font-bold text-white/10 z-20">
            {service.id}
          </span>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 z-20">

            <div className="w-14 h-[2px] bg-orange-500 mb-6" />

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
              {service.title}
            </h3>

            <p className="text-gray-300 leading-relaxed mb-8 text-sm md:text-base">
              {service.description}
            </p>

            <button className="flex items-center gap-3 text-white font-medium transition-all duration-300">

              <span className="uppercase tracking-[2px] text-sm">
                Learn More
              </span>

              <div className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-black">
                <ArrowUpRight size={18} />
              </div>

            </button>

          </div>

          {/* Border */}
          <div className="absolute inset-0 border border-white/10 rounded-[32px] group-hover:border-orange-500/50 transition-all duration-500" />

        </div>
      ))}

    </div>

    {/* Premium CTA */}
    <div className="mt-24 relative overflow-hidden rounded-[40px] bg-black p-10 md:p-16">

      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500/20 blur-[140px]" />

      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

        <div className="max-w-2xl">

          <p className="uppercase tracking-[4px] text-orange-400 text-sm mb-4">
            Why Choose Us
          </p>

          <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            Trusted Waterproofing
            <br />
            Experts
          </h3>

          <p className="text-gray-400 leading-relaxed text-base md:text-lg">
            Combining advanced materials, skilled workmanship,
            modern technology and long-term protection systems
            for residential, commercial and industrial properties.
          </p>

        </div>

        <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 whitespace-nowrap">
          Get Free Inspection
        </button>

      </div>

    </div>

  </div>

</section>

);
}
