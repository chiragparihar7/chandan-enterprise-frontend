"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6">

      <div className="max-w-7xl mx-auto">

        {/* TOP CTA */}
        <div className="bg-gradient-to-r from-[#111] to-[#1a1a1a] border border-gray-800 rounded-2xl p-8 mb-16 flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h2 className="text-2xl font-semibold mb-1">
              Need Waterproofing Solution?
            </h2>
            <p className="text-gray-400 text-sm">
              Book your free inspection today and protect your property.
            </p>
          </div>

          <Link
            href="/contact"
            className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition duration-300 shadow-md"
          >
            Get Free Inspection
          </Link>

        </div>

          {/* GRID */}
          <div className="grid md:grid-cols-4 gap-12">

            {/* LOGO + ABOUT */}
            <div>
              <div className="mb-4">
                <Image
                  src="/footer_logo.png"
                  alt="Chandan Enterprise"
                  width={140}
                  height={80}
                  className="object-contain"
                />
              </div>

              <p className="text-gray-400 text-sm leading-6 mb-6">
                Professional waterproofing solutions for homes and commercial spaces,
                ensuring durability, safety, and long-term protection.
              </p>

              {/* SOCIAL */}
              <div className="flex gap-3">
                {["F", "I", "L"].map((item, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 bg-[#111] flex items-center justify-center rounded-full hover:bg-white hover:text-black transition duration-300 cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* SERVICES */}
            <div>
              <h3 className="text-lg font-semibold mb-5">Services</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                {[
                  "Roof Waterproofing",
                  "Terrace Waterproofing",
                  "Basement Waterproofing",
                  "Bathroom Leakage Repair",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-white transition relative w-fit cursor-pointer"
                  >
                    <span className="after:block after:h-[1px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                {[
                  { name: "Home", link: "/" },
                  { name: "Services", link: "/services" },
                  { name: "Projects", link: "/projects" },
                  { name: "Contact", link: "/contact" },
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.link}
                      className="hover:text-white transition relative w-fit inline-block"
                    >
                      <span className="after:block after:h-[1px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="text-lg font-semibold mb-5">Contact Info</h3>

              <ul className="space-y-4 text-gray-400 text-sm">

                <li className="flex gap-3 items-start">
                  <span className="text-white">📍</span>
                  Ahmedabad, Gujarat, India
                </li>

                <li className="flex gap-3 items-center">
                  <span className="text-white">📞</span>
                  +91 98765 43210
                </li>

                <li className="flex gap-3 items-center">
                  <span className="text-white">✉️</span>
                  info@chandanenterprise.com
                </li>

              </ul>

            </div>

          </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-800 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Chandan Enterprise. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition">
              Terms & Conditions
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}