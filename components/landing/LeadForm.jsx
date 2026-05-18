"use client";

export default function LeadForm() {
  return (
    <section className="bg-[#f7f7f7] py-28 px-6 md:px-10">

      <div className="max-w-5xl mx-auto">

        <div className="bg-black rounded-[40px] p-10 md:p-16">

          <div className="text-center mb-14">

            <p className="uppercase tracking-[4px] text-gray-400 text-sm mb-4">
              Free Inspection
            </p>

            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Request Quote
            </h2>

          </div>

          <form className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Full Name"
              className="h-16 rounded-2xl bg-white/5 border border-white/10 px-6 text-white outline-none"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="h-16 rounded-2xl bg-white/5 border border-white/10 px-6 text-white outline-none"
            />

            <input
              type="text"
              placeholder="City"
              className="h-16 rounded-2xl bg-white/5 border border-white/10 px-6 text-white outline-none"
            />

            <select className="h-16 rounded-2xl bg-white/5 border border-white/10 px-6 text-gray-400 outline-none">

              <option>Select Service</option>
              <option>Terrace Waterproofing</option>
              <option>Basement Leakage</option>

            </select>

            <textarea
              rows={5}
              placeholder="Project Details"
              className="md:col-span-2 rounded-2xl bg-white/5 border border-white/10 p-6 text-white outline-none"
            />

            <button className="md:col-span-2 h-16 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition">
              Submit Inquiry
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}