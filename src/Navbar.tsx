import { Menu } from "lucide-react";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="brand">
          <span className="brand-mark">VN</span>

          <div>
            <h3>Vijesh Naique</h3>
            <p>Taxation & Accounts</p>
          </div>
        </div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-cta" href="#contact">
          Get in Touch
        </a>

        <button className="menu-button" aria-label="Open menu">
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
