import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/nav.css"; // Updated import path for CSS file

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-container"> {/* Updated class name */}
      <button className="navbar-hamburger" onClick={toggleMenu}> {/* Updated class name */}
        ☰ {/* Hamburger Icon */}
      </button>
      <ul className={isOpen ? "navbar-nav-links active" : "navbar-nav-links"}> {/* Updated class name */}
        <li>
          <Link to="/" className="navbar-nav-link"> {/* Updated class name */}
            Home
          </Link>
        </li>
        <li>
          <Link to="/" className="navbar-nav-link"> {/* Updated class name */}
            About
          </Link>
        </li>
        <li>
          <Link to="/" className="navbar-nav-link"> {/* Updated class name */}
            Menu
          </Link>
        </li>
        <li>
          <Link to="/Booking" className="navbar-nav-link"> {/* Updated class name */}
            Bookings
          </Link>
        </li>
        <li>
          <Link to="/" className="navbar-nav-link"> {/* Updated class name */}
            Order-Online
          </Link>
        </li>
        <li>
          <Link to="/" className="navbar-nav-link"> {/* Updated class name */}
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
