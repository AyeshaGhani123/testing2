import React from "react";
import { FaClock, FaHeart, FaUserGraduate, FaListUl } from "react-icons/fa";
import "./Courses.css";

const courses = [
  {
    id: 1,
    title: "Basics of MasterStudy Education Theme",
    category: "Analysis of algorithms",
    image: "https://picsum.photos/300/200?random=1",
    duration: "2 hours",
    price: "Free",
    progress: "100%",
    level: "Advanced",
    lectures: 8,
  },
  {
    id: 2,
    title: "How To Work With Legendary RED Camera?",
    category: "Analysis of algorithms",
    image: "https://picsum.photos/300/200?random=2",
    duration: "2 hours",
    price: "Free",
    progress: "87%",
    level: "Intermediate",
    lectures: 10,
  },
  {
    id: 3,
    title: "Basics of MasterStudy Education Theme",
    category: "Analysis of algorithms",
    image: "https://picsum.photos/300/200?random=3",
    duration: "2 hours",
    price: "Free",
    progress: "90%",
    level: "Beginner",
    lectures: 6,
  },
  {
    id: 4,
    title: "Basics of MasterStudy Education Theme",
    category: "Analysis of algorithms",
    image: "https://picsum.photos/300/200?random=4",
    duration: "2 hours",
    price: "Free",
    progress: "100%",
    level: "Advanced",
    lectures: 8,
  },
  {
    id: 5,
    title: "How To Work With Legendary RED Camera?",
    category: "Analysis of algorithms",
    image: "https://picsum.photos/300/200?random=5",
    duration: "2 hours",
    price: "Free",
    progress: "87%",
    level: "Intermediate",
    lectures: 10,
  },
  {
    id: 6,
    title: "Basics of MasterStudy Education Theme",
    category: "Analysis of algorithms",
    image: "https://picsum.photos/300/200?random=6",
    duration: "2 hours",
    price: "Free",
    progress: "90%",
    level: "Beginner",
    lectures: 6,
  },
  {
    id: 7,
    title: "Basics of MasterStudy Education Theme",
    category: "Analysis of algorithms",
    image: "https://picsum.photos/300/200?random=7",
    duration: "2 hours",
    price: "Free",
    progress: "100%",
    level: "Advanced",
    lectures: 8,
  },
  {
    id: 8,
    title: "How To Work With Legendary RED Camera?",
    category: "Analysis of algorithms",
    image: "https://picsum.photos/300/200?random=8",
    duration: "2 hours",
    price: "Free",
    progress: "87%",
    level: "Intermediate",
    lectures: 10,
  },
  {
    id: 9,
    title: "Basics of MasterStudy Education Theme",
    category: "Analysis of algorithms",
    image: "https://picsum.photos/300/200?random=9",
    duration: "2 hours",
    price: "Free",
    progress: "90%",
    level: "Beginner",
    lectures: 6,
  },
  {
    id: 10,
    title: "Basics of MasterStudy Education Theme",
    category: "Analysis of algorithms",
    image: "https://picsum.photos/300/200?random=10",
    duration: "2 hours",
    price: "Free",
    progress: "100%",
    level: "Advanced",
    lectures: 8,
  },
  {
    id: 11,
    title: "How To Work With Legendary RED Camera?",
    category: "Analysis of algorithms",
    image: "https://picsum.photos/300/200?random=11",
    duration: "2 hours",
    price: "Free",
    progress: "87%",
    level: "Intermediate",
    lectures: 10,
  },
  {
    id: 12,
    title: "How To Work With Legendary RED Camera?",
    category: "Analysis of algorithms",
    image: "https://picsum.photos/300/200?random=12",
    duration: "2 hours",
    price: "Free",
    progress: "87%",
    level: "Intermediate",
    lectures: 10,
  },

];

export default function Courses() {
  return (
    <section className="courses-section">
      <h2 className="section-title">TOP COURSES</h2>
      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="card-front">
              <div className="course-image">
                <img src={course.image} alt={course.title} />
                <span className="progress">{course.progress}</span>
              </div>
              <div className="course-content">
                <p className="course-category">{course.category}</p>
                <h3 className="course-title">{course.title}</h3>
                <div className="course-footer">
                  <span className="course-duration">
                    <FaClock /> {course.duration}
                  </span>
                  <span className="course-price">{course.price}</span>
                </div>
              </div>
            </div>

            {/* Hover Preview Card */}
            <div className="card-hover">
              <div className="instructor-info">
                <div className="avatar"></div>
                <p className="instructor-name">Demo Instructor</p>
              </div>
              <h3 className="hover-title">{course.title}</h3>
              <div className="hover-details">
                <span><FaUserGraduate /> {course.level}</span>
                <span><FaListUl /> {course.lectures} lectures</span>
                <span><FaClock /> {course.duration}</span>
              </div>
              <button className="preview-btn">PREVIEW THIS COURSE</button>
              <div className="hover-footer">
                <span className="wishlist"><FaHeart /> Wishlist</span>
                <span className="price">{course.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}