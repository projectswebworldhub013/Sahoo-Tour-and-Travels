import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  FaCarSide,
  FaUsers,
  FaClock,
  FaRoad,
} from "react-icons/fa";
/* 🔷 HERO BACKGROUND IMAGE IMPORTS */
import heroCity from "../assets/images/hero/h11.jpg";
import heroHighway from "../assets/images/hero/new.jpg";
import heroFamily from "../assets/images/hero/h4.jpg";

/* 🔷 SLIDE DATA */
const slides = [
  {
    image: heroCity,
    topLabel: "Urban Travel",
    titleSmall: "SAHOO TOUR",
    titleLarge: "AND TRAVELS",
    number: "01",
    heading: "Reliable City & Corporate Travel",
    sideText:
      "Efficient and punctual taxi solutions for corporate executives, airport transfers, and daily city commuting.",
    description:
      "Professional taxi services for corporate travel, airport transfers, and daily city rides across Delhi NCR with punctual drivers, clean vehicles, and seamless booking support.",
  },
  {
    image: heroHighway,
    topLabel: "Outstation",
    titleSmall: "SAHOO TOUR",
    titleLarge: "AND TRAVELS",
    number: "02",
    heading: "Comfortable Long Distance Journeys",
    sideText:
      "Enjoy smooth, safe, and relaxed highway travel with experienced drivers and well-maintained vehicles.",
    description:
      "Well-maintained vehicles and experienced drivers for safe and smooth outstation travel across India, ensuring comfort, reliability, and stress-free long-distance road journeys.",
  },
  {
    image: heroFamily,
    topLabel: "Tours",
    titleSmall: "SAHOO TOUR",
    titleLarge: "AND TRAVELS",
    number: "03",
    heading: "Memorable Family & Group Tours",
    sideText:
      "Thoughtfully designed tour packages for families and groups with comfort, safety, and peace of mind.",
    description:
      "Customized tour packages designed for families, groups, and corporate outings with complete peace of mind, flexible planning, comfortable travel, and personalized service experiences.",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setActive((prev) => (prev + 1) % slides.length),
      6000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-14 relative w-full h-[95vh] min-h-[600px] overflow-hidden">

      {/* 🔷 BACKGROUND SLIDER */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            active === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className={`w-full h-full bg-cover bg-center transform transition-transform duration-[6000ms] ease-linear ${
              active === index ? "scale-110" : "scale-100"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        </div>
      ))}

      {/* 🔷 CINEMATIC OVERLAY (PERFECT BALANCE) */}
      <div className="absolute inset-0 z-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/10" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* 🔷 CONTENT */}
      <div className="relative z-30 max-w-[1400px] mx-auto h-full px-6 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-10">

          {/* 🔹 LEFT CONTENT */}
          
<div className="mt-8 md:mt-20 flex flex-col justify-center mx-0 md:mx-6">
  {/* TOP LABEL */}
  <div className="flex items-center gap-3 mb-4">
    <span className="text-xs uppercase tracking-widest text-[#60A5FA]">
      Trusted Travel Partner
    </span>
    <span className="w-10 h-[1px] bg-[#60A5FA]" />
    <span className="text-xs text-gray-300">
      {slides[active].topLabel}
    </span>
  </div>

  {/* MAIN HEADING */}
  <h1 className="font-bold leading-tight text-white drop-shadow-lg">
    <span className="block text-3xl md:text-4xl xl:text-5xl">
      {slides[active].titleSmall}
    </span>
    <span className="block text-3xl font-semibold md:text-4xl xl:text-5xl text-[#60A5FA]">
      {slides[active].titleLarge}
    </span>
  </h1>

  {/* DESCRIPTION */}
  <p className="mt-6 max-w-xl text-gray-200 text-sm md:text-base leading-relaxed w-118">
    {slides[active].description}
  </p>

  {/* CTA BUTTONS */}
  <div className="mt-8 flex flex-wrap gap-4">
    <Link
      to="/contact"
      className="px-7 py-3 rounded-md bg-[#2563EB] text-white font-medium hover:bg-[#1D4ED8] transition"
    >
      Book Your Ride
    </Link>
    <Link
      to="/about"
      className="px-7 py-3 rounded-md border border-white/40 text-white font-medium hover:bg-white/10 transition"
    >
      Learn More
    </Link>
  </div>

  {/* 🔷 STATS SECTION */}
  <div className="hidden md:flex mt-8 max-w-2xl">
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">

    {/* STAT CARD */}
    <div className="flex flex-col justify-center items-center gap-2 p-4 ">
      <FaClock className="text-[#60A5FA] text-2xl" />
      <div className="text-white text-lg font-semibold leading-none">
        20+ Years
      </div>
      <div className="text-gray-400 text-sm">
        Experience
      </div>
    </div>

    {/* STAT CARD */}
    <div className="flex flex-col gap-2 p-4 justify-center items-center">
      <FaUsers className="text-[#60A5FA] text-2xl" />
      <div className="text-white text-lg font-semibold leading-none">
        10K+
      </div>
      <div className="text-gray-400 text-sm">
        Happy Clients
      </div>
    </div>

    {/* STAT CARD */}
    <div className="flex flex-col gap-2 p-4 justify-center items-center">
      <FaCarSide className="text-[#60A5FA] text-2xl" />
      <div className="text-white text-lg font-semibold leading-none">
        50+
      </div>
      <div className="text-gray-400 text-sm">
        Vehicles
      </div>
    </div>

    {/* STAT CARD */}
    <div className="flex flex-col gap-2 p-4 justify-center items-center">
      <FaRoad className="text-[#60A5FA] text-2xl" />
      <div className="text-white text-lg font-semibold leading-none">
        24×7
      </div>
      <div className="text-gray-400 text-sm">
        Support
      </div>
    </div>

  </div>
</div>
</div>

          {/* 🔹 RIGHT CONTENT */}
          <div className="mt-34 hidden lg:flex justify-end relative mr-20">
            <div key={active} className="text-right max-w-md">
              <div className="text-[90px] xl:text-[120px] font-bold text-[#22C55E]/30 leading-none text-center">
                {slides[active].number}
              </div>

              <h3 className="text-white text-xl font-semibold mt-2 w-72 text-center">
                {slides[active].heading}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-300 w-72 text-center">
                {slides[active].sideText}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 🔷 SOCIAL BAR */}
      <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-4">
        <span className="w-[1px] h-16 bg-white/30" />
        <FaFacebookF className="text-white hover:scale-110 transition cursor-pointer" />
        <FaInstagram className="text-white hover:scale-110 transition cursor-pointer" />
        <FaTwitter className="text-white hover:scale-110 transition cursor-pointer" />
        <span className="w-[1px] h-16 bg-white/30" />
        <span className="text-xs tracking-widest text-gray-300 rotate-90">
          FOLLOW US
        </span>
      </div>

      {/* 🔷 SLIDER DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              active === index
                ? "w-6 bg-white"
                : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}