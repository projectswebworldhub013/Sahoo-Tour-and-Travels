import React from "react";
import img from "../assets/images/contact-hero.jpg"; // replace with your contact bg image

const ContactHero = () => {
  return (
    <section
      className="mt-32 relative w-full min-h-[75vh] md:min-h-[80vh] flex items-center"
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
              Get In Touch
            </p>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug sm:leading-tight text-white">
              Let’s Plan Your <br />
              <span className="text-[#1F4ED8]">
                Next Journey Together
              </span>
            </h1>

            <p className="mt-5 sm:mt-6 max-w-xl mx-auto md:mx-0 text-sm sm:text-base leading-relaxed text-[#E5E7EB]">
              Whether you need a quick city ride, airport transfer, outstation
              cab, or a complete tour package, our team at Sahoo Tour & Travels
              is here to help. Reach out anytime and we’ll take care of the rest.
            </p>
          </div>

          {/* RIGHT CONTENT */}
          <div className="hidden md:flex justify-end mb-24">
            <p className="max-w-sm text-sm leading-relaxed text-[#CBD5E1] text-center md:text-left">
              Fast responses, transparent pricing, and reliable service —
              connect with us today and experience hassle-free travel backed by
              trusted drivers and well-maintained vehicles.
            </p>
          </div>
        </div>

        {/* HIGHLIGHT POINTS */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-xs sm:text-sm uppercase tracking-wide text-[#CBD5E1]">

          <div className="border-b border-[#E5E7EB]/30 pb-2 hover:text-white transition">
            <span className="text-[#F97316] mr-2">01.</span>
            Quick Call & WhatsApp Support
          </div>

          <div className="border-b border-[#E5E7EB]/30 pb-2 hover:text-white transition">
            <span className="text-[#F97316] mr-2">02.</span>
            Transparent & Fair Pricing
          </div>

          <div className="border-b border-[#E5E7EB]/30 pb-2 hover:text-white transition">
            <span className="text-[#F97316] mr-2">03.</span>
            24×7 Travel Assistance
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactHero;