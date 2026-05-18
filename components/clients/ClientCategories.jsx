"use client";

import { categories } from "./data";

export default function ClientCategories() {
  return (
    <section className="bg-[#f7f7f7] py-24 px-6 md:px-10">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-[4px] text-black/60 text-sm mb-4">
            Industries
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-black">
            Clients We Serve
          </h2>

        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {categories.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-white border border-black/5 rounded-[32px] p-10 hover:bg-black transition-all duration-500"
              >

                <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-black transition duration-500">

                  <Icon size={30} />

                </div>

                <h3 className="text-3xl font-semibold text-black group-hover:text-white transition duration-500">
                  {item.title}
                </h3>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}