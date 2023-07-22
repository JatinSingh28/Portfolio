import React from "react";
import Typed from "typed.js";

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
      loop:true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="div-container h-full grid grid-cols-2 place-items-center">
      <div className="hero-txt-container component text-white flex-col leading-10">
        <span className="hero-txt text-7xl leading-relaxed">Hi. I&apos;m Jatin&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <div className="static-text flex text-5xl ">
          <p>A</p> <span className="ms-3 text-purple-600" ref={el} />
        </div>
      </div>
      <div className="hero-display-container text-white"></div>
      <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>
    </div>
  );
}
