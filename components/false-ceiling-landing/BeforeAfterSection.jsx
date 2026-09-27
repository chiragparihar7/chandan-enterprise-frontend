import { ArrowRight, Maximize2 } from "lucide-react";

export default function BeforeAfterSection() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      {/* Architectural background */}
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#1687c5]/[0.035] blur-[120px]" />

      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[380px] w-[380px] opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(#dce9ef 1px, transparent 1px), linear-gradient(90deg, #dce9ef 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "linear-gradient(to top right, black, transparent 75%)",
          WebkitMaskImage:
            "linear-gradient(to top right, black, transparent 75%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="grid gap-8 border-b border-[#dce8f0] pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#015696]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#015696]">
                Transformation
              </span>
            </div>

            <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-[1.06] tracking-[-0.04em] text-[#061b2b] sm:text-4xl lg:text-[46px]">
              See the difference
              <span className="block text-[#015696]">
                a planned ceiling can make.
              </span>
            </h2>
          </div>

          <div className="lg:max-w-[600px] lg:justify-self-end">
            <p className="text-[15px] leading-7 text-[#64748b] sm:text-base">
              A well-planned ceiling can change the visual balance of a room by
              introducing considered levels, lighting integration and a cleaner
              overall finish.
            </p>

            <div className="mt-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#94a3b8]">
              <span>Before</span>

              <span className="h-px w-10 bg-[#dce8f0]" />

              <ArrowRight className="h-3.5 w-3.5 text-[#015696]" />

              <span className="h-px w-10 bg-[#dce8f0]" />

              <span>After</span>
            </div>
          </div>
        </div>

        {/* Transformation */}
        <div className="mt-10 lg:mt-12">
          <div className="grid gap-0 border border-[#dce8f0] bg-[#f7f9fb] lg:grid-cols-2">
            {/* Before */}
            <div className="group relative min-h-[380px] overflow-hidden border-b border-[#dce8f0] lg:min-h-[560px] lg:border-b-0 lg:border-r">
              <img
                src="/FalseCiling/false_ceiling_before.png"
                alt="Before false ceiling installation"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.015]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#061b2b]/55 via-transparent to-[#061b2b]/10" />

              {/* Label */}
              <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center border border-white/25 bg-[#061b2b]/25 text-[10px] font-bold text-white backdrop-blur-md">
                    01
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/80">
                    Before
                  </span>
                </div>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-6 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/60">
                  Existing condition
                </p>

                <h3 className="mt-2 text-xl font-semibold text-white">
                  Before the ceiling transformation
                </h3>
              </div>
            </div>

            {/* After */}
            <div className="group relative min-h-[380px] overflow-hidden lg:min-h-[560px]">
              <img
                src="/FalseCiling/false_ceiling_after.png"
                alt="After false ceiling installation"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.015]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#061b2b]/60 via-transparent to-[#061b2b]/10" />

              {/* Label */}
              <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center bg-[#015696] text-[10px] font-bold text-white">
                    02
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/90">
                    After
                  </span>
                </div>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-6 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/70">
                  Planned finish
                </p>

                <h3 className="mt-2 text-xl font-semibold text-white">
                  After the ceiling transformation
                </h3>
              </div>
            </div>

            {/* Center divider */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex">
              <div className="flex h-12 w-12 items-center justify-center border border-white/30 bg-white text-[#015696] shadow-[0_8px_30px_rgba(9,42,67,0.12)]">
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Transformation details */}
        <div className="grid border-x border-b border-[#dce8f0] sm:grid-cols-3">
          <div className="border-b border-[#dce8f0] px-5 py-5 sm:border-b-0 sm:border-r">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#94a3b8]">
              Ceiling levels
            </p>

            <p className="mt-2 text-sm font-semibold text-[#092a43]">
              More considered proportions
            </p>
          </div>

          <div className="border-b border-[#dce8f0] px-5 py-5 sm:border-b-0 sm:border-r">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#94a3b8]">
              Lighting
            </p>

            <p className="mt-2 text-sm font-semibold text-[#092a43]">
              Integrated into the design
            </p>
          </div>

          <div className="px-5 py-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#94a3b8]">
              Finish
            </p>

            <p className="mt-2 text-sm font-semibold text-[#092a43]">
              Cleaner visual character
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-7 flex flex-col gap-4 border-t border-[#dce8f0] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-[10px] leading-5 text-[#9aa8b0]">
            Use genuine project photographs here. Do not present stock or
            placeholder images as completed customer transformations.
          </p>

          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#015696]">
            <Maximize2 className="h-3.5 w-3.5" />
            Before → After
          </div>
        </div>
      </div>
    </section>
  );
}