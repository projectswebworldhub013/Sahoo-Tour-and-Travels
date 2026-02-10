import React from "react";
import {
  Award,
  Users,
  Star,
  Building2,
  Hammer,
  Layers,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import bgImg from "../assets/images/about-section.jpg";

const AboutSection = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-16 py-16 md:py-20 bg-[#F8FAFC]"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-white/90"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl w-full text-[#1F2937]">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 md:gap-16">

          {/* LEFT SECTION */}
          <div className="max-w-xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-[#1F2937]">
              About <br />
              <span className="text-[#1F4ED8]">
                Sahoo Tour & Travels Delhi
              </span>
            </h1>

            <p className="text-[#6B7280] text-sm sm:text-base md:text-lg leading-relaxed">
              Sahoo Tour & Travels Delhi is a trusted and well-established name
              in the travel and transportation industry, serving customers
              across Delhi, NCR, and all parts of India with reliable and
              professional travel solutions.
            </p>

            <p className="text-[#6B7280] text-sm sm:text-base md:text-lg leading-relaxed mt-4">
              Founded and owned by{" "}
              <b className="text-[#1F2937]">Mr. Dineshwar Sahoo</b>, the company
              brings over{" "}
              <b className="text-[#1F2937]">20 years of industry experience</b>,
              delivering safe, comfortable, and customer-focused travel
              services for individuals, families, corporates, and tourists.
            </p>

            <p className="text-[#6B7280] text-sm sm:text-base md:text-lg leading-relaxed mt-4">
              From local taxi services and airport transfers to outstation
              travel and customized tour packages, we are committed to
              punctuality, transparent pricing, and memorable journeys.
            </p>
          </div>

          {/* RIGHT SECTION */}
          <div className="max-w-md space-y-8 flex flex-col justify-center md:mt-8">

            {/* Vision */}
            <p className="leading-relaxed text-[#6B7280] text-sm sm:text-base">
              Our vision is to become one of India’s most preferred travel
              companies by consistently delivering high-quality services,
              maintaining transparency, and building long-term relationships
              through trust, safety, and customer satisfaction.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              <div className="flex flex-col items-center text-center">
                <Award className="w-6 h-6 text-[#1FA75A] mb-2" />
                <h3 className="text-lg font-bold text-[#1F2937]">20+</h3>
                <p className="text-xs text-[#6B7280]">Years Experience</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <Users className="w-6 h-6 text-[#1FA75A] mb-2" />
                <h3 className="text-lg font-bold text-[#1F2937]">1000+</h3>
                <p className="text-xs text-[#6B7280]">Happy Clients</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <Star className="w-6 h-6 text-[#1FA75A] mb-2" />
                <h3 className="text-lg font-bold text-[#1F2937]">Trusted</h3>
                <p className="text-xs text-[#6B7280]">Quality Service</p>
              </div>
            </div>

            {/* Service Highlights */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-4">
              <div className="flex items-center gap-3">
                <Layers className="w-6 h-6 text-[#1F4ED8]" />
                <span className="text-xs sm:text-sm text-[#6B7280]">
                  Taxi & Outstation Travel
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Building2 className="w-6 h-6 text-[#1F4ED8]" />
                <span className="text-xs sm:text-sm text-[#6B7280]">
                  Corporate Travel Services
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Hammer className="w-6 h-6 text-[#1F4ED8]" />
                <span className="text-xs sm:text-sm text-[#6B7280]">
                  Tour Packages & Holidays
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#1FA75A]" />
                <span className="text-xs sm:text-sm text-[#6B7280]">
                  Safe, Reliable & On-Time
                </span>
              </div>
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">

              <Link to="/showcase" className="w-full">
                <button className="w-full px-8 py-3 sm:py-4 bg-white text-[#1F2937] text-sm sm:text-base rounded-full border border-[#E5E7EB] shadow-sm hover:bg-[#F8FAFC] transition font-semibold">
                  View Showcase
                </button>
              </Link>

              <Link to="/contact" className="w-full">
                <button className="w-full px-8 py-3 sm:py-4 bg-[#1F4ED8] text-white text-sm sm:text-base rounded-full shadow-md hover:bg-[#1E40AF] transition font-semibold">
                  Contact Us
                </button>
              </Link>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;