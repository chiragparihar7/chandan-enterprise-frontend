"use client";

import {
  ArrowRight,
  ClipboardCheck,
  FileSearch,
  MessageCircle,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const processSteps = [
  {
    id: "01",
    title: "Share Your Requirement",
    description:
      "Tell us about your property, affected area and the waterproofing or leakage issue you are experiencing.",
    icon: MessageCircle,
  },
  {
    id: "02",
    title: "Understand The Condition",
    description:
      "The requirement and visible signs of water-related issues are discussed to understand the situation.",
    icon: FileSearch,
  },
  {
    id: "03",
    title: "Discuss The Approach",
    description:
      "A suitable waterproofing treatment approach can be discussed according to the property and affected surface.",
    icon: ClipboardCheck,
  },
  {
    id: "04",
    title: "Execute The Work",
    description:
      "The selected waterproofing treatment is carried out with appropriate surface preparation and execution.",
    icon: Wrench,
  },
  {
    id: "05",
    title: "Review The Area",
    description:
      "The completed work is reviewed to ensure the treated area has been properly addressed.",
    icon: ShieldCheck,
  },
];

export default function ProcessTimeline() {
  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-12 lg:py-14">
      {/* Background Accent */}
      <div className="pointer-events-none absolute left-[-180px] top-[20%] h-[420px] w-[420px] rounded-full bg-[#eef8fd] blur-[120px]" />

      <div className="container-chandan relative z-10">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-[#015696]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#015696]">
              Our Workflow
            </span>

            <span className="h-px w-8 bg-[#015696]" />
          </div>

          <h2 className="text-3xl font-bold leading-tight text-[#092a43] md:text-4xl lg:text-5xl">
            From enquiry to
            <span className="text-[#015696]"> execution.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#64748b] md:text-base">
            A straightforward process designed to understand the requirement,
            discuss the appropriate treatment and move towards execution.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="relative hidden lg:block">
          {/* Connecting Line */}
          <div className="absolute left-[10%] right-[10%] top-[34px] h-px bg-[#dce8f0]" />

          <div className="grid grid-cols-5 gap-5">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.id} className="group relative text-center">
                  {/* Number / Icon */}
                  <div className="relative z-10 mx-auto flex h-[68px] w-[68px] items-center justify-center rounded-full border border-[#cfe3ed] bg-white text-[#015696] shadow-[0_5px_20px_rgba(9,42,67,0.06)] transition-all duration-500 group-hover:border-[#015696] group-hover:bg-[#015696] group-hover:text-white">
                    <Icon size={23} strokeWidth={1.7} />
                  </div>

                  {/* Number */}
                  <div className="mt-5 text-[10px] font-bold tracking-[0.18em] text-[#94a3b8]">
                    STEP {step.id}
                  </div>

                  <h3 className="mt-2 text-base font-bold leading-6 text-[#092a43] transition-colors duration-300 group-hover:text-[#015696]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-xs leading-5 text-[#64748b]">
                    {step.description}
                  </p>

                  {/* Arrow */}
                  {index < processSteps.length - 1 && (
                    <ArrowRight
                      size={14}
                      className="absolute -right-3 top-[27px] z-20 hidden text-[#c1d4df] xl:block"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Timeline */}
        <div className="relative lg:hidden">
          {/* Vertical Line */}
          <div className="absolute bottom-8 left-[25px] top-8 w-px bg-[#dce8f0]" />

          <div className="space-y-5">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.id}
                  className="group relative flex gap-5 rounded-[20px] border border-[#dce8f0] bg-[#f8fbfd] p-5 transition-all duration-300 hover:border-[#b8d7e8] hover:bg-white hover:shadow-[0_12px_30px_rgba(9,42,67,0.07)]"
                >
                  {/* Icon */}
                  <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#cfe3ed] bg-white text-[#015696] shadow-sm transition-all duration-300 group-hover:bg-[#015696] group-hover:text-white">
                    <Icon size={18} strokeWidth={1.7} />
                  </div>

                  {/* Content */}
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#94a3b8]">
                      Step {step.id}
                    </div>

                    <h3 className="mt-1 text-base font-bold text-[#092a43]">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#64748b]">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-12 flex flex-col gap-5 rounded-[20px] border border-[#dce8f0] bg-[#f1f8fc] px-6 py-6 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#015696] shadow-sm">
              <ShieldCheck size={18} strokeWidth={1.8} />
            </div>

            <div>
              <p className="text-sm font-semibold text-[#092a43]">
                Understand. Discuss. Execute. Review.
              </p>

              <p className="mt-1 text-xs text-[#64748b]">
                A requirement-focused approach to waterproofing work.
              </p>
            </div>
          </div>

          <a
            href="#enquiry"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#015696] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0b3f67]"
          >
            Start Your Enquiry
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}