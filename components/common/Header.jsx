"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* 🔥 Logo (FIXED PROPERLY) */}
        <Link href="/" className="flex items-center">
          <div className="relative h-[80px] w-[100px]">
            <Image
              src="/logo.png"
              alt="Chandan Enterprise"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* 🔥 Premium Navigation */}
        <nav className="hidden md:flex items-center gap-12 text-[17px] font-semibold tracking-wide">
          {["Home", "About", "Services", "Projects", "Client", "Contact"].map(
            (item, i) => (
              <Link
                key={i}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative group text-gray-600 transition duration-300 hover:text-black"
              >
                {/* Text */}
                <span className="relative z-10 group-hover:-translate-y-[1px] transition-transform duration-300 inline-block">
                  {item}
                </span>

                {/* Premium underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
            )
          )}
        </nav>

        {/* 🔥 Premium CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="relative inline-flex items-center justify-center px-7 py-2.5 text-sm font-semibold tracking-wide text-black border border-black rounded-full overflow-hidden group transition-all duration-300"
          >
            {/* Background hover fill */}
            <span className="absolute inset-0 bg-black w-0 group-hover:w-full transition-all duration-300 ease-out"></span>

            {/* Text */}
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              Get Free Inspection
            </span>
          </Link>
        </div>

        {/* 🔥 Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-black transition"
          >
            <span className="text-xl">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* 🔥 Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white z-40 transition-all duration-500 ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col justify-center items-center h-full gap-8 text-lg font-medium">
          {["Home", "Services", "About", "Projects", "Contact"].map(
            (item, i) => (
              <Link
                key={i}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="relative group text-gray-700 hover:text-black transition"
              >
                {item}

                {/* underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
            )
          )}

          {/* CTA */}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 px-8 py-3 border border-black rounded-full text-black font-semibold tracking-wide relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-black w-0 group-hover:w-full transition-all duration-300"></span>
            <span className="relative z-10 group-hover:text-white">
              Get Free Inspection
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
