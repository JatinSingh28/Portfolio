import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Project1 from "./projects/Project1";
import Project2 from "./projects/Project2";
import Project3 from "./projects/Project3";
import Project4 from "./projects/Project4";
import Footer from "../footer/Footer";
import "./style-pro.scss";

export default function Projects() {

  return (
    <div className="container bg-black  h-fit">
      <Navbar />

      <div className="grid grid-cols-3 px-16 pt-28 gap-8">
        <Project1  />
        <Project1 />
        <Project1 />
        <Project1 />
      </div>
      <Footer/>
    </div>
  );
}
