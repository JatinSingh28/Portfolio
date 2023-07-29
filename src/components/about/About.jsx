import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import img from "../../assets/my-image.jpeg";
import video from "../../assets/gradient-video2.mp4";
import { Element, scroller } from "react-scroll";
import Timeline from "./Timeline.jsx";
// import experienceData from "./experienceData";
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
      <div className="pb-36">
        <div className="relative w-full h-max mt-44 flex justify-center">
          <video className="bg-video absolute " autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
          <p className="about-heading-txt text-white text-9xl flex-grow pb-4">
            I&apos;m Jatin Singh
          </p>
        </div>
        <div className="img-about mt-20">
          <div className="flex flex-col justify-center items-center ">
            <img
              className="my-image rounded-t-full overflow-hidden object-cover"
              src={img}
              alt="my image"
            />
            {/* <div className="h-12 w-96  bg-white">
            <p></p>
          </div> */}
          </div>
          <div>
            <p className="text-white text-7xl mt-10 leading-snug ">
              Heyoo, This is a brief intro about me
            </p>
            <p className="text-white text-5xl mt-10 leading-tight">
              This is more about me. Writing anything to fill up space for now.
            </p>
          </div>
        </div>
        <Timeline />
      </div>

      <Footer />
    </div>
  );
}
