"use client";

const sections = [
  {
    title: "Leak Detection",
    items: [
      "Thermal Image Test",
      "Unique Color Test",
      "Pipe Pressure Test",
      "Moisture Test",
    ],
  },
  {
    title: "Waterproofing",
    items: [
      "Terrace Waterproofing",
      "Bathroom Waterproofing",
      "Exterior Wall",
      "Rising Dampness",
      "Basement / Tanks",
      "Swimming Pool",
      "PU Grouting",
    ],
  },
  {
    title: "Civil Work",
    items: [
      "Crack Filling",
      "Plaster Work",
      "RCC Repairs",
      "Microconcrete",
      "Paver Blocks",
      "Terrace Roofing",
      "Tiling Work",
    ],
  },
  {
    title: "Painting",
    items: [
      "Exterior Waterproof",
      "Acrylic Painting",
      "Texture Painting",
      "Interior Painting",
    ],
  },
];

export default function ServicesOverview() {
  return (
    <section className="w-full py-16 sm:py-20 bg-black text-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">

        {/* 🔥 Heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wide">
            Total Solution Under One Roof
          </h2>

          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Residence / Society / Commercial & Industrial Premises
          </p>
        </div>

        {/* 🔥 Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {sections.map((section, index) => (
            <div
              key={index}
              className="group border border-white/10 rounded-2xl p-6 hover:bg-white hover:text-black transition-all duration-300"
            >

              {/* Title */}
              <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2 group-hover:border-black/20">
                {section.title}
              </h3>

              {/* List */}
              <ul className="space-y-2 text-sm text-gray-300 group-hover:text-gray-700">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 group-hover:bg-black"></span>
                    {item}
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>

        {/* 🔥 Warranty Strip */}
        <div className="mt-16 text-center">
          <div className="inline-block border border-white px-6 py-3 rounded-full text-sm sm:text-base tracking-wide hover:bg-white hover:text-black transition">
            Warranty: 1 / 3 / 5 / 7 / 10 Years (As Applicable)
          </div>
        </div>

      </div>
    </section>
  );
}