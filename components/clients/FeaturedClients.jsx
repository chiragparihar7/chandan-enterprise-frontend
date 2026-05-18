"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "./data";

export default function FeaturedClients() {
  return (
    <section className="bg-black py-28 px-6 md:px-10">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-20">

          <p className="uppercase tracking-[4px] text-gray-400 text-sm mb-4">
            Featured Projects
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Client Success
            <br />
            Stories
          </h2>

        </div>

        {/* Projects */}
        <div className="grid lg:grid-cols-2 gap-8">

          {featuredProjects.map((project) => (

            <div
              key={project.id}
              className="group relative h-[580px] rounded-[36px] overflow-hidden"
            >

              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/45" />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 p-10 w-full">

                <span className="text-gray-300 uppercase tracking-[3px] text-sm">
                  {project.category}
                </span>

                <div className="flex items-end justify-between mt-5">

                  <div>

                    <h3 className="text-3xl md:text-4xl font-semibold text-white mb-3">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 max-w-md">
                      Premium waterproofing systems designed for long-term protection.
                    </p>

                  </div>

                  <button className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition duration-300">
                    <ArrowUpRight size={22} />
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}