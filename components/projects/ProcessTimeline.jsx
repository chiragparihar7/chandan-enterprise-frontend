"use client";

import { process } from "./data";

export default function ProcessTimeline() {
  return (
    <section className="bg-white py-24 px-6 md:px-10">

      <div className="max-w-5xl mx-auto text-center">

        <p className="uppercase tracking-[4px] text-black/60 text-sm mb-4">
          Workflow
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mb-20">
          Project Process
        </h2>

        <div className="space-y-6">

          {process.map((item, index) => (
            <div
              key={index}
              className="bg-[#f7f7f7] border border-black/5 rounded-[24px] p-8 flex items-center justify-between"
            >

              <div className="flex items-center gap-6">

                <span className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center font-semibold">
                  {index + 1}
                </span>

                <h3 className="text-2xl font-semibold">
                  {item}
                </h3>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}