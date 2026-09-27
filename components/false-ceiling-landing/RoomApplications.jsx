import { ArrowUpRight } from "lucide-react";
import { roomApplications } from "./data";

export default function RoomApplications() {
  return (
    <section className="relative overflow-hidden bg-[#f1f8fc] py-10 sm:py-12 lg:py-14">
      {/* Subtle architectural background */}
      <div className="pointer-events-none absolute left-[-180px] top-[-160px] h-[480px] w-[480px] rounded-full bg-white/70 blur-[110px]" />

      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-[45%] opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(#cfe3ed 1px, transparent 1px), linear-gradient(90deg, #cfe3ed 1px, transparent 1px)",
          backgroundSize: "90px 90px",
          maskImage:
            "linear-gradient(to left, black, transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to left, black, transparent 90%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="grid gap-8 border-b border-[#cfe1ea] pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#015696]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#015696]">
                Applications
              </span>
            </div>

            <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#061b2b] sm:text-4xl lg:text-[46px]">
              One approach,
              <span className="block text-[#015696]">
                different spaces.
              </span>
            </h2>
          </div>

          <div className="lg:max-w-[600px] lg:justify-self-end">
            <p className="text-[15px] leading-7 text-[#64748b] sm:text-base">
              A living room and an office need different ceiling decisions. We
              consider the function, furniture, lighting and visual language of
              each space before planning the work.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#94a3b8]">
              <span>Residential</span>
              <span className="text-[#c5d6de]">•</span>
              <span>Workplace</span>
              <span className="text-[#c5d6de]">•</span>
              <span>Commercial</span>
              <span className="text-[#c5d6de]">•</span>
              <span>Hospitality</span>
            </div>
          </div>
        </div>

        {/* Application list */}
        <div className="mt-10 grid border-l border-t border-[#cfe1ea] sm:grid-cols-2 lg:grid-cols-4">
          {roomApplications.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative flex min-h-[220px] flex-col justify-between border-b border-r border-[#cfe1ea] bg-white/75 p-6 transition-colors duration-300 hover:bg-white sm:p-7 lg:min-h-[245px] lg:p-8"
              >
                {/* Top */}
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center border border-[#d5e5ec] bg-[#f7fbfd] text-[#015696] transition-all duration-300 group-hover:border-[#a9cddd] group-hover:bg-[#eff8fc]">
                    <Icon
                      className="h-[17px] w-[17px]"
                      strokeWidth={1.7}
                    />
                  </div>

                  <span className="text-[11px] font-bold tracking-[0.16em] text-[#a8b6be] transition-colors duration-300 group-hover:text-[#015696]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-10">
                  <h3 className="text-lg font-semibold tracking-[-0.015em] text-[#092a43] transition-colors duration-300 group-hover:text-[#015696]">
                    {item.title}
                  </h3>

                  <div className="mt-4 flex items-center gap-3">
                    <span className="h-px w-7 bg-[#d5e5ec] transition-all duration-300 group-hover:w-12 group-hover:bg-[#015696]" />

                    <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#a0adb5]">
                      Application
                    </span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="absolute bottom-6 right-6 sm:bottom-7 sm:right-7 lg:bottom-8 lg:right-8">
                  <span className="flex h-8 w-8 items-center justify-center border border-[#d5e5ec] bg-white text-[#a2b0b8] transition-all duration-300 group-hover:border-[#015696] group-hover:bg-[#015696] group-hover:text-white">
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-8 flex flex-col gap-4 border-t border-[#cfe1ea] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-xs leading-5 text-[#7f929e]">
            Ceiling planning changes with the purpose of the room. The same
            design language does not need to be applied everywhere.
          </p>

          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#015696]">
            <span className="h-px w-8 bg-[#015696]" />
            Space-specific planning
          </div>
        </div>
      </div>
    </section>
  );
}