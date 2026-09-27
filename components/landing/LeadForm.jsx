"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileText,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  User,
  Wrench,
  XCircle,
} from "lucide-react";

/*
|--------------------------------------------------------------------------
| CONFIGURATION
|--------------------------------------------------------------------------
|
| Add these values to your .env.local file:
|
| NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
| NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
| NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
| NEXT_PUBLIC_GOOGLE_SCRIPT_URL=your_google_script_url
|
| Restart the Next.js development server after changing .env.local.
|
|--------------------------------------------------------------------------
*/

const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";

const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";

const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

const GOOGLE_SCRIPT_URL =
  process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "";

/*
|--------------------------------------------------------------------------
| FORM INITIAL STATE
|--------------------------------------------------------------------------
*/

const initialForm = {
  name: "",
  phone: "",
  email: "",
  category: "",
  message: "",
  website: "",
};

/*
|--------------------------------------------------------------------------
| SERVICE OPTIONS
|--------------------------------------------------------------------------
*/

const serviceOptions = [
  "Terrace Waterproofing",
  "Roof Waterproofing",
  "Bathroom Waterproofing",
  "Wall Seepage Treatment",
  "Basement Waterproofing",
  "Residential Waterproofing",
  "Commercial Waterproofing",
  "Industrial Waterproofing",
  "Other Waterproofing Requirement",
];

/*
|--------------------------------------------------------------------------
| VALIDATION
|--------------------------------------------------------------------------
*/

const validateForm = (form) => {
  const errors = {};

  const name = form.name.trim();
  const phone = form.phone.trim();
  const email = form.email.trim();
  const category = form.category.trim();
  const message = form.message.trim();

  if (!name) {
    errors.name = "Please enter your name.";
  } else if (name.length < 2) {
    errors.name = "Please enter a valid name.";
  }

  if (!phone) {
    errors.phone = "Please enter your phone number.";
  } else {
    const cleanedPhone = phone.replace(/\D/g, "");

    if (cleanedPhone.length < 10) {
      errors.phone = "Please enter a valid phone number.";
    }
  }

  if (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      errors.email = "Please enter a valid email address.";
    }
  }

  if (!category) {
    errors.category = "Please select a service.";
  }

  if (!message) {
    errors.message = "Please describe your requirement.";
  } else if (message.length < 10) {
    errors.message = "Please provide a little more detail.";
  }

  return errors;
};

/*
|--------------------------------------------------------------------------
| COMPONENT
|--------------------------------------------------------------------------
*/

export default function LeadForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  /*
  |--------------------------------------------------------------------------
  | INPUT HANDLER
  |--------------------------------------------------------------------------
  */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: "",
      }));
    }

    if (status !== "idle") {
      setStatus("idle");
      setStatusMessage("");
    }
  };

  /*
  |--------------------------------------------------------------------------
  | BLUR VALIDATION
  |--------------------------------------------------------------------------
  */

  const handleBlur = (event) => {
    const { name } = event.target;

    const fieldErrors = validateForm({
      ...form,
      [name]: event.target.value,
    });

    if (fieldErrors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: fieldErrors[name],
      }));
    }
  };

  /*
  |--------------------------------------------------------------------------
  | EMAILJS SUBMISSION
  |--------------------------------------------------------------------------
  */

  const sendEmailJS = async () => {
    if (
      !EMAILJS_SERVICE_ID ||
      !EMAILJS_TEMPLATE_ID ||
      !EMAILJS_PUBLIC_KEY
    ) {
      return {
        success: false,
        configured: false,
      };
    }

    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,

          template_params: {
            name: form.name.trim(),
            phone: form.phone.trim(),
            email: form.email.trim(),
            category: form.category.trim(),
            message: form.message.trim(),

            submitted_at: new Date().toLocaleString("en-IN", {
              timeZone: "Asia/Kolkata",
            }),
          },
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Email submission failed.");
    }

    return {
      success: true,
      configured: true,
    };
  };

  /*
  |--------------------------------------------------------------------------
  | GOOGLE SHEETS SUBMISSION
  |--------------------------------------------------------------------------
  */

  const sendToGoogleSheet = async () => {
    if (!GOOGLE_SCRIPT_URL) {
      return {
        success: false,
        configured: false,
      };
    }

    const payload = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      category: form.category.trim(),
      message: form.message.trim(),

      submittedAt: new Date().toISOString(),

      source: "Waterproofing Landing Page",
    };

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    /*
     * Google Apps Script with no-cors may return an opaque response.
     * A successful fetch reaching the endpoint is therefore treated
     * as a successful submission.
     */

    return {
      success: true,
      configured: true,
      response,
    };
  };

  /*
  |--------------------------------------------------------------------------
  | FORM SUBMIT
  |--------------------------------------------------------------------------
  */

  const handleSubmit = async (event) => {
    event.preventDefault();

    /*
     * Honeypot protection
     */
    if (form.website.trim()) {
      return;
    }

    const validationErrors = validateForm(form);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus("error");
      setStatusMessage(
        "Please check the highlighted fields and try again."
      );
      return;
    }

    setStatus("loading");
    setStatusMessage("");

    try {
      let submitted = false;

      /*
       * Try EmailJS first
       */
      if (
        EMAILJS_SERVICE_ID &&
        EMAILJS_TEMPLATE_ID &&
        EMAILJS_PUBLIC_KEY
      ) {
        await sendEmailJS();
        submitted = true;
      }

      /*
       * Send to Google Sheet if configured.
       *
       * This can work alongside EmailJS so the enquiry
       * can be both emailed and stored.
       */
      if (GOOGLE_SCRIPT_URL) {
        await sendToGoogleSheet();
        submitted = true;
      }

      /*
       * If nothing is configured, show configuration error.
       */
      if (!submitted) {
        throw new Error(
          "No enquiry submission service is configured."
        );
      }

      setStatus("success");

      setStatusMessage(
        "Thank you! Your enquiry has been received. Our team will contact you shortly."
      );

      setForm(initialForm);
      setErrors({});

      /*
       * Optional tracking event
       */
      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];

        window.dataLayer.push({
          event: "generate_lead",
          lead_source: "waterproofing_landing_page",
          lead_service: form.category.trim(),
        });
      }
    } catch (error) {
      console.error("Lead form submission error:", error);

      setStatus("error");

      setStatusMessage(
        "We couldn't submit your enquiry right now. Please try again or contact us directly."
      );
    }
  };

  /*
  |--------------------------------------------------------------------------
  | FIELD CLASS HELPERS
  |--------------------------------------------------------------------------
  */

  const getInputClass = (fieldName) => {
    const hasError = Boolean(errors[fieldName]);

    return `
      w-full rounded-xl border bg-white px-4 py-3.5
      text-sm text-[#092a43]
      outline-none transition-all duration-200
      placeholder:text-[#a0afba]
      ${
        hasError
          ? "border-red-300 ring-2 ring-red-100"
          : "border-[#dce8f0] focus:border-[#015696] focus:ring-4 focus:ring-[#015696]/10"
      }
    `;
  };

  return (
    <section
      id="enquiry"
      className="relative overflow-hidden bg-[#061b2b] py-10 sm:py-12 lg:py-14"
    >

      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-[-150px] h-[600px] w-[600px] rounded-full bg-[#015696]/30 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-[-180px] h-[550px] w-[550px] rounded-full bg-[#016db5]/20 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#46a9d8]/5 blur-3xl"
      />

      {/* Technical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-chandan relative z-10">

        {/* =========================================================
            HEADER
        ========================================================== */}

        <div className="grid items-end gap-8 border-b border-[#23445b] pb-9 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

          {/* LEFT */}
          <div>

            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#46a9d8]" />

              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#46a9d8]">
                Get In Touch
              </span>
            </div>

            <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.06] tracking-[-0.045em] text-white sm:text-4xl lg:text-[50px]">
              Let's Discuss Your
              <span className="block text-[#46a9d8]">
                Waterproofing Requirement.
              </span>
            </h2>

          </div>

          {/* RIGHT */}
          <div className="max-w-xl lg:ml-auto">

            <div className="mb-4 flex items-center gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#31556d] bg-[#092a43] text-[#46a9d8]">
                <MessageCircle
                  size={19}
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <p className="text-sm font-extrabold text-white">
                  Request an Inspection
                </p>

                <p className="mt-0.5 text-xs text-[#8fa9b8]">
                  Tell us about your property and the issue
                </p>
              </div>

            </div>

            <p className="text-base leading-7 text-[#a9bfcc] sm:text-lg">
              Share your leakage, seepage, dampness or waterproofing
              requirement. Provide a few details and our team can understand
              the requirement and discuss the next step with you.
            </p>

          </div>

        </div>

        {/* =========================================================
            MAIN FORM AREA
        ========================================================== */}

        <div className="mt-10 grid overflow-hidden rounded-[30px] border border-[#23445b] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.20)] lg:grid-cols-[0.72fr_1.28fr]">

          {/* =======================================================
              LEFT INFORMATION PANEL
          ======================================================== */}

          <div className="relative overflow-hidden bg-[#092a43] p-7 sm:p-9 lg:p-10">

            {/* Decorative glows */}
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#015696]/35 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-[#46a9d8]/10 blur-3xl"
            />

            <div className="relative z-10">

              {/* Small label */}
              <div className="flex items-center gap-2">
                <Sparkles
                  size={15}
                  className="text-[#46a9d8]"
                />

                <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#46a9d8]">
                  Why Contact Us?
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-extrabold leading-tight tracking-[-0.03em] text-white sm:text-3xl">
                Start with a conversation about your property.
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#a9bfcc]">
                Every waterproofing requirement can be different. Share the
                issue you are experiencing so the required work can be
                discussed according to the property condition.
              </p>

              {/* =================================================
                  CONTACT DETAILS
              ================================================== */}

              <div className="mt-8 space-y-4">

                {/* Phone */}
                <a
                  href="tel:+919649957698"
                  className="group flex items-center gap-4 rounded-2xl border border-[#23445b] bg-[#061b2b]/30 p-4 transition-all duration-300 hover:border-[#315d77] hover:bg-[#061b2b]/50"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0d3855] text-[#46a9d8]">
                    <Phone size={18} />
                  </div>

                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#66889b]">
                      Call Us
                    </p>

                    <p className="mt-1 text-sm font-extrabold text-white">
                      +91 9649957698
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@chandanenterprises.com"
                  className="group flex items-center gap-4 rounded-2xl border border-[#23445b] bg-[#061b2b]/30 p-4 transition-all duration-300 hover:border-[#315d77] hover:bg-[#061b2b]/50"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0d3855] text-[#46a9d8]">
                    <Mail size={18} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#66889b]">
                      Email
                    </p>

                    <p className="mt-1 truncate text-sm font-extrabold text-white">
                      info@chandanenterprises.com
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 rounded-2xl border border-[#23445b] bg-[#061b2b]/30 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0d3855] text-[#46a9d8]">
                    <MapPin size={18} />
                  </div>

                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#66889b]">
                      Service Area
                    </p>

                    <p className="mt-1 text-sm font-extrabold text-white">
                      Ahmedabad & Nearby Areas
                    </p>
                  </div>
                </div>

              </div>

              {/* =================================================
                  TRUST POINTS
              ================================================== */}

              <div className="mt-8 border-t border-[#23445b] pt-7">

                <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.15em] text-[#66889b]">
                  What Happens Next
                </p>

                <div className="space-y-3">

                  {[
                    "We review your requirement",
                    "Discuss the affected area",
                    "Understand the required work",
                    "Discuss the next step",
                  ].map((item, index) => (
                    <div
                      key={`${item}-${index}`}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2
                        size={16}
                        className="shrink-0 text-[#46a9d8]"
                      />

                      <span className="text-sm text-[#d2e1e8]">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>

              </div>

              {/* Office Hours */}
              <div className="mt-8 flex items-center gap-3 border-t border-[#23445b] pt-6">

                <Clock3
                  size={17}
                  className="text-[#46a9d8]"
                />

                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#66889b]">
                    Working Hours
                  </p>

                  <p className="mt-1 text-xs font-bold text-white">
                    Monday – Saturday · 9:00 AM – 7:00 PM
                  </p>
                </div>

              </div>

            </div>
          </div>

          {/* =======================================================
              FORM PANEL
          ======================================================== */}

          <div className="bg-white p-6 sm:p-8 lg:p-10">

            {/* Form Header */}
            <div className="mb-7 flex items-start justify-between gap-4">

              <div>

                <div className="flex items-center gap-2">

                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#eef8fd] text-[#015696]">
                    <FileText size={17} />
                  </div>

                  <span className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#015696]">
                    Enquiry Form
                  </span>

                </div>

                <h3 className="mt-3 text-2xl font-extrabold tracking-[-0.03em] text-[#092a43]">
                  Tell us about your requirement
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#64748b]">
                  Fill in the details below and our team can get in touch with
                  you regarding your waterproofing requirement.
                </p>

              </div>

              <div className="hidden shrink-0 items-center gap-2 rounded-full bg-[#eef8fd] px-3 py-2 sm:flex">
                <ShieldCheck
                  size={14}
                  className="text-[#015696]"
                />

                <span className="text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#015696]">
                  Secure Enquiry
                </span>
              </div>

            </div>

            {/* =====================================================
                SUCCESS MESSAGE
            ====================================================== */}

            {status === "success" && (
              <div className="mb-6 overflow-hidden rounded-2xl border border-emerald-200 bg-emerald-50 p-5">

                <div className="flex items-start gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 size={21} />
                  </div>

                  <div>
                    <p className="font-extrabold text-emerald-900">
                      Enquiry submitted successfully
                    </p>

                    <p className="mt-1 text-sm leading-6 text-emerald-700">
                      {statusMessage}
                    </p>
                  </div>

                </div>

              </div>
            )}

            {/* =====================================================
                ERROR MESSAGE
            ====================================================== */}

            {status === "error" && statusMessage && (
              <div className="mb-6 overflow-hidden rounded-2xl border border-red-200 bg-red-50 p-5">

                <div className="flex items-start gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <XCircle size={21} />
                  </div>

                  <div>
                    <p className="font-extrabold text-red-900">
                      Unable to submit enquiry
                    </p>

                    <p className="mt-1 text-sm leading-6 text-red-700">
                      {statusMessage}
                    </p>
                  </div>

                </div>

              </div>
            )}

            {/* =====================================================
                FORM
            ====================================================== */}

            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-5"
            >

              {/* Honeypot */}
              <div
                aria-hidden="true"
                className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
              >
                <label htmlFor="website">
                  Website
                </label>

                <input
                  id="website"
                  type="text"
                  name="website"
                  tabIndex="-1"
                  autoComplete="off"
                  value={form.website}
                  onChange={handleChange}
                />
              </div>

              {/* =================================================
                  NAME + PHONE
              ================================================== */}

              <div className="grid gap-5 sm:grid-cols-2">

                {/* Name */}
                <div>

                  <label
                    htmlFor="name"
                    className="mb-2 flex items-center gap-2 text-sm font-extrabold text-[#092a43]"
                  >
                    <User
                      size={15}
                      className="text-[#015696]"
                    />

                    Your Name

                    <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your name"
                    autoComplete="name"
                    className={getInputClass("name")}
                  />

                  {errors.name && (
                    <p className="mt-1.5 text-xs font-semibold text-red-500">
                      {errors.name}
                    </p>
                  )}

                </div>

                {/* Phone */}
                <div>

                  <label
                    htmlFor="phone"
                    className="mb-2 flex items-center gap-2 text-sm font-extrabold text-[#092a43]"
                  >
                    <Phone
                      size={15}
                      className="text-[#015696]"
                    />

                    Phone Number

                    <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="+91 98765 43210"
                    autoComplete="tel"
                    inputMode="tel"
                    className={getInputClass("phone")}
                  />

                  {errors.phone && (
                    <p className="mt-1.5 text-xs font-semibold text-red-500">
                      {errors.phone}
                    </p>
                  )}

                </div>

              </div>

              {/* =================================================
                  EMAIL + SERVICE
              ================================================== */}

              <div className="grid gap-5 sm:grid-cols-2">

                {/* Email */}
                <div>

                  <label
                    htmlFor="email"
                    className="mb-2 flex items-center gap-2 text-sm font-extrabold text-[#092a43]"
                  >
                    <Mail
                      size={15}
                      className="text-[#015696]"
                    />

                    Email Address

                    <span className="ml-1 text-xs font-medium text-[#94a3b8]">
                      Optional
                    </span>
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="you@example.com"
                    autoComplete="email"
                    className={getInputClass("email")}
                  />

                  {errors.email && (
                    <p className="mt-1.5 text-xs font-semibold text-red-500">
                      {errors.email}
                    </p>
                  )}

                </div>

                {/* Service */}
                <div>

                  <label
                    htmlFor="category"
                    className="mb-2 flex items-center gap-2 text-sm font-extrabold text-[#092a43]"
                  >
                    <Wrench
                      size={15}
                      className="text-[#015696]"
                    />

                    Waterproofing Requirement

                    <span className="text-red-500">*</span>
                  </label>

                  <select
                    id="category"
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${getInputClass(
                      "category"
                    )} cursor-pointer`}
                  >
                    <option value="">
                      Select a service
                    </option>

                    {serviceOptions.map((service) => (
                      <option
                        key={service}
                        value={service}
                      >
                        {service}
                      </option>
                    ))}
                  </select>

                  {errors.category && (
                    <p className="mt-1.5 text-xs font-semibold text-red-500">
                      {errors.category}
                    </p>
                  )}

                </div>

              </div>

              {/* =================================================
                  MESSAGE
              ================================================== */}

              <div>

                <div className="mb-2 flex items-center justify-between">

                  <label
                    htmlFor="message"
                    className="flex items-center gap-2 text-sm font-extrabold text-[#092a43]"
                  >
                    <FileText
                      size={15}
                      className="text-[#015696]"
                    />

                    Tell Us About Your Requirement

                    <span className="text-red-500">*</span>
                  </label>

                  <span className="text-[11px] font-medium text-[#94a3b8]">
                    {form.message.length}/500
                  </span>

                </div>

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={(event) => {
                    if (event.target.value.length <= 500) {
                      handleChange(event);
                    }
                  }}
                  onBlur={handleBlur}
                  rows={5}
                  maxLength={500}
                  placeholder="For example: We have water leakage from our terrace during rain..."
                  className={`${getInputClass(
                    "message"
                  )} resize-none leading-6`}
                />

                {errors.message && (
                  <p className="mt-1.5 text-xs font-semibold text-red-500">
                    {errors.message}
                  </p>
                )}

              </div>

              {/* =================================================
                  INFO NOTE
              ================================================== */}

              <div className="flex items-start gap-3 rounded-xl border border-[#dce8f0] bg-[#f8fbfd] p-4">

                <ShieldCheck
                  size={17}
                  className="mt-0.5 shrink-0 text-[#015696]"
                />

                <p className="text-xs leading-5 text-[#64748b]">
                  Please provide accurate contact details so our team can
                  contact you regarding your enquiry. Avoid sharing sensitive
                  personal or financial information in this form.
                </p>

              </div>

              {/* =================================================
                  SUBMIT
              ================================================== */}

              <button
                type="submit"
                disabled={status === "loading"}
                className="group flex min-h-[54px] w-full items-center justify-center gap-2 rounded-xl bg-[#015696] px-6 text-sm font-extrabold text-white shadow-[0_12px_30px_rgba(1,86,150,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b6fa8] hover:shadow-[0_16px_35px_rgba(1,86,150,0.26)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
              >

                {status === "loading" ? (
                  <>
                    <Loader2
                      size={18}
                      className="animate-spin"
                    />

                    Submitting Your Enquiry...
                  </>
                ) : (
                  <>
                    <Send size={17} />

                    Submit Enquiry

                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </>
                )}

              </button>

              {/* Bottom reassurance */}
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 pt-1">

                <div className="flex items-center gap-1.5">
                  <CheckCircle2
                    size={13}
                    className="text-[#46a9d8]"
                  />

                  <span className="text-[11px] font-semibold text-[#64748b]">
                    Quick response
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <ShieldCheck
                    size={13}
                    className="text-[#46a9d8]"
                  />

                  <span className="text-[11px] font-semibold text-[#64748b]">
                    Professional enquiry handling
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <MessageCircle
                    size={13}
                    className="text-[#46a9d8]"
                  />

                  <span className="text-[11px] font-semibold text-[#64748b]">
                    Discuss your requirement
                  </span>
                </div>

              </div>

            </form>
          </div>
        </div>

        {/* =========================================================
            BOTTOM CONTACT STRIP
        ========================================================== */}

        <div className="mt-6 grid gap-3 sm:grid-cols-3">

          {/* Call */}
          <a
            href="tel:+919649957698"
            className="group flex items-center gap-4 rounded-2xl border border-[#23445b] bg-[#092a43]/80 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#315d77]"
          >

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0d3855] text-[#46a9d8]">
              <Phone size={17} />
            </div>

            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#66889b]">
                Prefer to Call?
              </p>

              <p className="mt-1 text-sm font-extrabold text-white">
                Speak With Our Team
              </p>
            </div>

          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919649957698"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-[#23445b] bg-[#092a43]/80 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#315d77]"
          >

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0d3855] text-[#46a9d8]">
              <MessageCircle size={17} />
            </div>

            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#66889b]">
                WhatsApp
              </p>

              <p className="mt-1 text-sm font-extrabold text-white">
                Send Your Requirement
              </p>
            </div>

          </a>

          {/* Inspection */}
          <div className="flex items-center gap-4 rounded-2xl border border-[#23445b] bg-[#092a43]/80 p-4 backdrop-blur-sm">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0d3855] text-[#46a9d8]">
              <ShieldCheck size={17} />
            </div>

            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#66889b]">
                Next Step
              </p>

              <p className="mt-1 text-sm font-extrabold text-white">
                Discuss Your Requirement
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}