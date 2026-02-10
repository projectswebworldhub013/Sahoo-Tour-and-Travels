// src/components/VisionMissionSection.jsx
import React from "react";
import {
  Eye,
  Target,
  ShieldCheck,
  Users,
  Compass,
  TrendingUp,
} from "lucide-react";

const VisionMissionSection = () => {
  return (
    <section className="relative w-full bg-[#F8FAFC] py-22 px-6 md:px-16 overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[rgba(31,78,216,0.10)] rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[rgba(31,167,90,0.10)] rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto">

        {/* SECTION HEADING */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#1F4ED8]" />
            <span className="text-sm font-semibold tracking-widest text-[#1F4ED8] uppercase">
              Our Purpose
            </span>
            <div className="h-px w-12 bg-[#1F4ED8]" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2937] leading-tight">
            Vision & Mission
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-sm md:text-base leading-relaxed text-[#6B7280]">
  We shape meaningful journeys by combining decades of experience,
  uncompromising integrity, and a customer-first approach. Every ride,
  every route, and every service is designed to deliver comfort, safety,
  and reliability—creating travel experiences you can trust across India.
</p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* VISION CARD */}
          <div className="relative group">
            {/* Gradient Border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1F4ED8] via-[#1FA75A] to-transparent opacity-40 blur-sm" />

            <div className="relative h-full bg-white/85 backdrop-blur-xl border border-[#E5E7EB] rounded-3xl p-10 md:p-12 shadow-xl transition group-hover:shadow-2xl">
              
              <div className="flex items-center gap-5 mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#1F4ED8]/30 rounded-full blur-md" />
                  <div className="relative w-14 h-14 flex items-center justify-center rounded-full bg-[#1F4ED8] text-white">
                    <Eye className="w-7 h-7" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1F2937]">
                  Our Vision
                </h3>
              </div>

              <p className="text-[#6B7280] text-lg leading-relaxed">
                To become one of India’s most respected and trusted tour and
                travel companies by delivering safe, reliable, and memorable
                journeys. We envision long-term relationships built on
                transparency, comfort, and consistent service excellence.
              </p>

              <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent" />

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Compass className="w-5 h-5 text-[#1FA75A]" />
                  <span className="text-sm text-[#6B7280]">
                    Pan-India Operations
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-[#1FA75A]" />
                  <span className="text-sm text-[#6B7280]">
                    Future-Focused Growth
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* MISSION CARD */}
          <div className="relative group">
            {/* Gradient Border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#F97316] via-[#1F4ED8] to-transparent opacity-40 blur-sm" />

            <div className="relative h-full bg-white/85 backdrop-blur-xl border border-[#E5E7EB] rounded-3xl p-10 md:p-12 shadow-xl transition group-hover:shadow-2xl">
              
              <div className="flex items-center gap-5 mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#F97316]/30 rounded-full blur-md" />
                  <div className="relative w-14 h-14 flex items-center justify-center rounded-full bg-[#F97316] text-white">
                    <Target className="w-7 h-7" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1F2937]">
                  Our Mission
                </h3>
              </div>

              <p className="text-[#6B7280] text-lg leading-relaxed">
                Our mission is to provide dependable, customer-centric travel
                services with uncompromising safety standards, professional
                drivers, transparent pricing, and personalized solutions for
                every journey—big or small.
              </p>

              <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#1F4ED8]" />
                  <span className="text-sm text-[#6B7280]">
                    Safety & Reliability
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-[#1F4ED8]" />
                  <span className="text-sm text-[#6B7280]">
                    Customer-First Service
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;