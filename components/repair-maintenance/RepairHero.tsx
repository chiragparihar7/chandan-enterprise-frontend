"use client";

import Link from "next/link";
import { Phone, MessageCircle, ShieldCheck, ArrowRight } from "lucide-react";

import { motion } from "framer-motion";

const services = [
  "Waterproofing",
  "Repair & Maintenance",
  "Renovation",
  "Civil Works",
  "Interior Works",
  "Painting Services",
];

const stats = [
  {
    value: "500+",
    label: "Projects Completed",
  },
  {
    value: "10+",
    label: "Years Experience",
  },
  {
    value: "95%",
    label: "Client Satisfaction",
  },
  {
    value: "50 KM",
    label: "Service Coverage",
  },
];

export default function RepairHero() {
const handleCallClick = () => {
  window.gtag?.("event", "conversion", {
    send_to: "AW-18164619419/LkPaCOja_8IcEJuxyNVD",
  });

  setTimeout(() => {
    window.location.href = "tel:+919558189429";
  }, 200);
};

const handleWhatsappClick = () => {
  window.gtag?.("event", "conversion", {
    send_to: "AW-18164619419/MjG_CObf7MIcEJuxyNVD",
  });

  setTimeout(() => {
    window.open("https://wa.me/919558189429", "_blank");
  }, 200);
};
  return (
    <section className="relative overflow-hidden bg-[#08111F] text-white">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-[1280px] px-5">
        <div className="py-16 md:py-20 lg:py-24">
          {/* Badge */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
              <ShieldCheck size={16} />
              Ahmedabad's Trusted Property Improvement Experts
            </div>
          </motion.div>

          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-8 max-w-5xl text-center"
          >
            <h1 className="text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-7xl">
              Building Repair,
              <br />
              Renovation &
              <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Waterproofing Services
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-400 lg:text-xl">
              Complete solutions for waterproofing, repair & maintenance,
              renovation, refurbishment, interior works, civil works and
              painting services across Ahmedabad.
            </p>
          </motion.div>

          {/* Services Chips */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-3"
          >
            {services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-200"
              >
                {service}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <button
              onClick={handleCallClick}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-400"
            >
              <Phone size={20} />
              Call Now
            </button>

            <button
              onClick={handleWhatsappClick}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-8 py-4 font-semibold transition-all duration-300 hover:border-cyan-500"
            >
              <MessageCircle size={20} />
              WhatsApp
              <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Border */}

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
    </section>
  );
}
