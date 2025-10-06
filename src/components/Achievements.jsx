import React from "react";
import "./Achievements.css";
import { FaGlobe, FaBell, FaUser, FaAddressBook } from "react-icons/fa";
import CountUp from "react-countup";

export default function Achievements() {
  const stats = [
    { id: 1, number: 9455, label: "FOREIGN FOLLOWERS", icon: <FaGlobe /> },
    { id: 2, number: 1123, label: "CLASSES COMPLETE", icon: <FaBell /> },
    { id: 3, number: 2678, label: "STUDENTS ENROLLED", icon: <FaUser /> },
    { id: 4, number: 37, label: "TEACHERS CERTIFIED", icon: <FaAddressBook /> },
  ];

  return (
    <section className="achievements-section">
      <div className="overlay">
        <h2 className="title">SCHOOL ACHIEVEMENTS</h2>
        <p className="subtitle">
          Here you can review some statistics about our Education Center
        </p>

        <div className="stats-grid">
          {stats.map((item) => (
            <div key={item.id} className="stat-card">
              <div className="icon">{item.icon}</div>
              <h3 className="number">
                <CountUp
                  start={0}
                  end={item.number}
                  duration={3} 
                  separator="," 
                />
              </h3>
              <p className="label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
