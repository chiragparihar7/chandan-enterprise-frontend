"use client";

export default function EmergencyCTA() {
  return (
    <section className="bg-[#f7f7f7] py-24 px-6 md:px-10">

      <div className="max-w-7xl mx-auto">

        <div className="relative overflow-hidden rounded-[40px] bg-black p-10 md:p-16">

          {/* Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 blur-[120px]" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

            <div className="max-w-2xl">

              <p className="uppercase tracking-[4px] text-gray-400 text-sm mb-4">
                Emergency Support
              </p>

              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                Need Urgent
                <br />
                Leakage Repair?
              </h2>

              <p className="text-gray-400 leading-relaxed text-lg">
                Contact our waterproofing experts for immediate inspection
                and fast professional support.
              </p>

            </div>

            <div className="flex flex-col gap-5">

              <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition duration-300 whitespace-nowrap">
                Call Now
              </button>

              <button className="border border-white/20 text-white px-8 py-4 rounded-full hover:border-white transition duration-300 whitespace-nowrap">
                Book Inspection
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}