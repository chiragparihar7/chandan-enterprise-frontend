import { MessageCircle, Phone, Send } from "lucide-react";

export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#dce8f0] bg-white/95 p-2 shadow-[0_-10px_30px_rgba(9,42,67,0.10)] backdrop-blur-md md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
        <a
          href="tel:+919XXXXXXXXX"
          className="flex flex-col items-center justify-center rounded-xl px-2 py-2 text-[#092a43] transition hover:bg-[#f1f8fc]"
        >
          <Phone className="h-4 w-4 text-[#015696]" />
          <span className="mt-1 text-[11px] font-semibold">Call</span>
        </a>

        <a
          href="https://wa.me/919XXXXXXXXX"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center rounded-xl px-2 py-2 text-[#092a43] transition hover:bg-[#f1f8fc]"
        >
          <MessageCircle className="h-4 w-4 text-[#015696]" />
          <span className="mt-1 text-[11px] font-semibold">WhatsApp</span>
        </a>

        <a
          href="#enquiry"
          className="flex flex-col items-center justify-center rounded-xl bg-[#015696] px-2 py-2 text-white transition hover:bg-[#0b3f67]"
        >
          <Send className="h-4 w-4" />
          <span className="mt-1 text-[11px] font-semibold">Get Quote</span>
        </a>
      </div>
    </div>
  );
}
