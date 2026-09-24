import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Terrace Waterproofing Work",
    category: "Terrace Waterproofing",
    location: "Ahmedabad",
    image: "/Services/terrace_waterproofing.jpg",
    description:
      "Waterproofing work focused on protecting an exposed terrace area from rainwater penetration and moisture-related issues.",
  },
  {
    title: "Basement Waterproofing",
    category: "Basement Waterproofing",
    location: "Ahmedabad",
    image: "/Services/basement_waterproofings.jpg",
    description:
      "Waterproofing treatment for a below-ground area requiring protection against water ingress and seepage.",
  },
  {
    title: "Exterior Wall Protection",
    category: "Exterior Wall Waterproofing",
    location: "Ahmedabad",
    image: "/Services/exterior_wall_waterproofing.jpg",
    description:
      "Waterproofing work for an exposed exterior wall affected by rainwater penetration and moisture.",
  },
];
export default function ProjectsPreview() {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="flex flex-col gap-5 border-b border-[#DCE8F0] pb-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[760px]">
            <span className="text-xs font-bold uppercase tracking-[3px] text-[#015696]">
              Our Work
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.8px] text-[#092A43] sm:text-4xl lg:text-[44px]">
              Waterproofing Work Focused on Real Property Requirements
            </h2>

            <p className="mt-4 max-w-[720px] text-base leading-7 text-[#475569]">
              Explore examples of the types of waterproofing work handled by
              Chandan Enterprises. Each project can involve different surfaces,
              leakage conditions and application requirements.
            </p>
          </div>

          <Link
            href="/projects"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#015696] transition-colors hover:text-[#0B3F67]"
          >
            View All Projects
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* PROJECT GRID */}
        <div className="mt-8 grid gap-5 lg:grid-cols-[1.15fr_0.85fr_0.85fr]">
          {/* FEATURED PROJECT */}
          <article className="group overflow-hidden rounded-2xl border border-[#DCE8F0] bg-[#092A43] shadow-[0_10px_30px_rgba(9,42,67,0.08)]">
            <Link
              href="/projects"
              className="relative block h-[330px] overflow-hidden lg:h-full lg:min-h-[480px]"
            >
              <Image
                src={projects[0].image}
                alt={`${projects[0].title} by Chandan Enterprises`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#061B2B] via-[#061B2B]/35 to-transparent" />

              {/* Top label */}
              <div className="absolute left-5 top-5">
                <span className="rounded-lg border border-white/20 bg-[#092A43]/75 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm">
                  Featured Work
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#8FD3F4]">
                  <MapPin size={14} />
                  {projects[0].location}
                </div>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  {projects[0].title}
                </h3>

                <p className="mt-2 max-w-[600px] text-sm leading-6 text-white/70">
                  {projects[0].description}
                </p>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-white">
                  Explore Projects
                  <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </article>

          {/* SECOND PROJECT */}
          <article className="group overflow-hidden rounded-2xl border border-[#DCE8F0] bg-white shadow-[0_8px_25px_rgba(9,42,67,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(9,42,67,0.10)]">
            <Link href="/projects" className="block">
              <div className="relative h-[230px] overflow-hidden">
                <Image
                  src={projects[1].image}
                  alt={`${projects[1].title} by Chandan Enterprises`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />

                <div className="absolute left-4 top-4 rounded-lg bg-white/95 px-3 py-1.5 text-xs font-bold text-[#092A43] shadow-sm">
                  {projects[1].category}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-1.5 text-xs font-medium text-[#64748B]">
                  <MapPin size={14} className="text-[#015696]" />
                  {projects[1].location}
                </div>

                <h3 className="mt-2 text-xl font-bold text-[#092A43] transition-colors group-hover:text-[#015696]">
                  {projects[1].title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#64748B]">
                  {projects[1].description}
                </p>

                <div className="mt-4 flex items-center gap-2 text-sm font-bold text-[#015696]">
                  View Project
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>
          </article>

          {/* THIRD PROJECT */}
          <article className="group overflow-hidden rounded-2xl border border-[#DCE8F0] bg-white shadow-[0_8px_25px_rgba(9,42,67,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(9,42,67,0.10)]">
            <Link href="/projects" className="block">
              <div className="relative h-[230px] overflow-hidden">
                <Image
                  src={projects[2].image}
                  alt={`${projects[2].title} by Chandan Enterprises`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />

                <div className="absolute left-4 top-4 rounded-lg bg-white/95 px-3 py-1.5 text-xs font-bold text-[#092A43] shadow-sm">
                  {projects[2].category}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-1.5 text-xs font-medium text-[#64748B]">
                  <MapPin size={14} className="text-[#015696]" />
                  {projects[2].location}
                </div>

                <h3 className="mt-2 text-xl font-bold text-[#092A43] transition-colors group-hover:text-[#015696]">
                  {projects[2].title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#64748B]">
                  {projects[2].description}
                </p>

                <div className="mt-4 flex items-center gap-2 text-sm font-bold text-[#015696]">
                  View Project
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>
          </article>
        </div>

        {/* PROJECT INFORMATION STRIP */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="flex items-start gap-3 rounded-2xl border border-[#DCE8F0] bg-[#F7F9FC] p-5">
            <CheckCircle2
              size={19}
              className="mt-0.5 shrink-0 text-[#015696]"
            />

            <div>
              <h3 className="text-sm font-bold text-[#092A43]">
                Property-Specific Work
              </h3>

              <p className="mt-1 text-xs leading-5 text-[#64748B]">
                Waterproofing work is selected according to the affected area
                and site requirement.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-2xl border border-[#DCE8F0] bg-[#F7F9FC] p-5">
            <CheckCircle2
              size={19}
              className="mt-0.5 shrink-0 text-[#015696]"
            />

            <div>
              <h3 className="text-sm font-bold text-[#092A43]">
                Multiple Waterproofing Areas
              </h3>

              <p className="mt-1 text-xs leading-5 text-[#64748B]">
                Services cover roofs, terraces, walls, basements and other
                suitable areas.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-2xl border border-[#DCE8F0] bg-[#F7F9FC] p-5">
            <CheckCircle2
              size={19}
              className="mt-0.5 shrink-0 text-[#015696]"
            />

            <div>
              <h3 className="text-sm font-bold text-[#092A43]">
                Ahmedabad Service Focus
              </h3>

              <p className="mt-1 text-xs leading-5 text-[#64748B]">
                Professional waterproofing services for properties across
                Ahmedabad.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-7 flex flex-col gap-4 rounded-2xl bg-[#F1F8FC] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h3 className="text-base font-bold text-[#092A43]">
              Have a property that needs waterproofing?
            </h3>

            <p className="mt-1 text-sm text-[#64748B]">
              Discuss your requirement with Chandan Enterprises.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#015696] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0B3F67]"
          >
            Request an Inspection
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
