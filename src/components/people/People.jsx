import "./_people.scss";
import { comments, sliderSettings } from "../../utils/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { motion } from "framer-motion";
import {
  footerVariants,
  staggerChildren,
  textVariant,
  textVariant2,
} from "../../utils/motion";
export default function People() {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="paddings people"
    >
      <motion.div  variants={footerVariants} className="yPaddings container">
        <div className="heading">
          <span className="talk-about-us primaryText">
            people talk about us
          </span>
          <p className="job-description">
            I got a job that was in accordance with the salary and field of work
          </p>
          <p className="">
            The process of submitting an appilication was quite cosy
          </p>
        </div>

        {/* Carousal */}
        <div className="yPaddings comments">
          <Slider className="slider" {...sliderSettings}>
            {comments.map((comment, index) => {
              return (
                <div className="comment" key={index}>
                  <img src={comment.img} alt="" />
                  <p>{comment.comment} </p>
                  <div className="line"></div>
                  <div className="bio">
                    <span className="name">{comment.name}</span>
                    <span className="post">{comment.post}</span>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </motion.div>
    </motion.section>
  );
}
