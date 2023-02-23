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
    <div className="flex items-center   ml-auto">
      <div
        className="h-[30px] duration-1000 scroll-smooth cursor-pointer"
        onClick={scrollToTop}
      >
        <ArrowUp />
      </div>
    </div>
  );
};

export default ScrollButton;

export const ArrowUp = (props) => (
  <svg
    width={21}
    height={32}
    viewBox="0 0 21 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.6203 31.0756C10.327 31.0756 10.0457 30.959 9.83827 30.7516C9.63087 30.5442 9.51435 30.2629 9.51435 29.9696L9.51435 3.8848L2.55575 10.8456C2.34808 11.0533 2.06642 11.17 1.77274 11.17C1.47905 11.17 1.1974 11.0533 0.989729 10.8456C0.782062 10.638 0.665396 10.3563 0.665396 10.0626C0.665396 9.76892 0.782063 9.48727 0.989729 9.2796L9.83729 0.432044C9.94002 0.329051 10.0621 0.247338 10.1964 0.191585C10.3308 0.135829 10.4748 0.107131 10.6203 0.107131C10.7658 0.107131 10.9098 0.135829 11.0442 0.191585C11.1785 0.247338 11.3006 0.329051 11.4033 0.432044L20.2509 9.2796C20.4585 9.48727 20.5752 9.76893 20.5752 10.0626C20.5752 10.3563 20.4585 10.638 20.2509 10.8456C20.0432 11.0533 19.7615 11.17 19.4679 11.17C19.1742 11.17 18.8925 11.0533 18.6848 10.8456L11.7262 3.8848L11.7262 29.9696C11.7262 30.2629 11.6097 30.5442 11.4023 30.7516C11.1949 30.959 10.9136 31.0756 10.6203 31.0756Z"
      fill="white"
    />
  </svg>
);
