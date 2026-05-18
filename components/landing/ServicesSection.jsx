"use client";

import { services } from "./data";

export default function ServicesSection() {
  return (
    <section className="bg-black py-28 px-6 md:px-10 text-white">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[4px] text-gray-400 text-sm mb-4">
            Our Services
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Waterproofing Solutions
          </h2>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group bg-white/[0.03] border border-white/10 rounded-[32px] p-10 hover:bg-white hover:text-black transition-all duration-500"
              >

                <div className="w-16 h-16 rounded-2xl bg-white text-black flex items-center justify-center mb-8">

                  <Icon size={30} />

                </div>

                <h3 className="text-3xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 group-hover:text-gray-700 transition duration-500">
                  {service.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}