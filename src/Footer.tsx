import { MapPin, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <div className="footer-logo">VN</div>
          <div>
            <h3>Vijesh Naique</h3>
            <p>Tax Practitioner</p>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-links">
          <h4>Services</h4>
          <span>GST</span>
          <span>Income Tax</span>
          <span>TDS/TCS Returns</span>
          <span>Accounting</span>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>

          <p>
            <MapPin size={16} />
            Panaji, Goa
          </p>

          <p>
            <Phone size={16} />
            99602 12698
          </p>
        </div>

      </div>

      <div className="footer-bottom">&copy; 2026 Vijesh Naique. All rights reserved.</div>
    </footer>
  );
}

export default Footer;


