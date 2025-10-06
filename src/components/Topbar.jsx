import React, { useState } from "react";
import "./Topbar.css";
import {
  FaTwitter,
  FaInstagram,
  FaBehance,
  FaDribbble,
  FaFlickr,
  FaGithub,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";

export default function Topbar() {
  const [langOpen, setLangOpen] = useState(false);

  return (
    <div className="topbar">
      <div className="topbar-content">
      
        <div className="topbar-left">
          <div
            className="language"
            onClick={() => setLangOpen(!langOpen)}
          >
            English ▼
          </div>
          {langOpen && (
            <div className="dropdown">
              <div className="dropdown-item">English</div>
              <div className="dropdown-item">Spanish</div>
              <div className="dropdown-item">French</div>
            </div>
          )}
        </div>

     
        <div className="topbar-center">
          <span>📞 +1 212-226-3126</span>
          <span>📍 1010 Moon Ave, New York, NY US</span>
          <span>🕒 Mon - Sat 8.00 - 18.00</span>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaBehance /></a>
          <a href="#"><FaDribbble /></a>
          <a href="#"><FaFlickr /></a>
          <a href="#"><FaGithub /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaPinterest /></a>
        </div>

      
        <div className="user">
          <span>👤 Demo Instructor</span>
          <span className="divider">|</span>
          <button className="logout">Log Out</button>
        </div>
      </div>
    </div>
  );
}
