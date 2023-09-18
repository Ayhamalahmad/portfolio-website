import "./_Experties.scss";
import { projectExperience, WhatDoIHelp } from "../../utils/data";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion.js";
export default function Experties() {
  return (
    <motion.div

    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    
     className="experties">
      <motion.div className="container  paddings xPaddings">
        {/* start LeftSide */}
        <div className="leftside">
          {projectExperience.map((experience, index) => {
            return (
              <motion.div variants = {fadeIn("right", "tween", (index+1)*0.2, 1)} key={index} className="experience">
                <div className="icons">
                  <experience.icon />
                </div>
                <div className="experience-details">
                  <span>{experience.name}</span>
                  <span className="secondaryText">
                    {experience.projects}projects
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
        {/* start Right */}
        <motion.div
          variants={textVariant(0.5)}
         className="rightside">
          <span className="primaryText">What do I help?</span>
          {WhatDoIHelp.map((paragraph, index) => {
            return (
              <span className="secondaryText" key={index}>
                {paragraph}
              </span>
            );
          })}
          <div className="stats">
            <div className="stat">
              <span className="primaryText">285+</span>
              <span className="secondaryText">Projects Completed</span>
            </div>
            <div className="stat">
              <span className="primaryText">190+</span>
              <span className="secondaryText">Happy Clients</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
