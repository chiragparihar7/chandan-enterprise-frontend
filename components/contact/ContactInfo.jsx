"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { contactInfo } from "./data";

const icons = [Phone, Mail, MapPin, Clock];

export default function ContactInfo() {
  return (
    <section className="bg-[#f7f7f7] py-24 px-6 md:px-10">

      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {contactInfo.map((item, index) => {
            const Icon = icons[index];

            return (
              <div
                key={index}
                className="group bg-white border border-black/5 rounded-[32px] p-10 hover:bg-black transition-all duration-500"
              >

                <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-black transition duration-500">

                  <Icon size={30} />

                </div>

                <h3 className="text-2xl font-semibold text-black group-hover:text-white transition duration-500 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-500 group-hover:text-gray-300 transition duration-500 leading-relaxed">
                  {item.value}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}