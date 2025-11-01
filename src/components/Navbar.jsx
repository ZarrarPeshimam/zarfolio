import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#certificate">Certification & Achievements</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    </>
  );
}


