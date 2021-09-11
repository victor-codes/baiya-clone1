import Sal from "../../images/Saly-13-min.png";
import { ReactComponent as Arrow } from "../../images/arrow-button.svg";
import {
  imageVariant,
  sectionVariant,
  titleVariant,
  transition,
} from "../../utils";
import { motion } from "framer-motion";

const SectionThree = () => {
  return (
    <motion.section
      key="three"
      exit="leave"
      initial="hidden"
      animate="visible"
      variants={sectionVariant}
      transition={{ ...transition }}
      className="section"
    >
      <motion.div variants={imageVariant} className="sal_img_container">
        <img src={Sal} alt="" className="sal_img_container" />
      </motion.div>
      <motion.div className="section_details">
        <motion.h2
          variants={titleVariant}
          transition={{ ...transition, delay: 0.1 }}
          className="heading_2 accent"
        >
          Earn money helping friends send money to China.
        </motion.h2>
        <motion.p
          variants={titleVariant}
          transition={{ ...transition, delay: 0.1 }}
          className="section_text"
        >
          As a Baiya Agent, you can provide exclusive Payment services to China
          in your local business community and make commissions on all payments.
        </motion.p>
        <motion.button
          variants={titleVariant}
          transition={{ ...transition, delay: 0.1 }}
          className="section_button accent_btn"
        >
          Sign up <Arrow />
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default SectionThree;
