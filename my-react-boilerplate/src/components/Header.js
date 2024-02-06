import React from "react";
import logo from "./assets/logo.jpg";
import Nav from "./Nav"; // Import the Nav component
import "./styles/header.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Header() {
  return (
    <header>
      
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Nav />
    </header>
  );
}

export default Header;
