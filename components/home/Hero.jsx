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
      desc: "Protect your roof with long-lasting waterproofing solutions.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      title: "Terrace Waterproofing",
      desc: "Expert terrace protection with advanced waterproofing systems.",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    },
    {
      title: "Basement Waterproofing",
      desc: "Keep your basement dry and damage-free with professional solutions.",
      img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
    },
  ];

  return (
    <section className="w-full min-h-[100svh]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full min-h-[100svh]">

              {/* 🔥 Background Image (Optimized) */}
              <Image
                src={slide.img}
                alt="waterproofing"
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />

              {/* 🔥 Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

              {/* 🔥 Content */}
              <div className="relative z-10 max-w-[1280px] mx-auto min-h-[100svh] flex items-center px-4 sm:px-6">
                
                <div className="max-w-xl text-white">

                  {/* Tag */}
                  <span className="text-xs sm:text-sm tracking-widest uppercase text-gray-300">
                    Waterproofing Experts
                  </span>

                  {/* Heading */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-4 sm:mb-6 leading-tight">
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 sm:mb-8">
                    {slide.desc}
                  </p>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    
                    <a
                      href="/contact"
                      className="relative px-6 sm:px-7 py-3 rounded-full border border-white text-white overflow-hidden group text-sm sm:text-base text-center"
                    >
                      <span className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                      <span className="relative z-10 group-hover:text-black transition">
                        Get Free Inspection
                      </span>
                    </a>

                    <a
                      href="/services"
                      className="px-6 sm:px-7 py-3 border border-white rounded-full hover:bg-white hover:text-black transition text-sm sm:text-base text-center"
                    >
                      View Services
                    </a>

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