import "./App.css";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import { FAOs } from "./Components/FAQs";

import SectionThree from "./Components/SectionThree/SectionThree";
import SectionTwo from "./Components/SectionTwo/SectionTwo";
import SectionOne from "./Components/SectionOne/SectionOne";

import SectionOneMobile from "./Components/SectionOne/Mobile";
import SectionTwoMobile from "./Components/SectionTwo/Mobile";
import SectionThreeMobile from "./Components/SectionThree/Mobile";
import gsap from "gsap/all";

function App() {
  const [activeSection, setActiveSelection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const SECTIONS = {
    0: <SectionOne />,
    1: <SectionTwo />,
    2: <SectionThree />,
    3: <FAOs />,
  };

  useEffect(() => {
    gsap.to(".background", {
      duration: 3,
      x: `${6.67 * activeSection}%`,
      ease: `Elastic.easeOut`,
    });
    function handleScroll(e) {
      if (isScrolling) return;
      if (e.deltaY > 0 || e.deltaY === -0) {
        setIsScrolling(true);
        setActiveSelection((prev) => (prev === 3 ? 0 : prev + 1));
      } else {
        setIsScrolling(true);
        setActiveSelection((prev) => (prev <= 0 ? 3 : (prev - 1) % 4));
      }
      setTimeout(() => {
        setIsScrolling(false);
      }, 1500);
    }

    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [activeSection, isScrolling]);

  return (
    <div className="App">
      <div className="background"></div>
      <div className="container">
        <Header />
        <AnimatePresence exitBeforeEnter>
          <div className="section_pc" key={activeSection}>
            {SECTIONS[activeSection]}
          </div>
        </AnimatePresence>
        <div className="section_mobile">
          <SectionOneMobile />
          <SectionTwoMobile />
          <SectionThreeMobile />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
