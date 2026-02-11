import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaMapMarkerAlt,
  FaCarSide,
  FaRupeeSign,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

/* ================= COVERAGE DATA ================= */

import delhiImg from "../assets/coverage/delhi.jpg";
import mumbaiImg from "../assets/coverage/mumbai.jpg";
import bangaloreImg from "../assets/coverage/bangalore.jpg";
import kolkataImg from "../assets/coverage/kolkata.jpg";
import chennaiImg from "../assets/coverage/chennai.jpg";
import hyderabadImg from "../assets/coverage/hyderabad.jpg";
import jaipurImg from "../assets/coverage/jaipur.jpg";
import ahmedabadImg from "../assets/coverage/ahmedabad.jpg";
import varanasiImg from "../assets/coverage/varanasi.jpg";

const coverageData = [
  {
    id: 1,
    title: "Delhi & NCR",
    image: delhiImg,
    shortDesc: "Local, Airport & Corporate Travel Services",
    longDesc:
      "Premium city taxi services across Delhi, Noida, Gurugram, Faridabad and Ghaziabad. Designed for business executives, airport travelers, and daily commuters seeking punctual and safe transportation with professional chauffeurs.",
    specs: [
      "Local City Taxi",
      "Airport Pickup & Drop",
      "Corporate Travel",
      "24×7 Availability",
      "Sedan / SUV Options",
      "Verified Drivers",
    ],
    price: "₹12 – ₹18 / km (Approx)",
  },

  {
    id: 2,
    title: "Mumbai",
    image: mumbaiImg,
    shortDesc: "City & Airport Transfers in Financial Capital",
    longDesc:
      "Reliable taxi services across Mumbai including South Mumbai, Bandra, Andheri and Navi Mumbai. Seamless airport transfers and corporate mobility solutions with clean AC vehicles.",
    specs: [
      "City Travel",
      "Airport Transfer",
      "Luxury Sedan",
      "Corporate Billing",
      "Hourly Rentals",
      "Night Service",
    ],
    price: "₹14 – ₹20 / km (Approx)",
  },

  {
    id: 3,
    title: "Bangalore",
    image: bangaloreImg,
    shortDesc: "IT Hub Corporate & Daily Commute Travel",
    longDesc:
      "Smooth and reliable taxi services across Bangalore including Whitefield, Electronic City and Airport transfers. Ideal for tech professionals and business travelers.",
    specs: [
      "Airport Pickup",
      "Corporate Tie-ups",
      "Hourly Packages",
      "SUV Fleet",
      "Outstation Trips",
      "24×7 Support",
    ],
    price: "₹13 – ₹19 / km (Approx)",
  },

  {
    id: 4,
    title: "Hyderabad",
    image: hyderabadImg,
    shortDesc: "Local & Outstation Premium Taxi Service",
    longDesc:
      "Comfortable city rides across Hyderabad including HITEC City and Secunderabad. Perfect for airport transfers, family travel and business mobility.",
    specs: [
      "Airport Service",
      "City Travel",
      "Outstation Tours",
      "Clean AC Cars",
      "Experienced Drivers",
      "Online Booking",
    ],
    price: "₹11 – ₹17 / km (Approx)",
  },

  {
    id: 5,
    title: "Chennai",
    image: chennaiImg,
    shortDesc: "Safe & Reliable Travel in Tamil Nadu",
    longDesc:
      "Professional taxi service across Chennai including Marina Beach area and Airport transfers. Suitable for corporate travel and pilgrimage trips across Tamil Nadu.",
    specs: [
      "Local Taxi",
      "Temple Tours",
      "Airport Drop",
      "AC Fleet",
      "Long Distance Travel",
      "Round Trip Option",
    ],
    price: "₹12 – ₹18 / km (Approx)",
  },

  {
    id: 6,
    title: "Kolkata",
    image: kolkataImg,
    shortDesc: "City Mobility & Business Travel Solutions",
    longDesc:
      "Reliable taxi services in Kolkata including Salt Lake and New Town. Ideal for airport transfers, business meetings and comfortable family rides.",
    specs: [
      "Airport Pickup",
      "City Tours",
      "Corporate Service",
      "Sedan & SUV",
      "Flexible Booking",
      "24×7 Support",
    ],
    price: "₹10 – ₹16 / km (Approx)",
  },

  {
    id: 7,
    title: "Jaipur",
    image: jaipurImg,
    shortDesc: "Royal Rajasthan Travel Services",
    longDesc:
      "Comfortable taxi services across Jaipur including Amer Fort, City Palace and nearby Rajasthan destinations. Ideal for tourists and heritage travelers.",
    specs: [
      "City Tour",
      "Heritage Routes",
      "Outstation Trips",
      "SUV Available",
      "Driver Guide Option",
      "Flexible Packages",
    ],
    price: "₹11 – ₹17 / km (Approx)",
  },

  {
    id: 8,
    title: "Ahmedabad",
    image: ahmedabadImg,
    shortDesc: "Business & Family Travel Across Gujarat",
    longDesc:
      "Smooth taxi services across Ahmedabad including Gandhinagar and nearby cities. Perfect for business meetings and family travel.",
    specs: [
      "City Travel",
      "Corporate Service",
      "Airport Pickup",
      "Clean Vehicles",
      "Round Trip",
      "Verified Drivers",
    ],
    price: "₹11 – ₹16 / km (Approx)",
  },

  {
    id: 9,
    title: "Varanasi",
    image: varanasiImg,
    shortDesc: "Pilgrimage & Spiritual Travel Services",
    longDesc:
      "Dedicated taxi services for temple visits, ghats and pilgrimage tours in Varanasi. Comfortable and safe travel for families and groups.",
    specs: [
      "Temple Tours",
      "Ghat Visits",
      "Airport Service",
      "AC Vehicles",
      "Group Travel",
      "Customized Packages",
    ],
    price: "Customized Pricing",
  },
];

/* ================= COMPONENT ================= */

const CoverageGrid = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="relative bg-[#FFFFFF] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[rgba(31,78,216,0.08)] blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1F2937]">
            Our Travel Coverage
          </h2>
          <div className="mt-4 flex justify-center items-center gap-3">
            <span className="w-12 h-[2px] bg-[#E5E7EB]" />
            <span className="w-2 h-2 bg-[#F97316] rounded-full" />
            <span className="w-12 h-[2px] bg-[#E5E7EB]" />
          </div>
        </div>

        {/* GRID */}
    {/* GRID */}
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {coverageData.map((item) => (
    <motion.div
      key={item.id}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group relative rounded-2xl overflow-hidden 
      bg-white border border-[#E5E7EB]
      shadow-md hover:shadow-xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        {/* Title */}
        <div className="absolute bottom-3 left-4 text-white">
          <h3 className="text-lg font-semibold">
            {item.title}
          </h3>
        </div>

        {/* Price Badge */}
        <div className="absolute top-3 right-3 bg-white text-[#F97316] text-[11px] font-semibold px-3 py-1 rounded-full shadow">
          {item.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">

        {/* Short Description */}
        <p className="text-sm text-[#6B7280] leading-relaxed">
          {item.shortDesc}
        </p>

        {/* Specs Preview (Now 6 Specs) */}
        <div className="grid grid-cols-2 gap-2">
          {item.specs.slice(0, 6).map((spec, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-[11px] text-[#374151] 
              bg-[#F9FAFB] px-2 py-1.5 rounded-lg border border-[#E5E7EB]"
            >
              <FaCheckCircle className="text-[#1FA75A] text-[10px]" />
              {spec}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-[#F1F1F1]">
          <div className="flex items-center gap-1 text-[11px] text-[#6B7280]">
            <FaMapMarkerAlt className="text-[#1F4ED8]" />
            Pan India
          </div>

          <button
            onClick={() => setActive(item)}
            className="text-[11px] font-medium text-white 
            bg-[#1F4ED8] hover:bg-[#1E40AF] 
            px-4 py-2 rounded-full transition-all duration-300 cursor-pointer"
          >
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  ))}
</div>
      </div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black"
              >
                <FaTimes size={20} />
              </button>

              <div className="grid md:grid-cols-2">

                {/* Image */}
                <div className="h-72 md:h-full">
                  <img
                    src={active.image}
                    alt={active.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="p-8 overflow-y-auto max-h-[80vh]">
                  <h3 className="text-2xl font-semibold text-[#1F2937]">
                    {active.title}
                  </h3>

                  <p className="mt-4 text-[#6B7280] text-sm leading-relaxed">
                    {active.longDesc}
                  </p>

                  {/* Specifications */}
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-[#1F2937] mb-3">
                      Specifications
                    </h4>
                    <ul className="space-y-2">
                      {active.specs.map((spec, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-sm text-[#6B7280]"
                        >
                          <FaCheckCircle className="text-[#1FA75A]" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price */}
                  <div className="mt-6 flex items-center gap-2 text-[#F97316] font-medium">
                    <FaRupeeSign />
                    {active.price}
                  </div>

                  {/* CTA */}
                  <Link to="/contact">
                  <button className="mt-8 w-full bg-[#1F4ED8] hover:bg-[#1E40AF] text-white py-3 rounded-xl font-medium transition">
                    Book Now
                  </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CoverageGrid;