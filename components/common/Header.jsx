
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
  Wrench,
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
  { name: "Terrace Waterproofing", href: "/services/terrace-waterproofing" },
  { name: "Roof Waterproofing", href: "/services/roof-waterproofing" },
  { name: "Bathroom Waterproofing", href: "/services/bathroom-waterproofing" },
  { name: "Basement Waterproofing", href: "/services/basement-waterproofing" },
  {
    name: "Exterior Wall Waterproofing",
    href: "/services/exterior-wall-waterproofing",
  },
  {
    name: "Rising Dampness Treatment",
    href: "/services/rising-dampness-treatment",
  },
  { name: "PU Injection Grouting", href: "/services/pu-injection-grouting" },
  {
    name: "Expansion Joint Sealing",
    href: "/services/expansion-joint-sealing",
  },
  {
    name: "Swimming Pool Waterproofing",
    href: "/services/swimming-pool-waterproofing",
  },
  {
    name: "Structural Repair & Strengthening",
    href: "/services/structural-repair-strengthening",
  },
  {
    name: "Building Repair & Maintenance",
    href: "/services/building-repair-maintenance",
  },
  {
    name: "Industrial Painting & Protective Coatings",
    href: "/services/industrial-painting-protective-coatings",
  },
  {
    name: "False Ceiling & Partition Systems",
    href: "/services/false-ceiling-partition-systems",
  },
];

/* =========================================================
   MAIN NAVIGATION
========================================================= */

const mainLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Clients", href: "/client" },
  { name: "Contact", href: "/contact" },
];

/* =========================================================
   HEADER COMPONENT
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
     CLOSE MENUS WHEN ROUTE CHANGES
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
     ACTIVE ROUTES
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
          fixed inset-x-0 top-0 z-50
          transition-all duration-300
          ${
            scrolled
              ? "bg-white/95 shadow-[0_8px_35px_rgba(9,42,67,0.10)] backdrop-blur-xl"
              : "bg-white"
          }
        `}
      >
        <div
          className="
            mx-auto flex h-[82px] w-full max-w-[1320px]
            items-center justify-between px-2 sm:px-4 lg:px-6 xl:px-8
          "
        >
          {/* Logo */}

          <Link
            href="/"
            aria-label="Chandan Enterprises Home"
            className="
              relative z-[70] flex h-[80px] w-[120px]
              shrink-0 items-center
            "
          >
            <Image
              src="/logo.png"
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
            className="hidden items-center gap-6 lg:flex xl:gap-8"
          >
            <NavLink
              href="/"
              label="Home"
              active={isActive("/")}
            />

            <NavLink
              href="/about"
              label="About"
              active={isActive("/about")}
            />

            {/* =================================================
                SERVICES MEGA DROPDOWN
            ================================================== */}

            <div className="group relative">
              {/* Services trigger */}

              <Link
                href="/services"
                aria-haspopup="true"
                className={`
                  relative flex items-center gap-1.5 py-7
                  text-[14px] font-semibold tracking-[0.01em]
                  transition-colors duration-200
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
                    transition-transform duration-300
                    group-hover:rotate-180
                  "
                />

                <span
                  className={`
                    absolute bottom-[17px] left-0 h-[2px]
                    rounded-full bg-[#015696]
                    transition-all duration-300
                    ${
                      servicesActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                />
              </Link>

              {/* Dropdown panel */}

              <div
                className="
                  invisible absolute left-1/2 top-[76px] z-50
                  w-[min(620px,calc(100vw-32px))]
                  -translate-x-1/2 translate-y-3
                  rounded-2xl border border-[#dce8f0]
                  bg-white p-4 opacity-0
                  shadow-[0_24px_70px_rgba(9,42,67,0.15)]
                  transition-all duration-200
                  group-hover:visible group-hover:translate-y-0
                  group-hover:opacity-100
                  group-focus-within:visible
                  group-focus-within:translate-y-0
                  group-focus-within:opacity-100
                "
              >
                {/* Dropdown header */}

                <div
                  className="
                    mb-3 flex items-center justify-between
                    rounded-xl bg-gradient-to-r
                    from-[#eef8fd] to-[#f7fbfd] px-5 py-4
                  "
                >
                  <div>
                    <p
                      className="
                        text-[11px] font-bold uppercase
                        tracking-[0.18em] text-[#015696]
                      "
                    >
                      Our Services
                    </p>

                    <p className="mt-1 text-sm text-[#64748b]">
                      Reliable solutions for every property.
                    </p>
                  </div>

                  <div
                    className="
                      flex h-11 w-11 shrink-0 items-center
                      justify-center rounded-xl bg-white
                      text-[#015696] shadow-sm
                    "
                  >
                    <Wrench size={21} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Two services per row */}

                <div className="grid grid-cols-2 gap-2">
                  {serviceLinks.map((service, index) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="
                        group/service flex min-h-[58px]
                        items-center gap-2 rounded-xl border
                        border-transparent bg-[#f8fafc] px-3 py-3
                        transition-all duration-200
                        hover:border-[#d5eaf6] hover:bg-[#eef8fd]
                      "
                    >
                      <span
                        className="
                          flex h-8 w-8 shrink-0 items-center
                          justify-center rounded-lg bg-white
                          text-[11px] font-bold text-[#015696]
                          shadow-sm transition-colors
                          group-hover/service:bg-[#015696]
                          group-hover/service:text-white
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className="
                          min-w-0 flex-1 text-[12px] font-semibold
                          leading-[1.5] text-[#334155]
                          transition-colors
                          group-hover/service:text-[#015696]
                        "
                      >
                        {service.name}
                      </span>

                      <ArrowRight
                        size={14}
                        className="
                          shrink-0 -translate-x-1 text-[#94a3b8]
                          opacity-0 transition-all duration-200
                          group-hover/service:translate-x-0
                          group-hover/service:opacity-100
                        "
                      />
                    </Link>
                  ))}
                </div>

              </div>
            </div>

            {/* Projects, Clients, Contact */}

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
              DESKTOP ACTIONS
          ================================================== */}

          <div className="hidden items-center gap-3 lg:flex">
            {/* Phone */}

            <a
              href={`tel:${PHONE}`}
              aria-label={`Call Chandan Enterprises at ${PHONE_DISPLAY}`}
              className="
                group flex items-center gap-2.5 rounded-full
                border border-[#dce8f0] bg-[#f8fbfd] px-3.5 py-2
                transition-all duration-300
                hover:border-[#b7d8e9] hover:bg-[#eef8fd]
              "
            >
              <span
                className="
                  flex h-8 w-8 items-center justify-center
                  rounded-full bg-[#e5f4fb] text-[#015696]
                  transition-all duration-300
                  group-hover:bg-[#015696] group-hover:text-white
                "
              >
                <Phone size={14} strokeWidth={2.2} />
              </span>

              <span className="flex flex-col">
                <span
                  className="
                    text-[9px] font-bold uppercase leading-none
                    tracking-[0.12em] text-[#94a3b8]
                  "
                >
                  Call Us
                </span>

                <span
                  className="
                    mt-1 whitespace-nowrap text-[12px] font-bold
                    leading-none text-[#092a43]
                  "
                >
                  {PHONE_DISPLAY}
                </span>
              </span>
            </a>

            {/* Contact CTA */}

            <Link
              href="/contact"
              className="
                group inline-flex items-center gap-2 whitespace-nowrap
                rounded-full bg-[#015696] px-5 py-3.5 text-[12px]
                font-bold tracking-wide text-white
                shadow-[0_8px_25px_rgba(1,86,150,0.20)]
                transition-all duration-300
                hover:-translate-y-0.5 hover:bg-[#0b3f67]
                hover:shadow-[0_12px_32px_rgba(1,86,150,0.28)]
              "
            >
              <span>Get Free Inspection</span>

              <ArrowRight
                size={15}
                className="
                  transition-transform duration-300
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
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="
              relative z-[70] flex h-11 w-11 items-center
              justify-center rounded-full border border-[#dce8f0]
              bg-white text-[#092a43] transition-all duration-300
              hover:border-[#015696] hover:text-[#015696] lg:hidden
            "
          >
            {menuOpen ? (
              <X size={21} strokeWidth={2} />
            ) : (
              <Menu size={21} strokeWidth={2} />
            )}
          </button>
        </div>
      </header>

      {/* =====================================================
          MOBILE NAVIGATION
      ====================================================== */}

      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        className={`
          fixed inset-0 z-50 bg-white transition-all duration-300 lg:hidden
          ${
            menuOpen
              ? "visible opacity-100"
              : "invisible pointer-events-none opacity-0"
          }
        `}
      >
        <div
          className="
            flex h-full flex-col overflow-y-auto
            px-6 pb-8 pt-[105px] sm:px-10
          "
        >
          {/* Brand introduction */}

          <div
            className="
              mb-6 rounded-2xl border border-[#dce8f0]
              bg-[#f7fbfd] p-5
            "
          >
            <div className="flex items-center gap-3">
              <span
                className="
                  h-2 w-2 rounded-full bg-[#015696]
                  shadow-[0_0_0_5px_rgba(1,86,150,0.08)]
                "
              />

              <p
                className="
                  text-[10px] font-bold uppercase
                  tracking-[0.2em] text-[#015696]
                "
              >
                Chandan Enterprises
              </p>
            </div>

            <p className="mt-2 max-w-sm text-sm leading-6 text-[#64748b]">
              Professional waterproofing and property maintenance solutions.
            </p>
          </div>

          {/* Mobile links */}

          <div className="flex flex-col">
            <MobileNavLink
              href="/"
              label="Home"
              active={isActive("/")}
              onClick={() => setMenuOpen(false)}
            />

            <MobileNavLink
              href="/about"
              label="About"
              active={isActive("/about")}
              onClick={() => setMenuOpen(false)}
            />

            {/* Mobile services accordion */}

            <div className="border-b border-[#edf2f5]">
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-controls="mobile-services-list"
                onClick={() => setServicesOpen((prev) => !prev)}
                className="
                  flex w-full items-center justify-between
                  py-5 text-left
                "
              >
                <span
                  className={`
                    text-lg font-semibold
                    ${servicesActive ? "text-[#015696]" : "text-[#092a43]"}
                  `}
                >
                  Services
                </span>

                <span
                  className="
                    flex h-9 w-9 items-center justify-center
                    rounded-full bg-[#f1f8fc]
                  "
                >
                  <ChevronDown
                    size={18}
                    className={`
                      transition-transform duration-300
                      ${
                        servicesOpen
                          ? "rotate-180 text-[#015696]"
                          : "text-[#64748b]"
                      }
                    `}
                  />
                </span>
              </button>

              {/* Mobile services list */}

              <div
                id="mobile-services-list"
                className={`
                  overflow-hidden transition-all duration-300
                  ${
                    servicesOpen
                      ? "max-h-[1200px] pb-4 opacity-100"
                      : "pointer-events-none max-h-0 opacity-0"
                  }
                `}
              >
                <div className="ml-1 rounded-2xl bg-[#f5f9fc] p-2">
                  <Link
                    href="/services"
                    tabIndex={servicesOpen ? 0 : -1}
                    onClick={() => setMenuOpen(false)}
                    className="
                      flex items-center justify-between rounded-xl
                      bg-white px-4 py-3 text-sm font-bold
                      text-[#015696] shadow-sm
                    "
                  >
                    <span>All Services</span>
                    <ArrowRight size={15} />
                  </Link>

                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      tabIndex={servicesOpen ? 0 : -1}
                      onClick={() => setMenuOpen(false)}
                      className="
                        block rounded-xl px-4 py-3 text-sm
                        text-[#475569] transition-colors duration-200
                        hover:bg-white hover:text-[#015696]
                      "
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <MobileNavLink
              href="/projects"
              label="Projects"
              active={isActive("/projects")}
              onClick={() => setMenuOpen(false)}
            />

            <MobileNavLink
              href="/client"
              label="Clients"
              active={isActive("/client")}
              onClick={() => setMenuOpen(false)}
            />

            <MobileNavLink
              href="/contact"
              label="Contact"
              active={isActive("/contact")}
              onClick={() => setMenuOpen(false)}
            />
          </div>

          {/* Mobile bottom actions */}

          <div className="mt-auto pt-7">
            <a
              href={`tel:${PHONE}`}
              className="
                mb-3 flex items-center justify-center gap-2.5
                rounded-full border border-[#dce8f0] bg-[#f7fbfd]
                px-5 py-3.5 text-sm font-bold text-[#092a43]
                transition-all hover:border-[#015696] hover:text-[#015696]
              "
            >
              <span
                className="
                  flex h-8 w-8 items-center justify-center
                  rounded-full bg-[#e5f4fb] text-[#015696]
                "
              >
                <Phone size={15} />
              </span>

              {PHONE_DISPLAY}
            </a>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="
                group flex w-full items-center justify-center gap-2
                rounded-full bg-[#015696] px-6 py-4 text-sm
                font-bold text-white
                shadow-[0_10px_30px_rgba(1,86,150,0.22)]
                transition-all duration-300 hover:bg-[#0b3f67]
              "
            >
              <span>Get Free Inspection</span>

              <ArrowRight
                size={16}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-0.5
                "
              />
            </Link>

            <p className="mt-4 text-center text-xs text-[#94a3b8]">
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

function NavLink({ href, label, active }) {
  return (
    <Link
      href={href}
      className={`
        group relative py-7 text-[14px] font-semibold
        tracking-[0.01em] transition-colors duration-200
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
          absolute bottom-[17px] left-0 h-[2px]
          rounded-full bg-[#015696]
          transition-all duration-300
          ${active ? "w-full" : "w-0 group-hover:w-full"}
        `}
      />
    </Link>
  );
}

/* =========================================================
   MOBILE NAV LINK
========================================================= */

function MobileNavLink({ href, label, active, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="
        flex items-center justify-between
        border-b border-[#edf2f5] py-5
      "
    >
      <span
        className={`
          text-lg font-semibold
          ${active ? "text-[#015696]" : "text-[#092a43]"}
        `}
      >
        {label}
      </span>

      <span
        className={`
          flex h-8 w-8 items-center justify-center rounded-full
          ${active ? "bg-[#eef8fd] text-[#015696]" : "text-[#cbd5e1]"}
        `}
      >
        <ArrowRight size={16} />
      </span>
    </Link>
  );
}
