"use client";

import React from "react";

export default function WhyTrustSectionGlass() {
  return (
    <section className="bg-gray-50 py-12 px-6 relative overflow-hidden">
      
      {/* Subtle Background Effect */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-black/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-black/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Why Trust Chandan Enterprise
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Reliable waterproofing backed by experience, technology, and commitment to quality.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="backdrop-blur-lg bg-white/70 border border-white/40 rounded-2xl p-6 hover:shadow-xl transition duration-300">
            <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-lg mb-4">
              ✓
            </div>
            <h3 className="font-semibold text-lg text-black mb-2">
              Expert Team
            </h3>
            <p className="text-gray-600 text-sm">
              Skilled professionals delivering precise waterproofing solutions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="backdrop-blur-lg bg-white/70 border border-white/40 rounded-2xl p-6 hover:shadow-xl transition duration-300">
            <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-lg mb-4">
              ★
            </div>
            <h3 className="font-semibold text-lg text-black mb-2">
              Premium Materials
            </h3>
            <p className="text-gray-600 text-sm">
              Industry-grade materials ensuring long-term protection.
            </p>
          </div>

          {/* Card 3 */}
          <div className="backdrop-blur-lg bg-white/70 border border-white/40 rounded-2xl p-6 hover:shadow-xl transition duration-300">
            <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-lg mb-4">
              ⏱
            </div>
            <h3 className="font-semibold text-lg text-black mb-2">
              On-Time Delivery
            </h3>
            <p className="text-gray-600 text-sm">
              Efficient project completion without compromising quality.
            </p>
          </div>

          {/* Card 4 */}
          <div className="backdrop-blur-lg bg-white/70 border border-white/40 rounded-2xl p-6 hover:shadow-xl transition duration-300">
            <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-lg mb-4">
              ₹
            </div>
            <h3 className="font-semibold text-lg text-black mb-2">
              Transparent Pricing
            </h3>
            <p className="text-gray-600 text-sm">
              Clear pricing with no hidden charges or surprises.
            </p>
          </div>

          {/* Card 5 */}
          <div className="backdrop-blur-lg bg-white/70 border border-white/40 rounded-2xl p-6 hover:shadow-xl transition duration-300">
            <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-lg mb-4">
              🛡
            </div>
            <h3 className="font-semibold text-lg text-black mb-2">
              Warranty Protection
            </h3>
            <p className="text-gray-600 text-sm">
              1 / 3 / 5 / 7 / 10 years warranty for complete peace of mind.
            </p>
          </div>

          {/* Card 6 */}
          <div className="backdrop-blur-lg bg-white/70 border border-white/40 rounded-2xl p-6 hover:shadow-xl transition duration-300">
            <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-lg mb-4">
              ✔
            </div>
            <h3 className="font-semibold text-lg text-black mb-2">
              Proven Results
            </h3>
            <p className="text-gray-600 text-sm">
              Trusted by multiple residential & commercial clients.
            </p>
          </div>

        </div>


      </div>
    </section>
  );
}