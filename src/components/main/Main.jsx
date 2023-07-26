import React from "react";
import Navbar from "../navbar/Navbar";
import Content from "./Content";
// import Projects from '../projects/Projects'
import Footer from "../footer/Footer";
import Projects from "../projects/ProjectsMain";
import "./main.scss";

export default function Main() {
  return (
    <div className="main bg-black h-screen">
      <Navbar />
      <Content />
      <Projects />
      <Footer />
    </div>
  );
}
