import React from "react";
import Navbar from "../navbar/Navbar";
import Content from "./Content";
import Footer from "../footer/Footer";
// import Projects1 from "../projects/ProjectsMain1";
// import Projects2 from "../projects/ProjectMain2";
// import Proj from "../projects/Proj";
import Projects from "../proj/Projects";
import Projects2 from "../proj/Projects2";
import Skills from "../skills/skills";
import Gradient from "../skills/Gradient";
import Up from "./Up";
import "./main.scss";

export default function Main() {
  return (
    <div className="main bg-black md:h-screen ">
      <Navbar />
      <Content />
      <Skills />
      <Gradient/>
      <Projects />
      {/* <Proj/> */}
      {/* <Projects1 /> */}
      <Projects2 />
      <Footer />
      <Up />
    </div>
  );
}
