import Sal from "../../images/Saly-12-min.png";
import { ReactComponent as Arrow } from "../../images/arrow-button.svg";

const SectionTwoMobile = () => {
  return (
    <section>
      <h2 className="heading_2">Track your payments in realtime.</h2>
      <img src={Sal} alt="3d phone" />
      <div className="section-detials">
        <p className="section_text">
          Our platform gives you real time notification when your payments to
          your partners have reached them.
        </p>
        <button className="section_button">
          Join our waitlist <Arrow />
        </button>
      </div>
    </section>
  );
};

export default SectionTwoMobile;
