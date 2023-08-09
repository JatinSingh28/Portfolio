import React from "react";
import Typed from "typed.js";
// import img from "../../assets/hero-img3.svg";
import img from "../../assets/Website-hero1-image3.png"
import video from "../../assets/gradient-video2.mp4"
import HeroIllustration from "./HeroIllustration";

export default function Content() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Competitve Programmer",
        "ML Engineer",
        "Frontend Developer",
        "Backend Developer",
      ],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="div-container h-full grid grid-cols-2 place-items-center py-60 md:py-0">
      <div className="hero-txt-container text-white flex-col leading-10">
        <div className="relative overflow-hidden">
          <video
            className="bg-video h-8 md:h-36  w-40 md:min-w-full absolute mt-1 "
            autoPlay
            loop
            muted
          >
            <source src={video} type="video/mp4" />
          </video>
          <p className="hero-txt min-w-full text-2xl md:text-5xl lg:text-7xl leading-relaxed absoulte">
            Hi. I&apos;m Jatin&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
        </div>
        <div className=" flex text-xl md:text-4xl lg:text-5xl h-14 md:h-20 lg:h-16">
          <p>A</p>{" "}
          <span className="dynamic-txt ms-3 bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent" ref={el} />
        </div>
      </div>
      <div className="hero-display-container text-white">
        {/* <div className="hero-glow h-10 w-10 bg-white absolute"></div> */}
        {/* <img className="-mt-16 hero-glow" src={img} alt="svg" /> */}
        {/* <HeroIllustration/> */}
        <img src={img} alt="hero-img"/>
      </div>
      <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>
    </div>
  );
}
