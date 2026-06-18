"use client";

import { motion } from "framer-motion";
import {
  Droplets,
  Home,
  Building2,
  AlertTriangle,
  ShieldAlert,
  Hammer,
} from "lucide-react";

const problems = [
  {
    icon: Droplets,
    title: "Water Leakage",
  },
  {
    icon: Home,
    title: "Wall Cracks",
  },
  {
    icon: Building2,
    title: "Dampness & Seepage",
  },
  {
    icon: AlertTriangle,
    title: "Structural Damage",
  },
  {
    icon: ShieldAlert,
    title: "Failed Waterproofing",
  },
  {
    icon: Hammer,
    title: "Aging Buildings",
  },
];

export default function ProblemsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-100 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-100 blur-[120px]" />

      <div className="relative mx-auto max-w-[1280px] px-5 lg:px-8">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >

          <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-600">
            Common Property Issues
          </span>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">

            Are You Facing
            <span className="block text-red-500">
              These Problems?
            </span>

          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Small issues today can become major structural
            problems tomorrow. Our experts identify the root
            cause and provide long-lasting solutions.
          </p>

        </motion.div>

        {/* Problems Grid */}

        <div className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                      {problems.map((problem, index) => {
            const Icon = problem.icon;

            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-red-200 hover:shadow-xl"
              >
                {/* Top Accent */}
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-red-400 to-red-500" />

                <div className="flex items-start gap-4">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-50">
                    <Icon
                      size={26}
                      className="text-red-500"
                    />
                  </div>

                  <div>

                    <h3 className="text-xl font-semibold text-slate-900">
                      {problem.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      This issue can lead to higher repair costs,
                      property damage and long-term structural
                      deterioration if not treated on time.
                    </p>

                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Solution Section */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="mt-20"
        >

          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-cyan-50 via-white to-blue-50">

            <div className="grid gap-10 p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">

              <div>

                <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-700">
                  Our Solution
                </span>

                <h3 className="mt-5 text-3xl font-bold text-slate-900 lg:text-4xl">
                  We Don't Just Fix Problems.
                  <span className="block text-cyan-600">
                    We Prevent Them From Returning.
                  </span>
                </h3>

                <p className="mt-5 max-w-3xl text-lg text-slate-600">
                  Our team performs a detailed inspection,
                  identifies the root cause and applies
                  professional waterproofing, repair and
                  renovation techniques for long-lasting
                  protection and peace of mind.
                </p>

              </div>

              <div className="rounded-3xl border border-cyan-200 bg-white p-8 shadow-sm">

                <div className="space-y-4">

                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-cyan-500" />
                    <span className="font-medium text-slate-700">
                      Site Inspection
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-cyan-500" />
                    <span className="font-medium text-slate-700">
                      Root Cause Analysis
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-cyan-500" />
                    <span className="font-medium text-slate-700">
                      Professional Treatment
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-cyan-500" />
                    <span className="font-medium text-slate-700">
                      Warranty Support
                    </span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

        {/* Bottom Trust Strip */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true }}
          className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >

          <div className="grid gap-4 text-center md:grid-cols-4">

            <div>
              <h4 className="font-semibold text-slate-900">
                Water Leakage Repair
              </h4>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">
                Waterproofing Solutions
              </h4>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">
                Building Renovation
              </h4>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">
                Civil Maintenance Works
              </h4>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}