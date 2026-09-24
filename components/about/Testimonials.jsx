// =============================
// 📁 components/about/Testimonials.jsx
// MINIMAL PREMIUM LIGHT VERSION
// =============================

"use client";

import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Ahmedabad",
    review:
      "Excellent waterproofing service with professional execution and durable long-term results.",
  },
  {
    name: "Amit Patel",
    location: "Surat",
    review:
      "Very satisfied with the work quality, timely completion, and professional support.",
  },
  {
    name: "Neha Verma",
    location: "Vadodara",
    review:
      "Highly recommended for terrace leakage and waterproofing solutions.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-12">
      <div className="container-chandan">

        {/* =========================
            HEADER
        ========================= */}
        <div className="mb-12 max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#015696]" />

            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#015696]">
              Testimonials
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#092a43] md:text-4xl">
            What our clients say
          </h2>

          <p className="mt-4 max-w-xl text-base leading-7 text-[#64748b]">
            Feedback from clients who have experienced our waterproofing and
            leakage-protection services.
          </p>
        </div>

        {/* =========================
            TESTIMONIALS
        ========================= */}
        <div className="grid border-y border-[#dce8f0] md:grid-cols-3">

          {testimonials.map((item, index) => (
            <article
              key={item.name}
              className={`
                group relative py-8 md:px-8 md:py-10
                ${index !== 0 ? "border-t border-[#dce8f0] md:border-l md:border-t-0" : ""}
              `}
            >
              {/* Quote */}
              <div className="mb-7">
                <Quote className="h-7 w-7 text-[#015696]" />
              </div>

              {/* Review */}
              <p className="min-h-[105px] text-[17px] leading-7 text-[#475569]">
                “{item.review}”
              </p>

              {/* Client */}
              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eef8fd] text-sm font-semibold text-[#015696]">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#092a43]">
                    {item.name}
                  </p>

                  <p className="mt-0.5 text-xs text-[#94a3b8]">
                    {item.location}
                  </p>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#015696] transition-all duration-300 group-hover:w-12" />
            </article>
          ))}

        </div>

        {/* =========================
            BOTTOM NOTE
        ========================= */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#64748b]">
            Practical waterproofing solutions for residential, commercial and
            industrial properties.
          </p>

          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-[#015696]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#015696]" />
            Client Experience
          </div>
        </div>

      </div>
    </section>
  );
}