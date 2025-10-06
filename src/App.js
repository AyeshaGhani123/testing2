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
import "./App.css";

function App() {
  return (
 <div className="App">
      <Topbar />
       {/* <Navbar /> */}
      <Hero />
      <Categories />
        <Courses/>
        <Achievements/>
        <TeacherHighlight/>
        <Newsletter/>
        <Blog/>
        <Footer/>
    </div>

  );
}

export default App;
