import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaPhoneAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import useThemeSwitcher from "../../hooks/useThemeSwitcher";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SubscribeContact = () => {
  const [activeTheme] = useThemeSwitcher();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required.';
    if (!formData.email.trim()) errs.email = 'Email is required.';
    else if (!EMAIL_REGEX.test(formData.email.trim())) errs.email = 'Please enter a valid email.';
    if (!formData.message.trim()) errs.message = 'Message cannot be empty.';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
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
      setStatus('Please fix the highlighted errors.');
      return;
    }

    setIsSending(true);
    setStatus(null);

    emailjs
      .sendForm(
        'service_7b92lcx',
        'template_k6p49ij',
        e.target,
        'wqQwMjjepKRfJ6ah-'
      )
      .then(() => {
        setStatus('Thank you for contacting Qatar Plumbing, Electrical & Maintenance. We will get back to you shortly.');
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        setStatus('Oops! Something went wrong while sending your message. Please try again later.');
      })
      .finally(() => setIsSending(false));
  };

  return (
    <div className="container mx-auto py-16 px-4 max-w-6xl font-sans">
      {/* Header */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#007B8F] mb-3">
          Connect with Qatar Plumbing, Electrical & Maintenance
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Specializing in Plumbing Services, Electrical Services, Appliance Repairs, and General Maintenance across Doha and Qatar. Our expert team delivers safe, reliable, and efficient solutions tailored to your needs.
        </p>
      </motion.div>

      <section className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="p-8 bg-[#E0F7FA] dark:bg-gray-900 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-[#007B8F] mb-6">Contact Information</h2>
          <div className="space-y-4 text-gray-800 dark:text-gray-300 text-base leading-relaxed">
            <p><strong>Company Name:</strong> Qatar Plumbing, Electrical & Maintenance</p>
            <p><strong>Services:</strong> Plumbing, Electrical, Appliance Repairs, General Maintenance</p>
            <p><strong>Location:</strong> Zone 26, 850 Monsoura Street, Doha - Qatar</p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:info.qatarservices@gmail.com" className="text-[#007B8F] hover:text-[#005f66] underline">
                info.qatarservices@gmail.com
              </a>
            </p>
            <p>
              <strong>Contact Number:</strong>{' '}
              <a href="tel:+97477188527" className="text-[#007B8F] hover:text-[#005f66] underline">
                +974 7718 8527
              </a>
            </p>
            <div className="flex items-center gap-6 mt-6 text-3xl text-[#007B8F] dark:text-[#33bcbc]">
              <a
                href="https://wa.me/97477188527"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:text-[#005f66]"
              >
                <FaWhatsapp />
              </a>
              <a
                href="tel:+97477188527"
                aria-label="Phone"
                className="hover:text-[#005f66]"
              >
                <FaPhoneAlt />
              </a>
              <a
                href="https://www.facebook.com/share/1FrURQRnNv/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-[#005f66]"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/qatar_plumber_123?igsh=ZTB2M2Q0MGxrYm0="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-[#005f66]"
              >
                <FaInstagram />
              </a>
              <a
                href="mailto:info.qatarservices@gmail.com"
                aria-label="Email"
                className="hover:text-[#005f66]"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-[#007B8F] mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div>
              <label htmlFor="name" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 ${
                  errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                }`}
              />
              {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 ${
                  errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                }`}
              />
              {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 ${
                  errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                }`}
              />
              {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={isSending}
              className={`w-full py-3 rounded-lg font-semibold transition duration-300 ${
                isSending
                  ? 'bg-gray-400 cursor-not-allowed text-white'
                  : 'bg-[#007B8F] hover:bg-[#005f66] text-white'
              }`}
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {status && (
            <div className="text-center text-sm mt-4">
              <span
                className={
                  status.toLowerCase().includes('thank')
                    ? 'text-green-700 dark:text-green-400'
                    : 'text-red-600'
                }
              >
                {status}
              </span>
            </div>
          )}
        </motion.div>
      </section>
    </div>
  );
};

export default SubscribeContact;
