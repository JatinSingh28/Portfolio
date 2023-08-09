import React, { useEffect, useState } from "react";
import img from "../../assets/up-arrow-button.png";

export default function Up() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const pixels = window.scrollY;
    setIsVisible(pixels > window.innerHeight / 2);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    const scrollStep = -window.scrollY / (400 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  }

  return (
    <div className="fixed h-10 w-10 bottom-5 right-5 ">
      <img
        src={img}
        className="h-12 w-12 cursor-pointer"
        style={{ visibility: isVisible ? "visible" : "hidden" }}
        onClick={scrollToTop}
        alt="up-btn"
      />
    </div>
  );
}
