
import {
  ArrowUpRight,
  Check,
  Droplets,
  Layers3,
  Paintbrush,
  ShieldCheck,
  Waves,
  Wrench,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Terrace Waterproofing",
    description:
      "Waterproofing solutions for terrace and roof areas affected by water penetration.",
    icon: Droplets,
    features: [
      "Terrace leakage assessment",
      "Surface and joint inspection",
      "Waterproofing treatment",
    ],
  },
  {
    number: "02",
    title: "Bathroom Leakage Repair",
    description:
      "Investigate bathroom leakage and moisture affecting adjoining walls or ceilings.",
    icon: Waves,
    features: [
      "Leakage source assessment",
      "Affected area inspection",
      "Suitable repair recommendations",
    ],
  },
  {
    number: "03",
    title: "Dampness Treatment",
    description:
      "Address damp patches and moisture-related deterioration after identifying the likely cause.",
    icon: ShieldCheck,
    features: [
      "Damp patch assessment",
      "Moisture source investigation",
      "Surface repair planning",
    ],
  },
  {
    number: "04",
    title: "Wall Crack & Plaster Repair",
    description:
      "Repair damaged plaster and assess visible cracks before selecting an appropriate method.",
    icon: Layers3,
    features: [
      "Crack inspection",
      "Damaged plaster removal where needed",
      "Surface restoration",
    ],
  },
  {
    number: "05",
    title: "Painting & Surface Restoration",
    description:
      "Refresh damaged surfaces after addressing the underlying cause of peeling or deterioration.",
    icon: Paintbrush,
    features: [
      "Surface preparation",
      "Damaged finish repair",
      "Painting and finishing",
    ],
  },
  {
    number: "06",
    title: "Building Repair & Maintenance",
    description:
      "Practical repair and maintenance support for residential and commercial properties.",
    icon: Wrench,
    features: [
      "Visible damage assessment",
      "Repair scope planning",
      "Maintenance requirements",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14"
    >
      <div className="container-chandan">
        {/* Heading */}
        <div className="mb-12 grid grid-cols-1 gap-6 lg:mb-16 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-chandan-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-chandan-primary">
                What We Do
              </span>
            </div>

            <h2
              id="services-heading"
              className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-chandan-navy sm:text-5xl lg:text-6xl"
            >
              Complete care for
              <span className="block text-text-muted">
                your building.
              </span>
            </h2>
          </div>

          <p className="max-w-lg text-base leading-8 text-text-secondary lg:justify-self-end">
            From waterproofing and leakage repair to plaster restoration and
            general maintenance, explore solutions for common property
            problems.
          </p>
        </div>

        {/* Services Layout */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const featured = index === 0;

            return (
              <article
                key={service.number}
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7 ${
                  featured
                    ? "border-chandan-navy bg-chandan-navy text-white hover:shadow-chandan-navy/15"
                    : "border-border-light bg-white hover:border-chandan-primary/30 hover:shadow-chandan-navy/5"
                }`}
              >
                {/* Card Top */}
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 ${
                      featured
                        ? "border border-white/15 bg-white/10 text-blue-200"
                        : "border border-border bg-surface-blue text-chandan-primary group-hover:bg-chandan-primary group-hover:text-white"
                    }`}
                  >
                    <Icon size={23} strokeWidth={1.7} />
                  </div>

                  <span
                    className={`text-xs font-bold tracking-[0.16em] ${
                      featured ? "text-blue-200/70" : "text-text-light"
                    }`}
                  >
                    SERVICE {service.number}
                  </span>
                </div>

                {/* Title and Description */}
                <h3
                  className={`mt-7 text-xl font-bold leading-snug tracking-tight ${
                    featured ? "text-white" : "text-chandan-navy"
                  }`}
                >
                  {service.title}
                </h3>

                <p
                  className={`mt-3 text-sm leading-7 ${
                    featured ? "text-slate-300" : "text-text-muted"
                  }`}
                >
                  {service.description}
                </p>

                {/* Features */}
                <ul className="mt-6 flex-1 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-3 text-sm leading-6 ${
                        featured ? "text-slate-200" : "text-text-secondary"
                      }`}
                    >
                      <Check
                        size={17}
                        className={`mt-0.5 shrink-0 ${
                          featured
                            ? "text-blue-300"
                            : "text-chandan-primary"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Card Link */}
                <a
                  href="#contact"
                  className={`mt-7 flex items-center justify-between border-t pt-5 text-sm font-bold transition-colors ${
                    featured
                      ? "border-white/15 text-white hover:text-blue-200"
                      : "border-border-light text-chandan-navy hover:text-chandan-primary"
                  }`}
                >
                  Discuss This Service

                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-1 ${
                      featured
                        ? "bg-white/10 text-white group-hover:bg-white group-hover:text-chandan-navy"
                        : "bg-surface-blue text-chandan-primary group-hover:bg-chandan-primary group-hover:text-white"
                    }`}
                  >
                    <ArrowUpRight size={18} />
                  </span>
                </a>
              </article>
            );
          })}
        </div>

      
      </div>
    </section>
  );
}
