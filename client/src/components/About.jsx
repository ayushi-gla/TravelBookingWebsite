import React from "react";
import { motion } from "framer-motion";
import "../assets/styles/about.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const About = () => {
  return (
    <motion.div
      className="about_wrapper"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="about_content" variants={fadeInUp}>
        <h2>
          Explore Organized Adventures – <br /> Your Ultimate Travel Hack
        </h2>
        <p>
          Experience the freedom of seamless travel without the stress. Our
          expertly curated trips blend comfort, culture, and adventure. From
          hidden gems to must-see landmarks, every moment is planned for you.
          Enjoy exclusive perks, personalized itineraries, and local insights.
          Say goodbye to hassle – and hello to unforgettable journeys.
        </p>

        <motion.div className="about" variants={fadeInUp}>
          {[
            ["ri-building-4-line", "Accomodation"],
            ["ri-car-line", "Transportation Allowance"],
            ["ri-magic-line", "Exclusive Experiences"],
            ["ri-instance-line", "Local Recommendations"],
            ["ri-pin-distance-line", "Personalized Trip Crafting"],
            ["ri-phone-line", "24/7 Support"],
          ].map(([icon, label], i) => (
            <motion.p key={i} custom={i} variants={fadeInUp}
            >
              <i className={`ri ${icon} about-icon`}></i>
              {label}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
