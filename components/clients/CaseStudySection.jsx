"use client";

import Image from "next/image";

export default function CaseStudySection() {
  return (
    <section className="bg-black py-28 px-6 md:px-10">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <div className="relative h-[650px] rounded-[40px] overflow-hidden">

          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
            alt="Case Study"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/30" />

        </div>

        {/* Content */}
        <div>

          <p className="uppercase tracking-[4px] text-gray-400 text-sm mb-5">
            Case Study
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
            Commercial Roof
            <br />
            Waterproofing
          </h2>

          <p className="text-gray-400 leading-relaxed text-lg mb-10">
            We solved severe leakage and moisture penetration issues
            for a commercial property using advanced membrane waterproofing
            systems and protective coatings.
          </p>

          <div className="space-y-8">

            <div className="border-b border-white/10 pb-6">
              <h3 className="text-white text-xl font-semibold mb-3">
                Challenge
              </h3>

              <p className="text-gray-400">
                Continuous roof leakage damaging interior structures.
              </p>
            </div>

            <div className="border-b border-white/10 pb-6">
              <h3 className="text-white text-xl font-semibold mb-3">
                Solution
              </h3>

              <p className="text-gray-400">
                Applied multi-layer waterproofing membrane system.
              </p>
            </div>

            <div>
              <h3 className="text-white text-xl font-semibold mb-3">
                Result
              </h3>

              <p className="text-gray-400">
                Complete leakage protection with long-term durability.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}