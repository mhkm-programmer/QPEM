import {
  FaArrowDown,
  FaArrowUp,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COMPANY_INFO = {
  facebook: "https://www.facebook.com/share/1FrURQRnNv/",
  instagram: "https://www.instagram.com/qatar_plumber_123?igsh=ZTB2M2Q0MGxrYm0=",
  whatsapp: "https://wa.me/97477188527",
  phone: "+97477188527",
  email: "info.qatarservices@gmail.com",
};

const ContactBubble = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollBottom, setShowScrollBottom] = useState(true);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const vh = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      setShowScrollTop(scrollTop > 120);
      setShowScrollBottom(scrollTop + vh < fullHeight - 120);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToBottom = () =>
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });

  const iconSize = isMobile ? 22 : 26;

  return (
    <>
      {/* Contact Icons - Right Side */}
      <motion.div
        className="fixed bottom-5 right-5 flex flex-col items-center space-y-4 z-50 font-sans"
        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Facebook & Instagram - grouped on top */}
        <div className="flex space-x-4 mb-2">
          <a
            href={COMPANY_INFO.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-[#004d40] hover:text-[#00251a] transition-colors"
          >
            <FaFacebook size={iconSize} />
          </a>
          <a
            href={COMPANY_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-[#d81b60] hover:text-[#8b0f3a] transition-colors"
          >
            <FaInstagram size={iconSize} />
          </a>
        </div>

        {/* WhatsApp */}
        <a
          href={COMPANY_INFO.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="bg-[#2e7d32] hover:bg-[#1b4f1b] text-white p-3 rounded-full shadow-lg transition"
          title="WhatsApp: +974 77188527"
        >
          <FaWhatsapp size={iconSize} />
        </a>

        {/* Phone */}
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          aria-label="Phone"
          className="bg-[#00796b] hover:bg-[#004d40] text-white p-3 rounded-full shadow-lg transition"
          title="Call Us: +974 77188527"
        >
          <FaPhoneAlt size={iconSize} />
        </a>

        {/* Email */}
        <a
          href={`mailto:${COMPANY_INFO.email}`}
          aria-label="Email"
          className="bg-[#c62828] hover:bg-[#7f1d1d] text-white p-3 rounded-full shadow-lg transition"
          title="Email: info.qatarservices@gmail.com"
        >
          <FaEnvelope size={iconSize} />
        </a>
      </motion.div>

      {/* Scroll Buttons - Left Side */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-20 left-5 bg-[#004d40] text-white p-3 rounded-full shadow-md transition"
            title="Scroll to Top"
          >
            <FaArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showScrollBottom && (
          <motion.button
            onClick={scrollToBottom}
            aria-label="Scroll to bottom"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-16 left-5 bg-[#004d40] text-white p-3 rounded-full shadow-md transition"
            title="Scroll to Bottom"
          >
            <FaArrowDown size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactBubble;
