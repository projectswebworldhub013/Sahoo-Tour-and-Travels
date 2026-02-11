import React from "react";
import {
  FaMapMarkedAlt,
  FaRoute,
  FaCity,
  FaGlobeAsia,
} from "react-icons/fa";

const CoverageIntro = () => {
  return (
    <section className="relative w-full bg-[#F8FAFC] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-[rgba(31,78,216,0.08)] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-[#E5E7EB] shadow-sm text-sm font-medium text-[#1F2937]">
          <FaMapMarkedAlt className="text-[#1F4ED8]" />
          Nationwide Coverage
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-[#1F2937]">
          Taxi & Tour Services <br />
          <span className="text-[#1F4ED8]">
            Across India
          </span>
        </h2>

        {/* Divider */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="w-12 h-[2px] bg-[#E5E7EB]" />
          <span className="w-2 h-2 rounded-full bg-[#F97316]" />
          <span className="w-12 h-[2px] bg-[#E5E7EB]" />
        </div>

        {/* Description */}
        <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed text-[#6B7280]">
          Sahoo Tour & Travels proudly operates across{" "}
          <span className="text-[#1F2937] font-medium">Delhi, NCR,</span> and
          all major cities and destinations in India. From local city rides
          to long-distance outstation journeys and complete tour packages,
          we ensure safe, comfortable, and reliable travel—wherever the road
          takes you.
        </p>

        {/* Feature Points */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          <div className="flex flex-col items-center gap-3 bg-white rounded-xl p-6 border border-[#E5E7EB] hover:shadow-lg transition">
            <FaCity className="text-2xl text-[#1F4ED8]" />
            <p className="text-sm font-medium text-[#1F2937]">
              All Major Cities
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 bg-white rounded-xl p-6 border border-[#E5E7EB] hover:shadow-lg transition">
            <FaRoute className="text-2xl text-[#1FA75A]" />
            <p className="text-sm font-medium text-[#1F2937]">
              Outstation & Long Routes
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 bg-white rounded-xl p-6 border border-[#E5E7EB] hover:shadow-lg transition">
            <FaMapMarkedAlt className="text-2xl text-[#F97316]" />
            <p className="text-sm font-medium text-[#1F2937]">
              Tourist & Pilgrimage Spots
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 bg-white rounded-xl p-6 border border-[#E5E7EB] hover:shadow-lg transition">
            <FaGlobeAsia className="text-2xl text-[#1F4ED8]" />
            <p className="text-sm font-medium text-[#1F2937]">
              Pan-India Availability
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoverageIntro;