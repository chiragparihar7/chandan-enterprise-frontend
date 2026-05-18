"use client";

const features = [
  "Certified Waterproofing Chemicals",
  "10+ Years Experience",
  "Warranty Support",
  "Advanced Equipment",
  "Expert Team",
  "Fast Project Completion",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-black py-28 px-6 md:px-10 text-white">

      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}
          <div>

            <p className="uppercase tracking-[4px] text-gray-400 text-sm mb-5">
              Why Choose Us
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              Trusted Waterproofing Experts
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Premium waterproofing systems designed for durability,
              structural protection, and long-term performance.
            </p>

          </div>

          {/* Right */}
          <div className="grid md:grid-cols-2 gap-6">

            {features.map((item, index) => (

              <div
                key={index}
                className="bg-white/[0.03] border border-white/10 rounded-[28px] p-8"
              >

                <span className="text-5xl font-bold text-white/10">
                  0{index + 1}
                </span>

                <h3 className="text-2xl font-semibold mt-6">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}