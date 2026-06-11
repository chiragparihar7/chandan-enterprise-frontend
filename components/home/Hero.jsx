"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

export default function Hero() {
  const slides = [
    {
      title: "Roof Waterproofing",
      desc: "Protect your roof with long-lasting waterproofing solutions that prevent leakage, seepage, and structural damage.",
      img: "/Home/roof_waterproofing.jpg",
    },
    {
      title: "Terrace Waterproofing",
      desc: "Advanced terrace waterproofing systems designed to withstand harsh weather and ensure long-term protection.",
      img: "/Home/terrace_waterproofing1.jpg",
    },
    {
      title: "Basement Waterproofing",
      desc: "Keep your basement dry, safe, and moisture-free with professional waterproofing solutions.",
      img: "/Home/basement_waterproofing.jpg",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="w-full h-[100svh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[100svh]">

              {/* Background Image */}
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-center"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/15" />

              {/* Content */}
              <div className="absolute inset-0 z-10">
                <div className="max-w-[1280px] mx-auto h-full px-5 sm:px-8 lg:px-10">

                  <div className="flex items-center h-full">

                    <div className="max-w-3xl text-white">

                      {/* Tag */}
                      <span className="inline-block text-xs sm:text-sm uppercase tracking-[4px] text-gray-200 mb-4">
                        Waterproofing Experts
                      </span>

                      {/* Heading */}
                      <h1
                        className="
                          text-4xl
                          sm:text-5xl
                          md:text-6xl
                          lg:text-7xl
                          xl:text-8xl
                          font-bold
                          leading-tight
                          mb-5
                        "
                      >
                        {slide.title}
                      </h1>

                      {/* Description */}
                      <p
                        className="
                          text-base
                          sm:text-lg
                          md:text-xl
                          text-gray-200
                          max-w-2xl
                          mb-8
                          leading-relaxed
                        "
                      >
                        {slide.desc}
                      </p>

                      {/* Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">

                        <a
                          href="/contact"
                          className="
                            inline-flex
                            items-center
                            justify-center
                            px-8
                            py-3.5
                            rounded-full
                            bg-white
                            text-black
                            font-semibold
                            hover:bg-gray-200
                            transition-all
                            duration-300
                          "
                        >
                          Get Free Inspection
                        </a>

                        <a
                          href="/services"
                          className="
                            inline-flex
                            items-center
                            justify-center
                            px-8
                            py-3.5
                            rounded-full
                            border
                            border-white
                            text-white
                            font-semibold
                            hover:bg-white
                            hover:text-black
                            transition-all
                            duration-300
                          "
                        >
                          View Services
                        </a>

                      </div>

                    </div>

                  </div>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}