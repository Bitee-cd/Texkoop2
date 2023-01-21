import React from "react";
import { AnimatePresence, delay, motion } from "framer-motion";
import styles from "../../styles/Home.module.css";

const ImageSliderMobile = ({ text }) => {
  return (
    <div className="flex justify-center">
      <AnimatePresence mode="wait">
        {text === 1 && (
          <motion.img
            key={text}
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            exit={{ x: -500 }}
            src="/images/cargomobile.png"
            alt="texkoop shipment"
            className="w-full h-full object-contain"
          />
        )}
        {text === 2 && (
          <motion.img
            key={text}
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            exit={{ x: -500 }}
            className={` h-full w-full object-contain `}
            src="/images/vanmobile.png"
            alt="texkoop vans"
          />
        )}
        {text === 3 && (
          <motion.img
            key={text}
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            exit={{ x: -500 }}
            src="/images/texbike.png"
            alt="texkoop bikes"
            className=" h-full object-contain"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageSliderMobile;
