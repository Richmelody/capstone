import React from "react";
import { Link } from "react-router-dom";
import "./styles/nav.css";

function Nav() {
  return (
    <nav>
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
          <Link to="/Booking" className="nav-link">
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
    </nav>
  );
}

export default Nav;
