// =============================
// 📁 components/about/StatsSection.jsx
// COMPACT PREMIUM VERSION
// =============================

"use client";

const stats = [
  {
    number: "500+",
    label: "Projects Completed",
  },
  {
    number: "10+",
    label: "Years Experience",
  },
  {
    number: "95%",
    label: "Client Satisfaction",
  },
  {
    number: "24/7",
    label: "Support Available",
  },
];

export default function StatsSection() {
  return (
    <section className="relative bg-[#fafafa] py-10 px-6 md:px-10 lg:px-16 overflow-hidden">

      {/* Soft Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-black/[0.03] blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">

        {/* Top Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">

          <div>

            <p className="uppercase tracking-[5px] text-gray-400 text-sm mb-4">
              Our Achievements
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">

              Numbers That Reflect
              <br />

              Our Expertise

            </h2>

          </div>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
            Trusted by homeowners and businesses for delivering
            reliable waterproofing and civil protection solutions.
          </p>

        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-[30px] p-8 hover:bg-black transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden"
            >

              {/* Number Background */}
              <div className="absolute top-4 right-5 text-6xl font-bold text-black/[0.04] group-hover:text-white/[0.06] transition duration-500">
                0{index + 1}
              </div>

              {/* Number */}
              <h3 className="text-5xl font-bold text-black mb-4 group-hover:text-white transition duration-500">

                {item.number}

              </h3>

              {/* Label */}
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-400 transition duration-500">

                {item.label}

              </p>

              {/* Bottom Hover Line */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-white group-hover:w-full transition-all duration-700" />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}