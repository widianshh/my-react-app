import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = items.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative flex items-center justify-center w-full h-80 md:h-96 lg:h-[500px]">
      <button
        onClick={prevSlide}
        className="absolute -left-4 md:-left-6 text-white bg-[#B04E75] p-2 rounded-full"
        style={{ zIndex: 999 }}
      >
        <FaChevronLeft size={24} />
      </button>

      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-10 px-20"
          style={{
            transform: `translateX(-${(currentIndex / items.length) * 100}%)`,
            width: `${(items.length / itemsPerView) * 100}%`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-shrink-0 flex-col bg-[#99999926]  rounded-[40px] overflow-hidden pb-10 "
            >
              <img
                src={item.image}
                alt={item.type}
                className="w-[340px] h-[326px] object-cover"
              />
              <p className="mt-2 md:mt-4 text-base md:text-lg lg:text-xl text-white font-semibold text-center">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={nextSlide}
        className="absolute -right-2 md:-right-6 text-white bg-[#B04E75] p-2 rounded-full"
        style={{ zIndex: 999 }}
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
};

export default Carousel;
