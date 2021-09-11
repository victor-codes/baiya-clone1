import Sal from "../../images/Saly-11-min.png";
import { ReactComponent as Arrow } from "../../images/arrow-button.svg";

const SecionOneMobile = () => {
  return (
    <section>
      <h2 className="heading_2">Make payments in China without hassle.</h2>
      <img src={Sal} alt="3d phone" />
      <div className="section_details">
        <p className="section_text">
          Build business partnerships with Chinese businesses with the knowledge
          that you can now make payments to them in China at affordable rates.
        </p>
        <button className="section_button">
          Join our waitlist <Arrow />
        </button>
      </div>
    </section>
  );
};

export default SecionOneMobile;
