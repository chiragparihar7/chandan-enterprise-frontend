"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Images,
  MoveHorizontal,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Terrace Leakage Treatment",
    location: "Residential Project",
    before: "/Services/before.jpg",
    after: "/Services/after.jpg",
  },
  {
    id: 2,
    title: "Wall Seepage Treatment",
    location: "Residential Project",
    before: "/Services/before.jpg",
    after: "/Services/after.jpg",
  },
];

export default function BeforeAfterSection() {
  const [activeProject, setActiveProject] = useState(0);

  const project = projects[activeProject];

  const nextProject = () => {
    setActiveProject((current) =>
      current === projects.length - 1 ? 0 : current + 1,
    );
  };

  const previousProject = () => {
    setActiveProject((current) =>
      current === 0 ? projects.length - 1 : current - 1,
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#eef8fd] py-10 sm:py-12 lg:py-14">
      {/* Background Decorative Elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-[#d8effa] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-[#dff3fb] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-180px] left-1/3 h-[450px] w-[450px] rounded-full bg-white/70 blur-3xl"
      />

      {/* Subtle architectural grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#092a43 1px, transparent 1px), linear-gradient(90deg, #092a43 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      <div className="container-chandan relative z-10">
        {/* Header */}
        <div className="grid items-end gap-8 border-b border-[#cfe3ed] pb-8 lg:grid-cols-[1fr_auto]">
          {/* Left */}
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#015696]" />

              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#015696]">
                Project Results
              </span>
            </div>

            <h2 className="text-3xl font-extrabold leading-[1.08] tracking-[-0.045em] text-[#092a43] sm:text-4xl lg:text-[50px]">
              Before & After
              <span className="block text-[#015696]">Waterproofing Work</span>
            </h2>
          </div>

          {/* Right */}
          <div className="max-w-xl lg:pb-1">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#015696] shadow-sm ring-1 ring-[#dce8f0]">
                <Camera size={19} strokeWidth={1.8} />
              </div>

              <div>
                <p className="text-sm font-extrabold text-[#092a43]">
                  See the Difference
                </p>

                <p className="mt-0.5 text-xs text-[#64748b]">
                  Genuine project photography
                </p>
              </div>
            </div>

            <p className="text-base leading-7 text-[#64748b] sm:text-lg">
              Showcase genuine waterproofing work and demonstrate the condition
              of the affected area before treatment and after the completed
              work.
            </p>
          </div>
        </div>

        {/* Project Navigation */}
        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-extrabold text-[#092a43]">
              {String(activeProject + 1).padStart(2, "0")}
            </span>

            <span className="text-sm text-[#94a3b8]">/</span>

            <span className="text-sm font-semibold text-[#94a3b8]">
              {String(projects.length).padStart(2, "0")}
            </span>

            <span className="ml-2 hidden text-xs font-semibold uppercase tracking-[0.12em] text-[#64748b] sm:inline">
              Projects
            </span>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={previousProject}
              aria-label="Previous project"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#cfe3ed] bg-white text-[#092a43] shadow-sm transition-all duration-300 hover:-translate-x-0.5 hover:border-[#015696] hover:bg-[#015696] hover:text-white"
            >
              <ChevronLeft
                size={19}
                className="transition-transform duration-300 group-hover:-translate-x-0.5"
              />
            </button>

            <button
              type="button"
              onClick={nextProject}
              aria-label="Next project"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#cfe3ed] bg-white text-[#092a43] shadow-sm transition-all duration-300 hover:translate-x-0.5 hover:border-[#015696] hover:bg-[#015696] hover:text-white"
            >
              <ChevronRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </button>
          </div>
        </div>

        {/* Main Project Showcase */}
        <div className="relative mt-5">
          {/* Dark accent layer */}
          <div
            aria-hidden="true"
            className="absolute inset-x-4 top-4 bottom-[-10px] rounded-[32px] bg-[#092a43]"
          />

          <div className="relative overflow-hidden rounded-[30px] border border-[#cfe3ed] bg-white shadow-[0_25px_70px_rgba(9,42,67,0.12)]">
            {/* Images */}
            <div className="grid lg:grid-cols-2">
              {/* BEFORE */}
              <div className="group relative min-h-[330px] overflow-hidden bg-[#dce8f0] sm:min-h-[420px] lg:min-h-[500px]">
                <img
                  src={project.before}
                  alt={`${project.title} before waterproofing`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#092a43]/70 via-transparent to-[#092a43]/10" />

                {/* Label */}
                <div className="absolute left-5 top-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#092a43]/90 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-white shadow-lg backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#94a3b8]" />
                    Before
                  </span>
                </div>

                <div className="absolute bottom-5 left-5">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/70">
                    Initial Condition
                  </p>

                  <p className="mt-1 text-sm font-bold text-white">
                    Before Waterproofing
                  </p>
                </div>
              </div>

              {/* AFTER */}
              <div className="group relative min-h-[330px] overflow-hidden bg-[#dce8f0] sm:min-h-[420px] lg:min-h-[500px]">
                <img
                  src={project.after}
                  alt={`${project.title} after waterproofing`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#015696]/70 via-transparent to-[#015696]/10" />

                {/* Label */}
                <div className="absolute left-5 top-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#015696]/95 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-white shadow-lg backdrop-blur-md">
                    <CheckCircle2 size={14} />
                    After
                  </span>
                </div>

                <div className="absolute bottom-5 left-5">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/75">
                    Completed Work
                  </p>

                  <p className="mt-1 text-sm font-bold text-white">
                    After Waterproofing
                  </p>
                </div>
              </div>
            </div>

            {/* Center Comparison Badge */}
            <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-[#015696] text-white shadow-[0_8px_25px_rgba(1,86,150,0.35)]">
                <MoveHorizontal size={18} />
              </div>
            </div>

            {/* Project Info */}
            <div className="flex flex-col justify-between gap-6 border-t border-[#dce8f0] bg-white p-6 sm:p-7 lg:flex-row lg:items-center lg:px-9">
              <div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-[#015696]" />

                  <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#64748b]">
                    Project Showcase
                  </span>
                </div>

                <h3 className="mt-2 text-xl font-extrabold tracking-[-0.02em] text-[#092a43] sm:text-2xl">
                  {project.title}
                </h3>

                <p className="mt-1 text-sm text-[#64748b]">
                  {project.location}
                </p>
              </div>

              <a href="#enquiry" className="btn-secondary shrink-0">
                Discuss Your Project
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>

        {/* Project Indicators */}
        <div className="mt-7 flex justify-center gap-2">
          {projects.map((item, index) => (
            <button
              key={`${item.id}-${index}`}
              type="button"
              onClick={() => setActiveProject(index)}
              aria-label={`View project ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeProject === index
                  ? "w-10 bg-[#015696]"
                  : "w-5 bg-[#b8d2df] hover:bg-[#7fb3cc]"
              }`}
            />
          ))}
        </div>

        {/* Content Guidance */}
        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-[#cfe3ed] bg-white/80 p-4 shadow-sm backdrop-blur-sm sm:p-5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eef8fd] text-[#015696]">
            <Images size={17} />
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#092a43]">
              Project Photography
            </p>

            <p className="mt-1 text-xs leading-5 text-[#64748b]">
              Replace the placeholder images with genuine Chandan Enterprises
              project photographs. Do not present stock or unrelated images as
              actual before-and-after project results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
