import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Lightbulb,
  MessageCircle,
  Phone,
  Ruler,
  Sparkles,
} from "lucide-react";

const PHONE_NUMBER = "+919558189429";
const WHATSAPP_NUMBER = "919558189429";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc]">
      {/* =========================================================
          ARCHITECTURAL BACKGROUND
      ========================================================= */}

      {/* Large soft blue atmosphere */}
      <div className="pointer-events-none absolute -right-56 -top-56 h-[650px] w-[650px] rounded-full bg-[#1687c5]/[0.07] blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-72 -left-60 h-[650px] w-[650px] rounded-full bg-[#46a9d8]/[0.06] blur-[130px]" />

      {/* Fine architectural grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage: `
            linear-gradient(#dce8f0 1px, transparent 1px),
            linear-gradient(90deg, #dce8f0 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to bottom, black 0%, transparent 75%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 75%)",
        }}
      />

      {/* =========================================================
          1280PX MAIN CONTAINER
      ========================================================= */}

      <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div className="grid min-h-[650px] items-center gap-10 py-9 sm:py-11 lg:grid-cols-[0.86fr_1.14fr] lg:gap-14 lg:py-12">
          {/* =====================================================
              LEFT — CONTENT
          ===================================================== */}

          <div className="relative z-10 max-w-[550px]">
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#015696]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#015696]">
                False Ceiling Services
              </span>

              <span className="h-1 w-1 rounded-full bg-[#1687c5]" />

              <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#64748b]">
                Ahmedabad
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-[43px] font-semibold leading-[1.02] tracking-[-0.05em] text-[#061b2b] sm:text-5xl md:text-6xl lg:text-[65px]">
              Designed Above.
              <span className="block text-[#015696]">
                Beautiful Below.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-[510px] text-[15px] leading-7 text-[#64748b] sm:text-[17px] sm:leading-8">
              Modern false ceiling solutions planned around your room,
              lighting, ceiling height and interior style — creating a
              cleaner and more refined space.
            </p>

            {/* =================================================
                CALL + WHATSAPP BUTTONS
            ================================================= */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {/* CALL */}
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="group inline-flex items-center justify-center gap-3 rounded-lg bg-[#015696] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(1,86,150,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b3f67]"
              >
                <Phone className="h-4 w-4" />

                <span>Call +91 95581 89429</span>

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* WHATSAPP */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Hello Chandan Enterprises, I am interested in false ceiling services. I would like to discuss my requirement."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-lg border border-[#cbdde7] bg-white px-6 py-3.5 text-sm font-semibold text-[#092a43] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#015696] hover:text-[#015696]"
              >
                <MessageCircle className="h-4 w-4 text-[#1687c5]" />

                <span>WhatsApp Us</span>

                <ArrowRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
              </a>
            </div>

            {/* =================================================
                SERVICE HIGHLIGHTS
            ================================================= */}

            <div className="mt-9 border-t border-[#dce8f0] pt-6">
              <div className="grid gap-5 sm:grid-cols-3">
                <Highlight
                  icon={Ruler}
                  title="Space-focused"
                  text="Measured planning"
                />

                <Highlight
                  icon={Lightbulb}
                  title="Lighting-ready"
                  text="Integrated layouts"
                  divider
                />

                <Highlight
                  icon={CheckCircle2}
                  title="Detail-focused"
                  text="Clean finishing"
                  divider
                />
              </div>
            </div>

            {/* Small service statement */}
            <div className="mt-8 flex items-center gap-3 text-xs text-[#64748b]">
              <Sparkles className="h-4 w-4 text-[#015696]" />

              <span>
                Residential • Office • Commercial false ceiling solutions
              </span>
            </div>
          </div>

          {/* =====================================================
              RIGHT — LARGE ARCHITECTURAL IMAGE
          ===================================================== */}

          <div className="relative">
            {/* Architectural corner frame */}
            <div className="pointer-events-none absolute -right-5 -top-5 hidden h-24 w-24 border-r border-t border-[#9fc5d9] lg:block" />

            <div className="pointer-events-none absolute -bottom-5 -left-5 hidden h-24 w-24 border-b border-l border-[#9fc5d9] lg:block" />

            {/* Main image */}
            <div className="relative overflow-hidden border border-[#d4e3eb] bg-white p-1.5 shadow-[0_30px_80px_rgba(9,42,67,0.12)]">
              <div className="relative aspect-[1.08/1] overflow-hidden sm:aspect-[1.18/1] lg:aspect-[1.12/1]">
                <img
                  src="/FalseCiling/false_ciling_interior_home.png"
                  alt="Premium modern false ceiling with integrated lighting"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                />

                {/* Image treatment */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#061b2b]/65 via-transparent to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-r from-[#061b2b]/10 to-transparent" />

                {/* =================================================
                    IMAGE TOP LABEL
                ================================================= */}

                <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                  <div className="flex items-center gap-2 border border-white/20 bg-[#061b2b]/70 px-4 py-2.5 text-white backdrop-blur-md">
                    <Lightbulb className="h-3.5 w-3.5 text-[#7dd3fc]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                      Ceiling + Lighting
                    </span>
                  </div>
                </div>

                {/* =================================================
                    IMAGE BOTTOM TYPOGRAPHY
                ================================================= */}

                <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                  <div className="flex items-end justify-between gap-5">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                        Interior transformation
                      </p>

                      <h2 className="mt-1.5 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                        Modern ceiling design.
                      </h2>

                      <p className="mt-1 text-sm text-white/70">
                        Planned around your space.
                      </p>
                    </div>

                    <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md sm:flex">
                      <ArrowRight className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                IMAGE CAPTION — NOT A FLOATING CARD
            ================================================= */}

            <div className="mt-5 flex items-center justify-between border-b border-[#dce8f0] pb-5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#94a3b8]">
              <span>False Ceiling Services</span>

              <span>Ahmedabad, Gujarat</span>
            </div>
          </div>
        </div>

   
      </div>

      {/* =========================================================
          DESKTOP SCROLL INDICATOR
      ========================================================= */}

      <div className="absolute bottom-8 right-7 hidden items-center gap-3 xl:flex">
        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#94a3b8] [writing-mode:vertical-rl]">
          Explore
        </span>

        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#dce8f0] bg-white">
          <ChevronDown className="h-3.5 w-3.5 text-[#015696]" />
        </div>
      </div>
    </section>
  );
}

/* ===============================================================
   HIGHLIGHT
=============================================================== */

function Highlight({
  icon: Icon,
  title,
  text,
  divider = false,
}) {
  return (
    <div
      className={`flex gap-3 ${
        divider
          ? "border-t border-[#e8f0f5] pt-4 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0"
          : ""
      }`}
    >
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#015696]" />

      <div>
        <p className="text-xs font-bold text-[#092a43]">
          {title}
        </p>

        <p className="mt-0.5 text-[11px] text-[#64748b]">
          {text}
        </p>
      </div>
    </div>
  );
}

/* ===============================================================
   PROCESS ITEM
=============================================================== */

function ProcessItem({
  number,
  title,
  text,
}) {
  return (
    <div className="flex items-center gap-4 border-[#dce8f0] py-5 sm:px-6 sm:py-6 sm:not-last:border-r">
      <span className="text-xs font-bold tracking-[0.16em] text-[#015696]">
        {number}
      </span>

      <div>
        <p className="text-sm font-semibold text-[#092a43]">
          {title}
        </p>

        <p className="mt-0.5 text-xs text-[#64748b]">
          {text}
        </p>
      </div>
    </div>
  );
}