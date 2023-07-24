import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function CarouselComp({ images }) {
  return (
    <Carousel autoPlay interval={2500} infiniteLoop axis="vertical" verticalSwipe="natural" showIndicators>
      {images.map((item, index) => (
        <div key={index}>
          <img key={index} className="carousel-image" src={item} alt="project-image" />
          <p className="legend">Legend 1</p>
        </div>
      ))}
    </Carousel>
  );
}

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
