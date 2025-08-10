import { useState } from "react";
import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";
import CustomerReviews from "../pages/Home/CustomerReviews";
import Modal from "react-modal";
import { FaCogs, FaLightbulb, FaRulerCombined, FaCertificate } from "react-icons/fa";

const aluminiumGallery = [
  { type: "image", src: "https://8upload.com/image/6897ac7e84fb6/Plumber_3.jpg" },
  { type: "image", src: "https://8upload.com/image/6897ac7ed2e29/Plumber_4.jpg" },
  { type: "image", src: "https://8upload.com/image/6897ac7f1b432/Plumber_5.jpg" },
  { type: "image", src: "https://8upload.com/image/6897ac7fdbcab/Plumber_8.jpg" },
  { type: "image", src: "https://8upload.com/image/6897e36b0ec21/p1.jpg" },
  { type: "image", src: "https://8upload.com/image/6897ac8155c65/Plumber_10.jpg" },
];

Modal.setAppElement('#root');

const Plumbing = () => {
  const [modalMedia, setModalMedia] = useState(null);

  return (
    <div className="font-sans text-gray-800 dark:text-gray-100 bg-[#fdfdfd] dark:bg-gray-900">
      
      {/* Page Title for SEO */}
      <PageTitle title="Plumbing Services Qatar | Qatar Plumbing, Electrical & Maintenance" />

      {/* Hero Parallax */}
      <ParallaxSection
        imagePath="https://8upload.com/image/6897aa947687e/Plumber_6.jpg"
        title="Plumbing Services"
        subTitle="Reliable • Professional • Affordable"
      />

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#016C74] dark:text-emerald-400 mb-6">
          Professional Plumbing Solutions Across Qatar
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          From leak repairs and pipe installations to complete bathroom & kitchen plumbing, 
          we provide high-quality, fast, and cost-effective plumbing services for residential and commercial spaces.
        </p>
      </section>

      {/* Services Highlights */}
      <section className="bg-[#E3F6F5] dark:bg-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <FaRulerCombined size={36} className="mx-auto mb-4 text-[#016C74]" />,
              title: "Custom Installations",
              desc: "From water heaters to full bathroom setups — installed with precision.",
            },
            {
              icon: <FaLightbulb size={36} className="mx-auto mb-4 text-[#016C74]" />,
              title: "Smart Solutions",
              desc: "Modern plumbing systems designed to save water & reduce costs.",
            },
            {
              icon: <FaCogs size={36} className="mx-auto mb-4 text-[#016C74]" />,
              title: "Quick Repairs",
              desc: "Fast response to fix leaks, blockages, and emergency breakdowns.",
            },
          ].map(({ icon, title, desc }, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow hover:shadow-lg transition">
              {icon}
              <h3 className="text-xl font-semibold mb-2 text-[#016C74] dark:text-emerald-400">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center text-[#016C74] dark:text-emerald-400 mb-8">
          Plumbing Project Gallery
        </h3>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          A look at our recent plumbing projects — precision workmanship, clean finishes, and lasting quality.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {aluminiumGallery.map((media, index) => (
            <button
              key={index}
              onClick={() => setModalMedia(media)}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              aria-label={`View media ${index + 1}`}
            >
              {media.type === "image" ? (
                <img
                  src={media.src}
                  alt={`Plumbing work ${index + 1}`}
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
                    allowFullScreen
                  />
                </div>
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
              className="absolute top-4 right-4 text-2xl text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition"
              aria-label="Close Modal"
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
                    allowFullScreen
                  />
                </div>
              )
            )}
          </div>
        </Modal>
      </section>

      {/* Reviews */}
      <CustomerReviews />

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-[#E3F6F5] dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#016C74] dark:text-emerald-400 mb-6">
            Why Choose Qatar Plumbing, Electrical & Maintenance?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Reliable service, fair pricing, and quality you can trust — serving customers across Qatar.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Free Site Visit", desc: "We visit and assess your needs before starting work." },
              { title: "Fast Turnaround", desc: "Quick and efficient without compromising quality." },
              { title: "Competitive Rates", desc: "Top-quality service at affordable prices." },
            ].map(({ title, desc }, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
                <h3 className="font-semibold text-lg text-[#016C74] dark:text-emerald-400 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
              </div>
            ))}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow flex items-center gap-3">
              <FaCertificate className="text-[#016C74]" size={24} />
              <div>
                <h3 className="font-semibold text-lg text-[#016C74] dark:text-emerald-400">Certified Materials</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  All installations comply with international plumbing standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 bg-[#016C74] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Book Your Plumbing Service Today
        </h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Fast, affordable, and professional — Serving all locations across Qatar.
        </p>
        <a
          href="https://wa.me/97477188527"
          className="inline-block bg-white text-[#016C74] font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition"
        >
          Chat on WhatsApp
        </a>
      </section>

     
    </div>
  );
};

export default Plumbing;
