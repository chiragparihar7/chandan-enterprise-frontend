
import {
  ArrowDownRight,
  ArrowRight,
  CheckCircle2,
  Droplets,
  Layers3,
  Paintbrush,
  ShieldAlert,
  Waves,
  Wrench,
} from "lucide-react";

const problems = [
  {
    number: "01",
    title: "Terrace & Roof Leakage",
    description:
      "Address water penetration that can affect ceilings, walls, and interior finishes.",
    icon: Droplets,
  },
  {
    number: "02",
    title: "Damp Walls & Seepage",
    description:
      "Investigate damp patches, moisture marks, and recurring paint damage.",
    icon: Waves,
  },
  {
    number: "03",
    title: "Bathroom Leakage",
    description:
      "Identify possible leakage around bathroom floors, joints, and adjoining areas.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Wall Cracks & Plaster Damage",
    description:
      "Assess cracks and deteriorating plaster before deciding on a suitable repair.",
    icon: ShieldAlert,
  },
  {
    number: "05",
    title: "Peeling Paint & Surface Damage",
    description:
      "Restore affected finishes after investigating the cause of deterioration.",
    icon: Paintbrush,
  },
  {
    number: "06",
    title: "General Building Maintenance",
    description:
      "Address visible wear and repair needs across residential and commercial properties.",
    icon: Wrench,
  },
];

export default function ProblemsSection() {
  return (
    <section
      id="problems"
      aria-labelledby="problems-heading"
      className="relative overflow-hidden bg-background-soft py-10 sm:py-12 lg:py-14"
    >
      <div className="container-chandan">
        {/* Section Intro */}
        <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-chandan-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-chandan-primary">
                Identify the Problem
              </span>
            </div>

            <h2
              id="problems-heading"
              className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-chandan-navy sm:text-5xl lg:text-6xl"
            >
              Small warning signs.
              <span className="mt-2 block text-text-muted">
                Bigger problems if ignored.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-8 text-text-secondary lg:pb-2">
            Water leakage, dampness, and surface damage can have different
            underlying causes. Recognising the signs helps you plan the
            appropriate inspection and repair.
          </p>
        </div>

        {/* Premium Asymmetrical Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-8">
          {/* Left Feature Panel */}
          <div className="relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-3xl bg-chandan-navy p-7 text-white sm:p-10 lg:min-h-[650px] lg:p-11">
            {/* Decorative Shapes */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full border border-white/10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-6 h-44 w-44 rounded-full border border-white/10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-chandan-primary/20 blur-3xl"
            />

            <div className="relative z-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-blue-200">
                <Droplets size={27} strokeWidth={1.6} />
              </div>

              <p className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                Protect Your Property
              </p>

              <h3 className="mt-4 max-w-md text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Is moisture damaging your building?
              </h3>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-300 sm:text-base">
                Leaks and damp patches may reappear when the underlying
                source is not addressed. Start by understanding where the
                moisture is coming from.
              </p>
            </div>

            <div className="relative z-10 mt-12">
              <div className="space-y-4 border-t border-white/15 pt-6">
                {[
                  "Visible damp patches or water stains",
                  "Peeling paint or damaged plaster",
                  "Recurring leakage after rainfall",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-blue-300"
                    />
                    <span className="text-sm leading-6 text-slate-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-8 inline-flex min-h-12 w-full items-center justify-between gap-4 rounded-xl bg-white px-5 py-3 text-sm font-bold text-chandan-navy transition-colors duration-300 hover:bg-blue-50 sm:w-auto sm:min-w-64"
              >
                Discuss Your Property Issue
                <ArrowRight size={19} />
              </a>
            </div>
          </div>

          {/* Right Numbered Problem List */}
          <div className="overflow-hidden rounded-3xl border border-border bg-white px-5 sm:px-8 lg:px-9">
            <div className="flex items-center justify-between gap-4 border-b border-border-light py-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-chandan-primary">
                  Common Issues
                </p>
                <p className="mt-1 text-sm text-text-muted">
                  Repair and maintenance concerns
                </p>
              </div>

              <span className="rounded-lg bg-surface-blue px-3 py-2 text-xs font-bold text-chandan-primary">
                06 AREAS
              </span>
            </div>

            <div className="divide-y divide-border-light">
              {problems.map((problem) => {
                const Icon = problem.icon;

                return (
                  <a
                    key={problem.number}
                    href="#contact"
                    className="group flex gap-4 py-6 transition-colors duration-300 sm:gap-5 sm:py-7"
                    aria-label={`Discuss ${problem.title} with Chandan Enterprises`}
                  >
                    <span className="w-7 shrink-0 pt-1 text-xs font-bold tracking-wider text-text-light transition-colors group-hover:text-chandan-primary sm:w-9">
                      {problem.number}
                    </span>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-background-soft text-text-secondary transition-all duration-300 group-hover:bg-surface-blue group-hover:text-chandan-primary sm:h-12 sm:w-12">
                      <Icon size={22} strokeWidth={1.7} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-bold leading-6 text-chandan-navy transition-colors group-hover:text-chandan-primary sm:text-lg">
                        {problem.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-text-muted">
                        {problem.description}
                      </p>
                    </div>

                    <div className="flex shrink-0 items-center self-center text-text-light transition-all duration-300 group-hover:translate-x-1 group-hover:text-chandan-primary">
                      <ArrowDownRight size={20} />
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="border-t border-border-light py-5">
              <p className="text-xs leading-6 text-text-muted">
                Repair methods depend on the condition of the affected area
                and the underlying cause.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Information Strip */}
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-border bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-blue text-chandan-primary">
              <Wrench size={20} />
            </div>

            <div>
              <h3 className="font-bold text-chandan-navy">
                Need help identifying the right repair?
              </h3>
              <p className="mt-1 text-sm leading-6 text-text-secondary">
                Contact Chandan Enterprises to discuss your building
                maintenance requirements in Ahmedabad.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-bold text-chandan-navy transition-all duration-300 hover:border-chandan-primary hover:bg-surface-blue hover:text-chandan-primary"
          >
            Contact Our Team
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
