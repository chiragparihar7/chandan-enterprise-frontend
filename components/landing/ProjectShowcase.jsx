"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MapPin,
  ShieldCheck,
  Sparkles,
  Wrench,
  ArrowRight
} from "lucide-react";

const projects = [
  {
    id: 1,
    number: "01",
    title: "Terrace Waterproofing",
    category: "Residential",
    location: "Ahmedabad, Gujarat",
    application: "Terrace & Roof",
    image: "/Services/terrace_waterproofing.jpg",
    description:
      "A focused waterproofing solution for terrace areas affected by leakage, seepage and moisture penetration.",
    points: [
      "Terrace surface inspection",
      "Leakage source assessment",
      "Waterproofing treatment",
      "Final quality checking",
    ],
  },
  {
    id: 2,
    number: "02",
    title: "Wall Seepage Treatment",
    category: "Residential",
    location: "Ahmedabad, Gujarat",
    application: "Wall & Dampness",
    image: "/Services/exterior_wall_waterproofing.jpg",
    description:
      "A practical treatment approach for wall seepage and dampness caused by moisture penetration.",
    points: [
      "Affected area inspection",
      "Moisture source assessment",
      "Surface preparation",
      "Treatment execution",
    ],
  },
  {
    id: 3,
    number: "03",
    title: "Bathroom Waterproofing",
    category: "Residential",
    location: "Ahmedabad, Gujarat",
    application: "Bathroom & Wet Area",
    image: "/Services/bathroom_waterproofing.jpg",
    description:
      "Waterproofing treatment for wet areas where water exposure may contribute to seepage and moisture problems.",
    points: [
      "Wet-area inspection",
      "Surface preparation",
      "Waterproofing application",
      "Completion checking",
    ],
  },
];

export default function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState(0);

  const project = projects[activeProject];

  const nextProject = () => {
    setActiveProject((current) =>
      current === projects.length - 1 ? 0 : current + 1
    );
  };

  const previousProject = () => {
    setActiveProject((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">

      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-180px] top-[-150px] h-[500px] w-[500px] rounded-full bg-[#eef8fd] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-180px] left-[-180px] h-[450px] w-[450px] rounded-full bg-[#f1f8fc] blur-3xl"
      />

      <div className="container-chandan relative z-10">

        {/* =========================================================
            HEADER
        ========================================================== */}

        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">

          <div>

            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#015696]" />

              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#015696]">
                Our Projects
              </span>
            </div>

            <h2 className="max-w-3xl text-3xl font-extrabold leading-[1.05] tracking-[-0.05em] text-[#092a43] sm:text-4xl lg:text-[54px]">
              Real Projects.
              <span className="block text-[#015696]">
                Practical Waterproofing Solutions.
              </span>
            </h2>

          </div>

          <div className="max-w-md lg:pb-1">

            <p className="text-base leading-7 text-[#64748b] sm:text-lg">
              Explore selected project work and see how different property
              conditions require a focused approach to waterproofing.
            </p>

          </div>

        </div>

        {/* =========================================================
            FEATURED PROJECT
        ========================================================== */}

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.55fr)_minmax(360px,0.75fr)]">

          {/* =======================================================
              IMAGE AREA
          ======================================================== */}

          <div className="relative min-h-[430px] overflow-hidden rounded-[28px] bg-[#dce8f0] sm:min-h-[560px] lg:min-h-[650px]">

            <img
              src={project.image}
              alt={`${project.title} waterproofing project`}
              className="absolute inset-0 h-full w-full object-cover transition-all duration-700"
            />

            {/* Dark Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#061b2b]/85 via-[#061b2b]/15 to-transparent" />

            {/* Vertical Number */}
            <div className="absolute left-5 top-6 sm:left-7 sm:top-7">
              <span className="text-[70px] font-black leading-none tracking-[-0.08em] text-white/20 sm:text-[100px]">
                {project.number}
              </span>
            </div>

            {/* Top Category */}
            <div className="absolute right-5 top-6 sm:right-7 sm:top-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#092a43]/70 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-white backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#46a9d8]" />
                {project.category}
              </span>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">

              <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#9fc9dc]">
                <MapPin size={14} />
                {project.location}
              </div>

              <h3 className="max-w-2xl text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                {project.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">

                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/85 backdrop-blur-sm">
                  {project.application}
                </span>

                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/85 backdrop-blur-sm">
                  Waterproofing
                </span>

              </div>

            </div>

            {/* Floating Completion Badge */}
            <div className="absolute bottom-6 right-6 hidden sm:block lg:bottom-8 lg:right-8">

              <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-[#092a43]/85 px-4 py-3 backdrop-blur-md">

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#015696] text-white">
                  <CheckCircle2 size={17} />
                </div>

                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#7fa3b4]">
                    Project Status
                  </p>

                  <p className="mt-0.5 text-xs font-bold text-white">
                    Completed Work
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* =======================================================
              DETAILS
          ======================================================== */}

          <div className="flex flex-col rounded-[28px] border border-[#dce8f0] bg-[#f8fbfd] p-6 sm:p-8 lg:p-9">

            {/* Small Label */}
            <div className="flex items-center gap-2">
              <Sparkles
                size={15}
                className="text-[#015696]"
              />

              <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#015696]">
                Project Overview
              </span>
            </div>

            {/* Heading */}
            <h3 className="mt-6 text-2xl font-extrabold leading-tight tracking-[-0.035em] text-[#092a43] sm:text-3xl">
              Understanding the requirement before treatment.
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#64748b] sm:text-base">
              {project.description}
            </p>

            {/* Divider */}
            <div className="my-7 h-px bg-[#dce8f0]" />

            {/* Project Meta */}
            <div className="space-y-5">

              <div className="flex items-start gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#015696] shadow-sm ring-1 ring-[#dce8f0]">
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#94a3b8]">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-extrabold text-[#092a43]">
                    {project.location}
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#015696] shadow-sm ring-1 ring-[#dce8f0]">
                  <Building2 size={18} />
                </div>

                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#94a3b8]">
                    Property Type
                  </p>

                  <p className="mt-1 text-sm font-extrabold text-[#092a43]">
                    {project.category}
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#015696] shadow-sm ring-1 ring-[#dce8f0]">
                  <Wrench size={18} />
                </div>

                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#94a3b8]">
                    Application
                  </p>

                  <p className="mt-1 text-sm font-extrabold text-[#092a43]">
                    {project.application}
                  </p>
                </div>

              </div>

            </div>

            {/* Highlights */}
            <div className="mt-8">

              <div className="mb-4 flex items-center gap-2">
                <ShieldCheck
                  size={16}
                  className="text-[#015696]"
                />

                <span className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#092a43]">
                  Work Highlights
                </span>
              </div>

              <div className="space-y-3">

                {project.points.map((point, index) => (
                  <div
                    key={`${project.id}-${point}-${index}`}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={16}
                      className="shrink-0 text-[#015696]"
                    />

                    <span className="text-sm text-[#475569]">
                      {point}
                    </span>
                  </div>
                ))}

              </div>

            </div>

            {/* CTA */}
            <div className="mt-auto pt-8">

              <a
                href="#enquiry"
                className="group flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-[#015696] px-6 text-sm font-extrabold text-white shadow-[0_10px_25px_rgba(1,86,150,0.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0b6fa8]"
              >
                Discuss Your Project

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

            </div>

          </div>
        </div>

        {/* =========================================================
            PROJECT NAVIGATION
        ========================================================== */}

        <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]">

          {/* Project Selector */}
          <div className="flex gap-2 overflow-x-auto pb-1">

            {projects.map((item, index) => (
              <button
                key={`${item.id}-${index}`}
                type="button"
                onClick={() => setActiveProject(index)}
                className={`group flex min-w-[190px] items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-300 ${
                  activeProject === index
                    ? "border-[#015696] bg-[#eef8fd]"
                    : "border-[#dce8f0] bg-white hover:border-[#b9d8e8]"
                }`}
              >

                <span
                  className={`text-xs font-extrabold tracking-[0.12em] ${
                    activeProject === index
                      ? "text-[#015696]"
                      : "text-[#94a3b8]"
                  }`}
                >
                  {item.number}
                </span>

                <div className="min-w-0">
                  <p
                    className={`truncate text-sm font-extrabold ${
                      activeProject === index
                        ? "text-[#092a43]"
                        : "text-[#475569]"
                    }`}
                  >
                    {item.title}
                  </p>

                  <p className="mt-0.5 truncate text-xs text-[#94a3b8]">
                    {item.application}
                  </p>
                </div>

              </button>
            ))}

          </div>

          {/* Arrows */}
          <div className="flex gap-2">

            <button
              type="button"
              onClick={previousProject}
              aria-label="Previous project"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#dce8f0] bg-white text-[#092a43] transition-all duration-300 hover:border-[#015696] hover:bg-[#015696] hover:text-white"
            >
              <ChevronLeft size={19} />
            </button>

            <button
              type="button"
              onClick={nextProject}
              aria-label="Next project"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#dce8f0] bg-white text-[#092a43] transition-all duration-300 hover:border-[#015696] hover:bg-[#015696] hover:text-white"
            >
              <ChevronRight size={19} />
            </button>

          </div>

        </div>

        {/* =========================================================
            BOTTOM STATEMENT
        ========================================================== */}

        <div className="mt-8 flex flex-col gap-4 border-t border-[#dce8f0] pt-7 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eef8fd] text-[#015696]">
              <ShieldCheck size={17} />
            </div>

            <p className="text-sm text-[#64748b]">
              Every waterproofing requirement is assessed according to the
              property and affected area.
            </p>

          </div>

          <a
            href="#enquiry"
            className="group inline-flex items-center gap-2 text-sm font-extrabold text-[#015696] hover:text-[#0b6fa8]"
          >
            Start Your Project

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

        </div>

      </div>
    </section>
  );
}