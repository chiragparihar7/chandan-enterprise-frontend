"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Phone,
  Droplets,
  Building2,
  Wrench,
  Clock3,
} from "lucide-react";

const services = [
  "Terrace & roof waterproofing",
  "Bathroom leakage & seepage",
  "Damp walls & plaster repair",
  "Building repair & maintenance",
];

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#061b2b] text-white">
      {/* Subtle architectural background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#015696]/25 blur-3xl" />
        <div className="absolute -bottom-48 left-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:px-10 lg:py-24 xl:px-10">
        {/* LEFT: Main message */}
        <div className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#015696]/40 text-sky-300">
              <Wrench size={17} />
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-200 sm:text-sm">
              Chandan Enterprise
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-sky-400 sm:block" />
            <span className="hidden text-xs font-medium text-slate-400 sm:block">
              Ahmedabad, Gujarat
            </span>
          </div>

          <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[68px]">
            Protect Your Building.
            <span className="mt-2 block bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-400 bg-clip-text pb-2 text-transparent">
              Repair It Right.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            From terrace leakage and bathroom seepage to damp walls and damaged
            plaster, get dependable building repair and waterproofing solutions
            tailored to your property in Ahmedabad.
          </p>

          {/* Service checklist */}
          <div className="mt-8 grid gap-x-6 gap-y-4 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service} className="flex items-start gap-3">
                <CheckCircle2
                  size={19}
                  className="mt-0.5 shrink-0 text-sky-400"
                />
                <span className="text-sm font-medium leading-6 text-slate-200">
                  {service}
                </span>
              </div>
            ))}
          </div>

          {/* Primary actions */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/building-repair-maintenance#contact"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[#0878c9] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-950/30 transition duration-300 hover:-translate-y-1 hover:bg-[#0b8ce3] hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
            >
              Request a Site Inspection
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15 transition group-hover:translate-x-1">
                <ArrowRight size={18} />
              </span>
            </Link>

            <a
              href="tel:+919558189429"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/[0.06] px-6 py-4 text-sm font-bold text-white transition duration-300 hover:border-sky-300/60 hover:bg-white/10"
            >
              <Phone size={18} />
              Call Our Team
            </a>
          </div>

          {/* Trust details */}
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <ShieldCheck size={18} className="text-sky-400" />
              Property-focused solutions
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Clock3 size={18} className="text-sky-400" />
              Inspection by appointment
            </div>
          </div>
        </div>

        {/* RIGHT: Real project photograph */}
        <div className="relative mx-auto w-full max-w-[620px] lg:max-w-none">
          <div className="absolute -inset-3 rounded-[30px] border border-white/10" />

          <div className="relative overflow-hidden rounded-[24px] border border-white/15 bg-[#0b3048] shadow-2xl shadow-black/40">
            <div className="relative aspect-[4/4.3] min-h-[380px] sm:aspect-[4/3.6] lg:aspect-[4/4.5]">
              <Image
                src="/landing.png"
                alt="Building repair and waterproofing work by Chandan Enterprise"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />

              {/* Image contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#041522] via-[#041522]/15 to-transparent" />

              {/* Image label */}
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-[#061b2b]/80 px-4 py-2.5 text-xs font-bold tracking-wide text-white backdrop-blur-md sm:left-6 sm:top-6">
                <Droplets size={16} className="text-sky-300" />
                WATERPROOFING & REPAIR
              </div>

              <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-[#061b2b]/70 text-white backdrop-blur-md sm:right-6 sm:top-6">
                <Building2 size={21} />
              </div>

              {/* Bottom image content */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-9">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-300/25 bg-sky-300/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-sky-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
                  Building care, done right
                </div>

                <h2 className="max-w-md text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                  A stronger building starts with the right care.
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-slate-200 sm:text-base">
                  Identify the problem, assess the affected surfaces and choose
                  a repair solution suited to your property.
                </p>

                <Link
                  href="/building-repair-maintenance#services"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-sky-300 transition hover:gap-3 hover:text-white"
                >
                  Explore Our Services
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>

          {/* Floating service card */}
          <div className="relative mx-3 -mt-6 rounded-2xl border border-white/10 bg-[#0b2b40] p-4 shadow-xl sm:mx-6 sm:p-5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300">
                <ShieldCheck size={24} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-white">
                  Protect your property investment
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm">
                  Practical repair solutions for residential and commercial
                  buildings.
                </p>
              </div>
              <ArrowRight size={20} className="ml-auto shrink-0 text-sky-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
