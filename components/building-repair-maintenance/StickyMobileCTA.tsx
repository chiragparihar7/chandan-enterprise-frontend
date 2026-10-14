
"use client";

import { PhoneCall, MessageCircle, ArrowUpRight } from "lucide-react";
import { trackPhoneClick, trackWhatsAppClick } from "./tracking";

const PHONE_E164 =
  process.env.NEXT_PUBLIC_BUSINESS_PHONE_E164 || "91XXXXXXXXXX";

const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "91XXXXXXXXXX";

export default function StickyMobileCTA() {
  const phoneHref = `tel:+${PHONE_E164.replace(/\D/g, "")}`;

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hello Chandan Enterprise, I need building repair or waterproofing help in Ahmedabad."
  )}`;

  return (
    <div
      className="
        fixed inset-x-0 bottom-0 z-50
        border-t border-border
        bg-white/95
        px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))]
        pt-3 shadow-[0_-8px_30px_rgba(9,42,67,0.10)]
        backdrop-blur-xl
        md:hidden
      "
      aria-label="Quick contact options"
    >
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-3">
        {/* Call Button */}
        <a
          href={phoneHref}
          onClick={() => trackPhoneClick("sticky_mobile")}
          className="
            group flex min-h-12 items-center justify-center gap-2
            rounded-xl border border-chandan-primary/20
            bg-white px-4 py-3
            text-sm font-semibold text-chandan-primary
            shadow-sm transition-all duration-200
            hover:border-chandan-primary hover:bg-background-blue
            active:scale-[0.98]
            focus-visible:outline-none
            focus-visible:ring-2 focus-visible:ring-chandan-primary
            focus-visible:ring-offset-2
          "
          aria-label="Call Chandan Enterprise"
        >
          <PhoneCall
            size={18}
            strokeWidth={2.2}
            className="shrink-0 transition-transform duration-200 group-hover:-rotate-12"
          />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick("sticky_mobile")}
          className="
            group flex min-h-12 items-center justify-center gap-2
            rounded-xl bg-chandan-primary px-4 py-3
            text-sm font-semibold text-white
            shadow-md shadow-chandan-primary/20
            transition-all duration-200
            hover:bg-chandan-primary-dark
            active:scale-[0.98]
            focus-visible:outline-none
            focus-visible:ring-2 focus-visible:ring-chandan-primary
            focus-visible:ring-offset-2
          "
          aria-label="Contact Chandan Enterprise on WhatsApp"
        >
          <MessageCircle
            size={18}
            strokeWidth={2.2}
            className="shrink-0"
          />
          <span>WhatsApp</span>
          <ArrowUpRight
            size={14}
            className="shrink-0 opacity-80 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </div>
  );
}
