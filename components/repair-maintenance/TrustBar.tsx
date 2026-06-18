"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Award,
  ShieldCheck,
  MapPin,
} from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: 500,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    icon: Award,
    value: 10,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: ShieldCheck,
    value: 100,
    suffix: "%",
    label: "Quality Focus",
  },
  {
    icon: MapPin,
    value: 50,
    suffix: " KM",
    label: "Service Radius",
  },
];

function Counter({
  end,
  suffix,
}: {
  end: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 1800;

    const increment =
      end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function TrustBar() {
  return (
    <section className="relative overflow-hidden bg-white py-20">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-100 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-100 blur-[120px]" />

      <div className="relative mx-auto max-w-[1280px] px-5 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            Trusted Across Ahmedabad
          </span>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Proven Results.
            <span className="block text-cyan-600">
              Trusted Expertise.
            </span>
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Delivering repair, waterproofing and renovation
            solutions with quality workmanship and reliable service.
          </p>

        </div>

        {/* Stats Grid */}

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                      {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-cyan-200 hover:shadow-xl"
              >
                {/* Top Accent */}
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-cyan-500 to-blue-500" />

                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50">

                  <Icon
                    size={30}
                    className="text-cyan-600"
                  />

                </div>

                {/* Counter */}
                <h3 className="text-4xl font-bold text-slate-900 lg:text-5xl">
                  <Counter
                    end={item.value}
                    suffix={item.suffix}
                  />
                </h3>

                {/* Label */}
                <p className="mt-3 text-lg font-semibold text-slate-800">
                  {item.label}
                </p>

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-100 blur-3xl" />
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Trust Features */}

        <div className="mt-16 rounded-[32px] border border-slate-200 bg-gradient-to-r from-slate-50 via-white to-slate-50 p-8 lg:p-10">

          <div className="grid gap-8 text-center md:grid-cols-2 lg:grid-cols-4">

            <div>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">
                ✓
              </div>

              <h4 className="mt-4 font-semibold text-slate-900">
                Free Inspection
              </h4>

              <p className="mt-2 text-sm text-slate-600">
                Detailed site assessment before work starts
              </p>
            </div>

            <div>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">
                ✓
              </div>

              <h4 className="mt-4 font-semibold text-slate-900">
                Expert Team
              </h4>

              <p className="mt-2 text-sm text-slate-600">
                Skilled professionals with industry experience
              </p>
            </div>

            <div>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">
                ✓
              </div>

              <h4 className="mt-4 font-semibold text-slate-900">
                Premium Materials
              </h4>

              <p className="mt-2 text-sm text-slate-600">
                High-quality products for long-lasting results
              </p>
            </div>

            <div>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">
                ✓
              </div>

              <h4 className="mt-4 font-semibold text-slate-900">
                Warranty Support
              </h4>

              <p className="mt-2 text-sm text-slate-600">
                Reliable after-service assistance and support
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}