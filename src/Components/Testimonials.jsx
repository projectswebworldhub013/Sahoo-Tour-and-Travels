// src/components/Testimonials.jsx

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUserCircle,
  FaStar,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import bgImage from "../assets/images/testimonials-bg.jpg"; // <-- ADD YOUR IMAGE HERE

/* ================= TESTIMONIAL DATA ================= */

const testimonials = [
  {
    name: "Rohit Malhotra",
    text:
      "Booked an outstation cab with Sahoo Tour & Travels for Jaipur. Clean car, polite driver, and very smooth highway journey. Highly reliable service.",
  },
  {
    name: "Anjali Verma",
    text:
      "Airport pickup was perfectly on time, even during early morning hours. Professional driver and stress-free travel experience.",
  },
  {
    name: "Suresh Yadav",
    text:
      "Used their local taxi service in Delhi for a full day. Transparent pricing, comfortable ride, and excellent coordination.",
  },
  {
    name: "Neha Kapoor",
    text:
      "We booked a family tour package through Sahoo Tour & Travels. Everything was well planned, from travel to sightseeing.",
  },
  {
    name: "Amit Singh",
    text:
      "Corporate travel arrangements were handled smoothly. Clean vehicles, disciplined drivers, and great support team.",
  },
  {
    name: "Pooja Sharma",
    text:
      "One-way cab booking was quick and affordable. The ride was comfortable and the driver was very courteous.",
  },
];

/* ================= COMPONENT ================= */

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const AUTO_SLIDE_DELAY = 5000;

  useEffect(() => {
    const timer = setInterval(nextSlide, AUTO_SLIDE_DELAY);
    return () => clearInterval(timer);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  /* GET 3 VISIBLE CARDS */
  const visibleTestimonials = [
    testimonials[index % testimonials.length],
    testimonials[(index + 1) % testimonials.length],
    testimonials[(index + 2) % testimonials.length],
  ];

  return (
    <section
      className="relative py-16 overflow-hidden bg-[#F8FAFC]"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* ================= HEADING ================= */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#1FA75A] mb-2">
            Customer Reviews
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937]">
            Trusted Travel Experiences with{" "}
            <span className="text-[#1F4ED8]">Sahoo Tour & Travels</span>
          </h2>

          <p className="text-[#6B7280] mt-4 text-sm sm:text-base">
            Real feedback from customers who rely on us for safe, comfortable,
            and reliable travel services.
          </p>
        </div>

        {/* ================= DESKTOP (FIXED SLIDE) ================= */}
        <div className="hidden lg:block relative overflow-hidden group">

          {/* NAV BUTTONS */}
          <button
            onClick={prevSlide}
            className="absolute -left-14 top-1/2 -translate-y-1/2
            w-10 h-10 rounded-full flex items-center justify-center
            bg-white border border-[#E5E7EB]
            text-[#1F4ED8]
            shadow hover:bg-[#1F4ED8] hover:text-white transition z-20"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-14 top-1/2 -translate-y-1/2
            w-10 h-10 rounded-full flex items-center justify-center
            bg-white border border-[#E5E7EB]
            text-[#1F4ED8]
            shadow hover:bg-[#1F4ED8] hover:text-white transition z-20"
          >
            <FaChevronRight />
          </button>

          {/* SLIDING ROW */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: 120, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -120, opacity: 0 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="grid grid-cols-3 gap-6"
            >
              {visibleTestimonials.map((item, i) => (
                <TestimonialCard key={i} item={item} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ================= MOBILE (UNCHANGED) ================= */}
        <div className="lg:hidden max-w-md mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <TestimonialCard item={testimonials[index]} />
            </motion.div>
          </AnimatePresence>

          {/* DOTS */}
          <div className="flex justify-center gap-1.5 mt-5">
            {testimonials.map((_, i) => (
              <span
                key={i}
                onClick={() => setIndex(i)}
                className={`w-1.5 h-1.5 rounded-full cursor-pointer transition
                ${i === index ? "bg-[#1F4ED8]" : "bg-[#CBD5E1]"}`}
              />
            ))}
          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="text-center mt-14">
          <Link to="/contact">
            <button
              className="px-10 py-3 rounded-full
              bg-[#1F4ED8] text-white font-semibold
              hover:bg-[#1E40AF]
              transition shadow-lg hover:scale-105"
            >
              Book Your Ride Now
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}

/* ================= CARD ================= */

const TestimonialCard = ({ item }) => (
  <motion.div
    whileHover={{ y: -6 }}
    transition={{ duration: 0.25 }}
    className="relative bg-white rounded-2xl
    p-6 sm:p-7
    border border-[#E5E7EB]
    shadow-md hover:shadow-xl
    overflow-hidden"
  >
    {/* Glow */}
    <div className="absolute inset-0 bg-[rgba(31,78,216,0.08)] opacity-0 hover:opacity-100 transition pointer-events-none" />

    {/* Stars */}
    <div className="flex gap-1 text-[#F97316] mb-3 text-sm">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} />
      ))}
    </div>

    {/* Text */}
    <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
      “{item.text}”
    </p>

    {/* User */}
    <div className="flex items-center gap-3">
      <div className="w-11 h-11 rounded-full bg-[#1F4ED8] text-white
      flex items-center justify-center text-xl">
        <FaUserCircle />
      </div>

      <div>
        <h4 className="text-sm font-semibold text-[#1F2937]">
          {item.name}
        </h4>
        <p className="flex items-center gap-1 text-xs text-[#1FA75A]">
          <FaCheckCircle />
          Verified Traveler
        </p>
      </div>
    </div>
  </motion.div>
);