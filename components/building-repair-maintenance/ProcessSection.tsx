"use client";

import {
  ArrowRight,
  ClipboardCheck,
  Search,
  Wrench,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Share Your Requirement",
    description:
      "Tell us about your building repair, waterproofing, leakage, or maintenance requirements.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Inspect the Problem",
    description:
      "Assess the affected area to understand the visible damage and identify the repair requirements.",
    icon: Search,
  },
  {
    number: "03",
    title: "Plan the Repair",
    description:
      "Determine a suitable repair approach based on the condition of the building and the work required.",
    icon: CheckCircle2,
  },
  {
    number: "04",
    title: "Complete the Work",
    description:
      "Proceed with the agreed repair or maintenance work according to the discussed scope.",
    icon: Wrench,
  },
];

export default function ProcessSection() {
  return (
    <section
      id="our-process"
      className="bg-background-soft py-10 sm:py-12 lg:py-14"
    >
      <div className="container-chandan">
        {/* Section Heading */}
        <div className="mb-12 grid grid-cols-1 gap-6 sm:mb-16 lg:grid-cols-[1.1fr_0.7fr] lg:items-end lg:gap-12">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-chandan-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-chandan-primary">
                Our Working Process
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-chandan-navy sm:text-5xl lg:text-6xl">
              From the first enquiry
              <span className="mt-2 block text-text-muted">
                to the final repair.
              </span>
            </h2>
          </div>

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

        {/* Process Steps */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative rounded-2xl border border-border bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-chandan-primary/40 hover:shadow-lg sm:p-7"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-4xl font-bold tracking-tight text-chandan-primary/20">
                    {step.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-blue text-chandan-primary transition group-hover:bg-chandan-primary group-hover:text-white">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-chandan-navy">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-text-secondary">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <div className="absolute -right-3 top-12 z-10 hidden h-6 w-6 items-center justify-center rounded-full border border-border bg-white text-chandan-primary lg:flex">
                    <ArrowRight size={14} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col gap-5 rounded-2xl bg-chandan-navy p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div>
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Have a building repair requirement?
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-300 sm:text-base">
              Discuss your waterproofing, leakage, or maintenance needs with
              Chandan Enterprises.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-lg bg-chandan-primary px-6 py-4 text-sm font-semibold text-white transition hover:bg-chandan-primary-light"
          >
            Get in Touch
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}