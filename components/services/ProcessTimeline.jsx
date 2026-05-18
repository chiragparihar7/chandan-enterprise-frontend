"use client";

import {
  Search,
  ScanSearch,
  Hammer,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

const process = [
  {
    title: "Site Inspection",
    description:
      "Detailed on-site analysis to identify leakage sources and structural issues.",
    icon: Search,
  },
  {
    title: "Leak Detection",
    description:
      "Advanced moisture and leakage detection using professional techniques.",
    icon: ScanSearch,
  },
  {
    title: "Surface Preparation",
    description:
      "Proper cleaning and surface treatment for maximum waterproof bonding.",
    icon: Hammer,
  },
  {
    title: "Chemical Application",
    description:
      "Premium waterproofing chemicals applied with precision and expertise.",
    icon: ShieldCheck,
  },
  {
    title: "Quality Testing",
    description:
      "Final inspection and testing process to ensure long-term protection.",
    icon: BadgeCheck,
  },
];

export default function ProcessTimeline() {
  return (
    <section className="relative py-24 px-6 md:px-10 bg-[#f7f7f7] overflow-hidden">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-black/5 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-24">

          <p className="uppercase tracking-[4px] text-black/60 text-sm mb-4">
            Our Process
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-black leading-tight mb-6">
            Precision
            <br />
            Workflow
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A structured waterproofing process designed for durability,
            protection, and long-lasting performance.
          </p>

        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[1px] bg-black/10 -translate-x-1/2" />

          <div className="space-y-10">

            {process.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className={`relative flex ${
                    index % 2 === 0
                      ? "md:justify-start"
                      : "md:justify-end"
                  }`}
                >

                  {/* Card */}
                  <div className="w-full md:w-[46%] relative group">

                    <div className="bg-white border border-black/5 rounded-[30px] p-8 md:p-10 hover:bg-black transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">

                      {/* Step */}
                      <div className="flex items-center justify-between mb-8">

                        <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition duration-500">

                          <Icon size={30} />

                        </div>

                        <span className="text-5xl font-bold text-black/5 group-hover:text-white/10 transition duration-500">
                          0{index + 1}
                        </span>

                      </div>

                      {/* Content */}
                      <h3 className="text-2xl md:text-3xl font-semibold text-black group-hover:text-white transition duration-500 mb-4">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed transition duration-500">
                        {item.description}
                      </p>

                    </div>

                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black border-[6px] border-[#f7f7f7] shadow-lg items-center justify-center">

                    <div className="w-2 h-2 rounded-full bg-white" />

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}