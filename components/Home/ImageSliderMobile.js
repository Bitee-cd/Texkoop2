import React from "react";
import { AnimatePresence, delay, motion } from "framer-motion";
import styles from "../../styles/Home.module.css";
import cargo from "../../public/images/texcargo.png";
import van from "../../public/images/texvan.png";
import bike from "../../public/images/texbike.png";
import Image from "next/image";

const ImageSliderMobile = ({ text }) => {
  return (
    <div className="flex justify-center">
      <AnimatePresence mode="wait">
        {text === 1 && (
          <motion.div
            key={text}
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            exit={{ x: -500 }}
            className="w-full h-full"
          >
            <Image
              src={cargo}
              alt="texkoop shipment"
              className="w-full h-full object-contain"
              placeholder="blur"
            />
          </motion.div>
        )}
        {text === 2 && (
          <motion.div
            key={text}
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            exit={{ x: -500 }}
            className={` h-full w-full `}
          >
            <Image
              className={` h-full w-full object-cover `}
              src={van}
              alt="texkoop vans"
              placeholder="blur"
            />
          </motion.div>
        )}
        {text === 3 && (
          <motion.div
            key={text}
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            exit={{ x: -500 }}
          >
            <Image
              src={bike}
              alt="texkoop bikes"
              className="h-full w-full object-cover"
              placeholder="blur"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageSliderMobile;
