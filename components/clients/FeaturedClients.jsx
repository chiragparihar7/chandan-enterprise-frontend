"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

const clientWork = [
  {
    id: "01",
    category: "Residential",
    title: "Terrace Waterproofing",
    description:
      "Protection-focused waterproofing for terraces affected by rainwater, moisture and surface-related leakage.",
    image: "/Services/terrace_waterproofing.jpg",
  },
  {
    id: "02",
    category: "Residential & Commercial",
    title: "Bathroom Waterproofing",
    description:
      "Waterproofing solutions for bathrooms and wet areas where seepage and moisture require attention.",
    image: "/Services/bathroom_waterproofing.jpg",
  },
  {
    id: "03",
    category: "Commercial & Industrial",
    title: "Basement Protection",
    description:
      "Waterproofing support for basement areas where water ingress and moisture-related conditions need treatment.",
    image: "/Services/basement_waterproofings.jpg",
  },
];

export default function FeaturedClients() {
  return (
    <section className="relative overflow-hidden bg-[#061b2b] py-10 md:py-12 lg:py-14">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#015696]/10 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#016db5]/10 blur-[130px]" />

      {/* Subtle Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container-chandan relative z-10">
        {/* Header */}
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:mb-16">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#46a9d8]" />

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8bc9e8]">
                Client Requirements
              </span>
            </div>

            <h2 className="max-w-2xl text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
              Solutions shaped around
              <span className="block text-[#46a9d8]">
                the property requirement.
              </span>
            </h2>
          </div>

          <div className="lg:pl-14">
            <p className="max-w-xl text-sm leading-7 text-[#a9bdca] md:text-base">
              From residential terraces to commercial and industrial areas,
              waterproofing requirements can vary significantly. We focus on
              understanding the affected area before discussing the suitable
              treatment approach.
            </p>
          </div>
        </div>

        {/* Featured Work */}
        <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          {/* Main Feature */}
          <article className="group relative min-h-[500px] overflow-hidden rounded-[26px] border border-white/10 bg-[#092a43] md:min-h-[560px]">
            <Image
              src={clientWork[0].image}
              alt={clientWork[0].title}
              fill
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#061b2b] via-[#061b2b]/25 to-transparent" />

            {/* Number */}
            <div className="absolute right-7 top-6 text-6xl font-bold text-white/10">
              {clientWork[0].id}
            </div>

            <div className="absolute inset-x-0 bottom-0 p-7 md:p-10">
              <span className="inline-flex rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
                {clientWork[0].category}
              </span>

              <div className="mt-5 flex items-end justify-between gap-6">
                <div>
                  <h3 className="text-3xl font-bold text-white md:text-4xl">
                    {clientWork[0].title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/70">
                    {clientWork[0].description}
                  </p>
                </div>

                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#092a43] transition-transform duration-300 group-hover:scale-110 md:flex">
                  <ArrowUpRight size={19} />
                </div>
              </div>
            </div>
          </article>

          {/* Side Features */}
          <div className="grid gap-5">
            {clientWork.slice(1).map((item) => (
              <article
                key={item.id}
                className="group relative min-h-[270px] overflow-hidden rounded-[26px] border border-white/10 bg-[#092a43]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061b2b] via-[#061b2b]/45 to-transparent" />

                <div className="absolute right-5 top-5 text-4xl font-bold text-white/10">
                  {item.id}
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8bc9e8]">
                    {item.category}
                  </span>

                  <div className="mt-2 flex items-end justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 line-clamp-2 text-xs leading-5 text-white/65">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#092a43]">
                      <ArrowUpRight size={15} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom Information Bar */}
        <div className="mt-6 flex flex-col gap-5 rounded-[20px] border border-white/10 bg-white/[0.04] px-6 py-6 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#015696] text-white">
              <ShieldCheck size={18} strokeWidth={1.8} />
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Every requirement starts with the property.
              </p>

              <p className="mt-1 text-xs leading-5 text-[#8fa6b5]">
                Share your affected area and property type to discuss the
                appropriate waterproofing requirement.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#092a43] transition-all duration-300 hover:bg-[#46a9d8] hover:text-white"
          >
            Discuss Your Requirement
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}