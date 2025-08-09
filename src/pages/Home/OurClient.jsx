import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import React from "react";

const OurClient = () => {
  const logos = [
    { src: "https://8upload.com/image/67a012759526a/logo1.png", alt: "Client 1" },
    { src: "https://8upload.com/image/67a0127588f6f/logo2.png", alt: "Client 2" },
    { src: "https://8upload.com/image/67a012757822f/logo3.png", alt: "Client 3" },
    { src: "https://8upload.com/image/67a01275685b3/logo4.png", alt: "Client 4" },
    { src: "https://8upload.com/image/67a012755c112/logo5.png", alt: "Client 5" },
    { src: "https://8upload.com/image/67a012754d00c/logo6.png", alt: "Client 6" },
    { src: "https://8upload.com/image/67a01275404f1/logo7.png", alt: "Client 7" },
    { src: "https://8upload.com/image/67a012752aa7e/logo8.png", alt: "Client 8" },
    { src: "https://8upload.com/image/67a012751e270/logo9.png", alt: "Client 9" },
    { src: "https://8upload.com/image/67a012750d508/logo10.png", alt: "Client 10" },
    { src: "https://8upload.com/image/67a013aaa8575/logo11.png", alt: "Client 11" },
    { src: "https://8upload.com/image/67a013aa913da/logo12.png", alt: "Client 12" },
    { src: "https://8upload.com/image/67a013aa84ff4/logo13.png", alt: "Client 13" },
    { src: "https://8upload.com/image/67a013aa7a8ce/logo14.png", alt: "Client 14" },
    { src: "https://8upload.com/image/67a013aa6d86e/logo15.png", alt: "Client 15" },
  ];

  const items = logos.map((logo, index) => (
    <div key={index} className="flex justify-center items-center p-3">
      <img
        src={logo.src}
        alt={logo.alt}
        className="w-36 h-20 object-contain rounded-md shadow-md hover:scale-105 transition-transform duration-300"
      />
    </div>
  ));

  return (
    <section className="py-16 bg-gradient-to-b from-[#E3F6F5] to-[#C9F0EC] dark:bg-gray-900 text-[#044D59] dark:text-gray-200 font-sans">
      <div className="container px-6 mx-auto max-w-7xl text-center">
        {/* Header */}
        <h2 className="text-4xl font-extrabold mb-3 tracking-tight text-[#016C74] dark:text-emerald-400">
          Trusted by Our Valued Clients
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-[#05575B] dark:text-gray-300 mb-10 leading-relaxed">
          Qatar Plumbing, Electrical & Maintenance — Delivering expert plumbing, electrical, appliance repair, and general maintenance solutions throughout Qatar with professionalism and care.
        </p>

        {/* Carousel */}
        <AliceCarousel
          autoPlay
          autoPlayInterval={2200}
          infinite
          mouseTracking
          disableButtonsControls
          disableDotsControls
          items={items}
          responsive={{
            0: { items: 2 },
            640: { items: 3 },
            768: { items: 4 },
            1024: { items: 5 },
            1280: { items: 6 },
          }}
          animationDuration={900}
          animationType="slide"
          touchTracking
        />
      </div>
    </section>
  );
};

export default OurClient;
