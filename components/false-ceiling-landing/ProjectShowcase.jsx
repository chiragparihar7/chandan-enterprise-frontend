"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Lightbulb,
  MapPin,
  MoveUpRight,
} from "lucide-react";
import { projects } from "./data";

export default function ProjectShowcase() {
  const [active, setActive] = useState(0);

  const project = projects[active];

  const previous = () => {
    setActive(
      (current) => (current - 1 + projects.length) % projects.length
    );
  };

  const next = () => {
    setActive((current) => (current + 1) % projects.length);
  };

  const selectProject = (index) => {
    setActive(index);
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14"
    >
      {/* Architectural background */}
      <div className="pointer-events-none absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-[#1687c5]/[0.035] blur-[120px]" />

      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[420px] w-[420px] opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(#dce9ef 1px, transparent 1px), linear-gradient(90deg, #dce9ef 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "linear-gradient(to top right, black, transparent 75%)",
          WebkitMaskImage:
            "linear-gradient(to top right, black, transparent 75%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">
        {/* -------------------------------------------------
            HEADER
        ------------------------------------------------- */}
        <div className="grid gap-8 border-b border-[#dce8f0] pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#015696]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#015696]">
                Project Showcase
              </span>
            </div>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#061b2b] sm:text-4xl lg:text-[48px]">
              Ceiling ideas,
              <span className="text-[#015696]">
                {" "}
                presented as interior projects.
              </span>
            </h2>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-2">
            <span className="mr-3 hidden text-[10px] font-bold uppercase tracking-[0.16em] text-[#94a3b8] sm:block">
              Explore projects
            </span>

            <button
              type="button"
              onClick={previous}
              aria-label="Previous project"
              className="flex h-11 w-11 items-center justify-center border border-[#dce8f0] bg-white text-[#092a43] transition-all duration-300 hover:border-[#015696] hover:bg-[#f1f8fc] hover:text-[#015696]"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next project"
              className="flex h-11 w-11 items-center justify-center bg-[#015696] text-white transition-all duration-300 hover:bg-[#0b3f67]"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* -------------------------------------------------
            PROJECT FEATURE
        ------------------------------------------------- */}
        <div className="mt-10 lg:mt-12">
          <div className="grid gap-0 lg:grid-cols-[1.45fr_0.55fr]">
            {/* Image */}
            <div className="group relative min-h-[380px] overflow-hidden bg-[#e8eff3] sm:min-h-[500px] lg:min-h-[620px]">
              <img
                key={project.image}
                src={project.image}
                alt={`${project.title} - ${project.ceilingType}`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.015]"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#061b2b]/65 via-transparent to-[#061b2b]/10" />

              {/* Project number */}
              <div className="absolute left-5 top-5 sm:left-7 sm:top-7 lg:left-8 lg:top-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center border border-white/25 bg-[#061b2b]/20 text-xs font-bold text-white backdrop-blur-md">
                    {String(active + 1).padStart(2, "0")}
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/75">
                    Featured project
                  </span>
                </div>
              </div>

              {/* Image bottom information */}
              <div className="absolute bottom-6 left-5 right-5 sm:bottom-8 sm:left-7 sm:right-7 lg:bottom-9 lg:left-8 lg:right-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/65">
                  {project.propertyType}
                </p>

                <h3 className="mt-2 max-w-xl text-2xl font-semibold tracking-[-0.025em] text-white sm:text-3xl lg:text-[36px]">
                  {project.title}
                </h3>

                <div className="mt-4 flex items-center gap-2 text-xs text-white/75">
                  <MapPin className="h-3.5 w-3.5" />
                  {project.location}
                </div>
              </div>
            </div>

            {/* Project details */}
            <div className="flex flex-col justify-between border border-t-0 border-[#dce8f0] bg-[#f8fafb] p-6 sm:p-8 lg:border-l-0 lg:border-t lg:p-10">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#015696]">
                  Project details
                </p>

                <h4 className="mt-5 text-2xl font-semibold leading-[1.12] tracking-[-0.025em] text-[#092a43]">
                  {project.ceilingType}
                </h4>

                <p className="mt-4 text-sm leading-6 text-[#64748b]">
                  A ceiling approach considered around the character,
                  proportions and requirements of the interior.
                </p>
              </div>

              {/* Specifications */}
              <div className="mt-10">
                <div className="border-y border-[#dce8f0]">
                  <div className="grid grid-cols-[1fr_auto] gap-4 py-4">
                    <span className="text-xs text-[#94a3b8]">
                      Design style
                    </span>

                    <span className="text-right text-xs font-semibold text-[#092a43]">
                      {project.designStyle}
                    </span>
                  </div>

                  <div className="grid grid-cols-[1fr_auto] gap-4 border-t border-[#dce8f0] py-4">
                    <span className="text-xs text-[#94a3b8]">
                      Lighting
                    </span>

                    <span className="flex items-center gap-1.5 text-right text-xs font-semibold text-[#092a43]">
                      <Lightbulb className="h-3.5 w-3.5 text-[#015696]" />
                      {project.lighting}
                    </span>
                  </div>

                  <div className="grid grid-cols-[1fr_auto] gap-4 border-t border-[#dce8f0] py-4">
                    <span className="text-xs text-[#94a3b8]">
                      Location
                    </span>

                    <span className="text-right text-xs font-semibold text-[#092a43]">
                      {project.location}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mt-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#94a3b8]">
                    Design considerations
                  </p>

                  <ul className="mt-4 space-y-3">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-6 text-[#64748b]"
                      >
                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 bg-[#015696]" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Arrow */}
              <div className="mt-8 flex items-center justify-between border-t border-[#dce8f0] pt-5">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#94a3b8]">
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(projects.length).padStart(2, "0")}
                </span>

                <MoveUpRight className="h-4 w-4 text-[#015696]" />
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------
            PROJECT NAVIGATION
        ------------------------------------------------- */}
        <div className="mt-8 border-t border-[#dce8f0]">
          <div className="grid sm:grid-cols-3">
            {projects.map((item, index) => {
              const isActive = index === active;

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => selectProject(index)}
                  className={`group relative border-b border-[#dce8f0] px-1 py-5 text-left transition-colors duration-300 sm:border-r sm:px-5 sm:last:border-r-0 ${
                    isActive
                      ? "bg-[#f5fafc]"
                      : "bg-white hover:bg-[#f9fbfc]"
                  }`}
                >
                  {/* Active line */}
                  <span
                    className={`absolute left-0 right-0 top-0 h-[2px] transition-all duration-300 ${
                      isActive ? "bg-[#015696]" : "bg-transparent"
                    }`}
                  />

                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <span
                        className={`text-[10px] font-bold tracking-[0.17em] ${
                          isActive
                            ? "text-[#015696]"
                            : "text-[#a6b3bb]"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h4
                        className={`mt-2 text-sm font-semibold transition-colors duration-300 ${
                          isActive
                            ? "text-[#092a43]"
                            : "text-[#64748b] group-hover:text-[#092a43]"
                        }`}
                      >
                        {item.title}
                      </h4>
                    </div>

                    <ArrowRight
                      className={`h-4 w-4 transition-all duration-300 ${
                        isActive
                          ? "translate-x-0 text-[#015696]"
                          : "-translate-x-1 text-[#c1ccd3] group-hover:translate-x-0 group-hover:text-[#015696]"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio disclaimer */}
        <p className="mt-6 text-[10px] leading-5 text-[#a0adb5]">
          Replace the project images and details with verified completed
          projects before publishing them as portfolio work.
        </p>
      </div>
    </section>
  );
}