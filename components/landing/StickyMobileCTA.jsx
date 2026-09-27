"use client";

import React from "react";
import {
  MessageCircle,
  PhoneCall,
  Send,
} from "lucide-react";

export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] border-t border-[#dce8f0] bg-white/95 p-2 shadow-[0_-10px_35px_rgba(9,42,67,0.12)] backdrop-blur-xl lg:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-3 gap-2">
        {/* Call */}
        <a
          href="tel:+919XXXXXXXXX"
          className="flex min-h-[48px] flex-col items-center justify-center gap-0.5 rounded-xl text-[#092a43] transition-colors hover:bg-[#f8fbfd]"
        >
          <PhoneCall size={18} className="text-[#015696]" />

          <span className="text-[10px] font-bold">
            Call
          </span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919XXXXXXXXX"
          target="_blank"
          rel="noreferrer"
          className="flex min-h-[48px] flex-col items-center justify-center gap-0.5 rounded-xl text-[#092a43] transition-colors hover:bg-[#f8fbfd]"
        >
          <MessageCircle size={18} className="text-[#015696]" />

          <span className="text-[10px] font-bold">
            WhatsApp
          </span>
        </a>

        {/* Enquiry */}
        <a
          href="#enquiry"
          className="flex min-h-[48px] flex-col items-center justify-center gap-0.5 rounded-xl bg-[#015696] text-white shadow-sm transition-colors hover:bg-[#0b3f67]"
        >
          <Send size={18} />

          <span className="text-[10px] font-bold">
            Get Quote
          </span>
        </a>
      </div>
    </div>
  );
}