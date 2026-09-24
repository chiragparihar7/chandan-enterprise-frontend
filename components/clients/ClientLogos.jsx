"use client";

import {
  ArrowUpRight,
  Building2,
  Factory,
  Home,
  ShieldCheck,
} from "lucide-react";

const sectors = [
  {
    id: "01",
    title: "Residential",
    subtitle: "Homes & Living Spaces",
    description:
      "Waterproofing support for homes, apartments, terraces, bathrooms and other residential areas.",
    icon: Home,
  },
  {
    id: "02",
    title: "Commercial",
    subtitle: "Business Properties",
    description:
      "Solutions for offices, commercial buildings, business spaces, roofs and other suitable areas.",
    icon: Building2,
  },
  {
    id: "03",
    title: "Industrial",
    subtitle: "Industrial Facilities",
    description:
      "Waterproofing requirements for industrial structures, roofs, utility areas and suitable facilities.",
    icon: Factory,
  },
];

export default function ClientLogos() {
  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-12 lg:py-14">
      {/* Background Accent */}
      <div className="pointer-events-none absolute right-[-180px] top-[-160px] h-[480px] w-[480px] rounded-full bg-[#eef8fd] blur-3xl" />

      <div className="container-chandan relative z-10">
        {/* Top Header */}
        <div className="grid items-end gap-8 border-b border-[#dce8f0] pb-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-[#015696]" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#015696]">
                Client Sectors
              </span>
            </div>

            <h2 className="max-w-xl text-3xl font-bold leading-tight text-[#092a43] md:text-4xl lg:text-5xl">
              Different properties.
              <span className="block text-[#015696]">
                Different requirements.
              </span>
            </h2>
          </div>

          <div className="lg:pb-1 lg:pl-16">
            <p className="max-w-2xl text-sm leading-7 text-[#64748b] md:text-base">
              Chandan Enterprises works around the waterproofing requirements
              of residential, commercial and industrial properties, with the
              treatment approach considered according to the affected area
              and site condition.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Left Statement */}
          <div className="relative flex flex-col justify-between rounded-[24px] bg-[#092a43] p-8 md:p-10">
            {/* Decorative Number */}
            <div className="absolute right-6 top-4 select-none text-[120px] font-bold leading-none text-white/[0.035]">
              03
            </div>

            <div className="relative z-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#015696] text-white">
                <ShieldCheck size={23} strokeWidth={1.8} />
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#7fb9da]">
                Our Approach
              </p>

              <h3 className="mt-3 max-w-sm text-2xl font-bold leading-tight text-white md:text-3xl">
                Protection starts with understanding the property.
              </h3>

              <p className="mt-5 max-w-md text-sm leading-7 text-[#b9cad6]">
                The requirement, affected surface and visible water-related
                condition help shape the conversation around a suitable
                waterproofing solution.
              </p>
            </div>

            <div className="relative z-10 mt-10 flex items-center justify-between border-t border-white/10 pt-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#7f96a7]">
                  Service Focus
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Waterproofing & Leakage Protection
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white">
                <ArrowUpRight size={17} />
              </div>
            </div>
          </div>

          {/* Right Sector List */}
          <div className="divide-y divide-[#dce8f0] border-y border-[#dce8f0]">
            {sectors.map((sector) => {
              const Icon = sector.icon;

              return (
                <div
                  key={sector.id}
                  className="group relative grid gap-5 py-7 transition-all duration-300 md:grid-cols-[70px_1fr_auto] md:items-center md:py-8"
                >
                  {/* Number */}
                  <div className="text-sm font-bold text-[#c3d2dc] transition-colors duration-300 group-hover:text-[#015696]">
                    {sector.id}
                  </div>

                  {/* Icon + Content */}
                  <div className="flex gap-5">
                    <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f1f8fc] text-[#015696] transition-all duration-300 group-hover:bg-[#015696] group-hover:text-white md:flex">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>

                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#94a3b8]">
                        {sector.subtitle}
                      </p>

                      <h3 className="mt-1 text-xl font-bold text-[#092a43] transition-colors duration-300 group-hover:text-[#015696]">
                        {sector.title} Clients
                      </h3>

                      <p className="mt-2 max-w-xl text-sm leading-6 text-[#64748b]">
                        {sector.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#dce8f0] text-[#64748b] transition-all duration-300 group-hover:border-[#015696] group-hover:bg-[#015696] group-hover:text-white md:flex">
                    <ArrowUpRight size={16} />
                  </div>

                  {/* Mobile Icon */}
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#015696] md:hidden">
                    <Icon size={15} />
                    {sector.title}
                  </div>

                  {/* Hover Accent */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#015696] transition-all duration-500 group-hover:w-full" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Service Line */}
        <div className="mt-10 flex flex-col gap-5 rounded-[18px] border border-[#dce8f0] bg-[#f7f9fc] px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef8fd] text-[#015696]">
              <ShieldCheck size={18} />
            </div>

            <div>
              <p className="text-sm font-semibold text-[#092a43]">
                Need waterproofing for your property?
              </p>

              <p className="mt-1 text-xs text-[#64748b]">
                Share the affected area and your property type with us.
              </p>
            </div>
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