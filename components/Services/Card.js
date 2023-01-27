import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/Services.module.css";

const Card = ({ item }) => {
  return (
    <div
      className={`${styles.shadowCard} rounded-[15px] p-5 lg:p-10 lg:py-16 md:min-h-[400px] my-10 2xl:my-20 flex `}
    >
      <div
        className={`md:flex md:flex-row-reverse gap-10 gap-y-10 justify-between`}
      >
        <div className=" flex md:w-[50%] mb-5">
          <motion.img
            src={item.image}
            className={`${item.id === 4 && "w-[70%]"} h-full object-contain`}
            initial={{ x: 700 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="md:w-[50%]">
          <p className="h2-text text-pri_dark">{item.title}</p>
          <p className="p-text text-[#3B3C3C] mt-5 font-[500]">{item.text}</p>
          <button className="button3 mt-5">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
