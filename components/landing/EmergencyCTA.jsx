"use client";

export default function EmergencyCTA() {
  return (
    <section className="bg-black py-24 px-6 md:px-10 overflow-hidden relative">
      
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="bg-white/[0.03] border border-white/10 rounded-[40px] p-10 md:p-16">

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

            <div className="max-w-2xl">

              <p className="uppercase tracking-[4px] text-gray-400 text-sm mb-4">
                Emergency Support
              </p>

              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                Need Immediate
                <br />
                Leakage Repair?
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed">
                Contact our waterproofing experts for urgent leakage
                inspection and repair services.
              </p>

              {/* Contact Info */}
              <div className="mt-8 space-y-2">
                <p className="text-white text-lg font-medium">
                  📞 +91 95581 89429
                </p>

                <p className="text-gray-400">
                  Available for Emergency Support
                </p>
              </div>

            </div>

            <div className="flex flex-col gap-5 w-full sm:w-auto">

              {/* Call Button */}
              <a
                href="tel:+919558189429"
                className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition text-center"
              >
                Call Now
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919558189429"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 text-white px-8 py-4 rounded-full hover:border-white transition text-center"
              >
                WhatsApp Us
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}