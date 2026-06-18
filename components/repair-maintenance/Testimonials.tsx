"use client";

import { motion } from "framer-motion";
import {
  Star,
  Quote,
  MapPin,
  ShieldCheck,
} from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Patel",
    location: "Satellite, Ahmedabad",
    service: "Terrace Waterproofing",
    review:
      "We had severe terrace leakage during monsoon. Chandan Enterprise identified the root cause and completed the waterproofing work professionally. No leakage issues since then.",
  },

  {
    name: "Amit Shah",
    location: "South Bopal, Ahmedabad",
    service: "Wall Crack Repair & Painting",
    review:
      "Excellent workmanship and transparent pricing. The team repaired all wall cracks and completed repainting on time with great finishing quality.",
  },

  {
    name: "Neha Mehta",
    location: "Prahlad Nagar, Ahmedabad",
    service: "False Ceiling & Gypsum Partition",
    review:
      "Professional team with excellent execution. The false ceiling and partition work completely transformed our office space.",
  },
];

export default function Testimonials() {
  const handleCallClick = () => {
  window.gtag?.("event", "phone_click", {
    event_category: "Contact",
    event_label: "Testimonials CTA Call",
  });
};

const handleWhatsappClick = () => {
  window.gtag?.("event", "whatsapp_click", {
    event_category: "Contact",
    event_label: "Testimonials CTA WhatsApp",
  });
};
  return (
    <section className="relative overflow-hidden bg-[#08111F] py-24 text-white">

      {/* Background Effects */}

      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-[1280px] px-5 lg:px-8">

        {/* Header */}

        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Client Testimonials
          </span>

          <h2 className="mt-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-400">
            Trusted by homeowners, businesses and property
            managers across Ahmedabad.
          </p>

        </div>

        {/* Rating Banner */}

        <div className="mt-14 overflow-hidden rounded-[36px] border border-slate-800 bg-slate-900/70 p-8 backdrop-blur-xl">

          <div className="flex flex-col items-center justify-center text-center">

            <div className="flex gap-1">

              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={26}
                  fill="currentColor"
                  className="text-yellow-400"
                />
              ))}

            </div>

            <h3 className="mt-4 text-5xl font-bold text-white">
              4.9/5
            </h3>

            <p className="mt-2 text-slate-400">
              Based on Client Satisfaction & Project Feedback
            </p>

          </div>

        </div>

        {/* Testimonials Grid */}

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
                      {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-[32px] border border-slate-800 bg-slate-900/70 p-8 backdrop-blur-xl"
            >
              {/* Hover Glow */}

              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
              </div>

              {/* Quote Icon */}

              <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">

                <Quote
                  size={28}
                  className="text-cyan-400"
                />

              </div>

              {/* Stars */}

              <div className="relative z-10 flex gap-1">

                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="currentColor"
                    className="text-yellow-400"
                  />
                ))}

              </div>

              {/* Review */}

              <p className="relative z-10 mt-5 leading-relaxed text-slate-300">
                "{item.review}"
              </p>

              {/* Service */}

              <div className="relative z-10 mt-6">

                <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-2 text-xs font-medium text-cyan-300">
                  {item.service}
                </span>

              </div>

              {/* Client */}

              <div className="relative z-10 mt-6 border-t border-slate-800 pt-5">

                <h4 className="font-semibold text-white">
                  {item.name}
                </h4>

                <div className="mt-2 flex items-center gap-2 text-slate-400">

                  <MapPin size={14} />

                  <span className="text-sm">
                    {item.location}
                  </span>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* Bottom Trust Banner */}

        <div className="mt-20 overflow-hidden rounded-[40px] bg-gradient-to-r from-cyan-600 via-cyan-500 to-blue-600 p-10 lg:p-14">

          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

            <div className="text-center lg:text-left">

              <div className="mb-4 flex justify-center lg:justify-start">

                <ShieldCheck
                  size={42}
                  className="text-white"
                />

              </div>

              <h3 className="text-3xl font-bold text-white lg:text-4xl">
                Trusted By Property Owners Across Ahmedabad
              </h3>

              <p className="mt-4 max-w-2xl text-lg text-cyan-50">
                From waterproofing and repair work to
                renovation, false ceiling, gypsum partition
                and building maintenance, clients trust
                Chandan Enterprise for quality workmanship
                and reliable service.
              </p>

            </div>

            <div className="flex flex-col gap-4 sm:flex-row">

              <a
                href="tel:+919558189429"
                onClick={handleCallClick}
                className="rounded-2xl bg-white px-8 py-4 text-center font-semibold text-cyan-700 transition hover:scale-105"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919558189429"
                 onClick={handleWhatsappClick}
                target="_blank"
                className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-center font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                WhatsApp Us
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}