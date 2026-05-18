"use client";

import Image from "next/image";

export default function BeforeAfterSection() {
  return (
    <section className="bg-[#f7f7f7] py-28 px-6 md:px-10">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[4px] text-black/60 text-sm mb-4">
            Transformation
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Before & After
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Before */}
          <div className="relative h-[600px] rounded-[40px] overflow-hidden">

            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
              alt="Before"
              fill
              sizes="100vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/50" />

            <div className="absolute bottom-10 left-10">

              <span className="bg-red-500 text-white px-5 py-2 rounded-full text-sm uppercase tracking-[2px]">
                Before
              </span>

              <h3 className="text-4xl font-semibold text-white mt-5">
                Severe Leakage
              </h3>

            </div>

          </div>

          {/* After */}
          <div className="relative h-[600px] rounded-[40px] overflow-hidden">

            <Image
              src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2070&auto=format&fit=crop"
              alt="After"
              fill
              sizes="100vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute bottom-10 left-10">

              <span className="bg-white text-black px-5 py-2 rounded-full text-sm uppercase tracking-[2px]">
                After
              </span>

              <h3 className="text-4xl font-semibold text-white mt-5">
                Protected Surface
              </h3>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}