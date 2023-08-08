import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import ProjectComp from "./ProjectComp";
import Footer from "../footer/Footer";
import "./style-pro.scss";
import data from "./projectData";

export default function Projects() {
  return (
    <div className="proj-container bg-black  h-fit ">
      <Navbar />

      <div className="grid grid-cols-fluid md:grid md:grid-cols-3 px-16 md:gap-8  pt-28 pb-36 w-screen">
        {data.map((item, index) => (
          <ProjectComp
            key={index}
            name={item.name}
            image={item.image}
            images={item.images}
            features={item.features}
            github={item.github}
            live={item.live}
            vide={item.live}
          />
        ))}
      </div>
      {/* <div className="grid grid-cols-fluid md:grid md:grid-cols-3 px-16 md:gap-8  pt-28 pb-36 w-screen">
        {data.map((item, index) => (
          <ProjectComp
            key={index}
            name={item.name}
            image={item.image}
            images={item.images}
            features={item.features}
            github={item.github}
            live={item.live}
            vide={item.live}
          />
        ))}
      </div> */}
      <Footer />
    </div>
  );
}
