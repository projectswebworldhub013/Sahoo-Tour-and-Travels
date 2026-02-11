import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaArrowLeft,
  FaImages,
  FaCogs,
  FaClock,
  FaShieldAlt,
  FaStar,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaPhoneAlt,
  FaCalendarCheck,
} from "react-icons/fa";

import { servicesData } from "../data/servicesData";
import CTASection from "../Components/CTASection";

export default function ServiceDetail() {
  const { serviceSlug } = useParams();

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
const [isBookingOpen, setIsBookingOpen] = useState(false);

const openBooking = () => setIsBookingOpen(true);
const closeBooking = () => setIsBookingOpen(false);
  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const service = servicesData.find(
    (item) => item.path.split("/").pop() === serviceSlug
  );

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold text-[#1F2937] bg-[#FFFFFF]">
        Service Not Found
      </div>
    );
  }

  return (
    <>
    <section className="mt-28 w-full bg-[#FFFFFF] text-[#1F2937]">
      {/* ================= HERO ================= */}
      <div
        className="relative h-[80vh] w-full bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url(${service.images[0]})` }}
      >
        <div className="absolute inset-0 bg-[#000000]/60" />

        <div className="relative max-w-3xl px-6 md:px-12 pb-10 text-white">
          <Link
            to="/"
            className="inline-flex items-center gap-2 mb-6 text-sm text-[#E5E7EB] hover:text-[#F97316]"
          >
            <FaArrowLeft /> Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            {service.title}
          </h1>

          <p className="text-lg text-[#E5E7EB] leading-relaxed">
            {service.shortDescription}
          </p>
          {/* <button
  onClick={openBooking}
  className="mt-8 inline-flex items-center gap-3 bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-all shadow-lg hover:shadow-xl"
>
  Book Now
</button> */}
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* ================= LEFT ================= */}
          <div className="lg:col-span-2 space-y-14">
            {/* ===== SERVICE OVERVIEW ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3 text-[#1F4ED8]">
                <FaCogs />
                Service Overview
              </h2>

              <p className="leading-relaxed text-[17px] text-[#6B7280]">
                {service.longDescription}
              </p>
            </div>

            {/* ===== QUICK HIGHLIGHTS ===== */}
            <div>
              <h3 className="text-xl font-semibold mb-8">
                Quick Highlights
              </h3>

              <div className="grid sm:grid-cols-2 gap-6">
                {service.quickPoints.map((point, i) => (
                  <div
                    key={i}
                    className="relative bg-[#FFFFFF] rounded-2xl p-6 border border-[#E5E7EB] shadow-sm hover:shadow-md transition"
                  >
                    <span className="absolute inset-0 rounded-2xl bg-[rgba(31,78,216,0.08)] opacity-0 hover:opacity-100 transition" />

                    <div className="relative flex items-start gap-4">
                      <div className="w-11 h-11 rounded-full bg-[#1FA75A]/10 flex items-center justify-center">
                        <FaCheckCircle className="text-[#1FA75A]" />
                      </div>

                      <div>
                        <p className="font-semibold text-[#1F2937]">
                          {point.title}
                        </p>

                        <p className="text-sm text-[#6B7280] mt-1 leading-relaxed">
                          {point.description}
                        </p>

                        <div className="mt-3 h-1.5 w-full bg-[#E5E7EB] rounded-full overflow-hidden">
                          <div className="h-full w-[90%] bg-[#1F4ED8]" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDEBAR ================= */}
          <div className="bg-[#F8FAFC] rounded-2xl border border-[#E5E7EB] p-6 space-y-5">
            {service.specifications.map((item, i) => (
              <div
                key={i}
                className="relative flex items-start gap-4 bg-[#FFFFFF] rounded-xl p-4 border border-[#E5E7EB]"
              >
                <span className="absolute left-0 top-0 h-full w-[4px] bg-[#1F4ED8] rounded-l-xl" />

                <FaCogs className="text-[#1F4ED8] mt-1" />

                <div>
                  <p className="text-xs uppercase tracking-wide text-[#6B7280]">
                    {item.heading}
                  </p>
                  <p className="font-semibold text-[#1F2937] text-sm">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

            {/* ===== STATS ===== */}
            <div className="pt-6 border-t border-[#E5E7EB] grid grid-cols-3 gap-4 text-center">
              {[
                { label: "Availability", value: "24/7", icon: <FaClock /> },
                { label: "Safety", value: "100%", icon: <FaShieldAlt /> },
                { label: "Rating", value: "5★", icon: <FaStar /> },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#FFFFFF] rounded-xl p-4 border border-[#E5E7EB]"
                >
                  <div className="text-[#F97316] flex justify-center mb-1">
                    {item.icon}
                  </div>
                  <p className="text-sm font-bold">{item.value}</p>
                  <p className="text-[11px] uppercase tracking-wide text-[#6B7280]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

<div className="mt-6 flex flex-col sm:flex-row gap-3 w-full">
  {/* Book Button - Blue */}
  <button
    onClick={openBooking}
    className="flex-1 inline-flex items-center justify-center gap-2
               bg-[#1F4ED8] hover:bg-[#1E40AF]
               text-white py-3 px-5 rounded-lg
               text-sm font-semibold tracking-wide
               transition-all shadow-md hover:shadow-lg cursor-pointer"
  >
    <FaCalendarCheck className="text-base" />
    Book Now
  </button>

  {/* Contact Button - Orange */}
  <Link
    to="/contact"
    className="flex-1 inline-flex items-center justify-center gap-2
               border-2 border-[#F97316]
               text-[#F97316] hover:bg-[#F97316] hover:text-white
               py-3 px-5 rounded-lg
               text-sm font-semibold tracking-wide
               transition-all shadow-sm hover:shadow-md"
  >
    <FaPhoneAlt className="text-sm" />
    Contact Us
  </Link>
</div>
          </div>
        </div>

        {/* ================= GALLERY ================= */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-10 flex items-center gap-3 text-[#1F4ED8]">
            <FaImages />
            Service Gallery
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {service.images.map((img, i) => (
              <div
                key={i}
                onClick={() => {
                  setActiveIndex(i);
                  setIsOpen(true);
                }}
                className="cursor-pointer overflow-hidden rounded-2xl border border-[#E5E7EB] group"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-700"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ================= MODAL ================= */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md px-4">
            <div className="absolute inset-0" onClick={closeModal} />

            <div
              className={`relative w-full max-w-5xl bg-[#FFFFFF] border border-[#E5E7EB] rounded-3xl p-4 md:p-6 transition-all duration-300 ${
                isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"
              }`}
            >
              <button
                onClick={closeModal}
                className="absolute -top-4 -right-4 bg-[#FFFFFF] border border-[#E5E7EB] p-3 rounded-full hover:text-[#F97316]"
              >
                <FaTimes />
              </button>

              <div className="relative overflow-hidden rounded-2xl">
                <div
                  className="flex transition-transform duration-700"
                  style={{
                    transform: `translateX(-${activeIndex * 100}%)`,
                  }}
                >
                  {service.images.map((img, i) => (
                    <div
                      key={i}
                      className="min-w-full flex items-center justify-center bg-[#F8FAFC]"
                    >
                      <img
                        src={img}
                        alt=""
                        className="max-h-[75vh] w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() =>
                  setActiveIndex(
                    activeIndex === 0
                      ? service.images.length - 1
                      : activeIndex - 1
                  )
                }
                className="absolute top-1/2 -translate-y-1/2 left-3 bg-white border border-[#E5E7EB] p-3 rounded-full hover:text-[#1F4ED8]"
              >
                <FaChevronLeft />
              </button>

              <button
                onClick={() =>
                  setActiveIndex(
                    activeIndex === service.images.length - 1
                      ? 0
                      : activeIndex + 1
                  )
                }
                className="absolute top-1/2 -translate-y-1/2 right-3 bg-white border border-[#E5E7EB] p-3 rounded-full hover:text-[#1F4ED8]"
              >
                <FaChevronRight />
              </button>

              <div className="mt-4 text-center text-sm text-[#6B7280]">
                {activeIndex + 1} / {service.images.length}
              </div>
            </div>
          </div>
        )}
      </div>
      {isBookingOpen && (
  <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-lg px-4">
    {/* Overlay click */}
    <div className="absolute inset-0" onClick={closeBooking} />

    {/* MODAL */}
    <div className="relative w-full max-w-lg bg-[#FFFFFF] rounded-3xl border border-[#E5E7EB]
                    shadow-2xl overflow-hidden
                    animate-[scaleIn_0.35s_ease-out]">

      {/* HEADER */}
      <div className="relative px-6 py-5 bg-gradient-to-r from-[#1F4ED8] to-[#1E40AF] text-white">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <FaCalendarCheck />
          Book {service.title}
        </h3>
        <p className="text-sm text-white/80 mt-1">
          Quick booking • Instant callback
        </p>

        {/* Close */}
        <button
          onClick={closeBooking}
          className="absolute top-4 right-4 text-white/80 hover:text-white"
        >
          <FaTimes />
        </button>
      </div>

      {/* BODY */}
      <div className="px-6 py-6 space-y-6">

        {/* FORM */}
        <form
          action="https://formsubmit.co/info@sahootourandtravelsdelhi.co.in"
          method="POST"
          className="space-y-5"
        >
          {/* Hidden */}
          <input
            type="hidden"
            name="_subject"
            value={`New Booking Request - ${service.title}`}
          />
          <input type="hidden" name="_captcha" value="false" />

          {/* Name */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-[#6B7280]">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="mt-2 w-full rounded-xl border border-[#E5E7EB]
                         px-4 py-2.5 text-sm
                         focus:outline-none focus:ring-2 focus:ring-[#1F4ED8]"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-[#6B7280]">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              required
              className="mt-2 w-full rounded-xl border border-[#E5E7EB]
                         px-4 py-2.5 text-sm
                         focus:outline-none focus:ring-2 focus:ring-[#1F4ED8]"
            />
          </div>

          {/* Date */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-[#6B7280]">
              Travel Date
            </label>
            <input
              type="date"
              name="travel_date"
              required
              className="mt-2 w-full rounded-xl border border-[#E5E7EB]
                         px-4 py-2.5 text-sm"
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-[#6B7280]">
              Additional Details
            </label>
            <textarea
              name="message"
              rows="3"
              className="mt-2 w-full rounded-xl border border-[#E5E7EB]
                         px-4 py-2.5 text-sm
                         focus:outline-none focus:ring-2 focus:ring-[#1F4ED8]"
              placeholder="Pickup, drop, passengers, etc."
            />
          </div>

          {/* DIVIDER */}
          <div className="h-px bg-[#E5E7EB]" />

          {/* CTA */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2
                       bg-[#F97316] hover:bg-[#EA580C]
                       text-white py-3 rounded-xl
                       text-sm font-semibold tracking-wide
                       transition-all shadow-md hover:shadow-lg"
          >
            <FaCalendarCheck />
            Submit Booking Request
          </button>
        </form>
      </div>
    </div>
  </div>
)}
    </section>
    <CTASection/>
    </>
  );
}