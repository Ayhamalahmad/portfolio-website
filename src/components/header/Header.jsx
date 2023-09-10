import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import "./_header.scss";
import { motion } from "framer-motion";
import { headerVariants } from "../../utils/motion";
import { useEffect, useState } from "react";
export default function Header() {
  // handle Click
  const [clicked, SetClicked] = useState(false);
  // Handle Scroll To Set Header Box Shadow
  const [scrolled, setScrolled] = useState(false);
  const handleScrolled = () => {
    if (window.scrollY >= 200) {
      setScrolled(true);
    } else if (window.scrollY < 190) {
      setScrolled(false);
    }
  };
  useEffect(() => {
    // Add an event listener to the window's scroll event and call `handleScrolled` when scrolled.
    window.addEventListener("scroll", handleScrolled);
    // Return a cleanup function that removes the event listener when the component unmounts.
    return () => window.removeEventListener("scroll", handleScrolled);
  }, []);
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: true, amount: 0.25 }}
      // style={{boxShadow: headerShadow}}
      className={`wrapper paddings ${scrolled ? "scrolled" : ""}`}
    >
      <div className="container">
        <a href="#" className="logo">
          binjan
        </a>
        <ul className={`menu ${clicked ? "show" : ""}`}>
          <li>
            <a href="#services">services</a>
          </li>
          <li>
            <a href="#experience">experience</a>
          </li>
          <li>
            <a href="#portfolio">portfolio</a>
          </li>
          <li>
            <a href="#testimonials">testimonials</a>
          </li>
          <li className="phone">
            <p href="">+001 (313) 345 678</p>
            <MdOutlinePhoneInTalk />
          </li>
        </ul>
        <button onClick={() => SetClicked((e) => !e)} className="menu-icon">
          <span className={clicked ? "rotate" : ""}></span>
        </button>
      </div>
    </motion.div>
  );
}
