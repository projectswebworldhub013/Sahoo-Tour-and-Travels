// src/pages/Certificates.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaFileDownload,
  FaEye,
  FaCertificate,
  FaBuilding,
  FaCheckCircle,
} from "react-icons/fa";

import gstPDF from "../assets/certificates/gst.pdf";
import msmePDF from "../assets/certificates/msme.pdf";

const certificates = [
  {
    id: 1,
    title: "GST Registration Certificate",
    file: gstPDF,
    description:
      "Official Goods and Services Tax Registration Certificate validating Sahoo Tour & Travels as a legally registered and tax-compliant business entity.",
    highlights: [
      "Government Approved",
      "Active GST Number",
      "Tax Compliant Business",
    ],
  },
  {
    id: 2,
    title: "MSME / UDYAM Registration Certificate",
    file: msmePDF,
    description:
      "MSME Registration Certificate recognizing Sahoo Tour & Travels as a registered Micro, Small & Medium Enterprise under Government of India.",
    highlights: [
      "UDYAM Verified",
      "Recognized Enterprise",
      "Government Backed",
    ],
  },
];

const Certificates = () => {
  return (
    <>
    <section className="mt-32 bg-[#FFFFFF] min-h-screen px-4 sm:px-6 lg:px-8 py-20">

      <div className="max-w-7xl mx-auto">

        {/* ================= HEADING ================= */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <FaCertificate className="text-[#1F4ED8] text-3xl" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1F2937]">
            Our <span className="text-[#1F4ED8]">Certifications</span>
          </h1>

          <div className="w-24 h-[2px] bg-[#F97316] mx-auto mt-6"></div>

          <p className="mt-6 text-[#6B7280] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            We operate with transparency, compliance, and trust. Below are the
            official registration certificates issued by the Government of India
            for Sahoo Tour & Travels.
          </p>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid md:grid-cols-2 gap-8">

          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-2xl p-8 shadow-sm hover:shadow-lg transition duration-500 relative overflow-hidden"
            >

              {/* Glass Blue Tint Effect */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[rgba(31,78,216,0.08)] rounded-full blur-2xl"></div>

              {/* Icon Badge */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#1F4ED8]/10 flex items-center justify-center">
                  <FaBuilding className="text-[#1F4ED8] text-lg" />
                </div>
                <span className="text-sm font-medium text-[#1FA75A] flex items-center gap-2">
                  <FaCheckCircle />
                  Government Certified
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#1F2937]">
                {cert.title}
              </h3>

              {/* Divider */}
              <div className="w-full h-[1px] bg-[#E5E7EB] my-6"></div>

              {/* Description */}
              <p className="text-[#6B7280] text-sm leading-relaxed">
                {cert.description}
              </p>

              {/* Highlights */}
              <ul className="mt-6 space-y-2">
                {cert.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-[#1F2937]"
                  >
                    <FaCheckCircle className="text-[#1FA75A]" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div className="w-full h-[1px] bg-[#E5E7EB] my-6"></div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">

                {/* View Button */}
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#1F4ED8] hover:bg-[#1E40AF] text-white py-3 rounded-xl text-sm font-medium transition"
                >
                  <FaEye />
                  View PDF
                </a>

                {/* Download Button */}
                <a
                  href={cert.file}
                  download
                  className="flex-1 flex items-center justify-center gap-2 border border-[#1F4ED8] text-[#1F4ED8] hover:bg-[#F97316] hover:text-white hover:border-[#F97316] py-3 rounded-xl text-sm font-medium transition"
                >
                  <FaFileDownload />
                  Download
                </a>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
      <CTASection/>
    </section>
    </>
  );
};

export default Certificates;