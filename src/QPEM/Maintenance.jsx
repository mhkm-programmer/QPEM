import { useState } from "react";
import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";
import CustomerReviews from "../pages/Home/CustomerReviews";
import Modal from "react-modal";
import {
  FaTools,
  FaLightbulb,
  FaWrench,
  FaCertificate,
  FaClock,
} from "react-icons/fa";

const maintenanceGallery = [
  { type: "image", src: "https://8upload.com/image/6897eccc549ba/maintenance_9.jpg" },
  { type: "image", src: "https://8upload.com/image/6897eccbc9ae9/maintenance_7.jpg" },
  { type: "image", src: "https://8upload.com/image/6897eccb8e689/maintenance_6.jpg" },
  { type: "image", src: "https://8upload.com/image/6897eccb21901/maintenance_4.jpg" },
  { type: "image", src: "https://8upload.com/image/6897eccad8c23/maintenance_3.jpg" },
  { type: "image", src: "https://8upload.com/image/6897ecca4b84f/maintenance_1.jpg" },
];

Modal.setAppElement("#root");

const Maintenance = () => {
  const [modalMedia, setModalMedia] = useState(null);

  return (
    <div className="font-sans text-gray-800 dark:text-gray-100 bg-[#faf8f6] dark:bg-gray-900">
      <PageTitle title="Qatar Plumbing, Electrical & Maintenance | Professional Services" />

      <ParallaxSection
        imagePath="https://8upload.com/image/6897ee1085e5e/e3__2_.jpg"
        title="Maintenance Services"
        subTitle="Reliable • Skilled • Professional"
      />

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4A342E] dark:text-white mb-6">
          Your Trusted Maintenance Experts in Qatar
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Offering complete solutions for plumbing, electrical, appliance repairs, and general maintenance.
          We combine technical expertise with quality service for homes and businesses.
        </p>
      </section>

      {/* Services */}
      <section className="bg-[#f5f0e8] dark:bg-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">
          {[
            {
              icon: <FaWrench size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Plumbing Services",
              desc: "Leak repairs, pipe installations, and bathroom/kitchen fittings.",
            },
            {
              icon: <FaLightbulb size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Electrical Services",
              desc: "Wiring, lighting, power systems, and troubleshooting.",
            },
            {
              icon: <FaTools size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Appliance Repairs",
              desc: "Fixing refrigerators, washing machines, AC units, and more.",
            },
            {
              icon: <FaClock size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "General Maintenance",
              desc: "All-round upkeep for residential, commercial, and industrial spaces.",
            },
          ].map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow hover:shadow-lg transition"
            >
              {icon}
              <h3 className="text-xl font-semibold mb-2 text-[#4A342E] dark:text-white">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center text-[#4A342E] dark:text-white mb-8">
          Our Work Showcase
        </h3>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          A glimpse of the quality and precision we deliver across Qatar.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {maintenanceGallery.map((media, index) => (
            <button
              key={index}
              onClick={() => setModalMedia(media)}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              {media.type === "image" ? (
                <img
                  src={media.src}
                  alt={`Maintenance work ${index + 1}`}
                  className="w-full h-64 object-cover transform hover:scale-105 transition-all duration-500"
                />
              ) : (
                <div className="w-full h-64 bg-black overflow-hidden">
                  <iframe
                    src={media.src}
                    title={`Video ${index + 1}`}
                    className="w-full h-full object-cover"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                  />
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Modal */}
        <Modal
          isOpen={!!modalMedia}
          onRequestClose={() => setModalMedia(null)}
          className="fixed inset-0 flex items-center justify-center p-4 z-[9999]"
          overlayClassName="fixed inset-0 bg-black bg-opacity-70 z-[9998]"
        >
          <div className="relative bg-white dark:bg-gray-900 rounded-xl p-4 max-w-4xl max-h-[90vh] w-full overflow-auto">
            <button
              onClick={() => setModalMedia(null)}
              className="absolute top-4 right-4 text-2xl text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition"
            >
              ✕
            </button>
            {modalMedia && (
              modalMedia.type === "image" ? (
                <img
                  src={modalMedia.src}
                  alt="Media Preview"
                  className="max-w-full max-h-[80vh] mx-auto rounded"
                />
              ) : (
                <div className="w-full h-[80vh] overflow-hidden">
                  <iframe
                    src={modalMedia.src}
                    title="Video Preview"
                    className="w-full h-full rounded-xl"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                  />
                </div>
              )
            )}
          </div>
        </Modal>
      </section>

      <CustomerReviews />

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-[#f2ede8] dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#4A342E] dark:text-white mb-6">
            Why Choose Our Maintenance Services?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Skilled team. Prompt service. Transparent pricing. Trusted by clients across Qatar.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Free Consultation",
                desc: "We assess your needs and recommend tailored solutions.",
              },
              {
                title: "Quick Response",
                desc: "We handle emergencies and urgent repairs efficiently.",
              },
              {
                title: "Affordable Rates",
                desc: "Top-quality service at competitive pricing.",
              },
            ].map(({ title, desc }, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow"
              >
                <h3 className="font-semibold text-lg text-[#6B4226] dark:text-white mb-2">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
              </div>
            ))}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow flex items-center gap-3">
              <FaCertificate className="text-[#6B4226]" size={24} />
              <div>
                <h3 className="font-semibold text-lg text-[#6B4226] dark:text-white">
                  Certified Experts
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Our team is certified and trained to meet international safety standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#4A342E] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need Reliable Maintenance Services?
        </h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Get a free consultation and quotation from our team — serving all of Qatar.
        </p>
        <a
          href="https://wa.me/97477188527"
          className="inline-block bg-white text-[#4A342E] font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition"
        >
          Chat on WhatsApp
        </a>
      </section>
    </div>
  );
};

export default Maintenance;
