import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function CarouselComp({ images }) {
  const [imageSrc, setImageSrc] = useState([]);

  // useEffect(() => {
  //   const imageArray = [];
  //   images.map((item) => {
  //     import(item).then((newImage) => {
  //       imageArray.push(newImage.default);
  //       setImageSrc(imageArray);
  //     });
  //   });
  // }, [images]);

  return (
    <Carousel
      autoPlay
      interval={2500}
      infiniteLoop
      axis="vertical"
      verticalSwipe="natural"
      showIndicators
    >
      {imageSrc.map((item, index) => (
        <div key={index}>
          <img
            className="carousel-image"
            src={item}
            alt="project-image"
          />
          <p className="legend">Legend 1</p>
        </div>
      ))}
      {/* {images.map((item, index) => (
        <div key={index}>
          <img
            className="carousel-image"
            src={item}
            alt="project-image"
          />
          <p className="legend">Legend 1</p>
        </div>
      ))} */}
    </Carousel>
  );
}

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
