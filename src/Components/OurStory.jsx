// src/components/OurStory.jsx
import React from "react";
import {
  FaCarSide,
  FaUserTie,
  FaClock,
  FaCheckCircle,
  FaMapMarkedAlt,
  FaHeadset,
} from "react-icons/fa";

import imgLeft from "../assets/images/hero/h222.jpg";
import imgRight from "../assets/images/about1.jpg";

const OurStory = () => {
  return (
    <section className="bg-[#F8FAFC] text-[#1F2937] px-6 md:px-12 lg:px-20 py-20">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        {/* LEFT CONTENT */}
        <div className="flex flex-col">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-semibold leading-snug">
            Your Trusted Travel Partner <br />
            <span className="text-[#1F4ED8]">
              Across Delhi & All Over India
            </span>
          </h2>

          {/* Content */}
          <p className="mt-6 max-w-xl text-[#6B7280] leading-relaxed">
            <span className="font-medium text-[#1F2937]">
              Sahoo Tour And Travels Delhi
            </span>{" "}
            is a well-established and trusted name in the travel and
            transportation industry, serving customers across Delhi, NCR, and
            major destinations throughout India.
          </p>

          <p className="mt-4 max-w-xl text-[#6B7280] leading-relaxed">
            Founded and led by{" "}
            <span className="font-medium text-[#1F2937]">
              Mr. Dineshwar Sahoo
            </span>
            , with over 20 years of rich industry experience, we specialize in
            providing safe, reliable, and comfortable taxi services, corporate
            travel solutions, and customized tour packages.
          </p>

          <p className="mt-4 max-w-xl text-[#6B7280] leading-relaxed">
            Our success is built on professionalism, transparent pricing,
            experienced drivers, and a customer-first approach that ensures
            every journey is smooth, punctual, and stress-free.
          </p>

          {/* Small Image */}
          <div className="mt-8 w-[92%] overflow-hidden">
            <img
              src={imgLeft}
              alt="Sahoo Tour And Travels Fleet"
              className="w-full h-full object-cover rounded-xl shadow-md border border-[#E5E7EB]"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col">
          {/* Image */}
          <img
            src={imgRight}
            alt="Sahoo Tour And Travels Journey"
            className="w-full h-auto object-cover rounded-xl shadow-xl border border-[#E5E7EB]"
          />

          {/* Caption */}
          <p className="mt-4 text-sm italic text-[#6B7280] max-w-md">
            Every journey we deliver is driven by safety, comfort, punctuality,
            and personalized service.
          </p>

          {/* Why Choose Us */}
          <div className="mt-10 space-y-6">
  <h3 className="text-2xl font-semibold text-[#1F2937]">
    Why Choose Sahoo Tour And Travels
  </h3>

  {/* Point 1 */}
  <div className="flex items-start gap-4">
    <FaUserTie className="text-[#1FA75A] text-2xl mt-1" />
    <p className="text-[#6B7280] leading-relaxed">
      <span className="font-semibold text-[#1F2937]">
        Experienced Leadership:
      </span>{" "}
      Over two decades of hands-on travel industry expertise ensures reliable
      planning, smooth execution, and customer confidence.
    </p>
  </div>

  {/* Point 2 */}
  <div className="flex items-start gap-4">
    <FaCarSide className="text-[#1F4ED8] text-2xl mt-1" />
    <p className="text-[#6B7280] leading-relaxed">
      <span className="font-semibold text-[#1F2937]">
        Well-Maintained Fleet:
      </span>{" "}
      Clean, air-conditioned, and regularly serviced vehicles designed for
      comfort and long-distance travel.
    </p>
  </div>

  {/* Point 3 */}
  <div className="flex items-start gap-4">
    <FaClock className="text-[#F97316] text-2xl mt-1" />
    <p className="text-[#6B7280] leading-relaxed">
      <span className="font-semibold text-[#1F2937]">
        Reliable & Punctual:
      </span>{" "}
      Timely pickups, efficient routing, and professional service for airport,
      corporate, and outstation travel.
    </p>
  </div>

  {/* Point 4 */}
  <div className="flex items-start gap-4">
    <FaCheckCircle className="text-[#1FA75A] text-2xl mt-1" />
    <p className="text-[#6B7280] leading-relaxed">
      <span className="font-semibold text-[#1F2937]">
        Customer Satisfaction:
      </span>{" "}
      Transparent pricing, no hidden charges, and personalized travel solutions
      that build long-term trust.
    </p>
  </div>

  {/* Point 5 - NEW */}
  <div className="flex items-start gap-4">
    <FaHeadset className="text-[#6366F1] text-2xl mt-1" />
    <p className="text-[#6B7280] leading-relaxed">
      <span className="font-semibold text-[#1F2937]">
        24×7 Support & Safety:
      </span>{" "}
      Dedicated customer assistance, trained drivers, and safety-first travel
      practices for complete peace of mind.
    </p>
  </div>
</div>
        </div>
      </div>

      
    </section>
  );
};

export default OurStory;