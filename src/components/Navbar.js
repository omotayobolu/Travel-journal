import React from "react";
import logo from "../images/Fill 213.png";
import logoText from "../images/my travel journal..png";

export default function Navbar() {
  return (
    <nav>
      <img src={logo} className="logo" alt="" />
      <img src={logoText} className="logo-text" alt="" />
    </nav>
  );
}
