import { useState } from "react";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaWhatsapp, FaEnvelope, FaExclamationCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import PageTitle from "../reusable/PageTitle";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const [activeTheme] = useThemeSwitcher();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required.";
    if (!formData.email.trim()) errs.email = "Email is required.";
    else if (!EMAIL_REGEX.test(formData.email.trim())) errs.email = "Invalid email address.";
    if (!formData.message.trim()) errs.message = "Message cannot be empty.";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: undefined }));
    setStatus(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSending) return;

    const trimmed = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };
    setFormData(trimmed);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      setStatus("Please fix the errors before submitting.");
      return;
    }

    setIsSending(true);
    setStatus(null);

    emailjs
      .sendForm(
        "service_7b92lcx",
        "template_k6p49ij",
        e.target,
        "wqQwMjjepKRfJ6ah-"
      )
      .then(
        () => {
          setStatus("Your message has been sent successfully.");
          setFormData({ name: "", email: "", message: "" });
          setErrors({});
        },
        (err) => {
          console.error("EmailJS error:", err);
          setStatus("Failed to send the message. Please try again later.");
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <div className="container mx-auto py-16 px-6 lg:px-12 font-sans" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <PageTitle title="Qatar Plumbing, Electrical & Maintenance | Contact" />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-extrabold text-[#0A5242] mb-3 tracking-tight">
          Qatar Plumbing, Electrical & Maintenance
        </h1>
        <h2 className="text-xl font-semibold text-[#0A3C26] mb-6">
          Reliable Plumbing, Electrical, Appliance Repairs & Maintenance in Doha, Qatar
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg max-w-xl mx-auto">
          Our expert services include:
        </p>
        <ul className="list-disc list-inside text-[#0A5242] font-medium mt-4 space-y-1 max-w-xs mx-auto">
          <li>Plumbing Services</li>
          <li>Electrical Services</li>
          <li>Appliance Repairs</li>
          <li>General Maintenance</li>
        </ul>
        <p className="text-gray-700 mt-6 leading-relaxed text-lg max-w-xl mx-auto">
          Serving homes and offices across Doha with professionalism, quality, and fast response.
        </p>
      </motion.div>

      <section className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Map & Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col justify-between space-y-8"
        >
          <div className="h-72 sm:h-96 lg:h-[28rem] w-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <a
              href="https://www.google.com/maps/place/Zone+26,+Street+850,+Building+45,+Flat+2,+Apartment+No+5,+Doha,+Qatar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Location on Google Maps"
              className="block w-full h-full"
            >
              <img
                src="https://8upload.com/image/67ac615fe0e96/Screenshot_4.png"
                alt="Location map for Qatar Plumbing, Electrical & Maintenance"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </a>
          </div>

          <div className="bg-[#0A3C26] text-white rounded-xl p-8 shadow-lg">
            <h3 className="text-3xl font-semibold mb-6 tracking-wide">Contact Details</h3>
            <p className="mb-3">
              <strong>Phone:</strong>{" "}
              <a href="tel:+97477188527" className="underline hover:text-[#70B77E] transition">
                +974 7718 8527
              </a>
            </p>
            <p className="mb-3">
              <strong>Location:</strong> Zone 26, 850 Monsoura Street, Doha - Qatar
            </p>
            <p className="mb-6">
              <strong>Email:</strong>{" "}
              <a href="mailto:info.qatarservices@gmail.com" className="underline hover:text-[#70B77E] transition">
                info.qatarservices@gmail.com
              </a>
            </p>
            <div className="flex gap-8 text-white text-2xl">
              <a
                href="https://www.facebook.com/share/1FrURQRnNv/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-[#70B77E] transition"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/qatar_plumber_123?igsh=ZTB2M2Q0MGxrYm0="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-[#70B77E] transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/97477188527"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:text-[#70B77E] transition"
              >
                <FaWhatsapp />
              </a>
              <a href="tel:+97477188527" aria-label="Phone" className="hover:text-[#70B77E] transition">
                <FaPhoneAlt />
              </a>
              <a href="mailto:info.qatarservices@gmail.com" aria-label="Email" className="hover:text-[#70B77E] transition">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-50 p-10 rounded-xl shadow-xl flex flex-col justify-between"
        >
          <h2 className="text-3xl font-bold text-[#0A3C26] mb-6 tracking-tight">Get In Touch</h2>
          <p className="mb-8 text-gray-700 leading-relaxed">
            Fill out the form below for inquiries, quotes, or service requests. Our team will respond promptly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A3C26] text-gray-900 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } transition`}
                required
              />
              {errors.name && (
                <p className="flex items-center gap-2 mt-1 text-xs text-red-600 font-medium">
                  <FaExclamationCircle /> {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A3C26] text-gray-900 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } transition`}
                required
              />
              {errors.email && (
                <p className="flex items-center gap-2 mt-1 text-xs text-red-600 font-medium">
                  <FaExclamationCircle /> {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A3C26] text-gray-900 resize-none ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } transition`}
                required
              />
              {errors.message && (
                <p className="flex items-center gap-2 mt-1 text-xs text-red-600 font-medium">
                  <FaExclamationCircle /> {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSending}
              className={`w-full py-3 rounded-lg font-semibold text-white text-lg transition-colors duration-300 ${
                isSending
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#0A5242] hover:bg-[#2D6A4F]"
              }`}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>

          {status && (
            <p
              className={`mt-6 text-center font-semibold ${
                status.toLowerCase().includes("success") ? "text-green-600" : "text-red-600"
              }`}
              role="alert"
            >
              {status}
            </p>
          )}
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
