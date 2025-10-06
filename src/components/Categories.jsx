import React from "react";
import "./Categories.css";
import arrow from './arraow.png'

const categories = [
  { title: "Analysis Of Algorithms", color: "#f6c02d" },
  { title: "Environmental Science", color: "#2d82f6" },
  { title: "Graphic & Web-Design", color: "#21c7c2" },
  { title: "Economics & Finance", color: "#27c457" },
  { title: "Software Training", color: "#d62dbd" },
];

export default function Categories() {
  return (
    <div className="categories">
      {categories.map((cat, index) => (
        <div
          key={index}
          className="category-card"
          style={{ backgroundColor: cat.color }}
        >
          <div className="category-icon"><img style={{width:50, height:50, marginTop:20}} src={arrow} alt="" /></div>
          <h4>{cat.title}</h4>
        </div>
      ))}
    </div>
  );
}
