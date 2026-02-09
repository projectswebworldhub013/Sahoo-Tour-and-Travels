// src/components/Footer.jsx
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaArrowRight,
  FaPhoneAlt,
  FaLinkedinIn,
  FaPinterestP,
  FaHome,
  FaInfoCircle,
  FaImages,
  FaTaxi,
  FaCarSide,
  FaRoute,
  FaBuilding,
  FaSuitcaseRolling,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import bgImg from "../assets/images/footer-bg.jpg";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

/* ================= SERVICES ================= */
const services = [
  { name: "Local City Taxi", path: "/services/local-taxi", icon: <FaTaxi /> },
  {
    name: "Airport Pickup & Drop",
    path: "/services/airport-transfer",
    icon: <FaCarSide />,
  },
  {
    name: "Outstation Taxi Service",
    path: "/services/outstation",
    icon: <FaRoute />,
  },
  {
    name: "Corporate Travel",
    path: "/services/corporate",
    icon: <FaBuilding />,
  },
  {
    name: "Tour Packages",
    path: "/services/tour-packages",
    icon: <FaSuitcaseRolling />,
  },
  {
    name: "One Way / Round Trip",
    path: "/services/oneway-roundtrip",
    icon: <FaRoute />,
  },
];

export default function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="relative pt-20 pb-10 px-6 md:px-16 overflow-hidden bg-[#0F172A]"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#000000]/80"></div>

      {/* MAIN GRID */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm text-[#CBD5E1]">

        {/* ABOUT */}
        <div className="space-y-4">
          <h4 className="text-3xl font-bold text-white">
            Sahoo Tour & Travels
          </h4>

          <p className="leading-relaxed text-[#CBD5E1]">
            Sahoo Tour and Travels is a trusted travel service provider offering
            safe, comfortable, and reliable taxi solutions for local, airport,
            corporate, and outstation journeys. We focus on punctuality,
            professional drivers, and well-maintained vehicles to ensure a
            smooth travel experience every time.
          </p>

          {/* WEBMAIL (UNCHANGED) */}
          <a
            href="https://md-in-82.webhostbox.net:2096/cpsess3927650103/3rdparty/roundcube/?_task=mail&_mbox=INBOX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 px-5 py-2 rounded-full bg-[#1F4ED8] text-white font-semibold shadow-md hover:bg-[#1E40AF] transition"
          >
            Access Webmail
          </a>

          {/* SOCIAL ICONS */}
          <div className="hidden md:flex gap-5 text-lg mt-4">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="text-[#1877F2]">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-[#E1306C]">
              <FaInstagram />
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer" className="text-white">
              <FaXTwitter />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-[#0A66C2]">
              <FaLinkedinIn />
            </a>
            <a href="https://www.pinterest.com" target="_blank" rel="noreferrer" className="text-[#E60023]">
              <FaPinterestP />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="text-[#FF0000]">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-2xl font-bold text-white mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {[
              { name: "Home", path: "/", icon: <FaHome /> },
              { name: "About", path: "/about", icon: <FaInfoCircle /> },
              { name: "Showcase", path: "/showcase", icon: <FaImages /> },
              { name: "Contact Us", path: "/contact", icon: <FaPhoneAlt /> },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  to={item.path}
                  className="flex items-center gap-2 hover:text-[#1FA75A] transition"
                >
                  <span className="text-[#1F4ED8]">{item.icon}</span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* EMAILS */}
          <h4 className="mt-6 text-2xl font-bold text-white">
            Email
          </h4>
          <ul className="mt-3 space-y-2">
            {[
              "Info@sahootourandtravelsdelhi.co.in",
              "Sahootourandtravelsdelhi@gmail.com",
              "Business@sahootourandtravels.com",
            ].map((email, i) => (
              <li key={i}>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 hover:text-[#1FA75A] transition"
                >
                  <FaEnvelope className="text-[#1F4ED8]" /> {email}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-2xl font-bold text-white mb-4">
            Our Services
          </h4>

          <ul className="space-y-2">
            {services.map((service, i) => (
              <li key={i}>
                <Link
                  to={service.path}
                  className="group flex items-center gap-2 hover:text-[#F97316] transition"
                >
                  <span className="text-[#1F4ED8] group-hover:translate-x-1 transition-transform">
                    {service.icon}
                  </span>
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ADDRESS & CONTACT */}
        <div>
          <h4 className="text-2xl font-bold text-white mb-4">
            Address & Contact
          </h4>

          <address className="not-italic leading-relaxed mb-4 text-[#CBD5E1]">
            Shop No. G1, Anupam Plaza, Plot No. 50, Sri Aurobindo Marg,
            Opposite Azad Apartment, Block Q, Kalu Sarai,
            Green Park, New Delhi – 110016
          </address>

          <p className="mb-2">
            <FaPhoneAlt className="inline mr-2 text-[#1FA75A]" />
            +91 99993 67232
          </p>
          <p className="mb-4">
            <FaPhoneAlt className="inline mr-2 text-[#1FA75A]" />
            +91 98712 30490
          </p>

          <div className="mb-4 flex">
            <Translator />
            <div className="w-44"></div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="relative z-10 mt-10 pt-6 border-t border-[#334155] text-center text-xs text-[#94A3B8] space-y-2">
        <VisitorCounter />
        <p>
          © {new Date().getFullYear()} Sahoo Tour and Travels. All rights reserved.
        </p>
        <p>
          Designed and Developed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-[#F97316]"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </motion.footer>
  );
}