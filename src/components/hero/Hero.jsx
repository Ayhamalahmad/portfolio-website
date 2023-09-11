import "./_hero.scss";
import certificate from "../../assets/images/certificate.png";
import person from "../../assets/images/person.png";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
export default function Hero() {
  return (
    <section className="paddings hero">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="container"
      >
        {/* upper ELements */}
        <div className="upperELements">
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="primaryText"
          >
            hey there,
            <br /> i'm binjan.
          </motion.span>
          <motion.span
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="secondaryText"
          >
            I design beautiful simple <br />
            things, And I love what i do
          </motion.span>
        </div>

        {/* person */}
        <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="person">
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src={person}
            alt=""
          />
        </motion.div>
        {/* email */}
        <motion.a
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="email"
          href="mailto:ayhamalahma@gmail.com"
        >
          ayhamalahma@gmail.com
        </motion.a>

        {/* lower Elements */}
        <div className="lowerElements">
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="experience"
          >
            <div className="primaryText">10</div>
            <div className="secondaryText">
              <div>years</div>
              <div>experience</div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="certificate"
          >
            <img src={certificate} alt="certificate" />
            <span>certified profational</span>
            <span>ui/ux designer</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
