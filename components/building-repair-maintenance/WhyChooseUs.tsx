"use client";

import {
  ShieldCheck,
  ClipboardCheck,
  Wrench,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Problem-Focused Solutions",
    description:
      "We focus on identifying the source of leakage, dampness, cracks, and other building issues before planning the repair.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Practical Repair Planning",
    description:
      "The proposed work is based on the visible condition of the affected area and the repair requirements.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Multiple Building Services",
    description:
      "From waterproofing and plaster repairs to painting and general maintenance, address different building needs in one place.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Local Service in Ahmedabad",
    description:
      "Get in touch with Chandan Enterprises for building repair and maintenance requirements in Ahmedabad.",
    icon: MapPin,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-background-soft py-10 sm:py-12 lg:py-14">
      <div className="container-chandan">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-chandan-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-chandan-primary">
                Why Chandan Enterprises
              </span>
            </div>

            <h2 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-chandan-navy sm:text-5xl">
              Building repairs planned around your needs.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-text-secondary sm:text-lg">
              Every building problem needs the right approach. We help you
              address waterproofing, seepage, wall damage, painting, and
              maintenance requirements with practical repair solutions.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-chandan-primary px-6 py-4 text-sm font-semibold text-white transition hover:bg-chandan-primary-dark"
            >
              Discuss Your Requirements
              <ArrowUpRight size={18} />
            </a>

            <div className="mt-10 flex items-start gap-3 border-t border-border pt-6">
              <CheckCircle2
                size={21}
                className="mt-0.5 shrink-0 text-chandan-primary"
              />
              <p className="text-sm leading-7 text-text-secondary">
                Clear communication, practical recommendations, and repair
                work based on your building's condition.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.number}
                  className="group rounded-2xl border border-border bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-chandan-primary/40 hover:shadow-lg sm:p-7"
                >
                  <div className="mb-7 flex items-center justify-between">
                    <span className="text-sm font-bold tracking-widest text-chandan-primary">
                      {reason.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-blue text-chandan-primary transition group-hover:bg-chandan-primary group-hover:text-white">
                      <Icon size={23} strokeWidth={1.8} />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-chandan-navy">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-text-secondary">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}