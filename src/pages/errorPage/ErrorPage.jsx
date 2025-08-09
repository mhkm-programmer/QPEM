import { Link } from "react-router-dom";
import PageTitle from "../reusable/PageTitle";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const ErrorPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gradient-to-br from-white via-slate-100 to-slate-200 min-h-screen flex items-center justify-center px-6 py-16"
    >
      <PageTitle title="Qatar Plumbing, Electrical & Maintenance | Page Not Found" />

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col-reverse md:flex-row-reverse items-center justify-between max-w-6xl w-full gap-12 bg-white rounded-2xl shadow-lg p-8"
      >
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://i.ibb.co/r03Pv6N/6342464-min.jpg"
            alt="QPEM - Page Not Found"
            className="w-full h-auto drop-shadow-lg rounded-xl"
            loading="lazy"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="text-center md:text-left space-y-5">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-emerald-700">
              404 — Page Not Found
            </h1>
            <p className="text-gray-700 text-lg sm:text-xl">
              The page you’re looking for isn’t available. It might have been moved, renamed, or removed.
            </p>

            <div className="mt-4 flex flex-col sm:flex-row gap-4 sm:items-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-700 text-white rounded-full font-semibold hover:bg-emerald-800 transition"
              >
                Go Back Home <FaArrowRight />
              </Link>
            </div>

            {/* Company Info */}
            <div className="mt-8 bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-inner">
              <h2 className="text-lg font-semibold text-gray-800">
                Qatar Plumbing, Electrical & Maintenance (QPEM)
              </h2>
              <p className="text-sm text-gray-600 mb-1">
                Your trusted maintenance partner in Qatar.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="text-emerald-600" />{" "}
                  <span>+974 7718 8527</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaWhatsapp className="text-green-500" />{" "}
                  <span>+974 7718 8527</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-emerald-600" />{" "}
                  <span>info.qpem@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-emerald-600" />
                  <span>Zone 26, 850 Monsoura Street, Doha - Qatar</span>
                </div>
              </div>

              <div className="flex gap-4 mt-4 text-sm">
                <a
                  href="https://www.facebook.com/share/1FrURQRnNv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-emerald-600"
                >
                  <FaFacebook /> Facebook
                </a>
                <a
                  href="https://www.instagram.com/qatar_plumber_123?igsh=ZTB2M2Q0MGxrYm0="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-emerald-600"
                >
                  <FaInstagram /> Instagram
                </a>
              </div>

              <div className="mt-5">
                <p className="font-semibold">Our Services:</p>
                <ul className="list-disc list-inside text-sm space-y-1 text-gray-600 mt-2">
                  <li>Plumbing Services</li>
                  <li>Electrical Services</li>
                  <li>Appliance Repairs</li>
                  <li>General Maintenance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.main>
  );
};

export default ErrorPage;
