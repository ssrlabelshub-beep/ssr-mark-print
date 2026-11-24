
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  MessageCircle
} from 'lucide-react';

import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* TOP CONTACT BAR */}
      <div className="top-bar">
        <div className="container top-bar-content">

          <div className="top-contact">

            <span>
              <MapPin size={17} />
              Bengaluru, Karnataka
            </span>

            <span>
              <Phone size={17} />
              +91 7483023426
            </span>

            <span>
              <Mail size={17} />
              ssrlabelshub@gmail.com
            </span>

          </div>

          {/* SOCIAL MEDIA */}
          <div className="top-social">
            <span>Follow Us:</span>

            <a
              href="https://www.facebook.com/"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              f
            </a>

            <a
              href="https://www.instagram.com/"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              ◎
            </a>

            <a
              href="https://www.youtube.com/"
              aria-label="YouTube"
              target="_blank"
              rel="noreferrer"
            >
              ▶
            </a>
          </div>

        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="navbar">

        <div className="container navbar-content">

          {/* COMPANY LOGO */}
          <Link
            to="/"
            className="navbar-logo"
            onClick={closeMenu}
          >
            <img
              src="/logo.png"
              alt="SSR Mark & Print - Industrial Barcode Labels and Printer Solutions"
              className="company-logo"
            />
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={27} /> : <Menu size={27} />}
          </button>

          {/* NAVIGATION LINKS */}
          <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>

            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>

            <NavLink to="/about" onClick={closeMenu}>
              About Us
            </NavLink>

            {/* CATEGORIES - DIRECT LINK */}
            <NavLink to="/categories" onClick={closeMenu}>
              Categories
            </NavLink>

            <NavLink to="/products" onClick={closeMenu}>
              Products
            </NavLink>

            <NavLink to="/industries" onClick={closeMenu}>
              Industries
            </NavLink>

            <NavLink to="/service-areas" onClick={closeMenu}>
              Service Areas
            </NavLink>

            <NavLink to="/contact" onClick={closeMenu}>
              Contact Us
            </NavLink>

            {/* GET QUOTE BUTTON */}
            <Link
              to="/contact"
              className="navbar-quote"
              onClick={closeMenu}
            >
              <MessageCircle size={17} />
              Get Quote
            </Link>

          </div>

        </div>

      </nav>
    </>
  );
}

export default Navbar;
