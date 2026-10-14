"use client";

import {
  MapPin,
  PhoneCall,
  MessageCircle,
  Clock3,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

import LeadForm from "./LeadForm";
import { trackPhoneClick, trackWhatsAppClick } from "./tracking";

const PHONE_DISPLAY =
  process.env.NEXT_PUBLIC_BUSINESS_PHONE_DISPLAY || "+91 9558189429";

const PHONE_E164 =
  process.env.NEXT_PUBLIC_BUSINESS_PHONE_E164 || "919558189429";

const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919558189429";

export default function ContactSection() {
  const phoneHref = `tel:+${PHONE_E164.replace(/\D/g, "")}`;

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hello Chandan Enterprises, I need a building repair or waterproofing inspection in Ahmedabad.",
  )}`;

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background-blue py-20 sm:py-24 lg:py-28"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-chandan-primary/10 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-sky-200/40 blur-[100px]" />

      <div className="container-chandan relative">
        {/* Section Heading */}
        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-12">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-chandan-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-chandan-primary">
                Contact Chandan Enterprises
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-chandan-navy sm:text-5xl lg:text-6xl">
              Let's discuss your
              <span className="mt-2 block text-chandan-primary">
                property concerns.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-text-secondary lg:justify-self-end lg:pb-2 sm:text-lg">
            Tell us about terrace leakage, bathroom seepage, damp walls,
            cracks, or damaged plaster. Share your location and requirements
            to discuss the next steps for your building repair.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          {/* Left Contact Information */}
          <div className="relative overflow-hidden rounded-3xl bg-chandan-navy p-7 text-white sm:p-9 lg:p-10">
            {/* Decorative Circles */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-5 -top-5 h-36 w-36 rounded-full border border-white/10" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-sky-200">
                <MessageCircle size={15} />
                We're ready to hear from you
              </span>

              <h3 className="mt-6 text-2xl font-bold leading-snug sm:text-3xl">
                Tell us what needs attention.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                Get in touch to discuss your building repair, waterproofing,
                or maintenance requirements in Ahmedabad.
              </p>

              {/* Contact Details */}
              <div className="mt-9 space-y-4">
                <a
                  href={phoneHref}
                  onClick={() => trackPhoneClick("contact")}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4 transition hover:border-sky-300/40 hover:bg-white/10"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-chandan-primary text-white transition group-hover:bg-chandan-primary-light">
                    <PhoneCall size={21} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-slate-400">
                      Call us directly
                    </span>
                    <span className="mt-1 block break-words text-sm font-bold text-white sm:text-base">
                      {PHONE_DISPLAY}
                    </span>
                  </span>

                  <ArrowUpRight
                    size={19}
                    className="shrink-0 text-sky-300"
                  />
                </a>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick("contact")}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4 transition hover:border-sky-300/40 hover:bg-white/10"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#16865a] text-white">
                    <MessageCircle size={21} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-slate-400">
                      WhatsApp enquiry
                    </span>
                    <span className="mt-1 block text-sm font-bold text-white sm:text-base">
                      Send details or photos
                    </span>
                  </span>

                  <ArrowUpRight
                    size={19}
                    className="shrink-0 text-sky-300"
                  />
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sky-300">
                    <MapPin size={21} />
                  </span>

                  <span>
                    <span className="block text-xs text-slate-400">
                      Service Area
                    </span>
                    <span className="mt-1 block text-sm font-bold text-white sm:text-base">
                      Ahmedabad, Gujarat
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-slate-400">
                      Confirm your locality with the team.
                    </span>
                  </span>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sky-300">
                    <Clock3 size={21} />
                  </span>

                  <span>
                    <span className="block text-xs text-slate-400">
                      Inspection Timing
                    </span>
                    <span className="mt-1 block text-sm font-bold text-white sm:text-base">
                      By Appointment
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-slate-400">
                      Subject to team availability.
                    </span>
                  </span>
                </div>
              </div>

              {/* Bottom Note */}
              <div className="mt-8 flex items-start gap-3 border-t border-white/10 pt-6">
                <ShieldCheck
                  size={20}
                  className="mt-0.5 shrink-0 text-sky-300"
                />

                <p className="text-xs leading-6 text-slate-300">
                  Share clear details about the affected area so your
                  requirements can be understood before discussing the repair.
                </p>
              </div>
            </div>
          </div>

          {/* Right Lead Form */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-border bg-white p-6 shadow-xl shadow-chandan-navy/5 sm:p-9 lg:p-10">
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-chandan-primary">
                  Request an Inspection
                </span>

                <h3 className="mt-3 text-2xl font-bold text-chandan-navy sm:text-3xl">
                  Tell us about your requirement.
                </h3>

                <p className="mt-3 text-sm leading-7 text-text-secondary">
                  Fill in your details and describe the building issue you
                  need help with.
                </p>
              </div>

              <LeadForm />
            </div>

            {/* Decorative Bottom Accent */}
            <div className="mx-8 h-2 rounded-b-2xl bg-chandan-primary/15" />
          </div>
        </div>
      </div>
    </section>
  );
}