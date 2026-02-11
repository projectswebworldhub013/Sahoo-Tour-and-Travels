import React from "react";

const MapsSection = () => {
  const locations = [
    {
      title: "Head Office – West Delhi",
      address: "Sahu Tour & Travels, West Delhi",
      map: `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d224076.32695757863!2d77.0090381!3d28.653951!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce10f9cbb0531%3A0xcc06cddf2473efb1!2sSahu%20Tour%20%26%20Travels!5e0!3m2!1sen!2sin!4v1770747346360!5m2!1sen!2sin`,
    },
    {
      title: "South Delhi – IIT Area",
      address: "Kalu Sarai, New Delhi",
      map: `https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d224346.32835516133!2d77.20898509999999!3d28.5273522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390ce352493f7035%3A0x655d82ac9d1f35e4!2sSahoo%20Tour%20and%20Travels%2C%20G-1%2C%20Anupam%20Plaza%2C%2056%2F1%2C%20Indian%20Institute%20of%20Technology%20Delhi%2C%20Kalu%20Sarai%2C%20New%20Delhi%2C%20Delhi%20110016!3m2!1d28.543689699999998!2d77.2001168!5e0!3m2!1sen!2sin!4v1770747474472!5m2!1sen!2sin`,
    },
    {
      title: "South East Delhi – Jasola",
      address: "Jasola Vihar, New Delhi",
      map: `https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d224346.32835516133!2d77.20898509999999!3d28.5273522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390ce59899940e31%3A0x703487469df8e218!2sSAHOO%20TOUR%20AND%20TRAVELS%2C%20PKT-.%2010-B%2C%20Jasola%2C%20Jasola%20Vihar%2C%20New%20Delhi%2C%20Delhi%20110025!3m2!1d28.549077999999998!2d77.292388!5e0!3m2!1sen!2sin!4v1770747511473!5m2!1sen!2sin`,
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="uppercase tracking-widest text-xs text-[#1FA75A] mb-2">
            Our Locations
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1F2937]">
            Find Sahoo Tour & Travels Near You
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#6B7280]">
            Visit or connect with us from any of our locations across Delhi.
            We’re always nearby to help you plan your next journey.
          </p>
        </div>

        {/* Maps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((loc, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Map */}
              <div className="relative w-full h-[260px]">
                <iframe
                  src={loc.map}
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-base font-semibold text-[#1F2937]">
                  {loc.title}
                </h3>
                <p className="mt-1 text-sm text-[#6B7280]">
                  {loc.address}
                </p>

                <div className="mt-4 inline-flex items-center text-sm font-medium text-[#1F4ED8] hover:text-[#1E40AF] transition">
                  View on Google Maps
                  <span className="ml-2 text-[#F97316]">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MapsSection;