import { NavLink } from "react-router-dom";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0C1E3B] text-gray-300 text-sm font-sans">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Qatar Plumbing, Electrical & Maintenance
          </h2>
          <p className="mb-3 text-gray-400">
            Trusted plumbing, electrical, and maintenance solutions for homes and businesses across Qatar.
          </p>
          <p className="mb-2 text-gray-400">
            <FaMapMarkerAlt className="inline mr-2 text-yellow-400" />
            Zone 26, 850 Monsoura Street, Doha - Qatar
          </p>
          <p className="mb-2 text-gray-400">
            <FaEnvelope className="inline mr-2 text-yellow-400" />
            <a
              href="mailto:info.qpem@gmail.com"
              className="hover:text-yellow-400 underline"
            >
              info.qpem@gmail.com
            </a>
          </p>
          <p className="mb-2 text-gray-400">
            <FaPhoneAlt className="inline mr-2 text-yellow-400" />
            +974 7718 8527
          </p>
          <p className="mb-2 text-gray-400">
            <FaWhatsapp className="inline mr-2 text-green-400" />
            WhatsApp: +974 7718 8527
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className="hover:text-yellow-400 transition">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="hover:text-yellow-400 transition">
                Our Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-yellow-400 transition">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>
              <NavLink to="/services/plumbing" className="hover:text-yellow-400 transition">
                Plumbing Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/services/electrical" className="hover:text-yellow-400 transition">
                Electrical Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/services/appliance-repairs" className="hover:text-yellow-400 transition">
                Appliance Repairs
              </NavLink>
            </li>
            <li>
              <NavLink to="/services/maintenance" className="hover:text-yellow-400 transition">
                General Maintenance
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Social + Bottom Row */}
      <div className="border-t border-gray-700 mt-8 pt-6 pb-6 px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-yellow-400" />
            <span>+974 7718 8527</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-yellow-400" />
            <span>info.qpem@gmail.com</span>
          </div>
        </div>

        <div className="flex items-center gap-5 text-lg">
          <a
            href="https://www.facebook.com/share/1FrURQRnNv/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-500 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/qatar_plumber_123?igsh=ZTB2M2Q0MGxrYm0="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/97477188527"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-green-400 transition"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className="text-center py-4 text-xs text-gray-500">
        © {new Date().getFullYear()} Qatar Plumbing, Electrical & Maintenance. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
