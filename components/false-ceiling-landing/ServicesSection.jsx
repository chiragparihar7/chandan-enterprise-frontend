import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { falseCeilingServices } from "./data";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14"
    >
      {/* Subtle background detail */}
      <div className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-[#1687c5]/[0.035] blur-[100px]" />

      <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="grid gap-8 border-b border-[#dce8f0] pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#015696]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#015696]">
                Our Services
              </span>
            </div>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#061b2b] sm:text-4xl lg:text-[46px]">
              False ceiling solutions
              <span className="block text-[#015696]">
                for modern interiors.
              </span>
            </h2>
          </div>

          <div className="lg:justify-self-end lg:max-w-[600px]">
            <p className="text-[15px] leading-7 text-[#64748b] sm:text-base sm:leading-7">
              From residential rooms to offices and commercial spaces, we plan
              each ceiling around the space, lighting requirements, ceiling
              height and preferred interior style.
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#94a3b8]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1687c5]" />
              Residential
              <span className="text-[#cbd5dc]">•</span>
              Office
              <span className="text-[#cbd5dc]">•</span>
              Commercial
            </div>
          </div>
        </div>

        {/* =====================================================
            SERVICE LIST
        ===================================================== */}

        <div className="mt-8 border-t border-[#e8f0f5]">
          {falseCeilingServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.number}
                href="/services"
                className="group relative grid gap-5 border-b border-[#e8f0f5] py-6 transition-colors duration-300 hover:bg-[#f8fbfd] sm:grid-cols-[80px_56px_1fr_auto] sm:items-center sm:gap-6 sm:px-5 lg:py-7"
              >
                {/* =================================================
                    NUMBER
                ================================================= */}

                <div className="flex items-center justify-between sm:block">
                  <span className="text-xs font-bold tracking-[0.15em] text-[#a5b4be] transition-colors duration-300 group-hover:text-[#015696]">
                    {service.number}
                  </span>

                  {/* Mobile icon */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f1f8fc] text-[#015696] sm:hidden">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
                  </div>
                </div>

                {/* =================================================
                    ICON
                ================================================= */}

                <div className="hidden h-11 w-11 items-center justify-center border border-[#dce8f0] bg-white text-[#015696] transition-all duration-300 group-hover:border-[#015696] group-hover:bg-[#015696] group-hover:text-white sm:flex">
                  <Icon
                    className="h-[18px] w-[18px]"
                    strokeWidth={1.7}
                  />
                </div>

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.015em] text-[#092a43] transition-colors duration-300 group-hover:text-[#015696] sm:text-xl">
                    {service.title}
                  </h3>

                  <p className="mt-1.5 max-w-2xl text-sm leading-6 text-[#64748b]">
                    {service.description}
                  </p>
                </div>

                {/* =================================================
                    ACTION
                ================================================= */}

                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#94a3b8] transition-colors duration-300 group-hover:text-[#015696]">
                  <span className="hidden sm:inline">
                    Explore
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dce8f0] bg-white transition-all duration-300 group-hover:border-[#015696] group-hover:bg-[#015696] group-hover:text-white">
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM NOTE
        ===================================================== */}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-[#94a3b8]">
            Every ceiling requirement is discussed according to the actual
            space, design direction and installation requirements.
          </p>

          <Link
            href="/services"
            className="inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#015696] transition-colors hover:text-[#0b3f67]"
          >
            View all services
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}