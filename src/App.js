import React from "react";
import Topbar from "./components/Topbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Courses from "./components/Courses";
import Achievements from "./components/Achievements";
import TeacherHighlight from "./components/TeacherHighlight";
import Newsletter from "./components/Newsletter";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
// import BlogAndFooter from "./components/BlogAndFooter";
// import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="page">
      <main className="content">
           <Topbar />
      <Hero />
      <Categories />
        <Courses/>
        <Achievements/>
        <TeacherHighlight/>
        <Newsletter/>
        <Blog/>
      </main>

      {/* Push space equal to footer height */}
      <div className="footer-spacer"></div>

      <footer className="footer">
       <Footer/>
      </footer>
    </div>
  );
}

export default App;

