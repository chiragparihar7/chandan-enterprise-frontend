"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, ShieldCheck } from "lucide-react";
import { projects } from "./data";

export default function FeaturedProjects() {
  const featuredProject = projects[0];
  const remainingProjects = projects.slice(1);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#f7f9fc] py-10 md:py-12 lg:py-14"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-[#eef8fd] blur-[120px]" />

        <div className="absolute bottom-[-180px] right-[-120px] h-[420px] w-[420px] rounded-full bg-[#edf6fb] blur-[120px]" />
      </div>

      <div className="container-chandan relative z-10">
        {/* HEADER */}
        <div className="mb-12 flex flex-col gap-6 md:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[#015696]">
              <span className="h-px w-8 bg-[#015696]" />
              Featured Projects
            </div>

            <h2 className="text-3xl font-bold leading-[1.08] text-[#092a43] sm:text-4xl md:text-5xl lg:text-[56px]">
              A closer look at our
              <span className="text-[#015696]"> project work.</span>
            </h2>
          </div>

          <div className="max-w-md lg:pb-1">
            <p className="text-base leading-7 text-[#64748b]">
              Explore selected waterproofing work and see how different
              property conditions require different protection approaches.
            </p>
          </div>
        </div>

        {/* FEATURED PROJECT */}
        {featuredProject && (
          <div className="group relative mb-8 overflow-hidden rounded-[28px] border border-[#dce8f0] bg-white shadow-[0_15px_45px_rgba(9,42,67,0.08)]">
            <div className="grid lg:grid-cols-[1.3fr_0.7fr]">
              {/* IMAGE */}
              <div className="relative h-[360px] overflow-hidden sm:h-[460px] lg:h-[520px]">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061b2b]/75 via-transparent to-transparent" />

                {/* Featured Label */}
                <div className="absolute left-6 top-6">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-[0.13em] text-[#092a43] shadow-lg">
                    <span className="h-2 w-2 rounded-full bg-[#015696]" />
                    Featured Project
                  </span>
                </div>

                {/* Number */}
                <div className="absolute bottom-6 left-6">
                  <span className="text-7xl font-bold leading-none text-white/20 sm:text-8xl">
                    {String(featuredProject.id).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex flex-col justify-between bg-white p-7 sm:p-9 lg:p-10">
                <div>
                  {/* Category */}
                  <div className="mb-7 flex items-center justify-between">
                    <span className="rounded-full bg-[#eef8fd] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#015696]">
                      {featuredProject.category}
                    </span>

                    <ShieldCheck
                      size={22}
                      className="text-[#b9ddec]"
                    />
                  </div>

                  <h3 className="max-w-lg text-3xl font-bold leading-tight text-[#092a43] sm:text-4xl">
                    {featuredProject.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-[#64748b] sm:text-base">
                    A waterproofing project selected to showcase the type of
                    property condition and treatment requirement handled by
                    Chandan Enterprises.
                  </p>

                  {/* Details */}
                  <div className="mt-8 space-y-4 border-t border-[#e8f0f5] pt-7">
                    <div className="flex items-center justify-between gap-5">
                      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#94a3b8]">
                        Category
                      </span>

                      <span className="text-sm font-semibold text-[#092a43]">
                        {featuredProject.category}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-5">
                      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#94a3b8]">
                        Application
                      </span>

                      <span className="text-right text-sm font-semibold text-[#092a43]">
                        Waterproofing
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-5">
                      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#94a3b8]">
                        Location
                      </span>

                      <span className="flex items-center gap-1.5 text-sm font-semibold text-[#092a43]">
                        <MapPin size={14} className="text-[#015696]" />
                        Ahmedabad
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-9 border-t border-[#e8f0f5] pt-6">
                  <Link
                    href={`/projects/${featuredProject.id}`}
                    className="group/link inline-flex items-center gap-2 text-sm font-bold text-[#015696]"
                  >
                    View Project Details

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eef8fd] transition-all duration-300 group-hover/link:bg-[#015696] group-hover/link:text-white">
                      <ArrowUpRight
                        size={17}
                        className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PROJECT GRID */}
        {remainingProjects.length > 0 && (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {remainingProjects.map((project, index) => (
              <article
                key={project.id}
                className="group overflow-hidden rounded-[22px] border border-[#dce8f0] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(9,42,67,0.09)]"
              >
                {/* IMAGE */}
                <div className="relative h-[260px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#061b2b]/70 via-transparent to-transparent" />

                  {/* Category */}
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/95 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#092a43] shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Number */}
                  <div className="absolute bottom-4 right-4">
                    <span className="text-4xl font-bold leading-none text-white/30">
                      {String(index + 2).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold leading-tight text-[#092a43]">
                        {project.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#64748b]">
                        Waterproofing solution selected according to the
                        project's site and surface requirements.
                      </p>
                    </div>

                    <Link
                      href={`/projects/${project.id}`}
                      aria-label={`View ${project.title}`}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#dce8f0] text-[#015696] transition-all duration-300 hover:border-[#015696] hover:bg-[#015696] hover:text-white"
                    >
                      <ArrowUpRight size={17} />
                    </Link>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-[#e8f0f5] pt-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#94a3b8]">
                      Project {String(index + 2).padStart(2, "0")}
                    </span>

                    <span className="text-xs font-semibold text-[#015696]">
                      View Details
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* BOTTOM CTA */}
        <div className="mt-10 overflow-hidden rounded-[24px] bg-[#092a43]">
          <div className="relative flex flex-col gap-7 px-7 py-8 sm:px-9 md:flex-row md:items-center md:justify-between md:px-10 md:py-9">
            {/* Decorative */}
            <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-[#015696]/30 blur-[70px]" />

            <div className="relative z-10">
              <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#6bbce4]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6bbce4]" />
                Your Property Could Be Next
              </div>

              <h3 className="text-xl font-bold text-white sm:text-2xl">
                Have a waterproofing requirement?
              </h3>

              <p className="mt-1 max-w-xl text-sm leading-6 text-white/60">
                Share your property details and discuss the right approach for
                your requirement.
              </p>
            </div>

            <Link
              href="/contact"
              className="group relative z-10 inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#092a43] transition-all duration-300 hover:bg-[#eef8fd]"
            >
              Discuss Your Project

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}