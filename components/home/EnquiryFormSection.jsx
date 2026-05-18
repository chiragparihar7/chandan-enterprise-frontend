"use client";

import React, { useState } from "react";

export default function EnquirySplitCentered() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Enquiry Submitted Successfully!");
  };

  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">

        {/* CENTER TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Get a Free Inspection
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Share your details and our team will connect with you to provide the best waterproofing solution.
          </p>
        </div>

        {/* SPLIT CARD */}
        <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden shadow-xl">

          {/* LEFT SIDE (DARK) */}
          <div className="bg-black text-white p-10 md:p-14 flex flex-col justify-center">

            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Why Choose Chandan Enterprise?
            </h3>

            <p className="text-gray-300 mb-8">
              We deliver reliable waterproofing solutions with advanced techniques and long-term protection.
            </p>

            {/* Features */}
            <div className="space-y-4 text-gray-200">

              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Free Site Inspection
              </div>

              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Experienced & Skilled Team
              </div>

              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Premium Quality Materials
              </div>

              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                1 / 3 / 5 / 7 / 10 Years Warranty
              </div>

            </div>

            {/* Bottom Note */}
            <div className="mt-10 border-t border-gray-700 pt-6">
              <p className="text-sm text-gray-400">
                Trusted by 100+ satisfied clients across residential & commercial projects.
              </p>
            </div>

          </div>

          {/* RIGHT SIDE (FORM) */}
          <div className="bg-white p-10 md:p-14">

            <h3 className="text-xl font-semibold text-black mb-6">
              Fill the Enquiry Form
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div>
                <label className="text-sm text-gray-600">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm text-gray-600">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Enter your phone number"
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition"
                />
              </div>

              {/* Service */}
              <div>
                <label className="text-sm text-gray-600">Select Service</label>
                <select
                  name="service"
                  required
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition"
                >
                  <option value="">Choose a service</option>
                  <option>Terrace Waterproofing</option>
                  <option>Bathroom Waterproofing</option>
                  <option>Basement Waterproofing</option>
                  <option>Leakage Repair</option>
                  <option>Civil Work</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="text-sm text-gray-600">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Describe your issue..."
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition duration-300"
              >
                Submit Enquiry
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}