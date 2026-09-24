"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  ClipboardCheck,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

const services = [
  "Terrace Waterproofing",
  "Bathroom Waterproofing",
  "Exterior Wall Waterproofing",
  "Rising Dampness Treatment",
  "Basement Waterproofing",
  "Swimming Pool Waterproofing",
  "PU Injection Grouting",
  "Expansion Joint Sealing",
  "Roof Waterproofing",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="enquiry"
      className="relative overflow-hidden bg-[#f1f8fc] py-10 md:py-12 lg:py-14"
    >
      {/* Background Elements */}
      <div className="pointer-events-none absolute -left-40 top-[-180px] h-[500px] w-[500px] rounded-full bg-[#015696]/5 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-[-180px] h-[500px] w-[500px] rounded-full bg-[#016db5]/5 blur-[120px]" />

      <div className="container-chandan relative z-10">
        {/* Header */}
        <div className="mb-12 max-w-3xl md:mb-14">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#015696]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#015696]">
              Send An Enquiry
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight text-[#092a43] md:text-4xl lg:text-5xl">
            Tell us about your
            <span className="block text-[#015696]">
              waterproofing requirement.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#64748b] md:text-base">
            Share a few details about your property and the affected area.
            This helps us understand what you need before discussing the
            suitable waterproofing approach.
          </p>
        </div>

        {/* Main Area */}
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-stretch">
          {/* Left Information Panel */}
          <div className="relative overflow-hidden rounded-[28px] bg-[#092a43] p-7 md:p-9">
            {/* Decorative Circle */}
            <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full border border-white/[0.06]" />

            <div className="pointer-events-none absolute right-0 top-0 h-52 w-52 rounded-full bg-[#015696]/20 blur-[80px]" />

            <div className="relative z-10 flex h-full flex-col">
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#015696] text-white">
                <ClipboardCheck size={22} strokeWidth={1.8} />
              </div>

              <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7fb9da]">
                Requirement Details
              </p>

              <h3 className="mt-3 max-w-sm text-2xl font-bold leading-tight text-white md:text-3xl">
                A better conversation starts with the right details.
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#a9bdca]">
                Tell us what type of property you have, where the issue is
                located and what kind of water-related problem you are
                experiencing.
              </p>

              {/* Points */}
              <div className="mt-8 space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0 text-[#7fb9da]"
                    strokeWidth={1.8}
                  />

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Property Type
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[#7f96a7]">
                      Residential, commercial, industrial or other property.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0 text-[#7fb9da]"
                    strokeWidth={1.8}
                  />

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Affected Area
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[#7f96a7]">
                      Terrace, bathroom, roof, wall, basement or other area.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0 text-[#7fb9da]"
                    strokeWidth={1.8}
                  />

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Water-Related Issue
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[#7f96a7]">
                      Leakage, seepage, dampness or water ingress.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom */}
              <div className="mt-auto border-t border-white/10 pt-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-[#8bc9e8]">
                    <ShieldCheck size={17} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-white">
                      Chandan Enterprises
                    </p>

                    <p className="mt-0.5 text-[10px] text-[#7f96a7]">
                      Waterproofing & Leakage Protection
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-[28px] border border-[#dce8f0] bg-white p-6 shadow-[0_15px_50px_rgba(9,42,67,0.06)] md:p-9">
            {submitted ? (
              <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#eef8fd] text-[#015696]">
                  <CheckCircle2 size={30} strokeWidth={1.7} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#092a43]">
                  Thank you for your enquiry.
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-[#64748b]">
                  Your requirement has been submitted. Our team can review
                  the details and discuss the next step with you.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#dce8f0] px-5 py-3 text-sm font-semibold text-[#092a43] transition hover:border-[#015696] hover:text-[#015696]"
                >
                  Submit Another Enquiry
                  <ArrowUpRight size={16} />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Form Header */}
                <div className="mb-7 flex items-start justify-between gap-5 border-b border-[#e8f0f5] pb-6">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#94a3b8]">
                      Enquiry Form
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-[#092a43]">
                      Share your requirement
                    </h3>
                  </div>

                  <div className="hidden h-10 w-10 items-center justify-center rounded-xl bg-[#eef8fd] text-[#015696] sm:flex">
                    <MessageCircle size={18} />
                  </div>
                </div>

                {/* Name + Phone */}
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="full-name"
                      className="mb-2 block text-xs font-semibold text-[#475569]"
                    >
                      Full Name
                    </label>

                    <input
                      id="full-name"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      required
                      className="h-13 w-full rounded-xl border border-[#dce8f0] bg-[#f8fbfd] px-4 text-sm text-[#092a43] outline-none transition placeholder:text-[#a5b1bb] focus:border-[#015696] focus:bg-white focus:ring-4 focus:ring-[#015696]/5"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-xs font-semibold text-[#475569]"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="Enter phone number"
                      required
                      className="h-13 w-full rounded-xl border border-[#dce8f0] bg-[#f8fbfd] px-4 text-sm text-[#092a43] outline-none transition placeholder:text-[#a5b1bb] focus:border-[#015696] focus:bg-white focus:ring-4 focus:ring-[#015696]/5"
                    />
                  </div>
                </div>

                {/* Email + Service */}
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-semibold text-[#475569]"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter email address"
                      className="h-13 w-full rounded-xl border border-[#dce8f0] bg-[#f8fbfd] px-4 text-sm text-[#092a43] outline-none transition placeholder:text-[#a5b1bb] focus:border-[#015696] focus:bg-white focus:ring-4 focus:ring-[#015696]/5"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-xs font-semibold text-[#475569]"
                    >
                      Required Service
                    </label>

                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className="h-13 w-full rounded-xl border border-[#dce8f0] bg-[#f8fbfd] px-4 text-sm text-[#475569] outline-none transition focus:border-[#015696] focus:bg-white focus:ring-4 focus:ring-[#015696]/5"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>

                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Property Type */}
                <div>
                  <label
                    htmlFor="property-type"
                    className="mb-2 block text-xs font-semibold text-[#475569]"
                  >
                    Property Type
                  </label>

                  <select
                    id="property-type"
                    name="propertyType"
                    defaultValue=""
                    className="h-13 w-full rounded-xl border border-[#dce8f0] bg-[#f8fbfd] px-4 text-sm text-[#475569] outline-none transition focus:border-[#015696] focus:bg-white focus:ring-4 focus:ring-[#015696]/5"
                  >
                    <option value="" disabled>
                      Select property type
                    </option>

                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Industrial">Industrial</option>
                    <option value="Builder">Builder / Construction</option>
                    <option value="Hospital">Hospital</option>
                    <option value="Hotel">Hotel / Hospitality</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-semibold text-[#475569]"
                  >
                    Requirement Details
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about the leakage, seepage, dampness or affected area..."
                    required
                    className="w-full resize-none rounded-xl border border-[#dce8f0] bg-[#f8fbfd] p-4 text-sm leading-6 text-[#092a43] outline-none transition placeholder:text-[#a5b1bb] focus:border-[#015696] focus:bg-white focus:ring-4 focus:ring-[#015696]/5"
                  />
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="group inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-[#015696] px-6 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(1,86,150,0.16)] transition-all duration-300 hover:bg-[#0b3f67] hover:shadow-[0_14px_30px_rgba(1,86,150,0.22)]"
                  >
                    Submit Your Enquiry

                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </button>
                </div>

                <p className="text-center text-[10px] leading-5 text-[#94a3b8]">
                  Please provide accurate details so your waterproofing
                  requirement can be understood clearly.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}