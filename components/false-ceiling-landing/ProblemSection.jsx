import {
  EyeOff,
  LightbulbOff,
  Minus,
  PlugZap,
  ArrowUpRight,
} from "lucide-react";

const problems = [
  {
    number: "01",
    title: "Plain or outdated ceiling",
    description:
      "A flat or unfinished ceiling can make an otherwise well-designed room feel incomplete.",
    icon: EyeOff,
  },
  {
    number: "02",
    title: "Visible wiring & services",
    description:
      "Unplanned wiring and fixtures can interrupt the clean visual flow of an interior.",
    icon: PlugZap,
  },
  {
    number: "03",
    title: "Poor lighting arrangement",
    description:
      "Lighting works better when fixture positions are considered together with the ceiling layout.",
    icon: LightbulbOff,
  },
  {
    number: "04",
    title: "No visual depth",
    description:
      "Layers, profiles and recessed details can help create proportion and visual interest.",
    icon: Minus,
  },
];

export default function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fb] py-10 sm:py-12 lg:py-14">
      {/* Soft architectural background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full bg-[#1687c5]/[0.045] blur-[110px]" />

        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(#dbe8ef 1px, transparent 1px), linear-gradient(90deg, #dbe8ef 1px, transparent 1px)",
            backgroundSize: "100px 100px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 80%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 80%)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="grid gap-10 border-b border-[#dce8f0] pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#015696]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#015696]">
                Start With The Space
              </span>
            </div>

            <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#061b2b] sm:text-4xl lg:text-[46px]">
              Before the design,
              <span className="block text-[#015696]">
                understand the room.
              </span>
            </h2>
          </div>

          <div className="lg:max-w-[590px] lg:justify-self-end">
            <p className="text-[15px] leading-7 text-[#64748b] sm:text-base">
              A false ceiling is not only a decorative element. It can
              influence lighting, wiring, proportions and the overall visual
              balance of an interior.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#94a3b8]">
              <span>Space Planning</span>
              <span className="text-[#cbd5dc]">•</span>
              <span>Lighting</span>
              <span className="text-[#cbd5dc]">•</span>
              <span>Services</span>
              <span className="text-[#cbd5dc]">•</span>
              <span>Proportion</span>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="grid gap-12 pt-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 lg:pt-14">
          {/* Left editorial panel */}
          <div className="relative lg:pr-10">
            <div className="hidden h-full w-px bg-[#dce8f0] lg:absolute lg:right-0 lg:top-0 lg:block" />

            <div className="flex h-12 w-12 items-center justify-center border border-[#cfe1eb] bg-white text-[#015696]">
              <span className="text-sm font-semibold">01</span>
            </div>

            <h3 className="mt-7 max-w-sm text-2xl font-semibold leading-[1.15] tracking-[-0.025em] text-[#092a43] sm:text-3xl">
              Common ceiling issues can affect the entire feel of a space.
            </h3>

            <p className="mt-5 max-w-md text-sm leading-6 text-[#64748b]">
              Identifying these details early helps create a ceiling that
              supports the interior instead of becoming an afterthought.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[#015696]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#94a3b8]">
                What to consider
              </span>
            </div>
          </div>

          {/* Problem list */}
          <div className="border-t border-[#dce8f0]">
            {problems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="group grid gap-5 border-b border-[#dce8f0] py-6 transition-colors duration-300 hover:bg-white sm:grid-cols-[55px_48px_1fr_auto] sm:items-center sm:gap-5 sm:px-5 lg:py-7"
                >
                  {/* Number */}
                  <span className="text-[11px] font-bold tracking-[0.16em] text-[#a1b0ba] transition-colors duration-300 group-hover:text-[#015696]">
                    {item.number}
                  </span>

                  {/* Icon */}
                  <div className="flex h-10 w-10 items-center justify-center border border-[#dce8f0] bg-white text-[#015696] transition-all duration-300 group-hover:border-[#b9d7e6] group-hover:bg-[#eff8fc]">
                    <Icon
                      className="h-[17px] w-[17px]"
                      strokeWidth={1.7}
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-base font-semibold tracking-[-0.01em] text-[#092a43] transition-colors duration-300 group-hover:text-[#015696] sm:text-lg">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 max-w-xl text-sm leading-6 text-[#64748b]">
                      {item.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden sm:flex">
                    <span className="flex h-9 w-9 items-center justify-center border border-[#dce8f0] bg-white text-[#a1b0ba] transition-all duration-300 group-hover:border-[#015696] group-hover:bg-[#015696] group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-8 flex flex-col gap-3 border-t border-[#dce8f0] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-xs leading-5 text-[#94a3b8]">
            Every room has different dimensions, lighting requirements and
            interior priorities. The ceiling should respond to those
            conditions.
          </p>

          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#015696]">
            Designed around the space
          </span>
        </div>
      </div>
    </section>
  );
}