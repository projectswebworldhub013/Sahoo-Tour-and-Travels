import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import {
  FaGasPump,
  FaRoad,
  FaCogs,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

/* SAMPLE VEHICLE DATA */
const vehicles = [
  {
    name: "Toyota Innova Crysta",
    image: "/vehicles/innova.jpg",
    badge: "Best Seller",
    mileage: "14 km/l",
    fuel: "Diesel",
    transmission: "Manual",
    price: "₹3,500 / day",
  },
  {
    name: "Honda City",
    image: "/vehicles/city.jpg",
    badge: "Low Mileage",
    mileage: "18 km/l",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "₹2,800 / day",
  },
  {
    name: "Hyundai Creta",
    image: "/vehicles/creta.jpg",
    badge: "Popular",
    mileage: "17 km/l",
    fuel: "Petrol",
    transmission: "Manual",
    price: "₹3,000 / day",
  },
  {
    name: "Maruti Ertiga",
    image: "/vehicles/ertiga.jpg",
    badge: "Family Choice",
    mileage: "20 km/l",
    fuel: "CNG",
    transmission: "Manual",
    price: "₹2,600 / day",
  },
  {
    name: "Kia Seltos",
    image: "/vehicles/seltos.jpg",
    badge: "New",
    mileage: "16 km/l",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "₹3,200 / day",
  },
];

export default function ExploreVehicles() {
  return (
    <section className="bg-[#F8FAFC] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937]">
            Explore Our Vehicles
          </h2>
        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-10"
        >
          {vehicles.map((car, i) => (
            <SwiperSlide key={i}>
              <VehicleCard car={car} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

/* ================= VEHICLE CARD ================= */
function VehicleCard({ car }) {
  return (
    <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* IMAGE */}
      <div className="relative">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-[190px] object-cover group-hover:scale-[1.04] transition-transform duration-500"
        />

        {/* BADGE */}
        <span className="absolute top-3 left-3 bg-[#1FA75A] text-white text-xs px-3 py-1 rounded-full shadow">
          {car.badge}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="font-semibold text-[#1F2937] text-base mb-2">
          {car.name}
        </h3>

        {/* ICON ROW */}
        <div className="flex items-center justify-between text-xs text-[#6B7280] mb-4">
          <div className="flex items-center gap-1">
            <FaRoad className="text-[#1F4ED8]" />
            {car.mileage}
          </div>
          <div className="flex items-center gap-1">
            <FaGasPump className="text-[#1F4ED8]" />
            {car.fuel}
          </div>
          <div className="flex items-center gap-1">
            <FaCogs className="text-[#1F4ED8]" />
            {car.transmission}
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-[#1F2937]">
            {car.price}
          </span>

          <button className="text-sm font-medium text-[#1F4ED8] hover:text-[#1E40AF] transition">
            View Details →
          </button>
        </div>
      </div>
    </div>
  );
}