"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-black border-t border-white/10 z-50 md:hidden">

      <div className="grid grid-cols-2">

        <button className="h-16 flex items-center justify-center gap-3 text-white border-r border-white/10">

          <Phone size={20} />

          Call Now

        </button>

        <button className="h-16 flex items-center justify-center gap-3 bg-white text-black font-semibold">

          <MessageCircle size={20} />

          WhatsApp

        </button>

      </div>

    </div>
  );
}