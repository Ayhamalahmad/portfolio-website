import "./_works.scss";
import { workExp } from "../../utils/data";
import { motion } from "framer-motion";
import {
  draw,
  fadeIn,
  slideIn,
  staggerChildren,
  textVariant2,
  zoomIn,
} from "../../utils/motion";
export default function Works() {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="paddings works"
    >
      <div className="container">
        <span className="primaryText yPaddings">my work experience</span>
        <div className="experiences">
          {workExp.map((experience, index) => {
            return (
              <motion.div
                variants={textVariant2}
                className="experience"
                key={index}
              >
                <div className="post">
                  <h1>{experience.place}</h1>
                  <p>{experience.tenure}</p>
                </div>
                <div className="role">
                  <h1>{experience.role}</h1>
                  <p>{experience.detail}</p>
                </div>
              </motion.div>
            );
          })}

          <motion.div variants={zoomIn(1, 1)} className="progressbar">
            <motion.div
              variants={fadeIn("down", "tween", 2, 1.5)}
              className="line"
            ></motion.div>
            <div>
              <div className="circle circle-1"></div>
            </div>
            <div>
              <div className="circle circle-2"></div>
            </div>
            <div>
              <div className="circle circle-3"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
