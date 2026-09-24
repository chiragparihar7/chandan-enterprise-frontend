"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { usePathname } from "next/navigation";

/* =========================================================
   BUSINESS INFORMATION
========================================================= */

const PHONE = "+919558189429";
const PHONE_DISPLAY = "+91 95581 89429";

/* =========================================================
   SERVICE NAVIGATION
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
   MAIN NAVIGATION
========================================================= */

const mainLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
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
   HEADER
========================================================= */

export default function Header() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  /* =======================================================
     SCROLL DETECTION
  ======================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =======================================================
     CLOSE MENU WHEN ROUTE CHANGES
  ======================================================== */

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  /* =======================================================
     PREVENT BODY SCROLL WHEN MOBILE MENU IS OPEN
  ======================================================== */

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* =======================================================
     ACTIVE ROUTE
  ======================================================== */

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  const servicesActive = pathname.startsWith("/services");

  return (
    <>
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header
        className={`
          fixed
          inset-x-0
          top-0
          z-50
          transition-all
          duration-300
          ${
            scrolled
              ? `
                bg-white/95
                shadow-[0_8px_35px_rgba(9,42,67,0.10)]
                backdrop-blur-xl
              `
              : "bg-white"
          }
        `}
      >
        <div
          className="
            mx-auto
            flex
            h-[82px]
            w-full
            max-w-[1320px]
            items-center
            justify-between
            px-5
            sm:px-7
            lg:px-8
            xl:px-10
          "
        >
          {/* =================================================
              LOGO
          ================================================== */}

          <Link
            href="/"
            aria-label="Chandan Enterprises Home"
            className="
              relative
              z-[70]
              flex
              h-[80px]
              w-[120px]
              shrink-0
              items-center
            "
          >
            <Image
              src="/chandan_logo.png"
              alt="Chandan Enterprises"
              fill
              priority
              sizes="120px"
              className="object-contain"
            />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav
            aria-label="Main navigation"
            className="
              hidden
              items-center
              gap-6
              lg:flex
              xl:gap-8
            "
          >
            {/* Home */}

            <NavLink
              href="/"
              label="Home"
              active={isActive("/")}
            />

            {/* About */}

            <NavLink
              href="/about"
              label="About"
              active={isActive("/about")}
            />

            {/* =================================================
                SERVICES DROPDOWN
            ================================================== */}

            <div className="group relative">
              <Link
                href="/services"
                aria-haspopup="true"
                className={`
                  relative
                  flex
                  items-center
                  gap-1.5
                  py-7
                  text-[14px]
                  font-semibold
                  tracking-[0.01em]
                  transition-colors
                  duration-200
                  ${
                    servicesActive
                      ? "text-[#015696]"
                      : "text-[#334155] hover:text-[#015696]"
                  }
                `}
              >
                <span>Services</span>

                <ChevronDown
                  size={15}
                  strokeWidth={2}
                  className="
                    transition-transform
                    duration-300
                    group-hover:rotate-180
                  "
                />

                {/* Active / Hover Line */}

                <span
                  className={`
                    absolute
                    bottom-[17px]
                    left-0
                    h-[2px]
                    rounded-full
                    bg-[#015696]
                    transition-all
                    duration-300
                    ${
                      servicesActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                />
              </Link>

              {/* =================================================
                  SERVICES DROPDOWN
              ================================================== */}

              <div
                className="
                  invisible
                  absolute
                  left-1/2
                  top-[76px]
                  w-[380px]
                  -translate-x-1/2
                  translate-y-3
                  rounded-2xl
                  border
                  border-[#dce8f0]
                  bg-white
                  p-3
                  opacity-0
                  shadow-[0_24px_70px_rgba(9,42,67,0.15)]
                  transition-all
                  duration-200
                  group-hover:visible
                  group-hover:translate-y-0
                  group-hover:opacity-100
                  group-focus-within:visible
                  group-focus-within:translate-y-0
                  group-focus-within:opacity-100
                "
              >
                {/* Dropdown Introduction */}

                <div
                  className="
                    mb-2
                    rounded-xl
                    bg-gradient-to-r
                    from-[#eef8fd]
                    to-[#f7fbfd]
                    px-4
                    py-3.5
                  "
                >
                  <div className="flex items-center justify-between">
                    <p
                      className="
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-[#015696]
                      "
                    >
                      Our Services
                    </p>

                    <span
                      className="
                        h-2
                        w-2
                        rounded-full
                        bg-[#016db5]
                        shadow-[0_0_0_4px_rgba(1,109,181,0.10)]
                      "
                    />
                  </div>

                  <p
                    className="
                      mt-1
                      text-xs
                      leading-5
                      text-[#64748b]
                    "
                  >
                    Professional waterproofing solutions for
                    residential, commercial and industrial
                    properties.
                  </p>
                </div>

                {/* Service Links */}

                <div className="grid grid-cols-1 gap-0.5">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="
                        group/service
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        px-4
                        py-2.5
                        text-[13px]
                        font-medium
                        text-[#334155]
                        transition-all
                        duration-200
                        hover:bg-[#f1f8fc]
                        hover:text-[#015696]
                      "
                    >
                      <span>{service.name}</span>

                      <ArrowRight
                        size={14}
                        className="
                          -translate-x-1
                          opacity-0
                          transition-all
                          duration-200
                          group-hover/service:translate-x-0
                          group-hover/service:opacity-100
                        "
                      />
                    </Link>
                  ))}
                </div>

                {/* View All Services */}

                <Link
                  href="/services"
                  className="
                    mt-2
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    bg-[#015696]
                    px-4
                    py-3
                    text-[13px]
                    font-semibold
                    text-white
                    transition-all
                    duration-200
                    hover:bg-[#0b3f67]
                  "
                >
                  <span>View All Services</span>

                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Other Navigation */}

            {mainLinks.slice(2).map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.name}
                active={isActive(item.href)}
              />
            ))}
          </nav>

          {/* =================================================
              RIGHT SIDE DESKTOP ACTIONS
          ================================================== */}

          <div className="hidden items-center gap-3 lg:flex">
            {/* =================================================
                PHONE
            ================================================== */}

            <a
              href={`tel:${PHONE}`}
              aria-label={`Call Chandan Enterprises at ${PHONE_DISPLAY}`}
              className="
                group
                flex
                items-center
                gap-2.5
                rounded-full
                border
                border-[#dce8f0]
                bg-[#f8fbfd]
                px-3.5
                py-2
                transition-all
                duration-300
                hover:border-[#b7d8e9]
                hover:bg-[#eef8fd]
              "
            >
              {/* Phone Icon */}

              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-[#e5f4fb]
                  text-[#015696]
                  transition-all
                  duration-300
                  group-hover:bg-[#015696]
                  group-hover:text-white
                "
              >
                <Phone
                  size={14}
                  strokeWidth={2.2}
                />
              </span>

              {/* Phone Text */}

              <span className="flex flex-col">
                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    leading-none
                    tracking-[0.12em]
                    text-[#94a3b8]
                  "
                >
                  Call Us
                </span>

                <span
                  className="
                    mt-1
                    whitespace-nowrap
                    text-[12px]
                    font-bold
                    leading-none
                    text-[#092a43]
                  "
                >
                  {PHONE_DISPLAY}
                </span>
              </span>
            </a>

            {/* =================================================
                GET FREE INSPECTION
            ================================================== */}

            <Link
              href="/contact"
              className="
                group
                inline-flex
                items-center
                gap-2
                whitespace-nowrap
                rounded-full
                bg-[#015696]
                px-5
                py-3.5
                text-[12px]
                font-bold
                tracking-wide
                text-white
                shadow-[0_8px_25px_rgba(1,86,150,0.20)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#0b3f67]
                hover:shadow-[0_12px_32px_rgba(1,86,150,0.28)]
              "
            >
              <span>Get Free Inspection</span>

              <ArrowRight
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            type="button"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() =>
              setMenuOpen((prev) => !prev)
            }
            className="
              relative
              z-[70]
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-[#dce8f0]
              bg-white
              text-[#092a43]
              transition-all
              duration-300
              hover:border-[#015696]
              hover:text-[#015696]
              lg:hidden
            "
          >
            {menuOpen ? (
              <X
                size={21}
                strokeWidth={2}
              />
            ) : (
              <Menu
                size={21}
                strokeWidth={2}
              />
            )}
          </button>
        </div>
      </header>

      {/* =====================================================
          MOBILE NAVIGATION
      ====================================================== */}

      <div
        className={`
          fixed
          inset-0
          z-50
          bg-white
          transition-all
          duration-300
          lg:hidden
          ${
            menuOpen
              ? "visible opacity-100"
              : "invisible opacity-0"
          }
        `}
      >
        <div
          className="
            flex
            h-full
            flex-col
            overflow-y-auto
            px-6
            pb-8
            pt-[105px]
            sm:px-10
          "
        >
          {/* =================================================
              MOBILE BRAND INTRO
          ================================================== */}

          <div
            className="
              mb-6
              rounded-2xl
              border
              border-[#dce8f0]
              bg-[#f7fbfd]
              p-5
            "
          >
            <div className="flex items-center gap-3">
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#015696]
                  shadow-[0_0_0_5px_rgba(1,86,150,0.08)]
                "
              />

              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#015696]
                "
              >
                Chandan Enterprises
              </p>
            </div>

            <p
              className="
                mt-2
                max-w-sm
                text-sm
                leading-6
                text-[#64748b]
              "
            >
              Professional waterproofing and leakage
              protection solutions for your property.
            </p>
          </div>

          {/* =================================================
              MOBILE NAVIGATION
          ================================================== */}

          <div className="flex flex-col">
            {/* Home */}

            <MobileNavLink
              href="/"
              label="Home"
              active={isActive("/")}
              onClick={() => setMenuOpen(false)}
            />

            {/* About */}

            <MobileNavLink
              href="/about"
              label="About"
              active={isActive("/about")}
              onClick={() => setMenuOpen(false)}
            />

            {/* =================================================
                MOBILE SERVICES
            ================================================== */}

            <div className="border-b border-[#edf2f5]">
              <button
                type="button"
                aria-expanded={servicesOpen}
                onClick={() =>
                  setServicesOpen((prev) => !prev)
                }
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  py-5
                  text-left
                "
              >
                <span
                  className={`
                    text-lg
                    font-semibold
                    ${
                      servicesActive
                        ? "text-[#015696]"
                        : "text-[#092a43]"
                    }
                  `}
                >
                  Services
                </span>

                <span
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-[#f1f8fc]
                  "
                >
                  <ChevronDown
                    size={18}
                    className={`
                      transition-transform
                      duration-300
                      ${
                        servicesOpen
                          ? "rotate-180 text-[#015696]"
                          : "text-[#64748b]"
                      }
                    `}
                  />
                </span>
              </button>

              {/* Services List */}

              <div
                className={`
                  overflow-hidden
                  transition-all
                  duration-300
                  ${
                    servicesOpen
                      ? "max-h-[900px] pb-4 opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                <div
                  className="
                    ml-1
                    rounded-2xl
                    bg-[#f5f9fc]
                    p-2
                  "
                >
                  {/* All Services */}

                  <Link
                    href="/services"
                    onClick={() =>
                      setMenuOpen(false)
                    }
                    className="
                      flex
                      items-center
                      justify-between
                      rounded-xl
                      bg-white
                      px-4
                      py-3
                      text-sm
                      font-bold
                      text-[#015696]
                      shadow-sm
                    "
                  >
                    <span>All Services</span>

                    <ArrowRight size={15} />
                  </Link>

                  {/* Individual Services */}

                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() =>
                        setMenuOpen(false)
                      }
                      className="
                        block
                        rounded-xl
                        px-4
                        py-3
                        text-sm
                        text-[#475569]
                        transition-colors
                        duration-200
                        hover:bg-white
                        hover:text-[#015696]
                      "
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Projects */}

            <MobileNavLink
              href="/projects"
              label="Projects"
              active={isActive("/projects")}
              onClick={() => setMenuOpen(false)}
            />

            {/* Clients */}

            <MobileNavLink
              href="/client"
              label="Clients"
              active={isActive("/client")}
              onClick={() => setMenuOpen(false)}
            />

            {/* Contact */}

            <MobileNavLink
              href="/contact"
              label="Contact"
              active={isActive("/contact")}
              onClick={() => setMenuOpen(false)}
            />
          </div>

          {/* =================================================
              MOBILE BOTTOM ACTIONS
          ================================================== */}

          <div className="mt-auto pt-7">
            {/* Phone */}

            <a
              href={`tel:${PHONE}`}
              className="
                mb-3
                flex
                items-center
                justify-center
                gap-2.5
                rounded-full
                border
                border-[#dce8f0]
                bg-[#f7fbfd]
                px-5
                py-3.5
                text-sm
                font-bold
                text-[#092a43]
                transition-all
                hover:border-[#015696]
                hover:text-[#015696]
              "
            >
              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-[#e5f4fb]
                  text-[#015696]
                "
              >
                <Phone size={15} />
              </span>

              {PHONE_DISPLAY}
            </a>

            {/* CTA */}

            <Link
              href="/contact"
              onClick={() =>
                setMenuOpen(false)
              }
              className="
                group
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#015696]
                px-6
                py-4
                text-sm
                font-bold
                text-white
                shadow-[0_10px_30px_rgba(1,86,150,0.22)]
                transition-all
                duration-300
                hover:bg-[#0b3f67]
              "
            >
              <span>Get Free Inspection</span>

              <ArrowRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                "
              />
            </Link>

            <p
              className="
                mt-4
                text-center
                text-xs
                text-[#94a3b8]
              "
            >
              Professional Waterproofing Solutions
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/* =========================================================
   DESKTOP NAV LINK
========================================================= */

function NavLink({
  href,
  label,
  active,
}) {
  return (
    <Link
      href={href}
      className={`
        group
        relative
        py-7
        text-[14px]
        font-semibold
        tracking-[0.01em]
        transition-colors
        duration-200
        ${
          active
            ? "text-[#015696]"
            : "text-[#334155] hover:text-[#015696]"
        }
      `}
    >
      {label}

      <span
        className={`
          absolute
          bottom-[17px]
          left-0
          h-[2px]
          rounded-full
          bg-[#015696]
          transition-all
          duration-300
          ${
            active
              ? "w-full"
              : "w-0 group-hover:w-full"
          }
        `}
      />
    </Link>
  );
}

/* =========================================================
   MOBILE NAV LINK
========================================================= */

function MobileNavLink({
  href,
  label,
  active,
  onClick,
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="
        flex
        items-center
        justify-between
        border-b
        border-[#edf2f5]
        py-5
      "
    >
      <span
        className={`
          text-lg
          font-semibold
          ${
            active
              ? "text-[#015696]"
              : "text-[#092a43]"
          }
        `}
      >
        {label}
      </span>

      <span
        className={`
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          ${
            active
              ? "bg-[#eef8fd] text-[#015696]"
              : "text-[#cbd5e1]"
          }
        `}
      >
        <ArrowRight size={16} />
      </span>
    </Link>
  );
}