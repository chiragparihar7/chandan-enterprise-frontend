import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Terrace Waterproofing",
    desc: "Protect terraces from rainwater penetration, seepage and moisture-related deterioration with a suitable waterproofing treatment.",
    img: "/Services/terrace_waterproofing.jpg",
    href: "/service-details/terrace-waterproofing",
  },
  {
    number: "02",
    title: "Bathroom Waterproofing",
    desc: "Reduce the risk of leakage and dampness in bathrooms and wet areas with appropriate waterproofing protection.",
    img: "/Services/bathroom_waterproofing.jpg",
    href: "/service-details/bathroom-waterproofing",
  },
  {
    number: "03",
    title: "Exterior Wall Waterproofing",
    desc: "Help protect exterior walls from rainwater penetration, seepage and moisture entering through exposed surfaces.",
    img: "/Services/exterior_wall_waterproofing.jpg",
    href: "/service-details/exterior-wall-waterproofing",
  },
  {
    number: "04",
    title: "Rising Dampness Treatment",
    desc: "Address moisture rising through walls and help protect interior surfaces from persistent dampness and related damage.",
    img: "/Services/rising_waterproofing.jpg",
    href: "/service-details/rising-dampness-treatment",
  },
  {
    number: "05",
    title: "Basement Waterproofing",
    desc: "Protect below-ground spaces from water ingress and seepage with waterproofing solutions selected for the site condition.",
    img: "/Services/basement_waterproofings.jpg",
    href: "/service-details/basement-waterproofing",
  },
  {
    number: "06",
    title: "Swimming Pool Waterproofing",
    desc: "Waterproofing solutions for swimming pools and water-retaining structures where reliable water containment is important.",
    img: "/Services/swimming_pool_waterproofing.jpg",
    href: "/service-details/swimming-pool-waterproofing",
  },
  {
    number: "07",
    title: "PU Injection Grouting",
    desc: "Polyurethane injection grouting can be used to address suitable cracks, joints and active water leakage points.",
    img: "/Services/puinjection.jpg",
    href: "/service-details/pu-injection-grouting",
  },
  {
    number: "08",
    title: "Expansion Joint Sealing",
    desc: "Flexible joint sealing solutions designed to help reduce water entry through expansion and movement joints.",
    img: "/Services/expansion_joint_sealing.jpg",
    href: "/service-details/expansion-joint-sealing",
  },
  {
    number: "09",
    title: "Roof Waterproofing",
    desc: "Help protect roofs against rainwater leakage, seepage and moisture-related deterioration with suitable waterproofing work.",
    img: "/Services/roof_waterproofing.jpg",
    href: "/service-details/roof-waterproofing",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#061B2B] py-10 sm:py-12 lg:py-14">

      {/* =====================================================
          PREMIUM BACKGROUND
      ====================================================== */}

      {/* Top-left blue atmospheric glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[180px]
          -top-[180px]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#015696]/20
          blur-[120px]
        "
      />

      {/* Right-side blue atmospheric glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[160px]
          top-[18%]
          h-[480px]
          w-[480px]
          rounded-full
          bg-[#016DB5]/15
          blur-[120px]
        "
      />

      {/* Bottom blue glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[-220px]
          left-[20%]
          h-[450px]
          w-[650px]
          rounded-full
          bg-[#015696]/10
          blur-[110px]
        "
      />

      {/* Technical grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.045]
          [background-image:linear-gradient(#FFFFFF_1px,transparent_1px),linear-gradient(90deg,#FFFFFF_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      {/* Large technical circle */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[190px]
          -top-[120px]
          h-[540px]
          w-[540px]
          rounded-full
          border
          border-white/[0.055]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[120px]
          -top-[50px]
          h-[400px]
          w-[400px]
          rounded-full
          border
          border-white/[0.045]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[55px]
          top-[15px]
          h-[260px]
          w-[260px]
          rounded-full
          border
          border-white/[0.035]
        "
      />

      {/* =====================================================
          CONTENT CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="mb-8 flex flex-col gap-5 border-b border-white/10 pb-7 lg:flex-row lg:items-end lg:justify-between">

          <div className="max-w-[820px]">

            {/* Eyebrow */}
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#46A9D8]" />

              <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#46A9D8]">
                Our Waterproofing Services
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold leading-[1.12] tracking-[-1px] text-white sm:text-4xl lg:text-[44px]">
              Professional Waterproofing Solutions
              <span className="text-[#46A9D8]">
                {" "}
                for Every Property
              </span>
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-[720px] text-[15px] leading-7 text-white/65 sm:text-base">
              From terraces and roofs to bathrooms, basements and exterior
              walls, Chandan Enterprises provides suitable waterproofing
              solutions for different leakage, seepage and dampness problems
              across Ahmedabad.
            </p>

          </div>

          {/* Explore link */}
          <Link
            href="/services"
            className="
              group
              inline-flex
              shrink-0
              items-center
              gap-2
              self-start
              text-sm
              font-bold
              text-[#46A9D8]
              transition-colors
              duration-300
              hover:text-white
              lg:mb-1
            "
          >
            Explore All Services

            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-[#46A9D8]/40
                transition-all
                duration-300
                group-hover:border-[#46A9D8]
                group-hover:bg-[#46A9D8]
                group-hover:text-[#061B2B]
              "
            >
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </span>
          </Link>

        </div>

        {/* =====================================================
            SERVICE COLLECTION LABEL
        ====================================================== */}

        <div className="mb-5 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#46A9D8]/60" />

            <span className="text-[11px] font-semibold uppercase tracking-[2px] text-white/40">
              Areas We Protect
            </span>
          </div>

          <span className="hidden text-xs font-medium text-white/35 sm:block">
            09 Waterproofing Solutions
          </span>

        </div>

        {/* =====================================================
            SERVICES GRID
        ====================================================== */}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <article
              key={service.number}
              className="
                group
                flex
                h-full
                min-h-[455px]
                flex-col
                overflow-hidden
                rounded-[20px]
                border
                border-[#DCE8F0]
                bg-white
                shadow-[0_8px_28px_rgba(0,0,0,0.12)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#8FC7E2]
                hover:shadow-[0_20px_45px_rgba(0,0,0,0.22)]
              "
            >

              {/* =================================================
                  IMAGE
              ================================================== */}

              <Link
                href={service.href}
                className="
                  relative
                  block
                  h-[215px]
                  shrink-0
                  overflow-hidden
                "
              >

                <Image
                  src={service.img}
                  alt={`${service.title} services in Ahmedabad`}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.06]
                  "
                  sizes="
                    (max-width: 768px) 100vw,
                    (max-width: 1024px) 50vw,
                    33vw
                  "
                />

                {/* Image overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#061B2B]/80
                    via-[#061B2B]/15
                    to-transparent
                  "
                />

                {/* Service number */}
                <div className="absolute left-4 top-4">
                  <div
                    className="
                      flex
                      h-10
                      min-w-10
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-white/25
                      bg-[#092A43]/85
                      px-2
                      text-xs
                      font-bold
                      text-white
                      shadow-lg
                      backdrop-blur-sm
                    "
                  >
                    {service.number}
                  </div>
                </div>

                {/* Category label */}
                <div className="absolute bottom-4 left-4">
                  <span
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-md
                      bg-white/95
                      px-3
                      py-1.5
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[1.2px]
                      text-[#092A43]
                      shadow-sm
                    "
                  >
                    Waterproofing
                  </span>
                </div>

                {/* Hover arrow */}
                <div
                  className="
                    absolute
                    bottom-4
                    right-4
                    flex
                    h-9
                    w-9
                    translate-y-2
                    items-center
                    justify-center
                    rounded-full
                    bg-[#015696]
                    text-white
                    opacity-0
                    shadow-lg
                    transition-all
                    duration-300
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  <ArrowRight size={16} />
                </div>

              </Link>

              {/* =================================================
                  CARD CONTENT
              ================================================== */}

              <div className="flex flex-1 flex-col p-5">

                {/* Title */}
                <h3
                  className="
                    text-[20px]
                    font-bold
                    leading-[1.2]
                    tracking-[-0.3px]
                    text-[#092A43]
                    transition-colors
                    duration-300
                    group-hover:text-[#015696]
                  "
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-3
                    line-clamp-3
                    min-h-[72px]
                    text-sm
                    leading-6
                    text-[#64748B]
                  "
                >
                  {service.desc}
                </p>

                {/* Bottom content */}
                <div className="mt-auto pt-5">

                  <div className="mb-4 h-px bg-[#E8F0F5]" />

                  <div className="flex items-center justify-between">

                    {/* Professional service */}
                    <div className="flex items-center gap-2">

                      <span
                        className="
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          rounded-full
                          bg-[#EFF8FC]
                        "
                      >
                        <CheckCircle2
                          size={15}
                          className="text-[#015696]"
                        />
                      </span>

                      <span className="text-[11px] font-semibold text-[#64748B]">
                        Professional Service
                      </span>

                    </div>

                    {/* Details */}
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-1.5
                        text-xs
                        font-bold
                        text-[#015696]
                      "
                    >
                      View Details

                      <ArrowRight
                        size={15}
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </span>

                  </div>
                </div>

              </div>
            </article>
          ))}

        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <div
          className="
            mt-7
            flex
            flex-col
            gap-4
            rounded-[18px]
            border
            border-white/10
            bg-white/[0.06]
            px-5
            py-5
            backdrop-blur-sm
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:px-6
          "
        >

          {/* CTA text */}
          <div className="flex items-start gap-3">

            <div
              className="
                mt-0.5
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-lg
                bg-[#46A9D8]/10
                ring-1
                ring-[#46A9D8]/20
              "
            >
              <CheckCircle2
                size={18}
                className="text-[#46A9D8]"
              />
            </div>

            <div>
              <p className="text-sm font-bold text-white sm:text-base">
                Not sure which waterproofing service you need?
              </p>

              <p className="mt-1 text-xs leading-5 text-white/50 sm:text-sm">
                Discuss your leakage, seepage or dampness problem with our team.
              </p>
            </div>

          </div>

          {/* CTA button */}
          <Link
            href="/contact"
            className="
              group
              inline-flex
              shrink-0
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-[#015696]
              px-5
              py-3
              text-sm
              font-semibold
              text-white
              shadow-[0_7px_18px_rgba(1,86,150,0.20)]
              transition-all
              duration-300
              hover:bg-[#016DB5]
              hover:shadow-[0_10px_28px_rgba(1,134,197,0.30)]
            "
          >
            Request an Inspection

            <ArrowRight
              size={17}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>

        </div>

      </div>
    </section>
  );
}