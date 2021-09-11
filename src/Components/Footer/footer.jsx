import BANC from "../../images/banc.png";
import NDIC from "../../images/ndic.png";
import PCI from "../../images/pci-dss.png";
import ISO from "../../images/iso.png";
import TA from "../../images/ta.png";

const Footer = () => {
  return (
    <footer>
      <div className="patternships">
        <div>
          <p>Technology built in partnership with</p>
          <div className="image_grid">
            <img src={BANC} alt="" />
            <img src={TA} alt="" />
          </div>
        </div>
        <div className="margin_64">
          <p>Funds insured by</p>
          <img className="h_40" src={NDIC} alt="" />
        </div>
        <div className="license_container">
          <p>Licensed by</p>
          <img className="h_40" src={ISO} alt="" />
          <img className="h_40" src={PCI} alt="" />
        </div>
      </div>
      <div className="contact_us">
        <h3>Baiya</h3>
        <p className="enq">For partnerships and equiries</p>
        <a className="link" href="mailto:enquiries@baiya.ng">
          enquiries@baiya.ng
        </a>
        <p className="copy">&copy; 2021 Baiya</p>
      </div>
    </footer>
  );
};

export default Footer;
