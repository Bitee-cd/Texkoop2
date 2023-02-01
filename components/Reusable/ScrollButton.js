import React, { useState } from "react";
import { BsArrowUp } from "react-icons/bs";

const ScrollButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative flex flex-end ml-auto">
      <div
        className="h-[30px] duration-1000 scroll-smooth cursor-pointer"
        onClick={scrollToTop}
      >
        <BsArrowUp className="w-full" size="100%" />
      </div>
    </div>
  );
};

export default ScrollButton;
