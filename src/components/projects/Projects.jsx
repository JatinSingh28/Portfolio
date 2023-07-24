import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Project from "./ProjectComp";
import Footer from "../footer/Footer";
import "./style-pro.scss";
import data from "./projectData";

export default function Projects() {
  return (
    <div className="container bg-black  h-fit">
      <Navbar />

      <div className="grid grid-cols-3 px-16 pt-28 gap-8">
        {data.map((item, index) => (
          <Project
            key={index}
            name={item.name}
            images={item.images}
            features={item.features}
            github={item.github}
            live={item.live}
            vide={item.live}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
