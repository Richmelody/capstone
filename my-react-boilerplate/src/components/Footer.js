import React from "react";

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
            <a className="a" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="a" href="/about">
              About
            </a>
          </li>
          <li>
            <a className="a" href="/menu">
              Menu
            </a>
          </li>
          <li>
            <a className="a" href="/reservations">
              Reservations
            </a>
          </li>
          <li>
            <a className="a" href="/order">
              Order Online
            </a>
          </li>
          <li>
            <a className="a" href="/login">
              Login
            </a>
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
