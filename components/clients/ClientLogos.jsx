"use client";

import { clientLogos } from "./data";

export default function ClientLogos() {
  return (
    <section className="relative bg-[#f7f7f7] py-24 px-6 md:px-10 overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-black/5 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-[4px] text-black/60 text-sm mb-4">
            Trusted Clients
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-black leading-tight">
            Brands & Businesses
            <br />
            We Worked With
          </h2>

        </div>

        {/* Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {clientLogos.map((logo, index) => (

            <div
              key={index}
              className="group bg-white border border-black/5 rounded-[28px] h-[140px] flex items-center justify-center hover:bg-black transition-all duration-500"
            >

              <h3 className="text-lg md:text-xl font-semibold text-black/40 group-hover:text-white transition duration-500 text-center px-4">
                {logo}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}