import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const features = [
  {
    title: "Plumbing Services",
    description:
      "Expert plumbing solutions for homes and businesses — from leak repairs to complete piping installations, done right the first time.",
    image: "https://8upload.com/image/68971aa90ada0/Plumber_9.jpg",
    link: "/services/plumbing",
  },
  {
    title: "Electrical Services",
    description:
      "Safe, reliable electrical installations and repairs for residential and commercial projects across Doha and Qatar.",
    image: "https://8upload.com/image/68971adcb8464/Electrician_7.jpg",
    link: "/services/electrical",
  },
  {
    title: "Appliance Repairs",
    description:
      "Quick and professional repair of all household and commercial appliances — ensuring smooth and efficient operation.",
    image: "https://8upload.com/image/68971b6746329/Hero_18.jpg",
    link: "/services/appliance",
  },
  {
    title: "General Maintenance",
    description:
      "Comprehensive property maintenance to keep your space functional, safe, and looking its best all year round.",
    image: "https://8upload.com/image/68971ba5d982b/maintenance_10.jpg",
    link: "/services/maintenance",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  pauseOnHover: false, // Important to keep autoplay running on hover
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

const WhyChoose = () => {
  return (
    <section className="px-6 py-12 lg:py-20 bg-[#F5FAFF] dark:bg-gray-900 text-gray-800 dark:text-white font-sans">
      {/* Logo */}
      <div className="flex justify-center mb-10">
        <img
          src="https://8upload.com/image/6886bfe4749c0/Screenshot_at_Jul_28_02-58-35.png"
          alt="Qatar Plumbing, Electrical & Maintenance Logo"
          className="h-24 w-24 rounded-xl shadow-xl border-4 border-[#007B8F]"
        />
      </div>

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-bold mb-4 text-[#004E5E] dark:text-white">
          Why Choose{" "}
          <span className="text-[#007B8F]">
            Qatar Plumbing, Electrical & Maintenance
          </span>
          ?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Your trusted partner in plumbing, electrical, appliance repairs, and
          general maintenance across Qatar. We deliver quality, safety, and
          efficiency — every time.
        </p>
      </div>

      {/* Slider */}
      <div className="max-w-6xl mx-auto">
        <Slider {...sliderSettings}>
          {features.map(({ title, description, image, link }, index) => (
            <Link
              key={index}
              to={link}
              className="px-4 focus:outline-none"
              tabIndex={0}
            >
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 text-center cursor-pointer h-full flex flex-col">
                <div className="flex justify-center mb-5">
                  <div className="w-24 h-24 rounded-full bg-[#E0F7FA] dark:bg-[#005B6A] flex items-center justify-center shadow-inner mx-auto">
                    <img
                      src={image}
                      alt={title}
                      className="h-20 w-20 object-contain rounded-full"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#007B8F] dark:text-white mb-2">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 flex-grow">
                  {description}
                </p>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WhyChoose;
