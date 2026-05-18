"use client";

import { stats } from "./data";

export default function TrustStats() {
  return (
    <section className="bg-[#f7f7f7] py-20 px-6 md:px-10">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-4 gap-8">

        {stats.map((item, index) => (

          <div
            key={index}
            className="bg-white rounded-[32px] border border-black/5 p-10 text-center"
          >

            <h3 className="text-5xl font-bold mb-4">
              {item.number}
            </h3>

            <p className="text-gray-500 uppercase tracking-[2px] text-sm">
              {item.label}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}