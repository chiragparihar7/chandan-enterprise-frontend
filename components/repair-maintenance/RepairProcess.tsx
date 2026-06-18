"use client";

import { motion } from "framer-motion";
import {
  Search,
  ClipboardCheck,
  PenTool,
  Wrench,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "Free Site Inspection",
    description:
      "Our experts visit your property and identify the root cause of leakage, cracks, dampness or renovation requirements.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Technical Assessment",
    description:
      "Detailed evaluation of the affected area along with recommended repair, waterproofing or renovation solutions.",
  },
  {
    number: "03",
    icon: PenTool,
    title: "Custom Solution & Quotation",
    description:
      "We prepare a tailored work plan with transparent pricing and execution timeline.",
  },
  {
    number: "04",
    icon: Wrench,
    title: "Professional Execution",
    description:
      "Our skilled team executes the work using premium materials and industry-approved methods.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Quality Inspection",
    description:
      "Every project undergoes thorough quality checks to ensure durability and long-term performance.",
  },
  {
    number: "06",
    icon: Headphones,
    title: "Warranty & Support",
    description:
      "Post-project support and warranty assistance for complete peace of mind.",
  },
];

export default function RepairProcess() {
  return (
    <section className="relative overflow-hidden bg-white py-24">

      {/* Background */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-100 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-100 blur-[120px]" />

      <div className="relative mx-auto max-w-[1280px] px-5 lg:px-8">

        {/* Header */}

        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            Our Working Process
          </span>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Simple, Transparent &
            <span className="block text-cyan-600">
              Professional Process
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            From inspection to completion, we follow a proven process
            that ensures quality workmanship, transparency and
            long-lasting results.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-20">

          {/* Desktop Line */}

          <div className="absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-cyan-300 to-blue-500 lg:block" />
                    <div className="space-y-10 lg:space-y-16">

            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className={`relative flex items-center ${
                    index % 2 === 0
                      ? "lg:justify-start"
                      : "lg:justify-end"
                  }`}
                >

                  {/* Timeline Dot */}

                  <div className="absolute left-1/2 top-1/2 hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-cyan-500 shadow-xl lg:block" />

                  {/* Card */}

                  <div className="w-full lg:w-[46%]">

                    <div className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_15px_50px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(6,182,212,0.15)]">

                      {/* Number */}

                      <div className="absolute right-5 top-4 text-6xl font-black text-slate-100">
                        {step.number}
                      </div>

                      {/* Glow */}

                      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-100 blur-3xl" />
                      </div>

                      {/* Icon */}

                      <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50">

                        <Icon
                          size={30}
                          className="text-cyan-600"
                        />

                      </div>

                      {/* Content */}

                      <div className="relative z-10">

                        <h3 className="text-2xl font-bold text-slate-900">
                          {step.title}
                        </h3>

                        <p className="mt-4 leading-relaxed text-slate-600">
                          {step.description}
                        </p>

                      </div>

                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

        {/* Bottom Process Summary */}

        <div className="mt-24">

          <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-gradient-to-r from-cyan-50 via-white to-blue-50 p-8 lg:p-12">

            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

              <div>

                <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-700">
                  Hassle-Free Experience
                </span>

                <h3 className="mt-5 text-3xl font-bold text-slate-900 lg:text-4xl">
                  From Inspection To Completion,
                  <span className="block text-cyan-600">
                    We Handle Everything.
                  </span>
                </h3>

                <p className="mt-5 max-w-3xl text-lg text-slate-600">
                  Whether it's waterproofing, renovation,
                  false ceiling, gypsum partition, painting,
                  repair work or complete property maintenance,
                  our team manages the entire process with
                  professionalism and transparency.
                </p>

              </div>

              <div className="grid grid-cols-2 gap-4 lg:w-[320px]">

                <div className="rounded-2xl border border-cyan-200 bg-white p-5 text-center">

                  <h4 className="text-3xl font-bold text-cyan-600">
                    500+
                  </h4>

                  <p className="mt-1 text-sm text-slate-600">
                    Projects
                  </p>

                </div>

                <div className="rounded-2xl border border-cyan-200 bg-white p-5 text-center">

                  <h4 className="text-3xl font-bold text-cyan-600">
                    10+
                  </h4>

                  <p className="mt-1 text-sm text-slate-600">
                    Years
                  </p>

                </div>

                <div className="rounded-2xl border border-cyan-200 bg-white p-5 text-center">

                  <h4 className="text-3xl font-bold text-cyan-600">
                    95%
                  </h4>

                  <p className="mt-1 text-sm text-slate-600">
                    Satisfaction
                  </p>

                </div>

                <div className="rounded-2xl border border-cyan-200 bg-white p-5 text-center">

                  <h4 className="text-3xl font-bold text-cyan-600">
                    50KM
                  </h4>

                  <p className="mt-1 text-sm text-slate-600">
                    Coverage
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}