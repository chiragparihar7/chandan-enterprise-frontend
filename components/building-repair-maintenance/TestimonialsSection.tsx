"use client";

import {
  Quote,
  ArrowRight,
  MessageSquareQuote,
} from "lucide-react";

const testimonials = [
  {
    name: "Nirav patel",
    location: "Ahmedabad, Gujarat",
    service: "Waterproofing Service",
    review:
      "Replace this text with genuine customer feedback about their waterproofing experience with Chandan Enterprises.",
  },
  {
    name: "Adarsh Sharma",
    location: "Ahmedabad, Gujarat",
    service: "Building Repair",
    review:
      "Add a real customer review describing the building repair work and their overall experience.",
  },
  {
    name: "Priya Patel",
    location: "Ahmedabad, Gujarat",
    service: "Leakage Repair",
    review:
      "Use verified customer feedback about leakage repair, communication, and service quality.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-background-blue py-10 sm:py-12 lg:py-14">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-chandan-primary/10 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-sky-200/40 blur-[100px]" />

      <div className="container-chandan relative">
        {/* Heading: Left Title, Right Description */}
        <div className="mb-14 grid grid-cols-1 gap-8 sm:mb-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-chandan-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-chandan-primary">
                Customer Experiences
              </span>
            </div>

            <h2 className="max-w-2xl text-4xl font-bold leading-[1.12] tracking-tight text-chandan-navy sm:text-5xl lg:text-6xl">
              Trust built through
              <span className="mt-2 block text-chandan-primary">
                quality work.
              </span>
            </h2>
          </div>

          <div className="lg:justify-self-end lg:pb-2">
            <span className="mb-5 block h-1 w-12 rounded-full bg-chandan-primary" />

            <p className="max-w-xl text-base leading-8 text-text-secondary sm:text-lg">
              Every building repair starts with a concern that needs attention.
              Explore customer experiences with waterproofing, leakage repair,
              and building maintenance services from Chandan Enterprises.
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-3 text-sm font-bold text-chandan-primary transition hover:text-chandan-primary-dark"
            >
              Discuss Your Requirements
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.service}
              className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${
                index === 1
                  ? "border-chandan-primary/20 bg-chandan-navy text-white shadow-lg shadow-chandan-navy/10"
                  : "border-border bg-white text-chandan-navy shadow-sm hover:border-chandan-primary/30"
              }`}
            >
              {/* Decorative Quote */}
              <div className="mb-7 flex items-center justify-between">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                    index === 1
                      ? "bg-white/10 text-sky-300"
                      : "bg-surface-blue text-chandan-primary"
                  }`}
                >
                  <Quote size={24} />
                </div>

                <span
                  className={`text-xs font-semibold uppercase tracking-wider ${
                    index === 1 ? "text-slate-300" : "text-text-muted"
                  }`}
                >
                  Customer Feedback
                </span>
              </div>

              {/* Review Text */}
              <p
                className={`flex-1 text-base leading-8 ${
                  index === 1 ? "text-slate-200" : "text-text-secondary"
                }`}
              >
                “{testimonial.review}”
              </p>

              {/* Card Footer */}
              <div
                className={`mt-8 border-t pt-6 ${
                  index === 1 ? "border-white/15" : "border-border"
                }`}
              >
                <span
                  className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${
                    index === 1
                      ? "bg-white/10 text-sky-200"
                      : "bg-surface-blue text-chandan-primary"
                  }`}
                >
                  {testimonial.service}
                </span>

                <div className="mt-5 flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                      index === 1
                        ? "bg-chandan-primary text-white"
                        : "bg-chandan-navy text-white"
                    }`}
                  >
                    <MessageSquareQuote size={19} />
                  </div>

                  <div>
                    <h3
                      className={`text-sm font-bold ${
                        index === 1 ? "text-white" : "text-chandan-navy"
                      }`}
                    >
                      {testimonial.name}
                    </h3>

                    <p
                      className={`mt-1 text-xs ${
                        index === 1 ? "text-slate-300" : "text-text-muted"
                      }`}
                    >
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>

              <Quote
                size={100}
                strokeWidth={1}
                className={`pointer-events-none absolute -bottom-5 -right-4 rotate-180 ${
                  index === 1
                    ? "text-white/[0.04]"
                    : "text-chandan-primary/[0.05]"
                }`}
              />
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}