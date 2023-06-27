import React from "react";
import Card from "./Card";

import { MdChevronRight, MdChevronLeft } from "react-icons/md";

const HorizontalScroll = ({ data, bodyPart, setBodyPart }) => {
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 700;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 700;
  };

  return (
    <div className="relative flex items-center md:px-6">
      <MdChevronLeft
        className="opacity-50 cursor-pointer hover:opacity-80 "
        onClick={slideLeft}
        size={40}
      />
      <div
        id="slider"
        className="w-full h-full flex gap-4 md:gap-10 overflow-x-scroll scroll whitespace-nowrap scroll-smooth"
      >
        {data.map((item) => (
          <div
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
          >
            <Card item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
          </div>
        ))}
      </div>
      <MdChevronRight
        className="opacity-50 cursor-pointer hover:opacity-80"
        onClick={slideRight}
        size={40}
      />
    </div>
  );
};

export default HorizontalScroll;
