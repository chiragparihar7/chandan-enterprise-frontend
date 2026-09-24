"use client";

import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock3,
  Hammer,
  ShieldCheck,
  Wallet,
} from "lucide-react";

const features = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Protection-Focused Solutions",
    desc: "Waterproofing solutions planned around leakage, seepage, dampness and the actual condition of the property.",
  },
  {
    number: "02",
    icon: BadgeCheck,
    title: "Quality Materials",
    desc: "Appropriate waterproofing materials selected according to the application, surface and project requirements.",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Skilled Workmanship",
    desc: "Professional execution with attention to preparation, application and finishing details.",
  },
  {
    number: "04",
    icon: Clock3,
    title: "Planned Execution",
    desc: "A structured work process helps keep the project organised from assessment through completion.",
  },
  {
    number: "05",
    icon: Wallet,
    title: "Clear & Transparent",
    desc: "Clear communication about the proposed scope helps clients understand the work before execution.",
  },
  {
    number: "06",
    icon: Building2,
    title: "Property Expertise",
    desc: "Solutions planned for residential, commercial and industrial waterproofing requirements.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#F7F9FC] py-10 sm:py-12 lg:py-14">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Soft blue glow */}
        <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#EAF5FB] blur-[100px]" />

        <div className="absolute -bottom-40 -left-32 h-[380px] w-[380px] rounded-full bg-white blur-[100px]" />

        {/* Very subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#092A43 1px, transparent 1px), linear-gradient(90deg, #092A43 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container-chandan relative z-10">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-10 flex flex-col justify-between gap-6 lg:mb-12 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            {/* Label */}
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#015696]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#015696]">
                Why Choose Us
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-[1.08] tracking-[-0.035em] text-[#092A43] sm:text-4xl lg:text-[48px]">
              Built around the right
              <span className="text-[#015696]"> waterproofing approach.</span>
            </h2>
          </div>

          <div className="max-w-md lg:pb-1">
            <p className="text-sm leading-7 text-[#64748B]">
              From understanding the problem to executing the work, our focus
              remains on practical solutions, appropriate materials and
              professional workmanship.
            </p>
          </div>
        </div>

        {/* =====================================================
            3 COLUMN GRID
        ===================================================== */}

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;

            // Middle card of each row gets a slightly different treatment
            const isFeatured = index === 1 || index === 4;

            return (
              <article
                key={item.number}
                className={`group relative min-h-[300px] overflow-hidden rounded-[20px] border p-6 transition-all duration-500 sm:min-h-[310px] sm:p-7 ${
                  isFeatured
                    ? "border-[#BFDCEA] bg-[#EEF8FD] hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(1,86,150,0.10)]"
                    : "border-[#DCE8F0] bg-white hover:-translate-y-1 hover:border-[#BFDCEA] hover:shadow-[0_18px_45px_rgba(9,42,67,0.08)]"
                }`}
              >
                {/* Decorative corner */}
                <div
                  className={`absolute -right-12 -top-12 h-32 w-32 rounded-full transition-transform duration-700 group-hover:scale-125 ${
                    isFeatured
                      ? "bg-[#015696]/[0.06]"
                      : "bg-[#F1F8FC]"
                  }`}
                />

                {/* Number */}
                <span
                  className={`absolute right-6 top-4 select-none text-[76px] font-extrabold leading-none tracking-[-0.08em] transition-all duration-500 ${
                    isFeatured
                      ? "text-[#015696]/[0.09] group-hover:text-[#015696]/[0.13]"
                      : "text-[#092A43]/[0.045] group-hover:text-[#015696]/[0.08]"
                  }`}
                >
                  {item.number}
                </span>

                {/* Top */}
                <div className="relative z-10 flex items-start justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-500 ${
                      isFeatured
                        ? "border-[#C9E2EE] bg-white text-[#015696] shadow-sm"
                        : "border-[#DCE8F0] bg-[#F7F9FC] text-[#015696] group-hover:border-[#015696] group-hover:bg-[#015696] group-hover:text-white"
                    }`}
                  >
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <ArrowUpRight
                    size={18}
                    className={`mt-1 transition-all duration-300 ${
                      isFeatured
                        ? "text-[#8AAFC1] group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#015696]"
                        : "text-[#B4C3CE] group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#015696]"
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 mt-12">
                  <div className="mb-3 flex items-center gap-2">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        isFeatured ? "bg-[#015696]" : "bg-[#46A9D8]"
                      }`}
                    />

                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#94A3B8]">
                      Chandan Advantage
                    </span>
                  </div>

                  <h3 className="max-w-[270px] text-xl font-bold leading-tight tracking-[-0.025em] text-[#092A43]">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-[310px] text-sm leading-6 text-[#64748B]">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom accent */}
                <div
                  className={`absolute bottom-0 left-0 h-[3px] transition-all duration-500 ${
                    isFeatured
                      ? "w-1/3 bg-[#015696] group-hover:w-full"
                      : "w-0 bg-[#015696] group-hover:w-full"
                  }`}
                />
              </article>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM TRUST BAR
        ===================================================== */}

        <div className="mt-5 rounded-[18px] border border-[#DCE8F0] bg-white px-5 py-4 shadow-[0_5px_20px_rgba(9,42,67,0.04)] sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Left */}
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EEF8FD] text-[#015696]">
                <CheckCircle2 size={17} />
              </div>

              <div>
                <p className="text-xs font-bold text-[#092A43]">
                  Professional waterproofing approach
                </p>

                <p className="mt-0.5 text-[11px] text-[#94A3B8]">
                  Assessment · Planning · Material Selection · Execution
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#94A3B8]">
              <span>Residential</span>

              <span className="h-1 w-1 rounded-full bg-[#B8CCDA]" />

              <span>Commercial</span>

              <span className="h-1 w-1 rounded-full bg-[#B8CCDA]" />

              <span>Industrial</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}