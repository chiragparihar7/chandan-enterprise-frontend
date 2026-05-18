"use client";

import { problems } from "./data";

export default function ProblemSection() {
  return (
    <section className="bg-[#f7f7f7] py-28 px-6 md:px-10">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[4px] text-black/60 text-sm mb-4">
            Common Problems
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Leakage Issues
          </h2>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {problems.map((problem, index) => (

            <div
              key={index}
              className="bg-white rounded-[32px] border border-black/5 p-10"
            >

              <h3 className="text-3xl font-semibold">
                {problem}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}