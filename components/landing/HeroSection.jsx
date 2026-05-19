"use client";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center">

      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      <div className="absolute inset-0 bg-black/75" />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full py-32">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>

            <p className="uppercase tracking-[4px] text-gray-300 text-sm mb-5">
              Premium Waterproofing Solutions
            </p>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
              Stop Leakage &
              <br />
              Protect Your
              <br />
              Property
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl">
              Advanced waterproofing and leakage repair services for
              terraces, basements, roofs, bathrooms, and walls.
            </p>

            {/* Contact Number */}
            <div className="mb-10">
              <p className="text-white text-2xl font-semibold">
                📞 +91 95581 89429
              </p>

              <p className="text-gray-400 mt-2">
                Call us for urgent waterproofing support
              </p>
            </div>

            <div className="flex flex-wrap gap-5">

              {/* Free Inspection */}
              <a
                href="https://wa.me/919558189429"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition"
              >
                Get Free Inspection
              </a>

              {/* Call Button */}
              <a
                href="tel:+919558189429"
                className="border border-white/20 text-white px-8 py-4 rounded-full hover:border-white transition"
              >
                Call Now
              </a>

            </div>

          </div>

          {/* Right Form */}
          <div className="bg-white/[0.04] border border-white/10 rounded-[40px] p-8 md:p-10 backdrop-blur-xl">

            <h3 className="text-3xl font-semibold text-white mb-8">
              Quick Inquiry
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full h-16 rounded-2xl bg-white/5 border border-white/10 px-6 text-white outline-none"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full h-16 rounded-2xl bg-white/5 border border-white/10 px-6 text-white outline-none"
              />

              <textarea
                rows={5}
                placeholder="Project Details"
                className="w-full rounded-2xl bg-white/5 border border-white/10 p-6 text-white outline-none"
              />

              <button className="w-full h-16 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition">
                Submit Inquiry
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}