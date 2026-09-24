"use client";

import {
  ArrowUpRight,
  Building2,
  Briefcase,
  Factory,
  Hospital,
  Hotel,
  Home,
  ShieldCheck,
} from "lucide-react";

export const categories = [
  {
    id: "01",
    title: "Residential",
    subtitle: "Homes & Apartments",
    description:
      "Waterproofing solutions for homes, apartments, terraces, bathrooms, walls and other residential areas.",
    icon: Home,
  },
  {
    id: "02",
    title: "Commercial",
    subtitle: "Business Properties",
    description:
      "Waterproofing support for offices, commercial buildings, roofs, basements and business spaces.",
    icon: Briefcase,
  },
  {
    id: "03",
    title: "Industrial",
    subtitle: "Facilities & Structures",
    description:
      "Protection solutions for industrial roofs, structures, utility areas and suitable facility spaces.",
    icon: Factory,
  },
  {
    id: "04",
    title: "Builders",
    subtitle: "Construction Projects",
    description:
      "Waterproofing support for builders and construction requirements across suitable project areas.",
    icon: Building2,
  },
  {
    id: "05",
    title: "Hospitals",
    subtitle: "Healthcare Facilities",
    description:
      "Waterproofing requirements for hospitals, healthcare buildings, wet areas, roofs and other suitable spaces.",
    icon: Hospital,
  },
  {
    id: "06",
    title: "Hotels",
    subtitle: "Hospitality Properties",
    description:
      "Waterproofing solutions for hotels, hospitality spaces, terraces, wet areas and other property requirements.",
    icon: Hotel,
  },
];

export default function ClientCategories() {
  return (
    <section className="relative overflow-hidden bg-[#f1f8fc] py-10 md:py-12 lg:py-14">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-[-180px] h-[480px] w-[480px] rounded-full bg-[#015696]/5 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-[-180px] h-[480px] w-[480px] rounded-full bg-[#016db5]/5 blur-[120px]" />

      <div className="container-chandan relative z-10">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <div className="mb-5 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-[#015696]" />

            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#015696]">
              Industries We Serve
            </span>

            <span className="h-px w-8 bg-[#015696]" />
          </div>

          <h2 className="text-3xl font-bold leading-tight text-[#092a43] md:text-4xl lg:text-5xl">
            Waterproofing solutions across
            <span className="block text-[#015696]">
              different industries.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#64748b] md:text-base">
            Different buildings have different surfaces, usage patterns and
            water-related requirements. Our waterproofing services can be
            discussed around the specific needs of each property type.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.id}
                className="group relative overflow-hidden rounded-[22px] border border-[#dce8f0] bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#b8d7e8] hover:shadow-[0_18px_45px_rgba(9,42,67,0.10)]"
              >
                {/* Background Number */}
                <div className="pointer-events-none absolute right-[-8px] top-[-15px] select-none text-[100px] font-bold leading-none text-[#015696]/[0.035] transition-all duration-500 group-hover:text-[#015696]/[0.07]">
                  {item.id}
                </div>

                {/* Top Row */}
                <div className="relative flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef8fd] text-[#015696] transition-all duration-300 group-hover:bg-[#015696] group-hover:text-white">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <span className="text-xs font-bold tracking-[0.12em] text-[#c0ced7]">
                    {item.id}
                  </span>
                </div>

                {/* Content */}
                <div className="relative mt-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#94a3b8]">
                    {item.subtitle}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-[#092a43] transition-colors duration-300 group-hover:text-[#015696]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#64748b]">
                    {item.description}
                  </p>
                </div>

                {/* Bottom */}
                <div className="mt-7 flex items-center justify-between border-t border-[#e8f0f5] pt-5">
                  <div className="flex items-center gap-2">
                    <ShieldCheck
                      size={15}
                      className="text-[#015696]"
                      strokeWidth={1.8}
                    />

                    <span className="text-[11px] font-semibold text-[#64748b]">
                      Requirement Focused
                    </span>
                  </div>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#dce8f0] text-[#64748b] transition-all duration-300 group-hover:border-[#015696] group-hover:bg-[#015696] group-hover:text-white">
                    <ArrowUpRight size={14} />
                  </div>
                </div>

                {/* Hover Accent */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#015696] transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex flex-col gap-5 rounded-[20px] border border-[#d6e7ef] bg-white px-6 py-6 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <p className="text-sm font-semibold text-[#092a43]">
              Have a waterproofing requirement?
            </p>

            <p className="mt-1 text-xs leading-5 text-[#64748b]">
              Residential, commercial, industrial and specialized property
              requirements.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#015696] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0b3f67]"
          >
            Discuss Your Requirement
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}