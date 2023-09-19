import "./_Portfolio.scss";
import showCase_1 from "../../assets/images/showCase1.png";
import showCase_2 from "../../assets/images/showCase2.png";
import showCase_3 from "../../assets/images/showCase3.png";
import { motion } from "framer-motion";
import {
  fadeIn,
  staggerChildren,
  textVariant,
  textVariant2,
} from "../../utils/motion";
export default function Portfolio() {
  return (
    <motion.section id="portfolio"
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="paddings portfolio"
    >
      <div className="container">
        <div className="heading">
          <div>
            <span className="primaryText">my latest works</span>
            <p>Perfect solution for digital experience</p>
          </div>
          <span className="explore secondaryText">explore more works</span>
        </div>

        <div className="show-case">
          <motion.img
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            src={showCase_1}
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.7, 0.6)}
            src={showCase_2}
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            src={showCase_3}
            alt="project"
          />
        </div>
      </div>
    </motion.section>
  );
}
