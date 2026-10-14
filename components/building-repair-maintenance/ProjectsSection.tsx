import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  MessageSquareText,
  Search,
  Wrench,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Share Your Requirement",
    description:
      "Tell us about the leakage, dampness, cracks, or other building repair issues you have noticed.",
    icon: MessageSquareText,
    label: "Initial Enquiry",
  },
  {
    number: "02",
    title: "Inspect the Problem",
    description:
      "Assess the affected area and investigate the likely cause before deciding on a repair approach.",
    icon: Search,
    label: "Site Assessment",
  },
  {
    number: "03",
    title: "Plan the Repair",
    description:
      "Discuss the recommended repair method, work requirements, and relevant project details.",
    icon: ClipboardList,
    label: "Repair Planning",
  },
  {
    number: "04",
    title: "Complete the Work",
    description:
      "Carry out the agreed repair work and review the treated area upon completion.",
    icon: Wrench,
    label: "Repair & Review",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="our-process"
      aria-labelledby="process-heading"
      className="relative overflow-hidden bg-background-soft py-10 sm:py-12 lg:py-14"
    >
      <div className="container-chandan">
        {/* Section Heading */}
        <div className="mb-12 grid grid-cols-1 gap-6 sm:mb-16 lg:grid-cols-[1.1fr_0.7fr] lg:items-end lg:gap-12">
          {/* Left: Title */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-chandan-primary" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-chandan-primary">
                Our Working Process
              </span>
            </div>

            <h2
              id="process-heading"
              className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-chandan-navy sm:text-5xl lg:text-6xl"
            >
              From the first enquiry
              <span className="mt-2 block text-text-muted">
                to the final repair.
              </span>
            </h2>
          </div>

          {/* Right: Description */}
          <div className="lg:justify-self-end lg:pb-2">
            <span className="mb-4 block h-1 w-12 rounded-full bg-chandan-primary" />

            <p className="max-w-lg text-base leading-8 text-text-secondary sm:text-lg">
              A clear process helps you understand the problem, evaluate the
              proposed work, and move forward with your building repair
              requirements.
            </p>

            <div className="mt-5 flex items-center gap-3 text-sm font-semibold text-chandan-navy">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-blue text-chandan-primary">
                <ArrowRight size={16} />
              </span>

              <span>Simple, structured, and transparent</span>
            </div>
          </div>
        </div>

        {/* Process Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
          {/* Left Information Panel */}
          <aside className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-chandan-navy p-7 text-white sm:p-9 lg:min-h-[590px] lg:p-10">
            {/* Decorative Circles */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border border-white/10"
            />

            <div className="relative z-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-blue-200">
                <ClipboardList size={26} strokeWidth={1.7} />
              </div>

              <p className="mt-9 text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
                A Clear Way Forward
              </p>

              <h3 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Understand first.
                <span className="block text-blue-200">Repair with a plan.</span>
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                Every property has different repair requirements. Our approach
                starts with understanding the affected area and discussing the
                appropriate next steps.
              </p>
            </div>

            <div className="relative z-10 mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-start gap-3">
                <CheckCircle2
                  size={21}
                  className="mt-0.5 shrink-0 text-blue-200"
                />

                <div>
                  <h4 className="text-sm font-bold text-white">
                    Clear Communication
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Discuss the issue, repair requirements, and proposed scope
                    before proceeding with the work.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="relative z-10 mt-6 inline-flex min-h-12 items-center justify-between gap-4 rounded-xl bg-white px-5 py-3 text-sm font-bold text-chandan-navy transition-all duration-300 hover:bg-blue-50"
            >
              Start Your Enquiry
              <ArrowRight size={18} />
            </a>
          </aside>

          {/* Right Process Timeline */}
          <div className="relative rounded-3xl border border-border bg-white p-6 sm:p-9 lg:p-10">
            <div className="mb-8 flex items-center justify-between gap-4 border-b border-border-light pb-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-chandan-primary">
                  Step by Step
                </p>
                <h3 className="mt-2 text-xl font-bold text-chandan-navy sm:text-2xl">
                  How we work
                </h3>
              </div>

              <span className="rounded-xl border border-border bg-background-soft px-3 py-2 text-xs font-bold text-text-secondary">
                04 STEPS
              </span>
            </div>

            <div className="relative">
              {/* Connecting Timeline */}
              <div
                aria-hidden="true"
                className="absolute bottom-12 left-[23px] top-10 w-px bg-border sm:left-[27px]"
              />

              <div className="space-y-8 sm:space-y-9">
                {processSteps.map((step) => {
                  const Icon = step.icon;

                  return (
                    <article
                      key={step.number}
                      className="group relative flex gap-4 sm:gap-6"
                    >
                      {/* Timeline Icon */}
                      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-white text-chandan-primary transition-all duration-300 group-hover:border-chandan-primary group-hover:bg-chandan-primary group-hover:text-white sm:h-14 sm:w-14">
                        <Icon size={22} strokeWidth={1.7} />
                      </div>

                      {/* Step Content */}
                      <div className="min-w-0 flex-1 pb-1">
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <span className="text-xs font-bold tracking-[0.15em] text-chandan-primary">
                            STEP {step.number}
                          </span>

                          <span className="rounded-full bg-surface-blue px-3 py-1 text-[11px] font-semibold text-chandan-primary">
                            {step.label}
                          </span>
                        </div>

                        <h4 className="text-lg font-bold tracking-tight text-chandan-navy transition-colors group-hover:text-chandan-primary sm:text-xl">
                          {step.title}
                        </h4>

                        <p className="mt-2 max-w-lg text-sm leading-7 text-text-muted">
                          {step.description}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* Timeline Footer */}
            <div className="mt-9 rounded-xl border border-border bg-background-soft p-4 sm:p-5">
              <p className="text-sm leading-7 text-text-secondary">
                <span className="font-bold text-chandan-navy">
                  Have a building repair concern?
                </span>{" "}
                Start with an enquiry and share the details of the affected area
                to discuss the next step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
