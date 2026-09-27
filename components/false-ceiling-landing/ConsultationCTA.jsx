import Link from "next/link";
import {
  ArrowUpRight,
  MessageCircle,
  PhoneCall,
  Sparkles,
} from "lucide-react";

export default function ConsultationCTA() {
  return (
    <section
      id="consultation"
      className="relative overflow-hidden bg-[#f1f8fc] py-10 sm:py-12 lg:py-14"
    >
      {/* Architectural background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-180px] top-[-180px] h-[520px] w-[520px] rounded-full bg-[#1687c5]/[0.06] blur-[120px]" />

        <div
          className="absolute bottom-0 left-0 h-[420px] w-[420px] opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(#cfe2eb 1px, transparent 1px), linear-gradient(90deg, #cfe2eb 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage:
              "linear-gradient(to top right, black, transparent 75%)",
            WebkitMaskImage:
              "linear-gradient(to top right, black, transparent 75%)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">
        {/* Main CTA panel */}
        <div className="relative overflow-hidden border border-[#cfe1ea] bg-white">
          {/* Blue architectural edge */}
          <div className="absolute left-0 top-0 h-full w-1 bg-[#015696]" />

          <div className="grid lg:grid-cols-[1fr_0.72fr]">
            {/* Content */}
            <div className="relative p-7 sm:p-10 lg:p-14 xl:p-16">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center border border-[#cfe1ea] bg-[#f5fafc] text-[#015696]">
                  <Sparkles
                    className="h-[16px] w-[16px]"
                    strokeWidth={1.7}
                  />
                </span>

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#015696]">
                  Let&apos;s Plan Your Ceiling
                </span>
              </div>

              <h2 className="mt-7 max-w-2xl text-3xl font-semibold leading-[1.04] tracking-[-0.04em] text-[#061b2b] sm:text-4xl lg:text-[52px]">
                Ready to give your ceiling
                <span className="block text-[#015696]">
                  a new direction?
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-[15px] leading-7 text-[#64748b] sm:text-base">
                Tell us about your space, preferred design and ceiling
                requirements. We&apos;ll discuss the practical next step for
                your project.
              </p>

              {/* Small specification row */}
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 border-t border-[#e5edf1] pt-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#94a3b8]">
                  Residential
                </span>

                <span className="text-[#cbd7dd]">•</span>

                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#94a3b8]">
                  Office
                </span>

                <span className="text-[#cbd7dd]">•</span>

                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#94a3b8]">
                  Commercial
                </span>

                <span className="text-[#cbd7dd]">•</span>

                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#94a3b8]">
                  Custom
                </span>
              </div>
            </div>

            {/* Contact panel */}
            <div className="relative flex flex-col justify-between border-t border-[#dce8f0] bg-[#092a43] p-7 text-white sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              {/* Glow */}
              <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[280px] w-[280px] rounded-full bg-[#1687c5]/20 blur-[80px]" />

              <div className="relative">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7dd3fc]">
                  Start a conversation
                </p>

                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.025em]">
                  Discuss your space with us.
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Share your requirements and let&apos;s understand the
                  ceiling direction you have in mind.
                </p>
              </div>

              {/* Actions */}
              <div className="relative mt-10 space-y-3">
                {/* Consultation */}
                <Link
                  href="#enquiry"
                  className="group flex min-h-[52px] items-center justify-between bg-white px-5 text-sm font-semibold text-[#092a43] transition-colors duration-300 hover:bg-[#eaf5fa]"
                >
                  <span>Get Free Consultation</span>

                  <span className="flex h-8 w-8 items-center justify-center bg-[#f1f8fc] text-[#015696] transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919558189429?text=Hello%2C%20I%20want%20to%20discuss%20false%20ceiling%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[52px] items-center justify-between border border-white/15 bg-white/[0.06] px-5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/[0.11]"
                >
                  <span className="flex items-center gap-3">
                    <MessageCircle className="h-4 w-4 text-[#7dd3fc]" />
                    WhatsApp Us
                  </span>

                  <ArrowUpRight className="h-4 w-4 text-white/50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                </a>

                {/* Phone */}
                <a
                  href="tel:+919558189429"
                  className="group flex min-h-[52px] items-center justify-between border border-white/15 px-5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/[0.06]"
                >
                  <span className="flex items-center gap-3">
                    <PhoneCall className="h-4 w-4 text-[#7dd3fc]" />
                    +91 95581 89429
                  </span>

                  <ArrowUpRight className="h-4 w-4 text-white/50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                </a>
              </div>

              {/* Bottom detail */}
              <div className="relative mt-8 border-t border-white/10 pt-5">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-500">
                    Consultation
                  </span>

                  <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#7dd3fc]">
                    Ahmedabad
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] leading-5 text-[#94a3b8]">
            Tell us about the room, preferred design and requirements before
            planning the next step.
          </p>

          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#015696]">
            <span className="h-px w-8 bg-[#015696]" />
            Let&apos;s discuss your space
          </div>
        </div>
      </div>
    </section>
  );
}