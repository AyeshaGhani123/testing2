import React from "react";
import "./Blog.css";
import date from './19aug.png'
import date2 from './03SepSticky.png'
import date3 from './09AugSticky.png'

export default function Blog() {
  const posts = [
    {
      id: 1,
      dateImage: date, // your image for date
      title: 'Our main target is to “Developing Yourself as a Leader”',
      desc: "The upcoming budget for the Chicago Public Schools will rely on $500 million in yet-to-be-enacted pension savings by Illinois, school officials said on Monday.",
      image: "https://picsum.photos/500/300?random=1",
      category: "advertisement",
      tags: ["developing", "leader", "target"],
    },
    {
      id: 2,
      dateImage: date2, // your image for date
      title: "Those Other College Expenses You Aren’t Thinking About",
      desc: "Thousands of teenagers across the UK will have school lessons in mindfulness in an experiment designed to see if it can protect against mental illness.",
      image: "https://picsum.photos/500/300?random=2",
      category: "Hobbies",
      tags: ["developing", "collage", "teens"],
    },
    {
      id: 3,
      dateImage: date3,
      title: 'Our main target is to “Developing Yourself as a Leader”',
      desc: "The upcoming budget for the Chicago Public Schools will rely on $500 million in yet-to-be-enacted pension savings by Illinois, school officials said on Monday.",
      image: "https://picsum.photos/500/300?random=3",
      category: "advertisement",
      tags: ["developing", "leader", "target"],
    },
  ];

  return (
    
    <section className="blog-section">
      <h2 className="blog-title">MASTERSTUDY BLOG</h2>
      <div className="underline"></div>

      <div className="blog-grid">
        {posts.map((post) => (
          <div className="blog-card" key={post.id}>
            <img src={post.image} alt={post.title} className="blog-image" />

            <div className="blog-content">
              <div className="blog-date">
                <img src={post.dateImage} alt="Date" />
              </div>

              <div className="blog-info">
                <h3 className="blog-post-title">{post.title}</h3>
                <p className="blog-desc">{post.desc}</p>

                <div className="blog-meta">
                  <p>
                    Posted in: <span>{post.category}</span>
                  </p>
                  <p>
                    Tags:{" "}
                    {post.tags.map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
            {post.sticky && (
              <img src={post.stickyImage} alt="Sticky Post" className="sticky" />
            )}
          </div>
        ))}
      </div>
    </section>
    
  );
}
