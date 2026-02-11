// src/components/CoverageGrid.jsx

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaMapMarkerAlt,
  FaRupeeSign,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

/* ================= IMAGES ================= */

import delhiImg from "../assets/images/coverage/delhi.jpg";
import mumbaiImg from "../assets/images/coverage/mumbai.jpg";
import bangaloreImg from "../assets/images/coverage/bangalore.jpg";
import kolkataImg from "../assets/images/coverage/kolkata.jpg";
import chennaiImg from "../assets/images/coverage/chennai.jpg";
import hyderabadImg from "../assets/images/coverage/hyderabad.jpg";
import jaipurImg from "../assets/images/coverage/jaipur.jpg";
import ahmedabadImg from "../assets/images/coverage/ahemdabad.jpg";
import varanasiImg from "../assets/images/coverage/varanasi.jpg";

/* ================= DATA ================= */

const coverageData = [
  {
    id: 1,
    title: "Delhi & NCR",
    image: delhiImg,
    shortDesc: "Local, Airport & Corporate Travel",
    longDesc:
      "Premium taxi services across Delhi, Noida, Gurugram, Faridabad and Ghaziabad with punctual airport transfers, corporate mobility and daily city travel.",
    specs: [
      "Local Taxi",
      "Airport Pickup",
      "Corporate Travel",
      "24×7 Service",
      "Sedan / SUV",
      "Verified Drivers",
    ],
    price: "₹12 – ₹18 / km",
  },
  {
    id: 2,
    title: "Mumbai",
    image: mumbaiImg,
    shortDesc: "City & Airport Transfers",
    longDesc:
      "Reliable taxi services across Mumbai including South Mumbai, Bandra, Navi Mumbai and airport mobility with professional chauffeurs.",
    specs: [
      "Airport Transfer",
      "Luxury Sedan",
      "Corporate Billing",
      "Hourly Rental",
      "Night Service",
      "Outstation",
    ],
    price: "₹14 – ₹20 / km",
  },
  {
    id: 3,
    title: "Bangalore",
    image: bangaloreImg,
    shortDesc: "IT Hub Corporate Travel",
    longDesc:
      "Smooth and reliable taxi services across Bangalore including Whitefield and Electronic City for business and daily travel.",
    specs: [
      "Airport Pickup",
      "SUV Fleet",
      "Corporate Tie-up",
      "Hourly Package",
      "Outstation",
      "24×7 Support",
    ],
    price: "₹13 – ₹19 / km",
  },
  {
    id: 4,
    title: "Hyderabad",
    image: hyderabadImg,
    shortDesc: "Local & Business Mobility",
    longDesc:
      "Comfortable taxi rides across Hyderabad including HITEC City and Secunderabad for family and corporate travel.",
    specs: [
      "Airport Service",
      "City Travel",
      "AC Cars",
      "Online Booking",
      "Family Trips",
      "Round Trip",
    ],
    price: "₹11 – ₹17 / km",
  },
  {
    id: 5,
    title: "Chennai",
    image: chennaiImg,
    shortDesc: "Safe Travel in Tamil Nadu",
    longDesc:
      "Professional taxi services across Chennai including temple tours and airport transfers.",
    specs: [
      "Temple Tours",
      "Airport Drop",
      "Local Taxi",
      "Long Distance",
      "Clean Vehicles",
      "Flexible Booking",
    ],
    price: "₹12 – ₹18 / km",
  },
  {
    id: 6,
    title: "Kolkata",
    image: kolkataImg,
    shortDesc: "City & Business Travel",
    longDesc:
      "Reliable taxi services in Kolkata including Salt Lake and New Town with professional drivers.",
    specs: [
      "Airport Pickup",
      "City Tour",
      "Corporate Travel",
      "Sedan / SUV",
      "24×7 Service",
      "Flexible Booking",
    ],
    price: "₹10 – ₹16 / km",
  },
  {
    id: 7,
    title: "Jaipur",
    image: jaipurImg,
    shortDesc: "Royal Rajasthan Tours",
    longDesc:
      "Comfortable taxi services across Jaipur including heritage tours and Rajasthan outstation trips.",
    specs: [
      "City Tour",
      "Heritage Routes",
      "SUV Available",
      "Outstation",
      "Guide Option",
      "Flexible Packages",
    ],
    price: "₹11 – ₹17 / km",
  },
  {
    id: 8,
    title: "Ahmedabad",
    image: ahmedabadImg,
    shortDesc: "Business Travel Gujarat",
    longDesc:
      "Smooth taxi services across Ahmedabad and Gandhinagar for corporate and family travel.",
    specs: [
      "Airport Pickup",
      "Corporate Service",
      "Clean Cars",
      "Round Trip",
      "Local Taxi",
      "Verified Drivers",
    ],
    price: "₹11 – ₹16 / km",
  },
  {
    id: 9,
    title: "Varanasi",
    image: varanasiImg,
    shortDesc: "Pilgrimage & Spiritual Travel",
    longDesc:
      "Dedicated taxi services for temple visits and ghat tours in Varanasi with safe and comfortable travel.",
    specs: [
      "Temple Tours",
      "Ghat Visits",
      "Airport Service",
      "AC Vehicles",
      "Group Travel",
      "Custom Packages",
    ],
    price: "Customized Pricing",
  },
];

/* ================= COMPONENT ================= */

const CoverageGrid = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="relative bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1F2937]">
            Our Travel Coverage
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coverageData.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -6 }}
              className="group bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 left-4 text-white">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                <p className="text-sm text-gray-600">{item.shortDesc}</p>

                {/* Specs Preview */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {item.specs.slice(0, 4).map((spec, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-xs bg-gray-50 px-2 py-1.5 rounded-md border"
                    >
                      <FaCheckCircle className="text-green-500 text-[10px]" />
                      {spec}
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center pt-3 border-t">
                  <span className="text-xs text-orange-500 font-medium">
                    {item.price}
                  </span>

                  <button
                    onClick={() => setActive(item)}
                    className="text-xs bg-[#1F4ED8] hover:bg-[#1E40AF] text-white px-3 py-1.5 rounded-full transition"
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
      onClick={() => setActive(null)}   // ✅ Close on outside click
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}  // ✅ Prevent closing when clicking inside
        className="relative bg-white w-full max-w-4xl rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto"
      >

        {/* Close Button (Inside Modal Properly) */}
        <button
          onClick={() => setActive(null)}
          className="absolute top-4 right-4 z-10 text-gray-400 hover:text-[#1F2937] transition"
        >
          <FaTimes size={20} />
        </button>

        <div className="grid md:grid-cols-2">

          {/* Image */}
          <div className="h-56 sm:h-64 md:h-auto">
            <img
              src={active.image}
              alt={active.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-5 sm:p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold text-[#1F2937]">
              {active.title}
            </h3>

            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              {active.longDesc}
            </p>

            <div className="my-6 h-px bg-gray-200" />

            {/* Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {active.specs.map((spec, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <FaCheckCircle className="text-green-500 text-xs" />
                  {spec}
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 text-orange-500 font-medium">
              <FaRupeeSign />
              {active.price}
            </div>

            <Link to="/contact">
              <button className="mt-6 w-full bg-[#1F4ED8] hover:bg-[#1E40AF] text-white py-3 rounded-lg font-medium transition shadow-md">
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