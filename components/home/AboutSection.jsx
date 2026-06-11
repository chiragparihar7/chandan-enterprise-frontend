"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-16 sm:py-20">

        {/* 🔥 MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">

          {/* 🔥 LEFT IMAGE */}
          <div className="relative w-full h-[320px] sm:h-[420px] md:h-auto rounded-2xl overflow-hidden">
            <Image
              src="/Home/about_company.jpg"
              alt="Waterproofing work"
              fill
              className="object-cover"
            />
          </div>

          {/* 🔥 RIGHT CONTENT */}
          <div className="flex flex-col justify-center">

            {/* Tag */}
            <span className="text-sm tracking-[0.2em] uppercase text-gray-500">
              About Company
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6 leading-tight">
              We Provide Reliable Waterproofing Solutions for Every Structure
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg mb-5">
              <strong>Chandan Enterprise</strong> is a trusted waterproofing
              service provider delivering long-lasting protection for homes,
              buildings, and commercial spaces.
            </p>

            <p className="text-gray-600 text-base sm:text-lg mb-8">
              We use advanced materials and proven techniques to ensure complete
              protection from leakage, seepage, and structural damage.
            </p>

            {/* 🔥 CTA */}
            <a
              href="/about"
              className="inline-block px-7 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition w-fit"
            >
              Know More
            </a>

          </div>

        </div>

        {/* 🔥 STATS BAR (PREMIUM TOUCH) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 bg-white rounded-2xl shadow-md p-6 text-center">

          <div>
            <h3 className="text-2xl font-bold text-black">10+</h3>
            <p className="text-sm text-gray-500">Years Experience</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-black">500+</h3>
            <p className="text-sm text-gray-500">Projects Completed</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-black">100%</h3>
            <p className="text-sm text-gray-500">Client Satisfaction</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-black">24/7</h3>
            <p className="text-sm text-gray-500">Support Available</p>
          </div>

        </div>

      </div>
    </section>
  );
}