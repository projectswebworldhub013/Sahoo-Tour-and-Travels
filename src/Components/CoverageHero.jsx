import React from "react";
import img from "../assets/images/coverage-bg.avif";

const CoverageHero = () => {
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
              Pan India Coverage
            </p>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug sm:leading-tight text-white">
              Taxi Services <br />
              <span className="text-[#1F4ED8]">
                Across India
              </span>
            </h1>

            <p className="mt-5 sm:mt-6 max-w-xl mx-auto md:mx-0 text-sm sm:text-base leading-relaxed text-[#E5E7EB]">
              From Delhi NCR to every major city, tourist destination, and
              business hub in India — Sahoo Tour & Travels delivers safe,
              reliable, and professional taxi services wherever your journey
              takes you.
            </p>
          </div>

          {/* RIGHT CONTENT */}
          <div className="hidden md:flex justify-end mb-24">
            <p className="max-w-sm text-sm leading-relaxed text-[#CBD5E1] text-center md:text-left">
              Backed by 20+ years of experience, experienced drivers, and
              well-maintained vehicles, we ensure seamless travel for families,
              corporates, tourists, and long-distance travelers nationwide.
            </p>
          </div>
        </div>

        {/* HIGHLIGHT POINTS */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-xs sm:text-sm uppercase tracking-wide text-[#CBD5E1]">

          <div className="border-b border-[#E5E7EB]/30 pb-2 hover:text-white transition">
            <span className="text-[#F97316] mr-2">01.</span>
            Delhi, NCR & All Major Cities
          </div>

          <div className="border-b border-[#E5E7EB]/30 pb-2 hover:text-white transition">
            <span className="text-[#F97316] mr-2">02.</span>
            Outstation & Long-Distance Travel
          </div>

          <div className="border-b border-[#E5E7EB]/30 pb-2 hover:text-white transition">
            <span className="text-[#F97316] mr-2">03.</span>
            Tourist & Business Destinations
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoverageHero;