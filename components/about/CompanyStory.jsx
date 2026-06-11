"use client";

import Image from "next/image";
import Link from "next/link";

export default function CompanyStory() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 h-[350px] w-[350px] rounded-full bg-black/[0.03] blur-[120px]" />

      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ================= IMAGE SIDE ================= */}
          <div className="relative">

            {/* Main Image */}
            <div className="relative overflow-hidden rounded-[24px] lg:rounded-[32px] group">

              <Image
                src="/about/company_overivew.jpg"
                alt="Chandan Enterprise Waterproofing Team"
                width={1200}
                height={1400}
                priority
                className="
                  w-full
                  h-[320px]
                  sm:h-[450px]
                  lg:h-[580px]
                  object-cover
                  group-hover:scale-105
                  transition-transform
                  duration-700
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10" />

            </div>

            {/* Experience Card */}
            <div
              className="
                absolute
                bottom-4
                right-4
                sm:-bottom-6
                sm:-right-6
                lg:-bottom-8
                lg:-right-8
                bg-black
                text-white
                rounded-[20px]
                lg:rounded-[28px]
                p-5
                sm:p-6
                lg:p-8
                shadow-2xl
                border
                border-gray-800
              "
            >
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                10+
              </h3>

              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Years Of Trusted
                <br />
                Experience
              </p>
            </div>

          </div>

          {/* ================= CONTENT SIDE ================= */}
          <div>

            {/* Small Heading */}
            <p className="uppercase tracking-[4px] sm:tracking-[5px] text-gray-400 text-xs sm:text-sm mb-4">
              About Company
            </p>

            {/* Main Heading */}
            <h2
              className="
                text-3xl
                sm:text-4xl
                lg:text-6xl
                font-bold
                text-black
                leading-tight
                mb-6
                lg:mb-8
              "
            >
              Building Strong
              <br />

              <span className="text-gray-400">
                Protection For
              </span>

              <br />

              Every Property
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-5">
              Chandan Enterprise provides professional waterproofing and
              structural protection services for residential, commercial,
              and industrial properties.
            </p>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 lg:mb-10">
              With advanced techniques, premium materials, and skilled
              workmanship, we deliver durable waterproofing solutions
              designed to prevent leakage, seepage, dampness, and
              long-term structural damage.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5 mb-8 lg:mb-10">

              <div className="bg-black text-white rounded-3xl p-5 sm:p-7">

                <h3 className="text-3xl sm:text-4xl font-bold mb-2">
                  500+
                </h3>

                <p className="text-xs sm:text-sm text-gray-400">
                  Successful Projects
                </p>

              </div>

              <div className="bg-gray-100 rounded-3xl p-5 sm:p-7 border border-gray-200">

                <h3 className="text-3xl sm:text-4xl font-bold text-black mb-2">
                  95%
                </h3>

                <p className="text-xs sm:text-sm text-gray-500">
                  Client Satisfaction
                </p>

              </div>

            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">

              <Link
                href="/contact"
                className="
                  text-center
                  bg-black
                  text-white
                  px-8
                  py-4
                  rounded-full
                  font-semibold
                  hover:bg-gray-900
                  transition-all
                  duration-300
                "
              >
                Get Free Inspection
              </Link>

              <Link
                href="/projects"
                className="
                  text-center
                  border
                  border-gray-300
                  text-black
                  px-8
                  py-4
                  rounded-full
                  font-semibold
                  hover:bg-black
                  hover:text-white
                  transition-all
                  duration-300
                "
              >
                View Projects
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}