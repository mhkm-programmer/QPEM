import { useState } from "react";
import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";
import CustomerReviews from "../pages/Home/CustomerReviews";
import Modal from "react-modal";
import {
  FaTools,
  FaClock,
  FaHandshake,
  FaCertificate,
} from "react-icons/fa";

const applianceGallery = [
  { type: "image", src: "https://8upload.com/image/6897ea2585b7b/Appliance_1.jpg" },
  { type: "image", src: "https://8upload.com/image/6897ea25d08b1/Appliance_2.jpg" },
  { type: "image", src: "https://8upload.com/image/6897ea2625b2f/Appliance_3.jpg" },
  { type: "image", src: "https://8upload.com/image/6897ea266a8d0/Appliance_4.jpg" },
  { type: "image", src: "https://8upload.com/image/6897ea26aa464/Appliance_5.jpg" },
  { type: "image", src: "https://8upload.com/image/6897ea26ede98/Appliance_6.jpg" },
];

Modal.setAppElement("#root");

const Appliance = () => {
  const [modalMedia, setModalMedia] = useState(null);

  return (
    <div className="font-sans text-gray-800 dark:text-gray-100 bg-[#fdfbf9] dark:bg-gray-900">
      <PageTitle title="Appliance Repair & Maintenance Qatar | Fast & Reliable Service" />

      <ParallaxSection
        imagePath="https://8upload.com/image/6897eb3a9b901/e3__1_.jpg"
        title="Appliance Services"
        subTitle="Efficient • Reliable • Affordable"
      />

      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4A342E] dark:text-white mb-6">
          Keep Your Appliances Running Like New
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          We provide expert repair and maintenance for all types of household and commercial appliances. 
          Whether it’s a quick fix or a complete overhaul — we’ve got you covered across Qatar.
        </p>
      </section>

      <section className="bg-[#f5f0e8] dark:bg-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <FaTools size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Expert Technicians",
              desc: "Certified professionals trained to repair all major appliance brands.",
            },
            {
              icon: <FaClock size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Same-Day Service",
              desc: "Quick response and fast turnaround to get your appliances working again.",
            },
            {
              icon: <FaHandshake size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Trusted Service",
              desc: "Transparent pricing, quality repairs, and excellent customer care.",
            },
          ].map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow hover:shadow-lg transition"
            >
              {icon}
              <h3 className="text-xl font-semibold mb-2 text-[#4A342E] dark:text-white">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center text-[#4A342E] dark:text-white mb-8">
          Recent Appliance Service Projects
        </h3>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          A glimpse of our appliance repair and maintenance work for clients across Qatar.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {applianceGallery.map((media, index) => (
            <button
              key={index}
              onClick={() => setModalMedia(media)}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              aria-label={`View media ${index + 1}`}
            >
              {media.type === "image" ? (
                <img
                  src={media.src}
                  alt={`Appliance service ${index + 1}`}
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
            {modalMedia &&
              (modalMedia.type === "image" ? (
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
              ))}
          </div>
        </Modal>
      </section>

      <CustomerReviews />

      <section className="py-20 px-6 bg-[#f2ede8] dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#4A342E] dark:text-white mb-6">
            Why Choose Qatar Plumbing, Electrical & Maintenance?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            From washing machines to refrigerators — we deliver reliable appliance services with skilled technicians and premium tools.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Free Inspection",
                desc: "We diagnose the problem before recommending the most effective solution.",
              },
              {
                title: "Quick Repairs",
                desc: "Our mobile team ensures minimal downtime for your appliances.",
              },
              {
                title: "Affordable Rates",
                desc: "Competitive pricing with no hidden costs.",
              },
            ].map(({ title, desc }, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
                <h3 className="font-semibold text-lg text-[#6B4226] dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
              </div>
            ))}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow flex items-center gap-3">
              <FaCertificate className="text-[#6B4226]" size={24} />
              <div>
                <h3 className="font-semibold text-lg text-[#6B4226] dark:text-white">Guaranteed Quality</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  All parts and repairs come with a satisfaction guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#4A342E] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Book Your Appliance Service Today
        </h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Call or message us now for same-day appliance repair anywhere in Qatar.
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

export default Appliance;
