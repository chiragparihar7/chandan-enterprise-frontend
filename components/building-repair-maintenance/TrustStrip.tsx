
import {
  ArrowUpRight,
  ClipboardCheck,
  Droplets,
  MapPin,
  ShieldCheck,
} from "lucide-react";

const trustItems = [
  {
    number: "01",
    title: "Waterproofing",
    description: "Terrace leakage, seepage and damp walls.",
    icon: Droplets,
  },
  {
    number: "02",
    title: "Building Repairs",
    description: "Cracks, damaged plaster and surface restoration.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Site Assessment",
    description: "Identify the issue before choosing a repair.",
    icon: ClipboardCheck,
  },
];

export default function TrustStrip() {
  return (
    <section
      aria-label="Building repair and waterproofing services"
      className="border-b border-border bg-background-soft py-10 sm:py-12 lg:py-14"
    >
      <div className="container-chandan">
        {/* Section Heading */}
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-chandan-primary">
              Building Care Solutions
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-chandan-navy sm:text-4xl">
              Repair the problem.
              <span className="block text-text-muted">
                Protect your property.
              </span>
            </h2>
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-xl border border-border bg-white px-4 py-3 text-sm font-medium text-text-secondary shadow-sm">
            <MapPin
              size={17}
              className="text-chandan-primary"
              aria-hidden="true"
            />
            Ahmedabad, Gujarat
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group relative overflow-hidden rounded-2xl border border-border-light bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-chandan-primary/30 hover:shadow-lg hover:shadow-chandan-navy/10 sm:p-7"
              >
                {/* Subtle top accent */}
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-chandan-primary transition-transform duration-300 group-hover:scale-x-100" />

                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface-blue text-chandan-primary transition-colors duration-300 group-hover:border-chandan-primary/20 group-hover:bg-chandan-primary group-hover:text-white">
                    <Icon size={23} strokeWidth={1.7} />
                  </div>

                  <span className="text-xs font-semibold tracking-widest text-text-light">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-bold tracking-tight text-chandan-navy">
                  {item.title}
                </h3>

                <p className="mt-2 max-w-xs text-sm leading-6 text-text-muted">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-border-light pt-4">
                  <span className="text-xs font-bold tracking-wide text-text-secondary">
                    CHANDAN ENTERPRISES
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="text-text-light transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-chandan-primary"
                    aria-hidden="true"
                  />
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-border bg-surface-blue px-4 py-4 sm:items-center sm:px-5">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-white text-chandan-primary sm:mt-0">
            <ShieldCheck size={18} />
          </span>

          <p className="text-sm leading-6 text-text-secondary">
            Every property is different. Repair recommendations should be
            based on the cause and condition of the affected area.
          </p>
        </div>
      </div>
    </section>
  );
}
