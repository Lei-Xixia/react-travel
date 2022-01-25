import React from "react";
import styles from "./Carousel.module.css";
import { Image, Carousel as AntCarousel } from "antd";

import carouselImage1 from "../../assets/images/carouselImage1.jpeg";
import carouselImage2 from "../../assets/images/carouselImage2.jpeg";
import carouselImage3 from "../../assets/images/carouselImage3.jpeg";
import carouselImage4 from "../../assets/images/carouselImage4.jpeg";
import carouselImage5 from "../../assets/images/carouselImage5.jpeg";
import carouselImage6 from "../../assets/images/carouselImage6.jpeg";

export const Carousel: React.FC = () => {
  const images = [
    carouselImage1,
    carouselImage2,
    carouselImage3,
    carouselImage4,
    carouselImage5,
    carouselImage6,
  ];

  return (
    <AntCarousel autoplay className={styles.slider}>
      {images.map((image, i) => (
        <Image key={`images${i}`} src={image} height={250} />
      ))}
    </AntCarousel>
  );
};
