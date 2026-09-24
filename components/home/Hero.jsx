import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Droplets,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

const PHONE = "+919558189429";

const heroPoints = [
  "Property-focused inspection",
  "Service-specific solutions",
  "Professional application",
];

const serviceAreas = [
  "Terrace & Roof",
  "Bathroom & Wet Areas",
  "Basement Protection",
  "Exterior Wall",
];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F7F9FC] pt-[86px] sm:pt-[90px] lg:pt-[80px]">
      {/* =========================================================
          SUBTLE BACKGROUND DETAILS
      ========================================================== */}

      <div className="pointer-events-none absolute right-0 top-[100px] h-[420px] w-[420px] rounded-full bg-[#EAF5FB] opacity-50 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-[#EEF7FB] opacity-60 blur-3xl" />

      {/* =========================================================
          HERO CONTAINER
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div className="grid min-h-[590px] grid-cols-1 items-center gap-10 py-10 sm:py-12 lg:grid-cols-[0.94fr_1.06fr] lg:gap-12 lg:py-14">
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <div className="relative z-20 max-w-[650px]">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#CFE3EF] bg-white px-3.5 py-2 shadow-[0_5px_20px_rgba(9,42,67,0.06)] sm:px-4">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EAF5FB]">
                <ShieldCheck
                  size={15}
                  className="text-[#015696]"
                  strokeWidth={2}
                />
              </span>

              <span className="text-xs font-semibold tracking-wide text-[#31546B] sm:text-sm">
                Professional Waterproofing Services in Ahmedabad
              </span>
            </div>

            {/* =================================================
                MAIN H1
            ================================================== */}

            <h1 className="mt-6 text-[41px] font-bold leading-[1.06] tracking-[-1.8px] text-[#092A43] sm:text-[50px] lg:text-[56px] xl:text-[60px]">
              Waterproofing Solutions
              <br />
              <span className="text-[#015696]">For Your Property</span>
              <br />
              In Ahmedabad
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-[590px] text-base leading-7 text-[#64748B] sm:text-lg sm:leading-8">
              Chandan Enterprises provides professional waterproofing and
              leakage protection solutions for terraces, roofs, bathrooms,
              basements, exterior walls and other moisture-prone areas across
              Ahmedabad.
            </p>

            {/* =================================================
                CTA BUTTONS
            ================================================== */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#015696] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(1,86,150,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3F67] hover:shadow-[0_16px_34px_rgba(1,86,150,0.24)]"
              >
                Get Free Inspection
                <ArrowRight
                  size={17}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#CFE0EA] bg-white px-6 py-3.5 text-sm font-semibold text-[#092A43] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#015696] hover:bg-[#F1F8FC]"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EAF5FB]">
                  <Phone size={15} className="text-[#015696]" />
                </span>
                +91 95581 89429
              </a>
            </div>

            {/* =================================================
                TRUST POINTS
            ================================================== */}

            <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
              {heroPoints.map((point) => (
                <div key={point} className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EAF5FB]">
                    <CheckCircle2
                      size={14}
                      className="text-[#015696]"
                      strokeWidth={2.3}
                    />
                  </span>

                  <span className="text-xs font-medium leading-5 text-[#475569] sm:text-sm">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* =================================================
                LOCAL SERVICE NOTE
            ================================================== */}

            <div className="mt-7 flex max-w-[590px] items-start gap-3 border-l-2 border-[#015696] pl-4">
              <Droplets size={18} className="mt-0.5 shrink-0 text-[#015696]" />

              <p className="text-sm leading-6 text-[#64748B]">
                We focus on understanding the property condition and leakage
                source before recommending the appropriate treatment.
              </p>
            </div>

            {/* Location */}
            <div className="mt-5 flex items-center gap-2 text-xs font-medium text-[#64748B]">
              <MapPin size={15} className="text-[#015696]" />
              Ahmedabad, Gujarat
            </div>
          </div>

          {/* =====================================================
              RIGHT VISUAL
          ====================================================== */}

          <div className="relative z-10">
            {/* Main Image */}
            <div className="relative h-[430px] overflow-hidden rounded-[26px] border border-[#DCE8F0] bg-[#E8EEF2] shadow-[0_24px_60px_rgba(9,42,67,0.12)] sm:h-[500px] lg:h-[560px]">
              <Image
                src="/Home/terrace_waterproofing1.jpg"
                alt="Professional waterproofing service in Ahmedabad"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />

              {/* Controlled overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#061B2B]/75 via-transparent to-[#061B2B]/10" />

              {/* =================================================
                  TOP IMAGE BADGE
              ================================================== */}

              <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                <div className="flex items-center gap-2 rounded-full border border-white/20 bg-[#092A43]/75 px-4 py-2.5 shadow-lg backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-[#46A9D8]" />

                  <span className="text-xs font-semibold text-white sm:text-sm">
                    Waterproofing & Leakage Protection
                  </span>
                </div>
              </div>

              {/* =================================================
                  IMAGE BOTTOM CONTENT
              ================================================== */}

              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                <p className="text-[11px] font-semibold uppercase tracking-[2.5px] text-[#8FD0EF]">
                  Chandan Enterprises
                </p>

                <h2 className="mt-2 max-w-[500px] text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Protection that starts with understanding the problem.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
