import React from "react";
import "./Footer.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaFax, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const randomImage = (id) => `https://picsum.photos/seed/${id}/100/100`;

  return (
    
    <footer className="footer">
      <div className="footer-container">

        {/* About Section */}
        <div className="footer-column">
          <h3>ABOUT</h3>
          <p>
            <a href="#" className="link">Masterstudy</a> is Education WordPress
            theme featured by Learning Management System (LMS) for online
            education. Developed by StylemixThemes.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at
            egestas magna.
          </p>
          <button className="learn-btn">LEARNING NOW</button>
        </div>

        {/* Popular Courses */}
        <div className="footer-column">
          <h3>POPULAR COURSES</h3>
          <div className="course-item">
            <img src={randomImage(1)} alt="Course 1" />
            <div>
              <p className="course-title">Basics Of MasterStudy Education Theme</p>
              <span>BY DEMO INSTRUCTOR</span>
            </div>
          </div>
          <div className="course-item">
            <img src={randomImage(2)} alt="Course 2" />
            <div>
              <p className="course-title">How To Work With Legendary RED Cam...</p>
              <span>BY DEMO INSTRUCTOR</span>
            </div>
          </div>
          <div className="course-item">
            <img src={randomImage(3)} alt="Course 3" />
            <div>
              <p className="course-title">How To Work With Legendary RED Cam...</p>
              <span>BY DEMO INSTRUCTOR</span>
            </div>
          </div>
        </div>

        {/* Pages */}
        <div className="footer-column">
          <h3>PAGES</h3>
          <ul>
            <li>&rsaquo; BLOG</li>
            <li>&rsaquo; COURSES</li>
            <li>&rsaquo; HOME</li>
            <li>&rsaquo; MEMBERSHIP ACCOUNT</li>
            <li>&rsaquo; SHORTCODES</li>
            <li>&rsaquo; TOPOGRAPHY</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>CONTACT</h3>
          <p><FaMapMarkerAlt /> USA, California 20, First Avenue, California</p>
          <p><FaPhoneAlt /> Tel: +1 212 458 300 32</p>
          <p><FaFax /> Fax: +1 212 375 24 14</p>
          <p><FaEnvelope /> <a href="mailto:info@masterstudy.com">info@masterstudy.com</a></p>
        </div>

      </div>
    </footer>
  );
}