import { motion } from "framer-motion";
import { useState } from "react";
import { ReactComponent as Arrow } from "../../images/arrow-button.svg";
import { sectionVariant, titleVariant, transition } from "../../utils";

const FAOs = () => {
  const [selected, setSelected] = useState("one");

  const questions = {
    one: `Baiyah is a payment technology that helps businesses make payments in China to complete their business transactions with their partners.`,
    two: `Baiyah is a payment technology that helps businesses make payments in China to complete their business transactions with their partners.`,
    three: `Baiyah is a payment technology that helps businesses make payments in China to complete their business transactions with their partners.`,
    four: `Baiyah is a payment technology that helps businesses make payments in China to complete their business transactions with their partners.`,
  };

  return (
    <motion.section
      key="four"
      exit="leave"
      initial="hidden"
      animate="visible"
      variants={sectionVariant}
      className="faq"
    >
      <motion.h2
        variants={titleVariant}
        transition={{ ...transition, delay: 0.1 }}
        className="heading_2"
      >
        FAQs
      </motion.h2>
      <motion.form
        variants={titleVariant}
        transition={{ ...transition, delay: 0.1 }}
        action=""
        onChange={(e) => {
          setSelected(e.target.value);
        }}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <select name="questions" id="">
          <option value="one">What is Baiya</option>
          <option value="two">How does Baiya work?</option>
          <option value="three">Is Baiya available in other countries?</option>
          <option value="four">How am I sure my funds are safe?</option>
        </select>
        <p>{questions[selected]}</p>
        <motion.div
          variants={titleVariant}
          transition={{ ...transition, delay: 0.1 }}
          className="more"
        >
          <p>Still have more questions?</p>
          <button className="section_button">
            Ask a question <Arrow />
          </button>
        </motion.div>
      </motion.form>
    </motion.section>
  );
};

export { FAOs };
