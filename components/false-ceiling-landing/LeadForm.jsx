"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Loader2,
  Send,
  ShieldCheck,
  Phone,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { ceilingRequirements, propertyTypes } from "./data";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  propertyType: "",
  requirement: "",
  message: "",
  website: "",
};

export default function LeadForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submitForm = async (event) => {
    event.preventDefault();

    // Honeypot protection
    if (form.website) {
      setStatus("success");
      return;
    }

    setStatus("loading");

    try {
      const endpoint = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

      if (!endpoint) {
        throw new Error(
          "NEXT_PUBLIC_GOOGLE_SCRIPT_URL is not configured."
        );
      }

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          ...form,
          source: "false-ceiling-services",
          page:
            typeof window !== "undefined"
              ? window.location.href
              : "",
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to submit the enquiry.");
      }

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "generate_lead",
        lead_source: "false-ceiling-services",
        property_type: form.propertyType,
        requirement: form.requirement,
      });

      setStatus("success");
      setForm(initialForm);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section
      id="enquiry"
      className="scroll-mt-20 border-t border-[#dce8f0] bg-[#f7f9fb] py-10 sm:py-12 lg:py-14"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">

        {/* Architectural header */}
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#015696]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#015696]">
                Start Your Enquiry
              </span>
            </div>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#061b2b] sm:text-4xl lg:text-[48px]">
              Let&apos;s plan the ceiling
              <span className="block text-[#015696]">
                around your space.
              </span>
            </h2>
          </div>

          <div className="lg:pb-1 lg:pl-16">
            <p className="max-w-2xl text-[15px] leading-7 text-[#64748b]">
              Tell us a little about your property, room and ceiling
              requirements. We&apos;ll use the information as a starting
              point for a focused project discussion.
            </p>
          </div>
        </div>

        {/* Main enquiry layout */}
        <div className="grid border border-[#dce8f0] bg-white lg:grid-cols-[0.72fr_1.28fr]">

          {/* Left information panel */}
          <div className="border-b border-[#dce8f0] bg-[#f1f8fc] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10 xl:p-12">
            <div className="flex h-10 w-10 items-center justify-center border border-[#c9e2ee] bg-white text-[#015696]">
              <MessageCircle
                className="h-[18px] w-[18px]"
                strokeWidth={1.8}
              />
            </div>

            <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.18em] text-[#94a3b8]">
              Project discussion
            </p>

            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.025em] text-[#092a43] sm:text-3xl">
              A few details help us understand the space.
            </h3>

            <p className="mt-4 text-sm leading-6 text-[#64748b]">
              Whether you are planning a residential room, office,
              retail space or a custom interior, share what you have
              in mind and we can start from there.
            </p>

            {/* Checklist */}
            <div className="mt-8 border-t border-[#d7e7ef]">
              {[
                "Discuss your preferred ceiling style",
                "Share room or property requirements",
                "Ask about lighting integration",
                "Request a project discussion",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border-b border-[#d7e7ef] py-4"
                >
                  <span className="text-[10px] font-bold text-[#94a3b8]">
                    0{index + 1}
                  </span>

                  <CheckCircle2
                    className="h-4 w-4 shrink-0 text-[#015696]"
                    strokeWidth={1.8}
                  />

                  <span className="text-sm font-medium text-[#475569]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Direct contact */}
            <div className="mt-8 border-t border-[#d7e7ef] pt-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#94a3b8]">
                Prefer a direct conversation?
              </p>

              <div className="mt-4 grid gap-2">
                <a
                  href="tel:+919558189429"
                  className="group flex items-center justify-between border border-[#d7e7ef] bg-white px-4 py-3 transition hover:border-[#a9cfdf] hover:bg-[#fafdff]"
                >
                  <span className="flex items-center gap-3">
                    <Phone
                      className="h-4 w-4 text-[#015696]"
                      strokeWidth={1.8}
                    />
                    <span className="text-sm font-semibold text-[#092a43]">
                      +91 95581 89429
                    </span>
                  </span>

                  <ArrowUpRight
                    className="h-4 w-4 text-[#94a3b8] transition group-hover:text-[#015696]"
                    strokeWidth={1.8}
                  />
                </a>

                <a
                  href="https://wa.me/919558189429?text=Hello%2C%20I%20want%20to%20discuss%20false%20ceiling%20services."
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between border border-[#d7e7ef] bg-white px-4 py-3 transition hover:border-[#a9cfdf] hover:bg-[#fafdff]"
                >
                  <span className="flex items-center gap-3">
                    <MessageCircle
                      className="h-4 w-4 text-[#015696]"
                      strokeWidth={1.8}
                    />
                    <span className="text-sm font-semibold text-[#092a43]">
                      WhatsApp us
                    </span>
                  </span>

                  <ArrowUpRight
                    className="h-4 w-4 text-[#94a3b8] transition group-hover:text-[#015696]"
                    strokeWidth={1.8}
                  />
                </a>
              </div>
            </div>

            {/* Privacy note */}
            <div className="mt-8 flex gap-3 border-t border-[#d7e7ef] pt-6">
              <ShieldCheck
                className="mt-0.5 h-4 w-4 shrink-0 text-[#015696]"
                strokeWidth={1.8}
              />

              <p className="text-[11px] leading-5 text-[#7b8b96]">
                Your enquiry is submitted through the configured
                business form endpoint. Keep API keys and private
                credentials on the server/environment side.
              </p>
            </div>
          </div>

          {/* Form panel */}
          <form
            onSubmit={submitForm}
            className="p-6 sm:p-8 lg:p-10 xl:p-12"
          >
            {/* Form header */}
            <div className="mb-8 flex items-end justify-between gap-6 border-b border-[#e5edf2] pb-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#94a3b8]">
                  Project information
                </p>

                <h3 className="mt-1 text-xl font-semibold tracking-[-0.02em] text-[#092a43]">
                  Tell us about your project
                </h3>
              </div>

              <span className="hidden text-[10px] font-semibold uppercase tracking-[0.15em] text-[#94a3b8] sm:block">
                Consultation
              </span>
            </div>

            <div className="grid gap-x-5 gap-y-6 sm:grid-cols-2">

              <Field
                label="Name"
                name="name"
                value={form.name}
                onChange={updateField}
                placeholder="Your name"
                required
              />

              <Field
                label="Phone"
                name="phone"
                value={form.phone}
                onChange={updateField}
                placeholder="Your phone number"
                required
              />

              <Field
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={updateField}
                placeholder="you@example.com"
              />

              <SelectField
                label="Property Type"
                name="propertyType"
                value={form.propertyType}
                onChange={updateField}
                options={propertyTypes}
                required
              />

              <div className="sm:col-span-2">
                <SelectField
                  label="False Ceiling Requirement"
                  name="requirement"
                  value={form.requirement}
                  onChange={updateField}
                  options={ceilingRequirements}
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-[11px] font-bold uppercase tracking-[0.12em] text-[#092a43]"
                >
                  Project Details
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  rows={5}
                  placeholder="Tell us about the room, approximate size, location or design you have in mind..."
                  className="w-full resize-none border border-[#dce8f0] bg-[#fbfdfe] px-4 py-3.5 text-sm text-[#092a43] outline-none transition placeholder:text-[#a0adb7] focus:border-[#015696] focus:bg-white focus:ring-4 focus:ring-[#015696]/5"
                />
              </div>

              {/* Honeypot */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  value={form.website}
                  onChange={updateField}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
            </div>

            {/* Status */}
            {status === "success" && (
              <div
                role="status"
                className="mt-6 flex gap-3 border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                <span>
                  Your enquiry has been submitted successfully.
                </span>
              </div>
            )}

            {status === "error" && (
              <div
                role="alert"
                className="mt-6 border border-red-200 bg-red-50 p-4 text-sm text-red-700"
              >
                We could not submit the enquiry right now. Please
                check the configured form endpoint or contact the team
                directly.
              </div>
            )}

            {/* Submit */}
            <div className="mt-7 flex flex-col gap-4 border-t border-[#e5edf2] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-[11px] leading-5 text-[#94a3b8]">
                By submitting this form, you are requesting a project
                consultation. Final scope and pricing depend on the
                actual project requirements.
              </p>

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex shrink-0 items-center justify-center gap-2 bg-[#015696] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0b3f67] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Request Consultation
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Bottom architectural strip */}
        <div className="grid border-x border-b border-[#dce8f0] bg-white sm:grid-cols-3">
          {[
            ["01", "Share", "Tell us about the space"],
            ["02", "Discuss", "Plan the right ceiling approach"],
            ["03", "Proceed", "Move toward your project"],
          ].map(([number, title, description], index) => (
            <div
              key={number}
              className={`flex gap-4 px-5 py-5 sm:px-7 ${
                index !== 2
                  ? "border-b border-[#e5edf2] sm:border-b-0 sm:border-r"
                  : ""
              }`}
            >
              <span className="text-[10px] font-bold text-[#015696]">
                {number}
              </span>

              <div>
                <p className="text-sm font-semibold text-[#092a43]">
                  {title}
                </p>

                <p className="mt-1 text-xs text-[#94a3b8]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-[11px] font-bold uppercase tracking-[0.12em] text-[#092a43]"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full border border-[#dce8f0] bg-[#fbfdfe] px-4 py-3.5 text-sm text-[#092a43] outline-none transition placeholder:text-[#a0adb7] focus:border-[#015696] focus:bg-white focus:ring-4 focus:ring-[#015696]/5"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-[11px] font-bold uppercase tracking-[0.12em] text-[#092a43]"
      >
        {label}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border border-[#dce8f0] bg-[#fbfdfe] px-4 py-3.5 text-sm text-[#092a43] outline-none transition focus:border-[#015696] focus:bg-white focus:ring-4 focus:ring-[#015696]/5"
      >
        <option value="">Select an option</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}