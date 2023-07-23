import React from "react";
import Typed from "typed.js";
import img from "../../assets/hero-img3.svg";
// import img from "src/assets/hero-img.jpg"

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
    <div className="div-container h-full grid grid-cols-2 place-items-center">
      <video
        className="bg-video absolute top-0 left-0 h-screen w-screen -z-10"
        autoPlay
        loop
        muted
      >
        <source src="src\assets\gradient-video.mov" type="video/mp4" />
      </video>
      <div className="hero-txt-container component text-white flex-col leading-10">
        <p className=" text-7xl leading-relaxed">
          Hi. I&apos;m Jatin&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
        <div className=" flex text-5xl ">
          <p>A</p> <span className="dynamic-txt ms-3 text-purple-500" ref={el} />
        </div>
      </div>
      <div className="hero-display-container text-white">
        {/* <div className="hero-glow h-10 w-10 bg-white absolute"></div> */}
        <img className="-mt-16" src={img} alt="svg" />
      </div>
      <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>
    </div>
  );
}
