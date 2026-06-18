"use client";

import { useState } from "react";
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  MapPin,
} from "lucide-react";

import { motion } from "framer-motion";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      // Submit API Here

      if (typeof window !== "undefined") {
        window.gtag?.("event", "generate_lead", {
          event_category: "Lead",
          event_label: "Free Inspection Form",
        });
      }

      window.location.href = "/thank-you";
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const handleCallClick = () => {
    if (typeof window !== "undefined") {
      window.gtag?.("event", "phone_click", {
        event_category: "Contact",
        event_label: "Call Button",
      });
    }
  };
  const handleWhatsappClick = () => {
    if (typeof window !== "undefined") {
      window.gtag?.("event", "whatsapp_click", {
        event_category: "Contact",
        event_label: "WhatsApp Button",
      });
    }
  };
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-100 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-100 blur-[120px]" />

      <div className="relative mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="overflow-hidden rounded-[40px] border border-slate-200 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left Side */}

            <div className="relative overflow-hidden bg-gradient-to-br from-[#08111F] via-[#0B1220] to-[#08111F] p-8 text-white lg:p-12">
              <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

              <div className="relative">
                <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
                  Free Consultation
                </span>

                <h2 className="mt-6 text-3xl font-bold lg:text-5xl">
                  Request Free
                  <span className="block text-cyan-400">Site Inspection</span>
                </h2>

                <p className="mt-5 text-lg text-slate-300">
                  Get expert advice for waterproofing, renovation, repair, false
                  ceiling, gypsum partition and maintenance work.
                </p>

                <div className="mt-10 space-y-4">
                  {[
                    "Free Site Inspection",
                    "Same Day Response",
                    "Warranty Support",
                    "Transparent Pricing",
                    "Ahmedabad Coverage",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 size={20} className="text-cyan-400" />

                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Contact Options */}

                <div className="mt-10 space-y-4">
                  <a
                    href="tel:+919558189429"
                    onClick={handleCallClick}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20">
                      <Phone size={20} className="text-cyan-400" />
                    </div>

                    <div>
                      <p className="text-sm text-slate-400">Call Now</p>

                      <p className="font-semibold">+91 95581 89429</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/919558189429"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleWhatsappClick}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/20">
                      <MessageCircle size={20} className="text-green-400" />
                    </div>

                    <div>
                      <p className="text-sm text-slate-400">WhatsApp</p>

                      <p className="font-semibold">Quick Response</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side Form */}

            <div className="p-8 lg:p-12">
              <motion.form
                onSubmit={handleSubmit}
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                className="space-y-5"
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <input
                    required
                    type="text"
                    placeholder="Full Name"
                    className="h-14 rounded-2xl border border-slate-200 bg-slate-50 px-5 outline-none transition focus:border-cyan-500"
                  />

                  <input
                    required
                    type="tel"
                    placeholder="Phone Number"
                    className="h-14 rounded-2xl border border-slate-200 bg-slate-50 px-5 outline-none transition focus:border-cyan-500"
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Location"
                    className="h-14 rounded-2xl border border-slate-200 bg-slate-50 px-5 outline-none transition focus:border-cyan-500"
                  />

                  <select
                    required
                    className="h-14 rounded-2xl border border-slate-200 bg-slate-50 px-5 outline-none transition focus:border-cyan-500"
                  >
                    <option value="">Select Service</option>

                    <option>Waterproofing</option>

                    <option>Repair & Maintenance</option>

                    <option>Renovation</option>

                    <option>False Ceiling</option>

                    <option>Gypsum Partition</option>

                    <option>Painting Services</option>

                    <option>Civil Works</option>

                    <option>Interior Works</option>
                  </select>
                </div>

                <select className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 outline-none transition focus:border-cyan-500">
                  <option value="">Property Type</option>

                  <option>Residential</option>

                  <option>Commercial</option>

                  <option>Industrial</option>
                </select>

                <textarea
                  rows={6}
                  placeholder="Describe Your Requirement..."
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-5 outline-none transition focus:border-cyan-500"
                />

                {/* Trust Note */}

                <div className="flex items-center gap-3 rounded-2xl border border-cyan-100 bg-cyan-50 p-4">
                  <ShieldCheck size={20} className="text-cyan-600" />

                  <span className="text-sm text-slate-700">
                    Your information is secure and will only be used to contact
                    you regarding your enquiry.
                  </span>
                </div>

                {/* Submit */}

                <button
                  type="submit"
                  disabled={loading}
                  className="h-14 w-full rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 font-semibold text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? "Submitting..." : "Book Free Inspection"}
                </button>

                <div className="flex flex-wrap items-center justify-center gap-4 text-center text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-green-500" />
                    Free Inspection
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-green-500" />
                    Same Day Response
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-green-500" />
                    No Hidden Charges
                  </div>
                </div>
              </motion.form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
