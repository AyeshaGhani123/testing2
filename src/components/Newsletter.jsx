import React from "react";
import "./Newsletter.css";

export default function Newsletter() {
  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        {/* Left Content */}
        <div className="newsletter-text">
          <h2>Subscribe our newsletter</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form, by injected
            humour, or randomised words.
          </p>
        </div>

        {/* Right Content */}
        <div className="newsletter-form">
          <label htmlFor="email">YOUR E-MAIL ADDRESS</label>
          <div className="input-wrapper">
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              required
            />
            <button type="submit">SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </section>
  );
}
