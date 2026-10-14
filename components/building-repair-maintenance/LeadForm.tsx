"use client";

import { useState, type FormEvent } from "react";
import {
  UserRound,
  Phone,
  MapPin,
  Wrench,
  MessageSquare,
  Send,
  LoaderCircle,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const SERVICES = [
  "Terrace / Roof Waterproofing",
  "Bathroom Leakage / Seepage",
  "Damp Wall Treatment",
  "Wall Crack / Plaster Repair",
  "Painting / Surface Restoration",
  "Building Repair & Maintenance",
  "Other Requirement",
];

type FormStatus = "idle" | "loading" | "success" | "error";

export default function LeadForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    service: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setStatus("loading");
    setFeedback("");

    try {
      /*
       * Connect your existing backend API here.
       *
       * Replace the endpoint below with the actual endpoint
       * used by your Chandan Enterprises backend.
       */
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: "building-repair-maintenance-landing-page",
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          result?.message ||
            "Unable to submit your enquiry. Please try again.",
        );
      }

      setStatus("success");
      setFeedback(
        result?.message ||
          "Thank you! Your enquiry has been submitted successfully.",
      );

      setFormData({
        name: "",
        phone: "",
        location: "",
        service: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-background-soft px-4 py-3.5 text-sm text-chandan-navy outline-none transition placeholder:text-text-muted focus:border-chandan-primary focus:bg-white focus:ring-4 focus:ring-chandan-primary/10";

  const labelClass =
    "mb-2 block text-sm font-semibold text-chandan-navy";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name and Phone */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-name" className={labelClass}>
            Full Name <span className="text-red-500">*</span>
          </label>

          <div className="relative">
            <UserRound
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
            />

            <input
              id="lead-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className={`${inputClass} pl-11`}
              minLength={2}
              maxLength={100}
              required
              disabled={status === "loading"}
            />
          </div>
        </div>

        <div>
          <label htmlFor="lead-phone" className={labelClass}>
            Phone Number <span className="text-red-500">*</span>
          </label>

          <div className="relative">
            <Phone
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
            />

            <input
              id="lead-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              className={`${inputClass} pl-11`}
              pattern="[+]?[0-9 ()-]{10,20}"
              title="Enter a valid phone number."
              maxLength={20}
              required
              disabled={status === "loading"}
            />
          </div>
        </div>
      </div>

      {/* Location */}
      <div>
        <label htmlFor="lead-location" className={labelClass}>
          Property Location <span className="text-red-500">*</span>
        </label>

        <div className="relative">
          <MapPin
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
          />

          <input
            id="lead-location"
            name="location"
            type="text"
            autoComplete="street-address"
            placeholder="Area or locality in Ahmedabad"
            value={formData.location}
            onChange={handleChange}
            className={`${inputClass} pl-11`}
            maxLength={200}
            required
            disabled={status === "loading"}
          />
        </div>
      </div>

      {/* Service */}
      <div>
        <label htmlFor="lead-service" className={labelClass}>
          Service Required <span className="text-red-500">*</span>
        </label>

        <div className="relative">
          <Wrench
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
          />

          <select
            id="lead-service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`${inputClass} appearance-none pl-11`}
            required
            disabled={status === "loading"}
          >
            <option value="" disabled>
              Select a service
            </option>

            {SERVICES.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="lead-message" className={labelClass}>
          Describe the Problem
        </label>

        <div className="relative">
          <MessageSquare
            size={18}
            className="absolute left-4 top-4 text-text-muted"
          />

          <textarea
            id="lead-message"
            name="message"
            rows={4}
            maxLength={2000}
            placeholder="Tell us about the leakage, dampness, cracks, or repair work needed..."
            value={formData.message}
            onChange={handleChange}
            className={`${inputClass} resize-y pl-11`}
            disabled={status === "loading"}
          />
        </div>

        <p className="mt-2 text-right text-xs text-text-muted">
          {formData.message.length}/2000 characters
        </p>
      </div>

      {/* Feedback */}
      {feedback && (
        <div
          role="status"
          aria-live="polite"
          className={`flex items-start gap-3 rounded-xl border p-4 text-sm leading-6 ${
            status === "success"
              ? "border-green-200 bg-green-50 text-green-800"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {status === "success" ? (
            <CheckCircle2 size={19} className="mt-0.5 shrink-0" />
          ) : (
            <AlertCircle size={19} className="mt-0.5 shrink-0" />
          )}

          <p>{feedback}</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="flex w-full items-center justify-center gap-3 rounded-xl bg-chandan-primary px-6 py-4 text-sm font-bold text-white shadow-lg shadow-chandan-primary/20 transition hover:bg-chandan-primary-dark focus:outline-none focus:ring-4 focus:ring-chandan-primary/20 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <LoaderCircle size={19} className="animate-spin" />
            Submitting Enquiry...
          </>
        ) : (
          <>
            Submit Enquiry
            <Send size={18} />
          </>
        )}
      </button>

      <p className="text-center text-xs leading-6 text-text-muted">
        By submitting this form, you agree to be contacted regarding your
        building repair or waterproofing enquiry.
      </p>
    </form>
  );
}