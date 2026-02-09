import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaTaxi,
  FaCarSide,
  FaRoute,
  FaSuitcaseRolling,
  FaBuilding,
  FaMapMarkedAlt,
  FaImages,
  FaPhoneAlt,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaEnvelope,
  FaIdCard,
  FaReceipt,
} from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import logo from "../assets/images/sahoo-logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(true);
  const [openServices, setOpenServices] = useState(false);

  /* ---------------- DATA ---------------- */

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About Us", path: "/about", icon: <FaInfoCircle /> },
    { name: "Coverage", path: "/coverage", icon: <FaMapMarkedAlt /> },
    { name: "Showcase", path: "/showcase", icon: <FaImages /> },
    { name: "Contact Us", path: "/contact", icon: <FaPhoneAlt /> },
  ];
const socialLinks = [
  {
    icon: <FaFacebookF />,
    link: "https://www.facebook.com",
    color: "#1877F2",
    label: "Facebook",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com",
    color: "#E4405F",
    label: "Instagram",
  },
  {
    icon: <FaTwitter />,
    link: "https://twitter.com",
    color: "#1DA1F2",
    label: "Twitter",
  },
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com",
    color: "#0A66C2",
    label: "LinkedIn",
  },
  {
    icon: <FaYoutube />,
    link: "https://www.youtube.com",
    color: "#FF0000",
    label: "YouTube",
  },
  {
    icon: <FaPinterestP />,
    link: "https://www.pinterest.com",
    color: "#BD081C",
    label: "Pinterest",
  },
];
  const services = [
    { name: "Local City Taxi", path: "/services/local-taxi", icon: <FaTaxi /> },
    { name: "Airport Pickup & Drop", path: "/services/airport-transfer", icon: <FaCarSide /> },
    { name: "Outstation Taxi Service", path: "/services/outstation", icon: <FaRoute /> },
    { name: "Corporate Travel", path: "/services/corporate", icon: <FaBuilding /> },
    { name: "Tour Packages", path: "/services/tour-packages", icon: <FaSuitcaseRolling /> },
    { name: "One Way / Round Trip", path: "/services/oneway-roundtrip", icon: <FaRoute /> },
  ];

  /* ---------------- SCROLL EFFECT ---------------- */

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      setShowTop(window.scrollY <= lastScrollY || window.scrollY < 80);
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* 🔷 TOP MARQUEE */}
      <div
  className={`bg-gradient-to-r from-[#1F2937] via-[#022281] to-[#1F2937]
  text-white overflow-hidden transition-all duration-500 ${
    showTop ? "h-11 opacity-100" : "h-0 opacity-0"
  }`}
>
  <div className="flex items-center h-11 animate-marquee px-8 gap-12 whitespace-nowrap text-sm md:text-[15px] font-medium">

    {/* ✅ Welcome Message (SEO Friendly) */}
    <span className="flex items-center gap-2 text-[#F8FAFC] font-semibold">
      🌍 Welcome to
      <span className="text-[#1FA75A]">
        Sahoo Tour And Travels Delhi
      </span>
      – Trusted Taxi & Tour Services Across Delhi, NCR & All India
    </span>

    {/* Divider */}
    <span className="text-white/30">|</span>

    {/* Emails */}
    <span className="flex items-center gap-2 text-[#F8FAFC]">
      📧 info@sahootourandtravelsdelhi.co.in
    </span>

    <span className="flex items-center gap-2 text-[#F8FAFC]">
      📧 Business@sahootourandtravels.com
    </span>

    {/* Divider */}
    <span className="text-white/30">|</span>

    {/* Registrations */}
    <span className="flex items-center gap-2 text-[#E5E7EB]">
      <FaReceipt className="text-[#F97316]" />
      GSTIN: 07AZTPS3084J2ZJ
    </span>

    <span className="flex items-center gap-2 text-[#E5E7EB]">
      <FaIdCard className="text-[#F97316]" />
      UDYAM-DL-09-0013230
    </span>

    {/* Divider */}
    <span className="text-white/30">|</span>

    {/* Phones */}
    <span className="flex items-center gap-2 text-[#F8FAFC]">
      📞 +91 9871230490
    </span>

    <span className="flex items-center gap-2 text-[#F8FAFC]">
      📞 +91 99993 67232
    </span>

  </div>
</div>

      {/* 🔷 MAIN NAVBAR */}
      <nav className="bg-[#FFFFFF] border-b border-[#E5E7EB] shadow-sm">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-5 py-3">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 mx-1 md:mx-6">
            <img src={logo} alt="Sahoo Tour And Travels Delhi" className="h-16 md:h-18" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-medium text-[#1F2937]">

            <li>
              <Link to="/" className="flex items-center gap-2 hover:text-[#1F4ED8]">
                <FaHome /> Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="flex items-center gap-2 hover:text-[#1F4ED8]">
                <FaInfoCircle /> About Us
              </Link>
            </li>

            {/* Services Dropdown */}
            <li className="relative group">
              <button className="flex items-center gap-2 hover:text-[#1F4ED8]">
                <FaTaxi /> Services <FaChevronDown className="text-xs" />
              </button>

              <ul className="absolute left-0 mt-2 w-72 bg-white border border-[#E5E7EB] rounded-xl shadow-xl opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300">
                {services.map((s, i) => (
                  <li key={i}>
                    <Link
                      to={s.path}
                      className="flex items-center gap-3 px-5 py-3 text-sm hover:bg-[#F8FAFC]"
                    >
                      <span className="text-[#1F4ED8]">{s.icon}</span>
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <Link to="/coverage" className="flex items-center gap-2 hover:text-[#1F4ED8]">
                <FaMapMarkedAlt /> Coverage
              </Link>
            </li>

            <li>
              <Link to="/showcase" className="flex items-center gap-2 hover:text-[#1F4ED8]">
                <FaImages /> Showcase
              </Link>
            </li>

            <li>
              <Link to="/contact" className="flex items-center gap-2 hover:text-[#F97316]">
                <FaPhoneAlt /> Contact Us
              </Link>
            </li>

          </ul>
{/* 🔹 Desktop Social Icons */}
<div className="hidden md:flex items-center gap-4">
  {socialLinks.map((s, i) => (
    <a
      key={i}
      href={s.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={s.label}
      className="text-lg transition-transform duration-300 hover:scale-110"
      style={{ color: s.color }}
    >
      {s.icon}
    </a>
  ))}
</div>
          {/* Mobile Button */}
          <button className="md:hidden text-[#1F2937]" onClick={() => setMenuOpen(true)}>
            <FaBars size={26} />
          </button>
        </div>
      </nav>

      {/* 🔷 MOBILE DRAWER */}
      <div
  className={`fixed top-0 left-0 h-full w-80 bg-[#FFFFFF] z-50 transform transition-transform duration-500 flex flex-col ${
    menuOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#E5E7EB]">
          <h2 className="font-semibold text-[#1F2937] text-sm">
            Sahoo Tour & Travels
          </h2>
          <FaTimes
            className="cursor-pointer text-[#1F2937]"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        {/* Content */}
        <div className="px-5 py-4 space-y-3 text-[#1F2937] overflow-y-auto">

          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 py-2 border-b border-[#E5E7EB]"
            >
              {link.icon} {link.name}
            </Link>
          ))}

          {/* Services Mobile Dropdown */}
          <button
            onClick={() => setOpenServices(!openServices)}
            className="w-full flex items-center justify-between py-3 border-b border-[#E5E7EB]"
          >
            <span className="flex items-center gap-3">
              <FaTaxi /> Services
            </span>
            <FaChevronDown
              className={`transition-transform duration-300 ${
                openServices ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ${
              openServices ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pl-6 pt-3 space-y-2">
              {services.map((s, i) => (
                <Link
                  key={i}
                  to={s.path}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 text-sm py-1"
                >
                  <span className="text-[#1F4ED8]">{s.icon}</span>
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#E5E7EB] my-4" />

          {/* Marquee Info Inside Drawer */}
          <div className="text-xs space-y-2 text-[#6B7280]">
            
            <p>📧 info@sahootourandtravelsdelhi.co.in</p>
            <p>📧 Business@sahootourandtravels.com</p>
            <p>GSTIN: 07AZTPS3084J2ZJ</p>
            <p>UDYAM-DL-09-0013230</p>
            <p>📞 +91 9871230490</p>
            <p>📞 +91 99993 67232</p>
          </div>
          {/* 🔹 Social Media Icons */}
<div className="flex items-center gap-5 mt-5 pt-4 border-t border-[#E5E7EB]">
  {socialLinks.map((s, i) => (
    <a
      key={i}
      href={s.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={s.label}
      className="text-xl transition-transform duration-300 hover:scale-110"
      style={{ color: s.color }}
    >
      {s.icon}
    </a>
  ))}
</div>
        </div>
      </div>

      {/* Marquee Animation */}
      <style>{`
        .animate-marquee {
          animation: marquee 22s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>

    </header>
  );
}