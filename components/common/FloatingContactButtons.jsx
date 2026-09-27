"use client";

import { MessageCircle, Phone } from "lucide-react";

const PHONE_NUMBER = "+919558189429";

const WHATSAPP_URL =
  "https://wa.me/919558189429?text=Hello%2C%20I%20want%20to%20know%20more%20about%20your%20services.";

export default function FloatingContactButtons() {
  return (
    <div
      className="
        fixed bottom-5 right-5 z-[100]
        flex flex-col items-center gap-3
        sm:bottom-6 sm:right-6
      "
    >
      {/* WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="
          group flex h-12 w-12 items-center justify-center
          border border-white/20
          bg-[#25D366]
          text-white
          shadow-[0_8px_25px_rgba(0,0,0,0.15)]
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)]
          sm:h-13 sm:w-13
        "
      >
        <MessageCircle
          className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
          strokeWidth={2}
        />

        {/* Tooltip */}
        <span
          className="
            pointer-events-none absolute right-14
            whitespace-nowrap
            border border-[#dce8f0]
            bg-white px-3 py-2
            text-[11px] font-semibold
            text-[#092a43]
            opacity-0
            translate-x-2
            shadow-[0_8px_25px_rgba(9,42,67,0.10)]
            transition-all duration-200
            group-hover:translate-x-0
            group-hover:opacity-100
          "
        >
          WhatsApp
        </span>
      </a>

      {/* Call */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        aria-label="Call Chandan Enterprise"
        className="
          group flex h-12 w-12 items-center justify-center
          border border-white/20
          bg-[#015696]
          text-white
          shadow-[0_8px_25px_rgba(0,0,0,0.15)]
          transition-all duration-300
          hover:-translate-y-1
          hover:bg-[#0b3f67]
          hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)]
          sm:h-13 sm:w-13
        "
      >
        <Phone
          className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
          strokeWidth={2}
        />

        {/* Tooltip */}
        <span
          className="
            pointer-events-none absolute right-14
            whitespace-nowrap
            border border-[#dce8f0]
            bg-white px-3 py-2
            text-[11px] font-semibold
            text-[#092a43]
            opacity-0
            translate-x-2
            shadow-[0_8px_25px_rgba(9,42,67,0.10)]
            transition-all duration-200
            group-hover:translate-x-0
            group-hover:opacity-100
          "
        >
          Call Us
        </span>
      </a>
    </div>
  );
}