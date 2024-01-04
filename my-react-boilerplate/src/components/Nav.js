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
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Menu</Link>
        </li>
        <li>
          <Link to="/contact">Reservations</Link>
        </li>
        <li>
          <Link to="/Order-Online">Order-Online</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
