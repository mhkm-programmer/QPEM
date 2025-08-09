import React from "react";
import { motion, useReducedMotion } from "framer-motion";

// Components
import PageTitle from "../reusable/PageTitle";
import HeroSlider from "./heroBanner.jsx/HeroSlider";
import WhyChoose from "./WhyChoose";
import OurClient from "./OurClient";
import CustomerReviews from "./CustomerReviews";
import SubscreibeContact from "../contact/SubscreibeContact";
import Services_QPEM from "./Services_QPEM";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.4, 0, 0.2, 1],
      delay: custom * 0.12,
    },
  }),
};

const Home = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="home-page px-4 sm:px-6 md:px-8 max-w-7xl mx-auto text-slate-900 font-sans"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      {/* SEO Title */}
      <PageTitle title="Qatar Plumbing, Electrical & Maintenance | Trusted Services in Doha" />

      {/* Hero Banner */}
      <motion.section
        aria-label="Hero banner"
        className="hero-slider"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={shouldReduceMotion ? {} : fadeUp}
      >
        <HeroSlider />
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="services-section my-16 sm:my-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={shouldReduceMotion ? {} : container}
        aria-label="Core services offered"
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center mb-5 text-[#005f66]"
          variants={shouldReduceMotion ? {} : fadeUp}
        >
          Reliable Home & Office Services in Qatar
        </motion.h2>
        <motion.p
          className="text-center max-w-3xl mx-auto text-gray-700 dark:text-gray-400 mb-12 leading-relaxed px-4 sm:px-0"
          variants={shouldReduceMotion ? {} : fadeUp}
        >
          We specialize in Plumbing, Electrical, Appliance Repairs, and General
          Maintenance across Doha. Affordable, fast, and professional — QPEM
          delivers trusted, all-in-one solutions for your home and business.
        </motion.p>
        <motion.div variants={shouldReduceMotion ? {} : fadeUp}>
          <Services_QPEM />
        </motion.div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className="why-choose-us my-16 sm:my-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={shouldReduceMotion ? {} : container}
        aria-label="Why choose us"
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center mb-5 text-[#005f66]"
          variants={shouldReduceMotion ? {} : fadeUp}
        >
          Why Choose QPEM?
        </motion.h2>
        <motion.p
          className="text-center max-w-3xl mx-auto text-gray-700 dark:text-gray-400 mb-12 leading-relaxed px-4 sm:px-0"
          variants={shouldReduceMotion ? {} : fadeUp}
        >
          Trusted throughout Qatar, we provide rapid response, certified
          technicians, transparent pricing, and guaranteed satisfaction.
          Excellence and reliability define everything we do.
        </motion.p>
        <motion.div variants={shouldReduceMotion ? {} : fadeUp}>
          <WhyChoose />
        </motion.div>
      </motion.section>

      {/* Our Clients */}
      <motion.section
        className="our-clients my-16 sm:my-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={shouldReduceMotion ? {} : container}
        aria-label="Our clients"
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center mb-8 text-[#005f66]"
          variants={shouldReduceMotion ? {} : fadeUp}
        >
          Proudly Serving Clients in Qatar
        </motion.h2>
        <motion.div variants={shouldReduceMotion ? {} : fadeUp}>
          <OurClient />
        </motion.div>
      </motion.section>

      {/* Reviews */}
      <motion.section
        className="customer-reviews my-16 sm:my-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={shouldReduceMotion ? {} : container}
        aria-label="Customer reviews"
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center mb-8 text-[#005f66]"
          variants={shouldReduceMotion ? {} : fadeUp}
        >
          What Our Customers Say
        </motion.h2>
        <motion.div variants={shouldReduceMotion ? {} : fadeUp}>
          <CustomerReviews />
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="subscribe-contact my-16 sm:my-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={shouldReduceMotion ? {} : fadeUp}
        aria-label="Contact and newsletter"
      >
        <SubscreibeContact
          location="Zone 26, 850 Monsoura Street, Doha - Qatar"
          phone="+974 77188527"
          whatsapp="https://wa.me/97477188527"
          email="info.qatarservices@gmail.com"
          instagram="https://www.instagram.com/qatar_plumber_123?igsh=ZTB2M2Q0MGxrYm0="
          facebook="https://www.facebook.com/share/1FrURQRnNv/"
        />
      </motion.section>
    </div>
  );
};

export default Home;
