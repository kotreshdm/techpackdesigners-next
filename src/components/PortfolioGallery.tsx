import React from "react";
import PortfolioItem from "./PortfolioItem";

const PortfolioGallery = ({ images, openModal }: any) => {
  return (
    <div id='portfolio' className='flex flex-wrap justify-between'>
      {/* {images.map((image: any, index: number) => (
        <PortfolioItem
          key={index}
          src={image.src}
          alt={image.alt}
          onClick={() => openModal(index)}
        />
      ))} */}
    </div>
  );
};

export default PortfolioGallery;
