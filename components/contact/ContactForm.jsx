"use client";

export default function ContactForm() {
  return (
    <section className="bg-black py-28 px-6 md:px-10 overflow-hidden relative">

      {/* Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>

          <p className="uppercase tracking-[4px] text-gray-400 text-sm mb-5">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
            Request Free
            <br />
            Inspection
          </h2>

          <p className="text-gray-400 leading-relaxed text-lg">
            Contact our waterproofing experts for professional consultation,
            site inspection, and long-lasting protection solutions.
          </p>

        </div>

        {/* Form */}
        <div className="bg-white/[0.03] border border-white/10 rounded-[40px] p-8 md:p-10 backdrop-blur-xl">

          <form className="space-y-6">

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

            <input
              type="email"
              placeholder="Email Address"
              className="w-full h-16 rounded-2xl bg-white/5 border border-white/10 px-6 text-white outline-none"
            />

            <select className="w-full h-16 rounded-2xl bg-white/5 border border-white/10 px-6 text-gray-400 outline-none">

              <option>Select Service</option>
              <option>Terrace Waterproofing</option>
              <option>Bathroom Waterproofing</option>
              <option>Wall Waterproofing</option>

            </select>

            <textarea
              rows={5}
              placeholder="Project Details"
              className="w-full rounded-2xl bg-white/5 border border-white/10 p-6 text-white outline-none"
            />

            <button className="w-full h-16 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition duration-300">
              Submit Inquiry
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}