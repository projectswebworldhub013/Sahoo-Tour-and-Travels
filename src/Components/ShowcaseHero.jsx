// src/pages/Showcase.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import ShowcaseHero from "../Components/ShowcaseHero";
import { FaRoad, FaCarSide, FaMapMarkedAlt } from "react-icons/fa";

/* Gallery Images */
import img1 from "../assets/images/board.png";
import img2 from "../assets/images/taxi.jpg";
import img3 from "../assets/images/showcase-hero2.jpg";
import img4 from "../assets/images/about1.jpg";
import img5 from "../assets/images/about-hero.jpg";
import img6 from "../assets/images/one.jpg";
import img7 from "../assets/images/two.jpg";
import img8 from "../assets/images/services/s12.jpg";
import img9 from "../assets/images/services/s13.jpg";
import img10 from "../assets/images/services/s43.jpg";
import img11 from "../assets/images/vehicles/seltos.jpg";
import img12 from "../assets/images/vehicles/creta.jpg";

/* COLOR SCHEME */
const COLORS = {
  primary: "#1F4ED8",
  secondary: "#1FA75A",
  accent: "#F97316",
  bgMain: "#FFFFFF",
  bgSection: "#F8FAFC",
  card: "#FFFFFF",
  textPrimary: "#1F2937",
  textSecondary: "#6B7280",
  border: "#E5E7EB",
  hoverDark: "#1E40AF",
};

export default function Showcase() {
  const images = [
    img1, img2, img3, img4, img5, img6,
    img7, img8, img9, img10, img11, img12,
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const closeModal = () => setActiveIndex(null);
  const prevImage = () =>
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  const nextImage = () =>
    setActiveIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));

  /* Keyboard Controls */
  useEffect(() => {
    const handleKey = (e) => {
      if (activeIndex !== null) {
        if (e.key === "Escape") closeModal();
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "ArrowRight") nextImage();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  return (
    <>
      <ShowcaseHero />

      {/* SHOWCASE SECTION */}
      <section
        className="w-full py-16 px-4 sm:px-6 lg:px-12"
        style={{ backgroundColor: COLORS.bgSection }}
      >
        <div className="max-w-7xl mx-auto">

          {/* SECTION HEADER */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-14 h-[2px]" style={{ background: COLORS.primary }} />
              <FaRoad className="text-xl" style={{ color: COLORS.accent }} />
              <span className="w-14 h-[2px]" style={{ background: COLORS.primary }} />
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: COLORS.textPrimary }}
            >
              Our Travel{" "}
              <span style={{ color: COLORS.primary }}>Showcase</span>
            </h2>

            <p
              className="text-sm sm:text-base md:text-lg leading-relaxed"
              style={{ color: COLORS.textSecondary }}
            >
              Every journey tells a story. At{" "}
              <span className="font-semibold" style={{ color: COLORS.primary }}>
                Sahoo Tour & Travels
              </span>
              , we take pride in the roads we’ve covered, the destinations we’ve
              reached, and the memories we’ve helped create — from city rides
              and airport transfers to long-distance outstation adventures.
            </p>
          </div>

          {/* IMAGE GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {images.map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveIndex(index)}
                className="relative overflow-hidden rounded-xl cursor-pointer bg-white border"
                style={{ borderColor: COLORS.border }}
              >
                <img
                  src={img}
                  alt={`Sahoo Tour & Travels journey ${index + 1}`}
                  className="w-full h-40 sm:h-52 md:h-64 object-cover transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL SLIDER */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 p-2 rounded-full text-white"
              style={{ backgroundColor: COLORS.primary }}
            >
              <X size={24} />
            </button>

            {/* Slider */}
            <div className="relative max-w-5xl w-full">
              <motion.img
                key={activeIndex}
                src={images[activeIndex]}
                alt="Showcase Preview"
                className="w-full max-h-[75vh] object-contain rounded-xl bg-white"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              />

              {/* Controls */}
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-2 -translate-y-1/2 p-2 sm:p-3 rounded-full text-white"
                style={{ backgroundColor: COLORS.primary }}
              >
                <ChevronLeft size={22} />
              </button>

              <button
                onClick={nextImage}
                className="absolute top-1/2 right-2 -translate-y-1/2 p-2 sm:p-3 rounded-full text-white"
                style={{ backgroundColor: COLORS.primary }}
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}