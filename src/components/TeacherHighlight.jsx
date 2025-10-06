import React from "react";
import "./TeacherHighlight.css";
import teacherImage from './featured_classic_teacher_1.png'

export default function TeacherHighlight() {
  const courses = [
    {
      id: 1,
      title: "Basics of MasterStudy Education Theme",
      category: "Analysis of algorithms",
      duration: "2 hours",
      price: "Free",
      image: "https://picsum.photos/300/200?random=1",
    },
    {
      id: 2,
      title: "How To Work With Legendary RED Camera?",
      category: "Analysis of algorithms",
      duration: "2 hours",
      price: "Free",
      image: "https://picsum.photos/300/200?random=2",
    },
    {
      id: 3,
      title: "Basics of MasterStudy Education Theme",
      category: "Analysis of algorithms",
      duration: "2 hours",
      price: "Free",
      image: "https://picsum.photos/300/200?random=3",
    },
    {
      id: 4,
      title: "Basics of MasterStudy Education Theme",
      category: "Analysis of algorithms",
      duration: "2 hours",
      price: "Free",
      image: "https://picsum.photos/300/200?random=4",
    },
  ];

  return (
    <section className="teacher-section">
      <div className="teacher-content">
        {/* Left side */}
        <div className="teacher-info">
           <div className="flex-image">
            <div className="teacher-part">
          <h3 className="badge">TEACHER OF MONTH</h3>
          <h1 className="teacher-name">Colt Anand</h1>
          <h4 className="teacher-role">Professor of Business Administration</h4>
          <p className="teacher-desc">
            Isn’t days fill, after him bring. Set likeness meat seed whose for
            itself you can’t seas itself. Herb replenish he, dry he. Firmament
            their. Thing had. Fruit morning signs years. All earth fowl upon,
            doesn’t make, grass seed kind bearing multiply female void bring
            second.
          </p>
</div>
<div className="imageTeacher">
  <img className="personImage" src={teacherImage} alt="" />
</div>

</div>
          <h5 className="courses-title">TEACHER COURSES:</h5>
          <div className="courses-grid">
            {courses.map((course) => (
              <div key={course.id} className="course-card">
                <img src={course.image} alt={course.title} />
                <div className="course-info">
                  <p className="course-category">{course.category}</p>
                  <h4 className="course-title">{course.title}</h4>
                  <div className="course-meta">
                    <span>⏰ {course.duration}</span>
                    <span>{course.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
