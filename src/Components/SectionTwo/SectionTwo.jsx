import Sal from "../../images/Saly-11-min.png";
import { ReactComponent as Arrow } from "../../images/arrow-button.svg";
import {
  imageVariant,
  sectionVariant,
  titleVariant,
  transition,
} from "../../utils";
import { motion } from "framer-motion";

const SectionTwo = () => {
  return (
    <motion.section
      key="two"
      exit="leave"
      initial="hidden"
      animate="visible"
      className="section"
      variants={sectionVariant}
      transition={{ ...transition }}
    >
      <motion.div variants={imageVariant} className="sal_img_container">
        <img src={Sal} alt="" className="sal_img" />
      </motion.div>
      <div className="section_details">
        <motion.h2
          variants={titleVariant}
          transition={{ ...transition, delay: 0.1 }}
          className="heading_2"
        >
          Track your payments in realtime.
        </motion.h2>
        <motion.p
          variants={titleVariant}
          transition={{ ...transition, delay: 0.1 }}
          className="section_text"
        >
          Our platform gives you real time notification when your payments to
          your partners have reached them.
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

export default SectionTwo;
