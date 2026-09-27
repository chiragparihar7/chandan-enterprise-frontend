import {
  Cable,
  Layers3,
  Lightbulb,
  Palette,
  ScanLine,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const benefits = [
  {
    title: "Cleaner visual finish",
    description:
      "Create a more refined and consistent ceiling surface.",
    icon: ScanLine,
  },
  {
    title: "Integrated lighting",
    description:
      "Plan selected lighting positions into the ceiling layout.",
    icon: Lightbulb,
  },
  {
    title: "Concealed wiring",
    description:
      "Provide a planned ceiling zone for suitable electrical services.",
    icon: Cable,
  },
  {
    title: "Custom design",
    description:
      "Use layers, profiles and details that suit the interior.",
    icon: Palette,
  },
  {
    title: "Visual zoning",
    description:
      "Use ceiling levels and lighting to define different areas.",
    icon: Layers3,
  },
  {
    title: "Modern character",
    description:
      "Bring a contemporary architectural finish to the room.",
    icon: Sparkles,
  },
];

export default function SolutionSection() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      {/* Subtle architectural background */}
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#1687c5]/[0.035] blur-[120px]" />

      <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-[#edf3f6] lg:left-[calc(50%-640px)]" />

      <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="grid gap-8 border-b border-[#dce8f0] pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#015696]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#015696]">
                The Difference
              </span>
            </div>

            <h2 className="mt-5 max-w-xl text-2xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#061b2b] sm:text-3xl lg:text-[40px]">
              Designed to make the ceiling
              <span className="block text-[#015696]">
                part of the architecture.
              </span>
            </h2>
          </div>

          <div className="lg:max-w-[600px] lg:justify-self-end">
            <p className="text-[15px] leading-7 text-[#64748b] sm:text-base">
              Good false ceiling work is not only about adding another layer.
              It is about coordinating the ceiling with lighting, room
              proportions, services and the intended interior experience.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#94a3b8]">
              <span>Form</span>
              <span className="text-[#cbd5dc]">•</span>
              <span>Lighting</span>
              <span className="text-[#cbd5dc]">•</span>
              <span>Function</span>
              <span className="text-[#cbd5dc]">•</span>
              <span>Detail</span>
            </div>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="mt-10 grid border-l border-t border-[#dce8f0] sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative min-h-[250px] border-b border-r border-[#dce8f0] bg-white p-6 transition-colors duration-300 hover:bg-[#f8fbfd] sm:p-7 lg:min-h-[270px] lg:p-8"
              >
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center border border-[#dce8f0] bg-[#f7fbfd] text-[#015696] transition-all duration-300 group-hover:border-[#b8d8e7] group-hover:bg-[#eff8fc]">
                    <Icon
                      className="h-[18px] w-[18px]"
                      strokeWidth={1.7}
                    />
                  </div>

                  <span className="text-[11px] font-bold tracking-[0.16em] text-[#a9b6be] transition-colors duration-300 group-hover:text-[#015696]">
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-12">
                  <h3 className="text-lg font-semibold tracking-[-0.015em] text-[#092a43] transition-colors duration-300 group-hover:text-[#015696]">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-[290px] text-sm leading-6 text-[#64748b]">
                    {item.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-7 left-6 right-6 flex items-center justify-between sm:left-7 sm:right-7 lg:bottom-8 lg:left-8 lg:right-8">
                  <span className="h-px w-8 bg-[#dce8f0] transition-all duration-300 group-hover:w-14 group-hover:bg-[#015696]" />

                  <ArrowUpRight
                    className="h-4 w-4 text-[#c1ccd3] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#015696]"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-8 flex flex-col gap-4 border-t border-[#dce8f0] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-xs leading-5 text-[#94a3b8]">
            The objective is to create a ceiling that supports the room's
            appearance, lighting and practical requirements as one considered
            design.
          </p>

          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#015696]">
            <span className="h-px w-8 bg-[#015696]" />
            Design · Detail · Function
          </div>
        </div>
      </div>
    </section>
  );
}