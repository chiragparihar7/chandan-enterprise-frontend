"use client";

import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingCTA() {
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
    <>
      {/* Desktop */}
      <div className="hidden md:flex fixed right-5 bottom-5 z-50 flex-col gap-3">
        <Link
          href="tel:+919558189429"
            onClick={handleCallClick}
          className="h-14 w-14 rounded-full bg-cyan-600 flex items-center justify-center text-white shadow-lg"
        >
          <Phone />
        </Link>

        <Link
          href="https://wa.me/919558189429"
          target="_blank"
          onClick={handleWhatsappClick}
          className="h-14 w-14 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg"
        >
          <MessageCircle />
        </Link>
      </div>

      {/* Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2">
        <Link
          href="tel:+919558189429"
          onClick={handleCallClick}
          className="bg-cyan-600 text-white py-4 text-center font-semibold"
        >
          Call Now
        </Link>

        <Link
          href="https://wa.me/919558189429"
          target="_blank"
          onClick={handleWhatsappClick}
          className="bg-green-500 text-white py-4 text-center font-semibold"
        >
          WhatsApp
        </Link>
      </div>
    </>
  );
}