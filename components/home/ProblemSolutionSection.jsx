import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  AlertTriangle,
  Droplets,
  Home,
  Building2,
  Waves,
  ShieldCheck,
} from "lucide-react";

const problems = [
  {
    icon: Droplets,
    title: "Water Leakage",
    description:
      "Water entering through roofs, terraces, walls or other exposed areas can lead to recurring leakage and moisture problems.",
    solution:
      "Roof, terrace and exterior waterproofing solutions",
    href: "/services/roof-waterproofing",
  },
  {
    icon: Home,
    title: "Damp Walls & Seepage",
    description:
      "Persistent damp patches, peeling surfaces and moisture marks can indicate water penetration or rising dampness.",
    solution:
      "Exterior wall waterproofing and dampness treatment",
    href: "/services/exterior-wall-waterproofing",
  },
  {
    icon: Building2,
    title: "Basement Moisture",
    description:
      "Below-ground areas can experience water ingress and seepage when moisture enters through walls, joints or other vulnerable points.",
    solution:
      "Basement waterproofing and suitable leakage treatment",
    href: "/services/basement-waterproofing",
  },
  {
    icon: Waves,
    title: "Wet Area Leakage",
    description:
      "Bathrooms, swimming pools and water-retaining areas require appropriate waterproofing to help control unwanted water movement.",
    solution:
      "Bathroom and swimming pool waterproofing",
    href: "/services/bathroom-waterproofing",
  },
];

export default function ProblemSolutionSection() {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="grid items-end gap-5 border-b border-[#DCE8F0] pb-7 lg:grid-cols-[1fr_auto]">
          <div className="max-w-[760px]">
            <span className="text-xs font-bold uppercase tracking-[3px] text-[#015696]">
              Identify The Problem
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.8px] text-[#092A43] sm:text-4xl lg:text-[44px]">
              Different Water Problems Need the Right Waterproofing Approach
            </h2>

            <p className="mt-4 max-w-[720px] text-base leading-7 text-[#475569]">
              Leakage does not always come from the same source. The affected
              area, surface condition and type of water movement can all
              influence the treatment required. Chandan Enterprises helps
              identify the problem and determine the appropriate waterproofing
              service for the property.
            </p>
          </div>

          <div className="hidden items-center gap-2 rounded-xl border border-[#DCE8F0] bg-[#F7F9FC] px-4 py-3 lg:flex">
            <ShieldCheck
              size={19}
              className="text-[#015696]"
            />

            <span className="text-sm font-semibold text-[#092A43]">
              Inspection-led solutions
            </span>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">

          {/* LEFT IMAGE / EXPLANATION */}
          <div className="relative overflow-hidden rounded-2xl border border-[#DCE8F0] bg-[#092A43]">
            <div className="absolute inset-0">
              <Image
                src="/repair-maintenance/repair_service.jpg"
                alt="Water leakage inspection and waterproofing assessment"
                fill
                className="object-cover opacity-45"
                sizes="(max-width: 1024px) 100vw, 35vw"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#061B2B] via-[#092A43]/65 to-[#092A43]/20" />

            <div className="relative flex min-h-[420px] flex-col justify-between p-6 sm:p-8">

              {/* Top icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/10 backdrop-blur-sm">
                <AlertTriangle
                  size={23}
                  className="text-white"
                />
              </div>

              {/* Bottom content */}
              <div>
                <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#8FD3F4]">
                  Why inspection matters
                </span>

                <h3 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Find the source before choosing the treatment.
                </h3>

                <p className="mt-4 max-w-[500px] text-sm leading-6 text-white/75">
                  A visible damp patch or water mark does not always reveal
                  where the water is entering. Understanding the affected
                  area helps determine which waterproofing or leakage
                  treatment may be appropriate.
                </p>

                <Link
                  href="/contact"
                  className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#092A43] transition-all duration-300 hover:bg-[#F1F8FC]"
                >
                  Request an Inspection
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT PROBLEM CARDS */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {problems.map((problem) => {
              const Icon = problem.icon;

              return (
                <article
                  key={problem.title}
                  className="group rounded-2xl border border-[#DCE8F0] bg-[#F7F9FC] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#B9D8E8] hover:bg-white hover:shadow-[0_15px_35px_rgba(9,42,67,0.08)]"
                >
                  {/* Icon */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm transition-colors duration-300 group-hover:bg-[#E6F3FA]">
                    <Icon
                      size={21}
                      className="text-[#015696]"
                      strokeWidth={2}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-lg font-bold text-[#092A43]">
                    {problem.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm leading-6 text-[#64748B]">
                    {problem.description}
                  </p>

                  {/* Solution */}
                  <div className="mt-4 border-t border-[#DCE8F0] pt-4">
                    <p className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#015696]">
                      Possible Service
                    </p>

                    <p className="mt-1 text-sm font-semibold leading-5 text-[#092A43]">
                      {problem.solution}
                    </p>
                  </div>

                  {/* Link */}
                  <Link
                    href={problem.href}
                    className="group/link mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#015696]"
                  >
                    Explore Solution
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>

        {/* BOTTOM INFORMATION STRIP */}
        <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-[#DCE8F0] bg-[#F1F8FC] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <p className="text-sm font-bold text-[#092A43]">
              Seeing dampness, seepage or recurring water leakage?
            </p>

            <p className="mt-1 text-sm text-[#64748B]">
              Share your property requirement with Chandan Enterprises.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#015696] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0B3F67]"
          >
            Discuss Your Requirement
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}