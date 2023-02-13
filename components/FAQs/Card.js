import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const Card = () => {
  const [open, setOpen] = useState();
  return (
    <div
      className={`faqShadowCard my-5 bg-[#f5f5f5] p-2 md:p-5 rounded-[15px]`}
    >
      <div className="flex items-center justify-between">
        <p className="md:w-[80%]">
          Lorem ipsum dolor sit amet consectetur. Adipiscing sodales interdum
          sit tellus ultricies.
        </p>
        <div
          className=" w-[15%] duration-1000 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <a href="#">{open ? <FiMinus /> : <FiPlus />}</a>
        </div>
      </div>
      {open && (
        <div className={`duration-1000 `}>
          <p className="py-3 w-[80%] ml-auto p-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
            tempor incididunt ut labore et dolore magna aliqua. Ut eni Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
            tempor incididunt ut labore et dolore magna aliqua. Ut eni
          </p>
        </div>
      )}
    </div>
  );
};

export default Card;
