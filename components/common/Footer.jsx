"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

/* =========================================================
   BUSINESS INFORMATION
========================================================= */

const PHONE = "+919558189429";
const PHONE_DISPLAY = "+91 95581 89429";

const EMAIL = "info@chandanenterprise.com";

const ADDRESS = "Ahmedabad, Gujarat, India";

/* =========================================================
   QUICK LINKS
========================================================= */

const quickLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Clients",
    href: "/client",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

/* =========================================================
   SERVICES
========================================================= */

const serviceLinks = [
  {
    name: "Terrace Waterproofing",
    href: "/services/terrace-waterproofing",
  },
  {
    name: "Roof Waterproofing",
    href: "/services/roof-waterproofing",
  },
  {
    name: "Bathroom Waterproofing",
    href: "/services/bathroom-waterproofing",
  },
  {
    name: "Basement Waterproofing",
    href: "/services/basement-waterproofing",
  },
  {
    name: "Exterior Wall Waterproofing",
    href: "/services/exterior-wall-waterproofing",
  },
  {
    name: "Rising Dampness Treatment",
    href: "/services/rising-dampness-treatment",
  },
  {
    name: "PU Injection Grouting",
    href: "/services/pu-injection-grouting",
  },
  {
    name: "Expansion Joint Sealing",
    href: "/services/expansion-joint-sealing",
  },
  {
    name: "Swimming Pool Waterproofing",
    href: "/services/swimming-pool-waterproofing",
  },
];

/* =========================================================
   SOCIAL LINKS
========================================================= */

const socialLinks = [
  {
    name: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    href: "#",
    icon: FaFacebookF,
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: FaLinkedinIn,
  },
];

/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#f1f8fc]
        text-[#092a43]
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-80
          w-80
          rounded-full
          bg-[#016db5]/10
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-32
          h-96
          w-96
          rounded-full
          bg-[#015696]/5
          blur-3xl
        "
      />

      {/* =====================================================
          MAIN FOOTER CONTENT
      ====================================================== */}

      <section className="relative">
        <div
          className="
            mx-auto
            w-full
            max-w-[1320px]
            px-5
            pb-12
            pt-4
            sm:px-7
            sm:pb-14
            lg:px-8
            lg:pb-16
            xl:px-10
          "
        >
          <div
            className="
              grid
              grid-cols-1
              gap-12
              border-t
              border-[#dceff7]
              pt-12
              md:grid-cols-2
              lg:grid-cols-[1.25fr_0.7fr_1.35fr_1fr]
              lg:gap-10
              lg:pt-14
              xl:gap-16
            "
          >
            {/* =================================================
                COMPANY
            ================================================== */}

            <div>
              {/* LOGO */}

              <Link
                href="/"
                aria-label="Chandan Enterprises Home"
                className="
                  inline-flex
                  h-[82px]
                  w-[132px]
                  items-center
                "
              >
                <Image
                  src="/chandan_logo.png"
                  alt="Chandan Enterprises"
                  width={132}
                  height={82}
                  priority
                  className="
                    h-auto
                    w-full
                    object-contain
                  "
                />
              </Link>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-5
                  max-w-sm
                  text-sm
                  leading-7
                  text-[#64748b]
                "
              >
                Chandan Enterprises provides professional waterproofing and
                leakage protection solutions for residential, commercial and
                other properties.
              </p>

              {/* SOCIAL */}

              <div
                className="
                  mt-6
                  flex
                  items-center
                  gap-2.5
                "
              >
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      aria-label={social.name}
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#d6e8f1]
                        bg-white
                        text-[#64748b]
                        shadow-[0_4px_12px_rgba(9,42,67,0.05)]
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[#015696]
                        hover:bg-[#015696]
                        hover:text-white
                        hover:shadow-[0_8px_20px_rgba(1,86,150,0.18)]
                      "
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* =================================================
                QUICK LINKS
            ================================================== */}

            <div>
              <FooterHeading>Quick Links</FooterHeading>

              <ul className="space-y-3.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <FooterLink href={link.href} label={link.name} />
                  </li>
                ))}
              </ul>
            </div>

            {/* =================================================
                SERVICES
            ================================================== */}

            <div>
              <FooterHeading>Our Services</FooterHeading>

              <ul
                className="
                  grid
                  grid-cols-1
                  gap-y-3.5
                  sm:grid-cols-2
                  lg:grid-cols-1
                  xl:grid-cols-2
                  xl:gap-x-7
                "
              >
                {serviceLinks.map((service) => (
                  <li key={service.href}>
                    <FooterLink href={service.href} label={service.name} />
                  </li>
                ))}
              </ul>
            </div>

            {/* =================================================
                CONTACT
            ================================================== */}

            <div>
              <FooterHeading>Contact Us</FooterHeading>

              <div className="space-y-5">
                {/* PHONE */}

                <a
                  href={`tel:${PHONE}`}
                  className="
                    group
                    flex
                    items-start
                    gap-3
                  "
                >
                  <ContactIcon>
                    <Phone size={16} />
                  </ContactIcon>

                  <div>
                    <p
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-[#94a3b8]
                      "
                    >
                      Call Us
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        font-semibold
                        text-[#092a43]
                        transition-colors
                        group-hover:text-[#015696]
                      "
                    >
                      {PHONE_DISPLAY}
                    </p>
                  </div>
                </a>

                {/* EMAIL */}

                <a
                  href={`mailto:${EMAIL}`}
                  className="
                    group
                    flex
                    items-start
                    gap-3
                  "
                >
                  <ContactIcon>
                    <Mail size={16} />
                  </ContactIcon>

                  <div>
                    <p
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-[#94a3b8]
                      "
                    >
                      Email
                    </p>

                    <p
                      className="
                        mt-1
                        break-all
                        text-sm
                        font-semibold
                        text-[#092a43]
                        transition-colors
                        group-hover:text-[#015696]
                      "
                    >
                      {EMAIL}
                    </p>
                  </div>
                </a>

                {/* LOCATION */}

                <div
                  className="
                    flex
                    items-start
                    gap-3
                  "
                >
                  <ContactIcon>
                    <MapPin size={16} />
                  </ContactIcon>

                  <div>
                    <p
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-[#94a3b8]
                      "
                    >
                      Location
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        font-semibold
                        leading-6
                        text-[#092a43]
                      "
                    >
                      {ADDRESS}
                    </p>
                  </div>
                </div>
              </div>

              {/* CONTACT LINK */}

              <Link
                href="/contact"
                className="
                  group
                  mt-7
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-bold
                  text-[#015696]
                  transition-colors
                  duration-200
                  hover:text-[#0b3f67]
                "
              >
                Contact Our Team
                <ArrowRight
                  size={15}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM BAR
      ====================================================== */}

      <section
        className="
          relative
          border-t
          border-[#d1e6f0]
          bg-[#e5f4fb]
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1320px]
            flex-col
            gap-4
            px-5
            py-5
            sm:px-7
            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:px-8
            xl:px-10
          "
        >
          {/* COPYRIGHT */}

          <p
            className="
              text-center
              text-xs
              text-[#64748b]
              lg:text-left
            "
          >
            © {currentYear} Chandan Enterprises. All rights reserved.
          </p>

          {/* LEGAL LINKS */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-5
              text-xs
              text-[#64748b]
            "
          >
            <Link
              href="/privacy-policy"
              className="
                transition-colors
                hover:text-[#015696]
              "
            >
              Privacy Policy
            </Link>

            <span
              className="
                h-3
                w-px
                bg-[#b9d6e5]
              "
            />

            <Link
              href="/terms-and-conditions"
              className="
                transition-colors
                hover:text-[#015696]
              "
            >
              Terms & Conditions
            </Link>
          </div>

          {/* BRAND */}

          <p
            className="
              text-center
              text-xs
              font-medium
              text-[#7a93a3]
              lg:text-right
            "
          >
            Professional Waterproofing Solutions
          </p>
        </div>
      </section>
    </footer>
  );
}

/* =========================================================
   FOOTER HEADING
========================================================= */

function FooterHeading({ children }) {
  return (
    <div className="mb-6">
      <h3
        className="
          text-sm
          font-bold
          tracking-wide
          text-[#092a43]
        "
      >
        {children}
      </h3>

      <div
        className="
          mt-3
          h-[2px]
          w-8
          rounded-full
          bg-[#015696]
        "
      />
    </div>
  );
}

/* =========================================================
   FOOTER LINK
========================================================= */

function FooterLink({ href, label }) {
  return (
    <Link
      href={href}
      className="
        group
        inline-flex
        items-center
        gap-2
        text-[13px]
        leading-5
        text-[#64748b]
        transition-all
        duration-200
        hover:translate-x-1
        hover:text-[#015696]
      "
    >
      <span
        className="
          h-1.5
          w-1.5
          shrink-0
          rounded-full
          bg-[#b7d8e9]
          transition-all
          duration-200
          group-hover:bg-[#015696]
        "
      />

      <span>{label}</span>
    </Link>
  );
}

/* =========================================================
   CONTACT ICON
========================================================= */

function ContactIcon({ children }) {
  return (
    <span
      className="
        flex
        h-10
        w-10
        shrink-0
        items-center
        justify-center
        rounded-xl
        border
        border-[#d6e8f1]
        bg-white
        text-[#015696]
        shadow-[0_4px_12px_rgba(9,42,67,0.05)]
      "
    >
      {children}
    </span>
  );
}
