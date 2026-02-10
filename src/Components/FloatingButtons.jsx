import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaTimes,
  FaMailBulk,
  FaEnvelope,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const FloatingButtons = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-12 right-6 z-50 flex flex-col items-center gap-4">
      {/* ================= FLOATING ACTIONS ================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* 📞 Call */}
            <motion.a
              key="call"
              href="tel:+919999367232"
              title="Call Us"
              initial={{ opacity: 0, y: 18, scale: 0.7 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.7 }}
              transition={{ duration: 0.3 }}
              className="w-14 h-14 flex items-center justify-center rounded-full
                bg-[#1F4ED8] hover:bg-[#1E40AF] text-white
                shadow-xl ring-2 ring-[#1F4ED8]/30
                hover:scale-110 transition-all"
            >
              <FaPhoneAlt size={20} />
            </motion.a>

            {/* 💬 WhatsApp */}
            <motion.a
              key="whatsapp"
              href="https://wa.me/+919999367232"
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp"
              initial={{ opacity: 0, y: 18, scale: 0.7 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.7 }}
              transition={{ duration: 0.3, delay: 0.08 }}
              className="w-14 h-14 flex items-center justify-center rounded-full
                bg-[#1FA75A] hover:bg-[#15803D] text-white
                shadow-xl ring-2 ring-[#1FA75A]/30
                hover:scale-110 transition-all"
            >
              <FaWhatsapp size={24} />
            </motion.a>

            {/* 📧 Email */}
            <motion.a
              key="email"
              href="mailto:business@sahootourandtravels.com"
              title="Send Email"
              initial={{ opacity: 0, y: 18, scale: 0.7 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.7 }}
              transition={{ duration: 0.3, delay: 0.16 }}
              className="w-14 h-14 flex items-center justify-center rounded-full
                bg-[#F97316] hover:bg-[#EA580C] text-white
                shadow-xl ring-2 ring-[#F97316]/35
                hover:scale-110 transition-all"
            >
              <FaEnvelope size={20} />
            </motion.a>
          </>
        )}
      </AnimatePresence>

      {/* ================= MAIN TOGGLE ================= */}
      <div className="relative">
        {/* GLOW RINGS (FIXED & VISIBLE) */}
        <span className="absolute inset-0 rounded-full
          bg-[#1F4ED8]/25 blur-md
          animate-glow-slow" />

        <span className="absolute inset-0 rounded-full
          bg-[#1F4ED8]/15 blur-lg
          animate-glow-slower" />

        <span className="absolute inset-0 rounded-full
          bg-[#1F4ED8]/10 blur-xl
          animate-glow-slowest" />

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          className="relative w-14 h-14 md:w-16 md:h-16 rounded-full
            bg-[#1F4ED8] hover:bg-[#1E40AF]
            flex items-center justify-center
            shadow-2xl transition-all duration-300"
        >
          {isOpen ? (
            <FaTimes className="text-white text-xl" />
          ) : (
            <FaMailBulk className="text-white text-lg" />
          )}
        </motion.button>
      </div>

      {/* ================= KEYFRAMES ================= */}
      <style>{`
        @keyframes glowPulse {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          70% {
            transform: scale(2.2);
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }

        .animate-glow-slow {
          animation: glowPulse 3.5s ease-out infinite;
        }

        .animate-glow-slower {
          animation: glowPulse 5s ease-out infinite;
        }

        .animate-glow-slowest {
          animation: glowPulse 6.5s ease-out infinite;
        }
      `}</style>
    </div>
  );
};

export default FloatingButtons;