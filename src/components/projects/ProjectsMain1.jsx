import React, { useState, useEffect, useRef } from "react";
import Project from "./ProjectComp";
import "./style-pro.scss";
import data from "./webProjectData";
import { motion } from "framer-motion";
import cursorimg from "../../assets/cursor-image-cropped.png";

export default function Projects1() {
  // const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  // const [cursorVariant, setCursorVariant] = useState("default");
  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     setCursorPosition({ x: e.clientX, y: e.clientY });
  //     document.querySelectorAll(".cursor-img");
  //   };
  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  // const textEnter = () => setCursorVariant("text");
  // const textLeave = () => setCursorVariant("default");

  // var cursorRef = useRef(null);
  // const enter = () => {
  //   if (cursorRef) {
  //     // const el = document.querySelectorAll(".cursor-img");
  //     cursorRef.style.transition = "opacity 0.5s linear 0s";
  //     cursorRef.style.opacity = 0.5;
  //   }
  // };

  return (
    <div
      className="bg-black  h-fit pb-36 px-4 md:px-14 w-screen"
      style={{ cursor: `url(${cursorimg}), auto` }}
    >
      {/* <img
        src={cursor}
        // onMouseEnter={enter}
        // onMouseLeave={leave}
        className="cursor-img absolute h-28"
        alt="cursor"
      /> */}
      <h2 className="text-3xl md:text-4xl text-white pt-28 pb-5 font-bold">Web Development Projects</h2>
      <div className="md:grid md:grid-cols-3 md:gap-8">
        {data.map((item, index) => (
          <Project
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
    </div>
  );
}
