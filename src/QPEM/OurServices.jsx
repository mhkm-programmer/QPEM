import {
  FaTools,
  FaBolt,
  FaCogs,
  FaWrench,
} from "react-icons/fa";
import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";
import React from "react";
import CustomerReviews from "../pages/Home/CustomerReviews";
import Services_QPEM from "../pages/Home/Services_QPEM";

// react-slick imports
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    icon: <FaTools size={40} className="text-[#0f3d3e] mx-auto mb-3" />,
    title: "Plumbing Services",
    desc: "Leak repairs, pipe installations, water heater services, and complete plumbing solutions.",
  },
  {
    icon: <FaBolt size={40} className="text-[#0f3d3e] mx-auto mb-3" />,
    title: "Electrical Services",
    desc: "Wiring, lighting, panel upgrades, troubleshooting, and electrical safety inspections.",
  },
  {
    icon: <FaCogs size={40} className="text-[#0f3d3e] mx-auto mb-3" />,
    title: "Appliance Repairs",
    desc: "Expert repair and maintenance of washing machines, refrigerators, ovens, and more.",
  },
  {
    icon: <FaWrench size={40} className="text-[#0f3d3e] mx-auto mb-3" />,
    title: "General Maintenance",
    desc: "Reliable handyman services, preventive maintenance, and property care solutions.",
  },
];

const OurServices = () => {
  // react-slick settings for mobile
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  };

  return (
    <main className="font-sans text-gray-800 bg-[#f9fafb] dark:bg-gray-900">
      {/* SEO Meta Title */}
      <PageTitle title="Qatar Plumbing, Electrical & Maintenance | Expert Home & Commercial Solutions" />

      {/* Hero Section */}
      <ParallaxSection
        imagePath="https://8upload.com/image/6895055e919cb/Services.jpg"
        title="Reliable Plumbing, Electrical & Maintenance Solutions"
        subTitle="Professional Service, Every Time – قطر لخدمات السباكة والكهرباء والصيانة"
      />

      {/* Introduction */}
      <section
        aria-labelledby="intro-title"
        className="max-w-7xl mx-auto px-6 py-16 text-center"
      >
        <h1
          id="intro-title"
          className="text-4xl md:text-5xl font-bold mb-6 text-[#0f3d3e] dark:text-white"
        >
          Your One-Stop Maintenance Partner in Qatar
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          At <strong>Qatar Plumbing, Electrical & Maintenance (QPEM)</strong>, 
          we provide expert plumbing, electrical work, appliance repairs, and general maintenance 
          for homes and businesses in Doha. Our skilled team ensures high-quality, 
          timely, and affordable solutions – every single time.
        </p>
      </section>

      {/* Desktop Grid */}
      <section className="bg-[#e6f0ee] dark:bg-gray-800 py-16 px-6 hidden sm:block">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {services.map(({ icon, title, desc }, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              {icon}
              <h3 className="text-lg font-semibold mb-2 text-[#0f3d3e] dark:text-white">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile Slider */}
      <section className="bg-[#e6f0ee] dark:bg-gray-800 py-12 px-4 sm:hidden">
        <Slider {...sliderSettings}>
          {services.map(({ icon, title, desc }, idx) => (
            <div key={idx}>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow hover:shadow-lg transition text-center mx-2">
                {icon}
                <h3 className="text-lg font-semibold mb-2 text-[#0f3d3e] dark:text-white">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Product Highlights */}
      <Services_QPEM />

      <CustomerReviews />

      {/* Call To Action */}
      <section
        aria-label="Get in touch"
        className="py-20 bg-[#0f3d3e] text-white text-center px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let’s Get Your Job Done Right
        </h2>
        <p className="text-lg mb-6 max-w-xl mx-auto leading-relaxed">
          Call or message <strong>Qatar Plumbing, Electrical & Maintenance</strong> today 
          for reliable service in <strong>Zone 26, 850 Monsoura Street, Doha - Qatar</strong>.
        </p>
        <a
          href="https://wa.me/97477188527"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#17b890] hover:bg-[#14a07c] text-white font-semibold px-6 py-3 rounded-xl shadow-md transition"
        >
          📞 Contact Us on WhatsApp
        </a>

        <div className="mt-6 space-y-1 text-gray-300 text-sm">
          <p>📍 Zone 26, 850 Monsoura Street, Doha - Qatar</p>
          <p>📧 info.qpem@gmail.com</p>
          <p>📞 +974 77188527</p>
          <p>
            <a href="https://www.instagram.com/qatar_plumber_123?igsh=ZTB2M2Q0MGxrYm0=" className="underline">Instagram</a> | 
            <a href="https://www.facebook.com/share/1FrURQRnNv/" className="underline ml-2">Facebook</a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default OurServices;
