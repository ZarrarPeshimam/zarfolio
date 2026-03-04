import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the menu
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">ZAP</div>

      {/* The Overlay: Clicking this calls closeMenu */}
      {isOpen && <div className="menu-overlay" onClick={closeMenu}></div>}

      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        {/* Close the menu when a link is clicked too */}
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#education" onClick={closeMenu}>Education</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
        <a href="#certificate" onClick={closeMenu}>Certifications</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>

      <div
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✕" : "☰"} {/* Changes icon to 'X' when open */}
      </div>
    </nav>
  );
}