import Image from "next/image";
import { Carousel } from "flowbite-react";
import React from "react";
import apparelbrands from "../assets/images/carousel/apparelbrands.png";
import creativeideas from "../assets/images/carousel/creativeideas.jpg";
import techpackdesigner from "../assets/images/carousel/techpackdesigner.png";

const HomePageCarousel = () => {
  return (
    <div style={{ height: "500px" }}>
      <Carousel pauseOnHover slideInterval={5000}>
        <Image src={apparelbrands} alt='apparel brands' />
        <Image src={creativeideas} alt='apparel brands' />
        <Image src={techpackdesigner} alt='apparel brands' />
      </Carousel>
    </div>
  );
};

export default HomePageCarousel;
