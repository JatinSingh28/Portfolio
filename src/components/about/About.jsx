import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./about.scss";

export default function About() {
  return (
    <div className="h-full bg-black">
      <Navbar />
      <div className="flex justify-center">
        <p className="text-white  text-9xl mt-44">I&apos;m Jatin</p>
      </div>
      <div className="img-about mt-28">
        <div className="flex flex-col justify-center ">
          <img
            className="h-96 w-96 rounded-t-full overflow-hidden"
            src="src\assets\background.jpg"
            alt="my image"
          />
          <div className="h-12 w-96  bg-white">
            <p></p>
          </div>
        </div>
        <div>
          <p className="text-white text-7xl mt-10 pr-10">
            Heyoo, This is a brief into about me
          </p>
          <p className="text-white text-7xl mt-10 pr-10">This is more of me </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
