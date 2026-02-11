import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  FaCarSide,
  FaRoute,
  FaUsers,
  FaClock,
} from "react-icons/fa";

import imgTop from "../assets/images/one.jpg";
import imgBottom from "../assets/images/two.jpg";
import bgImage from "../assets/images/one.jpg";
import { Link } from "react-router-dom";

export default function TravelExcellence() {
  const sectionRef = useRef(null);

  /* Parallax background */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-6 md:px-10 overflow-hidden bg-[#F8FAFC]"
    >
      {/* PARALLAX BACKGROUND */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Travel Background"
          className="w-full h-full object-cover"
        />
        {/* Soft white overlay */}
        <div className="absolute inset-0 bg-white/85" />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT IMAGE STACK */}
        <div className="grid gap-6">
          {[imgTop, imgBottom].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 + i * 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-lg bg-white"
            >
              <img
                src={img}
                alt="Sahoo Tour And Travels"
                className="w-full h-[240px] object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#1FA75A] mb-3">
            <span className="w-8 h-[2px] bg-[#1FA75A]" />
            Travel With Confidence
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-[#1F2937]">
            Your Journey
            <br />
            <span className="text-[#1F4ED8] font-bold">
              Our Responsibility
            </span>
          </h2>

          <p className="mt-5 text-[#6B7280] text-base md:text-lg leading-relaxed max-w-xl">
            Sahoo Tour And Travels provides reliable taxi and tour services
            focused on punctuality, comfort, transparent pricing, and
            professional travel experiences across Delhi NCR and beyond.
          </p>

          {/* SERVICE STRENGTH */}
          <div className="mt-7 space-y-5">
            <AnimatedProgress title="On-Time Pickup & Drop" value={98} />
            <AnimatedProgress title="Vehicle Comfort & Cleanliness" value={95} />
            <AnimatedProgress title="Customer Satisfaction" value={97} />
          </div>

          {/* CTA */}
          <Link to='/coverage'>
          <button className="cursor-pointer mt-8 inline-flex items-center gap-3 px-10 py-3 rounded-full bg-[#1F4ED8] text-white font-medium hover:bg-[#1E40AF] transition-all shadow-md">
            Explore Our Coverage →
          </button>
          </Link>
        </div>
      </div>

      
    </section>
  );
}

/* ================= PROGRESS BAR ================= */
function AnimatedProgress({ title, value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <div className="flex justify-between text-sm text-[#6B7280] mb-1">
        <span>{title}</span>
        <span className="text-[#1F4ED8] font-medium">{value}%</span>
      </div>

      <div className="w-full h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${value}%` : 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="h-full bg-gradient-to-r from-[#1F4ED8] via-[#1FA75A] to-[#F97316]"
        />
      </div>
    </div>
  );
}

/* ================= STAT CARD ================= */
function StatBox({ icon, value, label }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-white border border-[#E5E7EB] rounded-2xl py-6 px-4 flex flex-col items-center gap-2 shadow-sm hover:shadow-lg transition-all"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[rgba(31,78,216,0.08)] text-[#1F4ED8] text-xl">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-[#1F2937]">{value}</h3>
      <p className="text-xs text-[#6B7280] text-center">{label}</p>
    </motion.div>
  );
}