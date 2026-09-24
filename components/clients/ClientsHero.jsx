"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Handshake,
  Home,
  ShieldCheck,
} from "lucide-react";

export default function ClientHero() {
  const clientTypes = [
    {
      icon: Home,
      title: "Residential",
      text: "Homes & apartments",
    },
    {
      icon: Building2,
      title: "Commercial",
      text: "Business properties",
    },
    {
      icon: Building2,
      title: "Industrial",
      text: "Industrial facilities",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white pt-10 md:pt-14 lg:pt-16">
      {/* Subtle Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full bg-[#eef8fd] blur-[130px]" />

        <div className="absolute bottom-[-180px] left-[-180px] h-[400px] w-[400px] rounded-full bg-[#f7f9fc] blur-[110px]" />
      </div>

      <div className="container-chandan relative z-10">
        {/* MAIN HERO */}
        <div className="grid min-h-[650px] items-center gap-12 py-10 md:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:py-12">
          {/* LEFT */}
          <div className="max-w-xl">
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#015696]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#015696]">
                Our Client Network
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-bold leading-[1.04] tracking-tight text-[#092a43] sm:text-4xl md:text-5xl lg:text-[60px]">
              Trusted {" "}
            
              <span className="text-[#015696]">relationships.</span>
              <br />
              Practical protection.
            </h1>

            <p className="mt-7 max-w-lg text-base leading-7 text-[#64748b] md:text-lg">
              Chandan Enterprises works with property owners and businesses
              looking for practical solutions to waterproofing, leakage and
              moisture-related requirements.
            </p>

            {/* Small Trust Points */}
            <div className="mt-7 space-y-3">
              <div className="flex items-center gap-3 text-sm font-medium text-[#334155]">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#eef8fd] text-[#015696]">
                  <CheckCircle2 size={15} />
                </span>
                Requirement-focused approach
              </div>

              <div className="flex items-center gap-3 text-sm font-medium text-[#334155]">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#eef8fd] text-[#015696]">
                  <CheckCircle2 size={15} />
                </span>
                Residential, commercial & industrial
              </div>

              <div className="flex items-center gap-3 text-sm font-medium text-[#334155]">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#eef8fd] text-[#015696]">
                  <CheckCircle2 size={15} />
                </span>
                Waterproofing solutions for varied conditions
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#clients"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#015696] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_25px_rgba(1,86,150,0.16)] transition-all duration-300 hover:bg-[#0b3f67]"
              >
                Meet Our Clients

                <ArrowDown
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-[#d1e1ea] bg-white px-6 py-3.5 text-sm font-bold text-[#092a43] transition-all duration-300 hover:border-[#015696] hover:text-[#015696]"
              >
                Work With Us

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative ml-auto max-w-[600px]">
              <div className="relative h-[430px] overflow-hidden rounded-[30px] bg-[#092a43] shadow-[0_25px_70px_rgba(9,42,67,0.14)] sm:h-[500px] lg:h-[540px]">
                <Image
                  src="/about/company_overivew.jpg"
                  alt="Chandan Enterprises waterproofing work"
                  fill
                  priority
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061b2b]/85 via-[#061b2b]/15 to-transparent" />

                {/* Top Badge */}
                <div className="absolute left-6 top-6">
                  <div className="flex items-center gap-2 rounded-full bg-white/95 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-[#092a43] shadow-lg">
                    <Handshake size={15} className="text-[#015696]" />
                    Client Focused
                  </div>
                </div>

                {/* Image Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/60">
                    Chandan Enterprises
                  </p>

                  <h2 className="mt-2 max-w-md text-2xl font-bold leading-tight text-white sm:text-3xl">
                    Understanding the requirement is where every project
                    begins.
                  </h2>
                </div>
              </div>

          

              {/* Decorative Shape */}
              <div className="absolute -right-5 -top-5 -z-10 h-32 w-32 rounded-[28px] border border-[#b9ddec] bg-[#eef8fd]" />
            </div>
          </div>
        </div>

        {/* CLIENT CATEGORIES */}
        <div
          id="clients"
          className="border-t border-[#dce8f0] py-10 md:py-12"
        >
          <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-center">
            {/* Heading */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#015696]">
                Who We Serve
              </p>

              <h2 className="mt-2 text-2xl font-bold leading-tight text-[#092a43] sm:text-3xl">
                Supporting different property environments.
              </h2>

              <p className="mt-3 max-w-md text-sm leading-6 text-[#64748b]">
                From individual properties to business and industrial spaces,
                waterproofing requirements can vary significantly from one
                site to another.
              </p>
            </div>

            {/* Types */}
            <div className="grid gap-4 md:grid-cols-3">
              {clientTypes.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-[20px] border border-[#dce8f0] bg-[#f7f9fc] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#b9ddec] hover:bg-white hover:shadow-[0_12px_30px_rgba(9,42,67,0.07)]"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#015696] shadow-sm transition-colors duration-300 group-hover:bg-[#015696] group-hover:text-white">
                        <Icon size={20} />
                      </div>

                      <span className="text-xs font-bold text-[#c1d1db]">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-6 font-bold text-[#092a43]">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-[#64748b]">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="flex flex-col items-start gap-4 border-t border-[#dce8f0] py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-6 text-[#64748b]">
            Our focus is simple: understand the property, identify the
            requirement and discuss a suitable waterproofing approach.
          </p>

          <Link
            href="/services"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#015696]"
          >
            Explore Our Services

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}