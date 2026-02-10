// src/data/servicesData.js

// 

import local1 from "../assets/images/services/s11.jpg";
import local2 from "../assets/images/services/s12.jpg";
import local3 from "../assets/images/services/s13.jpg";
import local4 from "../assets/images/services/s14.jpg";

import airport1 from "../assets/images/services/s21.jpg";
import airport2 from "../assets/images/services/s22.jpg";
import airport3 from "../assets/images/services/s23.jpg";
import airport4 from "../assets/images/services/s24.jpg";

import outstation1 from "../assets/images/hero/h222.jpg";
import outstation2 from "../assets/images/services/s31.jpg";
import outstation3 from "../assets/images/services/s32.jpg";
import outstation4 from "../assets/images/services/s33.jpg";

import corporate1 from "../assets/images/one.jpg";
import corporate2 from "../assets/images/one.jpg";
import corporate3 from "../assets/images/one.jpg";
import corporate4 from "../assets/images/one.jpg";

import tour1 from "../assets/images/one.jpg";
import tour2 from "../assets/images/one.jpg";
import tour3 from "../assets/images/one.jpg";
import tour4 from "../assets/images/one.jpg";

import oneway1 from "../assets/images/one.jpg";
import oneway2 from "../assets/images/one.jpg";
import oneway3 from "../assets/images/one.jpg";
import oneway4 from "../assets/images/one.jpg";

export const servicesData = [
  {
    id: 1,
    path: "/services/local-taxi",
    images: [local1, local2, local3, local4],
    title: "Local City Taxi Service",
    shortDescription:
      "Our local city taxi service offers reliable, comfortable, and timely transportation for daily commuting, shopping trips, meetings, and personal travel needs within Delhi and nearby areas.",
    longDescription:
      "Sahoo Tour & Travels provides dependable local city taxi services designed for comfort, punctuality, and peace of mind. Whether you are traveling for work, errands, family visits, or leisure within the city, our well-maintained vehicles and experienced drivers ensure a smooth journey. We focus on route efficiency, safety, and customer convenience, making everyday travel stress-free. With transparent pricing and professional service, we aim to be your trusted city travel partner.",
    quickPoints: [
      {
        title: "Reliable Daily Travel",
        description:
          "Perfect for office travel, errands, meetings, and everyday city commuting with assured punctuality."
      },
      {
        title: "Clean & Comfortable Cars",
        description:
          "All vehicles are air-conditioned, hygienic, and maintained regularly for a pleasant ride."
      },
      {
        title: "Experienced Drivers",
        description:
          "Professional drivers with strong city route knowledge and customer-friendly behavior."
      },
      {
        title: "Transparent Pricing",
        description:
          "Clear and upfront pricing with no hidden charges for complete peace of mind."
      }
    ],
    specifications: [
      { heading: "Service Type", value: "Local City Taxi" },
      { heading: "Coverage Area", value: "Delhi & Nearby Locations" },
      { heading: "Vehicle Options", value: "Sedan, SUV, Hatchback" },
      { heading: "Booking Mode", value: "Call & Online" },
      { heading: "Availability", value: "24/7 Service" }
    ]
  },

  {
    id: 2,
    path: "/services/airport-transfer",
    images: [airport1, airport2, airport3, airport4],
    title: "Airport Pickup & Drop Service",
    shortDescription:
      "Our airport pickup and drop service ensures timely, comfortable, and stress-free transfers to and from airports with professional drivers and well-maintained vehicles.",
    longDescription:
      "We understand the importance of punctual airport travel. Our airport transfer service is designed to eliminate delays, confusion, and stress. Whether it is an early morning flight or a late-night arrival, our drivers track flight timings and ensure prompt pickups and drops. With spacious luggage capacity, clean vehicles, and courteous drivers, we provide a smooth transition between airport and destination every time.",
    quickPoints: [
      {
        title: "On-Time Transfers",
        description:
          "Accurate scheduling and route planning ensure timely airport pickups and drops."
      },
      {
        title: "Flight Tracking",
        description:
          "We monitor flight timings to adjust pickup schedules accordingly for delays."
      },
      {
        title: "Luggage Friendly Vehicles",
        description:
          "Spacious cars suitable for airport luggage and comfortable seating."
      },
      {
        title: "24/7 Availability",
        description:
          "Available for early morning departures and late-night arrivals."
      }
    ],
    specifications: [
      { heading: "Service Type", value: "Airport Transfer" },
      { heading: "Coverage", value: "All Delhi NCR Airports" },
      { heading: "Vehicle Capacity", value: "1–7 Passengers" },
      { heading: "Driver Assistance", value: "Professional & Courteous" },
      { heading: "Service Timing", value: "Round the Clock" }
    ]
  },

  {
    id: 3,
    path: "/services/outstation",
    images: [outstation1, outstation2, outstation3, outstation4],
    title: "Outstation Taxi Service",
    shortDescription:
      "Our outstation taxi service offers comfortable and reliable long-distance travel to cities, tourist destinations, and business hubs across India.",
    longDescription:
      "Travel beyond city limits with confidence using our outstation taxi services. Ideal for weekend getaways, family vacations, pilgrimages, and business trips, our service ensures comfort over long distances. With experienced drivers, well-serviced vehicles, and flexible travel plans, we focus on safety, convenience, and smooth highway journeys. Transparent pricing and personalized support make long-distance travel effortless.",
    quickPoints: [
      {
        title: "Nationwide Travel",
        description:
          "Covers major cities, tourist spots, pilgrimage routes, and business destinations."
      },
      {
        title: "Comfort for Long Journeys",
        description:
          "Vehicles designed for long-distance comfort with ample legroom and AC."
      },
      {
        title: "Skilled Highway Drivers",
        description:
          "Drivers experienced in highway travel and long-route safety."
      },
      {
        title: "Flexible Plans",
        description:
          "One-way, round-trip, and multi-day travel options available."
      }
    ],
    specifications: [
      { heading: "Service Type", value: "Outstation Travel" },
      { heading: "Distance Coverage", value: "Pan India" },
      { heading: "Trip Options", value: "One Way & Round Trip" },
      { heading: "Vehicle Category", value: "Sedan, SUV, Tempo" },
      { heading: "Safety Standards", value: "Highway Approved Vehicles" }
    ]
  },

  {
    id: 4,
    path: "/services/corporate",
    images: [corporate1, corporate2, corporate3, corporate4],
    title: "Corporate Travel Services",
    shortDescription:
      "Our corporate travel solutions are designed for businesses seeking professional, punctual, and reliable transportation for employees and executives.",
    longDescription:
      "Sahoo Tour & Travels provides end-to-end corporate travel solutions tailored for organizations of all sizes. From daily employee transportation to executive travel and event mobility, we ensure punctuality, professionalism, and comfort. Our services help businesses focus on productivity while we handle transportation efficiently with transparent billing and dedicated support.",
    quickPoints: [
      {
        title: "Professional Operations",
        description:
          "Trained drivers and formal service standards for corporate requirements."
      },
      {
        title: "Punctual Scheduling",
        description:
          "Timely pickups and drops aligned with business schedules."
      },
      {
        title: "Flexible Contracts",
        description:
          "Short-term and long-term corporate transportation agreements."
      },
      {
        title: "Dedicated Support",
        description:
          "Priority customer support and account handling for businesses."
      }
    ],
    specifications: [
      { heading: "Service Type", value: "Corporate Transportation" },
      { heading: "Client Type", value: "Businesses & Enterprises" },
      { heading: "Contract Options", value: "Daily / Monthly" },
      { heading: "Fleet Standard", value: "Premium & Executive Cars" },
      { heading: "Billing System", value: "Transparent Invoicing" }
    ]
  },

  {
    id: 5,
    path: "/services/tour-packages",
    images: [tour1, tour2, tour3, tour4],
    title: "Tour Packages",
    shortDescription:
      "We offer customized and standard tour packages designed to deliver memorable, comfortable, and safe travel experiences for families, groups, and couples.",
    longDescription:
      "Our tour packages are thoughtfully curated to provide seamless travel experiences across India. Whether it is a family vacation, honeymoon, pilgrimage, or group tour, we manage transportation, comfort, and route planning with care. Each package is customizable based on preferences, budget, and duration, ensuring stress-free travel and unforgettable memories.",
    quickPoints: [
      {
        title: "Custom Itineraries",
        description:
          "Tour plans tailored to destination, duration, and customer preferences."
      },
      {
        title: "Comfort & Safety",
        description:
          "Focus on relaxed travel with clean vehicles and experienced drivers."
      },
      {
        title: "Wide Destination Range",
        description:
          "Covers tourist hotspots, hill stations, and pilgrimage routes."
      },
      {
        title: "Value Pricing",
        description:
          "Affordable packages with transparent and competitive pricing."
      }
    ],
    specifications: [
      { heading: "Service Type", value: "Tour Packages" },
      { heading: "Tour Types", value: "Family, Group, Honeymoon" },
      { heading: "Customization", value: "Fully Customizable" },
      { heading: "Travel Comfort", value: "AC & Spacious Vehicles" },
      { heading: "Support", value: "End-to-End Assistance" }
    ]
  },

  {
    id: 6,
    path: "/services/oneway-roundtrip",
    images: [oneway1, oneway2, oneway3, oneway4],
    title: "One Way & Round Trip Services",
    shortDescription:
      "Our one-way and round-trip travel services offer flexible and cost-effective solutions for short and long-distance journeys.",
    longDescription:
      "Designed for travelers who value flexibility, our one-way and round-trip services allow customers to choose travel options that suit their schedule and budget. Whether relocating, attending events, or planning return journeys, we provide dependable vehicles, professional drivers, and smooth travel experiences without unnecessary costs.",
    quickPoints: [
      {
        title: "Flexible Travel Options",
        description:
          "Choose between one-way or round-trip based on travel needs."
      },
      {
        title: "Cost Efficient",
        description:
          "Pay only for the journey you need without excess charges."
      },
      {
        title: "Comfort Focused",
        description:
          "Well-maintained vehicles for both short and long journeys."
      },
      {
        title: "Easy Booking",
        description:
          "Quick booking process through call or online support."
      }
    ],
    specifications: [
      { heading: "Service Type", value: "One Way & Round Trip" },
      { heading: "Travel Distance", value: "Local & Outstation" },
      { heading: "Pricing Model", value: "Distance Based" },
      { heading: "Vehicle Choices", value: "Multiple Categories" },
      { heading: "Availability", value: "24/7 Service" }
    ]
  }
];