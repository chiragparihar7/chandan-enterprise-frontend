import { ArrowRight, Check } from "lucide-react";
import { processSteps } from "./data";

export default function ProcessTimeline() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fb] py-10 sm:py-12 lg:py-14">
      {/* Architectural background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full bg-[#1687c5]/[0.035] blur-[120px]" />

        <div
          className="absolute bottom-0 right-0 h-[500px] w-[500px] opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(#dce9ef 1px, transparent 1px), linear-gradient(90deg, #dce9ef 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage:
              "linear-gradient(to top left, black, transparent 75%)",
            WebkitMaskImage:
              "linear-gradient(to top left, black, transparent 75%)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="grid gap-8 border-b border-[#dce8f0] pb-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#015696]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#015696]">
                Our Process
              </span>
            </div>

            <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#061b2b] sm:text-4xl lg:text-[46px]">
              From the first measurement
              <span className="block text-[#015696]">
                to the final finish.
              </span>
            </h2>
          </div>

          <div className="lg:max-w-[600px] lg:justify-self-end">
            <p className="text-[15px] leading-7 text-[#64748b] sm:text-base">
              A structured workflow helps keep the design, installation and
              finishing stages clear from the beginning.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#94a3b8]">
              <span>Discuss</span>
              <span className="text-[#cbd5dc]">•</span>
              <span>Measure</span>
              <span className="text-[#cbd5dc]">•</span>
              <span>Plan</span>
              <span className="text-[#cbd5dc]">•</span>
              <span>Install</span>
              <span className="text-[#cbd5dc]">•</span>
              <span>Finish</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mt-12 lg:mt-16">
          {/* Desktop connecting line */}
          <div className="absolute left-[8.33%] right-[8.33%] top-[34px] hidden h-px bg-[#cbdde6] lg:block" />

          <div className="grid gap-0 lg:grid-cols-6">
            {processSteps.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.step}
                  className="group relative border-l border-[#dce8f0] px-5 py-7 first:border-l-0 lg:min-h-[330px] lg:border-l lg:px-6 lg:py-0"
                >
                  {/* Mobile / tablet connector */}
                  {index !== processSteps.length - 1 && (
                    <div className="absolute bottom-0 left-[39px] top-[82px] w-px bg-[#dce8f0] lg:hidden" />
                  )}

                  {/* Step marker */}
                  <div className="relative z-10 flex items-start gap-5 lg:block">
                    <div className="relative flex h-[68px] w-[68px] shrink-0 items-center justify-center border border-[#cbdde6] bg-white text-[#015696] transition-all duration-300 group-hover:border-[#015696] group-hover:bg-[#eff8fc]">
                      <Icon
                        className="h-[21px] w-[21px]"
                        strokeWidth={1.6}
                      />

                      {/* Step number */}
                      <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center bg-[#015696] px-1 text-[8px] font-bold text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="lg:mt-6">
                      <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#94a3b8]">
                        Step {item.step}
                      </span>

                      <h3 className="mt-2 text-lg font-semibold leading-6 tracking-[-0.015em] text-[#092a43] transition-colors duration-300 group-hover:text-[#015696]">
                        {item.title}
                      </h3>

                      <p className="mt-2 max-w-[180px] text-sm leading-6 text-[#64748b]">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Desktop bottom detail */}
                  <div className="mt-7 hidden items-center gap-2 lg:flex">
                    <span className="h-px w-7 bg-[#dce8f0] transition-all duration-300 group-hover:w-12 group-hover:bg-[#015696]" />

                    <Check
                      className="h-3.5 w-3.5 text-[#b0bec7] transition-colors duration-300 group-hover:text-[#015696]"
                      strokeWidth={2}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom process summary */}
        <div className="mt-10 border-t border-[#dce8f0] pt-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#015696]">
                A clear process
              </p>

              <p className="mt-2 text-sm text-[#64748b]">
                Each stage is discussed according to the requirements of the
                space and agreed scope of work.
              </p>
            </div>

            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#015696]">
              <span>Start</span>

              <span className="flex h-8 w-8 items-center justify-center border border-[#dce8f0] bg-white">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>

              <span>Finish</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}