import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ceilingTypes } from "./data";

export default function FalseCeilingTypes() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fb] py-10 sm:py-12 lg:py-14">
      {/* Subtle architectural background */}
      <div className="pointer-events-none absolute right-[-160px] top-[-180px] h-[520px] w-[520px] rounded-full bg-[#1687c5]/[0.045] blur-[120px]" />

      <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="grid gap-8 border-b border-[#dce8f0] pb-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#015696]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#015696]">
                Ceiling Options
              </span>
            </div>

            <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#061b2b] sm:text-4xl lg:text-[46px]">
              Choose a ceiling style
              <span className="block text-[#015696]">
                that fits the space.
              </span>
            </h2>
          </div>

          <div className="lg:max-w-[600px] lg:justify-self-end">
            <p className="text-[15px] leading-7 text-[#64748b] sm:text-base">
              Material, system and design should be selected according to the
              room, ceiling height, lighting plan, finish and practical
              requirements of the project.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#94a3b8]">
              <span>Design</span>
              <span className="text-[#cbd5dc]">•</span>
              <span>Material</span>
              <span className="text-[#cbd5dc]">•</span>
              <span>Lighting</span>
              <span className="text-[#cbd5dc]">•</span>
              <span>Application</span>
            </div>
          </div>
        </div>

        {/* Ceiling options */}
        <div className="mt-10 grid border-l border-t border-[#dce8f0] sm:grid-cols-2">
          {ceilingTypes.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href="/services"
                className="group relative flex min-h-[255px] flex-col justify-between border-b border-r border-[#dce8f0] bg-white p-6 transition-colors duration-300 hover:bg-[#fafdff] sm:p-7 lg:min-h-[275px] lg:p-8"
              >
                {/* Top */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center border border-[#dce8f0] bg-[#f7fbfd] text-[#015696] transition-all duration-300 group-hover:border-[#b8d8e7] group-hover:bg-[#eff8fc]">
                      <Icon
                        className="h-[18px] w-[18px]"
                        strokeWidth={1.7}
                      />
                    </div>

                    <span className="text-[11px] font-bold tracking-[0.16em] text-[#a7b4bc] transition-colors duration-300 group-hover:text-[#015696]">
                      0{index + 1}
                    </span>
                  </div>

                  <span className="flex h-9 w-9 items-center justify-center border border-[#dce8f0] text-[#a3b0b8] transition-all duration-300 group-hover:border-[#015696] group-hover:bg-[#015696] group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>

                {/* Content */}
                <div className="mt-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#092a43] transition-colors duration-300 group-hover:text-[#015696]">
                      {item.title}
                    </h3>

                    <span className="border border-[#dce8f0] bg-[#f7f9fb] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#7d8c96]">
                      {item.tag}
                    </span>
                  </div>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-[#64748b]">
                    {item.description}
                  </p>
                </div>

                {/* Bottom detail */}
                <div className="mt-8 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#dce8f0] transition-all duration-300 group-hover:w-14 group-hover:bg-[#015696]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#a0adb5] transition-colors duration-300 group-hover:text-[#015696]">
                    Explore option
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-8 flex flex-col gap-4 border-t border-[#dce8f0] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-xs leading-5 text-[#94a3b8]">
            The suitable ceiling type depends on the space, design intent,
            lighting requirements and practical conditions of the project.
          </p>

          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#015696]">
            <span className="h-px w-8 bg-[#015696]" />
            Find the right system
          </div>
        </div>
      </div>
    </section>
  );
}