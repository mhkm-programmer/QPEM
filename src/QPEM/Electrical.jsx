import { useState } from "react";
import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";
import CustomerReviews from "../pages/Home/CustomerReviews";
import Modal from "react-modal";
import { FaBolt, FaLightbulb, FaTools, FaCertificate } from "react-icons/fa";

const electricianGallery = [
  { type: "image", src: "https://8upload.com/image/6897e6d5c90a3/Electrician_3.jpg" },
  { type: "image", src: "https://8upload.com/image/6897e6d61469e/Electrician_4.jpg" },
  { type: "image", src: "https://8upload.com/image/6897e6d64cffa/Electrician_6.jpg" },
  { type: "image", src: "https://8upload.com/image/6897e6d79e084/Electrician_10.jpg" },
  { type: "image", src: "https://8upload.com/image/6897e8410a22b/e2.jpg" },
  { type: "image", src: "https://8upload.com/image/6897e84159246/e3.jpg" },
];

Modal.setAppElement("#root");

const Electrical = () => {
  const [modalMedia, setModalMedia] = useState(null);

  return (
    <div className="font-sans text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* SEO Title */}
      <PageTitle title="Electrical Services Qatar | Professional & Reliable Electricians" />

      {/* Hero Section */}
      <ParallaxSection
        imagePath="https://8upload.com/image/6897e6d685594/Electrician_7__1_.jpg"
        title="Electrical Services"
        subTitle="Safe • Reliable • Professional"
      />

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#2C2A4A] dark:text-yellow-400 mb-6">
          Expert Electrical Solutions for Homes & Businesses
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Our certified electricians deliver safe, efficient electrical installations, repairs, and maintenance.
          From wiring and lighting to troubleshooting and upgrades, we keep your systems reliable and compliant
          with Qatar’s safety standards.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <FaBolt size={40} className="mx-auto mb-4 text-yellow-500" />,
              title: "Wiring & Rewiring",
              desc: "Safe, efficient electrical wiring for new builds and renovations.",
            },
            {
              icon: <FaLightbulb size={40} className="mx-auto mb-4 text-yellow-500" />,
              title: "Lighting Solutions",
              desc: "Indoor, outdoor & decorative lighting for style and safety.",
            },
            {
              icon: <FaTools size={40} className="mx-auto mb-4 text-yellow-500" />,
              title: "Repairs & Maintenance",
              desc: "Fast, reliable fault detection & repairs for all electrical issues.",
            },
          ].map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300"
            >
              {icon}
              <h3 className="text-xl font-semibold mb-2 text-[#2C2A4A] dark:text-yellow-400">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center text-[#2C2A4A] dark:text-yellow-400 mb-8">
          Our Electrical Projects
        </h3>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          Browse our completed projects — from home lighting setups to large-scale commercial wiring.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {electricianGallery.map((media, index) => (
            <button
              key={index}
              onClick={() => setModalMedia(media)}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300"
              aria-label={`View media ${index + 1}`}
            >
              {media.type === "image" && (
                <img
                  src={media.src}
                  alt={`Electrical work ${index + 1}`}
                  className="w-full h-64 object-cover transform hover:scale-105 transition-all duration-500"
                />
              )}
            </button>
          ))}
        </div>

        {/* Modal Preview */}
        <Modal
          isOpen={!!modalMedia}
          onRequestClose={() => setModalMedia(null)}
          contentLabel="Media Preview"
          className="fixed inset-0 flex items-center justify-center p-4 z-[9999]"
          overlayClassName="fixed inset-0 bg-black bg-opacity-70 z-[9998]"
        >
          <div className="relative bg-white dark:bg-gray-900 rounded-xl p-4 max-w-4xl max-h-[90vh] w-full overflow-auto">
            <button
              onClick={() => setModalMedia(null)}
              className="absolute top-4 right-4 text-2xl z-[10000] text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition"
              aria-label="Close Modal"
            >
              ✕
            </button>
            {modalMedia?.type === "image" && (
              <img
                src={modalMedia.src}
                alt="Media Preview"
                className="max-w-full max-h-[80vh] mx-auto rounded"
              />
            )}
          </div>
        </Modal>
      </section>

      {/* Reviews */}
      <CustomerReviews />

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#2C2A4A] dark:text-yellow-400 mb-6">
            Why Choose Our Electricians?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Certified, experienced, and trusted across Qatar for safe, efficient, and affordable electrical services.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Free Consultation", desc: "We assess your needs and give expert recommendations." },
              { title: "Quick Service", desc: "Same-day repairs & rapid project completion." },
              { title: "Affordable Rates", desc: "High-quality work at fair prices." },
            ].map(({ title, desc }, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg text-yellow-500 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
              </div>
            ))}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition flex items-center gap-3">
              <FaCertificate className="text-yellow-500" size={24} />
              <div>
                <h3 className="font-semibold text-lg text-yellow-500">Certified Work</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  All services meet Qatar’s safety & quality standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#2C2A4A] dark:bg-[#1e1b3a] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Power Up Your Space with Professional Electrical Services
        </h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Get your free consultation & quotation today — available across Qatar.
        </p>
        <a
          href="https://wa.me/97477188527"
          className="inline-block bg-yellow-500 text-[#2C2A4A] font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-yellow-400 transition"
        >
          Chat on WhatsApp
        </a>
      </section>
    </div>
  );
};

export default Electrical;
