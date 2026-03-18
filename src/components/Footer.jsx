import { Link } from "react-router-dom";
import logoImg from "../assets/logo.svg";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src={logoImg} alt="Airiv Infotech" className="footer-logo" />
          <p className="footer-tagline">
            Engineering technology solutions that empower organizations to
            innovate with confidence and build for the future.
          </p>
        </div>

        <div className="footer-links-col">
          <h4>Company</h4>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-contact-col">
          <h4>Contact</h4>
          <p>info@airivinfotech.com</p>
          <p>+1 (555) 123-4567</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">© 2026 Airiv Infotech. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
