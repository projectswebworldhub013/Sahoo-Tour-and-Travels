// src/pages/Contact.jsx
import React from "react";
import ContactHero from "../Components/ContactHero";
import MapSection from "../Components/MapsSection";
import contactBg from "../assets/images/contact-hero.jpg";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import MapsSection from "../Components/MapsSection";

const COLORS = {
  primary: "#1F4ED8",
  secondary: "#1FA75A",
  accent: "#F97316",
  bgMain: "#FFFFFF",
  bgSection: "#F8FAFC",
  textPrimary: "#1F2937",
  textSecondary: "#6B7280",
  border: "#E5E7EB",
  hoverDark: "#1E40AF",
};

const Contact = () => {
  return (
    <>
      <ContactHero />

      {/* CONTACT SECTION */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: COLORS.bgSection }}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14">

          {/* LEFT INFO */}
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: COLORS.textPrimary }}
            >
              Get in Touch
            </h2>

            <div
              className="w-24 h-[3px] rounded-full mb-6"
              style={{ backgroundColor: COLORS.primary }}
            />

            <p
              className="leading-relaxed mb-10 max-w-xl"
              style={{ color: COLORS.textSecondary }}
            >
              Sahoo Tour & Travels is your reliable travel partner for local
              city rides, airport transfers, outstation journeys, corporate
              travel, and custom tour packages. Reach out to us for bookings,
              enquiries, or travel planning — we’re always ready to assist.
            </p>

            {/* INFO BLOCKS */}
            <div className="space-y-8">

              {/* ADDRESS 1 */}
              <div className="flex gap-4 border-b pb-6" style={{ borderColor: COLORS.border }}>
                <FaMapMarkerAlt className="text-xl mt-1" style={{ color: COLORS.primary }} />
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: COLORS.textPrimary }}>
                    Head Office
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: COLORS.textSecondary }}>
                    Sahoo Tour And Travels, Plot No. 7-B, First Floor, Block 7,
                    Jasola Vihar Pocket 10-B, DDA LIG Flat, South Delhi – 110025, India
                  </p>
                </div>
              </div>

              {/* ADDRESS 2 */}
              <div className="flex gap-4 border-b pb-6" style={{ borderColor: COLORS.border }}>
                <FaMapMarkerAlt className="text-xl mt-1" style={{ color: COLORS.primary }} />
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: COLORS.textPrimary }}>
                    Branch Office
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: COLORS.textSecondary }}>
                    Shop No. G1, Anupam Plaza, Plot No. 50,
                    Sri Aurobindo Marg, Opposite Azad Apartment,
                    Block Q, Kalu Sarai, Green Park,
                    New Delhi – 110016
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex gap-4 border-b pb-6" style={{ borderColor: COLORS.border }}>
                <FaPhoneAlt className="text-lg mt-1" style={{ color: COLORS.primary }} />
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: COLORS.textPrimary }}>
                    Call Us
                  </h4>
                  <p className="text-sm" style={{ color: COLORS.textSecondary }}>
                    +91 98712 30490 <br />
                    +91 99993 67232
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex gap-4">
                <FaEnvelope className="text-lg mt-1" style={{ color: COLORS.primary }} />
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: COLORS.textPrimary }}>
                    Email Us
                  </h4>
                  <p className="text-sm" style={{ color: COLORS.textSecondary }}>
                    Info@sahootourandtravelsdelhi.co.in <br />
                    Sahootourandtravelsdelhi@gmail.com
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT FORM */}
          <div
            className="relative rounded-2xl overflow-hidden shadow-xl"
            style={{
              backgroundImage: `url(${contactBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-white/80" />

            <div className="relative p-8 md:p-10">
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: COLORS.textPrimary }}
              >
                Travel Enquiry Form
              </h3>

              <form
                action="https://formsubmit.co/Info@sahootourandtravelsdelhi.co.in"
                method="POST"
                className="space-y-6"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_subject"
                  value="New Travel Enquiry - Sahoo Tour & Travels"
                />

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full border-b py-3 bg-transparent focus:outline-none"
                  style={{ borderColor: COLORS.border }}
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-full border-b py-3 bg-transparent focus:outline-none"
                  style={{ borderColor: COLORS.border }}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full border-b py-3 bg-transparent focus:outline-none"
                  style={{ borderColor: COLORS.border }}
                />

                <select
                  name="service"
                  required
                  className="w-full border-b py-3 bg-transparent focus:outline-none"
                  style={{ borderColor: COLORS.border }}
                >
                  <option value="">Select Service</option>
                  <option>Local City Taxi</option>
                  <option>Airport Pickup & Drop</option>
                  <option>Outstation Taxi</option>
                  <option>Corporate Travel</option>
                  <option>Tour Packages</option>
                  <option>One Way / Round Trip</option>
                </select>

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Travel Details / Message"
                  required
                  className="w-full border-b py-3 bg-transparent focus:outline-none"
                  style={{ borderColor: COLORS.border }}
                />

                <button
                  type="submit"
                  className="cursor-pointer mt-4 w-full sm:w-auto px-10 py-3 rounded-full font-semibold text-white transition-all"
                  style={{
                    backgroundColor: COLORS.primary,
                  }}
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* SOCIAL LINKS */}
        <div className="flex justify-center gap-6 mt-16 text-xl">
          <FaFacebookF className="text-[#1877F2]" />
          <FaInstagram className="text-[#E1306C]" />
          <FaXTwitter className="text-black" />
          <FaLinkedinIn className="text-[#0A66C2]" />
          <FaYoutube className="text-[#FF0000]" />
        </div>
      </section>

      <MapsSection />
    </>
  );
};

export default Contact;