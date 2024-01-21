// Nav.js
import React from "react";
import { Link } from "react-router-dom";
import "./styles/nav.css";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Menu</Link>
        </li>
        <li>
          <Link to="/Bookingpage">Bookings</Link>
        </li>
        <li>
          <Link to="/">Order-Online</Link>
        </li>
        <li>
          <Link to="/">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
