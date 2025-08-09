import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  FaArrowLeft,
  FaArrowRight,
  FaWhatsapp,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaSearchPlus,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import React, { useState } from "react";
import Slider from "react-slick";
import Modal from "react-modal";

Modal.setAppElement("#root");

const services = [
  {
    id: 1,
    name: "Plumbing Services",
    image: "https://8upload.com/image/68970a714f457/Plumber_7.jpg",
    subtitle: "Reliable plumbing solutions for homes and offices.",
    link: "/services/plumbing",
    rating: 5,
    discount: "10% OFF",
  },
  {
    id: 2,
    name: "Electrical Services",
    image: "https://8upload.com/image/68970b0e0b88d/Electrician_7__1_.jpg",
    subtitle: "Safe and certified electrical repairs and installations.",
    link: "/services/electrical",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Appliance Repairs",
    image: "https://8upload.com/image/68970b51ecbbe/Appliance_10.jpg",
    subtitle: "Quick and affordable repair for all your home appliances.",
    link: "/services/appliances",
    rating: 4.7,
  },
  {
    id: 4,
    name: "General Maintenance",
    image: "https://8upload.com/image/68970b827fe46/maintenance_8.jpg",
    subtitle: "One-stop solution for all your property maintenance needs.",
    link: "/services/maintenance",
    rating: 4.6,
  },
];

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100 transition"
    aria-label="Next slide"
  >
    <FaArrowRight className="text-gray-800" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100 transition"
    aria-label="Previous slide"
  >
    <FaArrowLeft className="text-gray-800" />
  </button>
);

const renderStars = (rating) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <div className="flex text-yellow-400 text-sm">
      {[...Array(full)].map((_, i) => <FaStar key={`full-${i}`} />)}
      {half && <FaStarHalfAlt key="half" />}
      {[...Array(empty)].map((_, i) => <FaRegStar key={`empty-${i}`} />)}
    </div>
  );
};

const Services_QPEM = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (image) => {
    setModalImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalImage("");
    setModalIsOpen(false);
  };

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-12 bg-emerald-50">
      <div className="max-w-screen-xl mx-auto">
        <Slider {...settings}>
          {services.map((service) => (
            <div key={service.id} className="px-4">
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition duration-300">
                {service.discount && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded shadow">
                    {service.discount}
                  </span>
                )}

                <div className="relative group">
                  <img
                    src={service.image}
                    alt={service.name}
                    loading="lazy"
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button
                    onClick={() => openModal(service.image)}
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition"
                    aria-label="Preview image"
                  >
                    <FaSearchPlus className="text-white text-2xl" />
                  </button>
                </div>

                <div className="p-6 flex flex-col h-56 justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                    <p className="text-sm text-gray-600 mt-2">{service.subtitle}</p>
                    <div className="mt-3">{renderStars(service.rating)}</div>
                  </div>

                  <div className="flex justify-between items-center gap-2 mt-5">
                    <Link
  to={service.link}
  className="px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium rounded-full bg-emerald-700 text-white hover:bg-emerald-800 transition text-center w-full sm:w-auto block sm:inline-block"
>
  View Details
</Link>

                <a
  href="https://wa.me/97477188527"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium rounded-full bg-green-600 text-white hover:bg-green-700 transition w-full sm:w-auto"
>
  <FaWhatsapp className="text-lg sm:text-xl" /> WhatsApp
</a>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="fixed inset-0 bg-black bg-opacity-70 z-50"
        className="relative bg-white rounded-xl max-w-3xl mx-auto p-4 shadow-2xl flex items-center justify-center mt-10 outline-none"
      >
        <div className="relative w-full">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-black bg-white rounded-full w-9 h-9 flex items-center justify-center text-lg font-bold shadow hover:bg-gray-200 transition"
            aria-label="Close"
          >
            &times;
          </button>
          <img
            src={modalImage}
            alt="Preview"
            className="w-full h-auto max-h-[80vh] object-contain rounded"
          />
        </div>
      </Modal>
    </section>
  );
};

export default Services_QPEM;
