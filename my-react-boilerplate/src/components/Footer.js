import React from "react";
import Nav from "./Nav";
import logo from "./assets/logo.jpg"; // Assuming the logo is in the assets folder

const Footer = () => {
  return (
    <footer>
      {/* Logo Section */}
      <div className="footer-section">
        <h3>Logo</h3>
        <img src={logo} alt="Little Lemon Logo" />
      </div>

      {/* Navigation Section */}
      <div className="footer-section">
        <h3>Navigation</h3>
        <Nav />
      </div>

      {/* Contact Section */}
      <div className="footer-section">
        <h3>Contact</h3>
        <ul>
          <li>Email: info@littlelemon.com</li>
          <li>Phone: (123) 456-7890</li>
          {/* Add more contact information as needed */}
        </ul>
      </div>

      {/* Social Media Section */}
      <div className="footer-section">
        <h3>Social Media</h3>
        <ul>
          <li>
            <a
              href="https://facebook.com/littlelemon"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/littlelemon"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          {/* Add more social media links as needed */}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
