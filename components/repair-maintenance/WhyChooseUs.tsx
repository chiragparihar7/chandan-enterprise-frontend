"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  Building2,
  Wrench,
  Clock3,
  IndianRupee,
  Users,
  MapPin,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Warranty Support",
    desc: "Long-lasting solutions backed by service assurance.",
  },
  {
    icon: Building2,
    title: "Complete Property Solutions",
    desc: "Repair, waterproofing, renovation, interiors and civil works.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    desc: "Skilled engineers, supervisors and trained technicians.",
  },
  {
    icon: Clock3,
    title: "Fast Response",
    desc: "Quick inspections and timely project execution.",
  },
  {
    icon: BadgeCheck,
    title: "Premium Materials",
    desc: "High-performance products from trusted brands.",
  },
  {
    icon: Wrench,
    title: "Modern Techniques",
    desc: "Advanced repair and waterproofing methods.",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    desc: "Clear quotations without hidden costs.",
  },
  {
    icon: MapPin,
    title: "Ahmedabad Coverage",
    desc: "Serving Ahmedabad and nearby areas efficiently.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#08111F] via-[#0B1220] to-[#08111F] py-24 text-white">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-[1280px] px-5 lg:px-8">

        {/* Header */}

        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Why Chandan Enterprise
          </span>

          <h2 className="mt-6 text-3xl font-bold sm:text-4xl lg:text-5xl">

            Trusted By Property Owners
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Across Ahmedabad
            </span>

          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-400">
            We combine experience, skilled workmanship and premium materials
            to deliver durable repair, waterproofing and renovation solutions.
          </p>

        </div>

        {/* Features Grid */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                      {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30"
              >
                {/* Glow Effect */}

                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
                </div>

                {/* Icon */}

                <div className="relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10">

                  <Icon
                    size={28}
                    className="text-cyan-400"
                  />

                </div>

                {/* Content */}

                <div className="relative z-10">

                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {item.desc}
                  </p>

                </div>

                {/* Bottom Accent */}

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />

              </motion.div>
            );
          })}
        </div>

      
        {/* Premium CTA Strip */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true }}
          className="mt-16"
        >

          <div className="overflow-hidden rounded-[32px] border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-slate-900 to-blue-500/10 p-8 lg:p-12">

            <div className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">

              <div>

                <h3 className="text-3xl font-bold text-white">
                  One Partner For All Property Needs
                </h3>

                <p className="mt-4 max-w-3xl text-slate-400">
                  Whether you need waterproofing, repair work,
                  renovation, false ceiling, gypsum partition,
                  painting or complete building maintenance,
                  Chandan Enterprise delivers end-to-end solutions
                  with quality workmanship and reliable support.
                </p>

              </div>

              <div className="flex flex-wrap justify-center gap-3 lg:justify-end">

                {[
                  "Waterproofing",
                  "Renovation",
                  "False Ceiling",
                  "Gypsum Partition",
                  "Civil Works",
                  "Painting",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}