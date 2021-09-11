import Sal from "../../images/Saly-13-min.png";
import { ReactComponent as Arrow } from "../../images/arrow-button.svg";

const SectionThreeMobile = () => {
  return (
    <section>
      <h2 className="heading_2 accent">
        Earn money helping friends send money to China.
      </h2>
      <img src={Sal} alt="3d phone" />
      <div className="section_details">
        <p className="section_text">
          As a Baiya Agent, you can provide exclusive Payment services to China
          in your local business community and make commissions on all payments.
        </p>
        <button className="section_button accent_btn">
          Sign up <Arrow />
        </button>
      </div>
    </section>
  );
};

export default SectionThreeMobile;
