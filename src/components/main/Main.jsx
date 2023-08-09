import React from "react";
import Navbar from "../navbar/Navbar";
import Content from "./Content";
import Footer from "../footer/Footer";
import Projects from "../projects/Projects";
import Projects2 from "../projects/Projects2";
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
      <Projects2 />
      <Footer />
      <Up />
    </div>
  );
}
