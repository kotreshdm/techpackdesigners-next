"use client";
import React, { useState } from "react";
import { FcSearch } from "react-icons/fc";
import { FiZoomIn } from "react-icons/fi";
const PortfolioItem = ({ src, alt, onClick }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='relative w-1/4 p-3'>
      <img
        src={src}
        alt={alt}
        onClick={onClick}
        className={`w-full h-auto ${isHovered ? "opacity-30" : "opacity-100"}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      {isHovered && (
        <div
          onMouseEnter={() => setIsHovered(true)}
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <FiZoomIn
            size={70}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
      )}
    </div>
  );
};

export default PortfolioItem;
