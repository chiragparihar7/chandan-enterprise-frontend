"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Building2,
  Factory,
  Home,
  PhoneCall,
  ArrowRight,
} from "lucide-react";

const locations = [
  "Satellite",
  "Prahlad Nagar",
  "SG Highway",
  "Bopal",
  "South Bopal",
  "Science City",
  "Thaltej",
  "Bodakdev",
  "Vastrapur",
  "Gota",
  "Chandkheda",
  "Motera",
  "Nikol",
  "Naroda",
  "Maninagar",
  "Gandhinagar",
];

const sectors = [
  {
    icon: Home,
    title: "Residential",
    description:
      "Homes, Villas, Apartments & Housing Projects",
  },
  {
    icon: Building2,
    title: "Commercial",
    description:
      "Offices, Shops, Showrooms & Commercial Buildings",
  },
  {
    icon: Factory,
    title: "Industrial",
    description:
      "Factories, Warehouses & Industrial Facilities",
  },
];

export default function ServiceAreas() {
  const handleCallClick = () => {
  window.gtag?.("event", "phone_click", {
    event_category: "Contact",
    event_label: "Service Areas CTA Call",
  });
};

const handleWhatsappClick = () => {
  window.gtag?.("event", "whatsapp_click", {
    event_category: "Contact",
    event_label: "Service Areas CTA WhatsApp",
  });
};
  return (
    <section className="relative overflow-hidden bg-[#08111F] py-24 text-white">

      {/* Background */}

      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-[1280px] px-5 lg:px-8">

        {/* Header */}

        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Ahmedabad Service Coverage
          </span>

          <h2 className="mt-6 text-3xl font-bold sm:text-4xl lg:text-6xl">

            We Serve Across
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ahmedabad & Nearby Areas
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Fast inspection and professional execution for
            waterproofing, renovation, repair, false ceiling,
            gypsum partition and civil maintenance projects.
          </p>

        </div>

        {/* Main Coverage Banner */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden rounded-[40px] border border-slate-800 bg-slate-900"
        >

          <div className="relative h-[320px] lg:h-[500px]">

            <img
              src="/repair-maintenance/ahmedabad-city.jpg"
              alt="Ahmedabad Service Coverage"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#08111F] via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">

              <div className="max-w-3xl">

                <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/20 px-4 py-2 text-cyan-300">

                  <MapPin size={16} />

                  50 KM Service Radius

                </div>

                <h3 className="mt-5 text-3xl font-bold lg:text-5xl">
                  Same Day Site Inspection Available
                </h3>

                <p className="mt-4 text-lg text-slate-300">
                  Covering Ahmedabad, Gandhinagar and nearby locations.
                </p>

              </div>

            </div>

          </div>

        </motion.div>

        {/* Sector Cards */}

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
                      {sectors.map((sector, index) => {
            const Icon = sector.icon;

            return (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 30 }}
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
                className="group overflow-hidden rounded-[32px] border border-slate-800 bg-slate-900/70 p-8 backdrop-blur-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10">

                  <Icon
                    size={30}
                    className="text-cyan-400"
                  />

                </div>

                <h3 className="text-2xl font-bold text-white">
                  {sector.title}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-400">
                  {sector.description}
                </p>

              </motion.div>
            );
          })}
        </div>

        {/* Areas We Serve */}

        <div className="mt-20">

          <div className="text-center">

            <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
              Popular Service Locations
            </span>

            <h3 className="mt-6 text-3xl font-bold text-white lg:text-4xl">
              Areas We Regularly Serve
            </h3>

            <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-400">
              Our teams provide waterproofing, repair, renovation,
              false ceiling, gypsum partition and maintenance
              services throughout Ahmedabad.
            </p>

          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            {locations.map((location, index) => (
              <motion.div
                key={location}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.03,
                }}
                className="group flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-5 py-3 transition-all duration-300 hover:border-cyan-500 hover:bg-slate-800"
              >
                <MapPin
                  size={16}
                  className="text-cyan-400"
                />

                <span className="font-medium text-slate-200">
                  {location}
                </span>

              </motion.div>
            ))}

          </div>

        </div>


        {/* Final CTA */}

        <div className="mt-20">

          <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-cyan-600 via-cyan-500 to-blue-600 p-10 lg:p-14">

            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

              <div className="text-center lg:text-left">

                <h3 className="text-3xl font-bold text-white lg:text-5xl">
                  Need Immediate Assistance?
                </h3>

                <p className="mt-4 max-w-2xl text-lg text-cyan-50">
                  Schedule a free site inspection today and
                  get expert advice for waterproofing,
                  renovation, repair, false ceiling and
                  gypsum partition work.
                </p>

              </div>

              <div className="flex flex-col gap-4 sm:flex-row">

                <a
                  href="tel:+919558189429"
                  onClick={handleCallClick}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-cyan-700 transition hover:scale-105"
                >
                  <PhoneCall size={20} />
                  Call Now
                </a>

                <a
                  href="https://wa.me/919558189429"
                  target="_blank"
                  onClick={handleWhatsappClick}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20"
                >
                  WhatsApp Us
                  <ArrowRight size={18} />
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}