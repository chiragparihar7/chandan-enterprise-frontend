"use client";

import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { contactInfo } from "./data";

const icons = {
  Phone,
  Mail,
  MapPin,
  Clock3,
};

export default function ContactInfo() {
  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-12 lg:py-14">
      {/* Soft Background */}
      <div className="pointer-events-none absolute right-[-160px] top-[-180px] h-[420px] w-[420px] rounded-full bg-[#eef8fd] blur-[110px]" />

      <div className="container-chandan relative z-10">
        {/* Heading */}
        <div className="mb-10 flex flex-col justify-between gap-5 border-b border-[#dce8f0] pb-8 md:mb-12 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-9 bg-[#015696]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#015696]">
                Contact Information
              </span>
            </div>

            <h2 className="text-2xl font-bold text-[#092a43] md:text-3xl">
              Connect with Chandan Enterprises.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#64748b]">
            Choose the most convenient way to discuss your waterproofing or
            leakage-protection requirement.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid overflow-hidden rounded-[24px] border border-[#dce8f0] bg-white md:grid-cols-2 xl:grid-cols-4">
          {contactInfo.map((item, index) => {
            /*
             * Supports data where item.icon is:
             * "Phone", "Mail", "MapPin", or "Clock3".
             * Falls back to the original array order if no icon is supplied.
             */
            const fallbackIcons = [Phone, Mail, MapPin, Clock3];
            const Icon =
              icons[item.icon] ||
              icons[item.type] ||
              fallbackIcons[index] ||
              Phone;

            const isPhone =
              item.type === "Phone" ||
              item.icon === "Phone" ||
              item.title?.toLowerCase().includes("phone") ||
              item.title?.toLowerCase().includes("call");

            const isEmail =
              item.type === "Mail" ||
              item.icon === "Mail" ||
              item.title?.toLowerCase().includes("email") ||
              item.title?.toLowerCase().includes("mail");

            const isLocation =
              item.type === "MapPin" ||
              item.icon === "MapPin" ||
              item.title?.toLowerCase().includes("location") ||
              item.title?.toLowerCase().includes("address");

            const href = isPhone
              ? `tel:${String(item.value).replace(/\s+/g, "")}`
              : isEmail
                ? `mailto:${item.value}`
                : isLocation
                  ? "https://www.google.com/maps/search/?api=1&query=Ahmedabad%2C%20Gujarat"
                  : undefined;

            const content = (
              <>
                {/* Icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eef8fd] text-[#015696] transition-all duration-300 group-hover:bg-[#015696] group-hover:text-white">
                  <Icon size={20} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#94a3b8]">
                    {item.title}
                  </p>

                  <p className="mt-2 break-words text-sm font-semibold leading-6 text-[#092a43]">
                    {item.value}
                  </p>
                </div>

                {/* Arrow */}
                {href && (
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#dce8f0] text-[#94a3b8] transition-all duration-300 group-hover:border-[#015696] group-hover:bg-[#015696] group-hover:text-white">
                    <ArrowUpRight size={14} />
                  </div>
                )}
              </>
            );

            return href ? (
              <a
                key={index}
                href={href}
                target={isLocation ? "_blank" : undefined}
                rel={isLocation ? "noopener noreferrer" : undefined}
                className="group relative flex min-h-[150px] items-start gap-4 border-b border-[#e8f0f5] p-6 transition-all duration-300 hover:bg-[#f7f9fc] md:p-7 xl:border-b-0 xl:border-r last:border-r-0"
              >
                {content}

                {/* Bottom Accent */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#015696] transition-all duration-500 group-hover:w-full" />
              </a>
            ) : (
              <div
                key={index}
                className="group relative flex min-h-[150px] items-start gap-4 border-b border-[#e8f0f5] p-6 transition-all duration-300 hover:bg-[#f7f9fc] md:p-7 xl:border-b-0 xl:border-r last:border-r-0"
              >
                {content}

                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#015696] transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-6 flex flex-col gap-3 rounded-[16px] bg-[#f1f8fc] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-[#475569] md:text-sm">
            <span className="font-semibold text-[#092a43]">
              Service Area:
            </span>{" "}
            Ahmedabad, Gujarat
          </p>

          <p className="text-xs font-medium text-[#64748b]">
            Office Hours: 9:00 AM – 7:00 PM
          </p>
        </div>
      </div>
    </section>
  );
}