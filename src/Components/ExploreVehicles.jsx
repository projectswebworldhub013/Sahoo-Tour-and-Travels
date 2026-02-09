import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaGasPump,
  FaRoad,
  FaCogs,
  FaTimes,
  FaCheckCircle,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

/* ================= IMAGE IMPORTS ================= */
import innova from "../assets/images/vehicles/innova.jpg";
import city from "../assets/images/vehicles/city.jpg";
import creta from "../assets/images/vehicles/creta.jpg";
import ertiga from "../assets/images/vehicles/ertiga.jpg";
import seltos from "../assets/images/vehicles/seltos.jpg";
import dzire from "../assets/images/vehicles/dzire.jpg";
import fortuner from "../assets/images/vehicles/fortuner.jpg";
/* ================= VEHICLE DATA ================= */
const vehicles = [
  {
    name: "Toyota Innova Crysta",
    image: innova,
    badge: "Best Seller",
    mileage: "14 km/l",
    fuel: "Diesel",
    transmission: "Manual",
    price: "₹3,500 / day",
    description:
      "Toyota Innova Crysta is a premium MPV designed for long outstation journeys, family vacations, and corporate travel, offering exceptional comfort, spacious seating, smooth suspension, and reliable performance on highways.",
    tags: ["Spacious", "Outstation", "Comfort Ride"],
  },
  {
    name: "Honda City",
    image: city,
    badge: "Low Mileage",
    mileage: "18 km/l",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "₹2,800 / day",
    description:
      "Honda City is an elegant and refined sedan known for its smooth automatic transmission, excellent fuel efficiency, plush interiors, and stable highway performance, making it ideal for city rides and long-distance travel.",
    tags: ["Luxury Sedan", "Fuel Efficient", "Smooth Drive"],
  },
  {
    name: "Hyundai Creta",
    image: creta,
    badge: "Popular",
    mileage: "17 km/l",
    fuel: "Petrol",
    transmission: "Manual",
    price: "₹3,000 / day",
    description:
      "Hyundai Creta is a stylish and powerful SUV that offers commanding road presence, premium interiors, advanced safety features, and a comfortable driving experience suitable for both city traffic and rough highways.",
    tags: ["SUV", "Powerful", "Premium"],
  },
  {
    name: "Maruti Ertiga",
    image: ertiga,
    badge: "Family Choice",
    mileage: "20 km/l",
    fuel: "CNG",
    transmission: "Manual",
    price: "₹2,600 / day",
    description:
      "Maruti Ertiga is a highly economical and family-friendly MPV that provides excellent mileage, flexible seating capacity, low running costs, and dependable performance, making it perfect for group travel and budget trips.",
    tags: ["Family", "Economical", "Reliable"],
  },
  {
    name: "Kia Seltos",
    image: seltos,
    badge: "New",
    mileage: "16 km/l",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "₹3,200 / day",
    description:
      "Kia Seltos is a modern compact SUV loaded with smart technology, premium interiors, advanced infotainment features, and refined driving comfort, offering a stylish and confident experience for urban and highway travel.",
    tags: ["Tech Loaded", "Modern", "Comfort"],
  },
  {
    name: "Maruti Swift Dzire",
    image: dzire, // import image accordingly
    badge: "Value Pick",
    mileage: "22 km/l",
    fuel: "Petrol",
    transmission: "Manual",
    price: "₹2,200 / day",
    description:
      "Maruti Swift Dzire is a practical and reliable sedan offering excellent fuel efficiency, easy handling, comfortable seating, and low maintenance costs, making it a smart choice for city usage and short highway trips.",
    tags: ["Budget Friendly", "City Ride", "Reliable"],
  },
  {
    name: "Toyota Fortuner",
    image: fortuner, // import image accordingly
    badge: "Premium SUV",
    mileage: "12 km/l",
    fuel: "Diesel",
    transmission: "Automatic",
    price: "₹5,000 / day",
    description:
      "Toyota Fortuner is a premium full-size SUV built for power and luxury, featuring a bold design, commanding road presence, spacious interiors, and superior performance, ideal for long journeys and high-end travel needs.",
    tags: ["Luxury SUV", "Powerful", "Premium Travel"],
  },
];

/* ================= COMPONENT ================= */
export default function ExploreVehicles() {
  const [selectedCar, setSelectedCar] = useState(null);

  return (
    <>
      <section className="bg-[#F8FAFC] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937]">
              Explore Our Vehicles
            </h2>
          </div>

          {/* SLIDER */}
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation
            speed={1000}
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {vehicles.map((car, index) => (
              <SwiperSlide key={index}>
                <VehicleCard car={car} onClick={() => setSelectedCar(car)} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedCar && (
          <VehicleModal
            car={selectedCar}
            onClose={() => setSelectedCar(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* ================= VEHICLE CARD ================= */
function VehicleCard({ car, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer group"
    >
      <div className="relative overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-[190px] object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <span className="absolute top-3 left-3 bg-[#1FA75A] text-white text-xs px-3 py-1 rounded-full">
          {car.badge}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-[#1F2937] mb-3">{car.name}</h3>

        <div className="flex justify-between text-xs text-[#6B7280] mb-4">
          <span className="flex items-center gap-1">
            <FaRoad className="text-[#1F4ED8]" /> {car.mileage}
          </span>
          <span className="flex items-center gap-1">
            <FaGasPump className="text-[#1F4ED8]" /> {car.fuel}
          </span>
          <span className="flex items-center gap-1">
            <FaCogs className="text-[#1F4ED8]" /> {car.transmission}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="font-bold text-lg text-[#1F2937]">
            {car.price}
          </span>
          <span className="text-[#1F4ED8] text-sm font-medium">
            View Details →
          </span>
        </div>
      </div>
    </div>
  );
}

/* ================= MODAL ================= */



function VehicleModal({ car, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 50, scale: 0.95 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 50, scale: 0.95 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative bg-white w-full max-w-md rounded-[26px] shadow-[0_40px_100px_rgba(0,0,0,0.35)] overflow-hidden"
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white shadow flex items-center justify-center hover:bg-[#1F4ED8] hover:text-white transition"
        >
          <FaTimes size={14} />
        </button>

        {/* IMAGE */}
        <div className="relative">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-[230px] object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="p-6">
          {/* TITLE */}
          <h3 className="text-xl font-semibold text-[#1F2937]">
            {car.name}
          </h3>

          {/* LOCATION STYLE SUBTEXT */}
          <p className="text-sm text-[#6B7280] mt-1">
            Comfortable • Reliable • Premium Ride
          </p>

          {/* DESCRIPTION */}
          <p className="text-sm text-[#6B7280] leading-relaxed mt-4">
            {car.description}
          </p>

          {/* SPECS ROW */}
          <div className="grid grid-cols-3 gap-3 mt-6">
            <SpecMini
              icon={<FaRoad />}
              value={car.mileage}
              label="Mileage"
            />
            <SpecMini
              icon={<FaGasPump />}
              value={car.fuel}
              label="Fuel"
            />
            <SpecMini
              icon={<FaCogs />}
              value={car.transmission}
              label="Gear"
            />
          </div>

          {/* DIVIDER */}
          <div className="h-px bg-[#E5E7EB] my-6" />

          {/* FOOTER */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-[#6B7280]">Starting from</p>
              <p className="text-lg font-bold text-[#1F2937]">
                {car.price}
              </p>
            </div>

            <Link
              to="/contact"
              className="bg-[#1F4ED8] hover:bg-[#1E40AF] text-white px-6 py-2.5 rounded-full text-sm font-medium transition shadow"
            >
              Get Enquiry
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ================= MINI SPEC ================= */
function SpecMini({ icon, value, label }) {
  return (
    <div className="text-center">
      <div className="text-[#1F4ED8] flex justify-center mb-1">
        {icon}
      </div>
      <p className="text-sm font-medium text-[#1F2937]">
        {value}
      </p>
      <p className="text-[11px] text-[#6B7280]">
        {label}
      </p>
    </div>
  );
}


/* ================= SPEC CARD ================= */
function SpecCard({ icon, label, value }) {
  return (
    <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl p-4 flex flex-col items-center text-center hover:shadow-md transition">
      <div className="text-[#1F4ED8] text-xl mb-1">{icon}</div>
      <p className="text-xs text-[#6B7280]">{label}</p>
      <p className="text-sm font-semibold text-[#1F2937]">{value}</p>
    </div>
  );
}

