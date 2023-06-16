import React from "react";
import "../styles/style.css";

export default function Navbar() {

  return (
    <>
      <div className="navbar">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#donate">Donate</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </>
  );
}
