import React from "react";
import logo from "./assets/logo.jpg";
import Nav from "./Nav"; // Import the Nav component
import "./styles/header.css";

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <Nav />
    </header>
  );
}

export default Header;
