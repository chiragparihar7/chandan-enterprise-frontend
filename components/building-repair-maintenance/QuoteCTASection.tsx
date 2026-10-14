"use client";

import {
  PhoneCall,
  MessageCircle,
  ArrowRight,
  Droplets,
  Building2,
  CheckCircle2,
} from "lucide-react";

import { trackPhoneClick, trackWhatsAppClick } from "./tracking";

const PHONE_DISPLAY =
  process.env.NEXT_PUBLIC_BUSINESS_PHONE_DISPLAY || "+91 9558189429";

const PHONE_E164 =
  process.env.NEXT_PUBLIC_BUSINESS_PHONE_E164 || "919558189429";

const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919558189429";

export default function QuoteCTASection() {
  const phoneHref = `tel:+${PHONE_E164.replace(/\D/g, "")}`;

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hello Chandan Enterprises, I would like to discuss a building repair or waterproofing requirement in Ahmedabad.",
  )}`;

  return (
    <section
      id="quote-cta"
      className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-background-blue via-white to-surface-blue/60" />
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-chandan-primary/10 blur-[100px]" />

      <div className="container-chandan relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          {/* Left Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-chandan-primary/15 bg-white px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-chandan-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-chandan-primary">
                Let's Fix the Problem
              </span>
            </div>

            <h2 className="max-w-2xl text-4xl font-bold leading-[1.12] tracking-tight text-chandan-navy sm:text-5xl lg:text-6xl">
              Small signs of damage.
              <span className="mt-2 block text-chandan-primary">
                The right time to act.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-text-secondary sm:text-lg">
              Water leakage, damp walls, peeling paint, and damaged plaster
              can affect your building over time. Tell us what you have noticed
              and discuss a suitable repair approach with Chandan Enterprises.
            </p>

            <a
              href="#inspection-form"
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-chandan-primary px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-chandan-primary/20 transition hover:-translate-y-0.5 hover:bg-chandan-primary-dark"
            >
              Request an Inspection
              <ArrowRight size={18} />
            </a>

            {/* Service Highlights */}
            <div className="mt-10 grid grid-cols-1 gap-4 border-t border-border pt-7 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-blue text-chandan-primary">
                  <Droplets size={21} />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-chandan-navy">
                    Waterproofing
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-text-secondary">
                    Roof leakage and dampness concerns.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-blue text-chandan-primary">
                  <Building2 size={21} />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-chandan-navy">
                    Building Repairs
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-text-secondary">
                    Cracks, plaster, and maintenance work.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Contact Card */}
          <div className="relative mx-auto w-full max-w-lg">
            {/* Decorative Shape */}
            <div className="absolute -right-4 -top-4 h-28 w-28 rounded-3xl border-2 border-chandan-primary/15 sm:-right-6 sm:-top-6" />
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-chandan-primary/10 sm:-bottom-6 sm:-left-6" />

            <div className="relative overflow-hidden rounded-3xl border border-border bg-white p-7 shadow-2xl shadow-chandan-navy/10 sm:p-9">
              <div className="absolute right-0 top-0 h-2 w-32 rounded-bl-full bg-chandan-primary" />

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-blue text-chandan-primary">
                <MessageCircle size={27} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-chandan-navy sm:text-3xl">
                Tell us what needs attention.
              </h3>

              <p className="mt-3 text-sm leading-7 text-text-secondary sm:text-base">
                Choose a contact option to discuss your building repair or
                waterproofing requirements.
              </p>

              {/* Phone Contact */}
              <a
                href={phoneHref}
                onClick={() => trackPhoneClick("quote_cta")}
                className="mt-8 flex items-center gap-4 rounded-xl border border-border p-4 transition hover:border-chandan-primary/40 hover:bg-background-blue sm:p-5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-chandan-navy text-white">
                  <PhoneCall size={21} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-xs text-text-muted">
                    Call us directly
                  </span>
                  <span className="mt-1 block break-words text-base font-bold text-chandan-navy">
                    {PHONE_DISPLAY}
                  </span>
                </span>

                <ArrowRight
                  size={18}
                  className="shrink-0 text-chandan-primary"
                />
              </a>

              {/* WhatsApp Contact */}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("quote_cta")}
                className="mt-4 flex items-center gap-4 rounded-xl border border-border p-4 transition hover:border-chandan-primary/40 hover:bg-background-blue sm:p-5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#16865a] text-white">
                  <MessageCircle size={21} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-xs text-text-muted">
                    Send your enquiry
                  </span>
                  <span className="mt-1 block text-base font-bold text-chandan-navy">
                    WhatsApp Us
                  </span>
                </span>

                <ArrowRight
                  size={18}
                  className="shrink-0 text-chandan-primary"
                />
              </a>

              <div className="mt-6 flex items-start gap-2 border-t border-border pt-5">
                <CheckCircle2
                  size={17}
                  className="mt-0.5 shrink-0 text-chandan-primary"
                />
                <p className="text-xs leading-6 text-text-secondary">
                  Share your location and describe the affected area to help
                  us understand your requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}