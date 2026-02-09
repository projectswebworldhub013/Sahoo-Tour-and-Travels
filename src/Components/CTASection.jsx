import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelopeOpenText,
  FaCarSide,
  FaRoute,
  FaMapMarkedAlt,
  FaShieldAlt,
} from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="relative bg-[#F8FAFC] py-14 overflow-hidden">

      {/* ===== Soft Ambient Glow ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[620px] h-[620px] bg-[rgba(31,78,216,0.08)] blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[360px] h-[360px] bg-[#F97316]/20 blur-[100px] rounded-full" />
      </div>

      {/* ===== Floating Icons ===== */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <IconBubble icon={<FaCarSide />} className="top-16 left-[10%]" />
        <IconBubble icon={<FaRoute />} className="top-24 right-[12%]" />
        <IconBubble icon={<FaMapMarkedAlt />} className="bottom-20 left-[12%]" />
        <IconBubble icon={<FaShieldAlt />} className="bottom-24 right-[10%]" />
      </div>

      {/* ===== Content ===== */}
      <div className="relative max-w-4xl mx-auto text-center px-6">

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-[#1F2937] leading-tight">
          Travel Smart. Travel Safe.{" "}
          <span className="text-[#1F4ED8]">
            Travel with Sahoo Tour & Travels
          </span>
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-[#6B7280] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          From local city rides and airport transfers to outstation tours and
          corporate travel, Sahoo Tour & Travels ensures reliable vehicles,
          professional drivers, and a smooth, stress-free journey every time.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">

          {/* Call Now */}
          <a
            href="tel:+919999367232"
            className="
              flex items-center gap-3
              px-9 py-3
              rounded-full
              bg-[#1F4ED8]
              text-white
              font-semibold
              shadow-lg
              hover:bg-[#1E40AF]
              transition-all duration-300
            "
          >
            <FaPhoneAlt className="text-sm" />
            Call Now
          </a>

          {/* Get Enquiry */}
          <Link
            to="/contact"
            className="
              flex items-center gap-3
              px-9 py-3
              rounded-full
              border border-[#E5E7EB]
              bg-white
              text-[#1F2937]
              font-semibold
              hover:border-[#1FA75A]
              hover:text-[#1FA75A]
              transition-all duration-300
            "
          >
            <FaEnvelopeOpenText className="text-base" />
            Get Free Quote
          </Link>
        </div>

        {/* Trust Line */}
        <p className="mt-6 text-sm text-[#6B7280]">
          Trusted by hundreds of customers for{" "}
          <span className="font-semibold text-[#1FA75A]">
            safe, punctual & comfortable travel
          </span>
          .
        </p>
      </div>
    </section>
  );
};

/* ===== Floating Icon Bubble ===== */
const IconBubble = ({ icon, className }) => (
  <div
    className={`
      absolute ${className}
      w-12 h-12
      rounded-full
      bg-[#FFFFFF]
      border border-[#E5E7EB]
      shadow-sm
      flex items-center justify-center
      text-[#1F4ED8]
      text-lg
    `}
  >
    {icon}
  </div>
);

export default CTASection;