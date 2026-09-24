import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Search } from "lucide-react";

const focusAreas = [
  "Condition-based waterproofing solutions",
  "Careful surface preparation and application",
  "Residential and commercial requirements",
  "Clear communication about the recommended work",
];

export default function AboutSection() {
  return (
    <section className="w-full bg-[#F7F9FC] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        {/* =====================================================
            SECTION INTRO
        ====================================================== */}

        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#015696]" />

              <span className="text-xs font-bold uppercase tracking-[3px] text-[#015696]">
                About Chandan Enterprises
              </span>
            </div>

            <h2 className="mt-4 max-w-[700px] text-3xl font-bold leading-[1.12] tracking-[-0.8px] text-[#092A43] sm:text-4xl lg:text-[46px]">
              Waterproofing That Starts With{" "}
              <span className="text-[#015696]">Understanding the Problem</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#64748B] sm:text-right">
            Professional waterproofing and leakage protection services for
            properties across Ahmedabad.
          </p>
        </div>

        {/* =====================================================
            MAIN LAYOUT
        ====================================================== */}

        <div className="grid items-stretch gap-0 overflow-hidden rounded-[24px] border border-[#D9E6EE] bg-white shadow-[0_20px_55px_rgba(9,42,67,0.07)] lg:grid-cols-[0.82fr_1.18fr]">
          {/* ===================================================
              LEFT VISUAL COLUMN
          ==================================================== */}

          <div className="relative flex flex-col bg-[#092A43]">
            {/* IMAGE */}

            <div className="relative h-[410px] sm:h-[460px] lg:h-[450px]">
              <Image
                src="/Home/about_company.jpg"
                alt="Waterproofing work by Chandan Enterprises"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#061B2B]/75 via-transparent to-transparent" />

              {/* Image label */}

              <div className="absolute left-5 top-5 sm:left-6 sm:top-6">
                <span className="rounded-full border border-white/20 bg-[#092A43]/70 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                  Chandan Enterprises
                </span>
              </div>

              {/* Image caption */}

              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">
                <p className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#8FD0EF]">
                  Waterproofing & Leakage Protection
                </p>

                <p className="mt-2 max-w-sm text-lg font-bold leading-snug text-white sm:text-xl">
                  Protecting the areas of your property where moisture matters
                  most.
                </p>
              </div>
            </div>

            {/* =================================================
                LOWER DARK CONTENT
            ================================================== */}

            <div className="flex flex-1 flex-col justify-between p-6 sm:p-7 lg:p-8">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                    <Search size={18} className="text-[#8FD0EF]" />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#8FD0EF]">
                      Our Approach
                    </p>

                    <h3 className="mt-0.5 text-base font-bold text-white">
                      Inspect. Understand. Treat.
                    </h3>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-6 text-slate-300">
                  Leakage and seepage can vary from one property to another. We
                  focus on the affected area and its condition before deciding
                  the appropriate waterproofing service.
                </p>
              </div>

              {/* Small bottom detail */}

              <div className="mt-7 border-t border-white/10 pt-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-medium text-slate-400">
                    Service location
                  </span>

                  <span className="text-xs font-semibold text-white">
                    Ahmedabad, Gujarat
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ===================================================
              RIGHT INFORMATION COLUMN
          ==================================================== */}

          <div className="flex flex-col bg-white p-7 sm:p-9 lg:p-10 xl:p-12">
            {/* Small heading */}

            <p className="text-xs font-bold uppercase tracking-[2.5px] text-[#015696]">
              Who We Are
            </p>

            {/* Main heading */}

            <h3 className="mt-4 max-w-[680px] text-3xl font-bold leading-[1.13] tracking-[-0.8px] text-[#092A43] sm:text-4xl lg:text-[42px]">
              Professional Protection for Properties Facing{" "}
              <span className="text-[#015696]">Leakage & Seepage</span>
            </h3>

            {/* Description */}

            <div className="mt-6 max-w-[700px] space-y-4">
              <p className="text-base leading-7 text-[#475569]">
                Water leakage can affect more than the visible appearance of a
                property. Persistent seepage, dampness and moisture can
                gradually affect walls, ceilings, finishes and other building
                areas.
              </p>

              <p className="text-base leading-7 text-[#475569]">
                Choosing the right waterproofing treatment starts with
                understanding where the water is entering and what may be
                causing the problem. The location, surface condition and type of
                property all form part of the overall requirement.
              </p>

              <p className="text-base leading-7 text-[#475569]">
                Chandan Enterprises provides professional waterproofing and
                leakage protection services in Ahmedabad for residential and
                commercial properties. Our service range includes terraces,
                roofs, bathrooms, basements, exterior walls, swimming pools and
                structural joints.
              </p>
            </div>

            {/* =================================================
                FOCUS AREA
            ================================================== */}

            <div className="mt-7 border-t border-[#E4EDF2] pt-6">
              <p className="text-xs font-bold uppercase tracking-[2px] text-[#092A43]">
                What We Focus On
              </p>

              <div className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {focusAreas.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-[#015696]"
                      strokeWidth={2}
                    />

                    <span className="text-sm leading-6 text-[#475569]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* =================================================
                BOTTOM ACTION
            ================================================== */}

            <div className="mt-auto pt-8">
              <div className="flex flex-col gap-4 border-t border-[#E4EDF2] pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-[#092A43]">
                    Looking for the right waterproofing solution?
                  </p>

                  <p className="mt-1 text-xs text-[#64748B]">
                    Explore our services and understand the available options.
                  </p>
                </div>

                <Link
                  href="/about"
                  className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#015696] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0B3F67]"
                >
                  About Us
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
