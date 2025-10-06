import React, { useState } from "react";
import "./Hero.css";
import { FaHeart, FaSearch } from "react-icons/fa";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="hero">
      <nav className="navbar">
      
        <div className="navbar-logo">
          <span className="logo-box">MS</span>
          <span className="logo-text">
            MASTER <span style={{ fontWeight: "lighter" }}> STUDY</span>
          </span>
        </div>

       
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

    
        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <li>COURSES</li>
          <li>COURSE FORMATS</li>
          <li>ADD COURSE</li>
          <li>DEMOS</li>
          <li>PAGES</li>
          <li>
  <a href="#">
    <FaHeart style={{ color: "white" }} />
  </a>
</li>
<li>
  <a href="#">
    <FaSearch style={{ color: "white" }} />
  </a>
</li>
        </ul>
      </nav>


      <div className="hero-overlay">
        <h3 className="hero-subtitle">TAKE THE FIRST STEP</h3>
        <h1 className="hero-title">TO KNOWLEDGE WITH US</h1>
        <button className="hero-btn">ready to get started?</button>
      </div>
    </section>
  );
}
