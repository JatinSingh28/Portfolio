import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import img from "../../assets/my-image.jpeg";
import video from "../../assets/gradient-video2.mp4";
import Timeline from "./Timeline.jsx";
// import Scene from "./Scene";
// import experienceData from "./experienceData";
import Up from "./Up";
import "./about.scss";

export default function About() {
  useEffect(() => {
    const targetPosition = 140;
    const duration = 500;

    const startTime = performance.now();
    const scrollStep = (timestamp) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easing = easeInOutQuad(progress);
      window.scrollTo(0, easing * targetPosition);

      if (elapsed < duration) {
        window.requestAnimationFrame(scrollStep);
      }
    };
    window.requestAnimationFrame(scrollStep);
  }, []);

  const easeInOutQuad = (t) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  return (
    <div className="h-max bg-black absolute">
      <Navbar />
      <div className="about-div w-screen">
        <div className="pb-36">
          <div className="relative w-full h-max mt-44 flex justify-center">
            <video className="bg-video absolute " autoPlay loop muted>
              <source src={video} type="video/mp4" />
            </video>
            <p className="about-heading-txt text-white text-5xl lg:text-9xl md:text-8xl md:flex-grow pb-4 lg:pl-80 md:pl-10">
            &nbsp;I&apos;m Jatin Singh&nbsp; &nbsp;&nbsp;
            </p>
          </div>
          <div className="img-about mt-16">
            <div className="flex flex-col justify-center items-center ">
              <img
                className="my-image rounded-t-full overflow-hidden object-cover"
                src={img}
                alt="my image"
              />

            </div>
            <div className="px-5 lg:px-0 md:px-8">
              <p className="text-3xl md:text-5xl mt-5 md:mt-10 leading-snug bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent">
              A seasoned ML Engineer, Full Stack Developer, and Competitive Programmer.
              </p>
              <p className="text-white text-2xl md:text-3xl mt-5 md:mt-8 leading-tight">
              A seasoned ML Engineer, Full Stack Developer, and Competitive Programmer.
              <br/>
              Equipped with a diverse skill set that spans the realms of machine learning, software development, and algorithmic prowess, thrive on turning complex challenges into efficient solutions. 
              </p>
            </div>
          </div>
        </div>

        <Timeline />
        {/* <Scene/> */}
      </div>

      <Footer />
      <Up/>
    </div>
  );
}
