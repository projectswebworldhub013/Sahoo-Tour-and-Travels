// src/components/AboutHero.jsx
import React from "react";
import img from "../assets/images/about-hero.jpg"; // travel / highway / cab image

const AboutHero = () => {
  return (
    <section
      className="mt-32 relative w-full min-h-[80vh] md:min-h-[85vh] flex items-center"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">

            <p className="uppercase tracking-widest text-xs sm:text-sm text-[#CBD5E1] mb-3">
              About Sahoo Tour & Travels
            </p>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-snug sm:leading-tight text-white">
              Reliable Journeys, <br />
              <span className="text-[#1F4ED8]">
                Crafted with Care
              </span>
            </h1>

            <p className="mt-5 sm:mt-6 max-w-xl mx-auto md:mx-0 text-sm sm:text-base leading-relaxed text-[#E5E7EB]">
              Sahoo Tour & Travels is a trusted travel partner offering local
              taxi services, airport transfers, outstation trips, and customized
              tour packages. We focus on comfort, punctuality, and customer
              satisfaction—every single ride.
            </p>
          </div>

          {/* RIGHT CONTENT */}
          <div className="hidden md:flex justify-end mb-24">
            <p className="max-w-sm text-sm leading-relaxed text-[#CBD5E1] text-center md:text-left">
              With well-maintained vehicles and experienced drivers, we ensure
              safe highway travel, smooth city rides, and stress-free long
              journeys. Our commitment is simple—reliable service, transparent
              pricing, and memorable travel experiences.
            </p>
          </div>
        </div>

        {/* HIGHLIGHT POINTS */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-xs sm:text-sm uppercase tracking-wide text-[#CBD5E1]">

          <div className="border-b border-[#E5E7EB]/30 pb-2 hover:text-white transition">
            <span className="text-[#F97316] mr-2">01.</span>
            Local, Airport & Outstation Travel
          </div>

          <div className="border-b border-[#E5E7EB]/30 pb-2 hover:text-white transition">
            <span className="text-[#F97316] mr-2">02.</span>
            Clean Vehicles & Professional Drivers
          </div>

          <div className="border-b border-[#E5E7EB]/30 pb-2 hover:text-white transition">
            <span className="text-[#F97316] mr-2">03.</span>
            Safe, On-Time & Comfortable Journeys
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;