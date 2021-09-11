import { motion } from "framer-motion";
import Sal from "../../images/Saly-12-min.png";
import { ReactComponent as Arrow } from "../../images/arrow-button.svg";
import {
  imageVariant,
  sectionVariant,
  titleVariant,
  transition,
} from "../../utils";

const SectionOne = () => {
  return (
    <motion.section
      key="one"
      exit="leave"
      initial="hidden"
      animate="visible"
      className="section"
      variants={sectionVariant}
      transition={{ ...transition }}
    >
      <motion.div className="sal_img_container">
        <img variants={imageVariant} src={Sal} alt="" className="sal_img" />
      </motion.div>
      <div className="section_details">
        <motion.h2
          variants={titleVariant}
          transition={{ ...transition, delay: 0.1 }}
          className="heading_2"
        >
          Make payments in China without hassle.
        </motion.h2>
        <motion.p
          variants={titleVariant}
          transition={{ ...transition, delay: 0.1 }}
          className="section_text"
        >
          Build business partnerships with Chinese businesses with the knowledge
          that you can now make payments to them in China at affordable rates.
        </motion.p>
        <motion.button
          variants={titleVariant}
          transition={{ ...transition, delay: 0.1 }}
          className="section_button"
        >
          Join our waitlist <Arrow />
        </motion.button>
      </div>
    </motion.section>
  );
};

export default SectionOne;
