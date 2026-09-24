"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Quote,
  Star,
  UserRound,
} from "lucide-react";
import { testimonials } from "./data";

export default function TestimonialsSection() {
  const featuredTestimonial = testimonials[0];
  const otherTestimonials = testimonials.slice(1);

  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-10 md:py-12 lg:py-14">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-[#eef8fd] blur-[120px]" />

        <div className="absolute bottom-[-180px] right-[-140px] h-[420px] w-[420px] rounded-full bg-[#f1f8fc] blur-[120px]" />
      </div>

      <div className="container-chandan relative z-10">
        {/* HEADER */}
        <div className="mb-12 grid gap-7 md:mb-14 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[#015696]">
              <span className="h-px w-8 bg-[#015696]" />
              Client Feedback
            </div>

            <h2 className="max-w-2xl text-3xl font-bold leading-[1.08] text-[#092a43] sm:text-4xl md:text-5xl">
              What clients say about
              <span className="text-[#015696]"> their experience.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-[#64748b] lg:justify-self-end">
            Feedback from clients can help show how our communication,
            workmanship and waterproofing process are experienced on actual
            projects.
          </p>
        </div>

        {/* TESTIMONIAL LAYOUT */}
        {testimonials.length > 0 && (
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            {/* FEATURED TESTIMONIAL */}
            {featuredTestimonial && (
              <div className="relative overflow-hidden rounded-[28px] bg-[#092a43] p-7 sm:p-9 lg:p-11">
                {/* Decorative Quote */}
                <div className="pointer-events-none absolute right-7 top-5 text-[150px] font-serif leading-none text-white/[0.035]">
                  “
                </div>

                {/* Top */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#015696] text-white">
                    <Quote size={21} />
                  </div>

                  <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-2">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        size={13}
                        className="fill-[#6bbce4] text-[#6bbce4]"
                      />
                    ))}
                  </div>
                </div>

                {/* Review */}
                <div className="relative z-10 mt-10">
                  <p className="max-w-2xl text-xl font-medium leading-8 text-white sm:text-2xl sm:leading-9">
                    “{featuredTestimonial.review}”
                  </p>
                </div>

                {/* Client */}
                <div className="relative z-10 mt-10 flex items-center justify-between gap-5 border-t border-white/10 pt-7">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
                      <UserRound size={19} />
                    </div>

                    <div>
                      <h3 className="font-bold text-white">
                        {featuredTestimonial.name}
                      </h3>

                      <p className="mt-1 text-sm text-white/50">
                        {featuredTestimonial.role}
                      </p>
                    </div>
                  </div>

                  <span className="hidden text-xs font-bold uppercase tracking-[0.14em] text-white/30 sm:block">
                    Client Review
                  </span>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-28 bg-[#015696]" />
              </div>
            )}

            {/* OTHER TESTIMONIALS */}
            <div className="grid gap-6">
              {otherTestimonials.slice(0, 2).map((item, index) => (
                <article
                  key={index}
                  className="group relative overflow-hidden rounded-[24px] border border-[#dce8f0] bg-white p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(9,42,67,0.08)]"
                >
                  {/* Number */}
                  <span className="pointer-events-none absolute right-5 top-3 text-6xl font-bold leading-none text-[#092a43]/[0.035]">
                    0{index + 2}
                  </span>

                  {/* Quote */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef8fd] text-[#015696]">
                      <Quote size={17} />
                    </div>

                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          size={12}
                          className="fill-[#015696] text-[#015696]"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Review */}
                  <p className="relative z-10 mt-7 text-base leading-7 text-[#475569]">
                    “{item.review}”
                  </p>

                  {/* Client */}
                  <div className="relative z-10 mt-7 flex items-center gap-3 border-t border-[#e8f0f5] pt-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f1f8fc] text-[#015696]">
                      <UserRound size={16} />
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-[#092a43]">
                        {item.name}
                      </h4>

                      <p className="mt-0.5 text-xs text-[#94a3b8]">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* Hover Accent */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#015696] transition-all duration-300 group-hover:w-full" />
                </article>
              ))}
            </div>
          </div>
        )}

        {/* TRUST STRIP */}
        <div className="mt-8 grid overflow-hidden rounded-[22px] border border-[#dce8f0] bg-white md:grid-cols-3">
          <div className="border-b border-[#e8f0f5] px-6 py-6 md:border-b-0 md:border-r">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#015696]">
              Experience
            </p>

            <h3 className="mt-2 font-bold text-[#092a43]">
              Clear Communication
            </h3>

            <p className="mt-1 text-sm leading-6 text-[#64748b]">
              Understand the requirement and treatment approach before work
              begins.
            </p>
          </div>

          <div className="border-b border-[#e8f0f5] px-6 py-6 md:border-b-0 md:border-r">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#015696]">
              Execution
            </p>

            <h3 className="mt-2 font-bold text-[#092a43]">
              Site-Focused Work
            </h3>

            <p className="mt-1 text-sm leading-6 text-[#64748b]">
              Treatment is approached according to the condition of the
              property.
            </p>
          </div>

          <div className="px-6 py-6">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#015696]">
              Commitment
            </p>

            <h3 className="mt-2 font-bold text-[#092a43]">
              Protection-Oriented
            </h3>

            <p className="mt-1 text-sm leading-6 text-[#64748b]">
              The objective is to address water-related issues with a suitable
              waterproofing solution.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col gap-6 rounded-[24px] bg-[#eef8fd] px-7 py-7 sm:px-9 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#015696]">
              Have a Waterproofing Requirement?
            </p>

            <h3 className="mt-1 text-xl font-bold text-[#092a43] sm:text-2xl">
              Let’s discuss your property and project needs.
            </h3>
          </div>

          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#015696] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#0b3f67]"
          >
            Discuss Your Requirement

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}