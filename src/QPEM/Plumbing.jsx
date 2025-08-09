import { useState } from "react";
import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";
import CustomerReviews from "../pages/Home/CustomerReviews";
import Modal from "react-modal";
import { FaCogs, FaLightbulb, FaRulerCombined, FaCertificate } from "react-icons/fa";

const aluminiumGallery = [
  { type: "image", src: "https://8upload.com/image/688810e831f04/IMG-20250630-WA0036.jpg" },
  { type: "image", src: "https://8upload.com/image/688810e7acd00/IMG-20250630-WA0007.jpg" },
  { type: "image", src: "https://8upload.com/image/688810e765feb/IMG-20250630-WA0005.jpg" },
  { type: "image", src: "https://8upload.com/image/688810e744611/IMG-20250630-WA0004.jpg" },
  { type: "image", src: "https://8upload.com/image/688810e7237ee/IMG-20250630-WA0003.jpg" },
  { type: "image", src: "https://8upload.com/image/688810e814f37/IMG-20250630-WA0010.jpg" },
];

Modal.setAppElement('#root');

const Plumbing = () => {
  const [modalMedia, setModalMedia] = useState(null);

  return (
    <div className="font-sans text-gray-800 dark:text-gray-100 bg-[#fdfbf9] dark:bg-gray-900">
      <PageTitle title="Aluminium Works Qatar | Stylish & Durable Solutions | Curtains Furniture" />

      <ParallaxSection
        imagePath="https://8upload.com/image/68880f4ac8621/Alumi1-min.png"
        title="Aluminium Works"
        subTitle="Elegant. Strong. Long-Lasting."
      />

      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4A342E] dark:text-white mb-6">
          Premium Aluminium Solutions for Every Space
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          From windows and doors to partitions and facades, our aluminium services blend design, durability, and precision. Perfect for residential, commercial, and industrial needs.
        </p>
      </section>

      <section className="bg-[#f5f0e8] dark:bg-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <FaRulerCombined size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Custom Fabrication",
              desc: "Tailored aluminium designs to fit any architectural style or specification.",
            },
            {
              icon: <FaLightbulb size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Modern Finishing",
              desc: "Elegant powder-coated and anodized finishes with long-lasting color retention.",
            },
            {
              icon: <FaCogs size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Precision Installation",
              desc: "Expert onsite fitting ensuring seamless integration and maximum strength.",
            },
          ].map(({ icon, title, desc }, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow hover:shadow-lg transition">
              {icon}
              <h3 className="text-xl font-semibold mb-2 text-[#4A342E] dark:text-white">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center text-[#4A342E] dark:text-white mb-8">
          Project Gallery
        </h3>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          A showcase of our aluminium expertise across Qatar — precision-crafted and professionally installed.
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
                  alt={`Aluminium work ${index + 1}`}
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

      <CustomerReviews />

      <section className="py-20 px-6 bg-[#f2ede8] dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#4A342E] dark:text-white mb-6">
            Why Choose Our Aluminium Works?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Quality materials. Skilled technicians. Trusted by clients across Qatar for reliable aluminium solutions.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Free Site Visit", desc: "We assess your site and suggest the best aluminium options for your needs." },
              { title: "Fast Turnaround", desc: "From design to installation — we deliver quickly without compromising quality." },
              { title: "Value Pricing", desc: "Get top-grade aluminium work at competitive rates for any size of project." },
            ].map(({ title, desc }, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
                <h3 className="font-semibold text-lg text-[#6B4226] dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
              </div>
            ))}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow flex items-center gap-3">
              <FaCertificate className="text-[#6B4226]" size={24} />
              <div>
                <h3 className="font-semibold text-lg text-[#6B4226] dark:text-white">Certified Materials</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  All aluminium profiles and accessories comply with international quality standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#4A342E] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Transform Your Space with Precision Aluminium
        </h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Get a free consultation and quotation from our experts — serving all locations across Qatar.
        </p>
        <a
          href="https://wa.me/97466280037"
          className="inline-block bg-white text-[#4A342E] font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition"
        >
          Chat on WhatsApp
        </a>
      </section>
    </div>
  );
};

export default Plumbing;

