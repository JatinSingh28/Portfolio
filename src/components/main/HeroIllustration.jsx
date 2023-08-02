import React, { useRef, useState, useEffect } from "react";
import img from "../../assets/Website-hero-image1.png";

export default function HeroIllustration() {
//   useEffect(() => {
//     document.body.addEventListener("mousemove", eyeball);

//     return () => {
//       document.body.removeEventListener("mousemove", eyeball);
//     };
//   }, []);


//   function eyeball(event) {
//     const eye = document.querySelectorAll(".eye");
//     eye.forEach((eye) => {
//       const { left, top, width, height } = eye.getBoundingClientRect();
//       const x = left + width / 2;
//       const y = top + height / 2;
//       const radian = Math.atan2(event.pageX - x, event.pageY - y);
//       const rot = radian * (180 / Math.PI) * 1 + 0;
//       eye.style.transform = `rotate(${rot}deg)`;
//     });
//   }
  return (
    <div className="hero-illustration h-full w-full ">
      <div className="eye-container absolute bg-white h-44 w-64 my-52 mx-64">
        <div className="eye ml-12 mt-20 h-8 w-32"></div>
      </div>
      <img src={img} className="realtive" alt="Hero-Image" />
    </div>
  );
}
