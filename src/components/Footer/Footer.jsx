import "./_Footer.scss";
import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import { motion } from "framer-motion";
export default function Footer() {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="paddings footer"
    >
      <motion.div variants={footerVariants} className="yPaddings container">
        {/* Left */}
        <div className="left">
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by{" "}
            <a href="mailto:ayhamalahmadcontact@gmail.com">saying hi</a>
          </span>
        </div>
        {/* Right */}
        <div className="right">
          <div className="info">
            <span className="secondaryText">Information</span>
            <p>145 New York, FL 5467, USA</p>
          </div>
          {/* menu */}
          <div className="menu">
            <li>Services</li>
            <li>Works</li>
            <li>Notes</li>
            <li>Experience</li>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
