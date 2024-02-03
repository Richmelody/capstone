import React from "react";
import { Link } from "react-router-dom";

import logo from "./assets/logo.jpg"; // Assuming the logo is in the assets folder
import "./styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      {/* Logo Section */}
      <div className="section">
        <img src={logo} alt="Secondary Logo" />
      </div>

      {/* Navigation Section */}
      <div className="nav">
        <h2>Navigation</h2>
        <ul>
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/Bookingpage" className="nav-link">
              Bookings
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link">
              Order-Online
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="contact">
        <h2>Contact</h2>
        <ul>
          <li>
            Phone Number: <span>Placeholder</span>
          </li>
          <li>
            Email: <span>Placeholder</span>
          </li>
          <li>
            Address: <span>Placeholder</span>
          </li>
        </ul>
      </div>

      {/* Social Media Section */}
      <div className="socials">
        <h2>Social Media</h2>
        <ul>
          <li>
            Instagram: <span>Placeholder</span>
          </li>
          <li>
            LinkedIn: <span>Placeholder</span>
          </li>
          <li>
            Pinterest: <span>Placeholder</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
