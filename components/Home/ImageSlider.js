import React from "react";
import { AnimatePresence, delay, motion } from "framer-motion";
import styles from "../../styles/Home.module.css";

const ImageSlider = ({ text }) => {
  return (
    <div className="">
      <AnimatePresence mode="wait">
        {text === 1 && (
          <motion.img
            key={text}
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            exit={{ x: 500 }}
            src="/images/texcargo.png"
            alt="texkoop shipment"
            className="w-full h-full object-cover"
          />
        )}
        {text === 2 && (
          <motion.img
            key={text}
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            exit={{ x: 500 }}
            className={` h-full w-full object-cover `}
            src="/images/texvan.png"
            alt="texkoop vans"
          />
        )}
        {text === 3 && (
          <motion.img
            key={text}
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            exit={{ x: 500 }}
            src="/images/texbike.png"
            alt="texkoop bikes"
            className="w-[60%] h-full object-cover"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageSlider;
