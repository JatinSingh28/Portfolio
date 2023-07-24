import React from "react";
import Typed from "typed.js";
import YouTube from "react-youtube";
import img from "../../assets/hero-img3.svg";
import ReactPlayer from 'react-player'

const videoURL =
  "https://drive.google.com/file/d/1TpTycAr81WYzZYpGMDKc7JSJXL-LuEqH/view?usp=sharing";

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

  // const opts = {
  //   height: "390",
  //   width: "640",
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 1,
  //   },
  // };

  return (
    <div className="div-container h-full grid grid-cols-2 place-items-center">
      <div className="hero-txt-container text-white flex-col leading-10">
        <div className="relative">
          {/* <iframe
            width="500"
            height="150"
            src={videoURL}
            title="Youtube Player"
            allowFullScreen
          /> */}
          {/* <ReactPlayer className="bg-video h-24 min-w-full absolute mt-5" url='https://youtu.be/3FnVhxP-AzA' /> */}
          {/* <YouTube videoId="3FnVhxP-AzA" opts={opts} onReady={this._onReady} /> */}
          <video
            className="bg-video h-24 min-w-full absolute mt-5"
            autoPlay
            loop
            muted
          >
            <source src="src\assets\gradient-video2.mp4" type="video/mp4" />
          </video>
          <p className="hero-txt min-w-full text-7xl leading-relaxed absoulte">
            Hi. I&apos;m Jatin&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
        </div>
        <div className=" flex text-5xl ">
          <p>A</p>{" "}
          <span className="dynamic-txt ms-3 text-purple-500" ref={el} />
        </div>
      </div>
      <div className="hero-display-container text-white">
        {/* <div className="hero-glow h-10 w-10 bg-white absolute"></div> */}
        <img className="-mt-16 hero-glow" src={img} alt="svg" />
      </div>
      <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>
    </div>
  );
}
