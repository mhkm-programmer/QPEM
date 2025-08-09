import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import Slider from "react-slick";
import React from "react";

const HeroSlider = () => {
  const slides = [
    {
      image: "https://8upload.com/image/6894fc5244174/Hero_9.jpg",
      title: "Professional Plumbing Solutions in Qatar",
      subtitle: "Certified residential & commercial plumbing services by Qatar Plumbing, Electrical & Maintenance.",
      buttonText: "Explore Plumbing Services",
      link: "/services/plumbing",
    },
    {
      image: "https://8upload.com/image/6894fd6c66aec/Hero_17.jpg",
      title: "Licensed Electrical Experts",
      subtitle: "Safe, modern, and reliable electrical services in Doha and across Qatar.",
      buttonText: "View Electrical Services",
      link: "/services/electrical",
    },
    {
      image: "https://8upload.com/image/6894fd6c1dc97/Hero_16.jpg",
      title: "Appliance Repair You Can Trust",
      subtitle: "Quick appliance diagnostics and repair for home and office equipment.",
      buttonText: "Book Appliance Repair",
      link: "/services/appliance",
    },
    {
      image: "https://8upload.com/image/6894fc51034cb/Hero_3.jpg",
      title: "Reliable General Maintenance",
      subtitle: "End-to-end facility maintenance services tailored for Qatar’s environment.",
      buttonText: "Browse Maintenance",
      link: "/services/maintenance",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    adaptiveHeight: true,
    pauseOnHover: false,
  };

  return (
    <div className="w-full">
      <Slider {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[70vh] md:h-[85vh] w-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 text-center">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-5 leading-tight drop-shadow-md">
                {slide.title}
              </h2>
              <p className="text-sm sm:text-lg md:text-xl text-gray-100 mb-5 sm:mb-6 max-w-2xl drop-shadow-sm">
                {slide.subtitle}
              </p>
              <a
                href={slide.link}
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm sm:text-base font-medium px-6 py-3 rounded-lg transition-shadow shadow-md"
              >
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}
      </Slider>

      {/* Call-to-Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 sm:mt-10 px-4 text-center max-w-screen-lg mx-auto">
       <a
  href="https://www.google.com/maps?q=Zone+26,+Street+850,+Building+30,+Najma,+Doha,+Qatar"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-indigo-600 hover:bg-indigo-700 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-xl shadow-md transition"
>
  📍 View Our Location
</a>
        <a
          href="https://wa.me/97477188527"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-5 py-3 bg-[#25D366] text-white rounded-xl hover:bg-[#1ebe5b] transition text-sm sm:text-base"
        >
          <FaWhatsapp /> Chat with Us on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default HeroSlider;
