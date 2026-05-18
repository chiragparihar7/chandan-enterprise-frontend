"use client";

const solutions = [
  {
    title: "Leak Detection",
    description:
      "Advanced inspection methods to identify hidden leakage sources.",
  },
  {
    title: "Surface Preparation",
    description:
      "Professional cleaning and crack treatment before waterproofing.",
  },
  {
    title: "Chemical Application",
    description:
      "Premium waterproofing chemicals applied for long-lasting protection.",
  },
  {
    title: "Quality Testing",
    description:
      "Final testing process to ensure zero leakage and durability.",
  },
];

export default function SolutionSection() {
  return (
    <section className="bg-black py-28 px-6 md:px-10 text-white overflow-hidden relative">

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[4px] text-gray-400 text-sm mb-4">
            Our Solutions
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Professional
            <br />
            Waterproofing Process
          </h2>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {solutions.map((item, index) => (

            <div
              key={index}
              className="group bg-white/[0.03] border border-white/10 rounded-[32px] p-10 hover:bg-white hover:text-black transition-all duration-500"
            >

              <span className="text-6xl font-bold text-white/10 group-hover:text-black/10 transition duration-500">
                0{index + 1}
              </span>

              <h3 className="text-3xl font-semibold mt-8 mb-5">
                {item.title}
              </h3>

              <p className="text-gray-400 group-hover:text-gray-700 transition duration-500 leading-relaxed">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}