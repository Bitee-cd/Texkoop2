import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../../styles/Home.module.css";

const ImageSlider = ({ text }) => {
  return (
    <div className="">
      {text === 1 && (
        <div className={`${styles.slideIn} h-full `}>
          <img
            src="/images/texcargo.png"
            alt="texkoop shipment"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      {text === 2 && (
        <AnimatePresence>
          <motion.div
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            exit={{ x: 500 }}
            className={` h-full `}
          >
            <img
              src="/images/texvan.png"
              alt="texkoop vans"
              className="w-full h-full object-cover "
            />
          </motion.div>
        </AnimatePresence>
      )}
      {text === 3 && (
        <div className={`${styles.slideIn} h-full `}>
          <div>
            <img
              src="/images/texbike.png"
              alt="texkoop bikes"
              className="w-[60%] h-full object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
