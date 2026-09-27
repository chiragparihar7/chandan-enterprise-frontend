import { whyChooseUs } from "./data";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#015696]">
              Why choose us
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#061b2b] sm:text-4xl">
              Thoughtful planning.
              <span className="block text-[#015696]">Professional execution.</span>
            </h2>
            <p className="mt-5 max-w-md leading-7 text-[#64748b]">
              From the first discussion to final inspection, our approach is
              built around understanding the space and executing the agreed
              ceiling scope with attention to detail.
            </p>

            <div className="mt-8 rounded-3xl bg-[#092a43] p-6 text-white">
              <p className="text-sm leading-6 text-slate-300">
                Have a ceiling design in mind?
              </p>
              <p className="mt-2 text-xl font-semibold">
                Let&apos;s discuss your space.
              </p>
              <a
                href="#enquiry"
                className="mt-5 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#092a43] transition hover:bg-[#e8f0f5]"
              >
                Start a consultation
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-3xl border border-[#dce8f0] bg-[#f7f9fc] p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_55px_rgba(9,42,67,0.08)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#015696] shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-semibold text-[#c3cfd7]">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-7 text-lg font-semibold text-[#092a43]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#64748b]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
