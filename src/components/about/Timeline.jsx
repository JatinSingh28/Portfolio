import React, { useState, useEffect } from "react";
import "./about.scss";
// import timelineData from "./experienceData";

export default function Timeline({ timelineData }) {
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollX(window.scrollX);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="timeline-container mt-20 ">
      <div
        className="timeline"
        style={{ transform: `translateX(-${scrollX}px)` }}
      >
        {timelineData.map((item) => (
          <div key={item.id} className="timeline-item flex flex-col items-center w-56">
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <div className="timeline-dot"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
